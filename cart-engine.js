(function(){

const SHOPIFY_DOMAIN = 'fyjy1d-t8.myshopify.com';
const STOREFRONT_TOKEN = 'd7b9bf173e3b947dc2bb10f375e14185';
const API_VERSION = '2026-07';
const ENDPOINT = 'https://' + SHOPIFY_DOMAIN + '/api/' + API_VERSION + '/graphql.json';

let cartId = sessionStorage.getItem('elkhab_cart_id') || null;

// Synchronisation du panier ET du statut "connecté" entre les sites ELKHA.B
const EB_SITES_PATTERN = /elkhab-(accueil|bloom|balance|journal|experience|soins)\.carrd\.co/;

// Déduit automatiquement le nom du site actuel depuis son adresse (plus besoin de le déclarer à la main sur chaque page)
const EB_SITE_NAME = (function(){
  const m = window.location.hostname.match(/elkhab-(accueil|bloom|balance|journal|experience|soins)\.carrd\.co/);
  return m ? m[1] : null;
})();

(function(){
  const params = new URLSearchParams(window.location.search);
  const urlCart = params.get('cart');
  if(urlCart){
    cartId = urlCart;
    sessionStorage.setItem('elkhab_cart_id', cartId);
  }
  if(params.get('connected') === '1'){
    sessionStorage.setItem('elkhab_connected', '1');
  }
})();

// Intercepte tout clic vers un autre site ELKHA.B pour y transporter le panier,
// le statut "connectée", ET la position de scroll à restaurer (fiches produits / articles)
document.addEventListener('click', function(e){
  const link = e.target.closest('a[href]');
  if(!link) return;
  const href = link.getAttribute('href');
  if(!href || !EB_SITES_PATTERN.test(href)) return;

  const isConnected = sessionStorage.getItem('elkhab_connected') === '1';
  const goingToFiche = /elkhab-(soins|journal)\.carrd\.co/.test(href);
  const canTagOrigin = goingToFiche && !!EB_SITE_NAME;

  if(!cartId && !isConnected && !canTagOrigin) return;

  e.preventDefault();
  const url = new URL(href, window.location.href);
  if(cartId){ url.searchParams.set('cart', cartId); }
  if(isConnected){ url.searchParams.set('connected', '1'); }
  if(canTagOrigin){
    url.searchParams.set('origin', EB_SITE_NAME);
    url.searchParams.set('pos', window.scrollY);
  }
  window.location.href = url.toString();
}, true);

function ebUpdateProfileIcon(){
  const profileBtn = document.getElementById('ebProfileButton');
  if(!profileBtn) return;
  const isConnected = sessionStorage.getItem('elkhab_connected') === '1';
  profileBtn.classList.toggle('eb-profile-active', isConnected);
}

function ebGoToAccount(){
  sessionStorage.setItem('elkhab_connected', '1');
  ebUpdateProfileIcon();
  window.location.href = 'https://shopify.com/101686837593/account';
}
window.ebGoToAccount = ebGoToAccount;

async function shopifyFetch(query, variables){
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN
    },
    body: JSON.stringify({ query, variables })
  });
  return res.json();
}

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  cost { subtotalAmount { amount currencyCode } }
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            price { amount currencyCode }
            product { title }
          }
        }
      }
    }
  }
`;

async function ebCartCreate(variantId, quantity){
  const mutation = `mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) { cart { ${CART_FIELDS} } userErrors { field message } }
  }`;
  const result = await shopifyFetch(mutation, {
    input: { lines: [{ quantity, merchandiseId: 'gid://shopify/ProductVariant/' + variantId }] }
  });
  const userErrors = result && result.data && result.data.cartCreate && result.data.cartCreate.userErrors;
  if(userErrors && userErrors.length){
    console.error('ELKHA.B panier — Shopify a refusé la création (variant '+variantId+') :', userErrors);
  }
  const cart = result && result.data && result.data.cartCreate && result.data.cartCreate.cart;
  if(!cart){
    console.error('ELKHA.B panier — échec création de panier', result);
  }
  return cart;
}

async function ebCartAddLine(variantId, quantity){
  const mutation = `mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } userErrors { field message } }
  }`;
  const result = await shopifyFetch(mutation, {
    cartId: cartId,
    lines: [{ quantity, merchandiseId: 'gid://shopify/ProductVariant/' + variantId }]
  });

  const userErrors = result && result.data && result.data.cartLinesAdd && result.data.cartLinesAdd.userErrors;
  if(userErrors && userErrors.length){
    console.error('ELKHA.B panier — Shopify a refusé l\'ajout (variant '+variantId+') :', userErrors);
  }

  const cart = result && result.data && result.data.cartLinesAdd && result.data.cartLinesAdd.cart;

  if(!cart){
    console.error('ELKHA.B panier — échec ajout à un panier existant, on en recrée un', result);
    // Le panier stocké n'existe plus côté Shopify (expiré ou invalide) : on en recrée un
    cartId = null;
    sessionStorage.removeItem('elkhab_cart_id');
    return ebCartCreate(variantId, quantity);
  }
  return cart;
}

async function ebCartRemoveLine(lineId){
  const mutation = `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { ${CART_FIELDS} } userErrors { message } }
  }`;
  const result = await shopifyFetch(mutation, { cartId: cartId, lineIds: [lineId] });
  return result.data && result.data.cartLinesRemove && result.data.cartLinesRemove.cart;
}

async function ebCartUpdateLineQuantity(lineId, newQuantity){
  const mutation = `mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } userErrors { message } }
  }`;
  const result = await shopifyFetch(mutation, { cartId: cartId, lines: [{ id: lineId, quantity: newQuantity }] });
  return result.data && result.data.cartLinesUpdate && result.data.cartLinesUpdate.cart;
}

async function ebCartFetch(){
  if(!cartId) return null;
  const query = `query cart($id: ID!) { cart(id: $id) { ${CART_FIELDS} } }`;
  const result = await shopifyFetch(query, { id: cartId });
  return result.data && result.data.cart;
}

async function ebCartAddItem(variantId, quantity){
  quantity = quantity || 1;
  try {
    let cart;
    if(cartId){
      cart = await ebCartAddLine(variantId, quantity);
    } else {
      cart = await ebCartCreate(variantId, quantity);
    }
    if(cart){
      cartId = cart.id;
      sessionStorage.setItem('elkhab_cart_id', cartId);
      ebRenderCart(cart);
    } else {
      console.error('ELKHA.B panier — aucun panier retourné pour variantId', variantId);
    }
    return cart;
  } catch(err){
    console.error('ELKHA.B panier — erreur inattendue', err);
    return null;
  }
}

function ebFormatPrice(amount){
  return parseFloat(amount).toFixed(2).replace('.', ',') + '€';
}

function ebRenderCart(cart, attemptsLeft){
  attemptsLeft = attemptsLeft === undefined ? 15 : attemptsLeft;
  const countEl = document.getElementById('ebCartCount');
  const itemsEl = document.getElementById('ebCartItems');
  const totalEl = document.getElementById('ebCartTotal');
  if(!countEl || !itemsEl || !totalEl){
    if(attemptsLeft <= 0){
      console.error('ELKHA.B panier — éléments du panier introuvables sur cette page après plusieurs tentatives');
      return;
    }
    // Le menu n'est peut-être pas encore chargé (Embed placé plus bas sur la page) :
    // on réessaie un peu plus tard au lieu d'abandonner silencieusement
    setTimeout(function(){ ebRenderCart(cart, attemptsLeft - 1); }, 300);
    return;
  }

  const qty = cart ? cart.totalQuantity : 0;
  countEl.textContent = qty;
  countEl.style.display = qty > 0 ? 'flex' : 'none';

  if(!cart || cart.lines.edges.length === 0){
    itemsEl.innerHTML = '<div class="eb-cart-empty">Votre panier est vide.</div>';
    totalEl.textContent = ebFormatPrice(0);
    return;
  }

  let html = '';
  cart.lines.edges.forEach(function(edge){
    const line = edge.node;
    const m = line.merchandise;
    html += '<div class="eb-cart-item">';
    html += '<div class="eb-cart-item-title">' + m.product.title + '</div>';
    if(m.title && m.title !== 'Default Title'){
      html += '<div class="eb-cart-item-variant">' + m.title + '</div>';
    }
    html += '<div class="eb-cart-item-bottom">';
    html += '<span class="eb-cart-item-price">Qté ' + line.quantity + ' — ' + ebFormatPrice(m.price.amount * line.quantity) + '</span>';
    html += '<button class="eb-cart-remove" onclick="ebCartRemoveClick(\'' + line.id + '\', ' + line.quantity + ')" aria-label="Retirer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M9 7V4h6v3"></path><path d="M6 7l1 13h10l1-13"></path></svg></button>';
    html += '</div></div>';
  });
  itemsEl.innerHTML = html;
  totalEl.textContent = ebFormatPrice(cart.cost.subtotalAmount.amount);
}

window.ebCartRemoveClick = async function(lineId, currentQuantity){
  const cart = currentQuantity > 1
    ? await ebCartUpdateLineQuantity(lineId, currentQuantity - 1)
    : await ebCartRemoveLine(lineId);
  if(cart){ ebRenderCart(cart); }
};

window.ebCartAddItem = ebCartAddItem;

function ebWaitForCartUI(callback, attemptsLeft){
  attemptsLeft = attemptsLeft === undefined ? 25 : attemptsLeft;
  const cartButton = document.getElementById('ebCartButton');
  if(cartButton || attemptsLeft <= 0){
    callback();
  } else {
    setTimeout(function(){ ebWaitForCartUI(callback, attemptsLeft - 1); }, 200);
  }
}

// Ouverture/fermeture du panneau panier
document.addEventListener('DOMContentLoaded', function(){
  ebWaitForCartUI(function(){

  const cartButton = document.getElementById('ebCartButton');
  const cartPanel = document.getElementById('ebCartPanel');
  const cartBackdrop = document.getElementById('ebCartBackdrop');
  const cartClose = document.getElementById('ebCartClose');
  const checkoutBtn = document.getElementById('ebCheckout');

  function openCart(){
    cartPanel.classList.add('open');
    cartBackdrop.classList.add('open');
  }
  function closeCart(){
    cartPanel.classList.remove('open');
    cartBackdrop.classList.remove('open');
  }

  if(cartButton) cartButton.addEventListener('click', openCart);
  if(cartBackdrop) cartBackdrop.addEventListener('click', closeCart);
  if(cartClose) cartClose.addEventListener('click', closeCart);

  if(checkoutBtn){
    checkoutBtn.addEventListener('click', async function(){
      const cart = await ebCartFetch();
      if(cart && cart.checkoutUrl){
        window.location.href = cart.checkoutUrl;
      }
    });
  }

  // Au chargement, si un panier existe déjà (cliente revenue plus tard), on le récupère
  if(cartId){
    ebCartFetch().then(function(cart){
      if(cart) ebRenderCart(cart);
    });
  }

  ebUpdateProfileIcon();

  });
});

// La délégation de clic sur les boutons "Ajouter au panier" ne dépend pas du
// chargement du menu : elle fonctionne dès que la page a commencé à se charger
document.addEventListener('click', function(e){
  const btn = e.target.closest('.eb-cart-add-btn');
  if(!btn) return;
  const variantId = btn.dataset.variantId;
  if(!variantId) return;

  const originalHTML = btn.innerHTML;
  ebCartAddItem(variantId, 1).then(function(cart){
    if(cart){
      const priceSpan = btn.querySelector('.eb-produit-add-price');
      const priceText = priceSpan ? priceSpan.outerHTML : '';
      btn.innerHTML = 'AJOUTÉ ✓ ' + priceText;
      setTimeout(function(){ btn.innerHTML = originalHTML; }, 1500);
    }
  });
});

})();
