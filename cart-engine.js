/* © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite. */
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

// Le panier est gardé 7 jours sur l'appareil (téléphone ou ordinateur), sur tous les sites elkhab.com,
// même après la fermeture du navigateur. Chaque visite relance les 7 jours.
const EB_CART_JOURS = 7;
function ebCartLireCookie(){
  const m = document.cookie.match(/(?:^|; )elkhab_cart=([^;]*)/);
  return m ? decodeURIComponent(m[1]) : null;
}
function ebCartDomaine(){ return /(^|\.)elkhab\.com$/.test(location.hostname) ? '; domain=.elkhab.com' : ''; }
function ebCartMemoriser(id){
  if(!id) return;
  try { sessionStorage.setItem('elkhab_cart_id', id); } catch(e){}
  document.cookie = 'elkhab_cart=' + encodeURIComponent(id) + '; max-age=' + (EB_CART_JOURS * 86400) + '; path=/' + ebCartDomaine() + '; SameSite=Lax';
}
function ebCartOublier(){
  try { sessionStorage.removeItem('elkhab_cart_id'); } catch(e){}
  document.cookie = 'elkhab_cart=; max-age=0; path=/' + ebCartDomaine() + '; SameSite=Lax';
}

let cartId = sessionStorage.getItem('elkhab_cart_id') || ebCartLireCookie() || null;

(function(){
  const params = new URLSearchParams(window.location.search);
  const urlCart = params.get('cart');
  if(urlCart){
    cartId = urlCart;
    ebCartMemoriser(cartId);
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
  cost { subtotalAmount { amount currencyCode } totalAmount { amount currencyCode } }
  discountCodes { code applicable }
  discountAllocations { discountedAmount { amount } }
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        discountAllocations { discountedAmount { amount } }
        merchandise {
          ... on ProductVariant {
            id
            title
            price { amount currencyCode }
            image { url }
            product { title featuredImage { url } }
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
    ebCartOublier();
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

// Code promo : Shopify vérifie le code et calcule lui-même la réduction (le site n'invente jamais un pourcentage)
// Mode diagnostic : ajouter ?promo=debug à l'adresse pour voir la réponse brute de Shopify sous le champ
async function ebCartDebugCode(codes){
  const mutation = `mutation cartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!]!) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart { discountCodes { code applicable } cost { subtotalAmount { amount } totalAmount { amount } } }
      userErrors { field message code }
      warnings { code message target }
    }
  }`;
  return shopifyFetch(mutation, { cartId: cartId, discountCodes: codes });
}

async function ebCartSetCode(codes){
  const mutation = `mutation cartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!]!) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) { cart { ${CART_FIELDS} } userErrors { field message } }
  }`;
  const result = await shopifyFetch(mutation, { cartId: cartId, discountCodes: codes });
  return result && result.data && result.data.cartDiscountCodesUpdate && result.data.cartDiscountCodesUpdate.cart;
}

async function ebCartFetch(){
  if(!cartId) return null;
  const query = `query cart($id: ID!) { cart(id: $id) { ${CART_FIELDS} } }`;
  const result = await shopifyFetch(query, { id: cartId });
  if(result && result.data && result.data.cart === null){
    // Panier expiré ou déjà payé : on repart d'un panier vide
    cartId = null;
    ebCartOublier();
    return null;
  }
  if(result && result.data && result.data.cart){ ebCartMemoriser(cartId); }
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
      ebCartMemoriser(cartId);
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

// Livraison offerte à partir de ce montant (en euros) — barre de progression dans le panier
const EB_SEUIL_LIVRAISON = 65;

function ebCartLivraison(sousTotal){
  const footer = document.querySelector('#ebCartPanel .eb-cart-footer');
  if(!footer) return;
  let zone = document.getElementById('ebCartLivraison');
  if(!zone){
    zone = document.createElement('div');
    zone.id = 'ebCartLivraison';
    zone.className = 'eb-cart-livraison';
    zone.innerHTML = '<div class="eb-cart-livraison-txt"></div><div class="eb-cart-livraison-barre"><span></span></div>';
    footer.insertBefore(zone, footer.firstChild);
  }
  if(!sousTotal){ zone.style.display = 'none'; return; }
  zone.style.display = 'block';
  // Petite précision quand aucun code n'est appliqué dans le panier
  let note = zone.querySelector('.eb-cart-livraison-note');
  if(!note){ note = document.createElement('div'); note.className = 'eb-cart-livraison-note'; zone.appendChild(note); }
  note.textContent = ebCartCodeActif ? '' : 'Montant calculé avant code de réduction';
  note.style.display = ebCartCodeActif ? 'none' : 'block';
  const reste = EB_SEUIL_LIVRAISON - sousTotal;
  const txt = zone.querySelector('.eb-cart-livraison-txt');
  if(reste > 0){
    txt.innerHTML = 'Plus que <strong>' + ebFormatPrice(reste) + '</strong> pour profiter de la livraison offerte';
  } else {
    txt.innerHTML = '<strong>La livraison vous est offerte</strong> ✓';
  }
  zone.querySelector('.eb-cart-livraison-barre span').style.width = Math.min(100, Math.round(sousTotal / EB_SEUIL_LIVRAISON * 100)) + '%';
}

// ── Champ « Code promo » dans le panier ──
let ebCartCodeActif = '';
function ebCartPromoZone(cart, reduction){
  const footer = document.querySelector('#ebCartPanel .eb-cart-footer');
  if(!footer) return;
  let zone = document.getElementById('ebCartPromo');
  if(!zone){
    zone = document.createElement('div');
    zone.id = 'ebCartPromo';
    zone.className = 'eb-cart-promo';
    zone.innerHTML = '<button type="button" class="eb-cart-promo-lien">Vous avez un code promo ?</button>'
      + '<div class="eb-cart-promo-form"><input type="text" placeholder="Votre code" autocomplete="off" autocapitalize="characters" spellcheck="false"><button type="button">Appliquer</button></div>'
      + '<div class="eb-cart-promo-err"></div>'
      + '<div class="eb-cart-promo-ok"><span>Code <strong></strong> appliqué · <span class="eb-cart-promo-montant"></span></span><button type="button" class="eb-cart-promo-retirer">Retirer</button></div>';
    const total = footer.querySelector('.eb-cart-total');
    footer.insertBefore(zone, total || null);
    const champ = zone.querySelector('input');
    const btn = zone.querySelector('.eb-cart-promo-form button');
    const err = zone.querySelector('.eb-cart-promo-err');
    zone.querySelector('.eb-cart-promo-lien').addEventListener('click', function(){ zone.classList.toggle('ouvert'); if(zone.classList.contains('ouvert')) champ.focus(); });
    async function appliquer(){
      const code = champ.value.trim().toUpperCase();
      err.style.display = 'none';
      if(!code || !cartId) return;
      btn.disabled = true; btn.textContent = '…';
      try {
        if(/[?&]promo=debug/.test(location.search)){
          const brut = await ebCartDebugCode([code]);
          err.style.cssText = 'display:block;color:#000;font-size:10px;word-break:break-all;white-space:pre-wrap;max-height:220px;overflow:auto;background:#fff;border:1px solid #ddd;padding:6px';
          err.textContent = 'DIAGNOSTIC — ' + JSON.stringify(brut, null, 1);
          btn.disabled = false; btn.textContent = 'Appliquer';
          return;
        }
        const c = await ebCartSetCode([code]);
        const dc = c && (c.discountCodes || []).filter(function(d){ return d.code.toUpperCase() === code; })[0];
        if(c && dc && dc.applicable){
          champ.value = '';
          ebRenderCart(c);
        } else {
          if(c){ const c2 = await ebCartSetCode([]); if(c2) ebRenderCart(c2); }
          err.textContent = 'Ce code n\'est pas valide ou ne s\'applique pas à votre panier.';
          err.style.display = 'block';
        }
      } catch(e){
        err.textContent = 'Un souci est survenu. Merci de réessayer.';
        err.style.display = 'block';
      }
      btn.disabled = false; btn.textContent = 'Appliquer';
    }
    btn.addEventListener('click', appliquer);
    champ.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); appliquer(); } });
    zone.querySelector('.eb-cart-promo-retirer').addEventListener('click', async function(){
      const c = await ebCartSetCode([]);
      if(c) ebRenderCart(c);
    });
  }
  if(!cart || !cart.lines.edges.length){ zone.style.display = 'none'; return; }
  zone.style.display = 'block';
  zone.classList.toggle('applique', !!ebCartCodeActif);
  if(ebCartCodeActif){
    zone.querySelector('.eb-cart-promo-ok strong').textContent = ebCartCodeActif;
    zone.querySelector('.eb-cart-promo-montant').textContent = reduction > 0 ? '−' + ebFormatPrice(reduction) : 'offre appliquée';
    zone.classList.remove('ouvert');
  }
}

// Styles des miniatures du panier (ajoutés une seule fois)
function ebCartStylePhotos(){
  if(document.getElementById('eb-cart-photos-style')) return;
  const st = document.createElement('style');
  st.id = 'eb-cart-photos-style';
  st.textContent = ''
    + '.eb-cart-item.eb-cart-item-photo{display:flex;gap:14px;align-items:flex-start}'
    + '.eb-cart-thumb{flex:0 0 64px;width:64px;height:64px;background:#EBE5DB;overflow:hidden}'
    + '.eb-cart-thumb img{display:block;width:100%;height:100%;object-fit:cover}'
    + '.eb-cart-info{flex:1;min-width:0}'
    + '.eb-cart-livraison{margin:0 0 16px}'
    + '.eb-cart-livraison-txt{font-family:Montserrat,sans-serif;font-size:11.5px;font-weight:400;letter-spacing:.02em;margin-bottom:8px;text-align:center}'
    + '.eb-cart-livraison-txt strong{font-weight:600}'
    + '.eb-cart-livraison-barre{height:3px;background:#EBE5DB;overflow:hidden}'
    + '.eb-cart-livraison-barre span{display:block;height:100%;width:0;background:#141414;transition:width .6s ease}'
    + '.eb-cart-livraison-note{font-family:Montserrat,sans-serif;font-size:9.5px;font-weight:300;opacity:.5;text-align:center;margin-top:6px}'
    + '.eb-cart-promo{margin:0 0 14px;font-family:Montserrat,sans-serif}'
    + '.eb-cart-promo-lien{background:none;border:0;padding:0;font-family:Montserrat,sans-serif;font-size:11.5px;font-weight:400;color:#000;text-decoration:underline;text-underline-offset:3px;text-decoration-color:rgba(0,0,0,.35);cursor:pointer}'
    + '.eb-cart-promo-form{display:none;gap:0;margin-top:10px}'
    + '.eb-cart-promo.ouvert .eb-cart-promo-form{display:flex}'
    + '.eb-cart-promo-form input{flex:1;min-width:0;height:42px;border:1px solid #000;border-right:0;background:#fff;padding:0 12px;font-family:Montserrat,sans-serif;font-size:16px;letter-spacing:.06em;text-transform:uppercase;border-radius:0;-webkit-appearance:none;outline:none;color:#000}'
    + '.eb-cart-promo-form button{height:42px;border:1px solid #000;background:#000;color:#fff;padding:0 16px;font-family:Montserrat,sans-serif;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;border-radius:0}'
    + '.eb-cart-promo-form button[disabled]{opacity:.5}'
    + '.eb-cart-promo-err{display:none;font-size:11px;color:#b3261e;margin-top:6px}'
    + '.eb-cart-promo-ok{display:none;justify-content:space-between;align-items:center;font-size:12px}'
    + '.eb-cart-promo-ok strong{font-weight:600;letter-spacing:.04em}'
    + '.eb-cart-promo-retirer{background:none;border:0;padding:0 0 0 10px;font-family:Montserrat,sans-serif;font-size:11px;color:#000;opacity:.6;text-decoration:underline;cursor:pointer}'
    + '.eb-cart-promo.applique .eb-cart-promo-lien,.eb-cart-promo.applique .eb-cart-promo-form{display:none}'
    + '.eb-cart-promo.applique .eb-cart-promo-ok{display:flex}';
  document.head.appendChild(st);
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
    ebCartCodeActif = '';
    ebCartLivraison(0);
    ebCartPromoZone(null, 0);
    return;
  }

  ebCartStylePhotos();
  let html = '';
  cart.lines.edges.forEach(function(edge){
    const line = edge.node;
    const m = line.merchandise;
    // Miniature : photo de la variante (teinte, formule…), sinon photo principale du produit
    const imgUrl = (m.image && m.image.url) || (m.product.featuredImage && m.product.featuredImage.url) || '';
    html += '<div class="eb-cart-item eb-cart-item-photo">';
    html += '<div class="eb-cart-thumb">' + (imgUrl ? '<img src="' + imgUrl + (imgUrl.indexOf('?') > -1 ? '&' : '?') + 'width=200" alt="" loading="lazy">' : '') + '</div>';
    html += '<div class="eb-cart-info">';
    html += '<div class="eb-cart-item-title">' + m.product.title + '</div>';
    if(m.title && m.title !== 'Default Title' && m.title !== 'Default'){
      html += '<div class="eb-cart-item-variant">' + m.title + '</div>';
    }
    html += '<div class="eb-cart-item-bottom">';
    html += '<span class="eb-cart-item-price">Qté ' + line.quantity + ' — ' + ebFormatPrice(m.price.amount * line.quantity) + '</span>';
    html += '<button class="eb-cart-remove" onclick="ebCartRemoveClick(\'' + line.id + '\', ' + line.quantity + ')" aria-label="Retirer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M9 7V4h6v3"></path><path d="M6 7l1 13h10l1-13"></path></svg></button>';
    html += '</div></div></div>';
  });
  itemsEl.innerHTML = html;
  // Réductions (code promo) : sur les articles et sur la commande, calculées par Shopify
  let reduction = 0;
  (cart.discountAllocations || []).forEach(function(a){ reduction += parseFloat(a.discountedAmount.amount) || 0; });
  cart.lines.edges.forEach(function(e){ (e.node.discountAllocations || []).forEach(function(a){ reduction += parseFloat(a.discountedAmount.amount) || 0; }); });
  const codeOk = (cart.discountCodes || []).filter(function(d){ return d.applicable; })[0];
  ebCartCodeActif = codeOk ? codeOk.code.toUpperCase() : '';
  let brut = 0;
  cart.lines.edges.forEach(function(e){ brut += (parseFloat(e.node.merchandise.price.amount) || 0) * e.node.quantity; });
  const aPayer = Math.max(0, Math.round((brut - reduction) * 100) / 100);
  totalEl.textContent = ebFormatPrice(aPayer);
  const libelle = totalEl.parentElement && totalEl.parentElement.firstElementChild;
  if(libelle && libelle !== totalEl) libelle.textContent = reduction > 0 ? 'Total' : 'Sous-total';
  ebCartPromoZone(cart, reduction);
  ebCartLivraison(aPayer);
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
  s.src = 'https://elkhabskincare.github.io/elkhab-site/pages-legales.js';
  s.async = true;
  s.setAttribute('data-eb-legal', '1');
  (document.head || document.documentElement).appendChild(s);
})();

/* ─── Espace ambassadrice / collaborations (lien « #collaboration ») : chargé sur tous les sites ─── */
(function(){
  if(window.ebCollabCharge || document.querySelector('script[data-eb-collab]')) return;
  var s = document.createElement('script');
  s.src = 'https://elkhabskincare.github.io/elkhab-site/collab-engine.js';
  s.async = true;
  s.setAttribute('data-eb-collab', '1');
  (document.head || document.documentElement).appendChild(s);
})();

/* ─── Newsletter « Le cercle ELKHA.B » (panneau en bas de page) : chargé sur tous les sites ─── */
(function(){
  if(window.__ebNewsletter || document.querySelector('script[data-eb-newsletter]')) return;
  var s = document.createElement('script');
  s.src = 'https://elkhabskincare.github.io/elkhab-site/newsletter-engine.js';
  s.async = true;
  s.setAttribute('data-eb-newsletter', '1');
  (document.head || document.documentElement).appendChild(s);
})();
