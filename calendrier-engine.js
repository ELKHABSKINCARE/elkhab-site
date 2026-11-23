// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Calendrier des fêtes 2026 (page calendrier.elkhab.com)
// Les textes lus par Google (titre, règles, coffret) sont écrits dans l'embed Carrd.
// Ce fichier dessine le flacon-calendrier, ouvre la case du jour et parle au registre (Google Sheet).
// Toutes les images sont préparées à l'avance (rien n'est retouché dans le téléphone).
// =====================================================================
(function(){ if(document.getElementById('eb-montserrat')) return; var l = document.createElement('link'); l.id = 'eb-montserrat'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap'; document.head.appendChild(l); })();
(function(){ var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Parisienne&display=swap'; document.head.appendChild(l); })();
(function(){
  if(window.ebCalendrier) return; window.ebCalendrier = true;

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var REGLAGES = {
    registre: 'https://script.google.com/macros/s/AKfycbyjt74Gg3u7w20CGsECMA0OeXhfz_YLAsq3m0hESsWhcZ2myy3PlM9mjTQCHaqDGM2aWw/exec',
    images:   'https://elkhabskincare.github.io/elkhab-site/',
    page:     'https://calendrier.elkhab.com/',
    boutique: 'https://soins.elkhab.com/',
    confidentialite: 'https://elkhab.com/#politique-confidentialite',
    skinId:   'https://elkhabskincare.github.io/elkhab-site/skin-id-engine.js?v=9',
    annee: 2026,
    dimanches: [6, 13, 20],
    casesDoubles: [6, 13, 18, 20, 23]
  };
  var IMG = REGLAGES.images;
  var COLLABS = ['LAURELIE', 'CYNTHIA', 'SELENA', 'PAULINE', 'VERONIQUE'];   // liens ?ami=PRENOM des collaboratrices (comme le registre)
  var JOURS_COLLAB = [7, 8];
  var BAL = 'https://balance.elkhab.com/?fiche=', BLO = 'https://bloom.elkhab.com/?fiche=';

  // ───────────────────────── LES 24 CASES ─────────────────────────
  // type : liv (livraison), txt (texte seul), soin (soin offert, avec image), remise (soin à −x %, avec image), bonus (chances en plus)
  var LIV = { type: 'liv', titre: 'Votre livraison offerte', sous: 'Sans minimum d’achat, sur toute la boutique.',
              conf: 'Votre livraison offerte est enregistrée : elle s’appliquera à votre commande jusqu’à minuit.' };
  var SEL = function(n){ return { type: 'txt', titre: '–30 % sur un soin de la sélection', sous: 'Dès 2 soins achetés. Repérez la pastille rouge.',
              conf: 'Votre remise de 30 % est enregistrée : elle s’appliquera au soin de la sélection de votre panier jusqu’à minuit.',
              lien: 'VOIR LA SÉLECTION', url: REGLAGES.boutique + '?selection=' + n }; };
  var CASES = {
    1:  LIV,
    2:  { type: 'remise', soin: 'Fusion Balance', img: 'fusion-balance', sous: 'Démaquillant biphasé, doux même pour le waterproof', remise: '–20 %', url: BAL + 'fusion-balance' },
    3:  { type: 'bonus', titre: 'Vos invitations comptent double', sous: 'Aujourd’hui, chaque personne qui vous rejoint grâce à votre lien vous offre 5 étoiles au lieu de 3.',
          conf: 'Aujourd’hui seulement, chaque personne qui ouvre sa première case grâce à votre lien vous offre 5 étoiles.' },
    4:  SEL(1),
    5:  { type: 'soin', soin: 'Hydra Balance', img: 'hydra-balance_1', valeur: '28,90 €', genre: 'm', url: BAL + 'hydra-balance' },
    6:  { type: 'txt', titre: '–20 % sur vos soins', sous: 'Aujourd’hui seulement, hors coffrets et routines.',
          conf: 'Votre remise de 20 % est enregistrée : elle s’appliquera à vos soins jusqu’à minuit, hors coffrets et routines.' },
    7:  { type: 'remise', soin: 'Radiance Protect', img: 'radiance-protect', sous: 'Protection solaire SPF 50 minérale en stick, sans effet gras', remise: '–15 %', url: BLO + 'radiance-protect' },
    8:  LIV,
    9:  { type: 'txt', titre: '–30 % sur votre 2e soin', sous: 'Sur un soin à l’unité, dès 2 soins achetés.',
          conf: 'Votre remise de 30 % sur votre 2e soin est enregistrée : elle s’appliquera à votre commande jusqu’à minuit.' },
    10: { type: 'txt', titre: '–20 % sur votre routine Skin ID', sous: 'Dès 2 soins à l’unité, hors coffrets et routines.',
          conf: 'Votre remise de 20 % est enregistrée : elle s’appliquera dès 2 soins à l’unité jusqu’à minuit. Faites votre Skin ID et composez votre routine avec les soins qu’il vous conseille.',
          lien: 'FAIRE MON SKIN ID', skinId: true },
    11: { type: 'remise', soin: 'Lumi-Bloom Arbutin', img: 'lumibloom-arbutin', sous: 'Sérum unifiant anti-taches', remise: '–15 %', url: BLO + 'lumibloom-arbutin' },
    12: { type: 'soin', soin: 'Gelée Lumi-Bloom', img: 'gelee-lumibloom', valeur: '28,90 €', genre: 'f', url: BLO + 'gelee-lumibloom' },
    13: { type: 'remise', soin: 'Glyco Balance', img: 'glyco-balance', sous: 'Lotion resurfaçante, effet peau neuve', remise: '–20 %', url: BAL + 'glyco-balance' },
    14: { type: 'remise', soin: 'Bright Control', img: 'bright-control', sous: 'Crème correctrice et lissante anti-taches', remise: '–15 %', url: BAL + 'bright-control' },
    15: { type: 'remise', soin: 'Lumi-Veil', img: 'lumiveil-cc-cream', sous: 'Votre teint de fête : unifie, illumine, SPF 30', remise: '–10 %', apres: 'SUR LES 4 TEINTES', url: BLO + 'lumiveil-cc-cream' },
    16: { type: 'remise', soin: 'BHA Balance', img: 'bha-balance', sous: 'Lotion purifiante anti-imperfections', remise: '–15 %', url: BAL + 'bha-balance' },
    17: { type: 'remise', soin: 'Luminescence Nuit', img: 'luminescence-nuit', sous: 'Crème de nuit repulpante au plancton marin, soutien du collagène', remise: '–15 %', url: BLO + 'luminescence-nuit' },
    18: { type: 'bonus', titre: 'Votre case compte double', sous: '2 étoiles pour le tirage de dimanche et 2 pour le grand tirage du 24.',
          conf: 'Votre case compte double : 2 étoiles pour le tirage de dimanche et 2 pour le grand tirage du 24.' },
    19: { type: 'txt', titre: 'Votre boule de bain offerte', sous: 'Rituel Spa, offerte dès 2 soins achetés.',
          conf: 'Votre boule de bain Rituel Spa est enregistrée : elle sera ajoutée à votre commande de 2 soins jusqu’à minuit.' },
    20: { type: 'soin', soin: 'Fusion Balance', img: 'fusion-balance', valeur: '26,90 €', genre: 'm', url: BAL + 'fusion-balance' },
    21: { type: 'remise', soin: 'Gelée Lumi-Bloom', img: 'gelee-lumibloom', sous: 'Soin aux prébiotiques, soutien de la barrière cutanée', remise: '–20 %', url: BLO + 'gelee-lumibloom' },
    22: SEL(2),
    23: { type: 'bonus', titre: 'Votre case compte double', sous: 'Veille du grand tirage : 2 étoiles pour le coffret Velours d’Hiver, demain à 18 h.',
          conf: 'Votre case compte double : 2 étoiles pour le grand tirage de demain, 18 h.' },
    24: { type: 'soin', soin: 'Luminescence Jour', img: 'luminescence-jour', valeur: '34,90 €', genre: 'm', url: BLO + 'luminescence-jour' }
  };
  // images des soins déjà préparées (les autres cases s'affichent en texte en attendant)
  var IMAGES_PRETES = ['hydra-balance_1', 'fusion-balance', 'radiance-protect', 'lumibloom-arbutin', 'gelee-lumibloom', 'glyco-balance', 'bright-control', 'lumiveil-cc-cream', 'bha-balance', 'luminescence-nuit', 'luminescence-jour'];

  // les coffrets à gagner
  var LOTS = {
    lumiere: { nom: 'Lumière d’hiver', sous: 'COFFRET ÉCLAT · VALEUR 59 €', img: 'calendrier-lot-lumiere-dhiver.jpg',
               alt: 'Coffret de soins visage vegan Lumière d’hiver ELKHA.B',
               txt: 'Un duo de soins vegan à la formulation naturelle, pour garder un teint de fête tout l’hiver : le Radiance C Serum, sérum crémeux antioxydant qui ravive l’éclat, et le Lumi-Bloom Arbutin, sérum unifiant qui estompe les taches. Une peau lumineuse, même sous la neige.' },
    velours: { nom: 'Velours d’Hiver', sous: 'COFFRET SÉRUMS FERMETÉ · VALEUR 94 €', img: 'calendrier-lot-velours-dhiver.jpg',
               alt: 'Coffret de sérums visage vegan Velours d’Hiver ELKHA.B',
               txt: 'Trois soins vegan à la formulation naturelle pour une peau plus ferme et plus lisse : le Bakuchiol Elixir, l’alternative végétale au rétinol qui aide à stimuler le collagène et raffermit, le sérum Active Lift pour atténuer rides et ridules, et le Luminescence Boost pour une peau plus tonique et pleine de rebond. Un coffret à offrir… ou à s’offrir.' }
  };

  var AUG = 'Gagnez des étoiles : chaque personne qui vous rejoint grâce à votre lien vous en offre 3, et chaque commande autant que son montant.';
  var AUG_RETARD = 'Vous arrivez en cours de route ? Chaque personne qui vous rejoint grâce à votre lien vous offre 3 étoiles, et chaque commande autant que son montant.';
  var AUG_3 = 'Aujourd’hui seulement : chaque personne qui vous rejoint grâce à votre lien vous offre 5 étoiles.';
  var AUG_24 = 'Encore des étoiles pour ce soir : chaque personne qui vous rejoint grâce à votre lien vous en offre 3, et chaque commande autant que son montant.';
  var MSG = 'Une case à ouvrir chaque jour sur le calendrier des fêtes ELKHA.B, des surprises et des coffrets à gagner : ';

  // ───────────────────────── PLACEMENT DES 24 CASES (pixels du flacon 620 × 1500) ─────────────────────────
  var GEO = {"planche":[1260,580],"cases":{"1":[171,526,274,616,0,0],"2":[171,729,274,821,210,0],"3":[381,523,470,615,420,0],"4":[381,889,470,983,630,0],"5":[268,652,387,740,840,0],"6":[171,811,332,904,1050,0],"7":[381,969,470,1106,0,145],"8":[381,604,470,697,210,145],"9":[268,1184,387,1273,420,145],"10":[268,734,387,822,630,145],"11":[268,1020,387,1109,840,145],"12":[268,529,387,658,1050,145],"13":[268,897,387,1027,0,290],"14":[171,1177,274,1272,210,290],"15":[326,807,470,904,420,290],"16":[171,1055,274,1190,630,290],"17":[171,607,274,739,840,290],"18":[381,1173,470,1270,1050,290],"19":[171,892,274,985,0,435],"20":[171,1259,332,1355,210,435],"21":[381,685,470,820,420,435],"22":[171,973,274,1067,630,435],"23":[326,1254,470,1355,840,435],"24":[268,1091,470,1191,1050,435]}};

  // ───────────────────────────── LE STYLE ─────────────────────────────
  var CSS = "#ebc,#ebc-bas{font-family:Montserrat,system-ui,sans-serif;color:#5a1e2c}\n#ebc{width:100vw;max-width:100vw;margin-left:calc(50% - 50vw)}\n#ebc *,#ebc-bas *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}\n#ebc .page{display:flex;flex-direction:column;align-items:center;padding:0 0 30px}\n#ebc .stage{position:relative;width:min(100vw,440px);aspect-ratio:620/1320;overflow:hidden;flex:none}\n#ebc .scene{position:absolute;left:0;width:100%;top:-7.955%;aspect-ratio:620/1500}\n#ebc .scene img{position:absolute;display:block;user-select:none;-webkit-user-drag:none}\n#ebc .base{inset:0;width:100%;height:100%}\n#ebc .capot{left:21.77%;top:13.27%;width:56.45%}\n#ebc .tiroir.revoir{opacity:.38!important;animation:appel 1.8s ease-in-out infinite}\n#ebc .tiroir.appel{animation:appel 1.8s ease-in-out infinite}\n@keyframes appel{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}\n#ebc .aide{position:absolute;left:21.77%;width:56.45%;top:28.15%;pointer-events:none;transition:opacity .5s}\n#ebc .aide.cache{opacity:0}\n#ebc .aide img{position:static!important;display:block;width:100%;animation:souffle 4.2s ease-in-out infinite}\n@keyframes souffle{0%,100%{opacity:0}30%,70%{opacity:1}}\n#ebc .verre{background-color:rgba(255,250,246,.58);-webkit-backdrop-filter:blur(16px) saturate(1.25);backdrop-filter:blur(16px) saturate(1.25);border:1px solid rgba(255,255,255,.6);box-shadow:inset 0 1px 0 rgba(255,255,255,.85),0 16px 34px rgba(40,0,8,.30);background-repeat:no-repeat}\n#ebc .carte,#ebc .ch2,#ebc .f24{position:absolute;left:50%;width:78%;border-radius:11px;text-align:center;top:52%;transform:translate(-50%,-50%) scale(.1);opacity:0;pointer-events:none}\n#ebc .carte,#ebc .f24{aspect-ratio:1160/1000;overflow:hidden}\n#ebc .carte{background-image:url(https://elkhabskincare.github.io/elkhab-site/calendrier-fond-gain.png),linear-gradient(135deg,rgba(255,255,255,.35),rgba(255,240,232,.15));background-size:100% 100%}\n#ebc .f24{background-image:url(https://elkhabskincare.github.io/elkhab-site/calendrier-fond-24.png),linear-gradient(135deg,rgba(255,255,255,.35),rgba(255,240,232,.15));background-size:100% 100%}\n#ebc .f24 .d{position:absolute;left:8%;top:8%;text-align:left;font-size:10px;letter-spacing:3.2px;font-weight:700;color:#a8814a;line-height:1.5}\n#ebc .f24 .d span{font-size:8px;letter-spacing:2.4px;font-weight:600}\n#ebc .f24 .mot{position:absolute;left:9%;right:9%;top:23.5%;font-size:10.8px;line-height:1.5;color:#5c3a30;font-weight:500;font-style:italic}\n#ebc .f24 .sig{position:absolute;left:0;right:0;top:61%;font-family:Parisienne,cursive;font-size:21px;color:#a8814a}\n#ebc .f24 .b{position:absolute;left:0;right:0;top:73%;font-size:12px;letter-spacing:2.6px;font-weight:800;cursor:pointer}\n#ebc .f24 .ce-soir{position:absolute;left:6%;right:6%;bottom:5.5%;font-size:9.5px;color:#6b4a3e;font-weight:600;letter-spacing:.3px;line-height:1.5}\n#ebc .f24 .ce-soir span{font-weight:500;font-size:9px}\n#ebc .reflet.go2{animation:reflet 1.3s cubic-bezier(.45,.05,.3,1) 2 forwards}\n#ebc .relief{background:linear-gradient(180deg,#b3283f 0%,#8c1a2c 55%,#6e0f20 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;filter:drop-shadow(0 1.5px 1px rgba(70,8,20,.28)) drop-shadow(0 5px 7px rgba(70,8,20,.16))}\n#ebc .carte .txt{transition:opacity .5s}\n#ebc .carte:not(.lu) .txt{opacity:0}\n#ebc .carte .d,#ebc .ch2 .d{position:absolute;left:8%;top:9%;font-size:10px;letter-spacing:3.2px;font-weight:700;color:#a8814a}\n#ebc .carte .in{position:absolute;left:6%;right:6%;top:33%}\n#ebc .carte .t{display:inline-block;font-size:18px;font-weight:700;line-height:1.15;white-space:nowrap}\n#ebc .carte .s{font-size:11.5px;line-height:1.45;margin-top:6px;color:#5c3a30;font-weight:500}\n#ebc .carte .b{display:inline-block;margin-top:16px;padding:2px 2px;cursor:pointer;font-size:17px;letter-spacing:3px;font-weight:800}\n#ebc .carte .soin{position:absolute;left:6%;right:6%;top:14%}\n#ebc .carte .soin img{position:static!important;display:block;height:calc(min(100vw,440px)*0.3);margin:0 auto;filter:drop-shadow(0 6px 8px rgba(60,10,20,.16))}\n#ebc .carte .soin .t{margin-top:6px;font-size:18px}\n#ebc .carte .soin .s{margin-top:3px;font-size:11px}\n#ebc .carte .soin .v{margin-top:3px;font-size:9px;letter-spacing:2.4px;font-weight:700;color:#a8814a}\n#ebc .carte .soin .b{margin-top:9px;font-size:15px}\n#ebc .carte.g-soin{background-image:url(https://elkhabskincare.github.io/elkhab-site/calendrier-fond-chances.png),linear-gradient(135deg,rgba(255,255,255,.35),rgba(255,240,232,.15))}\n#ebc .carte .gl,#ebc .carte .soin{display:none}\n#ebc .carte.g-liv .gl,#ebc .carte.g-soin .soin{display:block}\n#ebc .ch2{background-image:url(https://elkhabskincare.github.io/elkhab-site/calendrier-fond-chances.png),linear-gradient(135deg,rgba(255,255,255,.35),rgba(255,240,232,.15));background-size:100% auto,100% 100%;background-position:top center,0 0;padding:15.5% 7% 5.5%}\n#ebc .ch2 .conf{font-size:11px;line-height:1.5;color:#5c3a30;font-weight:500}\n#ebc .ch2 .conf b{font-weight:700;color:#5a1e2c}\n#ebc .ch2 .lien{display:inline-block;margin-top:5px;font-size:9px;letter-spacing:2.2px;font-weight:700;color:#a8814a;text-decoration:none;border-bottom:1px solid rgba(168,129,74,.6);padding-bottom:1px}\n#ebc .ch2 .filet{width:34px;height:1px;background:#c9a25c;margin:11px auto 9px}\n#ebc .ch2 .vc{font-size:9px;letter-spacing:2.8px;font-weight:700;color:#a8814a}\n#ebc .ch2 .cols{display:flex;justify-content:center;gap:10px;margin-top:3px}\n#ebc .ch2 .col{flex:1;max-width:46%}\n#ebc .ch2 .n{display:inline-block;font-size:24px;font-weight:700;line-height:1.2}\n#ebc .ch2 .n.pop{animation:popn .7s}\n@keyframes popn{40%{transform:scale(1.4)}}\n#ebc .ch2 .lb{font-size:9.5px;line-height:1.35;color:#6b4a3e;font-weight:500}\n#ebc .ch2 .aug{font-size:10px;line-height:1.45;color:#5c3a30;font-weight:500;margin-top:9px}\n#ebc .ch2 .pz{position:relative;display:inline-block;margin-top:7px}\n#ebc .ch2 .pa{display:inline-block;font-size:11px;letter-spacing:2.6px;font-weight:800;cursor:pointer;padding:3px 0}\n#ebc .ch2 .badge{left:50%;bottom:auto;top:calc(100% + 56px);transform:translate(-50%,3px);background:rgba(255,250,246,.72);border-color:rgba(255,255,255,.95)}\n#ebc .ch2 .badge.on{transform:translate(-50%,0)}\n#ebc .reflet{position:absolute;inset:0;pointer-events:none;background:linear-gradient(105deg,rgba(255,255,255,0) 35%,rgba(255,236,196,.55) 47%,rgba(255,255,255,.75) 50%,rgba(255,236,196,.5) 53%,rgba(255,255,255,0) 65%);transform:translateX(-120%);opacity:0}\n#ebc .reflet.go{animation:reflet 1.3s cubic-bezier(.45,.05,.3,1) forwards}\n@keyframes reflet{0%{transform:translateX(-120%);opacity:1}100%{transform:translateX(120%);opacity:1}}\n#ebc .badge{position:absolute;bottom:calc(100% + 5px);left:calc(100% - 14px);white-space:nowrap;background:rgba(255,255,255,.14);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.95);color:#5a1e2c;font-size:9px;font-weight:600;letter-spacing:.3px;padding:4px 9px;border-radius:12px;opacity:0;transform:translateY(3px);transition:opacity .45s,transform .45s;pointer-events:none}\n#ebc .badge.on{opacity:1;transform:none}\n#ebc .info .badge{border-color:#b08a52;background:rgba(255,255,255,.35)}\n#ebc .bulles{position:absolute;display:flex;gap:8px;pointer-events:none}\n#ebc .ch2 .bulles{left:50%;top:calc(100% + 12px);transform:translateX(-50%);flex-direction:row}\n#ebc .bul{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.35);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.9);box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 4px 10px rgba(70,10,20,.18);opacity:0;transform:translateY(-6px) scale(.85);transition:opacity .3s,transform .35s cubic-bezier(.2,.9,.3,1.2)}\n#ebc .bul svg{width:24px;height:24px}\n#ebc .bulles.on{pointer-events:auto}\n#ebc .bulles.on .bul{opacity:1;transform:none}\n#ebc .bulles.on .bul:nth-child(2){transition-delay:.05s}\n#ebc .bulles.on .bul:nth-child(3){transition-delay:.1s}\n#ebc .bulles.on .bul:nth-child(4){transition-delay:.15s}\n#ebc .bulles.on .bul:nth-child(5){transition-delay:.2s}\n#ebc .info .bulles{left:50%;top:calc(100% + 10px);transform:translateX(-50%);flex-direction:row}\n#ebc .info .bul{width:38px;height:38px;border-color:rgba(176,138,82,.6)}\n#ebc .info .bul svg{width:26px;height:26px}\n#ebc .info{width:min(100vw,440px);padding:4px 22px 10px;text-align:center}\n#ebc .titre{font-size:12px;letter-spacing:3px;color:#9a7440;font-weight:600;margin:22px 0 4px}\n#ebc .sstitre{font-size:11px;letter-spacing:2px;color:#8a6d60;margin:0 0 12px;text-transform:uppercase}\n#ebc .info h4{font-size:11px;letter-spacing:3px;color:#9a7440;font-weight:600;margin:22px 0 10px}\n#ebc .acc{font-size:14px;line-height:1.6;color:#5a1e2c;margin:0 0 6px}\n#ebc .info ol{list-style:none;text-align:left;max-width:340px;margin:0 auto;font-size:13px;line-height:1.55;color:#5a1e2c}\n#ebc .info ol li{margin:7px 0}\n#ebc .info ol span{color:#9a7440;font-weight:600;margin-right:6px}\n#ebc .lotimg{display:block;width:100%;max-width:330px;margin:0 auto}\n#ebc .lotnom{font-size:22px;font-weight:600;color:#5a1e2c;margin-top:4px}\n#ebc .lotsous{font-size:10.5px;letter-spacing:3px;color:#9a7440;font-weight:600;margin-top:4px}\n#ebc .lottxt{font-size:13px;line-height:1.6;color:#6b4a3e;margin:10px 4px 0}\n#ebc .lotdate{display:inline-block;margin-top:12px;font-size:12px;letter-spacing:1.5px;color:#5a1e2c;font-weight:600;border-top:1px solid #cdb48a;border-bottom:1px solid #cdb48a;padding:6px 10px}\n#ebc .conclu{font-size:13px;color:#9a7440;font-style:italic;margin:10px 0 0}\n#ebc .partzone{position:relative;display:inline-block;margin-top:18px}\n#ebc .partage{position:relative;display:inline-block;padding:11px 20px;font-size:10.5px;letter-spacing:2.4px;font-weight:600;color:#5a1e2c;border:1px solid #b08a52;border-radius:2px;cursor:pointer;background:transparent;font-family:inherit}\n#ebc .partage.off{opacity:.38;cursor:default}\n#ebc #partxt{font-size:11px;color:#8a6d60;margin-top:8px}\n#ebc .ouvert-res{margin-bottom:56px}\n#ebc .reglement{display:block;margin:20px 0 8px;font-size:12px;color:#8a6d60;text-decoration:underline;cursor:pointer}\n#ebc-bas .toast{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);width:max-content;max-width:88vw;text-align:center;line-height:1.45;background:rgba(255,250,246,.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(176,138,82,.6);color:#5a1e2c;font-size:12px;padding:10px 16px;border-radius:6px;opacity:0;transition:opacity .3s;pointer-events:none;z-index:9999}\n#ebc-bas .toast.on{opacity:1}\n@media (min-width:900px){#ebc .page{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);max-width:1180px;margin:0 auto;align-items:start;gap:40px;padding:8px 40px 30px}\n#ebc .stage{justify-self:center}\n#ebc .info{width:auto;max-width:480px;justify-self:center;align-self:start;text-align:center;padding:28px 0 0}\n#ebc .stage{position:sticky;top:8px}\n#ebc.avant .info,#ebc.apres .info{align-self:center;padding:0}\n#ebc .info h4:first-child,#ebc .info .titre{margin-top:0}\n#ebc .info ol{text-align:center;max-width:420px;margin:0 auto}\n}\n#ebc .periode{display:none}\n#ebc .gagsem{display:none;margin:26px auto 0;max-width:330px;padding:14px 0 12px;border-top:1px solid #cdb48a;border-bottom:1px solid #cdb48a}\n#ebc.lundi .gagsem{display:block}\n#ebc .gs-t{font-size:10.5px;letter-spacing:2.6px;color:#9a7440;font-weight:600;text-transform:uppercase}\n#ebc .gs-n{font-size:22px;font-weight:600;color:#8c1a2c;margin:4px 0 2px}\n#ebc .gs-p{font-size:13px;color:#6b4a3e}\n#ebc .gs-r{margin-top:10px;font-size:12px;letter-spacing:.3px;color:#8c1a2c;font-weight:600}\n#ebc.avant #infoAvant,#ebc.apres #infoApres{display:block}\n#ebc.avant #jeu,#ebc.apres #jeu{display:none}\n#ebc.avant .tiroir,#ebc.apres .tiroir{display:none}\n#ebc .rebours{font-size:13px;color:#5a1e2c;margin:0 0 12px}\n#ebc .rebours b{font-size:30px;font-weight:600;margin:0 4px;color:#8c1a2c}\n#ebc .gagnante{margin:16px 0 14px;font-size:11px;letter-spacing:2.5px;color:#9a7440;font-weight:600;text-transform:uppercase;line-height:1.9}\n#ebc .gagnante b{font-size:22px;letter-spacing:.5px;color:#8c1a2c;text-transform:none;font-weight:600}\n#ebc a.partage{text-decoration:none;margin-top:6px}\n#ebc #infoAvant .partage,#ebc #infoApres .partage{margin-top:8px}\n#ebc-bas .ebn-merci{display:none}\n#ebc-bas .ebn.ebn-ok .ebn-in>div:not(.ebn-merci),#ebc-bas .ebn.ebn-ok .ebn-fermer{display:none}\n#ebc-bas .ebn.ebn-ok .ebn-in>.ebn-merci{display:block;text-align:center;padding:6px 0 4px}\n#ebc-bas .ebn-merci .ebn-titre{white-space:normal}\n#ebc-bas .ebn-filet{width:34px;height:1px;background:#c9a25c;margin:10px auto}\n#ebc-bas .ebn{position:fixed;left:0;right:0;bottom:0;z-index:9000;background:#EBE5DB;color:#000;font-family:\"Montserrat\",sans-serif;box-shadow:0 -12px 40px rgba(0,0,0,.10);transform:translateY(105%);visibility:hidden;transition:transform .6s cubic-bezier(.65,0,.35,1),visibility 0s linear .6s}\n#ebc-bas .ebn.ebn-ouvert{transform:translateY(0);visibility:visible;transition:transform .6s cubic-bezier(.65,0,.35,1),visibility 0s}\n#ebc-bas .ebn *{box-sizing:border-box}\n#ebc-bas .ebn-fermer{position:absolute;z-index:2;top:14px;right:16px;width:34px;height:34px;border-radius:50%;border:1px solid rgba(0,0,0,.2);background:transparent;font-size:18px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#000;padding:0;font-family:\"Montserrat\",sans-serif}\n#ebc-bas .ebn-in{max-width:1000px;margin:0 auto;padding:30px 24px 24px;display:grid;grid-template-columns:minmax(0,1fr);gap:16px}\n#ebc-bas .ebn-tag{font-size:9.5px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#a3162b;margin:0 0 8px}\n#ebc-bas .ebn-titre{font-size:clamp(12px,3.8vw,19px);font-weight:600;color:#a3162b;letter-spacing:.04em;text-transform:uppercase;margin:0 0 8px;line-height:1.3;white-space:nowrap}\n#ebc-bas .ebn-texte{font-size:13.5px;font-weight:300;line-height:1.65;margin:0}\n#ebc-bas .ebn-form{display:flex;width:100%}\n#ebc-bas .ebn-email{flex:1;min-width:0;height:50px;border:1px solid #000;border-right:0;background:#F6F4F0;padding:0 16px;font-family:\"Montserrat\",sans-serif;font-size:16px;color:#000;border-radius:0;-webkit-appearance:none;appearance:none;outline:none;margin:0}\n#ebc-bas .ebn-email::placeholder{color:rgba(0,0,0,.45)}\n#ebc-bas .ebn-btn{height:50px;border:1px solid #000;background:#000;color:#fff;padding:0 20px;font-family:\"Montserrat\",sans-serif;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;white-space:nowrap;border-radius:0;margin:0}\n#ebc-bas .ebn-nl{display:flex;gap:9px;align-items:flex-start;margin:12px 0 0;font-size:12.5px;font-weight:400;line-height:1.45;cursor:pointer}\n#ebc-bas .ebn-nl input{flex:none;width:16px;height:16px;margin:1px 0 0;accent-color:#a3162b;cursor:pointer}\n#ebc-bas .ebn-mention{font-size:10.5px;font-weight:300;line-height:1.5;opacity:.65;margin:10px 0 0}\n#ebc-bas .ebn-mention a{color:#000}\n#ebc-bas .ebn-erreur{display:none;font-size:11.5px;color:#b3261e;margin:8px 0 0}\n#ebc .rebours{margin:4px 0 16px;line-height:1.3}\n#ebc #infoAvant h4{margin-bottom:14px}\n@media (min-width:900px){#ebc .page{padding-top:96px}#ebc .stage{top:84px}#ebc .titre{font-size:13px;margin-bottom:8px}#ebc .sstitre{margin-bottom:20px}#ebc .acc{font-size:15px;line-height:1.75;margin-bottom:14px}#ebc .info ol{font-size:14px;line-height:1.7}#ebc .info ol li{margin:12px 0}#ebc .conclu{margin-top:16px}#ebc .info h4{margin:34px 0 16px}#ebc .lottxt{line-height:1.75}}\n#ebc .stage{overflow:visible;z-index:3}\n#ebc .cartes{position:absolute;left:50%;top:52%;width:calc(min(100vw,440px)*.78);height:0;margin-left:calc(min(100vw,440px)*-.39);z-index:4}#ebc .cartes.fixe{position:fixed;z-index:60}\n@media (min-width:900px){#ebc .stage{position:relative;top:auto}#ebc .page{padding-top:76px;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);max-width:1360px}}\n#ebc .base,#ebc .capot{pointer-events:none}\n#ebc .carte,#ebc .ch2,#ebc .f24{left:50%;top:0;width:100%}\n#ebc .carte.g-soin{aspect-ratio:1160/1200;background-size:100% auto,100% 100%;background-position:top center,0 0}\n#ebc .carte .soin,#ebc .carte .gl{bottom:0}#ebc .carte .b{position:absolute;left:0;right:0;bottom:8%;margin:0!important}\n#ebc .carte .soin{top:11%}#ebc .carte .soin .t{margin-top:12px}#ebc .carte .soin .s{margin-top:6px}#ebc .carte .soin .v{margin-top:9px}#ebc .carte .soin .b{margin-top:18px}\n#ebc .titre{margin-bottom:8px}#ebc .sstitre{margin-bottom:18px}#ebc .acc{line-height:1.7;margin-bottom:12px}#ebc .info ol li{margin:11px 0}#ebc .conclu{margin-top:14px}#ebc .info h4{margin-top:38px}#ebc .lottxt{line-height:1.7}\n@media (min-width:900px){#ebc .titre{font-size:14px;letter-spacing:3.5px;margin-bottom:10px}#ebc .sstitre{font-size:12px;margin-bottom:28px}#ebc .acc{line-height:1.85;margin-bottom:22px}#ebc .info ol li{margin:16px 0}#ebc .conclu{margin-top:22px}#ebc .info h4{margin:48px 0 20px}#ebc .lotnom{margin-top:10px}#ebc .lotsous{margin-top:8px}#ebc .lottxt{margin-top:16px}}\n#ebc-bas .ebr{position:fixed;inset:0;z-index:10000;visibility:hidden;transition:visibility 0s linear .5s}#ebc-bas .ebr.on{visibility:visible;transition:none}#ebc-bas .ebr-voile{position:absolute;inset:0;background:rgba(0,0,0,.14);opacity:0;transition:opacity .5s}#ebc-bas .ebr.on .ebr-voile{opacity:1}#ebc-bas .ebr-pan{position:absolute;top:0;right:0;height:100%;width:min(460px,100vw);overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;background:rgba(246,244,240,.94);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);box-shadow:-12px 0 40px rgba(0,0,0,.10);padding:58px 30px 48px;transform:translateX(100%);transition:transform .5s cubic-bezier(.65,0,.35,1);color:#2b1a17;text-align:left}#ebc-bas .ebr.on .ebr-pan{transform:none}#ebc-bas .ebr-x{position:absolute;top:14px;right:16px;width:34px;height:34px;border-radius:50%;border:1px solid rgba(0,0,0,.2);background:transparent;font-size:18px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#000;padding:0;font-family:Montserrat,sans-serif}#ebc-bas .ebr-sur{font-size:9.5px;letter-spacing:2.6px;font-weight:600;color:#a8814a;margin-bottom:10px}#ebc-bas .ebr h2{font-size:15px;letter-spacing:3px;font-weight:600;text-transform:uppercase;color:#5a1e2c;margin-bottom:26px}#ebc-bas .ebr h3{font-size:10.5px;letter-spacing:2.2px;font-weight:600;text-transform:uppercase;color:#5a1e2c;margin:26px 0 10px}#ebc-bas .ebr p{font-size:12.5px;line-height:1.7;color:#4a3a34;margin-bottom:10px;text-wrap:pretty}#ebc-bas .ebr b{font-weight:600;color:#2b1a17}#ebc-bas .ebr a{color:inherit;text-decoration:underline;text-underline-offset:3px}#ebc-bas .ebr-fin{margin-top:28px;padding-top:18px;border-top:1px solid rgba(176,138,82,.35);font-size:11.5px!important}\n" +
    '#ebc .case{position:absolute;background-repeat:no-repeat;pointer-events:none}' +
    '#ebc .k-ouverte{background-image:url(' + IMG + 'calendrier-cases-ouverte.png?v=3)}' +
    '#ebc .k-manquee{background-image:url(' + IMG + 'calendrier-cases-manquee_1.png)}' +
    '#ebc .k-jour{background-image:url(' + IMG + 'calendrier-cases-jour_1.png)}' +
    '#ebc .k-vide{background-image:url(' + IMG + 'calendrier-cases-vide.png?v=3);opacity:0;transition:opacity .6s}' +
    '#ebc .k-vide.on{opacity:1}' +
    '#ebc .tiroir{cursor:pointer;pointer-events:auto;filter:drop-shadow(0 2px 2px rgba(40,0,8,.35))}' +
    '#ebc .glow{position:absolute;width:44%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(255,228,165,.95) 0%,rgba(240,198,122,.5) 32%,rgba(230,180,100,0) 70%);opacity:0;pointer-events:none}' +
    '#ebc .fente{position:absolute;border-radius:9px;background:radial-gradient(ellipse at 50% 30%,rgba(255,214,150,.55),rgba(60,0,12,.85) 70%);box-shadow:inset 0 4px 8px rgba(0,0,0,.6);opacity:0;pointer-events:none}' +
    '#ebc .carte .pc{display:inline-block;margin-top:4px;font-size:22px;font-weight:800;letter-spacing:1px}' +
    '#ebc .carte .pc small{display:block;font-size:9px;letter-spacing:2.4px;font-weight:700;-webkit-text-fill-color:#a8814a;color:#a8814a}' +
    '#ebc .carte .gl .lien2{display:block;margin:10px auto 0;font-size:9px;letter-spacing:2.2px;font-weight:700;color:#a8814a;text-decoration:none}' +
    '#ebc .ch2 .livr{font-size:10px;line-height:1.45;color:#6b4a3e;font-style:italic;margin-top:5px}' +
    '#ebc .reglement{text-decoration:underline}' +
    '#ebc .charge{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:11px;letter-spacing:2px;color:#a8814a;opacity:0;transition:opacity .4s;pointer-events:none}' +
    '#ebc.attend .charge{opacity:1}' +
    // carte « soin offert » : flocons et étoiles dorés ; nom et valeur écrits pareil (doré), seul « J’en profite » reste en rouge
    '#ebc .carte.g-soin{background-image:url(' + IMG + 'calendrier-fond-soin_1.png),linear-gradient(135deg,rgba(255,255,255,.35),rgba(255,240,232,.15));background-size:100% 100%,100% 100%}' +
    '#ebc .carte .soin .t{background:none;-webkit-text-fill-color:#a8814a;color:#a8814a;filter:none;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;font-size:15px}' +
    '#ebc .carte .soin .v{font-weight:700;letter-spacing:2.4px;color:#a8814a}#ebc .carte .soin .s{font-style:italic}' +
    // soins à la même échelle (les petits restent petits) : image un peu plus haute ; la remise en doré, comme le nom
    '#ebc .carte .soin img{height:calc(min(100vw,440px)*0.36)}' +
    '#ebc .carte.g-soin{aspect-ratio:1160/1290}#ebc .carte .soin .v{font-size:10px}';

  // ───────────────────────────── OUTILS ─────────────────────────────
  var $ = function(i){ return document.getElementById(i); };
  function lire(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }
  function ecrire(k, v){ try { if(v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch(e){} }
  function valideMail(v){ return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v); }
  // la date à Paris, quel que soit le réglage du téléphone
  function paris(){
    var p = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).formatToParts(new Date());
    var o = {}; p.forEach(function(x){ o[x.type] = +x.value; }); return o;
  }
  function appeler(action, donnees){
    donnees = donnees || {}; donnees.action = action;
    // « text/plain » : Google accepte la demande sans vérification préalable du navigateur
    return fetch(REGLAGES.registre, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(donnees), redirect: 'follow' })
      .then(function(r){ return r.json(); });
  }
  // le gain du jour, gardé jusqu'à minuit et lisible par le panier sur tous les sites elkhab.com
  function domaine(){ return /(^|\.)elkhab\.com$/.test(location.hostname) ? '; domain=.elkhab.com' : ''; }
  function garderGain(jour){
    var p = paris(), reste = ((23 - p.hour) * 3600 + (59 - p.minute) * 60 + (60 - p.second));
    document.cookie = 'eb_calendrier=' + REGLAGES.annee + '-12-' + (jour < 10 ? '0' : '') + jour + (estCollab(jour) ? '-c' : '') + '; max-age=' + reste + '; path=/' + domaine() + '; SameSite=Lax';
  }

  // ───────────────────────────── LA PAGE ─────────────────────────────
  var racine = $('eb-calendrier'); if(!racine) return;
  var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
  racine.id = 'ebc';
  var info = $('eb-calendrier-textes');
  racine.innerHTML =
    '<div class="page"><div class="stage" id="stage"><div class="scene" id="scene">' +
      '<img class="base" id="base" src="' + IMG + 'calendrier-flacon_1.png" alt="Calendrier de l’avent beauté ELKHA.B en forme de flacon">' +
      '<div id="cases"></div>' +
      '<img class="capot" id="capot" src="' + IMG + 'calendrier-capot.png" alt="">' +
      '<div class="glow" id="glow"></div><div class="fente" id="fente"></div>' +
      '<div class="aide" id="aide"><img id="aideimg" src="' + IMG + 'calendrier-bague-touchez.png" alt=""></div>' +
      '<div class="charge">UN INSTANT…</div>' +
      '<div class="cartes" id="cartes">' + "<div class=\"carte verre g-liv\" id=\"carte\"> <div class=\"reflet\" id=\"reflet\"></div> <div class=\"d txt\" id=\"date1\"></div> <div class=\"in txt gl\"> <div class=\"t relief\"></div> <div class=\"s\"></div> <span class=\"b relief\" data-profiter>J’EN PROFITE</span> </div> <div class=\"soin txt\"> <img src=\"\" alt=\"Hydra Balance, gel hydratant repulpant à l’acide hyaluronique ELKHA.B\"> <div class=\"t relief\">Hydra Balance</div> <div class=\"s\">Offert pour l’achat d’un soin</div> <div class=\"v\">VALEUR 28,90 €</div> <span class=\"b relief\" data-profiter>J’EN PROFITE</span> </div> </div> <div class=\"ch2 verre\" id=\"ch2\"> <div class=\"conf\" id=\"conf\">Votre livraison offerte est enregistrée : elle s’appliquera à votre commande jusqu’à minuit.</div> <a class=\"lien\" href=\"#\" id=\"boutique\">ALLER À LA BOUTIQUE</a> <div class=\"filet\"></div> <div class=\"vc\">VOS ÉTOILES</div> <div class=\"cols\"> <div class=\"col\" id=\"rgS\"><b class=\"n relief\" id=\"chS\">0</b><div class=\"lb\">Tirage de dimanche</div></div> <div class=\"col\"><b class=\"n relief\" id=\"ch24\">0</b><div class=\"lb\" id=\"lb24\">Grand tirage du 24</div></div> </div> <div class=\"aug\" id=\"aug\"></div> <div class=\"pz\"><span class=\"pa relief\" data-share id=\"pa1\">PARTAGER MON LIEN</span></div> <span class=\"badge\" id=\"bd1\"><span class=\"nbp\">0 lien partagé</span></span> <div class=\"bulles\" id=\"res1\"><a class=\"bul\" data-r=\"fwa\" href=\"#\" aria-label=\"WhatsApp\"><svg viewBox=\"0 0 32 32\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"#25D366\"/><path d=\"M16 7.2a8.8 8.8 0 0 0-7.6 13.3L7.3 24.7l4.3-1.1A8.8 8.8 0 1 0 16 7.2Z\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><path d=\"M13 12.3c.3-.6.6-.6.9-.6h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.5.9 1.3 1.7 2.3 2.2.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.2.1.4.2.4.4 0 .5-.2 1.1-.6 1.4-.5.4-1.3.6-2.2.3-1.8-.6-3.6-2.1-4.6-4-.5-1-.6-2.2-.2-3.3Z\" fill=\"#fff\"/></svg></a><a class=\"bul\" data-r=\"fig\" href=\"#\" aria-label=\"Instagram\"><svg viewBox=\"0 0 32 32\"><defs><radialGradient id=\"ig1\" cx=\"30%\" cy=\"107%\" r=\"150%\"><stop offset=\"0\" stop-color=\"#fdf497\"/><stop offset=\".05\" stop-color=\"#fdf497\"/><stop offset=\".45\" stop-color=\"#fd5949\"/><stop offset=\".6\" stop-color=\"#d6249f\"/><stop offset=\".9\" stop-color=\"#285AEB\"/></radialGradient></defs><rect width=\"32\" height=\"32\" rx=\"9\" fill=\"url(#ig1)\"/><rect x=\"8\" y=\"8\" width=\"16\" height=\"16\" rx=\"5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\"/><circle cx=\"16\" cy=\"16\" r=\"3.9\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\"/><circle cx=\"21\" cy=\"11\" r=\"1.1\" fill=\"#fff\"/></svg></a><a class=\"bul\" data-r=\"fms\" href=\"#\" aria-label=\"Messenger\"><svg viewBox=\"0 0 32 32\"><defs><linearGradient id=\"ms1\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#0099FF\"/><stop offset=\".6\" stop-color=\"#A033FF\"/><stop offset=\".9\" stop-color=\"#FF5280\"/><stop offset=\"1\" stop-color=\"#FF7061\"/></linearGradient></defs><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"url(#ms1)\"/><path d=\"M16 7c-5.2 0-9.2 3.8-9.2 8.8 0 2.7 1.1 5 2.9 6.6v3.1l2.8-1.6c1.1.4 2.3.5 3.5.5 5.2 0 9.2-3.8 9.2-8.6S21.2 7 16 7Z\" fill=\"#fff\"/><path d=\"m10.6 18.6 3-4.7 2.3 1.9 3.3-2 -3 4.7-2.3-1.9Z\" fill=\"#7a3cff\"/></svg></a><a class=\"bul\" data-r=\"ftt\" href=\"#\" aria-label=\"TikTok\"><svg viewBox=\"0 0 32 32\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"#111\"/><path d=\"M18.3 7.5c.3 2.3 1.6 3.7 3.8 3.9v2.7a6.6 6.6 0 0 1-3.8-1.2v5.5a5 5 0 1 1-5-5v2.8a2.2 2.2 0 1 0 2.2 2.2V7.5Z\" fill=\"#25F4EE\" transform=\"translate(-.8 -.6)\"/><path d=\"M18.3 7.5c.3 2.3 1.6 3.7 3.8 3.9v2.7a6.6 6.6 0 0 1-3.8-1.2v5.5a5 5 0 1 1-5-5v2.8a2.2 2.2 0 1 0 2.2 2.2V7.5Z\" fill=\"#FE2C55\" transform=\"translate(.8 .6)\"/><path d=\"M18.3 7.5c.3 2.3 1.6 3.7 3.8 3.9v2.7a6.6 6.6 0 0 1-3.8-1.2v5.5a5 5 0 1 1-5-5v2.8a2.2 2.2 0 1 0 2.2 2.2V7.5Z\" fill=\"#fff\"/></svg></a><a class=\"bul\" data-r=\"fcopie\" href=\"#\" aria-label=\"Copier le lien\"><svg viewBox=\"0 0 32 32\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"#5a1e2c\"/><path d=\"M14 18a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\" fill=\"none\" stroke=\"#f3e2bf\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><path d=\"M18 14a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\" fill=\"none\" stroke=\"#f3e2bf\" stroke-width=\"1.8\" stroke-linecap=\"round\"/></svg></a></div> </div> <div class=\"f24 verre\" id=\"f24\"> <div class=\"reflet\" id=\"reflet24\"></div> <div class=\"d\">24 DÉCEMBRE<br><span>LA CASE DE LA FONDATRICE</span></div> <div class=\"mot\">Le 24 décembre est une date qui m’est chère, et je suis heureuse de la partager avec vous. Merci de faire partie de cette toute première aventure ELKHA.B.<br>De très belles fêtes à vous.</div> <div class=\"sig\">La fondatrice d’Elkha.B</div> <span class=\"b relief\" id=\"cadeau24\">DÉCOUVRIR VOTRE CADEAU</span> <div class=\"ce-soir\">Grand tirage ce soir à 18 h : le coffret Velours d’Hiver<br><span>Résultat annoncé sur TikTok et Instagram</span></div> </div>" + '</div>' +
    '</div></div></div>';
  racine.firstChild.appendChild(info); info.className = 'info'; info.style.display = '';
  var bas = document.createElement('div'); bas.id = 'ebc-bas';
  bas.innerHTML = "<div class=\"ebn\" id=\"nl\" role=\"dialog\" aria-label=\"Participer au calendrier des fêtes ELKHA.B\"> <button type=\"button\" class=\"ebn-fermer\" id=\"nlplus\" aria-label=\"Fermer\">×</button> <div class=\"ebn-in\"><div class=\"ebn-merci\"><p class=\"ebn-tag\">Calendrier des fêtes</p><p class=\"ebn-titre\">Bienvenue</p><div class=\"ebn-filet\"></div><p class=\"ebn-texte\" id=\"nlMerci\">Votre première case vous attend.</p></div> <div><p class=\"ebn-tag\">Calendrier des fêtes</p><p class=\"ebn-titre\" id=\"nlTitre\">Vos 24 surprises vous attendent</p><p class=\"ebn-texte\" id=\"nlTexte\">Indiquez votre e-mail pour ouvrir votre case du jour et participer aux tirages. Nous ne vous le demanderons qu’une fois.</p></div> <div><div class=\"ebn-form\"><input class=\"ebn-email\" id=\"nlin\" type=\"email\" inputmode=\"email\" autocomplete=\"email\" placeholder=\"Votre adresse e-mail\"><button class=\"ebn-btn\" id=\"nlok\" type=\"button\">Je participe</button></div> <p class=\"ebn-erreur\" id=\"nlerr\">Merci d’indiquer une adresse e-mail valide.</p> <label class=\"ebn-nl\"><input type=\"checkbox\" id=\"nlcase\"><span>Je souhaite aussi recevoir les nouveautés et les offres ELKHA.B.</span></label> <p class=\"ebn-mention\">En participant, vous acceptez les <a href=\"#\">conditions du calendrier</a>. <a href=\"#\">Politique de confidentialité</a></p></div> </div> </div>" + "<div class=\"ebr\" id=\"ebr\" aria-hidden=\"true\"><div class=\"ebr-voile\" data-fermer></div> <div class=\"ebr-pan\" role=\"dialog\" aria-label=\"Conditions du calendrier\"><button class=\"ebr-x\" type=\"button\" data-fermer aria-label=\"Fermer\">×</button> <p class=\"ebr-sur\">CALENDRIER DES FÊTES ELKHA.B</p> <h2>Conditions du calendrier</h2> <h3>Le calendrier</h3> <p>Du mardi 1<sup>er</sup> au jeudi 24 décembre 2026, une case s’ouvre chaque jour sur calendrier.elkhab.com. La participation est gratuite : il suffit d’indiquer votre adresse e-mail.</p> <p>Vous pouvez ouvrir une case par jour, celle du jour même. Une case qui n’a pas été ouverte le jour J ne peut plus l’être ensuite.</p> <h3>Votre surprise du jour</h3> <p>Chaque case révèle une surprise, valable le jour même jusqu’à minuit (heure de Paris). Ses conditions sont indiquées sur la carte du jour.</p> <h3>Vos étoiles</h3> <p>Chaque case ouverte vous offre une étoile pour le tirage de la semaine et une pour le grand tirage du 24. Les cases du dimanche en offrent deux, et certains jours vous réservent quelques étoiles de plus.</p> <p>Vous disposez aussi d’un lien personnel à partager. Chaque personne qui ouvre sa première case grâce au lien que vous lui avez envoyé vous offre 3 étoiles supplémentaires.</p> <p>Chaque commande passée sur le site pendant le calendrier vous offre autant d’étoiles que son montant. Une commande de 60 € vous en apporte 60.</p> <p>Votre adresse e-mail permet de comptabiliser vos étoiles. Elles s’affichent sur la carte du jour.</p> <h3>Les coffrets à gagner</h3> <p><b>Chaque dimanche à 18 h</b> (6, 13 et 20 décembre) : un coffret Lumière d’hiver, d’une valeur de 59 €. Le tirage du dimanche réunit les étoiles gagnées depuis le tirage précédent. Une case ouverte ou une commande passée le dimanche après 18 h compte pour la semaine suivante.</p> <p><b>Le grand tirage, jeudi 24 décembre à 18 h</b> : un coffret Velours d’Hiver, d’une valeur de 94 €. Il réunit toutes les étoiles gagnées en décembre.</p> <h3>Les tirages au sort</h3> <p>Chacune de vos étoiles est inscrite à votre nom, comme un ticket de tombola. À chaque tirage, les étoiles de tous les participants sont réunies, et une seule est tirée au sort. La personne à qui appartient cette étoile remporte le coffret. Plus vous avez d’étoiles, plus vous avez de tickets à votre nom, et plus vos chances de gagner sont grandes.</p> <p>Une seconde étoile est tirée de la même façon pour désigner une personne suppléante.</p> <h3>Recevoir son coffret</h3> <p>La personne gagnante est prévenue par e-mail, à l’adresse utilisée pour participer. Pensez à vérifier vos courriers indésirables les soirs de tirage.</p> <p>À compter de l’envoi de cet e-mail, un délai de 48 heures est accordé pour demander l’envoi du coffret, de l’une de ces trois façons :</p> <p>– par e-mail à contact@elkhab.com, depuis l’adresse utilisée pour participer ;<br>– par message privé sur TikTok (@elkha.b) ;<br>– par message privé sur Instagram (@elkhab.skincare).</p> <p>Le message indique le nom, le prénom, l’adresse de livraison et un numéro de téléphone, utilisé uniquement par le transporteur pour la livraison. Sur TikTok ou Instagram, il précise aussi l’adresse e-mail utilisée pour participer.</p> <p>Passé ce délai sans nouvelles, le coffret revient à la personne suppléante, prévenue de la même façon.</p> <p>Le prénom et l’initiale du nom de la personne gagnante sont annoncés dès le tirage, sur la page du calendrier et sur notre compte TikTok. Si le coffret revient à la personne suppléante, son prénom est annoncé à son tour.</p> <p>Une même personne peut gagner un seul coffret du dimanche. Elle garde toutes ses étoiles pour le grand tirage du 24. Le coffret est envoyé gratuitement en France métropolitaine. Il ne peut être ni échangé ni remboursé.</p> <h3>Qui peut participer</h3> <p>Le calendrier est ouvert à toute personne majeure, avec une seule adresse e-mail par personne. Plusieurs adresses utilisées par une même personne comptent comme une seule participation, et une personne invitée doit s’inscrire depuis son propre téléphone ou ordinateur. Toute participation déloyale ne sera pas prise en compte.</p> <h3>Vos données</h3> <p>Votre adresse e-mail sert au calendrier et à prévenir les personnes gagnantes. Vous ne recevez nos nouveautés et nos offres que si vous avez coché la case prévue à cet effet. Pour en savoir plus, consultez notre <a href=\"https://elkhab.com/#politique-confidentialite\">politique de confidentialité</a>.</p> <h3>En cas d’imprévu</h3> <p>En cas de problème technique, ELKHA.B peut adapter le calendrier. Les surprises déjà ouvertes restent valables.</p> <p class=\"ebr-fin\">Le calendrier est proposé par ELKHA.B. Nos informations figurent dans nos <a href=\"https://elkhab.com/#mentions-legales\">mentions légales</a>.</p> </div></div>" + '<div class="toast" id="toast"></div>';
  document.body.appendChild(bas);
  $('pz2').insertAdjacentHTML('beforeend', "<div class=\"bulles\" id=\"res2\"><a class=\"bul\" data-r=\"fwa\" href=\"#\" aria-label=\"WhatsApp\"><svg viewBox=\"0 0 32 32\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"#25D366\"/><path d=\"M16 7.2a8.8 8.8 0 0 0-7.6 13.3L7.3 24.7l4.3-1.1A8.8 8.8 0 1 0 16 7.2Z\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><path d=\"M13 12.3c.3-.6.6-.6.9-.6h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.5.9 1.3 1.7 2.3 2.2.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.2.1.4.2.4.4 0 .5-.2 1.1-.6 1.4-.5.4-1.3.6-2.2.3-1.8-.6-3.6-2.1-4.6-4-.5-1-.6-2.2-.2-3.3Z\" fill=\"#fff\"/></svg></a><a class=\"bul\" data-r=\"fig\" href=\"#\" aria-label=\"Instagram\"><svg viewBox=\"0 0 32 32\"><defs><radialGradient id=\"ig2\" cx=\"30%\" cy=\"107%\" r=\"150%\"><stop offset=\"0\" stop-color=\"#fdf497\"/><stop offset=\".05\" stop-color=\"#fdf497\"/><stop offset=\".45\" stop-color=\"#fd5949\"/><stop offset=\".6\" stop-color=\"#d6249f\"/><stop offset=\".9\" stop-color=\"#285AEB\"/></radialGradient></defs><rect width=\"32\" height=\"32\" rx=\"9\" fill=\"url(#ig2)\"/><rect x=\"8\" y=\"8\" width=\"16\" height=\"16\" rx=\"5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\"/><circle cx=\"16\" cy=\"16\" r=\"3.9\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1.8\"/><circle cx=\"21\" cy=\"11\" r=\"1.1\" fill=\"#fff\"/></svg></a><a class=\"bul\" data-r=\"fms\" href=\"#\" aria-label=\"Messenger\"><svg viewBox=\"0 0 32 32\"><defs><linearGradient id=\"ms2\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#0099FF\"/><stop offset=\".6\" stop-color=\"#A033FF\"/><stop offset=\".9\" stop-color=\"#FF5280\"/><stop offset=\"1\" stop-color=\"#FF7061\"/></linearGradient></defs><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"url(#ms2)\"/><path d=\"M16 7c-5.2 0-9.2 3.8-9.2 8.8 0 2.7 1.1 5 2.9 6.6v3.1l2.8-1.6c1.1.4 2.3.5 3.5.5 5.2 0 9.2-3.8 9.2-8.6S21.2 7 16 7Z\" fill=\"#fff\"/><path d=\"m10.6 18.6 3-4.7 2.3 1.9 3.3-2 -3 4.7-2.3-1.9Z\" fill=\"#7a3cff\"/></svg></a><a class=\"bul\" data-r=\"ftt\" href=\"#\" aria-label=\"TikTok\"><svg viewBox=\"0 0 32 32\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"#111\"/><path d=\"M18.3 7.5c.3 2.3 1.6 3.7 3.8 3.9v2.7a6.6 6.6 0 0 1-3.8-1.2v5.5a5 5 0 1 1-5-5v2.8a2.2 2.2 0 1 0 2.2 2.2V7.5Z\" fill=\"#25F4EE\" transform=\"translate(-.8 -.6)\"/><path d=\"M18.3 7.5c.3 2.3 1.6 3.7 3.8 3.9v2.7a6.6 6.6 0 0 1-3.8-1.2v5.5a5 5 0 1 1-5-5v2.8a2.2 2.2 0 1 0 2.2 2.2V7.5Z\" fill=\"#FE2C55\" transform=\"translate(.8 .6)\"/><path d=\"M18.3 7.5c.3 2.3 1.6 3.7 3.8 3.9v2.7a6.6 6.6 0 0 1-3.8-1.2v5.5a5 5 0 1 1-5-5v2.8a2.2 2.2 0 1 0 2.2 2.2V7.5Z\" fill=\"#fff\"/></svg></a><a class=\"bul\" data-r=\"fcopie\" href=\"#\" aria-label=\"Copier le lien\"><svg viewBox=\"0 0 32 32\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"#5a1e2c\"/><path d=\"M14 18a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\" fill=\"none\" stroke=\"#f3e2bf\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><path d=\"M18 14a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\" fill=\"none\" stroke=\"#f3e2bf\" stroke-width=\"1.8\" stroke-linecap=\"round\"/></svg></a></div>");
  // règlement du jeu : panneau qui glisse depuis la droite ; toucher à côté ou la croix le referme
  var ebr = $('ebr');
  function reglement(ouvrir){ ebr.classList.toggle('on', ouvrir); ebr.setAttribute('aria-hidden', ouvrir ? 'false' : 'true'); if(ouvrir) ebr.querySelector('.ebr-pan').scrollTop = 0; }
  bas.querySelectorAll('.ebn-mention a')[0].addEventListener('click', function(ev){ ev.preventDefault(); ev.stopPropagation(); reglement(true); });
  ebr.querySelectorAll('[data-fermer]').forEach(function(x){ x.addEventListener('click', function(ev){ ev.stopPropagation(); reglement(false); }); });
  ebr.addEventListener('click', function(ev){ ev.stopPropagation(); });
  document.addEventListener('keydown', function(ev){ if(ev.key === 'Escape' && ebr.classList.contains('on')) reglement(false); });
  bas.querySelectorAll('.ebn-mention a')[1].href = REGLAGES.confidentialite;

  var sc = $('scene'), cap = $('capot'), glow = $('glow'), fente = $('fente'), carte = $('carte'), ch2 = $('ch2'), aide = $('aide'), nl = $('nl');
  var tir = null, fond = null;
  var etat = 'ferme', anims = [], attente = false, compte1 = false, P = 'perspective(420px) ', demT = null, nlT = null;
  var S = { email: lire('ebcal_email') || '', inscrite: false, jour: 0, ouvert: false, jours: [], codeAmie: lire('ebcal_code') || '', tirage: 0, chancesDimanche: 0, chances24: 0, gagnantes: {} };
  var periode = '';          // avant / jeu / apres
  var nbPart = +(lire('ebcal_partages') || 0);
  // lien d'amie ou de collaboratrice : gardé pour l'inscription
  var ami = (new URLSearchParams(location.search).get('ami') || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 20);
  if(ami) ecrire('ebcal_ami', ami); else ami = lire('ebcal_ami') || '';
  // identifiant de cet appareil (aucune donnée personnelle) : repère plusieurs adresses e-mail sur un même téléphone
  var appareil = lire('ebcal_appareil');
  if(!appareil){ appareil = (Date.now().toString(36) + Math.random().toString(36).slice(2, 10)).slice(0, 20); ecrire('ebcal_appareil', appareil); }
  function estCollab(j){ return COLLABS.indexOf(ami) >= 0 && JOURS_COLLAB.indexOf(j) >= 0; }
  var CASE_COLLAB = { type: 'soin', soin: 'Hydra Balance', img: 'hydra-balance_1', valeur: '28,90 €', genre: 'm', url: BAL + 'hydra-balance' };
  function caseDu(j){ return estCollab(j) ? CASE_COLLAB : (CASES[j] || LIV); }

  function A(el, kf, op){ var a = el.animate(kf, Object.assign({ fill: 'forwards' }, op)); anims.push(a); return a; }
  function toast(t){ var e = $('toast'); e.textContent = t; e.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(function(){ e.classList.remove('on'); }, 2800); }
  function texteAide(f){ $('aideimg').src = IMG + 'calendrier-bague-' + f + '.png'; }
  function ecart(){ var o = $('cartes').getBoundingClientRect(), t = tir.getBoundingClientRect(), z = ECHELLE || 1; return { x: ((t.left + t.width / 2) - (o.left + o.width / 2)) / z, y: ((t.top + t.height / 2) - o.top) / z }; }
  // ordinateur : un grand flacon (la page défile un peu), et les cartes s'ouvrent en grand au milieu de l'écran
  var ZOOM = 1, ECHELLE = 1;
  function ajusterZoom(){
    var st = $('stage'), cz = $('cartes'); if(!st || !cz) return;
    if(window.innerWidth < 900){
      ZOOM = 1; ECHELLE = 1; st.style.zoom = '';
      if(cz.parentNode !== sc){ sc.appendChild(cz); } cz.classList.remove('fixe'); cz.style.cssText = '';
      return;
    }
    st.style.zoom = ''; var haut = st.getBoundingClientRect().top + window.scrollY;
    var tient = (window.innerHeight - haut - 16) / (440 * 1320 / 620);      // taille qui tiendrait dans l'écran
    ZOOM = Math.max(1, Math.min(1.6, tient * 1.8));
    st.style.zoom = ZOOM;
    if(cz.parentNode !== racine) racine.appendChild(cz);
    cz.classList.add('fixe');
    var r = st.getBoundingClientRect();
    cz.style.left = (r.left + r.width / 2) + 'px';
    cz.style.top = ((64 + window.innerHeight) / 2) + 'px';
    var largeur = Math.min(560, window.innerHeight * 0.6, window.innerWidth * 0.42);
    ECHELLE = largeur / (440 * 0.78); cz.style.zoom = ECHELLE;
    // le zoom s'applique aussi aux positions : on les corrige pour rester au centre
    cz.style.left = ((r.left + r.width / 2) / ECHELLE) + 'px';
    cz.style.top = (((64 + window.innerHeight) / 2) / ECHELLE) + 'px';
  }
  // ordinateur : si la case du jour est sous le bas de l'écran, la page descend doucement jusqu'à elle
  function montrerCaseDuJour(){
    if(window.innerWidth < 900 || !tir || window.scrollY > 40) return;
    var t = tir.getBoundingClientRect();
    if(t.bottom > window.innerHeight - 40) window.scrollTo({ top: window.scrollY + t.top + t.height / 2 - (64 + window.innerHeight) / 2, behavior: 'smooth' });
  }
  window.addEventListener('resize', ajusterZoom);
  function montrerBadge(b){ if(!b) return; b.classList.add('on'); clearTimeout(b._t); b._t = setTimeout(function(){ b.classList.remove('on'); b._t = null; }, 2200); }
  function ouvrirBandeau(){ clearTimeout(nlT); nl.classList.remove('ebn-ok'); nl.classList.add('ebn-ouvert'); }
  function fermerBandeau(){ nl.classList.remove('ebn-ouvert'); }
  function urlAmi(){ return REGLAGES.page + (S.codeAmie ? '?ami=' + S.codeAmie : ''); }

  // une case du flacon, découpée dans la planche préparée à l'avance
  // chaque case est rangée à part dans la planche (aucun bout de case voisine ne la suit quand le tiroir sort)
  function caseDiv(j, sorte){
    var b = GEO.cases[j], w = b[2] - b[0], h = b[3] - b[1], PW = GEO.planche[0], PH = GEO.planche[1], d = document.createElement('div');
    d.className = 'case k-' + sorte;
    d.style.cssText = 'left:' + (b[0] / 6.2) + '%;top:' + (b[1] / 15) + '%;width:' + (w / 6.2) + '%;height:' + (h / 15) + '%;' +
      'background-size:' + (PW / w * 100) + '% ' + (PH / h * 100) + '%;background-position:' + (b[4] / (PW - w) * 100) + '% ' + (b[5] / (PH - h) * 100) + '%';
    return d;
  }
  function dessinerFlacon(){
    var box = $('cases'); box.innerHTML = ''; tir = null; fond = null;
    for(var j = 1; j <= 24; j++){
      if(periode === 'apres'){ box.appendChild(caseDiv(j, 'ouverte')); continue; }
      if(periode !== 'jeu') continue;
      if(j < S.jour && pret) box.appendChild(caseDiv(j, S.jours.indexOf(j) >= 0 ? 'ouverte' : 'manquee'));
      if(j === S.jour){
        fond = caseDiv(j, 'vide'); box.appendChild(fond);
        box.appendChild(glow); box.appendChild(fente);   // sous le tiroir, comme dans la démo
        tir = caseDiv(j, 'jour'); tir.classList.add('tiroir'); tir.setAttribute('role', 'button');
        tir.setAttribute('aria-label', 'Ouvrir la case du ' + j + ' décembre'); box.appendChild(tir);
        var b = GEO.cases[j];
        glow.style.left = ((b[0] + b[2]) / 12.4) + '%'; glow.style.top = ((b[1] + b[3]) / 30) + '%';
        fente.style.cssText = 'left:' + ((b[0] + 4) / 6.2) + '%;top:' + ((b[1] + 5) / 15) + '%;width:' + ((b[2] - b[0] - 7) / 6.2) + '%;height:' + ((b[3] - b[1] - 7) / 15) + '%';
        tir.addEventListener('click', function(ev){ ev.stopPropagation(); demander(); });
      }
    }
  }

  // ───────────────────────── LA CARTE DU GAIN ─────────────────────────
  function preparerCarte(){
    var j = S.jour, c = caseDu(j), avecImage = (c.type === 'soin' || c.type === 'remise') && IMAGES_PRETES.indexOf(c.img) >= 0;
    $('date1').textContent = j + (j === 1 ? 'ER' : '') + ' DÉCEMBRE';
    carte.classList.remove('g-liv', 'g-soin'); carte.classList.add(avecImage ? 'g-soin' : 'g-liv');
    var sz = carte.querySelector('.soin'), gl = carte.querySelector('.gl');
    if(avecImage){
      sz.querySelector('img').src = IMG + 'calendrier-soin-' + c.img + '.png?v=2';
      sz.querySelector('img').alt = c.soin + ' ELKHA.B';
      sz.querySelector('.t').textContent = c.soin;
      if(c.type === 'soin'){ sz.querySelector('.s').textContent = 'Offert' + (c.genre === 'f' ? 'e' : '') + ' pour l’achat d’un soin'; sz.querySelector('.v').innerHTML = 'VALEUR ' + c.valeur; }
      else { sz.querySelector('.s').textContent = c.sous; sz.querySelector('.v').textContent = c.remise + ' ' + (c.apres || 'AUJOURD’HUI'); }   // même écriture que « VALEUR … »
    } else {
      var titre = c.titre, sous = c.sous;
      if(c.type === 'soin'){ titre = c.soin + ' offert' + (c.genre === 'f' ? 'e' : ''); sous = 'Pour l’achat d’un soin. Valeur ' + c.valeur + '.'; }
      if(c.type === 'remise'){ titre = c.soin + ' ' + c.remise; sous = c.sous + (c.apres ? ', ' + c.apres.toLowerCase() : ', aujourd’hui seulement') + '.'; }
      gl.querySelector('.t').textContent = titre;
      gl.querySelector('.s').textContent = sous;
    }
    // carte 2 : la confirmation
    var conf = c.conf;
    if(c.type === 'soin') conf = 'Votre ' + c.soin + ' offert' + (c.genre === 'f' ? 'e' : '') + ' est enregistré' + (c.genre === 'f' ? 'e' : '') + ' : ' + (c.genre === 'f' ? 'elle' : 'il') + ' sera ajouté' + (c.genre === 'f' ? 'e' : '') + ' à votre commande jusqu’à minuit.';
    if(c.type === 'remise') conf = 'Votre remise de ' + c.remise.replace('–', '') + ' sur ' + c.soin + ' est enregistrée : elle s’appliquera à votre commande jusqu’à minuit.';
    var livr = '';
    if(c.type !== 'bonus'){
      if(j >= 11 && j <= 17) livr = 'Votre commande arrivera juste après Noël : un cadeau à vous offrir entre les fêtes.';
      if(j >= 18) livr = 'Votre commande vous sera livrée sous 10 jours ouvrés, pour bien démarrer la nouvelle année.';
    }
    $('conf').innerHTML = ''; $('conf').appendChild(document.createTextNode(conf));
    if(livr){ var l = document.createElement('div'); l.className = 'livr'; l.textContent = livr; $('conf').appendChild(l); }
    var bt = $('boutique');
    bt.textContent = c.lien || (c.url ? 'DÉCOUVRIR LE SOIN' : 'ALLER À LA BOUTIQUE');
    bt.href = c.url || REGLAGES.boutique; bt.dataset.skin = c.skinId ? '1' : '';
    if(c.type === 'bonus'){ bt.textContent = 'ALLER À LA BOUTIQUE'; bt.href = REGLAGES.boutique; }
    // les chances
    var dernier = (j === 24), sansDimanche = dernier || !S.tirage;
    $('rgS').style.display = sansDimanche ? 'none' : '';
    $('lb24').textContent = dernier ? 'Grand tirage de ce soir' : 'Grand tirage du 24';
    var manques = 0; for(var k = 1; k < j; k++) if(S.jours.indexOf(k) < 0) manques++;
    // « Vous arrivez en cours de route ? » seulement à partir du lundi 7 (une semaine passée)
    var txt = dernier ? AUG_24 : j === 3 ? AUG_3 : ((manques && j >= 7) ? AUG_RETARD : AUG);
    // « Vous arrivez en cours de route ? » seule sur sa ligne, puis le reste à la ligne
    var q = txt.indexOf('? ');
    $('aug').innerHTML = '';
    if(q > 0){ $('aug').appendChild(document.createTextNode(txt.slice(0, q + 1))); $('aug').appendChild(document.createElement('br')); $('aug').appendChild(document.createTextNode(txt.slice(q + 2))); }
    else $('aug').textContent = txt;
  }
  function afficherChances(avant){
    $('chS').textContent = avant ? avant.d : S.chancesDimanche;
    $('ch24').textContent = avant ? avant.g : S.chances24;
  }
  // les chances gagnées aujourd'hui montent sous les yeux de la cliente
  function monterChances(){
    [['chS', S.chancesDimanche], ['ch24', S.chances24]].forEach(function(x){
      var b = $(x[0]), de = +b.textContent, a = x[1];
      if(a <= de){ b.textContent = a; return; }
      var n = de;
      (function pas(){ n++; b.textContent = n; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); if(n < a) setTimeout(pas, 380); })();
    });
  }

  // ───────────────────────── OUVRIR LA CASE ─────────────────────────
  var pret = false, enAttente = false;
  function demander(){
    if(!pret){ enAttente = true; return; }
    clearTimeout(nlT);
    if(etat === 'fini'){ rouvrir(); return; }
    if(etat !== 'ferme') return;
    if(S.inscrite){ ouvrir(); return; }
    attente = true;
    apresCookies(function(){ ouvrirBandeau(); setTimeout(function(){ $('nlin').focus({ preventScroll: true }); }, 450); });
  }
  function rouvrir(){
    clearTimeout(demT); fond.classList.remove('on'); anims.forEach(function(a){ a.cancel(); }); anims = [];
    carte.classList.remove('lu'); $('reflet').classList.remove('go'); tir.classList.remove('revoir'); etat = 'ferme';
    compte1 = true; revoirMode = true; afficherChances();
    // 2e visite : le bouton dit où il emmène (Skin ID le 10, partage les jours bonus)
    var c = caseDu(S.jour), lib = c.skinId ? 'JE FAIS MON SKIN ID' : c.type === 'bonus' ? 'PARTAGER MON LIEN' : 'J’EN PROFITE';
    carte.querySelectorAll('[data-profiter]').forEach(function(b){ b.textContent = lib; });
    ouvrir(true);
  }
  var reponse = null;
  function ouvrir(revoir){
    if(etat !== 'ferme') return; etat = 'anim'; tir.classList.remove('appel'); aide.classList.add('cache');
    try { navigator.vibrate && navigator.vibrate(12); } catch(e){}
    if(!revoir){
      var avant = { d: S.chancesDimanche, g: S.chances24 };
      afficherChances(avant); compte1 = false; reponse = null;
      appeler('ouvrir', { email: S.email }).then(function(r){
        if(!r || !r.ok) throw new Error(r && r.erreur);
        Object.assign(S, r); S.ouvert = true; garderGain(S.jour); reponse = 'ok';
        $('rgS').style.display = (S.jour === 24 || !S.tirage) ? 'none' : '';
        if(etat === 'ch2' && !compte1){ compte1 = true; monterChances(); }
      }).catch(function(){ reponse = 'erreur'; });
    }
    if(S.jour === 24 && !revoir){ ouvrir24(); return; }
    A(tir, [{ transform: P + 'translateZ(0) translateY(0)' }, { transform: P + 'translateZ(40px) translateY(8%)', offset: .45 }, { transform: P + 'translateZ(115px) translateY(28%)', filter: 'drop-shadow(0 18px 14px rgba(40,0,8,.55))' }], { duration: 700, easing: 'cubic-bezier(.3,.6,.25,1)' });
    A(fente, [{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: 80 });
    A(glow, [{ opacity: 0, transform: 'translate(-50%,-50%) scale(.3)' }, { opacity: 1, transform: 'translate(-50%,-50%) scale(1.1)' }, { opacity: .45, transform: 'translate(-50%,-50%) scale(.85)' }], { duration: 1500, delay: 350, easing: 'ease-out' });
    A(cap, [{ transform: 'translateY(0)' }, { transform: 'translateY(-32%)' }], { duration: 900, delay: 100, easing: 'cubic-bezier(.22,.9,.3,1)' });
    var e = ecart();
    setTimeout(function(){
      A(tir, [{ opacity: 1 }, { opacity: 0 }], { duration: 600, easing: 'ease-in' });
      A(fente, [{ opacity: 1 }, { opacity: 0 }], { duration: 900, delay: 300 });
      A(carte, [{ opacity: 0, transform: 'translate(-50%,-50%) translate(' + e.x + 'px,' + e.y + 'px) scale(.12)' }, { opacity: 1, offset: .35 }, { opacity: 1, transform: 'translate(-50%,-50%) translate(0,0) scale(1)' }], { duration: 1000, easing: 'cubic-bezier(.2,.9,.25,1.1)' }).onfinish = function(){
        etat = 'ouvert'; carte.style.pointerEvents = 'auto'; activerPartage();
        $('reflet').classList.add('go');
        setTimeout(function(){ carte.classList.add('lu'); }, 500);
      };
    }, 1050);
  }
  // le 24 : la carte de la fondatrice d'abord, puis le cadeau
  function ouvrir24(){
    var f = $('f24');
    A(cap, [{ transform: 'translateY(0)' }, { transform: 'translateY(-32%)' }], { duration: 900, delay: 100, easing: 'cubic-bezier(.22,.9,.3,1)' });
    A(tir, [{ opacity: 1 }, { opacity: 0 }], { duration: 700, delay: 300 });
    setTimeout(function(){
      A(f, [{ opacity: 0, transform: 'translate(-50%,-50%) scale(.12)' }, { opacity: 1, offset: .35 }, { opacity: 1, transform: 'translate(-50%,-50%) scale(1)' }], { duration: 1100, easing: 'cubic-bezier(.2,.9,.25,1.1)' }).onfinish = function(){ f.style.pointerEvents = 'auto'; $('reflet24').classList.add('go2'); etat = 'f24'; };
    }, 500);
  }
  $('cadeau24').addEventListener('click', function(ev){
    ev.stopPropagation(); if(etat !== 'f24') return; var f = $('f24'); f.style.pointerEvents = 'none';
    A(f, [{ opacity: 1, transform: 'translate(-50%,-50%) scale(1)' }, { opacity: 0, transform: 'translate(-50%,-50%) scale(.97)' }], { duration: 450 });
    A(carte, [{ opacity: 0, transform: 'translate(-50%,-50%) scale(.97)' }, { opacity: 1, transform: 'translate(-50%,-50%) scale(1)' }], { duration: 450 }).onfinish = function(){ etat = 'ouvert'; carte.style.pointerEvents = 'auto'; activerPartage(); $('reflet').classList.add('go'); carte.classList.add('lu'); };
  });
  $('f24').addEventListener('click', function(ev){ ev.stopPropagation(); });

  // carte 1 → carte 2 (fondu enchaîné)
  var revoirMode = false;
  function versChances(){
    if(etat !== 'ouvert') return;
    // 2e visite du jour : pas de 2e carte, « J'en profite » mène directement au soin ou à la boutique
    if(revoirMode){
      var c = caseDu(S.jour), bt = $('boutique');
      if(c.type === 'bonus'){ ranger(); setTimeout(function(){ var p2 = $('pa2'); p2.scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(function(){ p2.click(); }, 700); }, 1900); return; }
      if(bt.dataset.skin) chargerSkinId(); else window.location.href = bt.href;
      return;
    } etat = 'anim'; carte.style.pointerEvents = 'none';
    A(carte, [{ opacity: 1, transform: 'translate(-50%,-50%) scale(1)' }, { opacity: 0, transform: 'translate(-50%,-50%) scale(.97)' }], { duration: 450 });
    A(ch2, [{ opacity: 0, transform: 'translate(-50%,-50%) scale(.97)' }, { opacity: 1, transform: 'translate(-50%,-50%) scale(1)' }], { duration: 450 }).onfinish = function(){
      etat = 'ch2'; ch2.style.pointerEvents = 'auto';
      if(reponse === 'ok' && !compte1){ compte1 = true; setTimeout(monterChances, 250); }
      if(reponse === 'erreur') toast('La connexion a été interrompue : touchez à nouveau votre case dans un instant.');
    };
  }
  // toucher à côté : la carte rentre dans le tiroir
  function ranger(){
    var el = etat === 'ch2' ? ch2 : (etat === 'ouvert' && revoirMode ? carte : null);
    if(!el) return; etat = 'anim'; el.style.pointerEvents = 'none'; fermerRes(); var e = ecart();
    A(el, [{ opacity: 1, transform: 'translate(-50%,-50%) translate(0,0) scale(1)' }, { opacity: 1, offset: .6 }, { opacity: 0, transform: 'translate(-50%,-50%) translate(' + e.x + 'px,' + e.y + 'px) scale(.12)' }], { duration: 850, easing: 'cubic-bezier(.5,0,.7,.4)' });
    setTimeout(function(){
      A(fente, [{ opacity: 0 }, { opacity: 1 }, { opacity: 1, offset: .8 }, { opacity: 0 }], { duration: 1100 });
      A(tir, [{ opacity: 1, transform: P + 'translateZ(115px) translateY(28%)' }, { opacity: 1, transform: P + 'translateZ(0) translateY(0)' }], { duration: 900, easing: 'cubic-bezier(.4,0,.2,1)' });
      A(cap, [{ transform: 'translateY(-32%)' }, { transform: 'translateY(0)' }], { duration: 1000, delay: 150, easing: 'cubic-bezier(.4,0,.2,1)' });
      A(glow, [{ opacity: .45 }, { opacity: 0 }], { duration: 800 });
      setTimeout(function(){
        // la connexion a échoué : la case redevient à ouvrir
        if(reponse === 'erreur'){ anims.forEach(function(a){ a.cancel(); }); anims = []; etat = 'ferme'; tir.classList.add('appel'); texteAide('touchez'); aide.classList.remove('cache'); return; }
        etat = 'fini'; texteAide('demain'); aide.classList.remove('cache');
        A(tir, [{ opacity: 1 }, { opacity: 0 }], { duration: 700 }).onfinish = function(){
          fond.classList.add('on'); anims.forEach(function(a){ if(a.effect && a.effect.target === tir) a.cancel(); }); tir.classList.add('revoir'); };
        demT = setTimeout(function(){ if(etat === 'fini') texteAide('revoir'); }, 4200);
      }, 1100);
    }, 650);
  }
  // déjà ouverte aujourd'hui : on arrive directement sur « Revoir votre surprise »
  function dejaOuverte(){ etat = 'fini'; fond.classList.add('on'); tir.classList.remove('appel'); tir.classList.add('revoir'); texteAide('revoir'); aide.classList.remove('cache'); activerPartage(); }

  // ───────────────────────────── LE PARTAGE ─────────────────────────────
  var joue = false;
  function activerPartage(){ joue = true; $('pa2').classList.remove('off'); $('partxt').style.display = 'none'; }
  function liens(box){
    var m = encodeURIComponent(MSG + urlAmi());
    var w = box.querySelector('[data-r=fwa]'); w.href = 'https://wa.me/?text=' + m; w.target = '_blank'; w.rel = 'noopener';
    box.querySelector('[data-r=fms]').href = 'fb-messenger://share?link=' + encodeURIComponent(urlAmi());
  }
  function fermerRes(){ var bd = $('bd1'); if(bd && !bd._t) bd.classList.remove('on'); racine.querySelectorAll('.bulles').forEach(function(r){ r.classList.remove('on'); }); $('pz2').classList.remove('ouvert-res'); }
  function texteNb(){ return nbPart + (nbPart > 1 ? ' liens partagés' : ' lien partagé'); }
  function majNb(){ racine.querySelectorAll('.nbp').forEach(function(n){ n.textContent = texteNb(); }); }
  function compte(box){ nbPart++; ecrire('ebcal_partages', String(nbPart)); majNb(); montrerBadge(box.id === 'res1' ? $('bd1') : racine.querySelector('#pa2 .badge')); fermerRes(); }
  var SURVOL = !!(window.matchMedia && matchMedia('(hover:hover)').matches);
  racine.querySelectorAll('[data-share]').forEach(function(b){ b.addEventListener('click', function(ev){
    ev.stopPropagation(); if(!joue) return;
    var box = this.id === 'pa1' ? $('res1') : $('res2'); liens(box); var on = (this.id === 'pa1' && SURVOL) || !box.classList.contains('on'); fermerRes(); box.classList.toggle('on', on);
    if(this.id === 'pa1'){ var bd = $('bd1'); clearTimeout(bd._t); bd._t = null; bd.classList.toggle('on', on); }
    if(this.id === 'pa2'){ $('pz2').classList.toggle('ouvert-res', on); if(on) montrerBadge(this.querySelector('.badge')); }
  }); });
  racine.querySelectorAll('.bul').forEach(function(a){ a.addEventListener('click', function(ev){
    ev.stopPropagation(); var r = this.dataset.r, box = this.parentNode;
    if(r === 'fwa' || r === 'fms'){ setTimeout(function(){ compte(box); }, 250); return; }
    ev.preventDefault(); try { navigator.clipboard.writeText(urlAmi()); } catch(e){} compte(box);
    toast(r === 'fig' ? 'Lien copié : collez-le dans votre message Instagram' : r === 'ftt' ? 'Lien copié : collez-le dans votre message TikTok' : 'Lien copié : collez-le où vous voulez');
  }); });
  if(SURVOL){
    $('pa1').addEventListener('mouseenter', function(){ if(!joue || etat !== 'ch2') return; var box = $('res1'); liens(box); if(!box.classList.contains('on')){ fermerRes(); box.classList.add('on'); var bd = $('bd1'); clearTimeout(bd._t); bd._t = null; bd.classList.add('on'); } });
    ch2.addEventListener('mouseleave', function(ev){ if($('res1').classList.contains('on') && !$('res1').contains(ev.relatedTarget)) fermerRes(); });
    $('res1').addEventListener('mouseleave', function(ev){ if(!ch2.contains(ev.relatedTarget)) fermerRes(); });
  }
  $('pa2').addEventListener('mouseenter', function(){ if(joue) montrerBadge(this.querySelector('.badge')); });

  // ───────────────────────── L'INSCRIPTION (bandeau du bas) ─────────────────────────
  $('nlin').addEventListener('input', function(){ $('nlerr').style.display = 'none'; });
  $('nlin').addEventListener('keydown', function(ev){ if(ev.key === 'Enter') $('nlok').click(); });
  var envoi = false;
  $('nlok').addEventListener('click', function(ev){
    ev.stopPropagation(); if(envoi) return;
    var v = $('nlin').value.trim().toLowerCase();
    if(!valideMail(v)){ $('nlerr').textContent = 'Merci d’indiquer une adresse e-mail valide.'; $('nlerr').style.display = 'block'; return; }
    $('nlerr').style.display = 'none'; envoi = true; var lib = $('nlok').textContent; $('nlok').textContent = 'Un instant…'; $('nlok').style.opacity = '.6';
    appeler('inscrire', { email: v, newsletter: $('nlcase').checked, ami: ami, appareil: appareil }).then(function(r){
      if(!r || !r.ok) throw new Error(r && r.erreur);
      Object.assign(S, r); S.email = v; S.inscrite = true; S.jours = r.jours || [];
      if(r.ouvert && S.jour) garderGain(S.jour);   // case déjà ouverte (autre appareil) : la surprise du jour revient dans ce téléphone
      ecrire('ebcal_email', v); ecrire('ebcal_code', S.codeAmie || '');
      envoi = false; $('nlok').textContent = lib; $('nlok').style.opacity = '';
      if(periode === 'jeu') preparerCarte();
      majAvant();
      if(periode === 'jeu') $('nlMerci').textContent = 'Votre case vous attend : touchez-la pour l’ouvrir.';
      nl.classList.add('ebn-ok');
      if(periode === 'jeu' && S.ouvert){ attente = false; setTimeout(function(){ fermerBandeau(); dejaOuverte(); }, 1300); return; }
      // la case ne s'ouvre pas toute seule : la cliente la touche à nouveau (elle garde sa couleur et continue de battre)
      if(attente && periode === 'jeu'){ attente = false; setTimeout(function(){ fermerBandeau(); if(tir && etat === 'ferme'){ tir.classList.add('appel'); texteAide('touchez'); aide.classList.remove('cache'); } }, 2200); }
      else setTimeout(fermerBandeau, 2600);
    }).catch(function(){
      envoi = false; $('nlok').textContent = lib; $('nlok').style.opacity = '';
      $('nlerr').textContent = 'La connexion a été interrompue. Merci de réessayer dans un instant.'; $('nlerr').style.display = 'block';
    });
  });
  $('nlplus').addEventListener('click', function(ev){ ev.stopPropagation(); attente = false; fermerBandeau(); });
  nl.addEventListener('click', function(ev){ ev.stopPropagation(); });

  // ───────────────────────── LES BOUTONS DES CARTES ─────────────────────────
  racine.querySelectorAll('[data-profiter]').forEach(function(b){ b.addEventListener('click', function(ev){ ev.stopPropagation(); versChances(); }); });
  $('boutique').addEventListener('click', function(ev){
    ev.stopPropagation();
    if(this.dataset.skin){ ev.preventDefault(); chargerSkinId(); }
  });
  function chargerSkinId(){
    if(typeof window.ebSkinIdOpen === 'function'){ window.ebSkinIdOpen(); return; }
    var s = document.createElement('script'); s.src = REGLAGES.skinId; s.async = true;
    s.onload = function(){ if(typeof window.ebSkinIdOpen === 'function') window.ebSkinIdOpen(); };
    document.head.appendChild(s);
  }
  carte.addEventListener('click', function(ev){ ev.stopPropagation(); });
  ch2.addEventListener('click', function(ev){ ev.stopPropagation(); if(!ev.target.closest('[data-share]')) fermerRes(); });
  document.addEventListener('click', function(ev){
    if(!racine.contains(ev.target)) return;
    if(etat === 'f24') return;
    if(racine.querySelector('.bulles.on')){ fermerRes(); return; }
    if(etat === 'ouvert' && !revoirMode){ versChances(); return; }
    ranger();
  });
  // avant le 1er : toucher le flacon affiche « Patience… »
  var patT;
  $('stage').addEventListener('click', function(ev){ if(periode === 'avant'){ ev.stopPropagation(); texteAide('patience'); clearTimeout(patT); patT = setTimeout(function(){ texteAide('avant'); }, 2600); } });

  // ───────────────────────── LES TROIS PÉRIODES ─────────────────────────
  function majAvant(){
    var t = $('avTxt'); if(!t) return;
    t.textContent = S.inscrite ? 'Le calendrier des fêtes ELKHA.B se prépare. Vous recevrez un e-mail le matin de l’ouverture : la première case vous attendra.' : 'Le calendrier des fêtes ELKHA.B se prépare. Inscrivez-vous pour recevoir un e-mail le matin de l’ouverture : la première case vous attendra.';
    $('prevenir').style.display = S.inscrite ? 'none' : '';
  }
  function nomTirage(t){ return t === 24 ? 'du grand tirage' : 'du ' + t + ' décembre'; }
  function mettreEnPlace(){
    var p = paris();
    if(S.jour) periode = 'jeu';
    else periode = (p.year > REGLAGES.annee || (p.year === REGLAGES.annee && p.month === 12 && p.day > 24)) ? 'apres' : 'avant';
    anims.forEach(function(a){ a.cancel(); }); anims = []; etat = 'ferme';
    racine.classList.remove('avant', 'apres', 'lundi'); if(periode !== 'jeu') racine.classList.add(periode);
    dessinerFlacon();
    cap.style.display = '';
    texteAide(periode === 'jeu' ? 'touchez' : periode); aide.classList.remove('cache');
    $('nlTitre').textContent = periode === 'avant' ? 'Ne manquez pas l’ouverture' : 'Vos 24 surprises vous attendent';
    $('nlTexte').textContent = periode === 'avant' ? 'Indiquez votre e-mail : nous vous prévenons le matin du 1er décembre, dès l’ouverture.' : 'Indiquez votre e-mail pour ouvrir votre case du jour et participer aux tirages. Nous ne vous le demanderons qu’une fois.';
    $('nlok').textContent = periode === 'avant' ? 'Me prévenir' : 'Je participe';
    $('nlMerci').textContent = periode === 'avant' ? 'Vous recevrez un e-mail le matin du 1er décembre, dès l’ouverture.' : 'Votre première case vous attend.';
    majAvant();
    if(periode === 'avant'){
      var o = Date.UTC(REGLAGES.annee, 11, 1), d = Date.UTC(p.year, p.month - 1, p.day), n = Math.max(1, Math.round((o - d) / 864e5));
      $('jours').textContent = n; $('jours').nextElementSibling.textContent = n > 1 ? ' jours' : ' jour';
    }
    // le coffret à gagner : Lumière d'hiver jusqu'au dimanche 20 à 18 h, puis Velours d'Hiver
    var tirage = S.tirage || (S.jour ? 24 : 6);
    if(periode === 'jeu' && !S.inscrite){ var h = p.hour; tirage = 0; for(var i = 0; i < REGLAGES.dimanches.length; i++){ var dm = REGLAGES.dimanches[i]; if(S.jour < dm || (S.jour === dm && h < 18)){ tirage = dm; break; } } if(!tirage) tirage = 24; }
    var L = tirage === 24 ? LOTS.velours : LOTS.lumiere, li = $('lotimg');
    if(li){ li.src = IMG + L.img; li.alt = L.alt; $('lotnom').textContent = L.nom; $('lotsous').textContent = L.sous; $('lottxt').textContent = L.txt;
      $('lotdate').textContent = tirage === 24 ? 'Grand tirage jeudi 24 décembre à 18 h' : 'Tirage au sort dimanche ' + tirage + ' décembre';
      $('lottitre').textContent = tirage === 24 ? 'LE GRAND TIRAGE DU 24' : 'À GAGNER CETTE SEMAINE'; }
    // la gagnante du dernier tirage (prénom tapé dans le Sheet)
    var der = 0; [6, 13, 20, 24].forEach(function(t){ if(S.gagnantes && S.gagnantes[t] && (periode === 'apres' || S.jour > t)) der = t; });
    if(der && periode === 'jeu'){
      racine.classList.add('lundi');
      $('gsT').textContent = 'Résultat ' + nomTirage(der); $('gsN').textContent = S.gagnantes[der];
      $('gsP').textContent = 'a remporté le coffret Lumière d’hiver. Félicitations !';
      var pro = tirage === 24 ? 'Grand tirage le jeudi 24 décembre : à vous de tenter votre chance !' : 'Prochain tirage le dimanche ' + tirage + ' décembre : à vous de tenter votre chance !';
      $('gsR').textContent = pro;
    }
    if(periode === 'apres' && S.gagnantes && S.gagnantes[24] && $('gag24')) $('gag24').textContent = S.gagnantes[24];
    if(periode === 'jeu'){
      preparerCarte(); afficherChances();
      if(S.ouvert) dejaOuverte(); else { tir.classList.add('appel'); etat = 'ferme'; }
    }
    majNb();
  }
  $('prevenir') && $('prevenir').addEventListener('click', function(ev){ ev.stopPropagation(); attente = false; ouvrirBandeau(); });

  // un seul panneau à la fois : on attend que le panneau des cookies ait reçu une réponse (cookie eb_cookies)
  function cookiesRepondu(){ return /(?:^|; )eb_cookies=/.test(document.cookie); }
  function apresCookies(fait){
    if(cookiesRepondu()) return fait();
    var t = setInterval(function(){ if(cookiesRepondu()){ clearInterval(t); fait(); } }, 400);
  }

  // ───────────────────────────── DÉMARRAGE ─────────────────────────────
  // affichage immédiat d'après la date de Paris, puis confirmation par le registre
  (function(){ var p = paris(); S.jour = (p.year === REGLAGES.annee && p.month === 12 && p.day <= 24) ? p.day : 0; })();
  S.inscrite = !!S.email; S.ouvert = false;
  ajusterZoom(); mettreEnPlace();
  info.style.transition = 'opacity .5s'; info.style.opacity = '1';
  if(periode === 'jeu'){ racine.classList.add('attend'); aide.classList.add('cache'); }
  appeler('etat', { email: S.email }).then(function(r){
    if(!r || !r.ok) throw new Error();
    Object.assign(S, r);
    if(!r.inscrite && S.email){ S.email = ''; ecrire('ebcal_email', null); }
    S.jours = r.jours || []; S.inscrite = !!r.inscrite;
    if(r.inscrite && r.ouvert && S.jour) garderGain(S.jour);
  }).catch(function(){ S.inscrite = false; S.jours = []; }).then(function(){
    racine.classList.remove('attend'); pret = true;
    mettreEnPlace(); ajusterZoom();
    if(periode === 'jeu') setTimeout(montrerCaseDuJour, 600);
    // avant le 1er seulement : le panneau monte tout seul, une fois que la cliente a répondu au panneau des cookies
    // (pendant le jeu, il ne monte que quand elle touche sa case)
    if(!S.inscrite && periode === 'avant') apresCookies(function(){ nlT = setTimeout(function(){ if(!S.inscrite) ouvrirBandeau(); }, 1200); });
    if(enAttente && periode === 'jeu'){ enAttente = false; demander(); }
  });
})();
