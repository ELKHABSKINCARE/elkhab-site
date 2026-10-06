(function(){
  // ==========================================================================
  // ELKHA.B — Fiches produits en panneau
  // Ouvre la fiche par-dessus la page : aucune page qui saute, panier conservé.
  // Le contenu vient de produits-data.js (window.EB_PRODUITS).
  // ==========================================================================

  var BASE = 'https://cdn.jsdelivr.net/gh/ELKHABSKINCARE/elkhab-site@main/';
  var REVIEWS_ENGINE = BASE + 'reviews-engine.js?v=9';
  var INCI_DATA = BASE + 'inci-data.js?v=2';

  var css = ''
  // Panneau
  + ".eb-fp-overlay{position:fixed;inset:0;background:#f6f4f0;color:#000;z-index:99990;transform:translateX(100%);transition:transform .5s cubic-bezier(.65,0,.35,1);overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:'Montserrat',sans-serif;-webkit-tap-highlight-color:transparent}"
  + ".eb-fp-overlay.open{transform:translateX(0)}"
  + ".eb-fp-overlay *{box-sizing:border-box}"
  + ".eb-fp-close{position:fixed;top:66px;right:21px;z-index:99995;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(0,0,0,.12);box-shadow:0 2px 10px rgba(0,0,0,.08);display:none;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:20px;font-weight:300;line-height:1;color:#000;cursor:pointer;padding:0;transition:transform .2s ease}"
  + ".eb-fp-close.visible{display:flex}.eb-fp-close:hover{transform:scale(1.1)}"
  // Panier de la fiche : même sac que le menu, en haut à droite
  + ".eb-fp-cartbtn{position:fixed;top:12px;right:18px;z-index:99995;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(0,0,0,.12);box-shadow:0 2px 10px rgba(0,0,0,.08);display:none;align-items:center;justify-content:center;cursor:pointer;padding:0;transition:transform .2s ease}"
  + ".eb-fp-cartbtn.visible{display:flex}.eb-fp-cartbtn:hover{transform:scale(1.08)}"
  + ".eb-fp-cartbtn svg{width:24px;height:24px;display:block}"
  + ".eb-fp-cartcount{position:absolute;top:-3px;right:-4px;min-width:18px;height:18px;padding:0 4px;border-radius:20px;background:#000;color:#fff;font-family:'Montserrat',sans-serif;font-size:9.5px;font-weight:600;display:none;align-items:center;justify-content:center;box-sizing:border-box}"
  + ".eb-fp-cartcount.on{display:flex}"
  + ".eb-fp-cartcount.eb-rebond{animation:ebFpRebond .6s cubic-bezier(.3,1.6,.5,1)}"
  + "@keyframes ebFpRebond{0%{transform:scale(1)}35%{transform:scale(1.45)}60%{transform:scale(.9)}100%{transform:scale(1)}}"
  // Média : affiché en entier, jamais rogné
  + ".eb-fp-media{position:relative;width:100%;background:#f6f4f0;overflow:hidden}"
  + ".eb-fp-media video,.eb-fp-media > img{display:block;width:100%;height:auto}"
  + ".eb-fp-media > img.eb-fp-poster{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;transition:opacity .9s ease;pointer-events:none}"
  + ".eb-fp-media.eb-play > img.eb-fp-poster{opacity:0}"
  + "@media (max-width:899px){.eb-fp-media video,.eb-fp-media > img,.eb-fp-media .eb-fp-slides .eb-fp-slide img,.eb-fp-media .eb-fp-slides .eb-fp-slide video{width:100%;height:calc(100vh - var(--eb-reserve, 80px));height:calc(100svh - var(--eb-reserve, 80px));object-fit:cover;object-position:center;background:#f6f4f0}}"
  + ".eb-fp-slides{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}"
  + ".eb-fp-slides::-webkit-scrollbar{display:none}"
  + ".eb-fp-slide{flex:0 0 100%;scroll-snap-align:start}"
  + ".eb-fp-slide img,.eb-fp-slide video{display:block;width:100%;height:auto}"
  + ".eb-fp-dots{position:absolute;left:0;right:0;bottom:14px;display:flex;justify-content:center;gap:7px}"
  + ".eb-fp-dot{width:7px;height:7px;border-radius:50%;background:rgba(0,0,0,.25);transition:background .2s ease}"
  + ".eb-fp-dot.on{background:#000}"
  // En-tête de la fiche
  + ".eb-fp-content{padding:32px 24px 70px;max-width:620px;margin:0 auto}"
  + "@media (max-width:899px){.eb-fp-content{padding-top:16px}}"
  + ".eb-fp-head{text-align:center;margin-bottom:28px}"
  + ".eb-fp-title{font-size:21px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin:0 0 10px;color:#000}"
  + ".eb-fp-sub{font-size:14px;font-weight:300;line-height:1.6;margin:0 0 14px;color:#222}"
  + ".eb-fp-details{font-size:10.5px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:#555;margin:0 0 7px}"
  + ".eb-fp-actifs{font-size:12.5px;font-weight:300;line-height:1.6;margin:-6px 0 14px;color:#666}"
  + ".eb-fp-note{font-size:11px;font-weight:300;font-style:italic;letter-spacing:.04em;color:#888;margin:0}"
  // Boutons
  + ".eb-fp-buy{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;max-width:320px;margin:0 auto;background:#000;color:#fff;border:none;border-radius:0;padding:17px 24px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease;white-space:nowrap}"
  + ".eb-fp-buy:hover{transform:scale(1.03)}"
  + ".eb-fp-sel{width:100%;max-width:320px;margin:0 auto 26px}"
  + ".eb-fp-sel-label{font-size:12px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;margin-bottom:10px;text-align:left}"
  + ".eb-fp-sel-options{display:grid;grid-template-columns:repeat(2,1fr);gap:7px}"
  + ".eb-fp-sel-options.eb-une-col{grid-template-columns:1fr}"
  + ".eb-fp-sel-opt{background:#fff;color:#000;border:1px solid #cfcfcf;border-radius:0;padding:11px 6px;font-family:'Montserrat',sans-serif;font-size:10.5px;font-weight:500;letter-spacing:.02em;cursor:pointer;white-space:nowrap;transition:background .2s ease,color .2s ease,border-color .2s ease}"
  + ".eb-fp-sel-opt.active{background:#000;color:#fff;border-color:#000}"
  // Aperçu de la teinte choisie : petite photo qui apparaît sous les options
  + ".eb-fp-sel-preview{display:flex;align-items:center;gap:14px;margin-top:0;max-height:0;opacity:0;overflow:hidden;transition:max-height .45s ease,opacity .45s ease,margin-top .45s ease}"
  + ".eb-fp-sel-preview.on{max-height:110px;opacity:1;margin-top:14px}"
  + ".eb-fp-sel-thumb{width:84px;height:84px;flex-shrink:0;object-fit:cover;background:#f6f4f0;transform:scale(.85);transition:transform .45s cubic-bezier(.2,.8,.2,1)}"
  + ".eb-fp-sel-preview.on .eb-fp-sel-thumb{transform:scale(1)}"
  + ".eb-fp-sel-preview.eb-flash .eb-fp-sel-thumb{animation:ebFpThumb .45s ease}"
  + "@keyframes ebFpThumb{0%{opacity:.2;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}"
  + ".eb-fp-sel-caption{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#555;line-height:1.6;text-align:left}"
  + ".eb-fp-sel-caption strong{display:block;color:#000;font-weight:600;letter-spacing:.06em}"
  + ".eb-fp-buy .eb-produit-add-price{font-weight:400;opacity:.85}"
  + ".eb-fp-ship{font-size:12px;line-height:1.6;text-align:center;color:#444;margin:12px auto 0;max-width:320px;opacity:0;transform:translateY(10px) scale(.88);transition:opacity 1.1s ease,transform 1.1s cubic-bezier(.2,.8,.2,1)}"
  + ".eb-fp-ship.eb-in{opacity:1;transform:scale(1)}"
  // Accordéon
  + ".eb-fp-acc{border-top:1px solid rgba(0,0,0,.15);margin-top:40px}"
  + ".eb-fp-acc-item{border-bottom:1px solid rgba(0,0,0,.15)}"
  + ".eb-fp-acc-head{display:flex;justify-content:space-between;align-items:center;padding:20px 2px;cursor:pointer;background:none;border:none;width:100%;color:#000;font-family:'Montserrat',sans-serif;text-align:left}"
  + ".eb-fp-acc-head h4{font-size:13px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;margin:0;color:#000}"
  + ".eb-fp-acc-icon{font-size:20px;font-weight:300;line-height:1;transition:transform .3s ease}"
  + ".eb-fp-acc-item.open .eb-fp-acc-icon{transform:rotate(45deg)}"
  + ".eb-fp-acc-body{max-height:0;overflow:hidden;transition:max-height .45s ease}"
  + ".eb-fp-acc-item.open .eb-fp-acc-body{max-height:2400px}"
  + ".eb-fp-acc-inner{padding:0 2px 22px;text-align:left}"
  + ".eb-fp-acc-inner p{font-size:13.5px;line-height:1.85;margin:0 0 10px;color:#222}"
  + ".eb-fp-acc-inner ul{list-style:none;margin:0;padding:0}"
  + ".eb-fp-acc-inner li{font-size:13.5px;line-height:1.85;margin-bottom:8px;padding-left:18px;position:relative;color:#222}"
  + ".eb-fp-acc-inner li:before{content:'•';position:absolute;left:2px;top:0;opacity:.6}"
  + ".eb-fp-inci-list{font-size:12.5px !important;line-height:1.8 !important;color:#444 !important}"
  + ".eb-fp-inci-legend{font-size:11.5px;line-height:1.7;color:#777;margin:6px 0 14px}"
  + ".eb-fp-inci-stats{display:flex;gap:28px;margin:6px 0 14px}"
  + ".eb-fp-inci-val{font-size:20px;font-weight:700}"
  + ".eb-fp-inci-lab{font-size:11px;color:#666;line-height:1.4}"
  // Bouton « Retour » (fiche ouverte depuis une autre fiche ou une routine)
  + ".eb-fp-back{position:fixed;top:16px;left:18px;z-index:99995;height:38px;padding:0 16px;border-radius:999px;background:rgba(255,255,255,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(0,0,0,.12);box-shadow:0 2px 10px rgba(0,0,0,.08);display:none;align-items:center;gap:6px;font-family:'Montserrat',sans-serif;font-size:10.5px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:#000;cursor:pointer;transition:transform .2s ease}"
  + ".eb-fp-back.visible{display:flex}.eb-fp-back:hover{transform:scale(1.04)}"
  // Soin consulté depuis une routine : prix seul, non cliquable
  + ".eb-fp-price-only{display:flex;align-items:center;justify-content:center;width:100%;max-width:320px;margin:0 auto;border:1px solid rgba(0,0,0,.18);padding:16px 24px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:500;letter-spacing:.06em;color:#000;cursor:default}"
  + ".eb-fp-inclus{font-size:11.5px;font-style:italic;font-weight:300;line-height:1.6;text-align:center;color:#666;margin:12px auto 0;max-width:320px}"
  + ".eb-fp-inclus button{display:block;margin:6px auto 0;background:none;border:none;padding:2px 0;font-family:'Montserrat',sans-serif;font-size:11px;font-style:normal;font-weight:500;letter-spacing:.06em;text-decoration:underline;text-underline-offset:3px;color:#000;cursor:pointer}"
  // Fiches routines
  + ".eb-fp-intro{margin:42px 0 0}"
  + ".eb-fp-intro p{font-size:14px;line-height:1.85;color:#222;text-align:center;margin:0 0 12px}"
  + ".eb-fp-acc + .eb-fp-h3{margin-top:56px}"
  + ".eb-fp-h3{font-size:12px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;text-align:center;color:#000;margin:50px 0 22px}"
  + ".eb-fp-soins{display:grid;gap:10px}"
  + ".eb-fp-soin{background:none;border:none;padding:0;margin:0;cursor:pointer;text-align:center;font-family:'Montserrat',sans-serif;color:#000}"
  + ".eb-fp-soin-img{display:block;aspect-ratio:3/4;overflow:hidden;background:#F6F4F0}"
  + ".eb-fp-soin-img img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .5s ease}"
  + ".eb-fp-soin:hover .eb-fp-soin-img img{transform:scale(1.05)}"
  + ".eb-fp-soin-name{display:block;margin-top:9px;font-size:9.5px;font-weight:400;letter-spacing:.14em;line-height:1.5;text-transform:uppercase}"
  + ".eb-fp-soin-voir{display:block;margin-top:3px;font-size:10px;letter-spacing:.04em;text-decoration:underline;text-underline-offset:3px;opacity:.55}"
  + ".eb-fp-moment{font-size:11px;font-style:italic;font-weight:300;letter-spacing:.06em;text-align:center;color:#666;margin:-12px 0 12px}"
  + ".eb-fp-etapes{list-style:none;margin:0;padding:0;border-top:1px solid rgba(0,0,0,.12)}"
  + ".eb-fp-etape{display:flex;gap:16px;padding:18px 2px;border-bottom:1px solid rgba(0,0,0,.12)}"
  + ".eb-fp-etape-num{flex-shrink:0;min-width:24px;font-size:11px;font-weight:500;letter-spacing:.1em;color:#999;padding-top:2px}"
  + ".eb-fp-etape-soin{display:block;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#000;margin-bottom:5px}"
  + ".eb-fp-etape-lien{background:none;border:none;padding:0;font-family:'Montserrat',sans-serif;cursor:pointer;text-align:left;text-decoration:underline;text-underline-offset:4px;text-decoration-color:rgba(0,0,0,.3)}"
  + ".eb-fp-etape-txt{font-size:13.5px;line-height:1.8;color:#222;text-align:left}"
  + ".eb-fp-conclusion{font-size:13.5px;font-weight:300;line-height:1.85;text-align:center;color:#444;margin:38px auto 0;max-width:460px}"
  + ".eb-fp-conclusion em{font-style:italic}"
  + ".eb-fp-conclusion strong{font-weight:600;color:#222}"
  // Vos expériences : bandeau #141414, comme le panneau d'avis
  + ".eb-fp-h2{font-size:26px;font-weight:700;margin:52px 0 10px;color:#000;text-align:left}"
  + ".eb-fp-exp{background:#141414;color:#fff;margin:52px -24px 0;padding:44px 24px 48px}"
  + ".eb-fp-exp .eb-fp-h2{color:#fff;margin:0 0 10px}"
  + ".eb-fp-overlay .eb-reviews{padding:0 !important;max-width:none !important;margin:0 !important}"
  + ".eb-fp-exp .eb-reviews,.eb-fp-exp .eb-reviews *{color:#fff !important}"
  + ".eb-fp-exp .eb-review{border-bottom:1px solid rgba(255,255,255,.18) !important}"
  + ".eb-fp-avis{display:flex;align-items:center;justify-content:center;width:100%;max-width:320px;margin:28px auto 0;background:#fff;color:#000;border:none;border-radius:0;padding:17px 24px;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease;white-space:nowrap}"
  + ".eb-fp-avis:hover{transform:scale(1.03)}"
  // Pour aller plus loin / L'accord parfait
  + ".eb-fp-sep{border:none;border-top:1px solid rgba(0,0,0,.15);width:60%;margin:56px auto 30px}"
  + ".eb-fp-exp + .eb-fp-sep{border-top:none;margin-top:30px}"
  + ".eb-fp-kicker{font-size:13px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;text-align:center;margin:0 0 10px}"
  + ".eb-fp-accord-img{display:block;width:calc(100% + 48px);max-width:none;height:auto;margin:22px -24px 22px}"
  + ".eb-fp-accord-nom{font-size:12px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;text-align:center;color:#000;margin:-8px 0 4px}"
  + ".eb-fp-accord-sous{font-size:12px;font-weight:300;line-height:1.6;text-align:center;color:#666;margin:0 0 18px}"
  + ".eb-fp-accord-text{font-size:14px;line-height:1.8;color:#222;text-align:center}"
  + ".eb-fp-accord-text p{margin:0 0 12px}"
  + ".eb-fp-accord-text.eb-clamp p.eb-suite{display:none}"
  + ".eb-fp-accord-text.eb-clamp.eb-un p{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}"
  + ".eb-fp-more{display:block;margin:6px auto 0;background:none;border:none;padding:4px 0;font-family:'Montserrat',sans-serif;font-size:12px;font-weight:500;letter-spacing:.06em;text-decoration:underline;text-underline-offset:4px;color:#000;cursor:pointer}"
  + ".eb-fp-pill{display:inline-flex;align-items:center;justify-content:center;margin:26px auto 0;background:#000;color:#fff;border:none;border-radius:999px;padding:10px 28px;font-family:'Montserrat',sans-serif;font-size:11.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease}"
  + ".eb-fp-pill:hover{transform:scale(1.05)}"
  + ".eb-fp-center{text-align:center}"
  + ".eb-fp-accord-buy{margin-top:22px !important}"
  // Ordinateur : deux colonnes, média fixe à gauche
  + "@media (min-width:900px){"
  // Colonne photo plus étroite (environ 42 %), photo ou vidéo d'un bord à l'autre
  +   ".eb-fp-wrap{display:grid;grid-template-columns:minmax(0,42fr) minmax(0,58fr);min-height:100%}"
  +   ".eb-fp-left{position:sticky;top:0;height:100vh;background:#f6f4f0;overflow:hidden}"
  +   ".eb-fp-left .eb-fp-media{position:relative;width:100%;height:100%;background:#f6f4f0}"
  +   ".eb-fp-left .eb-fp-media video,.eb-fp-left .eb-fp-media > img{width:100%;height:100%;object-fit:contain;object-position:center}"
  +   ".eb-fp-left .eb-fp-slides{height:100%}"
  +   ".eb-fp-left .eb-fp-media .eb-fp-slides .eb-fp-slide img,.eb-fp-left .eb-fp-media .eb-fp-slides .eb-fp-slide video{width:100%;height:100%;object-fit:contain;object-position:center}"
  // Colonne texte : toute la largeur, avec des marges confortables
  +   ".eb-fp-content{padding:90px 64px 80px;max-width:none}"
  +   ".eb-fp-content > *:not(.eb-fp-exp){max-width:640px;margin-left:auto;margin-right:auto}"
  +   ".eb-fp-content > .eb-fp-buy,.eb-fp-content > .eb-fp-sel,.eb-fp-content > .eb-fp-ship{max-width:320px}"
  +   ".eb-fp-title{font-size:24px}"
  // Vos expériences : bandeau noir d'un bord à l'autre de la colonne
  +   ".eb-fp-exp{margin:52px -64px 0;padding:52px 64px 56px}"
  +   ".eb-fp-exp > *{max-width:640px;margin-left:auto;margin-right:auto}"
  +   ".eb-fp-exp > .eb-fp-avis{max-width:320px}"
  // Accord parfait : photo à taille raisonnable, centrée
  +   ".eb-fp-accord-img{width:100%;max-width:380px !important;margin:26px auto 26px !important}"
  + "}";

  var overlay, closeBtn, cartBtn, backBtn, pile = [], courant = null, built = false, observer = null, slideTimer = null;

  function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }

  // Images Shopify en haute résolution (écrans Retina), sans jamais les agrandir artificiellement
  function hd(url, w){
    if(!url) return '';
    if(/cdn\.shopify\.com\/s\/files\//.test(url) && !/[?&]width=/.test(url)){
      return url + (url.indexOf('?') === -1 ? '?' : '&') + 'width=' + (w || 1600);
    }
    return url;
  }

  function charger(src, test){
    if(test()) return;
    if(document.querySelector('script[src="' + src + '"]')) return;
    var s = document.createElement('script'); s.src = src; document.head.appendChild(s);
  }

  function build(){
    if(built) return;
    built = true;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    overlay = document.createElement('div');
    overlay.className = 'eb-fp-overlay';
    overlay.setAttribute('role', 'dialog');
    document.body.appendChild(overlay);
    closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'eb-fp-close';
    closeBtn.setAttribute('aria-label', 'Fermer');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', ebFicheClose);
    document.body.appendChild(closeBtn);

    backBtn = document.createElement('button');
    backBtn.type = 'button';
    backBtn.className = 'eb-fp-back';
    backBtn.innerHTML = '&larr; Retour';
    backBtn.addEventListener('click', ebFicheRetour);
    document.body.appendChild(backBtn);

    cartBtn = document.createElement('button');
    cartBtn.type = 'button';
    cartBtn.className = 'eb-fp-cartbtn';
    cartBtn.setAttribute('aria-label', 'Voir le panier');
    cartBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1 12H7z"></path><path d="M9 8V6a3 3 0 0 1 6 0v2"></path></svg><span class="eb-fp-cartcount">0</span>';
    cartBtn.addEventListener('click', ouvrirPanier);
    document.body.appendChild(cartBtn);
    suivrePanier();

    overlay.addEventListener('click', function(e){
      // Accordéon : une seule section ouverte à la fois
      var head = e.target.closest('.eb-fp-acc-head');
      if(head){
        var item = head.parentElement;
        var wasOpen = item.classList.contains('open');
        overlay.querySelectorAll('.eb-fp-acc-item').forEach(function(i){ i.classList.remove('open'); });
        if(!wasOpen){ item.classList.add('open'); if(item.hasAttribute('data-inci')) remplirComposition(item); }
        return;
      }
      // Sélecteur : la version choisie part au panier, et le diaporama montre sa photo
      var opt = e.target.closest('.eb-fp-sel-opt');
      if(opt){
        var bloc = opt.closest('.eb-fp-sel');
        var cible = bloc.getAttribute('data-cible');
        bloc.querySelectorAll('.eb-fp-sel-opt').forEach(function(o){ o.classList.remove('active'); });
        opt.classList.add('active');
        var bouton = overlay.querySelector(cible === 'accord' ? '.eb-fp-accord-buy' : '.eb-fp-main-buy');
        if(bouton) bouton.setAttribute('data-variant-id', opt.getAttribute('data-variant'));
        var photo = opt.getAttribute('data-photo');
        // Petite photo de rappel sous les teintes (photos de la fiche concernée)
        var apercu = bloc.querySelector('.eb-fp-sel-preview');
        var source = window.EB_PRODUITS[bloc.getAttribute('data-produit')];
        var images = (source && source.media && source.media.images) || [];
        var imgOpt = opt.getAttribute('data-img') || (photo != null && images[parseInt(photo, 10)] ? hd(images[parseInt(photo, 10)], 400) : '');
        var cibleFiche = opt.getAttribute('data-cible-fiche');
        if(cibleFiche && window.EB_PRODUITS[cibleFiche]){
          var zone = bloc.closest('.eb-fp-content');
          if(cible === 'accord'){
            var pill = zone.querySelector('.eb-fp-pill[data-fiche]');
            if(pill) pill.setAttribute('data-fiche', cibleFiche);
          } else {
            var vig = zone.querySelector('.eb-fp-soin[data-selon-choix]');
            if(vig){
              var mm = window.EB_PRODUITS[cibleFiche].media || {};
              var src = (mm.images && mm.images[0]) || mm.image;
              vig.setAttribute('data-fiche', cibleFiche);
              var vi = vig.querySelector('img'); if(vi && src) vi.src = hd(src, 600);
            }
          }
        }
        if(apercu && imgOpt){
          var vignette = apercu.querySelector('.eb-fp-sel-thumb');
          vignette.src = imgOpt;
          apercu.querySelector('strong').textContent = opt.textContent;
          apercu.classList.add('on');
          apercu.classList.remove('eb-flash'); void apercu.offsetWidth; apercu.classList.add('eb-flash');
        }
        var piste = overlay.querySelector('.eb-fp-slides');
        if(cible === 'main' && photo != null && piste && bloc.getAttribute('data-produit') === (courant && courant.id)){
          clearTimeout(slideTimer); // la cliente a choisi : le diaporama s'arrête sur sa teinte
          piste.scrollTo({ left: parseInt(photo, 10) * piste.clientWidth, behavior: 'smooth' });
        }
        return;
      }
      if(e.target.closest('.eb-fp-inclus button')){ ebFicheRetour(); return; }
      // « Voir plus » / « Voir moins »
      var more = e.target.closest('.eb-fp-more');
      if(more){
        var txt = overlay.querySelector('.eb-fp-accord-text');
        var ferme = txt.classList.toggle('eb-clamp');
        more.textContent = ferme ? 'Voir plus' : 'Voir moins';
      }
    });
  }

  // ---------------------------------------------------------------- PANIER
  // Ouvre le panier habituel (celui du menu) par-dessus la fiche
  function ouvrirPanier(){
    var panel = document.getElementById('ebCartPanel');
    var backdrop = document.getElementById('ebCartBackdrop');
    if(panel) panel.classList.add('open');
    if(backdrop) backdrop.classList.add('open');
  }
  // Recopie le nombre d'articles du menu, et fait rebondir la pastille quand il augmente
  var dernierNombre = null;
  function majCompteur(){
    if(!cartBtn) return;
    var src = document.getElementById('ebCartCount');
    var badge = cartBtn.querySelector('.eb-fp-cartcount');
    var n = src ? (parseInt(src.textContent, 10) || 0) : 0;
    badge.textContent = n;
    badge.classList.toggle('on', n > 0);
    if(dernierNombre !== null && n > dernierNombre){
      badge.classList.remove('eb-rebond'); void badge.offsetWidth; badge.classList.add('eb-rebond');
    }
    dernierNombre = n;
  }
  function suivrePanier(){
    var essais = 0;
    (function attendre(){
      var src = document.getElementById('ebCartCount');
      if(!src){ if(++essais < 40) setTimeout(attendre, 250); return; }
      majCompteur();
      if(window.MutationObserver){
        new MutationObserver(majCompteur).observe(src, { childList: true, characterData: true, subtree: true });
      }
    })();
  }

  // Composition (INCI), reprise de inci-data.js
  function remplirComposition(item){
    var key = item.getAttribute('data-inci');
    var inner = item.querySelector('.eb-fp-acc-inner');
    var essai = 0;
    (function tenter(){
      var base = (typeof INCI_DETAILS !== 'undefined') ? INCI_DETAILS : null;
      var d = base && base[key];
      if(base && !d){ item.parentNode && item.parentNode.removeChild(item); return; }
      if(!d){
        if(++essai < 25){ setTimeout(tenter, 200); }
        else { inner.innerHTML = '<p>Composition momentanément indisponible.</p>'; }
        return;
      }
      var parts = d.parts || [{ label: '', ingredients: d.ingredients, legend: d.legend, natural: d.natural, organic: d.organic }];
      var h = '';
      parts.forEach(function(p){
        if(p.label) h += '<p><strong>' + esc(p.label) + '</strong></p>';
        h += '<p class="eb-fp-inci-list">' + esc(p.ingredients) + '</p>';
        if(p.legend && p.legend.length) h += '<div class="eb-fp-inci-legend">' + p.legend.map(esc).join('<br>') + '</div>';
        if(p.natural || p.organic){
          h += '<div class="eb-fp-inci-stats">';
          if(p.natural) h += '<div><div class="eb-fp-inci-val">' + esc(p.natural) + '%</div><div class="eb-fp-inci-lab">d\'origine naturelle</div></div>';
          if(p.organic) h += '<div><div class="eb-fp-inci-val">' + esc(p.organic) + '%</div><div class="eb-fp-inci-lab">issus de l\'agriculture biologique</div></div>';
          h += '</div>';
        }
      });
      if(d.certification) h += '<p class="eb-fp-inci-legend">' + esc(d.certification) + '</p>';
      inner.innerHTML = h;
    })();
  }

  function mediaHTML(m, nom){
    if(!m) return '';
    if(m.type === 'video' && m.video){
      return '<div class="eb-fp-media"><video autoplay muted loop playsinline preload="auto" src="' + esc(m.video) + '"></video>'
        + (m.image ? '<img class="eb-fp-poster" src="' + esc(hd(m.image, 1600)) + '" alt="' + esc(nom) + '">' : '')
        + '</div>';
    }
    var imgs = m.images || (m.image ? [m.image] : []);
    // mobileSeulement : numéros des photos affichées uniquement sur téléphone (1 = 1re photo)
    if(m.mobileSeulement && window.matchMedia('(min-width:900px)').matches){
      imgs = imgs.filter(function(_, i){ return m.mobileSeulement.indexOf(i + 1) === -1; });
    }
    if(imgs.length <= 1){
      return imgs.length ? '<div class="eb-fp-media"><img src="' + esc(hd(imgs[0], 1600)) + '" alt="' + esc(nom) + '"></div>' : '';
    }
    var h = '<div class="eb-fp-media"><div class="eb-fp-slides">';
    imgs.forEach(function(src){
      if(/\.mp4(\?|$)/i.test(src)){
        h += '<div class="eb-fp-slide"><video muted loop playsinline preload="metadata" src="' + esc(src) + '"></video></div>';
      } else {
        h += '<div class="eb-fp-slide"><img src="' + esc(hd(src, 1600)) + '" alt="' + esc(nom) + '"></div>';
      }
    });
    h += '</div><div class="eb-fp-dots">';
    imgs.forEach(function(_, i){ h += '<span class="eb-fp-dot' + (i === 0 ? ' on' : '') + '"></span>'; });
    return h + '</div></div>';
  }

  function demarrerDiaporama(){
    clearTimeout(slideTimer);
    var track = overlay.querySelector('.eb-fp-slides');
    if(!track) return;
    var dots = overlay.querySelectorAll('.eb-fp-dot');
    var slides = track.querySelectorAll('.eb-fp-slide');
    var indexActuel = function(){ return Math.round(track.scrollLeft / track.clientWidth); };
    // Seule la vidéo visible joue, les autres sont en pause
    var activer = function(i){
      dots.forEach(function(d, k){ d.classList.toggle('on', k === i); });
      slides.forEach(function(sl, k){
        var v = sl.querySelector('video');
        if(!v) return;
        if(k === i){ v.muted = true; var p = v.play(); if(p && p.catch) p.catch(function(){}); }
        else { v.pause(); }
      });
    };
    var dureeEtape = function(i){
      var v = slides[i] && slides[i].querySelector('video');
      if(!v) return 3500;
      return (v.duration && isFinite(v.duration)) ? Math.min(Math.max(v.duration * 1000, 4000), 9000) : 7000;
    };
    var suivante = function(){
      var i = indexActuel(), n = slides.length;
      track.scrollTo({ left: ((i + 1) % n) * track.clientWidth, behavior: 'smooth' });
      slideTimer = setTimeout(suivante, dureeEtape((i + 1) % n));
    };
    var attente = null;
    track.addEventListener('scroll', function(){
      clearTimeout(attente);
      attente = setTimeout(function(){ activer(indexActuel()); }, 120);
    }, { passive: true });
    activer(0);
    slideTimer = setTimeout(suivante, dureeEtape(0));
  }

  // Apparition douce (une seule fois) des phrases « livraison offerte »
  function animerPhrases(){
    if(observer) observer.disconnect();
    var els = overlay.querySelectorAll('.eb-fp-ship');
    if(!('IntersectionObserver' in window)){ els.forEach(function(el){ el.classList.add('eb-in'); }); return; }
    observer = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('eb-in'); observer.unobserve(en.target); }
      });
    }, { root: overlay, threshold: 0.6 });
    // On attend la fin du glissement du panneau, pour que l'effet soit bien visible
    setTimeout(function(){ els.forEach(function(el){ observer.observe(el); }); }, 650);
  }

  // Téléphone : la vidéo occupe tout l'écran, sauf la place exacte du titre et des actifs
  function ajusterHauteurMedia(){
    if(!overlay) return;
    var titre = overlay.querySelector('.eb-fp-title');
    var sous = overlay.querySelector('.eb-fp-sub');
    if(!titre) return;
    var reserve = 16 + titre.offsetHeight + 10 + (sous ? sous.offsetHeight : 0) + 12;
    overlay.style.setProperty('--eb-reserve', reserve + 'px');
  }
  window.addEventListener('resize', ajusterHauteurMedia);

  // cible : "main" (bouton de la fiche) ou "accord" (bouton de l'accord parfait)
  // produit : fiche dont on reprend les photos pour la petite photo de rappel
  function selecteurHTML(variantes, label, cible, produit){
    var longues = variantes.some(function(v){ return String(v.label).length > 16; });
    var h = '<div class="eb-fp-sel" data-cible="' + cible + '" data-produit="' + esc(produit) + '">';
    h += '<div class="eb-fp-sel-label">' + esc(label || 'Choisissez votre teinte') + '</div>';
    h += '<div class="eb-fp-sel-options' + (longues ? ' eb-une-col' : '') + '">';
    variantes.forEach(function(v, i){
      h += '<button type="button" class="eb-fp-sel-opt' + (i === 0 ? ' active' : '') + '" data-variant="' + esc(v.variantId) + '"'
        + (v.photo != null ? ' data-photo="' + esc(v.photo) + '"' : '')
        + (v.image ? ' data-img="' + esc(hd(v.image, 400)) + '"' : '')
        + (v.fiche ? ' data-cible-fiche="' + esc(v.fiche) + '"' : '') + '>' + esc(v.label) + '</button>';
    });
    h += '</div>';
    if(variantes.some(function(v){ return v.photo != null || v.image; })){
      h += '<div class="eb-fp-sel-preview"><img class="eb-fp-sel-thumb" alt=""><div class="eb-fp-sel-caption">Votre choix<strong></strong></div></div>';
    }
    return h + '</div>';
  }

  function boutonAchat(variantId, prix, extraClass){
    return '<button type="button" class="eb-fp-buy eb-cart-add-btn' + (extraClass ? ' ' + extraClass : '') + '" data-variant-id="' + esc(variantId) + '">'
      + 'Ajouter au panier' + (prix ? ' <span class="eb-produit-add-price">— ' + esc(prix) + '</span>' : '') + '</button>';
  }

  // ctx.routine : identifiant de la routine depuis laquelle le soin est consulté
  function ebFicheOpen(id, ctx){
    var data = window.EB_PRODUITS && window.EB_PRODUITS[id];
    if(!data){ console.error('ELKHA.B fiche — produit inconnu :', id); return; }
    ctx = ctx || {};
    build();
    courant = { id: id, ctx: ctx };
    var routineParente = ctx.routine && window.EB_PRODUITS[ctx.routine];
    charger(REVIEWS_ENGINE, function(){ return typeof window.ebRenderReviews === 'function'; });
    if(data.inci) charger(INCI_DATA, function(){ return typeof INCI_DETAILS !== 'undefined'; });

    var h = '<div class="eb-fp-wrap"><div class="eb-fp-left">' + mediaHTML(data.media, data.nom) + '</div><div class="eb-fp-right"><div class="eb-fp-content">';

    // En-tête : titre, actifs, détails, petite note
    h += '<div class="eb-fp-head">';
    h += '<h1 class="eb-fp-title">' + esc(data.nom) + '</h1>';
    if(data.sousTitre) h += '<p class="eb-fp-sub">' + esc(data.sousTitre) + '</p>';
    if(data.actifs) h += '<p class="eb-fp-actifs">' + esc(data.actifs) + '</p>';
    if(data.details && data.details.length){
      var lignes = Array.isArray(data.details[0]) ? data.details : [data.details];
      lignes.forEach(function(l){ h += '<p class="eb-fp-details">' + l.map(esc).join(' · ') + '</p>'; });
    }
    if(data.note) h += '<p class="eb-fp-note">' + esc(data.note) + '</p>';
    h += '</div>';

    var variantes = data.variantes || [];
    if(routineParente){
      // Soin consulté depuis une routine : prix seul, l'achat se fait dans la routine
      if(data.prix) h += '<div class="eb-fp-price-only">' + esc(data.prix) + '</div>';
      h += '<p class="eb-fp-inclus">Inclus dans votre ' + esc(routineParente.nom) + '</p>';
    } else {
      // Sélecteur de variantes (teintes, formules…)
      if(variantes.length) h += selecteurHTML(variantes, data.choixLabel, 'main', data.photosTeintes || id);
      // Achat
      var idAchat = variantes.length ? variantes[0].variantId : data.variantId;
      if(idAchat){
        h += boutonAchat(idAchat, data.prix, 'eb-fp-main-buy');
        h += '<p class="eb-fp-ship">Livraison offerte dès 65€ d\'achat</p>';
      }
    }

    // Routine : présentation, soins inclus, rituel, conclusion
    var r = data.routine;
    var hAvant = h; h = '';
    if(r){
      if(r.intro){
        h += '<div class="eb-fp-intro">';
        String(r.intro).split('\n').forEach(function(p){ if(p.trim()) h += '<p>' + esc(p) + '</p>'; });
        h += '</div>';
      }
      var soins = (r.soins || []).filter(function(sid){ return window.EB_PRODUITS[sid]; });
      if(soins.length){
        h += '<h3 class="eb-fp-h3">' + esc(r.titreSoins || 'Votre routine') + '</h3>';
        h += '<div class="eb-fp-soins" style="grid-template-columns:repeat(' + Math.min(soins.length, 3) + ',1fr)">';
        soins.forEach(function(sid, k){
          var sp = window.EB_PRODUITS[sid], m = sp.media || {};
          var img = (m.images && m.images[0]) || m.image || '';
          h += '<button type="button" class="eb-fp-soin"' + (r.soinSelonChoix === k ? ' data-selon-choix="1"' : '') + ' data-fiche="' + esc(sid) + '" data-depuis-routine="' + esc(id) + '">';
          h += '<span class="eb-fp-soin-img">' + (img ? '<img src="' + esc(hd(img, 600)) + '" alt="' + esc(sp.nom) + '" loading="lazy">' : '') + '</span>';
          h += '<span class="eb-fp-soin-name">' + esc(sp.nom) + '</span><span class="eb-fp-soin-voir">Voir la fiche</span></button>';
        });
        h += '</div>';
      }
      if(r.etapes && r.etapes.length){
        h += '<h3 class="eb-fp-h3">Le rituel</h3>';
        var momentEnCours = null;
        r.etapes.forEach(function(et, i){
          var sp = et.soin && window.EB_PRODUITS[et.soin];
          var mo = et.moment || r.moment || '';
          if(i === 0 || mo !== momentEnCours){
            if(i > 0) h += '</ol>';
            if(mo) h += '<p class="eb-fp-moment"' + (i > 0 ? ' style="margin-top:26px"' : '') + '>' + esc(mo) + '</p>';
            h += '<ol class="eb-fp-etapes">';
            momentEnCours = mo;
          }
          h += '<li class="eb-fp-etape"><span class="eb-fp-etape-num">' + (i < 9 ? '0' : '') + (i + 1) + '</span><div>';
          if(et.titre || sp){
            var titreEt = esc(et.titre || sp.nom);
            if(sp && et.soin !== id && !routineParente){
              h += '<button type="button" class="eb-fp-etape-soin eb-fp-etape-lien" data-fiche="' + esc(et.soin) + '">' + titreEt + '</button>';
            } else {
              h += '<span class="eb-fp-etape-soin">' + titreEt + '</span>';
            }
          }
          h += '<div class="eb-fp-etape-txt">' + esc(et.texte) + '</div></div></li>';
        });
        h += '</ol>';
      }
      if(r.conclusion){
        var cc = String(r.conclusion).split('\n');
        h += '<p class="eb-fp-conclusion"><em>' + esc(cc[0]) + '</em>' + (cc.length > 1 ? '<br><strong>' + esc(cc.slice(1).join(' ')) + '</strong>' : '') + '</p>';
      }
    }

    var hRituel = h; h = hAvant;
    // Routine (soins en vignettes) : le rituel avant l'accordéon. Soin seul : le rituel après l'accordéon.
    var rituelApres = r && !(r.soins && r.soins.length);
    if(!rituelApres) h += hRituel;

    // Accordéon (+ composition en dernier)
    var sections = (data.sections || []).slice();
    h += sections.length || data.inci ? '<div class="eb-fp-acc">' : '<div>';
    if(data.inci) sections.push({ titre: 'Composition', inci: data.inci });
    sections.forEach(function(s, i){
      h += '<div class="eb-fp-acc-item' + (i === 0 ? ' open' : '') + '"' + (s.inci ? ' data-inci="' + esc(s.inci) + '"' : '') + '>';
      h += '<button type="button" class="eb-fp-acc-head"><h4>' + esc(s.titre) + '</h4><span class="eb-fp-acc-icon">+</span></button>';
      h += '<div class="eb-fp-acc-body"><div class="eb-fp-acc-inner">';
      if(s.texte){ String(s.texte).split('\n').forEach(function(p){ if(p.trim()) h += '<p>' + esc(p) + '</p>'; }); }
      if(s.liste){ h += '<ul>'; s.liste.forEach(function(li){ h += '<li>' + esc(li) + '</li>'; }); h += '</ul>'; }
      if(s.inci){ h += '<p>Chargement de la composition…</p>'; }
      h += '</div></div></div>';
    });
    h += '</div>';

    if(rituelApres) h += hRituel;

    // Vos expériences
    if(data.avis){
      h += '<div class="eb-fp-exp"><h2 class="eb-fp-h2">Vos expériences</h2>';
      h += '<div class="eb-reviews" data-produit="' + esc(data.avis) + '"><div class="eb-review-status">Aucun avis pour le moment.</div></div>';
      h += '<button type="button" class="eb-fp-avis" data-avis="' + esc(data.avis) + '">Laisser un avis</button></div>';
    }

    // Pour aller plus loin — L'accord parfait
    var a = routineParente ? null : data.accord;
    if(a){
      h += '<hr class="eb-fp-sep">';
      h += '<p class="eb-fp-kicker">Pour aller plus loin</p>';
      h += '<h2 class="eb-fp-h2" style="margin-top:6px">L\'accord parfait</h2>';
      var ficheA = a.fiche && window.EB_PRODUITS[a.fiche];
      var mA = (ficheA && ficheA.media) || {};
      var imgA = a.image || (mA.images && mA.images[0]) || mA.image;
      if(imgA) h += '<img class="eb-fp-accord-img" src="' + esc(hd(imgA, 1600)) + '" alt="' + esc(a.nom || '') + '">';
      var nomA = (ficheA && !a.image) ? ficheA.nom : a.nom;
      var sousA = a.sousTitre || (ficheA && !a.image ? ficheA.sousTitre : '');
      if(nomA) h += '<p class="eb-fp-accord-nom">' + esc(nomA) + '</p>';
      if(sousA) h += '<p class="eb-fp-accord-sous">' + esc(sousA) + '</p>';
      if(a.texte){
        var paras = String(a.texte).split('\n').filter(function(p){ return p.trim(); });
        // Plusieurs paragraphes : le premier en entier, la suite derrière « Voir plus »
        // Un seul long paragraphe : 4 lignes complètes, terminées par « … »
        h += '<div class="eb-fp-accord-text eb-clamp' + (paras.length === 1 ? ' eb-un' : '') + '">';
        paras.forEach(function(p, i){ h += '<p' + (i > 0 ? ' class="eb-suite"' : '') + '>' + esc(p) + '</p>'; });
        h += '</div>';
        if(paras.length > 1 || String(paras[0] || '').length > 220) h += '<button type="button" class="eb-fp-more">Voir plus</button>';
      }
      if(a.fiche){
        if(window.EB_PRODUITS[a.fiche]){
          h += '<div class="eb-fp-center"><button type="button" class="eb-fp-pill" data-fiche="' + esc(a.fiche) + '">Découvrir</button></div>';
        } else {
          h += '<div class="eb-fp-center"><a class="eb-fp-pill" style="text-decoration:none" href="https://soins.elkhab.com/#' + esc(a.fiche) + '">Découvrir</a></div>';
        }
      }
      var ficheAccord = a.fiche && window.EB_PRODUITS[a.fiche];
      var variantesAccord = a.variantes || (ficheAccord && ficheAccord.variantes) || [];
      if(variantesAccord.length){
        h += '<div style="margin-top:28px">' + selecteurHTML(variantesAccord, a.choixLabel || (ficheAccord && ficheAccord.choixLabel), 'accord', a.fiche) + '</div>';
      }
      var idAccord = variantesAccord.length ? variantesAccord[0].variantId : a.variantId;
      if(idAccord){
        h += boutonAchat(idAccord, a.prix || (ficheAccord && ficheAccord.prix), 'eb-fp-accord-buy');
        h += '<p class="eb-fp-ship">Complétez votre rituel Bloom et profitez de la livraison offerte dès 65 € d\'achat</p>';
      }
    }

    h += '</div></div></div>';

    overlay.innerHTML = h;
    overlay._ebMedia = data.media || {};
    overlay.scrollTop = 0;

    ajusterHauteurMedia();

    var v = overlay.querySelector('video');
    if(v){
      var boite = v.parentElement;
      var montrer = function(){ if(v.currentTime > 0.05){ boite.classList.add('eb-play'); v.removeEventListener('timeupdate', montrer); } };
      v.addEventListener('timeupdate', montrer);
      v.muted = true; var p = v.play(); if(p && p.catch) p.catch(function(){});
    }
    demarrerDiaporama();
    animerPhrases();

    requestAnimationFrame(function(){ overlay.classList.add('open'); });
    closeBtn.classList.add('visible');
    backBtn.classList.toggle('visible', pile.length > 0);
    if(document.getElementById('ebCartPanel')){ cartBtn.classList.add('visible'); majCompteur(); }
    document.documentElement.style.overflow = 'hidden';
  }

  // Revient à la fiche précédente (routine, ou fiche d'origine d'un « Découvrir »)
  function ebFicheRetour(){
    var prec = pile.pop();
    if(prec) ebFicheOpen(prec.id, prec.ctx);
  }

  function ebFicheClose(){
    if(!overlay) return;
    pile = []; courant = null;
    backBtn.classList.remove('visible');
    overlay.classList.remove('open');
    closeBtn.classList.remove('visible');
    cartBtn.classList.remove('visible');
    document.documentElement.style.overflow = '';
    clearTimeout(slideTimer);
    overlay.querySelectorAll('video').forEach(function(v){ v.pause(); });
  }

  window.ebFicheOpen = ebFicheOpen;
  window.ebFicheClose = ebFicheClose;

  // Déclencheurs : lien « #fiche-identifiant » (ex. image Carrd) ou élément data-fiche="identifiant"
  // Écoute sur window, en premier, pour passer avant tout autre code de la page
  window.addEventListener('click', function(e){
    var el = e.target.closest('[data-fiche], a[href*="#fiche-"]');
    if(!el) return;
    var id = el.getAttribute('data-fiche');
    if(!id){
      var href = el.getAttribute('href') || '';
      id = href.split('#fiche-')[1];
    }
    if(!id || !(window.EB_PRODUITS && window.EB_PRODUITS[id])) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Ouverte depuis une autre fiche : on garde la précédente pour le bouton « Retour »
    var dejaOuverte = overlay && overlay.classList.contains('open') && courant;
    if(dejaOuverte) pile.push(courant); else pile = [];
    var depuis = el.getAttribute('data-depuis-routine');
    ebFicheOpen(id, depuis ? { routine: depuis } : {});
  }, true);

  // Ouverture directe par l'adresse : ?fiche=radiance-serum
  var params = new URLSearchParams(window.location.search);
  var fiche = params.get('fiche');
  if(fiche){
    try {
      var u = new URL(window.location.href); u.searchParams.delete('fiche');
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    } catch(err){}
    var ouvrir = function(){ setTimeout(function(){ ebFicheOpen(fiche); }, 300); };
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ouvrir); else ouvrir();
  }
})();
