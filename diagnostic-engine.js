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
    html += '<a class="eb-diag-product" href="https://elkhab-soins.carrd.co/?from='+EB_DIAG_ORIGIN+'&back='+window.scrollY+'&s='+ebScoresStr+'#'+p.id+'" style="text-decoration:none;color:inherit;display:block"><div class="eb-diag-product-name">'+p.name+' →</div><div class="eb-diag-product-why">'+p.why+'</div></a>';
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
  sessionStorage.setItem('ebDiagScrollY', window.scrollY);
  document.getElementById('ebDiagOverlay').classList.add('open');
  ebShow('intro');
}
function ebDiagOpenWithScores(scoresArr){
  sessionStorage.setItem('ebDiagScrollY', window.scrollY);
  const keys = ['radiance','sebum','hydration','texture','sensitivity','barrier'];
  scores = {};
  keys.forEach(function(k,i){ scores[k] = scoresArr[i] || 0; });
  document.getElementById('ebDiagOverlay').classList.add('open');
  ebShowResult();
}
function ebDiagClose(){
  document.getElementById('ebDiagOverlay').classList.remove('open');
  const saved = sessionStorage.getItem('ebDiagScrollY');
  if(saved !== null){
    window.scrollTo({top: parseInt(saved,10), behavior:'instant'});
  }
}

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
