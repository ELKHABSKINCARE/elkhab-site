/* © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite. */
(function(){
  // ==========================================================================
  // ELKHA.B — Avis clientes des fiches (section « Vos expériences »)
  // Les avis viennent de Judge.me (appli d'avis de la boutique Shopify) :
  // demandes d'avis envoyées après chaque commande + bouton « Laisser un avis » du site.
  // Lecture avec le jeton PUBLIC de Judge.me (lecture seule, prévu pour être dans une page).
  // ==========================================================================
  var JUDGEME = 'https://judge.me/api/v1/widgets/product_review';
  var JUDGEME_TOKEN = '-VkYlsX3rxyFcQpINRq-Lm_31J4';
  var BOUTIQUE = 'fyjy1d-t8.myshopify.com';
  // Pour retrouver le produit Shopify d'une fiche (Judge.me range les avis par produit Shopify)
  var STOREFRONT = 'https://' + BOUTIQUE + '/api/2026-07/graphql.json';
  var STOREFRONT_TOKEN = 'd7b9bf173e3b947dc2bb10f375e14185';
  var MENTION = 'Avis collectés et vérifiés par Judge.me après chaque commande';

  var styleTag = document.createElement('style');
  styleTag.textContent =
    ".eb-reviews{font-family:'Montserrat',sans-serif !important;margin:10px auto 0 !important;padding:0 24px !important;max-width:560px !important;width:auto !important;box-sizing:border-box !important;color:#fff !important;text-align:left !important}" +
    ".eb-reviews .eb-review,.eb-reviews .eb-review-status{padding-left:0 !important;padding-right:0 !important}" +
    ".eb-reviews *{text-align:left !important}" +
    ".eb-review{padding:16px 0;border-bottom:1px solid rgba(255,255,255,.18)}" +
    ".eb-review-stars{color:#fff !important;font-size:19px !important;letter-spacing:3px;line-height:1.2;margin-bottom:8px}" +
    ".eb-review-meta{font-size:11.5px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:#fff !important;opacity:.6;margin-bottom:8px}" +
    ".eb-review-text{font-size:13.5px;line-height:1.7;color:#fff !important;opacity:.9}" +
    ".eb-review-text b{font-weight:600}" +
    ".eb-review-status{font-size:13px;color:#fff !important;opacity:.6;font-style:italic;padding:12px 0}" +
    // petite mention sous le bouton « Laisser un avis »
    ".eb-avis-mention{font-family:'Montserrat',sans-serif;font-size:10.5px;font-weight:300;font-style:italic;line-height:1.6;letter-spacing:.02em;color:#9a968f;text-align:center;margin:14px auto 0;max-width:320px}";
  document.head.appendChild(styleTag);

  function starsHTML(note){
    var n = Math.round(parseFloat(note)) || 0, s = '';
    for(var i = 1; i <= 5; i++){ s += i <= n ? '★' : '☆'; }
    return s;
  }
  function escapeHTML(str){
    var div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }
  // « 2026-11-10 10:41:19 UTC » → « 10 novembre 2026 »
  function formatDate(t){
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(t || ''));
    if(!m) return '';
    var mois = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
    return parseInt(m[3], 10) + ' ' + mois[parseInt(m[2], 10) - 1] + ' ' + m[1];
  }
  function memo(cle, valeur){
    try {
      if(valeur === undefined) return sessionStorage.getItem(cle);
      sessionStorage.setItem(cle, valeur);
    } catch(e){ return null; }
  }

  // Fiche → produit Shopify : la variante de la fiche donne le numéro du produit (gardé pour la visite)
  var produitsEnCours = {};
  function produitShopify(nomAvis){
    if(produitsEnCours[nomAvis]) return produitsEnCours[nomAvis];
    var P = window.EB_PRODUITS || {}, variante = '';
    for(var k in P){
      var p = P[k];
      if(p && p.avis === nomAvis){ variante = p.variantId || (p.variantes && p.variantes[0] && p.variantes[0].variantId) || ''; if(variante) break; }
    }
    if(!variante) return Promise.resolve('');
    var cle = 'eb-produit-' + variante, connu = memo(cle);
    if(connu) return Promise.resolve(connu);
    produitsEnCours[nomAvis] = fetch(STOREFRONT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN },
      body: JSON.stringify({ query: '{node(id:"gid://shopify/ProductVariant/' + variante + '"){... on ProductVariant{product{id}}}}' })
    }).then(function(r){ return r.json(); }).then(function(j){
      var id = String((((j || {}).data || {}).node || {}).product ? j.data.node.product.id : '').split('/').pop();
      if(id) memo(cle, id);
      return id;
    }).catch(function(){ produitsEnCours[nomAvis] = null; return ''; });
    return produitsEnCours[nomAvis];
  }

  // Avis Judge.me d'un produit : note moyenne, nombre total et avis publiés
  function avisJudgeme(idProduit){
    var url = JUDGEME + '?external_id=' + encodeURIComponent(idProduit) + '&api_token=' + encodeURIComponent(JUDGEME_TOKEN) + '&shop_domain=' + BOUTIQUE;
    return fetch(url).then(function(r){
      if(!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function(j){
      var doc = new DOMParser().parseFromString(j.widget || '', 'text/html');
      var w = doc.querySelector('.jdgm-rev-widg');
      var avis = [].map.call(doc.querySelectorAll('.jdgm-rev'), function(el){
        var q = function(s){ return el.querySelector(s); };
        var t = function(s){ var e = q(s); return e ? e.textContent.trim() : ''; };
        return {
          note: (q('.jdgm-rev__rating') || { getAttribute: function(){ return 0; } }).getAttribute('data-score'),
          auteur: t('.jdgm-rev__author'),
          titre: t('.jdgm-rev__title'),
          texte: t('.jdgm-rev__body'),
          date: (q('.jdgm-rev__timestamp') || { getAttribute: function(){ return ''; } }).getAttribute('data-content'),
          verifie: el.getAttribute('data-verified-buyer') === 'true'
        };
      });
      return {
        moyenne: w ? parseFloat(w.getAttribute('data-average-rating')) || 0 : 0,
        total: w ? parseInt(w.getAttribute('data-number-of-reviews'), 10) || avis.length : avis.length,
        avis: avis
      };
    });
  }

  // Le titre « 38 ans · Peau sensible » (envoyé par le formulaire du site) sert de signature ;
  // un vrai titre écrit par la cliente s'affiche en tête de son avis
  var PROFIL = /^\s*\d{1,3}\s*ans\b/i;

  function rendu(res){
    if(!res.avis.length) return '<div class="eb-review-status">Aucun avis pour le moment.</div>';
    var verifies = res.avis.filter(function(a){ return a.verifie; }).length;
    var html = '<div class="eb-review-resume"><b>' + res.moyenne.toFixed(1).replace('.', ',') + '</b>'
      + '<span class="eb-review-stars">' + starsHTML(res.moyenne) + '</span>'
      + '<span>' + res.total + ' avis' + (verifies ? ' · ' + verifies + (verifies > 1 ? ' achats vérifiés' : ' achat vérifié') : '') + '</span></div>';
    res.avis.forEach(function(a){
      var profil = PROFIL.test(a.titre) ? a.titre.replace(/\s*·\s*/g, ' — ') : '';
      var signature = [escapeHTML(a.auteur) + (profil ? ', ' + escapeHTML(profil) : ''), formatDate(a.date), a.verifie ? 'Achat vérifié' : '']
        .filter(Boolean).join(' · ');
      html += '<div class="eb-review">'
        + '<div class="eb-review-stars">' + starsHTML(a.note) + '</div>'
        + '<div class="eb-review-text">' + (a.titre && !profil ? '<b>' + escapeHTML(a.titre) + '</b><br>' : '') + escapeHTML(a.texte) + '</div>'
        + '<div class="eb-review-meta">' + signature + '</div>'
        + '</div>';
    });
    return html;
  }

  // Mention sous le bouton « Laisser un avis » de la même section
  function ajouterMention(container){
    var section = container.parentElement, bouton = section && section.querySelector('.eb-fp-avis');
    if(!bouton || section.querySelector('.eb-avis-mention')) return;
    var p = document.createElement('p');
    p.className = 'eb-avis-mention';
    p.textContent = MENTION;
    bouton.insertAdjacentElement('afterend', p);
  }

  function ebRenderReviewsInto(container, nomAvis){
    ajouterMention(container);
    produitShopify(nomAvis).then(function(id){
      if(!id){ container.innerHTML = '<div class="eb-review-status">Aucun avis pour le moment.</div>'; return; }
      return avisJudgeme(id).then(function(res){ container.innerHTML = rendu(res); });
    }).catch(function(e){
      container.innerHTML = '<div class="eb-review-status">Avis momentanément indisponibles.</div>';
      console.error('ELKHA.B avis — erreur de chargement', e);
    });
  }

  window.ebRenderReviews = function(containerId, nomAvis){
    var container = document.getElementById(containerId);
    if(container){ ebRenderReviewsInto(container, nomAvis); }
  };
  window.ebReviewsEngineReady = true;

  // Remplit tous les blocs <div class="eb-reviews" data-produit="..."> de la page (fiches ouvertes au fil de la visite)
  function renderAll(){
    var blocs = document.querySelectorAll('.eb-reviews[data-produit]');
    for(var i = 0; i < blocs.length; i++){
      var b = blocs[i];
      if(b.getAttribute('data-eb-fait') === '1') continue;
      b.setAttribute('data-eb-fait', '1');
      ebRenderReviewsInto(b, b.getAttribute('data-produit'));
    }
  }
  function start(){
    renderAll();
    if(window.MutationObserver){
      new MutationObserver(function(){ renderAll(); }).observe(document.body, { childList: true, subtree: true });
    }
  }
  if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', start); }
  else { start(); }
})();
