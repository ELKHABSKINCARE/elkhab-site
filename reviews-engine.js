(function(){
  const SHEET_ID = "100cL1PE_giU0UnrVhWSmTEoU7aqIGVgkrUP1aYC_AcU";
  const GID = "1134795247"; // onglet "Publiés"
  const CSV_URL = "https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/export?format=csv&gid=" + GID;

  // ---------------------------------------------------------------
  // Style des avis et du bouton « Laisser un avis » (fond noir des fiches)
  // ---------------------------------------------------------------
  var styleTag = document.createElement('style');
  styleTag.textContent =
    ".eb-reviews{font-family:'Montserrat',sans-serif !important;margin:10px auto 0 !important;padding:0 24px !important;max-width:560px !important;width:auto !important;box-sizing:border-box !important;color:#fff !important;text-align:left !important}" +
    ".eb-reviews .eb-review,.eb-reviews .eb-review-status{padding-left:0 !important;padding-right:0 !important}" +
    ".eb-reviews *{text-align:left !important}" +
    ".eb-review{padding:16px 0;border-bottom:1px solid rgba(255,255,255,.18)}" +
    ".eb-review-stars{color:#fff !important;font-size:19px !important;letter-spacing:3px;line-height:1.2;margin-bottom:8px}" +
    ".eb-review-meta{font-size:11.5px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:#fff !important;opacity:.6;margin-bottom:8px}" +
    ".eb-review-text{font-size:13.5px;line-height:1.7;color:#fff !important;opacity:.9}" +
    ".eb-review-status{font-size:13px;color:#fff !important;opacity:.6;font-style:italic;padding:12px 0}" +
    ".eb-laisser-avis{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;max-width:280px;margin:22px auto 0;background:#fff;color:#000 !important;border:1px solid #fff;border-radius:0;padding:16px 24px;box-sizing:border-box;font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;text-decoration:none !important;cursor:pointer;transition:transform .2s ease;white-space:nowrap}" +
    ".eb-laisser-avis:hover{transform:scale(1.03)}";
  document.head.appendChild(styleTag);

  // Petit analyseur de CSV (gère les virgules et retours à la ligne à l'intérieur d'un commentaire entre guillemets)
  function parseCSV(text){
    const rows = [];
    let row = [], field = '', inQuotes = false;
    for(let i = 0; i < text.length; i++){
      const c = text[i];
      if(inQuotes){
        if(c === '"'){
          if(text[i+1] === '"'){ field += '"'; i++; }
          else { inQuotes = false; }
        } else {
          field += c;
        }
      } else {
        if(c === '"'){ inQuotes = true; }
        else if(c === ','){ row.push(field); field = ''; }
        else if(c === '\n'){ row.push(field); rows.push(row); row = []; field = ''; }
        else if(c === '\r'){ /* ignoré */ }
        else { field += c; }
      }
    }
    if(field.length || row.length){ row.push(field); rows.push(row); }
    return rows;
  }

  function starsHTML(note){
    const n = Math.round(parseFloat(note)) || 0;
    let s = '';
    for(let i = 1; i <= 5; i++){ s += i <= n ? '★' : '☆'; }
    return s;
  }

  function formatDate(horodateur){
    if(!horodateur) return '';
    const datePart = horodateur.trim().split(' ')[0]; // "27/09/2026 14:32:10" -> "27/09/2026"
    const parts = datePart.split('/');
    if(parts.length !== 3) return '';
    const mois = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
    const jour = parseInt(parts[0], 10);
    const moisIndex = parseInt(parts[1], 10) - 1;
    const annee = parts[2];
    if(isNaN(jour) || !mois[moisIndex]) return '';
    return jour + ' ' + mois[moisIndex] + ' ' + annee;
  }

  function escapeHTML(str){
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  // Le Google Sheets n'est lu qu'une seule fois par page, même s'il y a 18 fiches
  let csvPromise = null;
  function getRows(){
    if(!csvPromise){
      csvPromise = fetch(CSV_URL)
        .then(function(res){
          if(!res.ok) throw new Error('HTTP ' + res.status);
          return res.text();
        })
        .then(parseCSV)
        .catch(function(err){ csvPromise = null; throw err; });
    }
    return csvPromise;
  }

  // Rend les avis pour un conteneur donné
  async function ebRenderReviewsInto(container, productName){
    try {
      const rows = await getRows();
      if(rows.length < 2){
        container.innerHTML = '<div class="eb-review-status">Aucun avis pour le moment.</div>';
        return;
      }
      // Reconnaît chaque colonne par un mot-clé, sans tenir compte des majuscules,
      // des accents ni du pluriel (ex. « PRODUITS CONCERNÉS » = « Produit concerné »)
      const norm = function(t){ return (t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim(); };
      const header = rows[0].map(norm);
      const col = function(motCle){ for(let i = 0; i < header.length; i++){ if(header[i].indexOf(motCle) !== -1) return i; } return -1; };
      const idx = {
        horodateur: col('horodat'),
        produit: col('produit'),
        prenom: col('prenom'),
        age: col('age'),
        peau: col('peau'),
        note: col('note'),
        commentaire: col('avis')
      };
      if(idx.produit === -1){
        console.error('ELKHA.B avis — colonne des produits introuvable dans l\'onglet Publiés', rows[0]);
      }
      const cible = (productName || '').trim();
      const matches = rows.slice(1).filter(function(r){
        return r[idx.produit] && r[idx.produit].trim() === cible;
      });
      if(matches.length === 0){
        container.innerHTML = '<div class="eb-review-status">Aucun avis pour le moment.</div>';
        return;
      }

      let html = '';
      matches.forEach(function(r){
        const dateFormatee = formatDate(r[idx.horodateur]);
        html += '<div class="eb-review">';
        html += '<div class="eb-review-stars">' + starsHTML(r[idx.note]) + '</div>';
        html += '<div class="eb-review-meta">' + escapeHTML(r[idx.prenom]) + ', ' + escapeHTML(r[idx.age]) + ' ans — ' + escapeHTML(r[idx.peau]) + (dateFormatee ? ' · ' + dateFormatee : '') + '</div>';
        html += '<div class="eb-review-text">' + escapeHTML(r[idx.commentaire]) + '</div>';
        html += '</div>';
      });
      container.innerHTML = html;
    } catch(e){
      container.innerHTML = '<div class="eb-review-status">Avis momentanément indisponibles.</div>';
      console.error('ELKHA.B avis — erreur de chargement', e);
    }
  }

  // Fonction appelable directement (compatibilité avec l'ancienne méthode)
  window.ebRenderReviews = function(containerId, productName){
    const container = document.getElementById(containerId);
    if(container){ ebRenderReviewsInto(container, productName); }
  };
  window.ebReviewsEngineReady = true;

  // ---------------------------------------------------------------
  // AFFICHAGE AUTOMATIQUE : remplit tous les blocs <div class="eb-reviews" data-produit="...">
  // de la page, sans aucun code dans les fiches.
  // ---------------------------------------------------------------
  function renderAll(){
    const blocs = document.querySelectorAll('.eb-reviews[data-produit]');
    for(let i = 0; i < blocs.length; i++){
      const b = blocs[i];
      if(b.getAttribute('data-eb-fait') === '1') continue;
      b.setAttribute('data-eb-fait', '1');
      ebRenderReviewsInto(b, b.getAttribute('data-produit'));
    }
  }

  function start(){
    renderAll();
    window.addEventListener('hashchange', function(){ setTimeout(renderAll, 50); setTimeout(renderAll, 600); });
    if(window.MutationObserver){
      new MutationObserver(function(){ renderAll(); }).observe(document.body, { childList: true, subtree: true });
    }
    let n = 0;
    const t = setInterval(function(){ renderAll(); if(++n > 20) clearInterval(t); }, 500);
  }

  if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', start); }
  else { start(); }
})();
