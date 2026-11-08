// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — FICHES BALANCE — VERSION TEST (à charger après produits-data-test.js)
// Ajoute les soins Balance au catalogue des fiches (window.EB_PRODUITS).
// Codes panier Shopify (variantId) complétés le 2 nov. 2026.
// =====================================================================
// Bloc « Vos expériences » des fiches en dégradé (vert sur le site Balance)
// Typo : Montserrat fine chargée par le code lui-même (le site Balance ne la charge pas en 300/400 → textes trop gras)
(function(){ if(document.getElementById('eb-montserrat')) return; var l = document.createElement('link'); l.id = 'eb-montserrat'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap'; document.head.appendChild(l); })();
window.EB_AVIS_DEGRADE = true;
// Fiches sur ordinateur : les photos qui ont leur propre fond (texture, visage) remplissent toute la colonne, comme sur Bloom
window.EB_MEDIA_PLEIN = true;
window.EB_PRODUITS = window.EB_PRODUITS || {};
window.EB_INCI_PLUS = window.EB_INCI_PLUS || {};
(function(){
var BALANCE = {
  // =====================================================================
  // CALM BALANCE JOUR
  // =====================================================================
  "calm-balance-jour": {
    nom: "Calm Balance Jour",
    sousTitre: "Crème de jour apaisante · Aloe vera · Sans parfum",
    details: ["50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "34,90€",
    variantId: "60321020051801",
    inci: "calm-balance-jour",
    avis: "Calm Balance Jour",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-calm-balance-jour-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-calm-balance-jour-1-boite-flacon-v6.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-calm-balance-jour-2-flacon-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_CALM_JOUR_3.png?v=1793810533",
        // 📷 4. VISAGE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/VISAGE_CALM_JOUR_4.png?v=1793810536"
      ]
    },
    routine: {
      etapes: [
        { moment: "Le matin", soin: "gelee-lumibloom", texte: "Sur peau propre, appliquez une pression de Gelée Lumi-Bloom : ses prébiotiques préparent la peau en douceur et l'aident à retrouver son équilibre." },
        { moment: "Le matin", soin: "calm-balance-jour", texte: "Appliquez une pression de Calm Balance Jour et lissez-la du centre vers l'extérieur du visage : elle apaise, hydrate et enveloppe la peau de confort, sans fini gras." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Terminez par Radiance Protect SPF 50 : son filtre minéral protège les peaux sensibles des UV, qui accentuent rougeurs et inconfort." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Calm Balance Jour est une parenthèse de douceur pour les peaux sensibles. Sa crème légère et sans parfum apaise les inconforts, atténue l'apparence des rougeurs et hydrate durablement. Jour après jour, la peau paraît plus calme, plus souple et retrouve son équilibre." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que les peaux sensibles ont besoin de douceur, mais aussi d'une hydratation qui dure. Calm Balance Jour associe le jus d'aloe vera, l'acide hyaluronique, le Sodium PCA et l'huile de jojoba dans une formule sans parfum, pour calmer la peau et soutenir sa barrière naturelle. Sa texture légère mais nourrissante s'absorbe rapidement, sans sensation grasse." },
      { titre: "Bénéfices clés",
        liste: ["Aide à apaiser les sensations d'inconfort", "Atténue visiblement l'apparence des rougeurs", "Hydrate durablement la peau", "Soutient la barrière cutanée", "Sans parfum, pensée pour les peaux sensibles"] },
      { titre: "Pensé pour",
        texte: "Les peaux sensibles, délicates ou réactives, sujettes aux rougeurs et aux sensations d'inconfort. Idéale pour celles et ceux qui recherchent une crème de jour hydratante et sans parfum, à utiliser au quotidien." },
      { titre: "Texture & sensorialité",
        texte: "Une texture crème légère et nourrissante, qui s'absorbe facilement et laisse la peau douce et confortable, sans fini gras. Sans parfum ajouté : une expérience simple et délicate, pensée pour les peaux sensibles." },
      { titre: "Engagement ELKHA.B",
        texte: "• 100% d'ingrédients d'origine naturelle\n• 22% d'ingrédients issus de l'agriculture biologique\n• Sans parfum\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Calm Balance Jour en est l'expression la plus pure : une formule sans parfum qui prend soin des peaux sensibles sans jamais les brusquer." }
    ],
    accord: {
      fiche: "calm-balance-nuit",
      nom: "Calm Balance Nuit",
      texte: "Le duo apaisant, du matin au soir.\nCalm Balance Jour apaise et hydrate la peau tout au long de la journée.\nCalm Balance Nuit prend le relais pendant le sommeil, pour une peau calme, confortable et reposée au réveil.",
      prix: "36,90€",
      variantId: "60321802289497"
    }
  },

  // =====================================================================
  // CALM BALANCE NUIT
  // =====================================================================
  "calm-balance-nuit": {
    nom: "Calm Balance Nuit",
    sousTitre: "Crème de nuit apaisante · Aloe vera · Algues · Sans parfum",
    details: ["50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "36,90€",
    variantId: "60321802289497",
    inci: "calm-balance-nuit",
    avis: "Calm Balance Nuit",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-calm-balance-nuit-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-calm-balance-nuit-1-boite-flacon-v6.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-calm-balance-nuit-2-flacon-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_d91c1c53-6ad3-40e7-b6af-8bd6fc4320aa.png?v=1793810582"
      ]
    },
    routine: {
      etapes: [
        { moment: "Le soir", soin: "gelee-lumibloom", texte: "Sur peau propre, appliquez une pression de Gelée Lumi-Bloom pour préparer la peau et préserver son équilibre." },
        { moment: "Le soir", soin: "calm-balance-nuit", texte: "Terminez par une pression de Calm Balance Nuit : elle apaise et hydrate la peau pendant toute la nuit, pour un réveil tout en confort." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Calm Balance Nuit offre à la peau une parenthèse de douceur pendant le sommeil. Sa formule sans parfum associe le jus d'aloe vera, des algues et l'acide hyaluronique pour apaiser les irritations, atténuer l'apparence des rougeurs et préserver l'hydratation. Au réveil, la peau paraît plus calme, douce et équilibrée." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que la nuit est le moment où la peau se répare. Calm Balance Nuit réunit apaisement et hydratation longue durée dans une formule douce et sans parfum, qui accompagne les peaux délicates pendant leur repos. Un soin réconfortant qui s'intègre naturellement à une routine respectueuse des peaux sensibles." },
      { titre: "Bénéfices clés",
        liste: ["Aide à apaiser les irritations et les sensations d'inconfort", "Atténue visiblement l'apparence des rougeurs", "Hydrate durablement pendant la nuit", "Renforce la barrière d'hydratation naturelle de la peau", "Sans parfum, pensée pour les peaux sensibles"] },
      { titre: "Pensé pour",
        texte: "Tous les types de peau, et particulièrement les peaux sensibles, délicates ou sujettes aux rougeurs et aux irritations. Idéale pour celles et ceux qui recherchent un soin de nuit hydratant et apaisant, sans parfum, pour retrouver une peau confortable au réveil." },
      { titre: "Texture & sensorialité",
        texte: "Une texture douce et enveloppante qui apporte confort à la peau tout au long de la nuit. Sans parfum ajouté : seule l'odeur naturellement neutre de la formule, pour une expérience discrète et respectueuse des peaux sensibles." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\n• 42% d'ingrédients issus de l'agriculture biologique\n• Sans parfum\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Calm Balance Nuit accompagne les peaux sensibles pendant leur repos, avec une formule sans parfum qui respecte leur équilibre." }
    ],
    accord: {
      fiche: "calm-balance-jour",
      nom: "Calm Balance Jour",
      texte: "Le duo apaisant, du matin au soir.\nCalm Balance Jour apaise et hydrate la peau tout au long de la journée.\nCalm Balance Nuit prend le relais pendant le sommeil, pour une peau calme et reposée au réveil.",
      prix: "34,90€",
      variantId: "60321020051801"
    }
  },

  // =====================================================================
  // HYDRA BALANCE
  // =====================================================================
  "hydra-balance": {
    nom: "Hydra Balance",
    sousTitre: "Gel hydratant · Acide hyaluronique · Sodium PCA",
    details: ["30 ml", "Vegan"],
    note: "une pression suffit",
    prix: "28,90€",
    variantId: "60320959398233",
    inci: "hydra-balance",
    avis: "Hydra Balance",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-hydra-balance-miniature-v7.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-hydra-balance-1-boite-flacon-v7.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-hydra-balance-2-flacon-v7.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_68d4e2b1-4b7a-408e-b982-bdd0859e8f36.png?v=1793813457"
      ]
    },
    routine: {
      etapes: [
        { moment: "Matin et/ou soir", soin: "hydra-balance", texte: "Sur peau propre, appliquez une pression de Hydra Balance : son gel frais désaltère la peau et la prépare à recevoir les soins suivants." },
        { moment: "Le matin", soin: "luminescence-jour", texte: "Poursuivez avec Luminescence Jour, qui scelle l'hydratation et révèle l'éclat naturel du teint." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Terminez par Radiance Protect SPF 50 pour préserver la peau des UV tout au long de la journée." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Hydra Balance offre à la peau un véritable bain d'hydratation. Son gel frais et léger associe l'acide hyaluronique à différents poids moléculaires et le Sodium PCA pour retenir l'eau dans la peau. Jour après jour, la peau paraît plus rebondie, plus souple et lumineuse." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'une peau bien hydratée retrouve naturellement souplesse et confort. Hydra Balance réunit deux actifs complémentaires, l'acide hyaluronique et le Sodium PCA, enrichis en aloe vera et en extraits de thé blanc et de sauge. Sa texture gel apporte une fraîcheur immédiate et aide à lisser les petites ridules liées à la déshydratation." },
      { titre: "Bénéfices clés",
        liste: ["Hydrate intensément et durablement", "Repulpe et lisse les ridules de déshydratation", "Préserve la souplesse et l'élasticité de la peau", "Procure une sensation de fraîcheur immédiate"] },
      { titre: "Pensé pour",
        texte: "Les peaux déshydratées, en manque de souplesse ou présentant des ridules liées à la déshydratation. Idéal pour celles et ceux qui recherchent une hydratation efficace dans une texture légère et fraîche, quel que soit leur type de peau. Peut suffire seul aux peaux mixtes." },
      { titre: "Texture & sensorialité",
        texte: "Une texture gel fraîche et légère qui glisse sur la peau et apporte une agréable sensation d'hydratation, sans aucune lourdeur. Son parfum aquatique aux notes fruitées et juteuses accompagne cette sensation de fraîcheur." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\n• 11% d'ingrédients issus de l'agriculture biologique\n• Formule certifiée COSMOS NATURAL par Ecocert\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Hydra Balance place l'hydratation, cœur de toutes nos formules, au premier plan." }
    ],
    accord: {
      fiche: "calm-balance-jour",
      nom: "Calm Balance Jour",
      texte: "Le duo fraîcheur et confort.\nHydra Balance gorge la peau d'eau et la prépare en douceur.\nCalm Balance Jour scelle cette hydratation et apaise la peau tout au long de la journée.",
      prix: "34,90€",
      variantId: "60321020051801"
    }
  },

  // =====================================================================
  // FUSION BALANCE (démaquillant biphasé, 100 ml)
  // =====================================================================
  "fusion-balance": {
    nom: "Fusion Balance",
    sousTitre: "Démaquillant biphasé · Aloe vera · Sans parfum",
    details: ["100 ml", "Vegan"],
    note: "agitez avant emploi",
    prix: "26,90€",
    variantId: "60341364228441",
    inci: "fusion-balance",
    avis: "Fusion Balance",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-fusion-balance-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-fusion-balance-1-boite-flacon-v6.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-fusion-balance-2-flacon-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_a83a3578-c07d-491a-8a83-e496c32dc0b0.png?v=1793697938",
        // 📷 4. YEUX
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/IMAGE_YEUX.png?v=1793697938"
      ]
    },
    routine: {
      etapes: [
        { moment: "Le soir", soin: "fusion-balance", texte: "Agitez le flacon pour mélanger les deux phases. Imbibez un coton, posez-le quelques secondes sur les paupières fermées, puis glissez-le vers l'extérieur, sans frotter. Recommencez sur le visage jusqu'à ce que le coton ressorte propre." },
        { moment: "Le soir", soin: "calm-balance-nuit", texte: "Sur une peau nette, appliquez une pression de Calm Balance Nuit : elle apaise et nourrit la peau pendant votre sommeil." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Un geste, et le maquillage s'efface. Fusion Balance réunit une phase huileuse et une phase aqueuse qui, mélangées d'un mouvement, dissolvent le maquillage des yeux et du visage, même waterproof ou longue tenue, en quelques secondes. Pas besoin de frotter : votre contour des yeux est préservé et vos cils ne sont pas malmenés.\nL'aloe vera, premier ingrédient de sa formule, associé à la glycérine, laisse une peau nette, souple et fraîche, jamais tiraillée. Sans parfum ajouté, il accompagne aussi bien les peaux sensibles que les démaquillages du quotidien." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Son secret tient dans ses deux phases. La phase huileuse capte les pigments et la texture du maquillage, même waterproof ou longue tenue. La phase aqueuse rince les impuretés et laisse une sensation de fraîcheur, sans film gras.\nLe choix des maquilleurs professionnels pour le démaquillage des yeux, il s'adapte à vos habitudes : seul pour un démaquillage complet, ou en première étape d'un double nettoyage, avant votre nettoyant. La peau garde ses huiles naturelles, celles qui protègent sa barrière." },
      { titre: "Bénéfices clés",
        liste: ["Yeux et visage en un geste : il dissout le maquillage, même waterproof, sans frotter", "Une peau qui ne tiraille pas : il nettoie sans retirer les huiles naturelles de la peau", "La fraîcheur de l'aloe vera, premier ingrédient de la formule", "Polyvalent : seul, ou en première étape du double nettoyage"] },
      { titre: "Pensé pour",
        texte: "Tous les types de peau, y compris sensibles, et toutes celles qui veulent un démaquillage efficace des yeux, sans parfum et sans frotter." },
      { titre: "Texture & sensorialité",
        texte: "Deux phases visibles dans le flacon, qui fusionnent dès qu'on l'agite. La texture glisse sur la peau, fond sur le maquillage puis disparaît, laissant une peau nette et fraîche. Sans parfum ajouté, pour un geste épuré." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\n• Sans parfum ajouté · Vegan\n• Extraits botaniques issus de l'agriculture biologique\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Fusion Balance ouvre le rituel du soir en respectant la barrière cutanée." }
    ],
    accord: {
      fiche: "calm-balance-nuit",
      nom: "Calm Balance Nuit",
      texte: "Le rituel du soir des peaux sensibles.\nFusion Balance démaquille les yeux et le visage sans frotter.\nCalm Balance Nuit apaise et nourrit la peau pendant votre sommeil.",
      prix: "36,90€",
      variantId: "60321802289497"
    }
  },

  // =====================================================================
  // CERAMIDE NIGHT RESTORE
  // =====================================================================
  "ceramide-night-restore": {
    nom: "Ceramide Night Restore",
    sousTitre: "Crème de nuit nourrissante · Céramides végétaux · Karité",
    details: ["50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "38,90€",
    variantId: "60320949469529",
    inci: "ceramide-night-restore",
    avis: "Ceramide Night Restore",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-ceramide-night-restore-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-ceramide-night-restore-1-boite-flacon-v6.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-ceramide-night-restore-2-flacon-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_89f24ff3-7586-4d35-b23e-1dc66528ab55.png?v=1793811289"
      ]
    },
    routine: {
      etapes: [
        { moment: "Le soir", soin: "hydra-balance", texte: "Sur peau propre, appliquez une pression de Hydra Balance pour gorger la peau d'hydratation." },
        { moment: "Le soir", soin: "ceramide-night-restore", texte: "Terminez par une pression de Ceramide Night Restore. Les soirs où vous utilisez Glyco Balance ou AHA Balance Peel, elle apporte tout le réconfort dont la peau a besoin." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Ceramide Night Restore offre à la peau une nuit de confort. Ses céramides végétaux aident à renforcer la barrière cutanée, tandis que l'aloe vera, l'acide hyaluronique et les beurres végétaux nourrissent et assouplissent la peau pendant le sommeil. Au réveil, la peau paraît plus confortable, reposée et lumineuse." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que la nuit est un moment privilégié pour prendre soin de la barrière cutanée. Ceramide Night Restore associe les céramides végétaux à une sélection d'ingrédients hydratants et nourrissants pour aider la peau à préserver son équilibre et à limiter les sensations de sécheresse. Le soin réconfort idéal après une exfoliation." },
      { titre: "Bénéfices clés",
        liste: ["Soutient la barrière cutanée", "Hydrate en profondeur pendant la nuit", "Nourrit et assouplit la peau", "Ravive l'éclat au réveil"] },
      { titre: "Pensé pour",
        texte: "Les peaux qui manquent d'hydratation, de souplesse ou de confort, notamment lorsqu'elles présentent des sensations de sécheresse ou une barrière cutanée fragilisée. Idéale aussi pour réconforter la peau les soirs d'exfoliation." },
      { titre: "Texture & sensorialité",
        texte: "Une texture crème nourrissante qui glisse délicatement sur la peau et l'enveloppe d'un confort durable. Son parfum délicat de fleurs blanches s'accompagne de notes fraîches de lavande, sur un fond herbacé subtil." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\n• 27% d'ingrédients issus de l'agriculture biologique\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Ceramide Night Restore soutient la barrière cutanée pour que la peau puisse recevoir les actifs en toute sérénité." }
    ],
    accord: {
      fiche: "glyco-balance",
      nom: "Glyco Balance",
      texte: "Le duo peau neuve, en douceur.\nGlyco Balance affine le grain de peau et ravive l'éclat.\nCeramide Night Restore réconforte aussitôt la peau et renforce sa barrière pendant la nuit.",
      prix: "29,90€",
      variantId: "60320884687193"
    }
  },

  // =====================================================================
  // CELLULAR REVEAL
  // =====================================================================
  "cellular-reveal": {
    nom: "Cellular Reveal",
    sousTitre: "Sérum lissant · Bidens pilosa · Myrte rose",
    details: ["30 ml", "Vegan"],
    note: "une pression suffit",
    prix: "37,90€",
    variantId: "60321040269657",
    inci: "cellular-reveal",
    avis: "Cellular Reveal",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-reveal-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-reveal-1-boite-flacon-v6.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-reveal-2-flacon-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_ed684b00-a269-4809-aa95-f2c2b730d913.png?v=1793811843",
        // 📷 4. VISAGE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Comparatif_peau_avant_et_apres.png?v=1793811844"
      ]
    },
    routine: {
      etapes: [
        { moment: "Le soir", soin: "cellular-reveal", texte: "Sur peau propre, appliquez une pression de Cellular Reveal sur le visage et le cou." },
        { moment: "Le soir", soin: "luminescence-nuit", texte: "Poursuivez avec Luminescence Nuit : son plancton marin et son collagène prolongent l'action lissante pendant le sommeil." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Le matin, terminez votre routine par Radiance Protect SPF 50 pour préserver la peau des signes de l'âge liés au soleil." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Cellular Reveal est un sérum qui accompagne les premiers signes de l'âge tout en douceur. Au cœur de sa formule, l'extrait de Bidens pilosa, une alternative végétale au rétinol, aide à affiner le grain de peau et à atténuer l'apparence des ridules et des taches brunes. Associé à l'aloe vera, à l'huile de jojoba et à la myrte rose, il révèle une peau plus lisse, plus uniforme et lumineuse." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que prendre soin des signes de l'âge peut aussi rimer avec douceur. Cellular Reveal est le premier pas idéal vers une alternative au rétinol : plus doux que Bakuchiol Elixir, il convient aux peaux qui débutent. Sa formule hydratante et antioxydante révèle progressivement un teint plus frais et éclatant, sans multiplier les étapes." },
      { titre: "Bénéfices clés",
        liste: ["Atténue l'apparence des ridules", "Affine le grain de peau", "Aide à unifier le teint et à atténuer les taches brunes", "Hydrate et protège la peau des agressions"] },
      { titre: "Pensé pour",
        texte: "Les peaux qui présentent les premiers signes de l'âge ou un manque d'éclat. Idéal pour celles et ceux qui souhaitent commencer en douceur avec une alternative au rétinol, tout en préservant confort et souplesse." },
      { titre: "Texture & sensorialité",
        texte: "Une texture légère qui s'intègre facilement à la routine et laisse la peau douce et confortable. Son parfum de rose légèrement sucré, rehaussé d'une touche de géranium rouge sur un fond vert et fruité, offre une expérience florale et subtile." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\n• 24% d'ingrédients issus de l'agriculture biologique\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Cellular Reveal en est la preuve : une alternative végétale au rétinol pour accompagner la peau au fil du temps, sans la brusquer." }
    ],
    accord: {
      fiche: "cellular-eye-restore",
      nom: "Cellular Eye Restore",
      texte: "Le duo lissant visage et regard.\nCellular Reveal lisse le grain de peau et unifie le teint.\nCellular Eye Restore prolonge cette action sur la zone délicate du contour des yeux.",
      prix: "32,90€",
      variantId: "60320878526809"
    }
  },

  // =====================================================================
  // CELLULAR EYE RESTORE
  // =====================================================================
  "cellular-eye-restore": {
    nom: "Cellular Eye Restore",
    sousTitre: "Sérum contour des yeux · Bidens pilosa · Acide hyaluronique",
    details: ["15 ml", "Vegan"],
    note: "une petite quantité suffit",
    prix: "32,90€",
    variantId: "60320878526809",
    inci: "cellular-eye-restore",
    avis: "Cellular Eye Restore",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-eye-restore-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-eye-restore-1-boite-flacon-v6.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-eye-restore-2-flacon-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Sculpture_cremeuse_ivoire_sur_fond_peche.png?v=1793974940",
        // 📷 4. VISAGE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/VISAGE_3f77e7a5-3a2d-4ba0-974e-7b4578b2cc9b.png?v=1793811380"
      ]
    },
    routine: {
      etapes: [
        { moment: "Le soir", soin: "cellular-reveal", texte: "Sur peau propre, appliquez une pression de Cellular Reveal sur le visage et le cou." },
        { moment: "Le soir", soin: "cellular-eye-restore", texte: "Déposez une petite quantité de Cellular Eye Restore sur le contour des yeux et faites-la pénétrer en tapotant doucement, de l'intérieur vers l'extérieur." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Cellular Eye Restore est un sérum ciblé qui accompagne les premiers signes de l'âge tout en prenant soin de la zone délicate du regard. L'extrait de Bidens pilosa, une alternative végétale au rétinol, aide à atténuer l'apparence des ridules, des pattes-d'oie et des signes de fatigue. Associé à l'acide hyaluronique, à l'aloe vera et aux huiles de jojoba et de ricin, il laisse le contour des yeux plus lisse, frais et lumineux." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que lisser le contour des yeux ne devrait pas se faire au détriment de son confort. Cellular Eye Restore offre une approche plus douce que le rétinol traditionnel, associée à des ingrédients hydratants et nourrissants, pour un regard visiblement plus lisse tout en préservant cette zone fragile." },
      { titre: "Bénéfices clés",
        liste: ["Atténue l'apparence des ridules et des pattes-d'oie", "Hydrate en profondeur le contour des yeux", "Nourrit et adoucit la peau du regard", "Aide à atténuer les signes visibles de fatigue"] },
      { titre: "Pensé pour",
        texte: "Les contours des yeux qui présentent les premiers signes de l'âge, notamment des ridules et des pattes-d'oie, ainsi que des signes visibles de fatigue. Idéal pour celles et ceux qui souhaitent prendre soin de leur regard en douceur." },
      { titre: "Texture & sensorialité",
        texte: "Une texture douce, pensée pour la peau fine du contour des yeux, qui apporte hydratation et confort. Son parfum de rose légèrement sucré, rehaussé d'une touche de géranium rouge, offre une note florale subtile." },
      { titre: "Engagement ELKHA.B",
        texte: "• 100% d'ingrédients d'origine naturelle\n• 22% d'ingrédients issus de l'agriculture biologique\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Cellular Eye Restore apporte au regard une approche douce des premiers signes de l'âge." }
    ],
    accord: {
      fiche: "cellular-reveal",
      nom: "Cellular Reveal",
      texte: "Le duo lissant visage et regard.\nCellular Reveal lisse le grain de peau et unifie le teint.\nCellular Eye Restore prolonge cette action sur le contour des yeux.",
      prix: "37,90€",
      variantId: "60321040269657"
    }
  },

  // =====================================================================
  // ACTIVE LIFT
  // =====================================================================
  "active-lift": {
    nom: "Active Lift",
    sousTitre: "Sérum visage lissant & raffermissant · Peptides · Acide hyaluronique",
    details: ["30 ml", "Vegan"],
    note: "une pression suffit",
    prix: "32,90€",
    variantId: "60321025392985",
    inci: "active-lift",
    avis: "Active Lift",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-active-lift-miniature-v8.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-active-lift-1-boite-flacon-v8.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-active-lift-2-flacon-v8.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_06a1d45e-98c6-4973-aec6-fb156d56eb71.png?v=1793974534"
      ]
    },
    routine: {
      etapes: [
        { moment: "Matin et/ou soir", soin: "active-lift", texte: "Sur peau propre, appliquez une pression de Active Lift sur le visage et le cou, en lissant du centre vers l'extérieur." },
        { moment: "Matin et/ou soir", soin: "age-lift", texte: "Poursuivez avec une pression de Age Lift pour prolonger l'action des peptides et garder la peau souple et repulpée." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Le matin, terminez par Radiance Protect SPF 50 : le soleil est le premier accélérateur des signes de l'âge." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Un concentré de soin aux peptides pour une peau visiblement plus lisse, plus ferme et rebondie. Une nouvelle expression de la jeunesse, entre performance et sensorialité.\nRetrouvez le plaisir d'une peau qui paraît plus ferme, plus souple et naturellement rebondie.\nActive Lift accompagne votre peau dans sa quête de fermeté et de douceur. Sa formule associe des peptides, de l'acide hyaluronique et des extraits végétaux antioxydants pour atténuer l'apparence des rides et ridules, améliorer l'élasticité cutanée et révéler un grain de peau visiblement plus lisse.\nUn geste de soin raffiné pour retrouver une peau à l'apparence plus tonique, jour après jour." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'une peau visiblement plus jeune ne se résume pas à l'apparence des rides.\nActive Lift agit sur plusieurs dimensions essentielles de la qualité de la peau : fermeté, élasticité, hydratation et confort.\nAu cœur de sa formule, l'hexapeptide-11 accompagne l'action lissante du soin, tandis que l'extrait de ginkgo biloba et l'huile de graines de myrtille apportent leurs propriétés antioxydantes. L'acide hyaluronique complète cette synergie en contribuant à l'hydratation et à l'aspect repulpé de la peau.\nUne formule experte qui conjugue efficacité ciblée et plaisir d'utilisation." },
      { titre: "Bénéfices clés",
        liste: ["Rides & ridules : aide à atténuer leur apparence pour une peau visiblement plus lisse.", "Fermeté & élasticité : contribue à améliorer l'aspect tonique et rebondi de la peau.", "Hydratation & confort : aide à préserver l'hydratation et à soutenir la barrière cutanée.", "Protection antioxydante : associe ginkgo biloba et huile de graines de myrtille pour aider à protéger la peau du stress oxydatif.", "Grain de peau : favorise une apparence plus uniforme et affinée."] },
      { titre: "Pensé pour",
        texte: "Les peaux qui souhaitent prévenir ou atténuer les premiers signes visibles de l'âge, retrouver de la fermeté et améliorer leur élasticité.\nParticulièrement intéressant lorsque la peau présente des ridules, une perte de rebond ou un manque de souplesse." },
      { titre: "Texture & sensorialité",
        texte: "Un soin qui transforme votre routine en une parenthèse délicate.\nActive Lift enveloppe votre rituel d'un parfum floral subtil, réchauffé par des notes d'ambre et prolongé par un fond doux et poudré.\nUne signature olfactive élégante, pour un moment de soin aussi agréable que précieux." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\n• 20% d'ingrédients issus de l'agriculture biologique\n• Certifié COSMOS NATURAL par ECOCERT\n• Formule végane\n• Sans gluten et sans noix, selon les informations du fabricant" }
    ],
    accord: {
      fiche: "age-lift",
      nom: "Age Lift",
      texte: "Le duo lissant et raffermissant.\nActive Lift concentre les peptides pour lisser et raffermir.\nAge Lift prolonge cette action et garde la peau souple et repulpée, matin et soir.",
      prix: "37,90€",
      variantId: "60321069629785"
    }
  },

  // =====================================================================
  // AGE LIFT
  // =====================================================================
  "age-lift": {
    nom: "Age Lift",
    sousTitre: "Crème raffermissante · Peptides · Vitamine C · Acide hyaluronique",
    details: ["50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "37,90€",
    variantId: "60321069629785",
    inci: "age-lift",
    avis: "Age Lift",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-age-lift-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-age-lift-1-boite-flacon-v6.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-age-lift-2-flacon-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Texture_rose_soyeuse_et_brillante.png?v=1793809129",
        // 📷 4. VISAGE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Gros_plan_realiste_d_un_oeil_souriant.png?v=1793809130"
      ]
    },
    routine: {
      etapes: [
        { moment: "Matin et soir", soin: "hydra-balance", texte: "Sur peau propre, appliquez une pression de Hydra Balance pour gorger la peau d'hydratation." },
        { moment: "Matin et soir", soin: "age-lift", texte: "Appliquez une pression de Age Lift sur le visage et le cou, en remontant vers les tempes : la peau paraît plus lisse et repulpée." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Le matin, terminez par Radiance Protect SPF 50 : le soleil est le premier accélérateur des signes de l'âge." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Age Lift accompagne la beauté de la peau au fil du temps. Son complexe de peptides, associé à l'acide hyaluronique, aide à lisser l'apparence des ridules, à améliorer la souplesse de la peau et à lui redonner un aspect repulpé. Un seul soin, pensé pour le matin comme pour le soir." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que prendre soin des signes de l'âge ne devrait pas compliquer votre routine. Age Lift réunit hydratation, confort et action raffermissante dans une formule polyvalente qui accompagne votre peau jour après jour, sans multiplier les étapes." },
      { titre: "Bénéfices clés",
        liste: ["Aide à lisser l'apparence des ridules", "Hydrate et repulpe la peau", "Améliore la souplesse et l'apparence de fermeté", "Laisse la peau douce et confortable"] },
      { titre: "Pensé pour",
        texte: "Les peaux qui présentent des ridules, une perte de souplesse ou de fermeté, ainsi que celles qui recherchent une hydratation quotidienne associée à une action raffermissante." },
      { titre: "Texture & sensorialité",
        texte: "Une texture légère et nourrissante qui pénètre facilement, sans sensation de lourdeur, et laisse un fini souple et confortable. Son parfum floral délicat apporte une touche subtile de sensorialité à chaque application." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\n• 9% d'ingrédients issus de l'agriculture biologique\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Age Lift réunit l'efficacité des peptides et le confort de l'hydratation dans un seul soin, matin et soir." }
    ],
    accord: {
      fiche: "eye-lift",
      nom: "Eye Lift",
      texte: "Le duo lissant visage et regard.\nAge Lift lisse et repulpe la peau du visage.\nEye Lift prolonge cette action sur le contour des yeux, pour un regard visiblement plus lisse.",
      prix: "29,90€",
      variantId: "60321061273945"
    }
  },

  // =====================================================================
  // EYE LIFT
  // =====================================================================
  "eye-lift": {
    nom: "Eye Lift",
    sousTitre: "Crème contour des yeux · Peptides · Vitamines C et E",
    details: ["15 ml", "Vegan"],
    note: "une petite quantité suffit",
    prix: "29,90€",
    variantId: "60321061273945",
    inci: "eye-lift",
    avis: "Eye Lift",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-eye-lift-miniature-v8.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-eye-lift-1-boite-flacon-v7.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-eye-lift-2-flacon-v8.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_e85beec6-d44a-46d8-8f0d-f3c33891593d.png?v=1793812462",
        // 📷 4. VISAGE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/VISAGE_a609f46c-afd4-4fee-a227-53091d01d39d.png?v=1793812463"
      ]
    },
    routine: {
      etapes: [
        { moment: "Matin et soir", soin: "eye-lift", texte: "Sur peau propre, déposez une petite quantité de Eye Lift sur le contour des yeux et faites-la pénétrer en tapotant doucement." },
        { moment: "Matin et soir", soin: "age-lift", texte: "Poursuivez avec une pression de Age Lift sur le visage et le cou." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Eye Lift est une crème aux peptides spécialement conçue pour la zone délicate du contour des yeux. Sa formule hydratante et raffermissante aide à atténuer l'apparence des ridules, des rides et des pattes-d'oie, tout en améliorant la fermeté de la peau, pour un regard visiblement plus lisse." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que le contour des yeux mérite une attention particulière, sans compliquer votre routine. Eye Lift associe un complexe de peptides à une texture légère et confortable pour cibler les premiers signes visibles de l'âge. Un soin précis qui complète naturellement les autres soins Balance." },
      { titre: "Bénéfices clés",
        liste: ["Aide à lisser les ridules et les pattes-d'oie", "Hydrate et préserve le confort du regard", "Améliore l'apparence de fermeté", "Pénètre facilement, sans film gras"] },
      { titre: "Pensé pour",
        texte: "Les contours des yeux marqués par les ridules, les pattes-d'oie ou une perte de fermeté, ainsi que celles et ceux qui recherchent un soin hydratant et ciblé pour accompagner les signes visibles de l'âge." },
      { titre: "Texture & sensorialité",
        texte: "Une texture légère et agréable qui pénètre facilement, sans laisser de film gras. Son parfum de rose légèrement sucré, rehaussé d'une touche de géranium rouge sur un fond vert et fruité, accompagne chaque application d'une note florale subtile." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\n• 8% d'ingrédients issus de l'agriculture biologique\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Eye Lift prend soin du regard avec une formule ciblée, pensée pour compléter une routine simple et cohérente." }
    ],
    accord: {
      fiche: "age-lift",
      nom: "Age Lift",
      texte: "Le duo lissant visage et regard.\nEye Lift lisse et raffermit le contour des yeux.\nAge Lift prolonge cette action sur tout le visage.",
      prix: "37,90€",
      variantId: "60321069629785"
    }
  },

  // =====================================================================
  // BAKUCHIOL ELIXIR
  // =====================================================================
  "bakuchiol-elixir": {
    nom: "Bakuchiol Elixir",
    sousTitre: "Sérum lissant · Bakuchiol · Rose musquée",
    details: ["30 ml", "Vegan"],
    note: "une pression suffit",
    prix: "39,90€",
    variantId: "60321254375769",
    inci: "bakuchiol-elixir",
    avis: "Bakuchiol Elixir",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bakuchiol-elixir-miniature-v7.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bakuchiol-elixir-1-boite-flacon-v7.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bakuchiol-elixir-2-flacon-v7.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_BAKUCHIOL.png?v=1793809224",
        // 📷 4. VISAGE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Portrait_macro_realiste_au_septum_dore.png?v=1793809225"
      ]
    },
    routine: {
      etapes: [
        { moment: "Le soir", soin: "hydra-balance", texte: "Sur peau propre, appliquez une pression de Hydra Balance pour hydrater la peau." },
        { moment: "Le soir", soin: "bakuchiol-elixir", texte: "Réchauffez une pression de Bakuchiol Elixir entre vos paumes et pressez-la délicatement sur le visage. Les soirs d'exfoliation, sautez cette étape." },
        { moment: "Le soir", soin: "calm-balance-nuit", texte: "Terminez par Calm Balance Nuit, qui apaise et hydrate la peau pendant le sommeil." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Bakuchiol Elixir est un sérum à la texture soyeuse, sublimé par des huiles végétales précieuses de jojoba, de rose musquée et d'onagre. Au cœur de sa formule, le bakuchiol, une alternative végétale au rétinol, aide à atténuer l'apparence des rides et à améliorer visiblement la fermeté, tout en aidant à unifier le teint." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que votre peau est prête pour une action plus affirmée, sans renoncer au confort. Plus intense que Cellular Reveal, Bakuchiol Elixir associe l'action lissante et raffermissante du bakuchiol à la richesse nourrissante des huiles végétales. Sa texture soyeuse s'absorbe rapidement et laisse la peau douce et lumineuse, sans effet huileux." },
      { titre: "Bénéfices clés",
        liste: ["Lisse l'apparence des rides et ridules", "Améliore l'apparence de fermeté", "Nourrit et assouplit la peau", "Ravive l'éclat et aide à unifier le teint"] },
      { titre: "Pensé pour",
        texte: "Les peaux présentant des rides, un manque de fermeté ou de souplesse. Idéal pour celles et ceux qui souhaitent une alternative végétale au rétinol plus affirmée, après avoir commencé avec Cellular Reveal, dans un sérum nourrissant et agréable à utiliser." },
      { titre: "Texture & sensorialité",
        texte: "Une texture soyeuse et enveloppante, enrichie en huiles végétales, qui pénètre rapidement et laisse la peau douce, souple et confortable. Son parfum élégant de rose dévoile des notes chaleureuses, épicées et boisées." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\n• 61% d'ingrédients issus de l'agriculture biologique\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Bakuchiol Elixir allie la force d'une alternative végétale au rétinol à la douceur des huiles précieuses." }
    ],
    accord: {
      fiche: "age-lift",
      nom: "Age Lift",
      texte: "Le duo fermeté jour et nuit.\nBakuchiol Elixir lisse et raffermit la peau pendant la nuit.\nAge Lift hydrate et repulpe la peau, matin et soir.",
      prix: "37,90€",
      variantId: "60321069629785"
    }
  },

  // =====================================================================
  // BRIGHT CONTROL
  // =====================================================================
  "bright-control": {
    nom: "Bright Control",
    sousTitre: "Crème correctrice anti-taches · Acide kojique · Vitamine C",
    details: ["50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "34,90€",
    variantId: "60321297727833",
    inci: "bright-control",
    avis: "Bright Control",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bright-control-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bright-control-1-boite-flacon-v6.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bright-control-2-flacon-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_78c56c59-cbdf-43d7-ab9e-6648bdb6ce80.png?v=1793814159",
        // 📷 4. VISAGE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/VISAGE_SOPT_CONTROL_2.png?v=1793813315"
      ]
    },
    routine: {
      etapes: [
        { moment: "Le matin", soin: "gelee-lumibloom", texte: "Sur peau propre, appliquez une pression de Gelée Lumi-Bloom pour préparer la peau." },
        { moment: "Le matin", soin: "bright-control", texte: "Appliquez une pression de Bright Control sur tout le visage : elle unifie le teint et hydrate la peau." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Terminez toujours par Radiance Protect SPF 50 : sans protection solaire, les taches reviennent plus vite." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Bright Control est une crème visage conçue pour atténuer l'apparence des taches brunes et des irrégularités pigmentaires. L'acide kojique s'associe à la vitamine C, à l'extrait de romarin et à des ingrédients hydratants pour accompagner la peau vers un teint plus homogène et lumineux." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'un teint irrégulier ne devrait pas vous obliger à multiplier les soins. Bright Control est la crème qui agit sur tout le visage : elle unifie le teint tout en préservant la souplesse et le confort de la peau. Pour cibler une tache précise, associez-la à Spot Control." },
      { titre: "Bénéfices clés",
        liste: ["Aide à atténuer l'apparence des taches brunes", "Unifie le teint et ravive l'éclat", "Apporte un soutien antioxydant", "Hydrate et adoucit la peau"] },
      { titre: "Pensé pour",
        texte: "Les peaux présentant des taches brunes superficielles, des marques pigmentaires post-imperfections ou un teint irrégulier et terne. Le matin, une protection solaire comme Radiance Protect SPF 50 est indispensable pour préserver les résultats." },
      { titre: "Texture & sensorialité",
        texte: "Une texture crème qui apporte hydratation et souplesse à la peau. Son parfum associe la fraîcheur des agrumes, du citron et de l'orange à des notes de gingembre et de concombre, sur un fond boisé de vétiver, de cèdre et de patchouli." },
      { titre: "Engagement ELKHA.B",
        texte: "• 100% d'ingrédients d'origine naturelle\n• 8% d'ingrédients issus de l'agriculture biologique\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Bright Control prend soin du teint tout en respectant le confort de la peau." }
    ],
    accord: {
      fiche: "spot-control",
      nom: "Spot Control",
      texte: "Le duo teint unifié.\nBright Control unifie le teint sur tout le visage.\nSpot Control agit en ciblé sur les taches les plus marquées.",
      prix: "28,90€",
      variantId: "60320817447257"
    }
  },

  // =====================================================================
  // SPOT CONTROL
  // =====================================================================
  "spot-control": {
    nom: "Spot Control",
    sousTitre: "Sérum anti-taches ciblé · Acide kojique · Vitamine C",
    details: ["15 ml", "Vegan"],
    note: "une pression suffit",
    prix: "28,90€",
    variantId: "60320817447257",
    inci: "spot-control",
    avis: "Spot Control",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-spot-control-miniature-v7.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-spot-control-1-boite-flacon-v7.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-spot-control-2-flacon-v7.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_SPOT_CONTROL_3.png?v=1793813315",
        // 📷 4. VISAGE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/VISAGE_SOPT_CONTROL_2.png?v=1793813315"
      ]
    },
    routine: {
      etapes: [
        { moment: "Matin et soir", soin: "spot-control", texte: "Sur peau propre, appliquez Spot Control uniquement sur les taches, en tapotant légèrement." },
        { moment: "Matin et soir", soin: "bright-control", texte: "Poursuivez avec une pression de Bright Control sur tout le visage pour unifier le teint." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Le matin, terminez toujours par Radiance Protect SPF 50 pour protéger le teint des UV." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Spot Control est un sérum conçu pour agir précisément sur les zones présentant des taches brunes. L'acide kojique s'associe à la vitamine C, à la vitamine E et à l'extrait de romarin, tandis que la bétaïne, le Sodium PCA et l'huile de jojoba préservent l'hydratation, pour un teint visiblement plus uniforme et lumineux." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'un soin ciblé permet d'agir précisément là où le teint manque d'uniformité. Spot Control concentre son action sur l'apparence des taches brunes. Il est aussi idéal pour entretenir les résultats d'un soin anti-taches et préserver l'éclat du teint le plus longtemps possible." },
      { titre: "Bénéfices clés",
        liste: ["Aide à atténuer l'apparence des taches brunes", "Rend les irrégularités pigmentaires moins visibles", "Favorise l'éclat du teint", "Hydrate et adoucit la peau"] },
      { titre: "Pensé pour",
        texte: "Les peaux présentant des taches brunes localisées, des marques pigmentaires post-imperfections ou de légères irrégularités. Idéal pour cibler certaines zones du visage, ou pour entretenir les résultats d'un soin anti-taches. Le matin, une protection solaire comme Radiance Protect SPF 50 est indispensable." },
      { titre: "Texture & sensorialité",
        texte: "Une texture sérum pensée pour une application précise sur les zones concernées. Son parfum mêle la fraîcheur des agrumes, du citron et de l'orange à des notes de gingembre et de concombre, sur un fond boisé de vétiver, de cèdre et de patchouli." },
      { titre: "Engagement ELKHA.B",
        texte: "• 100% d'ingrédients d'origine naturelle\n• 8% d'ingrédients issus de l'agriculture biologique\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Spot Control agit avec précision, là où la peau en a besoin, sans jamais compromettre son confort." }
    ],
    accord: {
      fiche: "bright-control",
      nom: "Bright Control",
      texte: "Le duo teint unifié.\nSpot Control agit en ciblé sur les taches les plus marquées.\nBright Control unifie le teint sur tout le visage.",
      prix: "34,90€",
      variantId: "60321297727833"
    }
  },

  // =====================================================================
  // GLYCO BALANCE
  // =====================================================================
  "glyco-balance": {
    nom: "Glyco Balance",
    sousTitre: "Lotion exfoliante · Acide glycolique · Bétaïne",
    details: ["250 ml", "Vegan"],
    note: "une pression suffit",
    prix: "29,90€",
    variantId: "60320884687193",
    inci: "glyco-balance",
    avis: "Glyco Balance",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-glyco-balance-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-glyco-balance-1-flacon-v6.jpg",
        // 📷 2. DOS DU FLACON (composition)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-glyco-balance-2-dos-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_ef8e4805-83a7-4864-81ac-eb869d05f1d1.png?v=1793813096",
        // 📷 4. VISAGE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Gros_plan_beaute_peau_radieuse.png?v=1793813098"
      ]
    },
    routine: {
      etapes: [
        { moment: "2 à 3 soirs par semaine", soin: "glyco-balance", texte: "Sur peau propre et sèche, appliquez Glyco Balance à l'aide d'un coton, en évitant le contour des yeux. Ne rincez pas." },
        { moment: "Le soir", soin: "ceramide-night-restore", texte: "Terminez par Ceramide Night Restore pour réconforter la peau et renforcer sa barrière pendant la nuit." },
        { moment: "Le lendemain matin", soin: "radiance-protect", texte: "Appliquez Radiance Protect SPF 50 : après une exfoliation, la protection solaire est indispensable." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Glyco Balance est une lotion tonique exfoliante qui affine visiblement le grain de peau et ravive l'éclat du teint. L'acide glycolique, un AHA, aide à éliminer les cellules mortes à la surface de la peau, tandis que la glycérine, la bétaïne et le Sodium PCA préservent son hydratation." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'une peau lumineuse commence par un grain de peau régulier. Glyco Balance élimine en douceur les cellules mortes qui ternissent le teint et lisse visiblement la texture cutanée, tout en préservant l'hydratation. À utiliser quelques soirs par semaine, jamais le même soir qu'AHA Balance Peel." },
      { titre: "Bénéfices clés",
        liste: ["Exfolie en douceur la surface de la peau", "Lisse visiblement le grain de peau", "Ravive l'éclat d'un teint terne", "Préserve l'hydratation de la peau"] },
      { titre: "Pensé pour",
        texte: "Les peaux au teint terne, au grain de peau irrégulier ou présentant une accumulation de cellules mortes. Idéal pour intégrer une exfoliation à sa routine et retrouver progressivement une peau plus lisse et lumineuse. Le matin, protégez votre peau avec Radiance Protect SPF 50 : les acides exfoliants la rendent plus sensible au soleil." },
      { titre: "Texture & sensorialité",
        texte: "Une texture liquide et légère, à appliquer sur un coton, pour un geste de soin simple et ciblé. Une formule sans parfum ajouté, à la sensorialité discrète." },
      { titre: "Engagement ELKHA.B",
        texte: "• Sans parfum ajouté\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Glyco Balance associe l'exfoliation à des ingrédients hydratants pour renouveler la peau sans l'agresser." }
    ],
    accord: {
      fiche: "ceramide-night-restore",
      nom: "Ceramide Night Restore",
      texte: "Le duo peau neuve, en douceur.\nGlyco Balance affine le grain de peau et ravive l'éclat.\nCeramide Night Restore réconforte aussitôt la peau et renforce sa barrière pendant la nuit.",
      prix: "38,90€",
      variantId: "60320949469529"
    }
  },

  // =====================================================================
  // AHA BALANCE PEEL
  // =====================================================================
  "aha-balance-peel": {
    nom: "AHA Balance Peel",
    sousTitre: "Concentré exfoliant · Acide lactique · Acide hyaluronique",
    details: ["30 ml", "Vegan"],
    note: "une pression suffit",
    prix: "32,90€",
    variantId: "60320901398873",
    inci: "aha-balance-peel",
    avis: "AHA Balance Peel",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-aha-balance-peel-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-aha-balance-peel-1-boite-flacon-v6.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-aha-balance-peel-2-flacon-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_AHA_PEEL.png?v=1793809180"
      ]
    },
    routine: {
      etapes: [
        { moment: "1 à 2 soirs par semaine", soin: "aha-balance-peel", texte: "Sur peau propre et sèche, appliquez une fine couche de AHA Balance Peel en évitant le contour des yeux. Jamais le même soir que Glyco Balance." },
        { moment: "Le soir", soin: "calm-balance-nuit", texte: "Terminez par Calm Balance Nuit pour apaiser et hydrater la peau pendant le sommeil." },
        { moment: "Le lendemain matin", soin: "radiance-protect", texte: "Appliquez Radiance Protect SPF 50 : après une exfoliation, la protection solaire est indispensable." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "AHA Balance Peel est un concentré exfoliant qui affine le grain de peau et révèle un teint plus frais et lumineux. L'acide lactique aide à éliminer les cellules mortes et accompagne le renouvellement de surface, tandis que l'acide hyaluronique et les extraits de thé blanc et de sauge préservent l'hydratation." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'un teint terne ou un grain de peau irrégulier peuvent masquer l'éclat naturel de la peau. AHA Balance Peel lisse visiblement la texture, atténue l'apparence des petites taches et des ridules, et conjugue exfoliation et hydratation pour une peau renouvelée, sans négliger son confort." },
      { titre: "Bénéfices clés",
        liste: ["Exfolie et renouvelle la surface de la peau", "Lisse le grain de peau et les ridules", "Unifie et illumine le teint", "Préserve l'hydratation et la souplesse"] },
      { titre: "Pensé pour",
        texte: "Les peaux présentant un teint terne, un grain de peau irrégulier, des ridules ou des taches superficielles. Idéal pour améliorer la texture et l'éclat de la peau grâce à une exfoliation ciblée. Le matin, protégez votre peau avec Radiance Protect SPF 50 : les acides exfoliants la rendent plus sensible au soleil." },
      { titre: "Texture & sensorialité",
        texte: "Une texture liquide et légère qui s'étale facilement sur la peau. Sa formule dévoile une senteur discrète, légèrement sucrée, pour une expérience simple et agréable." },
      { titre: "Engagement ELKHA.B",
        texte: "• 100% d'ingrédients d'origine naturelle\n• 2% d'ingrédients issus de l'agriculture biologique\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. AHA Balance Peel associe exfoliation et hydratation pour révéler l'éclat de la peau en douceur." }
    ],
    accord: {
      fiche: "hydra-balance",
      nom: "Hydra Balance",
      texte: "Le duo éclat et hydratation.\nAHA Balance Peel renouvelle la surface de la peau et ravive son éclat.\nHydra Balance la réhydrate intensément les jours suivants.",
      prix: "28,90€",
      variantId: "60320959398233"
    }
  },

  // =====================================================================
  // CELLULAR RENEW
  // =====================================================================
  "cellular-renew": {
    nom: "Cellular Renew",
    sousTitre: "Crème hydratante lissante · Bidens pilosa · Acide hyaluronique",
    details: ["50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "34,90€",
    variantId: "60321030734169",
    inci: "cellular-renew",
    avis: "Cellular Renew",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-renew-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-renew-1-boite-flacon-v6.jpg",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-renew-2-flacon-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_cbb6f776-9ef2-4a7b-b89e-d6bf4745c47a.png?v=1793811094",
        // 📷 4. VISAGE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Comparaison_avant-apres_du_front.png?v=1793811027"
      ]
    },
    routine: {
      etapes: [
        { moment: "Le matin", soin: "cellular-renew", texte: "Sur peau propre, appliquez une pression de Cellular Renew sur le visage et le cou." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Terminez par Radiance Protect SPF 50." },
        { moment: "Le soir", soin: "cellular-reveal", texte: "Sur peau propre, appliquez Cellular Reveal." },
        { moment: "Le soir", soin: "cellular-renew", texte: "Puis appliquez Cellular Renew pour prolonger son action et hydrater la peau." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Et si atténuer vos rides devenait un geste de confort ? Sa texture crémeuse et légère fond instantanément sur la peau et laisse un fini lumineux, sans effet gras. À chaque application, la peau est hydratée, souple et confortable.\nAu fil des semaines, les rides et ridules paraissent moins marquées et la peau retrouve un aspect plus lisse et reposé." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que prendre soin des premiers signes de l'âge ne devrait jamais brusquer votre peau. Cellular Renew associe une alternative végétale et douce au rétinol, qui aide à atténuer les rides et ridules, à une hydratation intense. Ses ingrédients ont été choisis pour apporter à la peau souplesse et confort, sans jamais l'agresser.\nElle complète Cellular Reveal : le sérum lisse le grain de peau, la crème prolonge son action et hydrate." },
      { titre: "Bénéfices clés",
        liste: ["Rides et ridules visiblement atténuées au fil des semaines", "Peau plus lisse et plus uniforme", "Hydratation légère et durable", "Confort et souplesse, sans effet gras", "Fini frais et lumineux"] },
      { titre: "Pensé pour",
        texte: "Tous les types de peau qui voient apparaître les premières rides et ridules et souhaitent une alternative douce au rétinol. Idéal pour commencer avec les alternatives au rétinol, en crème, ou pour accompagner Cellular Reveal. Convient aussi aux peaux sensibles, et aux peaux sujettes aux imperfections grâce à sa texture légère.\nPour commencer en douceur : si vous n'avez jamais utilisé d'alternative au rétinol, commencez par Cellular Renew seule pendant deux semaines, puis ajoutez Cellular Reveal le soir. Évitez le contour des yeux : pour le regard, découvrez Cellular Eye Restore." },
      { titre: "Texture & sensorialité",
        texte: "Une crème légère et fondante, qui pénètre rapidement et laisse un fini lumineux. Son parfum dévoile une rose légèrement sucrée et une touche délicate de géranium rouge, sur un fond vert et fruité." },
      { titre: "Engagement ELKHA.B",
        texte: "• Ingrédients issus de l'agriculture biologique : aloe vera, jojoba, argousier, beurre de mangue\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. Cellular Renew en est la preuve : une alternative végétale au rétinol, dans une crème qui hydrate avant tout." }
    ],
    accord: {
      fiche: "cellular-reveal",
      nom: "Cellular Reveal",
      texte: "Le duo Cellular.\nCellular Reveal lisse le grain de peau et unifie le teint.\nCellular Renew prolonge cette action et apporte à la peau l'hydratation et le confort dont elle a besoin.",
      prix: "37,90€",
      variantId: "60321040269657"
    }
  },

  // =====================================================================
  // BHA BALANCE
  // =====================================================================
  "bha-balance": {
    nom: "BHA Balance",
    sousTitre: "Lotion tonique purifiante · Acide salicylique · Excès de sébum",
    details: ["200 ml", "Vegan"],
    note: "quelques gouttes suffisent",
    prix: "24,90€",
    variantId: "60321077199193",
    inci: "bha-balance",
    avis: "BHA Balance",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bha-balance-miniature-v6.jpg",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bha-balance-1-flacon-v6.jpg",
        // 📷 2. DOS DU FLACON (composition)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bha-balance-2-dos-v6.jpg",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Portrait_monochrome_d_un_visage_ruisselant.png?v=1793810187"
      ]
    },
    routine: {
      etapes: [
        { moment: "Le soir", soin: "radiance-cleanser", texte: "Nettoyez votre peau avec Radiance Cleanser." },
        { moment: "Le soir", soin: "bha-balance", texte: "Versez quelques gouttes de BHA Balance dans le creux de vos mains et appliquez sur l'ensemble du visage, en évitant le contour des yeux." },
        { moment: "Le soir", soin: "hydra-balance", texte: "Poursuivez avec Hydra Balance, puis Luminescence Nuit. Si votre peau est sensible ou sensibilisée, préférez Calm Balance Nuit." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Le lendemain matin, terminez toujours par Radiance Protect SPF 50." }
      ]
    },
    sections: [
      { titre: "L'expérience",
        texte: "Et si vos pores retrouvaient enfin leur légèreté ? Sur les peaux mixtes à grasses, l'excès de sébum et les impuretés s'accumulent dans les pores et font briller la peau. Après le nettoyage, BHA Balance prolonge la purification : l'acide salicylique travaille au cœur des pores, tandis que l'eau florale de lavande et le concombre rafraîchissent la peau.\nJour après jour, la peau paraît plus nette, les pores moins encombrés, et le teint plus frais." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'une peau grasse a besoin d'un actif ciblé, pas d'un soin agressif. BHA Balance associe l'acide salicylique, un BHA reconnu pour sa capacité à pénétrer dans les pores, à des actifs hydratants comme la glycérine et la bétaïne. Elle purifie efficacement tout en préservant le pH naturel de la peau.\nSans parfum ajouté et vegan, elle complète Glyco Balance et AHA Balance Peel : les AHA pour l'éclat et le grain de peau, le BHA pour les pores et l'excès de sébum." },
      { titre: "Bénéfices clés",
        liste: ["Contribue à désobstruer les pores", "Élimine les impuretés et l'excès de sébum", "Purifie sans déséquilibrer le pH naturel de la peau", "Aide à maintenir l'hydratation et la souplesse", "Fraîcheur immédiate à chaque application"] },
      { titre: "Pensé pour",
        texte: "Les peaux mixtes à grasses, sujettes à l'excès de sébum, aux pores visibles et aux brillances. Idéal pour intégrer un actif purifiant à sa routine, après le nettoyage. Convient aussi aux peaux normales.\nPour commencer en douceur : les deux premières semaines, utilisez BHA Balance un soir sur deux, puis chaque soir si votre peau est à l'aise. Jamais le même soir que Glyco Balance ou AHA Balance Peel." },
      { titre: "Texture & sensorialité",
        texte: "Une lotion fluide et fraîche, qui s'applique directement avec les mains et pénètre instantanément, sans laisser de film. Sans parfum ajouté, elle dévoile la senteur naturelle de ses eaux florales : une infusion de plantes aux notes de fruits secs et de rose." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99 % d'ingrédients d'origine naturelle\n• 7 % d'ingrédients issus de l'agriculture biologique\n• Sans parfum ajouté · Vegan\nChez ELKHA.B, nous mettons la douceur au cœur des actifs. BHA Balance associe l'efficacité de l'acide salicylique à des ingrédients hydratants, pour purifier la peau sans la brusquer." }
    ],
    accord: {
      fiche: "hydra-balance",
      nom: "Hydra Balance",
      texte: "Le duo peau nette et hydratée.\nBHA Balance purifie les pores et élimine l'excès de sébum.\nHydra Balance offre à la peau un bain d'hydratation et la garde souple et confortable.",
      prix: "28,90€",
      variantId: "60320959398233"
    }
  },

  // =====================================================================
  // ROUTINE ANTI-ÂGE (Balance) — identifiant à part : « routine-anti-age » est la Routine Fermeté de Bloom
  // =====================================================================
  "routine-anti-age-balance": {
    nom: "Routine Anti-âge",
    sousTitre: "Active Lift · Age Lift · Eye Lift",
    details: ["3 soins", "Vegan"],
    note: "",
    prix: "95€",
    variantId: "60321991131481",
    avis: "Routine anti-âge",
    media: {
      type: "diaporama",
      images: [
        // 📷 1. PHOTO DE LA ROUTINE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-routine-anti-age-v10.png"
      ]
    },
    routine: {
      intro: "Une routine aux peptides qui cible les rides, les ridules et la perte de fermeté, et prend soin de tout le visage, regard compris.\nActive Lift concentre les peptides pour lisser les traits et améliorer l'élasticité de la peau. Age Lift prolonge leur action et, grâce à l'acide hyaluronique, repulpe la peau et maintient son hydratation. Eye Lift veille sur le contour des yeux, plus fin et plus fragile, là où ridules et pattes-d'oie apparaissent en premier.",
      soins: ["active-lift", "age-lift", "eye-lift"],
      moment: "Matin et soir",
      etapes: [
        { soin: "active-lift", texte: "Sur peau propre, appliquez une pression d'Active Lift sur le visage et le cou." },
        { soin: "eye-lift", texte: "Déposez une petite quantité d'Eye Lift sur le contour des yeux et faites-la pénétrer en tapotant du bout des doigts." },
        { soin: "age-lift", texte: "Terminez par une pression d'Age Lift sur le visage et le cou, en remontant vers les tempes." }
      ],
      conclusion: "Trois soins aux peptides qui se complètent, du sérum à la crème.\nLe matin, terminez par une protection solaire : les UV sont le premier accélérateur du relâchement cutané."
    }
  },

  // =====================================================================
  // ROUTINE ESSENTIELLE (Balance)
  // =====================================================================
  "routine-essentielle": {
    nom: "Routine Essentielle",
    sousTitre: "Cellular Reveal · Cellular Renew · Cellular Eye Restore",
    details: ["3 soins", "Vegan"],
    note: "",
    prix: "99€",
    variantId: "60321834402137",
    avis: "Routine essentielle",
    media: {
      type: "diaporama",
      images: [
        // 📷 1. PHOTO DE LA ROUTINE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-routine-essentielle-v8.png"
      ]
    },
    routine: {
      intro: "La routine express, simple et rapide, pour les journées où le temps manque : elle cible les premiers signes de l'âge et aide à maintenir une peau saine et équilibrée.\nCellular Reveal, au Bidens pilosa, une alternative végétale au rétinol, affine le grain de peau et atténue l'apparence des ridules. Cellular Renew prolonge son action, lisse et hydrate la peau. Cellular Eye Restore veille sur le contour des yeux, là où les premières ridules s'installent.",
      soins: ["cellular-reveal", "cellular-renew", "cellular-eye-restore"],
      etapes: [
        { moment: "Le soir", soin: "cellular-reveal", texte: "Sur peau propre, appliquez une pression de Cellular Reveal sur le visage et le cou." },
        { moment: "Le soir", soin: "cellular-eye-restore", texte: "Déposez une petite quantité de Cellular Eye Restore sur le contour des yeux et faites-la pénétrer en tapotant du bout des doigts." },
        { moment: "Le soir", soin: "cellular-renew", texte: "Terminez par une pression de Cellular Renew pour prolonger l'action lissante et hydrater la peau." },
        { moment: "Le matin", soin: "cellular-renew", texte: "Le matin, une pression de Cellular Renew sur le visage et le cou suffit à hydrater et lisser la peau." }
      ],
      conclusion: "Trois soins d'une même famille, construits autour d'une alternative végétale au rétinol, bien tolérée au quotidien.\nLe matin, terminez par une protection solaire pour préserver les résultats."
    }
  },

  // =====================================================================
  // ROUTINE ANTI-TACHES (Balance)
  // =====================================================================
  "routine-anti-taches": {
    nom: "Routine Anti-taches",
    sousTitre: "AHA Balance Peel · Bright Control · Spot Control",
    details: ["3 soins", "Vegan"],
    note: "",
    prix: "91€",
    variantId: "60322009776473",
    avis: "Routine anti-taches",
    media: {
      type: "diaporama",
      images: [
        // 📷 1. PHOTO DE LA ROUTINE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-routine-anti-taches-v9.png"
      ]
    },
    routine: {
      intro: "Une routine complète pour unifier le teint et atténuer l'apparence des taches brunes.\nSpot Control cible les taches une à une avec l'acide kojique et la vitamine C. Bright Control unifie l'ensemble du teint et lisse la peau pendant la nuit. Une à deux fois par semaine, AHA Balance Peel élimine les cellules mortes pour révéler un teint plus frais et aider les autres soins à mieux agir.",
      soins: ["aha-balance-peel", "bright-control", "spot-control"],
      etapes: [
        { moment: "Le matin", soin: "spot-control", texte: "Sur peau propre, appliquez Spot Control uniquement sur les taches, en tapotant légèrement." },
        { moment: "Le soir", soin: "bright-control", texte: "Sur peau propre, appliquez une pression de Bright Control sur tout le visage pour unifier le teint." },
        { moment: "1 à 2 soirs par semaine", soin: "aha-balance-peel", texte: "Sur peau propre et sèche, appliquez quelques gouttes d'AHA Balance Peel en évitant le contour des yeux, puis poursuivez avec Bright Control." }
      ],
      conclusion: "Les taches se travaillent dans la durée : c'est la régularité qui fait la différence.\nChaque matin, terminez par une protection solaire : sans elle, les taches reviennent plus vite."
    }
  },

  // =====================================================================
  // ROUTINE APAISANTE (Balance)
  // =====================================================================
  "routine-apaisante": {
    nom: "Routine Apaisante",
    sousTitre: "Hydra Balance · Calm Balance Jour · Calm Balance Nuit",
    details: ["3 soins", "Vegan"],
    note: "",
    prix: "95€",
    variantId: "60322013479257",
    avis: "Routine apaisante",
    media: {
      type: "diaporama",
      images: [
        // 📷 1. PHOTO DE LA ROUTINE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-routine-apaisante-v8.png"
      ]
    },
    routine: {
      intro: "Une routine pensée pour les peaux sensibles, qui rougissent et tiraillent facilement.\nHydra Balance gorge la peau d'eau grâce à son acide hyaluronique multi-poids moléculaire. Calm Balance Jour apaise les rougeurs et préserve le confort de la peau toute la journée, et Calm Balance Nuit prend le relais pendant le sommeil pour apaiser et réparer.",
      soins: ["hydra-balance", "calm-balance-jour", "calm-balance-nuit"],
      etapes: [
        { moment: "Le matin", soin: "hydra-balance", texte: "Sur peau propre, appliquez une pression de Hydra Balance sur le visage et le cou." },
        { moment: "Le matin", soin: "calm-balance-jour", texte: "Poursuivez avec une pression de Calm Balance Jour, lissée du centre vers l'extérieur du visage." },
        { moment: "Le soir", soin: "hydra-balance", texte: "Sur peau propre, appliquez une pression de Hydra Balance." },
        { moment: "Le soir", soin: "calm-balance-nuit", texte: "Terminez par une pression de Calm Balance Nuit pour apaiser et hydrater la peau toute la nuit." }
      ],
      conclusion: "Une peau bien hydratée est une peau qui réagit moins.\nLe matin, terminez par une protection solaire minérale : les UV accentuent les rougeurs et l'inconfort."
    }
  },

  // =====================================================================
  // ROUTINE RENOUVELLEMENT (Balance)
  // =====================================================================
  "routine-renouvellement": {
    nom: "Routine Renouvellement",
    sousTitre: "Bakuchiol Elixir · Ceramide Night Restore",
    details: ["2 soins", "Vegan"],
    note: "",
    prix: "73€",
    variantId: "60322017608025",
    avis: "Routine renouvellement",
    media: {
      type: "diaporama",
      images: [
        // 📷 1. PHOTO DE LA ROUTINE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-routine-renouvellement-v8.png"
      ]
    },
    routine: {
      intro: "Une routine du soir pour les rides installées et le grain de peau irrégulier.\nBakuchiol Elixir, au bakuchiol, une alternative végétale au rétinol, accompagne le renouvellement de la peau pour atténuer l'apparence des rides et affiner sa texture. Ceramide Night Restore renforce la barrière cutanée grâce à ses céramides végétaux et nourrit la peau pendant le sommeil.",
      soins: ["bakuchiol-elixir", "ceramide-night-restore"],
      etapes: [
        { moment: "Le soir", soin: "bakuchiol-elixir", texte: "Sur peau propre, réchauffez une pression de Bakuchiol Elixir entre vos paumes et pressez-la délicatement sur le visage et le cou." },
        { moment: "Le soir", soin: "ceramide-night-restore", texte: "Terminez par une pression de Ceramide Night Restore pour nourrir la peau et renforcer sa barrière pendant la nuit." }
      ],
      conclusion: "Deux soins du soir qui travaillent pendant que la peau se régénère.\nLe matin, une protection solaire préserve les résultats."
    }
  },

  // =====================================================================
  // COFFRET LE TEMPS SUSPENDU (Balance) — édition limitée des fêtes 2026
  // =====================================================================
  "coffret-temps-suspendu": {
    nom: "Le Temps Suspendu",
    sousTitre: "Coffret Rituel Lift\nActive Lift · Age Lift · Eye Lift",
    details: ["Coffret · 3 soins", "Vegan"],
    note: "Édition limitée des fêtes",
    prix: "92€",
    variantId: "60381914235225",
    coffret: true,
    carte: { position: "50% 58%", zoom: 1.05 },   // cadrage de la photo sur la carte de la page Routines
    media: {
      type: "diaporama",
      images: [
        // 📷 1. LE COFFRET DE FACE
        "https://elkhabskincare.github.io/elkhab-site/temps-suspendu-face-site.jpg",
        // 📷 2. LE DOS DU COFFRET
        "https://elkhabskincare.github.io/elkhab-site/temps-suspendu-dos-site.jpg",
        // 📷 3. LES SOINS DU COFFRET (à leur taille réelle)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/coffret-temps-suspendu-soins-v1.jpg",
        // 📷 4. AMBIANCE DES FÊTES (aussi la photo montrée par Google)
        "https://elkhabskincare.github.io/elkhab-site/coffret-temps-suspendu-ambiance-v3.jpg"
      ]
    },
    routine: {
      titreSoins: "Dans le coffret",
      intro: "Un coffret cadeau aux peptides qui cible les rides, les ridules et la perte de fermeté, et prend soin de tout le visage, regard compris.\nActive Lift concentre les peptides pour lisser les traits et améliorer l'élasticité de la peau. Age Lift prolonge leur action et, grâce à l'acide hyaluronique, repulpe la peau et maintient son hydratation. Eye Lift veille sur le contour des yeux, plus fin et plus fragile, là où ridules et pattes-d'oie apparaissent en premier. Trois soins Balance réunis dans un écrin des fêtes, à offrir ou à s'offrir.",
      soins: ["active-lift", "age-lift", "eye-lift"],
      moment: "Matin et soir",
      etapes: [
        { soin: "active-lift", texte: "Sur peau propre, appliquez une pression d'Active Lift sur le visage et le cou." },
        { soin: "eye-lift", texte: "Déposez une petite quantité d'Eye Lift sur le contour des yeux et faites-la pénétrer en tapotant du bout des doigts." },
        { soin: "age-lift", texte: "Terminez par une pression d'Age Lift sur le visage et le cou, en remontant vers les tempes." }
      ],
      conclusion: "Trois soins aux peptides qui se complètent, du sérum à la crème.\nLe matin, terminez par une protection solaire : les UV sont le premier accélérateur du relâchement cutané."
    },
    sections: [
      { titre: "Le coffret", texte: "Les trois soins sont présentés dans le coffret Le Temps Suspendu, une édition limitée des fêtes prête à être offerte.\nActive Lift · 30 ml\nAge Lift · 50 ml\nEye Lift · 15 ml" }
    ]
  },

  // =====================================================================
  // COFFRET RITUEL DE MINUIT (Bloom & Balance) — édition limitée des fêtes 2026
  // =====================================================================
  "coffret-rituel-de-minuit": {
    nom: "Rituel de Minuit",
    sousTitre: "Coffret Soin du Soir\nFusion Balance · Luminescence Boost · Radiance Eye Cream",
    gammeLabel: "Bloom & Balance",
    details: ["Coffret · 3 soins", "Vegan"],
    note: "Édition limitée des fêtes",
    prix: "87€",
    variantId: "60387116646745",
    coffret: true,
    carte: { position: "50% 58%", zoom: 1.05 },   // cadrage de la photo sur la carte de la page Routines
    media: {
      type: "diaporama",
      images: [
        // 📷 1. LE COFFRET DE FACE
        "https://elkhabskincare.github.io/elkhab-site/rituel-de-minuit-face-site.jpg",
        // 📷 2. LE DOS DU COFFRET
        "https://elkhabskincare.github.io/elkhab-site/rituel-de-minuit-dos-site.jpg",
        // 📷 3. LES SOINS DU COFFRET (à leur taille réelle)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/coffret-rituel-de-minuit-soins-v1.jpg",
        // 📷 4. AMBIANCE DES FÊTES (aussi la photo montrée par Google)
        "https://elkhabskincare.github.io/elkhab-site/coffret-rituel-de-minuit-ambiance-v3.jpg"
      ]
    },
    routine: {
      titreSoins: "Dans le coffret",
      intro: "Un coffret cadeau pour le rituel du soir : démaquiller, raffermir, reposer le regard.\nFusion Balance, démaquillant biphasé sans parfum, dissout le maquillage du visage et des yeux, même waterproof, sans frotter. Luminescence Boost, aux extraits de cresson et de sureau, accompagne la peau face à la perte de fermeté pour un visage plus lisse et rebondi au réveil. Radiance Eye Cream, à l'acide hyaluronique, hydrate le contour des yeux et atténue l'apparence des poches et des cernes. Trois soins Bloom et Balance réunis dans un écrin des fêtes, à offrir ou à s'offrir.",
      soins: ["fusion-balance", "luminescence-boost", "radiance-eye-cream"],
      moment: "Le soir",
      etapes: [
        { soin: "fusion-balance", texte: "Agitez le flacon pour mélanger les deux phases. Imbibez un coton, posez-le quelques secondes sur les paupières fermées, puis glissez-le vers l'extérieur, sans frotter. Recommencez sur le visage jusqu'à ce que le coton ressorte propre." },
        { soin: "luminescence-boost", texte: "Sur peau nette, appliquez une pression de Luminescence Boost sur le visage et le cou, en remontant du bas vers le haut." },
        { soin: "radiance-eye-cream", texte: "Terminez par une petite quantité de Radiance Eye Cream sur le contour des yeux, en tapotant du bout des doigts jusqu'à absorption." }
      ],
      conclusion: "Un démaquillage soigneux, puis des actifs qui travaillent pendant le sommeil : c'est la nuit que la peau se régénère.\nLe matin, une protection solaire préserve les résultats."
    },
    sections: [
      { titre: "Le coffret", texte: "Les trois soins sont présentés dans le coffret Rituel de Minuit, une édition limitée des fêtes prête à être offerte.\nFusion Balance · 100 ml\nLuminescence Boost · 30 ml\nRadiance Eye Cream · 15 ml" }
    ]
  },

  // =====================================================================
  // COFFRET NOUVELLE AUBE (Balance) — édition limitée des fêtes 2026
  // =====================================================================
  "coffret-nouvelle-aube": {
    nom: "Nouvelle Aube",
    sousTitre: "Coffret Peau Neuve\nAHA Balance Peel · Active Lift · Hydra Balance",
    details: ["Coffret · 3 soins", "Vegan"],
    note: "Édition limitée des fêtes",
    prix: "82€",
    variantId: "60387314205017",
    coffret: true,
    carte: { position: "50% 87%", zoom: 1.25 },   // cadrage de la photo sur la carte de la page Routines
    media: {
      type: "diaporama",
      images: [
        // 📷 1. LE COFFRET DE FACE
        "https://elkhabskincare.github.io/elkhab-site/nouvelle-aube-face-site.jpg",
        // 📷 2. LE DOS DU COFFRET
        "https://elkhabskincare.github.io/elkhab-site/nouvelle-aube-dos-site.jpg",
        // 📷 3. LES SOINS DU COFFRET (à leur taille réelle)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/coffret-nouvelle-aube-soins-v2.jpg",
        // 📷 4. AMBIANCE DES FÊTES (aussi la photo montrée par Google)
        "https://elkhabskincare.github.io/elkhab-site/coffret-nouvelle-aube-ambiance-v3.jpg"
      ]
    },
    routine: {
      titreSoins: "Dans le coffret",
      intro: "Un coffret cadeau pour commencer l'année avec une peau neuve : exfolier, lisser, repulper.\nAHA Balance Peel, à 10 % d'acide lactique, élimine les cellules mortes et affine le grain de peau pour révéler un teint plus frais. Active Lift prend le relais avec ses peptides, qui lissent les traits et améliorent l'élasticité de la peau. Hydra Balance, à l'acide hyaluronique multi-poids moléculaire, hydrate en profondeur et repulpe. Trois soins Balance réunis dans un écrin des fêtes, à offrir ou à s'offrir.",
      soins: ["aha-balance-peel", "active-lift", "hydra-balance"],
      etapes: [
        { moment: "Matin et soir", soin: "active-lift", texte: "Sur peau propre, appliquez une pression d'Active Lift sur le visage et le cou." },
        { moment: "Matin et soir", soin: "hydra-balance", texte: "Poursuivez avec une pression de Hydra Balance pour hydrater et repulper la peau." },
        { moment: "1 à 2 soirs par semaine", soin: "aha-balance-peel", texte: "Sur peau propre et sèche, appliquez quelques gouttes d'AHA Balance Peel en évitant le contour des yeux, puis terminez par Hydra Balance. Ces soirs-là, gardez Active Lift pour le matin." }
      ],
      conclusion: "Exfolier, lisser, repulper : trois gestes qui se complètent pour un grain de peau affiné et un teint lumineux.\nLe lendemain d'un soir d'AHA Balance Peel, une protection solaire est indispensable : une peau fraîchement exfoliée est plus sensible aux UV."
    },
    sections: [
      { titre: "Le coffret", texte: "Les trois soins sont présentés dans le coffret Nouvelle Aube, une édition limitée des fêtes prête à être offerte.\nAHA Balance Peel · 30 ml\nActive Lift · 30 ml\nHydra Balance · 30 ml" }
    ]
  },
  // =====================================================================
  // COFFRET VELOURS D'HIVER (Bloom & Balance) — édition limitée des fêtes 2026
  // =====================================================================
  "coffret-velours-dhiver": {
    nom: "Velours d'Hiver",
    sousTitre: "Coffret Sérums Fermeté\nBakuchiol Elixir · Active Lift · Luminescence Boost",
    gammeLabel: "Bloom & Balance",
    details: ["Coffret · 3 soins", "Vegan"],
    note: "Édition limitée des fêtes",
    prix: "94€",
    variantId: "60413279469913",
    coffret: true,
    carte: { position: "50% 58%", zoom: 1.05 },   // cadrage de la photo sur la carte de la page Routines
    media: {
      type: "diaporama",
      images: [
        // 📷 1. LE COFFRET DE FACE
        "https://elkhabskincare.github.io/elkhab-site/velours-dhiver-face-site.jpg",
        // 📷 2. LE DOS DU COFFRET
        "https://elkhabskincare.github.io/elkhab-site/velours-dhiver-dos-site.jpg",
        // 📷 3. LES SOINS DU COFFRET (à leur taille réelle)
        "https://elkhabskincare.github.io/elkhab-site/coffret-velours-dhiver-soins-v1.jpg",
        // 📷 4. AMBIANCE DES FÊTES (aussi la photo montrée par Google)
        "https://elkhabskincare.github.io/elkhab-site/coffret-velours-dhiver-ambiance.jpg"
      ]
    },
    routine: {
      titreSoins: "Dans le coffret",
      intro: "Un coffret cadeau de trois sérums concentrés pour une peau plus ferme, lisse et rebondie.\nActive Lift, aux peptides, lisse l'apparence des rides et raffermit la peau dès le matin. Le soir, Luminescence Boost redonne tonus et rebond, puis Bakuchiol Elixir, l'alternative végétale au rétinol, travaille le grain de peau et l'apparence des rides pendant la nuit, dans un soin nourrissant aux huiles précieuses. Trois sérums Bloom et Balance réunis dans un écrin des fêtes, à offrir ou à s'offrir.",
      soins: ["bakuchiol-elixir", "active-lift", "luminescence-boost"],
      etapes: [
        { moment: "Le matin", soin: "active-lift", texte: "Sur peau propre, appliquez une pression d'Active Lift sur le visage et le cou, puis votre crème habituelle." },
        { moment: "Le soir", soin: "luminescence-boost", texte: "Sur peau propre, appliquez une pression de Luminescence Boost sur le visage en lissant de l'ovale vers les tempes, puis sur le cou." },
        { moment: "Le soir", soin: "bakuchiol-elixir", texte: "Réchauffez quelques gouttes de Bakuchiol Elixir entre vos paumes et pressez-les délicatement sur le visage et le cou, pour terminer le rituel." }
      ],
      conclusion: "Trois sérums qui se complètent : les peptides le matin, le rebond et le bakuchiol le soir, pendant que la peau se régénère.\nSi votre peau découvre le bakuchiol, commencez deux à trois soirs par semaine. Le matin, terminez par une protection solaire pour préserver les résultats."
    },
    sections: [
      { titre: "Le coffret", texte: "Les trois sérums sont présentés dans le coffret Velours d'Hiver, une édition limitée des fêtes prête à être offerte.\nBakuchiol Elixir · 30 ml\nActive Lift · 30 ml\nLuminescence Boost · 30 ml" }
    ]
  }
};
for(var k in BALANCE){
  BALANCE[k].gamme = 'balance';
  // accord parfait : flacon bien cadré, bien visible (photo de la page des soins)
  var mm = BALANCE[k].media; if(mm && mm.miniature) mm.accord = mm.miniature.replace('-miniature-', '-flacon-site-').replace(/\.jpg(?=\?|$)/, '.png');   // (marche aussi quand le lien finit par ?v=…)
  window.EB_PRODUITS[k] = BALANCE[k];
}   // gamme : bloc « Vos expériences » vert partout
var INCI = {
  "calm-balance-jour": {
    "ingredients": "Aloe Barbadensis (Aloe) Leaf Juice¹, Glycerin, Simmondsia Chinensis (Jojoba) Seed Oil¹, Pentylene Glycol, Polyglyceryl-3 Stearate, Cetearyl Alcohol, Sodium PCA, Coco-Caprylate, Isoamyl Laurate, Caprylic/Capric Triglyceride, Aqua/Water, Hydrolyzed Rhodophyceae Extract, Octyldodecanol, Xanthan Gum, Cellulose, Irvingia Gabonensis Kernel Butter, Potassium Hydroxide, Sodium Hyaluronate, Hydrogenated Coco-Glycerides, Tocopherol, Ascorbyl Palmitate, Sodium Phytate, Hydrolyzed Hyaluronic Acid.\n¹ Ingrédients issus de l'agriculture biologique.",
    "natural": "100",
    "organic": "22"
  },
  "calm-balance-nuit": {
    "ingredients": "Aloe Barbadensis (Aloe) Leaf Juice¹, Simmondsia Chinensis (Jojoba) Seed Oil¹, Glycerin, Pentylene Glycol, Polyglyceryl-3 Stearate, Cetearyl Alcohol, Coco-Caprylate, Dicaprylyl Carbonate, Isoamyl Laurate, Aqua/Water, Hydrolyzed Rhodophyceae Extract, Mangifera Indica (Mango) Seed Butter¹, Cellulose, Caprylic/Capric Triglyceride, Xanthan Gum, Octyldodecanol, Potassium Hydroxide, Sodium Hyaluronate, Palmitic Acid, Stearic Acid, Tocopherol, Ascorbyl Palmitate, Sodium Phytate, Hydrolyzed Hyaluronic Acid.\n¹ Ingrédients issus de l'agriculture biologique.",
    "natural": "99",
    "organic": "42"
  },
  "hydra-balance": {
    "ingredients": "Aloe Barbadensis (Aloe) Leaf Juice¹, Pentylene Glycol, Butylene Glycol, Glycerin², Sodium PCA, Aqua/Water, Propanediol, Cellulose Gum, Parfum/Fragrance, Algin, Camellia Sinensis (White Tea) Leaf Extract¹, Salvia Officinalis (Sage) Leaf Extract¹, Hydrolyzed Hyaluronic Acid, Lactic Acid, Sodium Hyaluronate, Sodium Phytate, Rhamnose, Glucose, Glucuronic Acid.\n¹ Ingrédients issus de l'agriculture biologique. ² Fabriqué à partir d'ingrédients biologiques.",
    "natural": "99",
    "organic": "11"
  },
  "fusion-balance": {
    "ingredients": "Aloe Barbadensis (Aloe) Leaf Juice¹, Isoamyl Laurate, Coco-Caprylate/Caprate, Butylene Glycol, Glycerin², Coconut Alkanes, Sodium Chloride, Aqua, Sodium Levulinate, Tocopherol, Sodium Benzoate, Caprylyl/Capryl Glucoside, Lactic Acid, Sodium Phytate, Chamomilla Recutita (Camomile) Flower Extract¹, Hippophae Rhamnoides (Sea-Buckthorn) Fruit Extract¹, Rubus Idaeus (Raspberry) Fruit Extract¹, Capsicum Annuum (Paprika) Fruit Extract¹, Sodium Hyaluronate, Helianthus Annuus (Sunflower) Seed Oil¹, Citric Acid, Potassium Sorbate, Rosmarinus Officinalis (Rosemary) Leaf Extract¹.\n¹ Ingrédients issus de l'agriculture biologique. ² Fabriqué à partir d'ingrédients biologiques.",
    "natural": "99"
  },
  "ceramide-night-restore": {
    "ingredients": "Aloe Barbadensis (Aloe) Leaf Juice¹, Theobroma Cacao (Cocoa) Seed Butter¹, Simmondsia Chinensis (Jojoba) Seed Oil¹, Helianthus Annuus (Sunflower) Seed Oil¹, Dicaprylyl Carbonate, Pentylene Glycol, Polyglyceryl-6 Stearate, Cetearyl Alcohol, Glycerin², Helianthus Annuus (Sunflower) Seed Cera, Butyrospermum Parkii (Shea) Butter¹, Olea Europaea (Olive) Oil Unsaponifiables, Sodium PCA, Palmitic Acid, Stearic Acid, Polyglyceryl-6 Behenate, Parfum, Cellulose, Rhus Verniciflua Peel Cera / Rhus Succedanea Fruit Cera, Shorea Robusta Resin, Hippophae Rhamnoides (Sea Buckthorn) Fruit Extract¹, Xanthan Gum, Paeonia Lactiflora (Peony) Root Extract, Sambucus Nigra (Elder) Fruit Extract¹, Vaccinium Macrocarpon (Cranberry) Seed Oil¹, Glycosphingolipids, Glycolipids, Aqua, Sodium Phytate, Ascorbyl Palmitate, Tocopherol, Lactic Acid, Sodium Hyaluronate, Linalool³, Limonene³.\n¹ Ingrédients issus de l'agriculture biologique. ² Fabriqué à partir d'ingrédients biologiques. ³ Constituants d'huiles essentielles naturelles.",
    "natural": "99",
    "organic": "27"
  },
  "cellular-reveal": {
    "ingredients": "Aloe Barbadensis (Aloe) Leaf Juice¹, Glycerin², Simmondsia Chinensis (Jojoba) Seed Oil¹, Pentylene Glycol, Polyglyceryl-6 Stearate, Cetearyl Alcohol, Propanediol, Dicaprylyl Carbonate, Astrocaryum Murumuru Seed Butter, Gossypium Herbaceum Seed Oil, Isoamyl Laurate, Bidens Pilosa Extract, Polyglyceryl-6 Behenate, Linum Usitatissimum Seed Oil, Parfum/Fragrance, Cellulose, Aqua/Water, Hippophae Rhamnoides (Sea Buckthorn) Fruit Extract¹, Lactic Acid, Xanthan Gum, Rhodomyrtus Tomentosa (Rose Myrtle) Fruit Extract, Caprylic/Capric Triglyceride, Rosa Canina (Rosehip) Fruit Oil¹, Mangifera Indica (Mango) Seed Butter¹, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate, Sodium Phytate, Octyldodecanol, Tocopherol, Geraniol³, Citronellol³, Pelargonium Graveolens Flower Oil, Linalool³, Citral³.\n¹ Ingrédients issus de l'agriculture biologique. ² Fabriqué à partir d'ingrédients biologiques. ³ Constituants d'huiles essentielles naturelles.",
    "natural": "99",
    "organic": "24"
  },
  "cellular-eye-restore": {
    "ingredients": "Aloe Barbadensis (Aloe) Leaf Juice¹, Glycerin², Coconut Alkanes, Pentylene Glycol, Aqua/Water, Simmondsia Chinensis (Jojoba) Seed Oil¹, Sodium PCA, Polyglyceryl-6 Stearate, Glyceryl Stearate Citrate, Borago Officinalis (Borage) Seed Oil¹, Caprylic/Capric Triglyceride, Dipalmitoyl Hydroxyproline, Ricinus Communis (Castor) Seed Oil, Astrocaryum Murumuru Seed Butter, Gossypium Herbaceum Seed Oil, Bidens Pilosa Extract, Linum Usitatissimum Seed Oil, Parfum/Fragrance, CI 77163 (Bismuth Chloride Oxide)⁴, Polyglyceryl-6 Behenate, Rhus Verniciflua Peel Cera/Rhus Succedanea Fruit Cera, Xanthan Gum, Aesculus Hippocastanum (Horse Chestnut) Seed Extract, Cellulose, Tocopherol, Ascorbyl Palmitate, Potassium Hydroxide, Mangifera Indica (Mango) Seed Butter¹, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate, Sodium Phytate, Octyldodecanol, Alteromonas Ferment Extract, Phenethyl Alcohol, Escin, Geraniol³, Citronellol³, Pelargonium Graveolens Flower Oil, Linalool³, Citral³.\n¹ Ingrédients issus de l'agriculture biologique. ² Fabriqué à partir d'ingrédients biologiques. ³ Constituants d'huiles essentielles naturelles. ⁴ Pigments minéraux purs.",
    "natural": "100",
    "organic": "22"
  },
  "active-lift": {
    "ingredients": "Aloe Barbadensis (Aloe) Leaf Juice, Glycerin, Simmondsia Chinensis (Jojoba) Seed Oil, Aqua/Water, Pentylene Glycol, Cetearyl Alcohol, Sodium PCA, Isoamyl Laurate, Glyceryl Stearate Citrate, Dipalmitoyl Hydroxyproline, Propanediol, Parfum/Fragrance, Caprylic/Capric Triglyceride, Fragaria Ananassa (Strawberry) Seed Oil, Vaccinium Myrtillus (Blueberry) Seed Oil, Xanthan Gum, Hexapeptide-11, Phytosterols, Ricinus Communis (Castor) Seed Oil, Ascorbyl Palmitate, Hydrolyzed Hyaluronic Acid, Potassium Hydroxide, Sodium Hyaluronate, Sodium Phytate, Tocopherol, Leuconostoc/Radish Root Ferment Filtrate, Ginkgo Biloba Leaf Extract, CI 77491 (Iron Oxides), Citric Acid, Sodium Benzoate, Potassium Sorbate, Glycolipids, Linalool, Geraniol, Citronellol.",
    "natural": "99",
    "organic": "20"
  },
  "age-lift": {
    "ingredients": "Aqua/Water, Simmondsia Chinensis (Jojoba) Seed Oil¹, Glycerin, Pentylene Glycol, Polyglyceryl-6 Stearate, Cetearyl Alcohol, Sodium PCA, Dipalmitoyl Hydroxyproline, Propanediol, Aroma/Fragrance, Dicaprylyl Carbonate, Polyglyceryl-6 Behenate, Mangifera Indica (Mango) Seed Butter¹, Caprylic/Capric Triglyceride, Coco-Caprylate, Fragaria Ananassa (Strawberry) Seed Oil, Vaccinium Myrtillus (Blueberry) Seed Oil¹, Xanthan Gum, Hexapeptide-11, Phytosterols, Octyldodecanol, Palmitic Acid, Stearic Acid, Tocopherol, Ascorbyl Palmitate, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate, Sodium Phytate, Potassium Hydroxide, Leuconostoc/Radish Root Ferment Filtrate, Ginkgo Biloba (Ginkgo) Leaf Extract¹, Citric Acid, Sodium Benzoate, Potassium Sorbate, CI 77491 (Iron Oxides)³, Linalyl Acetate², Geranyl Acetate², Linalool², Geraniol², Citronellol².\n¹ Ingrédients issus de l'agriculture biologique. ² Constituants d'huiles essentielles naturelles. ³ Pigments minéraux purs.",
    "natural": "99",
    "organic": "9"
  },
  "eye-lift": {
    "ingredients": "Aqua/Water, Glycerin, Coconut Alkanes, Pentylene Glycol, Simmondsia Chinensis (Jojoba) Seed Oil¹, Sodium PCA, Polyglyceryl-6 Stearate, Cetearyl Alcohol, Borago Officinalis (Borage) Seed Oil¹, Caprylic/Capric Triglyceride, Dipalmitoyl Hydroxyproline, Ricinus Communis (Castor) Seed Oil, Propanediol, Aroma/Fragrance, Polyglyceryl-6 Behenate, Xanthan Gum, Fragaria Ananassa (Strawberry) Seed Oil, Rhus Verniciflua Peel Cera/Rhus Succedanea Fruit Cera, Vaccinium Myrtillus (Blueberry) Seed Oil¹, Cellulose, Hexapeptide-11, Phytosterols, Ascorbyl Palmitate, Tocopherol, Mangifera Indica (Mango) Seed Butter¹, Sodium Phytate, Potassium Hydroxide, Leuconostoc/Radish Root Ferment Filtrate, Octyldodecanol, Ginkgo Biloba (Ginkgo) Leaf Extract¹, Citric Acid, Sodium Benzoate, Potassium Sorbate, CI 77491 (Iron Oxides)³, Linalyl Acetate², Geranyl Acetate², Linalool², Geraniol², Citronellol².\n¹ Ingrédients issus de l'agriculture biologique. ² Constituants d'huiles essentielles naturelles. ³ Pigments minéraux purs.",
    "natural": "99",
    "organic": "8"
  },
  "bakuchiol-elixir": {
    "ingredients": "Simmondsia Chinensis (Jojoba) Seed Oil¹, Decyl Cocoate, Dicaprylyl Carbonate, Coco-Caprylate/Caprate, Oenothera Biennis (Evening Primrose) Oil¹, Rosa Canina (Rosehip) Fruit Oil¹, Tocopherol, Fragaria Ananassa (Strawberry) Seed Oil, Rubus Idaeus (Raspberry) Seed Oil¹, Undecane, Bakuchiol, Parfum, Tridecane, Vaccinium Myrtillus (Blueberry) Seed Oil¹, Geraniol, Citronellol, Linalool, Limonene.\n¹ Ingrédients issus de l'agriculture biologique.",
    "natural": "99",
    "organic": "61"
  },
  "bright-control": {
    "ingredients": "Aqua/Water, Glycerin², Simmondsia Chinensis (Jojoba) Seed Oil¹, Pentylene Glycol, Polyglyceryl-3 Stearate, Cetearyl Alcohol, Betaine, Sodium PCA, Coco-Caprylate, Isoamyl Laurate, Caprylic/Capric Triglyceride, Kojic Acid, Xanthan Gum, Parfum/Fragrance, Cellulose, Hippophae Rhamnoides (Sea Buckthorn) Fruit Oil¹, Tocopherol, Ascorbyl Palmitate, Sodium Phytate, Capsicum Annuum (Paprika) Fruit Extract¹, Potassium Hydroxide, Helianthus Annuus (Sunflower) Seed Oil¹, Rosmarinus Officinalis (Rosemary) Leaf Extract¹, Limonene³, Citrus Limon Peel Oil, Benzyl Salicylate³, Citral³, Pogostemon Cablin Oil, Citrus Aurantium Peel Oil, Juniperus Virginiana Oil, Linalool³, Cedrus Atlantica Oil/Extract, Pinene³.\n¹ Ingrédients issus de l'agriculture biologique. ² Fabriqué à partir d'ingrédients biologiques. ³ Constituants d'huiles essentielles naturelles.",
    "natural": "100",
    "organic": "8"
  },
  "spot-control": {
    "ingredients": "Aqua/Water, Simmondsia Chinensis (Jojoba) Seed Oil¹, Glycerin², Pentylene Glycol, Betaine, Isoamyl Laurate, Sodium PCA, Glyceryl Stearate Citrate, Kojic Acid, Sclerotium Gum, Parfum/Fragrance, Xanthan Gum, Hippophae Rhamnoides (Sea Buckthorn) Fruit Oil¹, Ascorbyl Palmitate, Tocopherol, Sodium Phytate, Capsicum Annuum (Paprika) Fruit Extract¹, Potassium Hydroxide, Helianthus Annuus (Sunflower) Seed Oil¹, Rosmarinus Officinalis (Rosemary) Leaf Extract¹, Limonene³, Citrus Limon Peel Oil, Benzyl Salicylate³, Citral³, Pogostemon Cablin Oil, Citrus Aurantium Peel Oil, Juniperus Virginiana Oil, Linalool³, Cedrus Atlantica Oil/Extract, Pinene³.\n¹ Ingrédients issus de l'agriculture biologique. ² Fabriqué à partir d'ingrédients biologiques. ³ Constituants d'huiles essentielles naturelles.",
    "natural": "100",
    "organic": "8"
  },
  "glyco-balance": {
    "ingredients": "Aqua, Glycolic Acid, Glycerin, Potassium Hydroxide, Betaine, Sodium PCA, Sodium Levulinate, Phenethyl Alcohol, Sodium Benzoate, Vaccinium Macrocarpon (Cranberry) Fruit Extract¹, Vaccinium Vitis-Idaea (Lingonberry) Fruit Extract¹, Alcohol.\n¹ Ingrédients issus de l'agriculture biologique.",
    "natural": "",
    "organic": ""
  },
  "aha-balance-peel": {
    "ingredients": "Aqua/Water, Lactic Acid, Pentylene Glycol, Potassium Hydroxide, Butylene Glycol, Glycerin², Sodium Hyaluronate, Camellia Sinensis (White Tea) Leaf Extract¹, Salvia Officinalis (Sage) Leaf Extract¹.\n¹ Ingrédients issus de l'agriculture biologique. ² Fabriqué à partir d'ingrédients biologiques.",
    "natural": "100",
    "organic": "2"
  },
  "cellular-renew": {
    "ingredients": "Aloe Barbadensis (Aloe) Leaf Juice¹, Simmondsia Chinensis (Jojoba) Seed Oil¹, Glycerin², Pentylene Glycol, Polyglyceryl-6 Stearate, Cetearyl Alcohol, Aqua/Water, Sodium PCA, Dipalmitoyl Hydroxyproline, Astrocaryum Murumuru Seed Butter, Hippophae Rhamnoides (Sea Buckthorn) Fruit Extract¹, Gossypium Herbaceum Seed Oil, Propanediol, Bidens Pilosa Extract, Dicaprylyl Carbonate, Polyglyceryl-6 Behenate, Parfum/Fragrance, Linum Usitatissimum Seed Oil, Mangifera Indica (Mango) Seed Butter¹, Caprylic/Capric Triglyceride, Coco-Caprylate, Xanthan Gum, Octyldodecanol, Palmitic Acid, Stearic Acid, Tocopherol, Ascorbyl Palmitate, Potassium Hydroxide, Rhodomyrtus Tomentosa (Rose Myrtle) Fruit Extract, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate, Sodium Phytate, Alteromonas Ferment Extract, Phenethyl Alcohol, Geraniol³, Citronellol³, Pelargonium Graveolens Flower Oil, Linalool³, Citral³.\n¹ Ingrédients issus de l'agriculture biologique. ² Fabriqué à partir d'ingrédients biologiques. ³ Issus d'huiles essentielles naturelles.",
    "natural": "",
    "organic": ""
  },
  "bha-balance": {
    "ingredients": "Aqua, Alcohol, Lavandula Angustifolia (Lavender) Flower Water¹, Glycerin², Betaine, Propanediol, Acorus Calamus (Sweet Flag) Root Extract¹, Cucumis Sativus (Cucumber) Fruit Extract¹, Salicylic Acid, Benzyl Alcohol, Sodium Benzoate, Potassium Sorbate, Rhamnose, Glucose, Glucuronic Acid.\n¹ Ingrédients issus de l'agriculture biologique. ² Fabriqué à partir d'ingrédients biologiques.",
    "natural": "99",
    "organic": "7"
  }
};
for(var i in INCI){ window.EB_INCI_PLUS[i] = INCI[i]; }
})();
