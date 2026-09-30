(function(){
  var styleTag = document.createElement('style');
  styleTag.textContent = '\n.eb-diag-overlay{position:fixed;inset:0;background:#000;z-index:99999;transform:translateX(-100%);transition:transform .5s cubic-bezier(.65,0,.35,1);overflow-y:auto;font-family:\'Montserrat\',sans-serif;color:#fff}\n.eb-diag-overlay.open{transform:translateX(0)}\n.eb-diag-close{position:fixed;top:20px;left:20px;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.12);border:none;font-size:20px;line-height:1;color:#fff;cursor:pointer;transition:transform .2s ease,background .2s ease;z-index:3;display:flex;align-items:center;justify-content:center}\n.eb-diag-close:hover{transform:rotate(90deg);background:rgba(255,255,255,.22)}\n.eb-diag-progress{position:fixed;top:0;left:0;right:0;height:2px;background:rgba(255,255,255,.15);z-index:2}\n.eb-diag-progress-bar{height:100%;background:#fff;width:0%;transition:width .5s ease}\n.eb-diag-screen{display:none;animation:ebFadeIn .5s ease}\n.eb-diag-screen.active{display:block;min-height:100vh}\n@keyframes ebFadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}\n\n.eb-diag-screen.active[data-screen="intro"]{height:100vh;display:flex;flex-direction:column;overflow:hidden}\n.eb-diag-intro-top{padding:52px 24px 14px;text-align:center;flex-shrink:0}\n.eb-diag-intro-brand{font-size:11px;letter-spacing:.22em;text-transform:uppercase;opacity:.55;margin-bottom:8px}\n.eb-diag-intro-title{font-size:22px;font-weight:800;letter-spacing:.02em}\n.eb-diag-intro-image{flex-shrink:0;aspect-ratio:16/9;width:100%;background-color:#111;position:relative;overflow:hidden}\n.eb-diag-intro-image video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.eb-diag-intro-bottom{padding:18px 28px 28px;text-align:center;max-width:480px;margin:0 auto;flex-shrink:0}\n.eb-diag-intro-text{font-size:13px;line-height:1.6;opacity:.75;margin-bottom:18px}\n\n.eb-diag-content{max-width:520px;margin:0 auto;padding:104px 28px 60px}\n.eb-diag-eyebrow{font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin-bottom:16px}\n.eb-diag-question{font-size:22px;font-weight:700;line-height:1.45;margin-bottom:30px}\n.eb-diag-answer{display:block;width:100%;text-align:left;background:transparent;border:1px solid rgba(255,255,255,.4);padding:18px 20px;margin-bottom:18px;font-family:\'Montserrat\',sans-serif;font-size:15px;font-weight:500;color:#fff;cursor:pointer;transition:transform .22s ease,background .22s ease,color .22s ease,border-color .22s ease;line-height:1.5}\n.eb-diag-answer:hover{transform:scale(1.02);background:#fff;color:#000;border-color:#fff}\n.eb-diag-start-btn{display:inline-block;width:100%;text-align:center;background:#fff;color:#000;border:none;padding:18px;font-family:\'Montserrat\',sans-serif;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease}\n.eb-diag-start-btn:hover{transform:scale(1.03)}\n.eb-diag-nav{display:flex;justify-content:space-between;align-items:center;margin-top:28px;gap:16px}\n.eb-diag-back{background:transparent;border:1px solid rgba(255,255,255,.4);color:#fff;font-family:\'Montserrat\',sans-serif;font-size:11px;letter-spacing:.08em;text-transform:uppercase;padding:13px 22px;cursor:pointer;transition:background .2s ease,color .2s ease}\n.eb-diag-back:hover{background:#fff;color:#000}\n.eb-diag-count{font-size:11.5px;opacity:.55;letter-spacing:.04em}\n\n.eb-diag-result-eyebrow{font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin-bottom:16px}\n.eb-diag-result-headline{font-size:24px;font-weight:800;line-height:1.45;margin-bottom:30px}\n.eb-diag-result p{font-size:13px;line-height:2;margin:0 0 22px;opacity:.85}\n.eb-diag-result h4{font-size:13px;letter-spacing:.1em;text-transform:uppercase;margin:38px 0 4px;font-weight:700}\n.eb-diag-result-needs-list{margin:0;padding:0;list-style:none}\n.eb-diag-result-needs-list li{font-size:14.5px;line-height:2.1;margin-bottom:16px;padding-left:22px;position:relative;opacity:.85}\n.eb-diag-result-needs-list li:before{content:"•";position:absolute;left:0;top:0;font-size:16px;opacity:.6}\n.eb-diag-acc{margin:0 0 10px}\n.eb-diag-acc-item{border-top:1px solid rgba(255,255,255,.3)}\n.eb-diag-acc-item:last-child{border-bottom:1px solid rgba(255,255,255,.3)}\n.eb-diag-acc-header{display:flex;justify-content:space-between;align-items:center;padding:22px 2px;cursor:pointer}\n.eb-diag-acc-header h4{margin:0;font-size:12.5px;letter-spacing:.09em;text-transform:uppercase;font-weight:700}\n.eb-diag-acc-icon{font-size:20px;font-weight:300;transition:transform .3s ease;flex-shrink:0;margin-left:12px}\n.eb-diag-acc-item.open .eb-diag-acc-icon{transform:rotate(45deg)}\n.eb-diag-acc-body{max-height:0;overflow:hidden;transition:max-height .4s ease}\n.eb-diag-acc-item.open .eb-diag-acc-body{max-height:900px}\n.eb-diag-acc-body-inner{padding:4px 2px 28px}\n.eb-diag-acc-body-inner p:first-child{margin-top:0}\n.eb-diag-acc-body-inner p:last-child{margin-bottom:0}\n.eb-diag-product{border:1px solid rgba(255,255,255,.4);padding:22px;margin-bottom:20px;cursor:pointer;transition:transform .2s ease,background .2s ease,border-color .2s ease}\n.eb-diag-product:hover{transform:scale(1.02);background:rgba(255,255,255,.06);border-color:#fff}\n.eb-diag-product-name{font-weight:700;font-size:15px;margin-bottom:8px}\n.eb-diag-product-why{font-size:13px;line-height:1.75;opacity:.65}\n.eb-diag-approach{margin-top:42px;padding:30px;border:1px solid rgba(255,255,255,.4)}\n.eb-diag-approach p{margin-bottom:0}\n.eb-diag-final{text-align:center;margin-top:38px}\n.eb-diag-footnote{font-size:13px;line-height:1.9;opacity:.55;font-style:italic;margin:0}\n.eb-diag-gesture{font-style:italic;opacity:.6;font-size:13.5px;line-height:1.8;margin-top:8px}\n.eb-diag-cta{display:inline-block;margin-top:22px;padding:17px 34px;background:#fff;color:#000;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;transition:transform .2s ease}\n.eb-diag-cta:hover{transform:scale(1.05)}\n.eb-diag-restart{display:table;margin:22px auto 0;background:none;border:none;font-family:\'Montserrat\',sans-serif;font-size:12px;text-decoration:underline;opacity:.5;color:#fff;cursor:pointer}\n';
  document.head.appendChild(styleTag);

  // Vidéo d'introduction — hébergée sur le site Accueil (elkhab.com)
  var EB_DIAG_VIDEO = 'https://elkhab.com/assets/videos/video01.mp4?v=b2260212';

  var container = document.createElement('div');
  container.innerHTML = '<div class="eb-diag-overlay" id="ebDiagOverlay">\n  <button class="eb-diag-close" onclick="ebDiagClose()">&times;</button>\n  <div class="eb-diag-progress"><div class="eb-diag-progress-bar" id="ebProgressBar"></div></div>\n\n  <div class="eb-diag-screen active" data-screen="intro">\n    <div class="eb-diag-intro-top">\n      <div class="eb-diag-intro-brand">ELKHA.B</div>\n      <div class="eb-diag-intro-title">Votre peau évolue</div>\n    </div>\n    <div class="eb-diag-intro-image"><video autoplay muted loop playsinline src="' + EB_DIAG_VIDEO + '"></video></div>\n    <div class="eb-diag-intro-bottom">\n      <div class="eb-diag-intro-text">Ce diagnostic vous aide à mieux comprendre votre peau et à lui apporter des soins réellement adaptés, parmi l\'ensemble des gammes ELKHA.B.<br><br>6 questions, une minute, une routine pensée pour vous.</div>\n      <button class="eb-diag-start-btn" onclick="ebDiagStart()">Commencer mon diagnostic</button>\n    </div>\n  </div>\n\n  <div class="eb-diag-screen" data-screen="questions">\n    <div class="eb-diag-content">\n      <div class="eb-diag-eyebrow" id="ebQIntro"></div>\n      <div class="eb-diag-question" id="ebQTitle"></div>\n      <div id="ebQAnswers"></div>\n      <div class="eb-diag-nav">\n        <button class="eb-diag-back" id="ebBack" onclick="ebDiagBack()">Précédent</button>\n        <div class="eb-diag-count" id="ebCount"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class="eb-diag-screen" data-screen="result">\n    <div class="eb-diag-content">\n      <div id="ebResultContent"></div>\n      <button class="eb-diag-restart" onclick="ebDiagRestart()">Refaire le diagnostic</button>\n    </div>\n  </div>\n</div>';
  document.body.appendChild(container);
})();


(function(){

// Adresses : lues dans cart-engine.js (un seul endroit), avec une valeur de secours
function ebDiagSiteUrl(name, fallback){
  return (window.EB_SITES && window.EB_SITES[name]) || fallback;
}
// Site sur lequel la cliente a lancé le diagnostic : détecté automatiquement depuis l'adresse
function ebDiagCurrentSite(){
  return window.EB_SITE_NAME || window.EB_DIAG_ORIGIN || 'accueil';
}

const questions = [
  { intro:"Lorsque vous vous regardez dans le miroir...", q:"Comment décririez-vous l'éclat de votre peau ?",
    answers:[
      {t:"Lumineuse et uniforme", pts:{radiance:0}},
      {t:"Un peu terne par moments", pts:{radiance:1}},
      {t:"Fatiguée, manque d'éclat", pts:{radiance:2}},
      {t:"Irrégulière, avec des zones ternes", pts:{radiance:2, texture:1}}
    ]},
  { intro:"Au fil de la journée, sans retoucher votre peau...", q:"Comment se comporte-t-elle ?",
    answers:[
      {t:"Reste confortable et stable", pts:{}},
      {t:"Tiraille légèrement en fin de journée", pts:{hydration:1}},
      {t:"Brille sur la zone T (front, nez, menton)", pts:{sebum:1}},
      {t:"Devient franchement brillante partout", pts:{sebum:2}}
    ]},
  { intro:"En observant votre peau de près...", q:"Comment est le grain de peau et les pores ?",
    answers:[
      {t:"Fin et régulier, pores peu visibles", pts:{}},
      {t:"Quelques irrégularités par endroits", pts:{texture:1}},
      {t:"Pores dilatés, surtout zone T", pts:{texture:2, sebum:1}},
      {t:"Imperfections ou points noirs fréquents", pts:{texture:2, sebum:1}}
    ]},
  { intro:"Sans aucun soin appliqué...", q:"Comment se sent votre peau au naturel ?",
    answers:[
      {t:"Confortable, sans tiraillement", pts:{}},
      {t:"Un peu sèche par endroits", pts:{hydration:1}},
      {t:"Sèche et inconfortable", pts:{hydration:2, barrier:1}},
      {t:"Tiraille et réagit facilement", pts:{hydration:2, barrier:1, sensitivity:1}}
    ]},
  { intro:"Face au vent, au froid, à un nouveau soin...", q:"Comment réagit votre peau aux changements ?",
    answers:[
      {t:"Ne réagit presque jamais", pts:{}},
      {t:"Rougit ou tiraille parfois", pts:{sensitivity:1}},
      {t:"Réagit facilement (rougeurs, échauffement)", pts:{sensitivity:2, barrier:1}},
      {t:"Devient inconfortable au moindre changement", pts:{sensitivity:2, barrier:2}}
    ]},
  { intro:"Ce qui vous préoccupe le plus, aujourd'hui...", q:"Si vous deviez ne changer qu'une chose sur votre peau, ce serait :",
    answers:[
      {t:"Retrouver de l'éclat", pts:{radiance:2}},
      {t:"Réguler les brillances et affiner les pores", pts:{sebum:2, texture:1}},
      {t:"Apaiser et réparer une peau fragilisée", pts:{sensitivity:2, barrier:2}},
      {t:"Hydrater durablement", pts:{hydration:2}}
    ]}
];

const NEED_INFO = {
  radiance:{ label:"un manque d'éclat", 
    text:"Votre teint peut paraître terne ou irrégulier. La peau perd en luminosité lorsqu'elle est ralentie ou en manque de stimulation.",
    needs:["Relancer l'éclat naturel","Uniformiser le teint","Stimuler la peau en douceur"] },
  sebum:{ label:"un excès de sébum", 
    text:"Votre peau produit plus de sébum que nécessaire, ce qui peut se traduire par des brillances et des pores plus marqués.",
    needs:["Réguler la production de sébum","Matifier sans assécher","Affiner le grain de peau"] },
  hydration:{ label:"un manque d'hydratation", 
    text:"Votre peau manque d'eau, ce qui entraîne tiraillements et inconfort au quotidien.",
    needs:["Retenir durablement l'hydratation","Réconforter la peau sans l'alourdir","Restaurer la souplesse"] },
  texture:{ label:"un grain de peau irrégulier", 
    text:"Votre peau présente des irrégularités de surface : pores visibles, texture inégale ou petites imperfections.",
    needs:["Affiner le grain de peau","Resserrer l'apparence des pores","Unifier la surface de la peau"] },
  sensitivity:{ label:"une sensibilité marquée", 
    text:"Votre peau réagit facilement aux changements extérieurs ou aux nouveaux soins — elle a besoin de douceur avant tout.",
    needs:["Apaiser les réactions cutanées","Renforcer la tolérance de la peau","Éviter la surcharge de soins"] },
  barrier:{ label:"une barrière cutanée fragilisée", 
    text:"Votre barrière cutanée montre des signes de fragilité, ce qui explique inconfort, sensibilité ou déshydratation.",
    needs:["Restaurer la barrière cutanée","Protéger le microbiote de la peau","Retenir l'hydratation plus efficacement"] }
};

const PRODUCTS = [
  {name:"Radiance C Serum", id:"radiance-serum", why:"Soin éclat dynamisant à la vitamine C, antioxydant, unifie le teint", tags:["radiance"]},
  {name:"Lumi-Bloom Niacinamide 5", id:"lumibloom-niac-5", why:"Régule le sébum, resserre les pores, unifie le teint et estompe les taches", tags:["sebum","texture","radiance"]},
  {name:"Luminescence Jour", id:"luminescence-jour", why:"Hydratation intense et apaisante", tags:["hydration","sensitivity"]},
  {name:"Luminescence Nuit", id:"luminescence-nuit", why:"Hydratation intense et effet fermeté pendant la nuit", tags:["hydration"]},
  {name:"Lumi-Veil CC Cream SPF 30", id:"lumiveil-cc-cream", why:"Protection solaire, réparation de la barrière (céramides, beurre de cacao) et hydratation intense", tags:["barrier","hydration"]},
  {name:"Lumi-Bloom Prébiotique Bioactif", id:"gelee-lumibloom", why:"Répare la barrière cutanée et protège le microbiote de la peau", tags:["barrier","sensitivity"]}
];

const ALWAYS_RECOMMEND = {name:"Radiance Protect SPF 50", id:"radiance-protect", why:"Le geste à ne pas oublier : une protection solaire quotidienne"};

let current = 0;
let scores = {};

function ebShow(name){
  document.querySelectorAll('.eb-diag-screen').forEach(s=>s.classList.remove('active'));
  document.querySelector('[data-screen="'+name+'"]').classList.add('active');
}
function ebUpdateProgress(){
  const pct = 8 + (current/questions.length)*92;
  document.getElementById('ebProgressBar').style.width = Math.min(pct,100)+'%';
}
function ebFormatRemaining(remainingQuestions){
  const totalSeconds = Math.max(remainingQuestions, 0) * 10;
  if(totalSeconds <= 5){ return "Dernière question"; }
  if(totalSeconds < 60){ return "Encore environ " + totalSeconds + " secondes"; }
  const minutes = Math.ceil(totalSeconds/60);
  return "Encore environ " + minutes + " minute" + (minutes>1?"s":"");
}
function ebRenderQuestion(){
  const q = questions[current];
  document.getElementById('ebQIntro').textContent = q.intro;
  document.getElementById('ebQTitle').textContent = q.q;
  document.getElementById('ebCount').textContent = ebFormatRemaining(questions.length - current);
  document.getElementById('ebBack').style.visibility = current===0 ? 'hidden' : 'visible';
  const wrap = document.getElementById('ebQAnswers');
  wrap.innerHTML = '';
  q.answers.forEach(a=>{
    const btn = document.createElement('button');
    btn.className = 'eb-diag-answer';
    btn.textContent = a.t;
    btn.onclick = function(){ ebAnswer(a.pts); };
    wrap.appendChild(btn);
  });
  ebUpdateProgress();
}
function ebDiagStart(){
  current = 0;
  scores = {radiance:0, sebum:0, hydration:0, texture:0, sensitivity:0, barrier:0};
  ebShow('questions');
  ebRenderQuestion();
}
function ebAnswer(pts){
  Object.keys(pts).forEach(k=>{ scores[k] = (scores[k]||0) + pts[k]; });
  if(current < questions.length - 1){ current++; ebRenderQuestion(); }
  else { ebShowResult(false); }
}
function ebDiagBack(){ if(current>0){ current--; ebRenderQuestion(); } }

function ebDiagAccToggle(headerEl){
  const item = headerEl.parentElement;
  const wasOpen = item.classList.contains('open');
  const parent = item.parentElement;
  parent.querySelectorAll('.eb-diag-acc-item').forEach(function(i){ i.classList.remove('open'); });
  if(!wasOpen){ item.classList.add('open'); }
}
window.ebDiagAccToggle = ebDiagAccToggle;

// openRoutine = true : au retour d'une fiche produit, on rouvre directement "Routine recommandée"
function ebShowResult(openRoutine){
  const ranked = Object.keys(scores).sort((a,b)=>scores[b]-scores[a]);
  const top = ranked.filter(k=>scores[k] > 0).slice(0,2);

  let revealHtml = '';
  let needsHtml = '';

  if(top.length === 0){
    revealHtml += '<div class="eb-diag-result-headline">Votre peau est équilibrée.</div>';
    revealHtml += '<p>Un bon équilibre est précieux, l\'objectif est de le préserver. Votre peau est globalement stable et confortable. Elle tolère bien les soins et ne réagit pas facilement.</p>';
    needsHtml += '<p>Votre peau ne présente pas de besoin particulier identifié aujourd\'hui. Il s\'agit simplement de préserver cet équilibre et de sublimer votre éclat naturel.</p>';
  } else {
    const headline = top.map(k=>NEED_INFO[k].label).join(' et ');
    revealHtml += '<div class="eb-diag-result-headline">Votre peau présente '+headline+'.</div>';
    top.forEach(k=>{ revealHtml += '<p>'+NEED_INFO[k].text+'</p>'; });

    needsHtml += '<ul class="eb-diag-result-needs-list">';
    const needsSet = [];
    top.forEach(k=>NEED_INFO[k].needs.forEach(n=>{ if(needsSet.indexOf(n)===-1) needsSet.push(n); }));
    needsSet.forEach(n=>needsHtml+='<li>'+n+'</li>');
    needsHtml += '</ul>';
  }

  let candidates = top.length === 0
    ? PRODUCTS.filter(p=>p.tags.indexOf('radiance')!==-1 || p.tags.indexOf('hydration')!==-1)
    : PRODUCTS.filter(p=>p.tags.some(t=>top.indexOf(t)!==-1));

  candidates.sort(function(a,b){
    const scoreA = a.tags.filter(function(t){ return top.indexOf(t)!==-1; }).length;
    const scoreB = b.tags.filter(function(t){ return top.indexOf(t)!==-1; }).length;
    return scoreB - scoreA;
  });

  const selected = candidates.slice(0,3);
  const soinsBase = ebDiagSiteUrl('soins', 'https://soins.elkhab.com/');
  const fromSite = ebDiagCurrentSite();
  // Section où se trouvait la cliente quand elle a ouvert le diagnostic (ex. une fiche Soins)
  const currentHash = window.location.hash.replace('#','');
  const ebScoresStr = ['radiance','sebum','hydration','texture','sensitivity','barrier'].map(k=>scores[k]||0).join(',');
  let routineHtml = '';
  selected.forEach(p=>{
    let href = soinsBase + '?from=' + fromSite + '&back=' + Math.round(window.scrollY) + '&s=' + ebScoresStr;
    if(currentHash){ href += '&h=' + encodeURIComponent(currentHash); }
    href += '#' + p.id;
    routineHtml += '<a class="eb-diag-product" href="'+href+'" style="text-decoration:none;color:inherit;display:block"><div class="eb-diag-product-name">'+p.name+' →</div><div class="eb-diag-product-why">'+p.why+'</div></a>';
  });
  routineHtml += '<div class="eb-diag-gesture">'+ALWAYS_RECOMMEND.why+'</div>';

  let html = '';
  html += '<div class="eb-diag-result-eyebrow">Ce que révèle votre peau</div>';
  html += '<div class="eb-diag-acc" id="ebDiagResultAcc">';
  html += '  <div class="eb-diag-acc-item">';
  html += '    <div class="eb-diag-acc-header" onclick="ebDiagAccToggle(this)"><h4>Votre diagnostic</h4><span class="eb-diag-acc-icon">+</span></div>';
  html += '    <div class="eb-diag-acc-body"><div class="eb-diag-acc-body-inner">'+revealHtml+'</div></div>';
  html += '  </div>';
  html += '  <div class="eb-diag-acc-item">';
  html += '    <div class="eb-diag-acc-header" onclick="ebDiagAccToggle(this)"><h4>Les besoins de votre peau</h4><span class="eb-diag-acc-icon">+</span></div>';
  html += '    <div class="eb-diag-acc-body"><div class="eb-diag-acc-body-inner">'+needsHtml+'</div></div>';
  html += '  </div>';
  html += '  <div class="eb-diag-acc-item" id="ebDiagRoutineItem">';
  html += '    <div class="eb-diag-acc-header" onclick="ebDiagAccToggle(this)"><h4>Routine recommandée</h4><span class="eb-diag-acc-icon">+</span></div>';
  html += '    <div class="eb-diag-acc-body"><div class="eb-diag-acc-body-inner">'+routineHtml+'</div></div>';
  html += '  </div>';
  html += '</div>';

  html += '<div class="eb-diag-approach"><h4 style="margin-top:0">L\'approche ELKHA.B</h4><p>Chaque peau est écoutée avant d\'être traitée : on répare et on apaise ce qui doit l\'être, puis on révèle l\'éclat naturel — jamais l\'inverse.</p></div>';
  html += '<div class="eb-diag-final">';
  html += '  <div class="eb-diag-footnote">Votre peau évolue avec le temps. Ce diagnostic reflète ses besoins aujourd\'hui. N\'hésitez pas à le refaire dans quelques mois si vos préoccupations changent.</div>';
  html += '  <a class="eb-diag-cta" href="'+ebDiagSiteUrl('bloom', 'https://bloom.elkhab.com/')+'">Voir tous nos soins</a>';
  html += '</div>';

  document.getElementById('ebResultContent').innerHTML = html;
  document.getElementById('ebProgressBar').style.width = '100%';
  ebShow('result');

  if(openRoutine){
    const overlay = document.getElementById('ebDiagOverlay');
    const routineItem = document.getElementById('ebDiagRoutineItem');
    if(routineItem){
      routineItem.classList.add('open');
      // On fait défiler le diagnostic jusqu'à la routine pour qu'elle soit visible tout de suite
      setTimeout(function(){
        if(overlay){ overlay.scrollTop = Math.max(0, routineItem.offsetTop - 90); }
      }, 60);
    }
  } else {
    const overlay = document.getElementById('ebDiagOverlay');
    if(overlay){ overlay.scrollTop = 0; }
  }
}

function ebDiagRestart(){ ebShow('intro'); document.getElementById('ebProgressBar').style.width='0%'; }
function ebDiagOpen(){
  document.getElementById('ebDiagOverlay').classList.add('open');
  ebShow('intro');
  const vid = document.querySelector('.eb-diag-intro-image video');
  if(vid){
    vid.play().catch(function(){});
    vid.onended = function(){ vid.currentTime = 0; vid.play().catch(function(){}); };
  }
}
function ebDiagOpenWithScores(scoresArr){
  const keys = ['radiance','sebum','hydration','texture','sensitivity','barrier'];
  scores = {};
  keys.forEach(function(k,i){ scores[k] = scoresArr[i] || 0; });
  document.getElementById('ebDiagOverlay').classList.add('open');
  ebShowResult(true);
}
function ebDiagClose(){ document.getElementById('ebDiagOverlay').classList.remove('open'); }

window.ebDiagStart = ebDiagStart;
window.ebDiagBack = ebDiagBack;
window.ebDiagRestart = ebDiagRestart;
window.ebDiagOpen = ebDiagOpen;
window.ebDiagOpenWithScores = ebDiagOpenWithScores;
window.ebDiagClose = ebDiagClose;

})();


// Retour depuis une fiche produit : on rouvre le diagnostic avec les résultats de la cliente
(function(){
  const params = new URLSearchParams(window.location.search);
  if(params.get('openDiag') === '1'){
    const s = params.get('s');
    setTimeout(function(){
      if(s && typeof ebDiagOpenWithScores === 'function'){
        ebDiagOpenWithScores(s.split(',').map(Number));
      } else if(typeof ebDiagOpen === 'function'){
        ebDiagOpen();
      }
    }, 300);
  }
})();
