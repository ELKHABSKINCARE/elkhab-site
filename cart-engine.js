(function(){

const SHOPIFY_DOMAIN = 'fyjy1d-t8.myshopify.com';
const STOREFRONT_TOKEN = 'd7b9bf173e3b947dc2bb10f375e14185';
const API_VERSION = '2026-07';
const ENDPOINT = 'https://' + SHOPIFY_DOMAIN + '/api/' + API_VERSION + '/graphql.json';

// =====================================================================
// ADRESSES DES SITES ELKHA.B
// C'est le SEUL endroit où les adresses sont écrites. Les autres fichiers
// (diagnostic, recherche, boutons Fermer...) viennent les lire ici.
// =====================================================================
const EB_SITES = {
  accueil:    'https://elkhab.com/',
  bloom:      'https://bloom.elkhab.com/',
  balance:    'https://balance.elkhab.com/',
  journal:    'https://journal.elkhab.com/',
  experience: 'https://experience.elkhab.com/',
  soins:      'https://soins.elkhab.com/',
  avis:       'https://avis.elkhab.com/'
};
window.EB_SITES = EB_SITES;

// Reconnaît un site ELKHA.B à partir d'un nom de domaine
// (nouvelles adresses, et anciennes en carrd.co par sécurité)
function ebSiteFromHost(host){
  host = (host || '').toLowerCase();
  if(host === 'elkhab.com' || host === 'www.elkhab.com') return 'accueil';
  let m = host.match(/^(bloom|balance|journal|experience|soins|avis)\.elkhab\.com$/);
  if(m) return m[1];
  m = host.match(/^elkhab-(accueil|bloom|balance|journal|experience|soins)\.carrd\.co$/);
  if(m) return m[1];
  return null;
}
window.ebSiteFromHost = ebSiteFromHost;

// Nom du site actuel (accueil, bloom, balance, journal, experience ou soins)
const EB_SITE_NAME = ebSiteFromHost(window.location.hostname);
window.EB_SITE_NAME = EB_SITE_NAME;

// =====================================================================
// INFORMATIONS TRANSPORTÉES DANS LES LIENS
// On les mémorise au chargement, puis on les efface de la barre d'adresse
// pour qu'elle reste propre. Les autres fichiers les lisent avec ebGetParam().
// =====================================================================
const EB_PARAM_KEYS = ['cart','connected','scrollTo','origin','pos','from','back','s','h','openDiag'];
// Celles qu'on garde en mémoire si la cliente actualise la page (pour que le bouton Fermer marche toujours)
const EB_RETURN_KEYS = ['origin','pos','from','back','s','h'];

const EB_PARAMS = (function(){
  const current = new URLSearchParams(window.location.search);
  const snapshot = new URLSearchParams();
  let found = false;
  EB_PARAM_KEYS.forEach(function(k){
    if(current.has(k)){ snapshot.set(k, current.get(k)); found = true; }
  });
  if(found) return snapshot;
  // Page actualisée : on récupère les informations de retour gardées en mémoire
  const st = history.state;
  if(st && typeof st === 'object' && st.ebParams){
    return new URLSearchParams(st.ebParams);
  }
  return snapshot;
})();
window.ebGetParam = function(name){ return EB_PARAMS.get(name); };

let cartId = sessionStorage.getItem('elkhab_cart_id') || null;

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

// =====================================================================
// RETOUR "EXACTEMENT LÀ OÙ ELLE ÉTAIT" — fonctionne désormais sur les 6 sites
// =====================================================================
(function(){
  const raw = new URLSearchParams(window.location.search).get('scrollTo');
  if(raw === null) return;
  const targetY = parseInt(raw, 10);
  if(isNaN(targetY) || targetY <= 0) return;

  const root = document.documentElement;
  // On cache la page immédiatement pour éviter l'effet "saut" à l'écran
  root.style.visibility = 'hidden';
  if('scrollRestoration' in history){ history.scrollRestoration = 'manual'; }

  let loaded = document.readyState === 'complete';
  window.addEventListener('load', function(){ loaded = true; });

  let userActed = false;
  ['touchstart','wheel','mousedown','keydown'].forEach(function(evt){
    window.addEventListener(evt, function(){ userActed = true; }, { passive: true, once: true });
  });

  function apply(){
    if(!userActed && Math.abs(window.scrollY - targetY) > 2){
      window.scrollTo({ top: targetY, behavior: 'instant' });
    }
  }

  let revealed = false;
  function reveal(){
    if(revealed) return;
    revealed = true;
    apply();
    root.style.visibility = 'visible';
    if('scrollRestoration' in history){ history.scrollRestoration = 'auto'; }
  }

  // Tant que la page est cachée : on replace la page toutes les 50 ms,
  // et on ne l'affiche que lorsque tout est chargé ET que la position ne bouge plus
  const start = Date.now();
  let stableCount = 0;
  let lastHeight = 0;
  const timer = setInterval(function(){
    apply();
    const h = document.documentElement.scrollHeight;
    const onTarget = Math.abs(window.scrollY - targetY) <= 2;
    stableCount = (onTarget && h === lastHeight) ? stableCount + 1 : 0;
    lastHeight = h;
    const elapsed = Date.now() - start;
    if((loaded && stableCount >= 4) || elapsed > 2500){
      clearInterval(timer);
      reveal();
      guard();
    }
  }, 50);

  // Une fois la page affichée : pendant encore 2 secondes, si quelque chose
  // (une image, une animation) décale la page sans que la cliente ait touché à rien, on la remet en place
  function guard(){
    const guardStart = Date.now();
    const g = setInterval(function(){
      if(userActed || Date.now() - guardStart > 2000){ clearInterval(g); return; }
      apply();
    }, 100);
  }

  // Filet de sécurité : on ne laisse jamais la page cachée indéfiniment
  setTimeout(reveal, 3000);
})();

// Une fois la page entièrement chargée (tous les autres codes ont lu ce dont ils avaient besoin),
// on efface les informations techniques de la barre d'adresse
window.addEventListener('load', function(){
  try {
    const url = new URL(window.location.href);
    let changed = false;
    EB_PARAM_KEYS.forEach(function(k){
      if(url.searchParams.has(k)){ url.searchParams.delete(k); changed = true; }
    });
    if(!changed) return;
    const keep = new URLSearchParams();
    EB_RETURN_KEYS.forEach(function(k){ if(EB_PARAMS.has(k)) keep.set(k, EB_PARAMS.get(k)); });
    const st = history.state;
    const baseState = (st && typeof st === 'object') ? st : {};
    const newState = Object.assign({}, baseState, { ebParams: keep.toString() });
    history.replaceState(newState, '', url.pathname + url.search + url.hash);
  } catch(err){
    console.error('ELKHA.B — nettoyage de l\'adresse impossible', err);
  }
});

// =====================================================================
// NAVIGATION ENTRE LES SITES
// =====================================================================

// Intercepte tout clic vers un autre site ELKHA.B pour y transporter le panier,
// le statut "connectée", ET la position de scroll à restaurer
// (fiches Soins, articles du Journal, pages légales et contact de l'Accueil...)
document.addEventListener('click', function(e){
  const link = e.target.closest('a[href]');
  if(!link) return;
  // Ouverture dans un nouvel onglet : on laisse faire le navigateur
  if(e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  if(link.target && link.target !== '_self') return;

  const href = link.getAttribute('href');
  if(!href || !/^https?:\/\//i.test(href)) return;

  let url;
  try { url = new URL(href); } catch(err){ return; }
  const targetSite = ebSiteFromHost(url.hostname);
  if(!targetSite) return;

  const isConnected = sessionStorage.getItem('elkhab_connected') === '1';
  // Une "fiche" = un lien vers Soins, vers la page d'avis, ou vers une section précise (#...)
  const goingToFiche = targetSite === 'soins' || targetSite === 'avis' || !!url.hash;
  const canTagOrigin = goingToFiche && !!EB_SITE_NAME;

  if(!cartId && !isConnected && !canTagOrigin) return;

  e.preventDefault();
  if(cartId){ url.searchParams.set('cart', cartId); }
  if(isConnected){ url.searchParams.set('connected', '1'); }
  if(canTagOrigin){
    url.searchParams.set('origin', EB_SITE_NAME);
    url.searchParams.set('pos', Math.round(window.scrollY));
    // Section où se trouve la cliente (ex. un article du Journal), pour l'y ramener exactement
    const currentHash = window.location.hash.replace('#','');
    if(currentHash){ url.searchParams.set('h', currentHash); }
  }
  window.location.href = url.toString();
}, true);

// Outil utilisé par les boutons Fermer (et autres) pour aller vers un site ELKHA.B
// en emportant toujours le panier. Exemple : ebNavigate('bloom', {scrollTo: 1200})
window.ebNavigate = function(siteName, params, hash){
  const url = new URL(EB_SITES[siteName] || EB_SITES.accueil);
  if(params){
    Object.keys(params).forEach(function(k){
      const v = params[k];
      if(v !== null && v !== undefined && v !== '') url.searchParams.set(k, v);
    });
  }
  if(cartId){ url.searchParams.set('cart', cartId); }
  if(sessionStorage.getItem('elkhab_connected') === '1'){ url.searchParams.set('connected', '1'); }
  if(hash){ url.hash = hash; }
  window.location.href = url.toString();
};

// =====================================================================
// PANIER (inchangé)
// =====================================================================

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
    if(m.title && m.title !== 'Default Title' && m.title !== 'Default'){
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
      const originalText = checkoutBtn.textContent;
      checkoutBtn.textContent = 'CHARGEMENT...';
      checkoutBtn.disabled = true;
      const cart = await ebCartFetch();
      if(cart && cart.checkoutUrl){
        window.location.href = cart.checkoutUrl;
      } else {
        alert("Un souci est survenu avec votre panier (un produit n'est peut-être plus disponible). Merci de retirer puis rajouter vos articles, ou de nous contacter si le problème persiste.");
        checkoutBtn.textContent = originalText;
        checkoutBtn.disabled = false;
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

/* ─── Pages légales en panneau (CGV, mentions légales…) : chargées sur tous les sites ─── */
(function(){
  if(window.ebLegalCharge || document.querySelector('script[data-eb-legal]')) return;
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/ELKHABSKINCARE/elkhab-site@main/pages-legales.js?v=1';
  s.async = true;
  s.setAttribute('data-eb-legal', '1');
  (document.head || document.documentElement).appendChild(s);
})();

/* ─── Espace ambassadrice / collaborations (lien « #collaboration ») : chargé sur tous les sites ─── */
(function(){
  if(window.ebCollabCharge || document.querySelector('script[data-eb-collab]')) return;
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/ELKHABSKINCARE/elkhab-site@main/collab-engine.js?v=1';
  s.async = true;
  s.setAttribute('data-eb-collab', '1');
  (document.head || document.documentElement).appendChild(s);
})();
