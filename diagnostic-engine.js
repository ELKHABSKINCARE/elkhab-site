(function(){
  var styleTag = document.createElement('style');
  styleTag.textContent = '\n.eb-diag-overlay{position:fixed;inset:0;background:rgba(255,255,255,.15);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:99999;display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transition:opacity .45s ease;padding:24px}\n.eb-diag-overlay.open{opacity:1;visibility:visible}\n.eb-diag-panel{background:rgba(255,255,255,.35);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);width:100%;max-width:600px;max-height:88vh;overflow-y:auto;padding:52px 40px;position:relative;font-family:\'Montserrat\',sans-serif;color:#000;box-shadow:0 30px 80px rgba(0,0,0,.25)}\n.eb-diag-close{position:absolute;top:18px;right:20px;background:none;border:none;font-size:22px;cursor:pointer;line-height:1;color:#000;transition:transform .2s ease}\n.eb-diag-close:hover{transform:scale(1.2) rotate(90deg)}\n.eb-diag-progress{height:2px;background:#e5e2da;border-radius:2px;margin-bottom:40px;overflow:hidden}\n.eb-diag-progress-bar{height:100%;background:#000;width:8%;transition:width .5s ease}\n.eb-diag-screen{display:none;animation:ebFadeIn .5s ease}\n.eb-diag-screen.active{display:block}\n@keyframes ebFadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}\n.eb-diag-eyebrow{font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin-bottom:16px}\n.eb-diag-question{font-size:23px;font-weight:700;line-height:1.45;margin-bottom:30px}\n.eb-diag-intro-text{font-size:15px;line-height:1.9;opacity:.75;margin-bottom:38px}\n.eb-diag-answer{display:block;width:100%;text-align:left;background:transparent;border:1px solid #000;padding:18px 20px;margin-bottom:14px;font-family:\'Montserrat\',sans-serif;font-size:15px;font-weight:500;color:#000;cursor:pointer;transition:transform .22s ease,background .22s ease,color .22s ease;line-height:1.5}\n.eb-diag-answer:hover{transform:scale(1.025);background:#000;color:#fff}\n.eb-diag-start-btn{display:block;width:100%;text-align:center;background:#000;color:#fff;border:none;padding:18px;font-family:\'Montserrat\',sans-serif;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:transform .2s ease}\n.eb-diag-start-btn:hover{transform:scale(1.03)}\n.eb-diag-nav{display:flex;justify-content:space-between;align-items:center;margin-top:28px}\n.eb-diag-back{background:none;border:none;font-family:\'Montserrat\',sans-serif;font-size:12px;letter-spacing:.06em;text-transform:uppercase;opacity:.45;cursor:pointer;text-decoration:underline}\n.eb-diag-back:hover{opacity:.8}\n.eb-diag-count{font-size:11px;opacity:.45;letter-spacing:.06em}\n.eb-diag-result-eyebrow{font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin-bottom:16px}\n.eb-diag-result-headline{font-size:25px;font-weight:800;line-height:1.45;margin-bottom:30px}\n.eb-diag-result p{font-size:15px;line-height:1.95;margin:0 0 20px}\n.eb-diag-result h4{font-size:13px;letter-spacing:.1em;text-transform:uppercase;margin:38px 0 4px;font-weight:700}\n.eb-diag-result-needs-list{margin:18px 0 8px;padding:0;list-style:none}\n.eb-diag-result-needs-list li{font-size:14.5px;line-height:2;margin-bottom:12px;padding-left:22px;position:relative}\n.eb-diag-result-needs-list li:before{content:"•";position:absolute;left:0;top:0;font-size:16px;opacity:.6}\n.eb-diag-product{border:1px solid #000;padding:20px 22px;margin-bottom:16px;cursor:pointer;transition:transform .2s ease,background .2s ease}\n.eb-diag-product:hover{transform:scale(1.02);background:rgba(0,0,0,.03)}\n.eb-diag-product-name{font-weight:700;font-size:15px;margin-bottom:8px}\n.eb-diag-product-why{font-size:13px;line-height:1.75;opacity:.65}\n.eb-diag-approach{margin-top:38px;padding:26px;border:1px solid #000}\n.eb-diag-approach p{margin-bottom:0}\n.eb-diag-footnote{font-size:13px;line-height:1.9;opacity:.55;font-style:italic;margin-top:38px}\n.eb-diag-gesture{font-style:italic;opacity:.6;font-size:13.5px;line-height:1.8;margin-top:8px}\n.eb-diag-cta{display:inline-block;margin-top:34px;padding:17px 34px;background:#000;color:#fff;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;transition:transform .2s ease}\n.eb-diag-cta:hover{transform:scale(1.05)}\n.eb-diag-restart{display:block;margin-top:22px;background:none;border:none;font-family:\'Montserrat\',sans-serif;font-size:12px;text-decoration:underline;opacity:.45;cursor:pointer}\n';
  document.head.appendChild(styleTag);

  var container = document.createElement('div');
  container.innerHTML = '<div class="eb-diag-overlay" id="ebDiagOverlay">\n  <div class="eb-diag-panel">\n    <button class="eb-diag-close" onclick="ebDiagClose()">&times;</button>\n    <div class="eb-diag-progress"><div class="eb-diag-progress-bar" id="ebProgressBar"></div></div>\n\n    <div class="eb-diag-screen active" data-screen="intro">\n      <div class="eb-diag-eyebrow">Diagnostic peau ELKHA.B</div>\n      <div class="eb-diag-question">Votre peau évolue, parfois discrètement, parfois de façon plus visible.</div>\n      <div class="eb-diag-intro-text">Ce diagnostic vous aide à mieux la comprendre et à lui apporter des soins réellement adaptés, parmi l\'ensemble des gammes ELKHA.B.<br><br>Quelques questions, une minute, et une routine pensée pour vous.</div>\n      <button class="eb-diag-start-btn" onclick="ebDiagStart()">Commencer mon diagnostic</button>\n    </div>\n\n    <div class="eb-diag-screen" data-screen="questions">\n      <div class="eb-diag-eyebrow" id="ebQIntro"></div>\n      <div class="eb-diag-question" id="ebQTitle"></div>\n      <div id="ebQAnswers"></div>\n      <div class="eb-diag-nav">\n        <button class="eb-diag-back" id="ebBack" onclick="ebDiagBack()">Précédent</button>\n        <div class="eb-diag-count" id="ebCount"></div>\n      </div>\n    </div>\n\n    <div class="eb-diag-screen" data-screen="result">\n      <div id="ebResultContent"></div>\n      <button class="eb-diag-restart" onclick="ebDiagRestart()">Refaire le diagnostic</button>\n    </div>\n  </div>\n</div>';
  document.body.appendChild(container);
})();


(function(){

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
function ebRenderQuestion(){
  const q = questions[current];
  document.getElementById('ebQIntro').textContent = q.intro;
  document.getElementById('ebQTitle').textContent = q.q;
  document.getElementById('ebCount').textContent = (current+1)+' / '+questions.length;
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
  else { ebShowResult(); }
}
function ebDiagBack(){ if(current>0){ current--; ebRenderQuestion(); } }

function ebShowResult(){
  const ranked = Object.keys(scores).sort((a,b)=>scores[b]-scores[a]);
  const top = ranked.filter(k=>scores[k] > 0).slice(0,2);

  let html = '';
  if(top.length === 0){
    html += '<div class="eb-diag-result-eyebrow">Voici ce que révèle votre peau</div>';
    html += '<div class="eb-diag-result-headline">Votre peau est équilibrée.</div>';
    html += '<p>Un bon équilibre est précieux, l\'objectif est de le préserver. Votre peau est globalement stable et confortable. Elle tolère bien les soins et ne réagit pas facilement. Il s\'agit simplement de la préserver et de la sublimer.</p>';
  } else {
    const headline = top.map(k=>NEED_INFO[k].label).join(' et ');
    html += '<div class="eb-diag-result-eyebrow">Voici ce que révèle votre peau</div>';
    html += '<div class="eb-diag-result-headline">Votre peau présente '+headline+'.</div>';
    top.forEach(k=>{ html += '<p>'+NEED_INFO[k].text+'</p>'; });
    html += '<h4>Ce dont votre peau a besoin :</h4><ul class="eb-diag-result-needs-list">';
    const needsSet = [];
    top.forEach(k=>NEED_INFO[k].needs.forEach(n=>{ if(needsSet.indexOf(n)===-1) needsSet.push(n); }));
    needsSet.forEach(n=>html+='<li>'+n+'</li>');
    html += '</ul>';
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

  html += '<h4>Votre routine ELKHA.B recommandée :</h4>';
  selected.forEach(p=>{
    const ebScoresStr = ['radiance','sebum','hydration','texture','sensitivity','barrier'].map(k=>scores[k]||0).join(',');
    html += '<a class="eb-diag-product" href="https://elkhab-soins.carrd.co/?from='+ (window.EB_DIAG_ORIGIN||'accueil') +'&back='+window.scrollY+'&s='+ebScoresStr+'#'+p.id+'" style="text-decoration:none;color:inherit;display:block"><div class="eb-diag-product-name">'+p.name+' →</div><div class="eb-diag-product-why">'+p.why+'</div></a>';
  });
  html += '<div class="eb-diag-gesture">'+ALWAYS_RECOMMEND.why+'</div>';

  html += '<div class="eb-diag-approach"><h4 style="margin-top:0">L\'approche ELKHA.B</h4><p>Chaque peau est écoutée avant d\'être traitée : on répare et on apaise ce qui doit l\'être, puis on révèle l\'éclat naturel — jamais l\'inverse.</p></div>';
  html += '<div class="eb-diag-footnote">Votre peau évolue avec le temps. Ce diagnostic reflète ses besoins aujourd\'hui. N\'hésitez pas à le refaire dans quelques mois si vos préoccupations changent.</div>';
  html += '<a class="eb-diag-cta" href="https://elkhab-bloom.carrd.co/">Voir tous nos soins</a>';

  document.getElementById('ebResultContent').innerHTML = html;
  document.getElementById('ebProgressBar').style.width = '100%';
  ebShow('result');
}

function ebDiagRestart(){ ebShow('intro'); document.getElementById('ebProgressBar').style.width='8%'; }
function ebDiagOpen(){
  document.getElementById('ebDiagOverlay').classList.add('open');
  ebShow('intro');
}
function ebDiagOpenWithScores(scoresArr){
  const keys = ['radiance','sebum','hydration','texture','sensitivity','barrier'];
  scores = {};
  keys.forEach(function(k,i){ scores[k] = scoresArr[i] || 0; });
  document.getElementById('ebDiagOverlay').classList.add('open');
  ebShowResult();
}
function ebDiagClose(){ document.getElementById('ebDiagOverlay').classList.remove('open'); }

window.ebDiagStart = ebDiagStart;
window.ebDiagBack = ebDiagBack;
window.ebDiagRestart = ebDiagRestart;
window.ebDiagOpen = ebDiagOpen;
window.ebDiagOpenWithScores = ebDiagOpenWithScores;
window.ebDiagClose = ebDiagClose;

})();


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


// Auto-ouverture si on revient d'un site après avoir cliqué sur un produit recommandé
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
