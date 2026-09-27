(function(){
  const SHEET_ID = "100cL1PE_giU0UnrVhWSmTEoU7aqIGVgkrUP1aYC_AcU";
  const GID = "1134795247"; // onglet "Publiés"
  const CSV_URL = "https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/export?format=csv&gid=" + GID;

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

  // À appeler sur chaque fiche produit : ebRenderReviews('id-du-conteneur', 'Nom exact du produit')
  // Rend les avis pour un conteneur donné
  async function ebRenderReviewsInto(container, productName){
    container.innerHTML = '<div class="eb-review-status">Chargement des avis…</div>';
    try {
      const res = await fetch(CSV_URL);
      if(!res.ok){
        container.innerHTML = '<div class="eb-review-status">Avis momentanément indisponibles (erreur ' + res.status + ').</div>';
        return;
      }
      const text = await res.text();
      const rows = parseCSV(text);
      if(rows.length < 2){
        container.innerHTML = '<div class="eb-review-status">Aucun avis pour le moment.</div>';
        return;
      }
      const header = rows[0];
      const idx = {
        horodateur: header.indexOf('Horodateur'),
        produit: header.indexOf('Produit concerné'),
        prenom: header.indexOf('Prénom'),
        age: header.indexOf('Age'),
        peau: header.indexOf('Type de peau'),
        note: header.indexOf('Votre note'),
        commentaire: header.indexOf('Votre avis')
      };
      const matches = rows.slice(1).filter(function(r){
        return r[idx.produit] && r[idx.produit].trim() === productName;
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

  // Fonction appelable directement depuis chaque fiche produit
  window.ebRenderReviews = function(containerId, productName){
    const container = document.getElementById(containerId);
    if(container){ ebRenderReviewsInto(container, productName); }
  };
  window.ebReviewsEngineReady = true;
})();
