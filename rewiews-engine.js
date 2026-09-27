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

  function escapeHTML(str){
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  // À appeler sur chaque fiche produit : ebRenderReviews('id-du-conteneur', 'Nom exact du produit')
  window.ebRenderReviews = async function(containerId, productName){
    const container = document.getElementById(containerId);
    if(!container) return;
    try {
      const res = await fetch(CSV_URL);
      const text = await res.text();
      const rows = parseCSV(text);
      if(rows.length < 2) return;
      const header = rows[0];
      const idx = {
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
      if(matches.length === 0){ return; }

      let html = '';
      matches.forEach(function(r){
        html += '<div class="eb-review">';
        html += '<div class="eb-review-stars">' + starsHTML(r[idx.note]) + '</div>';
        html += '<div class="eb-review-meta">' + escapeHTML(r[idx.prenom]) + ', ' + escapeHTML(r[idx.age]) + ' ans — ' + escapeHTML(r[idx.peau]) + '</div>';
        html += '<div class="eb-review-text">' + escapeHTML(r[idx.commentaire]) + '</div>';
        html += '</div>';
      });
      container.innerHTML = html;
    } catch(e){
      console.error('ELKHA.B avis — erreur de chargement', e);
    }
  };
})();
