(function(){

const SHOPIFY_DOMAIN = 'fyjy1d-t8.myshopify.com';
const STOREFRONT_TOKEN = 'd7b9bf173e3b947dc2bb10f375e14185';
const API_VERSION = '2026-07';
const ENDPOINT = 'https://' + SHOPIFY_DOMAIN + '/api/' + API_VERSION + '/graphql.json';

let cartId = localStorage.getItem('elkhab_cart_id') || null;

// Synchronisation du panier entre les sites ELKHA.B
const EB_SITES_PATTERN = /elkhab-(accueil|bloom|balance|journal|experience|soins)\.carrd\.co/;

(function(){
  const params = new URLSearchParams(window.location.search);
  const urlCart = params.get('cart');
  if(urlCart){
    cartId = urlCart;
    localStorage.setItem('elkhab_cart_id', cartId);
  }
})();

// Intercepte tout clic vers un autre site ELKHA.B pour y transporter le panier
document.addEventListener('click', function(e){
  const link = e.target.closest('a[href]');
  if(!link) return;
  const href = link.getAttribute('href');
  if(!href || !EB_SITES_PATTERN.test(href)) return;
  if(!cartId) return;
  e.preventDefault();
  const url = new URL(href, window.location.href);
  url.searchParams.set('cart', cartId);
  window.location.href = url.toString();
}, true);

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
    cartCreate(input: $input) { cart { ${CART_FIELDS} } userErrors { message } }
  }`;
  const result = await shopifyFetch(mutation, {
    input: { lines: [{ quantity, merchandiseId: 'gid://shopify/ProductVariant/' + variantId }] }
  });
  return result.data && result.data.cartCreate && result.data.cartCreate.cart;
}

async function ebCartAddLine(variantId, quantity){
  const mutation = `mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } userErrors { message } }
  }`;
  const result = await shopifyFetch(mutation, {
    cartId: cartId,
    lines: [{ quantity, merchandiseId: 'gid://shopify/ProductVariant/' + variantId }]
  });
  if(result.errors || !result.data.cartLinesAdd.cart){
    // Le panier stocké n'existe plus côté Shopify (expiré) : on en recrée un
    cartId = null;
    localStorage.removeItem('elkhab_cart_id');
    return ebCartCreate(variantId, quantity);
  }
  return result.data.cartLinesAdd.cart;
}

async function ebCartRemoveLine(lineId){
  const mutation = `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { ${CART_FIELDS} } userErrors { message } }
  }`;
  const result = await shopifyFetch(mutation, { cartId: cartId, lineIds: [lineId] });
  return result.data && result.data.cartLinesRemove && result.data.cartLinesRemove.cart;
}

async function ebCartFetch(){
  if(!cartId) return null;
  const query = `query cart($id: ID!) { cart(id: $id) { ${CART_FIELDS} } }`;
  const result = await shopifyFetch(query, { id: cartId });
  return result.data && result.data.cart;
}

async function ebCartAddItem(variantId, quantity){
  quantity = quantity || 1;
  let cart;
  if(cartId){
    cart = await ebCartAddLine(variantId, quantity);
  } else {
    cart = await ebCartCreate(variantId, quantity);
  }
  if(cart){
    cartId = cart.id;
    localStorage.setItem('elkhab_cart_id', cartId);
    ebRenderCart(cart);
  }
  return cart;
}

function ebFormatPrice(amount){
  return parseFloat(amount).toFixed(2).replace('.', ',') + '€';
}

function ebRenderCart(cart){
  const countEl = document.getElementById('ebCartCount');
  const itemsEl = document.getElementById('ebCartItems');
  const totalEl = document.getElementById('ebCartTotal');
  if(!countEl || !itemsEl || !totalEl) return;

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
    html += '<button class="eb-cart-remove" onclick="ebCartRemoveClick(\'' + line.id + '\')">Retirer</button>';
    html += '</div></div>';
  });
  itemsEl.innerHTML = html;
  totalEl.textContent = ebFormatPrice(cart.cost.subtotalAmount.amount);
}

window.ebCartRemoveClick = async function(lineId){
  const cart = await ebCartRemoveLine(lineId);
  if(cart){ ebRenderCart(cart); }
};

window.ebCartAddItem = ebCartAddItem;

// Ouverture/fermeture du panneau panier
document.addEventListener('DOMContentLoaded', function(){
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

  // Délégation d'événements : tout bouton "Ajouter au panier" doit juste avoir
  // la classe eb-cart-add-btn + un attribut data-variant-id (mis à jour dynamiquement
  // si le produit a des variantes)
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

  // Au chargement, si un panier existe déjà (cliente revenue plus tard), on le récupère
  if(cartId){
    ebCartFetch().then(function(cart){
      if(cart) ebRenderCart(cart);
    });
  }
});

})();
