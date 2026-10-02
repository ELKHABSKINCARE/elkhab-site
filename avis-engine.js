(function(){
  // ==========================================================================
  // ELKHA.B — Panneau « Votre avis compte »
  // S'ouvre par-dessus la page (comme le diagnostic). La cliente ne quitte jamais
  // la page : panier et position sont conservés.
  // ==========================================================================

  var FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdYPf5x7JSnW9nKutmeQhy6uhhu-oPbE1HfqnptpOTZprf3rw/formResponse';
  var F = {
    produit: 'entry.1596870022',
    prenom:  'entry.772147728',
    age:     'entry.560387394',
    peau:    'entry.943870453',
    note:    'entry.754526713',
    avis:    'entry.237241556'
  };
  // Choix exacts de la question « Produit concerné » du formulaire
  var PRODUITS = [
    'Radiance C Serum','Lumi-Bloom Niacinamide 5','Luminescence Jour','Luminescence Nuit',
    'Gelée Lumi-Bloom au Prébiotique','Rituel Luminescence','Radiance Protect','Lumi-Veil CC Cream',
    'Radiance Eye Cream','Lumi-Eyes Bright & Glow Niacinamide + Acide hyaluronique',
    'Lumi-Eyes Bright & Glow Caféine + Vitamine C','Lumi-Eyes Bright & Glow Antioxydants + Provitamine B5',
    'Routine éclat','Routine hydratation','Routine anti-âge','Routine équilibre',
    'Routine teint & protection','Routine regard'
  ];
  var BANNIERE = 'https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000002aac81f4b0c844adde3b8458.png?v=1790842458&width=1200';

  // ------------------------------------------------------------------ STYLE
  var css = ''
  + ".eb-av-overlay{position:fixed;inset:0;background:#141414;color:#fff;z-index:99999;transform:translateX(-100%);transition:transform .5s cubic-bezier(.65,0,.35,1);overflow-y:auto;font-family:'Montserrat',sans-serif;-webkit-overflow-scrolling:touch}"
  + ".eb-av-overlay.open{transform:translateX(0)}"
  + ".eb-av-overlay *{box-sizing:border-box}"
  + ".eb-av-overlay,.eb-av-overlay input,.eb-av-overlay select,.eb-av-overlay textarea,.eb-av-overlay button{font-family:'Montserrat',sans-serif !important}"
  + ".eb-av-close{position:fixed;top:20px;left:20px;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.12);border:none;font-size:20px;line-height:1;color:#fff;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center;transition:transform .2s ease,background .2s ease}"
  + ".eb-av-close:hover{transform:rotate(90deg);background:rgba(255,255,255,.22)}"
  + ".eb-av-inner{max-width:540px;margin:0 auto;padding:76px 24px 70px}"
  + ".eb-av-banner{display:block;width:100%;height:auto;margin:0 0 34px}"
  + ".eb-av-title{font-size:20px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;text-align:center;margin:0 0 16px;color:#fff}"
  + ".eb-av-intro{font-size:13.5px;line-height:1.8;text-align:center;opacity:.75;margin:0 0 38px}"
  + ".eb-av-label{font-size:11.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;margin:34px 0 14px}"
  + ".eb-av-overlay input,.eb-av-overlay select,.eb-av-overlay textarea{width:100%;font-size:15px;color:#fff;background:transparent;border:none;border-bottom:1.5px solid rgba(255,255,255,.85);border-radius:0;padding:12px 2px;margin-bottom:14px;outline:none;-webkit-appearance:none;appearance:none}"
  + ".eb-av-overlay input::placeholder,.eb-av-overlay textarea::placeholder{color:#fff;opacity:.45}"
  + ".eb-av-overlay select{background-image:linear-gradient(45deg,transparent 50%,#fff 50%),linear-gradient(135deg,#fff 50%,transparent 50%);background-position:calc(100% - 14px) 50%,calc(100% - 9px) 50%;background-size:5px 5px,5px 5px;background-repeat:no-repeat;padding-right:28px}"
  + ".eb-av-overlay select option{color:#000;background:#fff}"
  + ".eb-av-overlay textarea{border:1px solid rgba(255,255,255,.35);padding:12px 14px;min-height:96px;resize:vertical;line-height:1.6;margin:10px 0 0}"
  + ".eb-av-row{display:flex;gap:16px}.eb-av-row > *{flex:1}"
  + ".eb-av-card{border:1px solid rgba(255,255,255,.2);padding:18px;margin-bottom:16px;position:relative}"
  + ".eb-av-card-head{display:flex;align-items:center;gap:14px;margin-bottom:12px}"
  + ".eb-av-card-img{width:60px;height:60px;object-fit:cover;flex-shrink:0;background:#2a2a2a}"
  + ".eb-av-card-name{font-size:14.5px;font-weight:600;line-height:1.4}"
  + ".eb-av-stars{display:flex;gap:6px;margin:4px 0 2px}"
  + ".eb-av-star{background:none;border:none;padding:2px;font-size:26px;line-height:1;cursor:pointer;color:#4a4a4a;transition:transform .15s ease,color .15s ease}"
  + ".eb-av-star.on{color:#fff}.eb-av-star:hover{transform:scale(1.15)}"
  + ".eb-av-remove{position:absolute;top:10px;right:12px;background:none;border:none;font-size:20px;line-height:1;cursor:pointer;color:#fff;opacity:.45}.eb-av-remove:hover{opacity:1}"
  + ".eb-av-link{display:inline-block;background:none;border:none;padding:4px 0;font-size:12px;letter-spacing:.06em;text-decoration:underline;cursor:pointer;color:#fff;opacity:.75}"
  + ".eb-av-error{font-size:13px;line-height:1.6;color:#ff8a80;margin:18px 0 0}"
  + ".eb-av-send{display:block;width:100%;margin-top:22px;background:#fff;color:#000;border:none;padding:18px;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease,opacity .2s ease}"
  + ".eb-av-send:hover{transform:scale(1.02)}.eb-av-send[disabled]{opacity:.5;cursor:default;transform:none}"
  + ".eb-av-note{font-size:11.5px;line-height:1.7;text-align:center;opacity:.5;margin:14px 0 0}"
  + ".eb-av-thanks{text-align:center;padding:30px 0 10px;display:none}"
  + ".eb-av-thanks-title{font-size:18px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin:0 0 14px}"
  + ".eb-av-thanks p{font-size:14px;line-height:1.8;opacity:.75;margin:0 0 26px}"
  + ".eb-av-thanks button{display:inline-block;background:#fff;color:#000;border:none;padding:16px 30px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer}";

  // ------------------------------------------------------------------ STRUCTURE
  var overlay, list, errorEl, sendBtn, formEl, thanksEl;
  var built = false;

  function build(){
    if(built) return;
    built = true;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    if(!document.querySelector('link[href*="family=Montserrat"]')){
      var lk = document.createElement('link'); lk.rel = 'stylesheet';
      lk.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap';
      document.head.appendChild(lk);
    }
    overlay = document.createElement('div');
    overlay.className = 'eb-av-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Laisser un avis');
    overlay.innerHTML = ''
      + '<button type="button" class="eb-av-close" aria-label="Fermer">&times;</button>'
      + '<div class="eb-av-inner">'
      +   '<img class="eb-av-banner" src="' + BANNIERE + '" alt="ELKHA.B Paris">'
      +   '<h2 class="eb-av-title">Votre avis compte</h2>'
      +   '<p class="eb-av-intro">Texture, sensations, évolution de votre peau… Partagez votre expérience, simplement et sincèrement. Votre avis aidera d’autres peaux à trouver les soins qui leur correspondent.</p>'
      +   '<div class="eb-av-form">'
      +     '<div class="eb-av-label">Vous</div>'
      +     '<input type="text" class="eb-av-prenom" placeholder="Prénom" maxlength="40" autocomplete="given-name">'
      +     '<div class="eb-av-row">'
      +       '<input type="text" class="eb-av-age" placeholder="Âge" inputmode="numeric" maxlength="3">'
      +       '<select class="eb-av-peau">'
      +         '<option value="">Type de peau</option>'
      +         '<option value="Peau sèche">Peau sèche</option>'
      +         '<option value="peau grasse">Peau grasse</option>'
      +         '<option value="Peau mixte">Peau mixte</option>'
      +         '<option value="Peau sensible">Peau sensible</option>'
      +         '<option value="Peau normale">Peau normale</option>'
      +         '<option value="Peau acnéique">Peau acnéique</option>'
      +       '</select>'
      +     '</div>'
      +     '<div class="eb-av-label">Vos soins</div>'
      +     '<div class="eb-av-products"></div>'
      +     '<button type="button" class="eb-av-link eb-av-add">+ Ajouter un autre soin</button>'
      +     '<input type="text" class="eb-av-hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">'
      +     '<div class="eb-av-error" role="alert"></div>'
      +     '<button type="button" class="eb-av-send">Envoyer mes avis</button>'
      +     '<p class="eb-av-note">Vos avis sont publiés sur le site après vérification par notre équipe.</p>'
      +   '</div>'
      +   '<div class="eb-av-thanks">'
      +     '<div class="eb-av-thanks-title">Merci 🤍</div>'
      +     '<p>Vos avis ont bien été envoyés. Ils apparaîtront sur le site après vérification. Merci de faire grandir ELKHA.B avec nous.</p>'
      +     '<button type="button" class="eb-av-continue">Continuer mes achats</button>'
      +   '</div>'
      + '</div>';
    document.body.appendChild(overlay);

    list = overlay.querySelector('.eb-av-products');
    errorEl = overlay.querySelector('.eb-av-error');
    sendBtn = overlay.querySelector('.eb-av-send');
    formEl = overlay.querySelector('.eb-av-form');
    thanksEl = overlay.querySelector('.eb-av-thanks');

    overlay.querySelector('.eb-av-close').addEventListener('click', ebAvisClose);
    overlay.querySelector('.eb-av-continue').addEventListener('click', ebAvisClose);
    overlay.querySelector('.eb-av-add').addEventListener('click', function(){ addCard('', '', '', true); });
    sendBtn.addEventListener('click', send);
  }

  function safeImg(src){
    if(!src) return '';
    if(src.indexOf('//') === 0) src = 'https:' + src;
    return /^https:\/\/cdn\.shopify\.com\//.test(src) ? src : '';
  }

  function addCard(choice, display, img, removable){
    var card = document.createElement('div');
    card.className = 'eb-av-card';
    card.dataset.note = '';

    var head = document.createElement('div');
    head.className = 'eb-av-card-head';
    var src = safeImg(img);
    if(src){
      var im = document.createElement('img');
      im.className = 'eb-av-card-img'; im.src = src; im.alt = '';
      head.appendChild(im);
    }
    var nameEl = document.createElement('div');
    nameEl.className = 'eb-av-card-name';
    nameEl.textContent = display || choice || 'Votre soin';
    head.appendChild(nameEl);
    card.appendChild(head);

    if(choice && PRODUITS.indexOf(choice) !== -1){
      card.dataset.choice = choice;
    } else {
      var sel = document.createElement('select');
      var opt0 = document.createElement('option'); opt0.value = ''; opt0.textContent = 'Choisissez le soin';
      sel.appendChild(opt0);
      PRODUITS.forEach(function(p){ var o = document.createElement('option'); o.value = p; o.textContent = p; sel.appendChild(o); });
      sel.addEventListener('change', function(){ card.dataset.choice = sel.value; if(!display) nameEl.textContent = sel.value || 'Votre soin'; });
      card.dataset.choice = '';
      card.appendChild(sel);
    }

    var stars = document.createElement('div');
    stars.className = 'eb-av-stars';
    for(var s = 1; s <= 5; s++){
      (function(val){
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'eb-av-star'; b.textContent = '★';
        b.setAttribute('aria-label', val + ' sur 5');
        b.addEventListener('click', function(){
          card.dataset.note = String(val);
          stars.querySelectorAll('.eb-av-star').forEach(function(x, idx){ x.classList.toggle('on', idx < val); });
          errorEl.textContent = '';
        });
        stars.appendChild(b);
      })(s);
    }
    card.appendChild(stars);

    var ta = document.createElement('textarea');
    ta.placeholder = 'Votre avis sur ce soin…';
    ta.maxLength = 1500;
    card.appendChild(ta);

    if(removable){
      var rm = document.createElement('button');
      rm.type = 'button'; rm.className = 'eb-av-remove'; rm.innerHTML = '&times;';
      rm.setAttribute('aria-label', 'Retirer ce soin');
      rm.addEventListener('click', function(){ card.remove(); });
      card.appendChild(rm);
    }
    list.appendChild(card);
  }

  // ------------------------------------------------------------------ OUVERTURE / FERMETURE
  // items : [{ n: 'Nom du formulaire', d: 'Nom affiché', i: 'photo' }, ...]
  function ebAvisOpen(items){
    build();
    list.innerHTML = '';
    errorEl.textContent = '';
    formEl.style.display = 'block';
    thanksEl.style.display = 'none';
    sendBtn.disabled = false;
    sendBtn.textContent = 'Envoyer mes avis';

    var seen = {};
    (items || []).forEach(function(it){
      var c = it && it.n ? it.n : '';
      if(!c || PRODUITS.indexOf(c) === -1 || seen[c]) return; // soin non reconnu : ignoré
      seen[c] = true;
      addCard(c, it.d || '', it.i || '', false);
    });
    if(!list.children.length){ addCard('', '', '', false); }

    overlay.scrollTop = 0;
    requestAnimationFrame(function(){ overlay.classList.add('open'); });
    document.documentElement.style.overflow = 'hidden';
  }
  function ebAvisClose(){
    if(!overlay) return;
    overlay.classList.remove('open');
    document.documentElement.style.overflow = '';
  }
  window.ebAvisOpen = ebAvisOpen;
  window.ebAvisClose = ebAvisClose;

  // ------------------------------------------------------------------ ENVOI
  async function send(){
    errorEl.textContent = '';
    if(overlay.querySelector('.eb-av-hp').value) return; // robot

    var prenom = overlay.querySelector('.eb-av-prenom').value.trim();
    var age = overlay.querySelector('.eb-av-age').value.trim();
    var peau = overlay.querySelector('.eb-av-peau').value;

    if(!prenom){ errorEl.textContent = 'Indiquez votre prénom.'; return; }
    if(!/^\d{2,3}$/.test(age)){ errorEl.textContent = 'Indiquez votre âge (en chiffres).'; return; }
    if(!peau){ errorEl.textContent = 'Choisissez votre type de peau.'; return; }

    var toSend = [];
    var cards = list.querySelectorAll('.eb-av-card');
    for(var i = 0; i < cards.length; i++){
      var card = cards[i];
      var note = card.dataset.note;
      var text = card.querySelector('textarea').value.trim();
      var choice = card.dataset.choice || '';
      if(!note && !text) continue;
      if(!choice){ errorEl.textContent = 'Choisissez le soin pour chacun de vos avis.'; return; }
      if(!note){ errorEl.textContent = 'Donnez une note (étoiles) à « ' + choice + ' ».'; return; }
      if(text.length < 3){ errorEl.textContent = 'Écrivez quelques mots sur « ' + choice + ' ».'; return; }
      toSend.push({ choice: choice, note: note, text: text });
    }
    if(!toSend.length){ errorEl.textContent = 'Notez au moins un soin pour envoyer votre avis.'; return; }

    sendBtn.disabled = true;
    sendBtn.textContent = 'Envoi en cours…';
    try {
      for(var j = 0; j < toSend.length; j++){
        var body = new URLSearchParams();
        body.append(F.produit, toSend[j].choice);
        body.append(F.prenom, prenom);
        body.append(F.age, age);
        body.append(F.peau, peau);
        body.append(F.note, toSend[j].note);
        body.append(F.avis, toSend[j].text);
        await fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body: body });
      }
      formEl.style.display = 'none';
      thanksEl.style.display = 'block';
      overlay.scrollTo({ top: 0, behavior: 'smooth' });
    } catch(err){
      console.error('ELKHA.B avis — envoi impossible', err);
      errorEl.textContent = 'L’envoi n’a pas fonctionné. Vérifiez votre connexion et réessayez.';
      sendBtn.disabled = false;
      sendBtn.textContent = 'Envoyer mes avis';
    }
  }

  // ------------------------------------------------------------------ DÉCLENCHEURS
  // 1) Boutons « Laisser un avis » des fiches : <button class="eb-laisser-avis" data-avis="Nom du soin">
  document.addEventListener('click', function(e){
    var btn = e.target.closest('[data-avis]');
    if(!btn) return;
    e.preventDefault();
    e.stopPropagation();
    ebAvisOpen([{ n: btn.getAttribute('data-avis') }]);
  }, true);

  // 2) Arrivée depuis le mail « Livrée » : ?avis=1&n=...&d=...&i=...
  var params = new URLSearchParams(window.location.search);
  if(params.get('avis') === '1'){
    var ns = params.getAll('n'), ds = params.getAll('d'), is = params.getAll('i');
    var items = [];
    for(var k = 0; k < Math.max(ns.length, ds.length); k++){ items.push({ n: ns[k] || '', d: ds[k] || '', i: is[k] || '' }); }
    try {
      var u = new URL(window.location.href);
      ['avis','n','d','i'].forEach(function(key){ u.searchParams.delete(key); });
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    } catch(err){}
    var openFromMail = function(){ setTimeout(function(){ ebAvisOpen(items); }, 300); };
    if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', openFromMail); }
    else { openFromMail(); }
  }
})();
