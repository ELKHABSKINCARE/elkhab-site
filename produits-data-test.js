// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Catalogue des fiches produits — VERSION TEST (nouveaux packagings, testbloom uniquement)
// Chaque fiche s'ouvre en panneau, par-dessus la page.
//
// MODE D'EMPLOI
// - Pour modifier un texte : changer uniquement ce qui est entre guillemets "…".
// - Pour changer une photo ou une vidéo : chercher (Ctrl + F) le repère
//   📷  puis remplacer le lien entre guillemets par le nouveau lien Shopify.
// - Ne pas supprimer les guillemets, les virgules ni les accolades { }.
// =====================================================================

// Bloc « Vos expériences » des fiches : dégradé Bloom (true) ou ancien fond noir (false)
window.EB_AVIS_DEGRADE = true;

// Fiches sur ordinateur : vidéos et photos avec leur propre fond en pleine colonne (true) ou comme avant (false)
window.EB_MEDIA_PLEIN = true;

// Compositions des nouveaux soins (en plus de inci-data.js) — clé = « inci » de la fiche
window.EB_INCI_PLUS = {
  "lumi-bloom-arbutin": {
    ingredients: "Aqua, Glycerin, Caprylic/Capric Triglyceride, Helianthus Annuus (Sunflower) Seed Oil, Pentylene Glycol, Cetearyl Alcohol, Sodium PCA, Glyceryl Stearate Citrate, Alpha-Arbutin, Astrocaryum Murumuru Seed Butter, Gossypium Herbaceum Seed Oil, Bidens Pilosa Extract, Cellulose, Linum Usitatissimum Seed Oil, Parfum, Xanthan Gum, Ascorbyl Palmitate, Lactic Acid, Ascophyllum Nodosum Extract, Sodium Phytate, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate, Tocopherol, Limonene, Citrus Limon Peel Oil, Pogostemon Cablin Oil, Linalool, Juniperus Virginiana Oil, Cedrus Atlantica Oil/Extract, Pinene, Vanillin, Menthol, Citral, Beta-Caryophyllene.",
    natural: "100",
    organic: "23"
  },
  "milky-bloom": {
    ingredients: "Caprylic/Capric Triglyceride, Glycerin, Helianthus Annuus (Sunflower) Seed Oil*, Aqua, Sucrose Laurate, Sucrose Palmitate, Alcohol, Tocopherol, Mica (CI 77019), Parfum, Chamomilla Recutita (Camomile) Flower Extract*, Hippophae Rhamnoides (Sea Buckthorn) Fruit Extract*, Rubus Chamaemorus (Cloudberry) Fruit Extract*, CI 77491 (Iron Oxides), Glycolipids, Limonene, Linalyl Acetate. *Ingrédients issus de l'agriculture biologique.",
    natural: "100",
    organic: "39"
  },
  "radiance-cleanser": {
    ingredients: "Aloe Barbadensis (Aloe) Leaf Juice*, Coco-Glucoside, Cocamidopropyl Betaine, Glycerin, Aqua/Water, Xanthan Gum, Propanediol, Rubus Fruticosus (Blackberry) Fruit Extract*, Sodium PCA, Sodium Levulinate, Lactic Acid, Acacia Senegal Gum, Sodium Anisate, Acorus Calamus (Sweet Flag) Root Extract*, Parfum/Fragrance, Salvia Officinalis (Sage) Leaf Extract*, Rhamnose, CI 77491 (Iron Oxides)***, Glucose, Glucuronic Acid, Arctium Lappa (Burdock) Root Extract*, Citric Acid, Sodium Benzoate, Potassium Sorbate, Linalool**, Limonene**. *Ingrédients issus de l'agriculture biologique. **Issus d'huiles essentielles naturelles. ***Pigments minéraux purs.",
    natural: "98",
    organic: "10"
  }
};

window.EB_PRODUITS = {

  "radiance-serum": {
    nom: "Radiance C Serum",
    sousTitre: "Vitamine C stabilisée · Acide hyaluronique",
    details: ["30 ml", "Vegan"],        // affichés en petites majuscules : 30 ML · VEGAN
    note: "une pression suffit",        // petite mention fine sous les détails (laisser "" pour ne rien afficher)
    prix: "34,90€",
    variantId: "59324259434841",
    inci: "radiance-c-serum",           // clé de la composition dans inci-data.js
    avis: "Radiance C Serum",           // nom exact utilisé pour les avis (Google Form)
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE  — Radiance C Serum              │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/radiance-c-serum-2-flacon_dezoome.png?v=1792676875",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/radiance-c-serum-1-boite-flacon_-_Copie.png?v=1792576367",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/radiance-c-serum-2-flacon_dezoome.png?v=1792676875",
        // 📷 3. PHOTO / VIDÉO D'AMBIANCE (à remplacer si ancien packaging)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Goutte_de_creme_jaune_brillante.png?v=1791129397"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Matin et/ou soir", soin: "radiance-serum", texte: "Sur peau propre, déposez une pression de ce sorbet à la teinte solaire et appliquez-la sur le visage et le cou. Laissez sa délicate senteur d'agrumes éveiller vos sens." },
        { moment: "Matin et/ou soir", titre: "Crème Luminescence", texte: "Une fois le sérum pénétré, poursuivez avec Luminescence Jour le matin, ou Luminescence Nuit le soir." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Terminez par Radiance Protect SPF 50 : son stick fondant glisse sur la peau et préserve l'éclat de votre teint tout au long de la journée." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Une texture sorbet à la teinte solaire, une délicate senteur d'agrumes et une formule pensée pour révéler la radiance naturelle de la peau. Dès les premières applications, Radiance C Serum transforme chaque geste en un véritable moment d'éveil, où sensorialité et performance s'unissent dans le respect des peaux, même les plus sensibles." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Lumibloom associe une vitamine C stabilisée à l'acide hyaluronique multimoléculaire pour révéler la radiance naturelle de la peau sans jamais compromettre son hydratation. Sa formule haute tolérance illumine progressivement le teint, unifie le grain de peau et aide à protéger la peau des agressions quotidiennes responsables du vieillissement cutané prématuré." },
      { titre: "Bénéfices clés",
        liste: [
          "Ravive la radiance naturelle du teint (Healthy Glow)",
          "Unifie visiblement le teint et aide à atténuer l'apparence des taches",
          "Protège du stress oxydatif et des agressions extérieures",
          "Soutient les mécanismes naturels de production du collagène",
          "Hydrate et nourrit sans alourdir",
          "Convient aux peaux sensibles"
        ] },
      { titre: "Pensé pour",
        liste: [
          "Les peaux ternes ou en manque de radiance",
          "Les peaux déshydratées en quête d'une hydratation intense",
          "Les teints irréguliers ou sujets aux taches pigmentaires",
          "Les peaux souhaitant préserver leur capital jeunesse",
          "Tous les types de peau, y compris les plus sensibles"
        ] },
      { titre: "Texture & sensorialité",
        texte: "Une texture sorbet fraîche et fondante, délicatement parfumée aux agrumes. Elle pénètre rapidement sans laisser de fini gras, révélant une peau douce, confortable et naturellement lumineuse." },
      { titre: "Engagement ELKHA.B",
        liste: [
          "99% d'ingrédients d'origine naturelle",
          "Vitamine C stabilisée haute tolérance",
          "Formule concentrée, pensée pour durer"
        ] }
    ],
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "luminescence-jour",       // fiche ouverte par le bouton « Découvrir »
      nom: "Crème Luminescence Jour",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "L'alliance du Radiance C Serum et de la crème Luminescence Jour offre une routine complète où l'éclat rencontre l'hydratation.\nLe sérum unifie et illumine le teint, tandis que la crème repulpe intensément la peau et aide à préserver durablement sa radiance.\nEnsemble, ils révèlent une peau naturellement lumineuse, souple et éclatante de santé.",
      prix: "34,90€",
      variantId: "59324221129049"
    }
  },

  // =====================================================================
  // LUMINESCENCE JOUR
  // =====================================================================
  "luminescence-jour": {
    nom: "Luminescence Jour",
    sousTitre: "Acide hyaluronique multimoléculaire · Bisabolol",
    details: ["50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "34,90€",
    variantId: "59324221129049",
    inci: "luminescence-jour",
    avis: "Luminescence Jour",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE  — Luminescence Jour             │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000067a081f4b806353042f5d59c.png?v=1792224216",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/luminescence-jour-1-boite-flacon_-_Copie.png?v=1792576367",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000067a081f4b806353042f5d59c.png?v=1792224216",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_LUMI_JOUR.png?v=1792581371",
        // 📷 4. PHOTO 4
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Portrait_beaute_avec_soin_hydratant_ELKHA.B_1.png?v=1792580243"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Le matin", soin: "radiance-serum", texte: "Sur peau propre, commencez par une pression de Radiance C Serum pour éveiller l'éclat du teint." },
        { moment: "Le matin", soin: "luminescence-jour", texte: "Appliquez une pression de crème : sa texture soyeuse fond sur la peau et l'enveloppe d'une hydratation fraîche, sans film gras." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Luminescence Jour enveloppe la peau d'une hydratation immédiate et durable tout en révélant un éclat naturel. Jour après jour, la peau paraît plus souple, plus lumineuse et retrouve tout son confort." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Sa formule associe un acide hyaluronique multimoléculaire, du bisabolol et des extraits végétaux antioxydants pour hydrater intensément, apaiser la peau et préserver l'éclat du teint face aux agressions du quotidien. Sa texture légère pénètre rapidement, sans effet gras, pour une peau douce, confortable et naturellement lumineuse." },
      { titre: "Bénéfices clés",
        liste: [
          "Hydrate durablement la peau",
          "Améliore la souplesse et le confort cutané",
          "Révèle un glow naturel et un teint plus lumineux",
          "Aide à préserver l'équilibre de la barrière cutanée"
        ] },
      { titre: "Pensé pour",
        texte: "Les peaux normales à sèches, en manque d'hydratation, de souplesse ou d'éclat. Convient également à toutes les peaux recherchant un soin hydratant confortable au quotidien." },
      { titre: "Texture & sensorialité",
        texte: "Sa texture crème soyeuse fond délicatement sur la peau et pénètre rapidement. Elle laisse un fini confortable, sans film gras, tout en révélant un éclat frais et naturel." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\nChez ELKHA.B, chaque formule est pensée pour révéler la beauté naturelle de votre peau grâce à des actifs soigneusement sélectionnés. Luminescence Jour associe efficacité, sensorialité et confort dans un soin concentré conçu pour accompagner votre peau jour après jour." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "gelee-lumibloom",
      nom: "Gelée Lumi-Bloom",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Le duo essentiel pour révéler une peau éclatante.\nLa Gelée LumiBloom aide à renforcer la barrière cutanée et à préserver son équilibre pour une peau plus éclatante.\nLuminescence Jour prolonge cette action par une hydratation intense pour une peau plus souple, rebondie et naturellement lumineuse.",
      prix: "28,90€",
      variantId: "59324234891609"
    }
  },

  // =====================================================================
  // GELÉE LUMI-BLOOM
  // =====================================================================
  "gelee-lumibloom": {
    nom: "Gelée Lumi-Bloom",
    sousTitre: "Prébiotiques bioactifs · Acide hyaluronique",
    details: ["30 ml", "Vegan"],
    note: "une pression suffit",
    prix: "28,90€",
    variantId: "59324234891609",
    inci: "gelee-lumibloom",
    avis: "Gelée Lumi-Bloom au Prébiotique",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  PHOTOS DE LA FICHE — Gelée Lumi-Bloom (diaporama)          │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000189881f48908d7eaebf894d3.png?v=1792227809",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/gelee-lumibloom-1-boite-flacon.png?v=1792576368",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000189881f48908d7eaebf894d3.png?v=1792227809",
        // 📷 3. PHOTO / VIDÉO D'AMBIANCE (à remplacer si ancien packaging)
        "https://cdn.shopify.com/videos/c/o/v/f39e74d85032496689b66ce6fa09cf3a.mp4",
        // 📷 4. PHOTO 4
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000004cd88243810b9ae55a9f7669.png?v=1792579905"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Matin et/ou soir", soin: "gelee-lumibloom", texte: "Sur peau propre, appliquez une pression de gelée : sa texture fraîche se pose comme une eau sur la peau et la prépare en douceur." },
        { moment: "Matin et/ou soir", soin: "radiance-serum", texte: "Poursuivez avec Radiance C Serum, qui révèle tout son éclat sur une peau parfaitement préparée." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "La Gelée Lumi-Bloom est la première étape d'une peau éclatante. Sa texture gel fraîche hydrate instantanément tout en aidant à rééquilibrer le microbiome et à renforcer la barrière cutanée. La peau paraît plus confortable, plus souple et naturellement lumineuse." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Grâce à ses prébiotiques bioactifs, son acide hyaluronique et son Sodium PCA, la Gelée Lumi-Bloom aide à préserver l'équilibre naturel de la peau, favorise une hydratation durable et prépare idéalement la peau à recevoir les soins suivants. Jour après jour, la peau retrouve confort, résistance et éclat." },
      { titre: "Bénéfices clés",
        liste: [
          "Aide à renforcer la barrière cutanée",
          "Préserve l'équilibre du microbiome",
          "Hydrate durablement et améliore le confort de la peau",
          "Prépare la peau à recevoir les soins de votre routine"
        ] },
      { titre: "Pensé pour",
        texte: "Tous les types de peau, en particulier les peaux déshydratées, sensibilisées ou fragilisées recherchant davantage de confort, d'équilibre et d'éclat." },
      { titre: "Texture & sensorialité",
        texte: "Sa texture gel légère et rafraîchissante pénètre rapidement sans effet collant. Elle laisse la peau fraîche, souple et parfaitement préparée à recevoir les soins suivants." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\nChez ELKHA.B, nous croyons qu'une peau éclatante commence par une peau équilibrée. La Gelée LumiBloom associe des actifs soigneusement sélectionnés pour renforcer la barrière cutanée, préserver le microbiome et révéler durablement l'éclat naturel de votre peau." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "radiance-serum",
      nom: "Radiance C Serum",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Préparez votre peau à révéler tout son éclat.\nLa Gelée Lumi-Bloom aide à renforcer la barrière cutanée et à préserver l'équilibre du microbiome, créant les conditions idéales pour le Radiance C Serum.\nEnsemble, ils révèlent une peau plus lumineuse, plus homogène et naturellement éclatante.",
      prix: "34,90€",
      variantId: "59324259434841"
    }
  },

  // =====================================================================
  // LUMI-VEIL CC CREAM SPF 30
  // =====================================================================
  "lumiveil-cc-cream": {
    nom: "Lumi-Veil CC Cream SPF 30",
    sousTitre: "Céramides · Beurre de cacao · Vitamine E",
    details: ["12 g", "SPF 30", "Vegan"],
    note: "",
    prix: "26,90€",
    inci: "lumi-veil-cc-cream",
    avis: "Lumi-Veil CC Cream",

    // Sélecteur de teintes : la teinte choisie part au panier,
    // et le diaporama glisse jusqu'à sa photo (photo : 0 = 1re photo, 1 = 2e photo…)
    choixLabel: "Choisissez votre teinte",
    variantes: [
      { label: "N°B1 CLAIR", variantId: "59361531560281", photo: 0, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_CLAIR_c06c07dc-44a2-4d5d-b942-164990d69865.jpg?v=1791308948" },
      { label: "N°B2 MOYEN", variantId: "59361531593049", photo: 1, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_MOYENNE_ad0953ad-5a17-4603-b5ef-3c78bd357ffe.jpg?v=1791308962" },
      { label: "N°B3 HÂLÉ",  variantId: "59361531625817", photo: 2, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/HALE_a966c14d-9b78-4dc7-a661-f8a1cf5ab0c4.jpg?v=1791308743" },
      { label: "N°B4 FONCÉ", variantId: "59361531658585", photo: 3, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/FONCE_5b3e6189-9008-4c99-a85a-dbef815da88f.jpg?v=1791308970" }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  PHOTOS DE LA FICHE — Lumi-Veil CC Cream (diaporama)        │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000a5cc82108dc80c99927fc410.png?v=1792224583",   // 📷 petite photo : stick seul
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. B1 CLAIR · BOÎTE + STICK
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/lumi-veil-b1-clair-1-boite-flacon_-_Copie.png?v=1792576367",
        // 📷 2. B2 MOYEN · BOÎTE + STICK
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/lumi-veil-b2-moyen-1-boite-flacon_-_Copie.png?v=1792576367",
        // 📷 3. B3 HÂLÉ · BOÎTE + STICK
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/lumi-veil-b3-hale-1-boite-flacon_-_Copie.png?v=1792576367",
        // 📷 4. B4 FONCÉ · BOÎTE + STICK
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/lumi-veil-b4-fonce-1-boite-flacon.png?v=1792576367"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Le matin", titre: "Vos soins Bloom", texte: "Appliquez votre sérum puis votre crème, et laissez-les pénétrer quelques instants." },
        { moment: "Le matin", soin: "lumiveil-cc-cream", texte: "En dernière étape, faites glisser le stick directement sur la peau, puis estompez du bout des doigts ou au pinceau : sa texture fondante fusionne avec la peau pour un fini seconde peau." },
        { moment: "Au cours de la journée", texte: "Retouchez selon vos envies, là où le teint en a besoin : son format stick se glisse partout avec vous." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Lumi-Veil CC Cream est bien plus qu'une simple CC crème. Ce soin hybride associe correction du teint, protection solaire SPF 30 et soin de la peau dans un format stick pratique. Sa texture fondante se fond instantanément à la peau pour révéler un teint naturellement lumineux, uniforme et confortable." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Enrichie en céramides, vitamine E et beurre de cacao, sa formule aide à préserver la barrière cutanée tout en maintenant l'hydratation tout au long de la journée. Son fini seconde peau offre un éclat naturel, sans effet masque, pour une peau sublimée en toute simplicité." },
      { titre: "Bénéfices clés",
        liste: [
          "Unifie visiblement le teint",
          "Atténue l'apparence des rougeurs, des pores et des petites imperfections",
          "Protège la peau des UV grâce au SPF 30",
          "Contribue à renforcer la barrière cutanée",
          "Hydrate durablement et procure une sensation de confort",
          "Disponible en quatre teintes : Claire, Moyenne, Hâlée et Foncée"
        ] },
      { titre: "Pensé pour",
        texte: "Tous les types de peau, en particulier celles qui recherchent un teint naturellement lumineux, une protection quotidienne et un produit pratique à emporter partout." },
      { titre: "Texture & sensorialité",
        texte: "Sa texture crémeuse glisse facilement sur la peau et fusionne au contact de celle-ci pour un fini léger, homogène et naturellement lumineux. Son format stick permet une application rapide ainsi que des retouches à tout moment de la journée." },
      { titre: "Engagement ELKHA.B",
        texte: "• 98% d'ingrédients d'origine naturelle\nChez ELKHA.B, chaque formule est pensée pour offrir des résultats visibles tout en respectant l'équilibre naturel de la peau." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "luminescence-jour",
      nom: "Luminescence Jour",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Offrez à votre peau le duo qui fait toute la différence.\nLuminescence Jour l'hydrate intensément, l'apaise et lui redonne toute sa souplesse.\nLumi-Veil CC Crème révèle ensuite un teint unifié, un glow naturel et une protection quotidienne.\nLa peau paraît plus rebondie, plus lumineuse et si fraîche qu'elle attire naturellement le regard.",
      prix: "34,90€",
      variantId: "59324221129049"
    }
  },

  // =====================================================================
  // LUMI-BLOOM NIACINAMIDE 5
  // =====================================================================
  "lumibloom-niac-5": {
    nom: "Lumi-Bloom Niacinamide 5",
    sousTitre: "Niacinamide 5% · Ginkgo biloba",
    details: ["50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "34,90€",
    variantId: "59324243411289",
    inci: "lumibloom-niacinamide-5",
    avis: "Lumi-Bloom Niacinamide 5",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE  — Lumi-Bloom Niacinamide 5      │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000f6dc81f488084229cc8f2994.png?v=1792228227",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/niacinamide-5-1-boite-flacon_673d71dc-9fcb-4556-94ee-65f84a9af9d8.png?v=1792576759",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000f6dc81f488084229cc8f2994.png?v=1792228227",
        // 📷 3. PHOTO / VIDÉO D'AMBIANCE (à remplacer si ancien packaging)
        "https://cdn.shopify.com/videos/c/o/v/2306ccc5a1554bcea8c47c32c12f29be.mp4"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Matin et/ou soir", soin: "lumibloom-niac-5", texte: "Sur peau propre, appliquez une pression de gel : frais et léger, il fond instantanément et laisse la peau lisse, sans effet collant." },
        { moment: "Matin et/ou soir", titre: "Crème Luminescence", texte: "Poursuivez avec Luminescence Jour le matin, ou Luminescence Nuit le soir, pour une routine Bloom complète." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Une texture gel fraîche et légère qui fond instantanément sur la peau. Pensée pour rééquilibrer les peaux sujettes aux imperfections, aux brillances ou aux irrégularités, sa formule révèle progressivement un teint plus uniforme, une peau plus lisse et naturellement lumineuse." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'une peau équilibrée est une peau qui rayonne naturellement. Lumi-Bloom Niacinamide 5 associe 5% de niacinamide à un extrait de Ginkgo Biloba et à l'algine pour améliorer visiblement la qualité de la peau sans compromettre son confort." },
      { titre: "Bénéfices clés",
        liste: [
          "Unifie visiblement le teint et améliore son homogénéité",
          "Atténue l'apparence des taches pigmentaires",
          "Affine visiblement les pores et lisse le grain de peau",
          "Aide à équilibrer les peaux mixtes à grasses",
          "Renforce la barrière cutanée",
          "Hydrate sans effet collant",
          "Révèle un éclat naturel durable"
        ] },
      { titre: "Pensé pour",
        liste: [
          "Les peaux mixtes à grasses",
          "Les peaux sujettes aux pores dilatés et aux irrégularités",
          "Les peaux déshydratées ou en manque d'équilibre",
          "Les peaux souhaitant atténuer l'apparence des taches pigmentaires",
          "Tous les types de peau, y compris les plus sensibles"
        ] },
      { titre: "Texture & sensorialité",
        texte: "Un gel frais, léger et non collant qui pénètre rapidement. Il laisse la peau douce, confortable, visiblement plus lisse et parfaitement équilibrée, sans fini gras." },
      { titre: "Engagement ELKHA.B",
        liste: [
          "99% d'ingrédients d'origine naturelle",
          "Niacinamide dosée à 5% pour une efficacité maîtrisée et une haute tolérance",
          "Formule concentrée, pensée pour durer"
        ] }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT (avec sélecteur de teintes automatique)    │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "lumiveil-cc-cream",
      nom: "Lumi-Veil CC Cream SPF 30",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "L'alliance de Lumi-Bloom Niacinamide 5 et de Lumi-Veil CC Cream SPF 30 révèle un teint plus uniforme, des pores visiblement estompés et une peau naturellement lumineuse.\nLe gel perfecteur prépare la peau, tandis que Lumi-Veil unifie, protège et sublime l'éclat pour un effet glow frais et naturel, sans effet gras.",
      prix: "26,90€"
      // Les teintes et leurs identifiants sont repris automatiquement de la fiche Lumi-Veil CC Cream
    }
  },

  // =====================================================================
  // LUMI-BLOOM ARBUTIN (nouveau soin — octobre 2026)
  // =====================================================================
  "lumibloom-arbutin": {
    nom: "Lumi-Bloom Arbutin",
    sousTitre: "Alpha-arbutine · Bidens pilosa · Vitamine C",
    details: ["30 ml", "Vegan"],
    note: "une pression suffit",
    prix: "29,90€",
    variantId: "60077870678361",
    inci: "lumi-bloom-arbutin",
    avis: "Lumi-Bloom Arbutin",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE  — Lumi-Bloom Arbutin                 │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Flacon_de_serum_Lumi-Bloom_minimaliste.png?v=1792650026",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/lumi-bloom-arbutin-1-boite-flacon.png?v=1792649529",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Flacon_de_serum_Lumi-Bloom_minimaliste.png?v=1792650026",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE.png?v=1792649763",
        // 📷 4. MANNEQUIN
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/VISAGE.png?v=1792649764"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Le matin", soin: "gelee-lumibloom", texte: "Sur peau propre, appliquez une pression de Gelée Lumi-Bloom pour préparer la peau." },
        { moment: "Le matin", soin: "lumibloom-arbutin", texte: "Appliquez Lumi-Bloom Arbutin sur le visage, en insistant sur les zones présentant des irrégularités pigmentaires, sans frotter." },
        { moment: "Le matin", soin: "luminescence-jour", texte: "Poursuivez avec Luminescence Jour pour hydrater la peau tout au long de la journée." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Terminez toujours par Radiance Protect SPF 50 : sans protection solaire, les taches reviennent plus vite." },
        { moment: "Le soir", soin: "luminescence-nuit", texte: "Appliquez Lumi-Bloom Arbutin sur peau propre et sèche, puis poursuivez avec Luminescence Nuit." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Et si votre teint retrouvait toute sa lumière ? Lumi-Bloom Arbutin transforme le soin des taches pigmentaires en un véritable rituel de beauté. Sa texture légère et enveloppante glisse délicatement sur la peau, lui apportant hydratation, douceur et confort.\nAu fil des applications, les irrégularités pigmentaires paraissent moins visibles, le teint semble plus homogène et la peau révèle un éclat naturel." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'un teint uniforme ne devrait pas se faire au détriment du confort de votre peau. Lumi-Bloom Arbutin associe l'alpha-arbutine, reconnue pour son action sur l'apparence des taches pigmentaires, à des ingrédients hydratants et nourrissants. Une approche complète qui cible les irrégularités du teint tout en prenant soin de la souplesse et de l'hydratation de la peau." },
      { titre: "Bénéfices clés",
        liste: [
          "Taches visiblement atténuées : l'alpha-arbutine aide à réduire progressivement l'apparence des taches brunes et des irrégularités pigmentaires",
          "Teint plus uniforme : contribue à améliorer l'homogénéité du teint pour une peau visiblement plus harmonieuse",
          "Éclat retrouvé : aide à révéler une peau plus lumineuse et à réduire l'aspect terne du teint",
          "Hydratation & souplesse : le PCA de sodium, la glycérine et l'acide hyaluronique contribuent à maintenir l'hydratation cutanée",
          "Confort nourrissant : les huiles végétales et le beurre de murumuru apportent douceur et souplesse à la peau"
        ] },
      { titre: "Pensé pour",
        liste: [
          "Les peaux présentant des taches brunes, des marques pigmentaires ou un teint irrégulier",
          "Celles et ceux qui souhaitent cibler l'apparence des taches liées notamment au soleil ou aux anciennes imperfections, tout en conservant une routine hydratante",
          "Les peaux normales, sèches et mixtes recherchant un soin correcteur de teint"
        ] },
      { titre: "Texture & sensorialité",
        texte: "Une texture sérum légère, douce et confortable, qui s'étale facilement sur la peau. Son parfum révèle des notes boisées de vétiver et de cèdre, une touche d'agrumes, sur un fond d'amande douce et de vanille. Une expérience sensorielle délicate qui accompagne chaque application." },
      { titre: "Engagement ELKHA.B",
        liste: [
          "100% d'ingrédients d'origine naturelle",
          "23% d'ingrédients issus de l'agriculture biologique",
          "Chez ELKHA.B, nous mettons la douceur au cœur des actifs : Lumi-Bloom Arbutin accompagne votre peau vers un teint visiblement plus uniforme et lumineux, sans jamais négliger son confort"
        ] }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "lumibloom-niac-5",
      nom: "Lumi-Bloom Niacinamide 5",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Le duo Lumi-Bloom.\nLumi-Bloom Arbutin atténue l'apparence des taches et unifie le teint, tandis que Lumi-Bloom Niacinamide 5 affine le grain de peau et aide à estomper les marques d'imperfections.",
      prix: "34,90€",
      variantId: "59324243411289"
    }
  },

  // =====================================================================
  // MILKY BLOOM (nouveau soin — octobre 2026)
  // =====================================================================
  "milky-bloom": {
    nom: "Milky Bloom",
    sousTitre: "Nettoyant huile-en-lait\nCamomille · Argousier",
    details: ["150 ml", "Vegan"],
    note: "une noisette suffit",
    prix: "29,90€",
    variantId: "60079562817881",
    inci: "milky-bloom",
    avis: "Milky Bloom",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE  — Milky Bloom                        │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/milky-bloom-face-fond-site_ZOOM.png?v=1792676316",   // 📷 petite photo (routines, accord parfait) : flacon cadré comme les autres soins
      type: "diaporama",
      images: [
        // 📷 1. FLACON DE FACE (dézoomé)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/milky-bloom-face-fond-site_D_ZOOM.png?v=1792676351",
        // 📷 2. FLACON DE DOS
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/milky-bloom-dos-fond-site.png?v=1792659730",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_c46dc4f1-9601-4c60-a383-a2347b777549.png?v=1792660545"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Le matin", soin: "milky-bloom", texte: "Appliquez une noisette de Milky Bloom sur peau sèche ou humide, massez délicatement, puis rincez." },
        { moment: "Le matin", soin: "luminescence-jour", texte: "Poursuivez avec Gelée Lumi-Bloom, puis Luminescence Jour." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Terminez par Radiance Protect SPF 50." },
        { moment: "Le soir", soin: "milky-bloom", texte: "Sur peau sèche, massez délicatement une noisette de Milky Bloom sur le visage pour dissoudre le maquillage et les impuretés. Humidifiez vos mains et continuez à masser : l'huile se transforme en lait. Rincez abondamment à l'eau. Évitez le contact direct avec les yeux." },
        { moment: "Le soir", soin: "gelee-lumibloom", texte: "Poursuivez avec Gelée Lumi-Bloom pour apaiser et préparer la peau." },
        { moment: "Le soir", soin: "luminescence-nuit", texte: "Terminez par Luminescence Nuit." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Et si le démaquillage devenait le plus doux moment de votre rituel ? Sur peau sèche, Milky Bloom fond sous vos doigts et dissout le maquillage, même le plus épais, et les impuretés de la journée. Au contact de l'eau, l'huile se transforme en un lait soyeux qui se rince en un geste.\nLa peau est nette, douce et nourrie, sans tiraillement ni sensation de film. Le teint paraît frais et reposé : votre peau est prête à recevoir vos soins Bloom." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que les peaux sensibles méritent un nettoyage qui les respecte vraiment. Milky Bloom ne contient aucun agent moussant : il nettoie grâce à des huiles végétales et des émulsifiants d'origine naturelle, parmi les plus doux. Testé sous contrôle dermatologique, il convient aux peaux sensibles et délicates.\nLa camomille, l'argousier et la plaquebière, issus de l'agriculture biologique, nourrissent et réconfortent la peau pendant le nettoyage. Un geste tout en douceur, qui laisse la peau souple et lumineuse." },
      { titre: "Bénéfices clés",
        liste: [
          "Démaquillage complet : dissout le maquillage, même le plus épais, et les impuretés, en un seul geste",
          "Douceur absolue : sans agent moussant, testé sous contrôle dermatologique, il convient aux peaux sensibles",
          "Peau nourrie : les huiles végétales et les extraits de camomille, d'argousier et de plaquebière laissent la peau douce et confortable",
          "Hydratation préservée : nettoie sans déshydrater, la peau ne tiraille pas après le rinçage",
          "Teint frais : la peau est nette et fraîche, prête à révéler son éclat"
        ] },
      { titre: "Pensé pour",
        liste: [
          "Les peaux sensibles, sèches et délicates, qui tiraillent après le nettoyage",
          "Se démaquiller en douceur, même avec un maquillage épais, et le double nettoyage du soir",
          "Pour les peaux mixtes à grasses, découvrez Radiance Cleanser, notre gel nettoyant"
        ] },
      { titre: "Texture & sensorialité",
        texte: "Un gel huileux rosé, légèrement nacré, qui se transforme en lait soyeux au contact de l'eau. Son parfum délicat associe des fleurs blanches et une touche de jasmin à un bois de santal crémeux, sur un fond doux, poudré et légèrement vert." },
      { titre: "Engagement ELKHA.B",
        liste: [
          "100% d'ingrédients d'origine naturelle",
          "39% d'ingrédients issus de l'agriculture biologique",
          "Testé sous contrôle dermatologique",
          "Chez ELKHA.B, nous mettons la douceur au cœur des actifs : Milky Bloom réinvente le démaquillage des peaux sensibles, efficace, nourrissant, et d'une douceur absolue"
        ] }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "gelee-lumibloom",
      nom: "Gelée Lumi-Bloom",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Le duo douceur.\nMilky Bloom démaquille et nourrit la peau sans jamais la déshydrater, tandis que Gelée Lumi-Bloom apaise, hydrate et prépare la peau à recevoir ses soins.",
      prix: "28,90€",
      variantId: "59324234891609"
    }
  },

  // =====================================================================
  // RADIANCE CLEANSER (nouveau soin — octobre 2026)
  // =====================================================================
  "radiance-cleanser": {
    nom: "Radiance Cleanser",
    sousTitre: "Gel nettoyant éclat\nAloe vera · Mûre",
    details: ["145 ml", "Vegan"],
    note: "une noisette suffit",
    prix: "24,90€",
    variantId: "60079861465433",
    inci: "radiance-cleanser",
    avis: "Radiance Cleanser",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE  — Radiance Cleanser                  │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/radiance-cleanser-face-fond-site.png?v=1792659777",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. FLACON DE FACE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/radiance-cleanser-face-fond-site.png?v=1792659777",
        // 📷 2. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_c209338b-01b0-4427-b4a1-6d2453144ddf.png?v=1792660763",
        // 📷 3. MANNEQUIN
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/VISAGE_RADIANCE_CLEANSER.png?v=1792660603"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Le matin", soin: "radiance-cleanser", texte: "Faites mousser une noisette de Radiance Cleanser entre vos mains humides, appliquez sur le visage et massez délicatement en mouvements circulaires. Rincez abondamment à l'eau. Évitez le contact avec les yeux." },
        { moment: "Le matin", soin: "luminescence-jour", texte: "Poursuivez avec Gelée Lumi-Bloom, puis Luminescence Jour." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Terminez par Radiance Protect SPF 50." },
        { moment: "Le soir", soin: "radiance-cleanser", texte: "Nettoyez votre peau avec Radiance Cleanser, de la même façon que le matin." },
        { moment: "Le soir", soin: "gelee-lumibloom", texte: "Poursuivez avec Gelée Lumi-Bloom pour préparer la peau." },
        { moment: "Le soir", soin: "luminescence-nuit", texte: "Terminez par Luminescence Nuit." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Et si votre éclat commençait dès le nettoyage ? Sur les peaux mixtes à grasses, l'excès de sébum fait briller la peau et ternit le teint au fil de la journée. Radiance Cleanser le dissout en douceur, avec les impuretés et les traces de maquillage, dans une mousse légère et fraîche.\nAprès le rinçage, la peau est nette, débarrassée de l'excès de sébum, et reste confortable, sans jamais tirailler. Le teint paraît aussitôt plus frais, revitalisé et lumineux : la première étape de votre rituel Bloom." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'une peau grasse a besoin d'être purifiée, pas agressée. Radiance Cleanser associe des agents lavants d'origine naturelle, parmi les plus doux, à un cœur hydratant de jus d'aloe vera, de glycérine et de Sodium PCA. Il élimine l'excès de sébum et tout ce qui ternit l'éclat, sans décaper la peau ni obstruer les pores. Parce qu'une peau grasse purifiée en douceur reste confortable et équilibrée.\nEnrichi en extrait de mûre et en plantes issues de l'agriculture biologique, il révèle un teint frais et revitalisé, matin et soir." },
      { titre: "Bénéfices clés",
        liste: [
          "Éclat révélé : rafraîchit et revitalise le teint pour une peau visiblement plus lumineuse dès le premier geste",
          "Excès de sébum éliminé : débarrasse la peau du sébum en excès, des impuretés et des résidus de maquillage qui ternissent le teint et font briller la peau",
          "Hydratation préservée : le jus d'aloe vera, la glycérine et le Sodium PCA aident à maintenir l'équilibre hydrique de la peau",
          "Pores respectés : nettoie en profondeur sans obstruer les pores",
          "Confort après rinçage : la peau reste douce et confortable, sans sensation de tiraillement"
        ] },
      { titre: "Pensé pour",
        liste: [
          "Les peaux mixtes à grasses, sujettes à l'excès de sébum, aux brillances et aux pores visibles",
          "Celles et ceux qui veulent retrouver, matin et soir, une peau parfaitement nette et un teint frais et lumineux, sans dessécher la peau",
          "Convient aussi aux peaux normales",
          "Pour les peaux sèches ou sensibles, découvrez Milky Bloom, notre nettoyant huile-en-lait démaquillant"
        ] },
      { titre: "Texture & sensorialité",
        texte: "Un gel fluide et frais qui se transforme en une mousse légère au contact de l'eau. Il se rince facilement et laisse la peau propre, souple et rafraîchie, avec un parfum léger. Sa formule d'origine naturelle peut présenter une légère séparation : c'est tout à fait normal." },
      { titre: "Engagement ELKHA.B",
        liste: [
          "98% d'ingrédients d'origine naturelle",
          "10% d'ingrédients issus de l'agriculture biologique",
          "Chez ELKHA.B, nous mettons la douceur au cœur des actifs : Radiance Cleanser prouve qu'un nettoyage efficace peut révéler l'éclat de la peau tout en respectant son équilibre"
        ] }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "lumibloom-niac-5",
      nom: "Lumi-Bloom Niacinamide 5",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Le duo peau nette et lumineuse.\nRadiance Cleanser purifie la peau en douceur et révèle l'éclat du teint, tandis que Lumi-Bloom Niacinamide 5 affine visiblement les pores et aide à équilibrer les peaux mixtes à grasses.",
      prix: "34,90€",
      variantId: "59324243411289"
    }
  },

  // =====================================================================
  // LUMINESCENCE NUIT
  // =====================================================================
  "luminescence-nuit": {
    nom: "Luminescence Nuit",
    sousTitre: "Plancton marin · Collagène",
    details: ["50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "34,90€",
    variantId: "59324229943641",
    inci: "luminescence-nuit",
    avis: "Luminescence Nuit",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE  — Luminescence Nuit             │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000c27082109ec53e33d47ac1b1.png?v=1792228225",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/luminescence-nuit-1-boite-flacon_-_Copie.png?v=1792576367",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000c27082109ec53e33d47ac1b1.png?v=1792228225",
        // 📷 3. TEXTURE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEXTURE_LUMI_NUIT.png?v=1792581442",
        // 📷 4. PHOTO 4
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000cb60824390f842b82871e67a.png?v=1792579944"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Le soir", titre: "Votre sérum Bloom", texte: "Sur peau propre, appliquez Radiance C Serum ou Lumi-Bloom Niacinamide 5, selon les besoins de votre peau." },
        { moment: "Le soir", soin: "luminescence-nuit", texte: "Réchauffez une pression entre vos mains, puis enveloppez le visage de gestes lents. Laissez ses notes de nénuphar, de jasmin blanc et de vanille accompagner votre moment du soir." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "La nuit est le moment où la peau se régénère naturellement. Luminescence Nuit l'accompagne dans ce précieux instant en l'enveloppant d'une texture riche, fondante et réconfortante. Au réveil, la peau paraît plus ferme, plus souple, visiblement rebondie et parfaitement reposée." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que les plus beaux résultats s'obtiennent souvent pendant le sommeil. Luminescence Nuit associe un extrait innovant de plancton marin et du collagène à des actifs nourrissants comme le beurre de cacao, le beurre de karité, l'aloe vera et le Sodium PCA." },
      { titre: "Bénéfices clés",
        liste: [
          "Nourrit intensément la peau pendant la nuit",
          "Améliore visiblement la fermeté et la souplesse cutanée",
          "Repulpe les traits et améliore le rebond de la peau",
          "Atténue l'apparence des ridules",
          "Préserve durablement l'hydratation et le confort cutané",
          "Réveille une peau plus douce, plus ferme et naturellement lumineuse"
        ] },
      { titre: "Pensé pour",
        liste: [
          "Les peaux en perte de fermeté",
          "Les peaux sèches ou déshydratées",
          "Les peaux souhaitant préserver leur capital jeunesse",
          "Les peaux recherchant confort, nutrition et rebond au réveil"
        ] },
      { titre: "Texture & sensorialité",
        texte: "Une texture riche, fondante et enveloppante qui pénètre confortablement sans laisser de fini gras. Son délicat parfum aux notes de nénuphar, de jasmin blanc, de vanille et d'une subtile touche de menthe poivrée transforme chaque application en un véritable rituel du soir." },
      { titre: "Engagement ELKHA.B",
        liste: [
          "99% d'ingrédients d'origine naturelle",
          "Formule enrichie en plancton marin, beurre de cacao et beurre de karité",
          "Formule concentrée, pensée pour durer"
        ] }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "lumibloom-niac-5",
      nom: "Lumi-Bloom Niacinamide 5",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "L'allié idéal de Luminescence Nuit.\nEnsemble, ils accompagnent la peau tout au long de la nuit pour révéler un teint plus harmonieux, une peau plus confortable et un éclat naturel au réveil.",
      prix: "34,90€",
      variantId: "59324243411289"
    }
  },

  // =====================================================================
  // RITUEL LUMINESCENCE (Jour & Nuit)
  // =====================================================================
  "rituel-luminescence": {
    nom: "Rituel Luminescence",
    sousTitre: "Acide hyaluronique · Plancton marin · Collagène",
    details: ["Jour & Nuit", "2 × 50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "67,90€",
    variantId: "59358612750681",
    inci: "rituel-luminescence",
    avis: "Rituel Luminescence",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE  — Rituel Luminescence           │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/rituel-luminescence-carrousel-v2.png?v=1792224561",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/rituel-luminescence-1-boites-flacons_-_Copie.png?v=1792576367",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/rituel-luminescence-carrousel-v2.png?v=1792224561"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES                                         │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      titreSoins: "Vos deux soins",
      soins: ["luminescence-jour", "luminescence-nuit"],
      etapes: [
        { moment: "Le matin", soin: "luminescence-jour", texte: "Sur peau propre, après votre sérum, appliquez une pression sur le visage et le cou, en massant délicatement jusqu'à complète pénétration." },
        { moment: "Le soir",  soin: "luminescence-nuit", texte: "Sur peau propre, appliquez une pression en mouvements enveloppants, pour accompagner la peau pendant la nuit et favoriser son renouvellement naturel." }
      ],
      conclusion: "Du matin au soir, un soin pour chaque moment.\nDeux gestes simples pour une peau hydratée, rebondie et naturellement lumineuse, au réveil comme tout au long de la journée."
    },

    sections: [
      { titre: "L'expérience",
        texte: "Le Rituel Luminescence accompagne votre peau du matin jusqu'au soir pour lui offrir une hydratation continue et révéler un éclat naturel durable. Jour après jour, la peau paraît plus souple, plus rebondie et visiblement plus lumineuse." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Le Rituel Luminescence réunit deux formules complémentaires qui accompagnent la peau à chaque moment de la journée. Le matin, l'acide hyaluronique multimoléculaire hydrate à différents niveaux, tandis que le bisabolol apaise et aide à préserver le confort cutané pour une peau plus souple, fraîche et lumineuse.\nLe soir, le plancton marin, le collagène et les actifs hydratants prennent le relais pour soutenir la fermeté, le rebond et l'aspect régénéré de la peau. Ensemble, Luminescence Jour et Luminescence Nuit offrent une routine complète pour une peau intensément hydratée, apaisée, plus rebondie et naturellement éclatante au réveil comme tout au long de la journée." },
      { titre: "Bénéfices clés",
        liste: [
          "Hydrate intensément jour et nuit",
          "Révèle un glow naturel durable",
          "Améliore la souplesse et le rebond de la peau",
          "Contribue à préserver la barrière cutanée"
        ] },
      { titre: "Pensé pour",
        texte: "Toutes les peaux en manque d'hydratation, de confort ou d'éclat, souhaitant une routine complète pour révéler une peau visiblement plus lumineuse, souple et rebondie." },
      { titre: "Texture & sensorialité",
        texte: "Deux textures complémentaires, douces et enveloppantes, qui fondent délicatement sur la peau sans effet gras. Au réveil comme tout au long de la journée, la peau est confortable, fraîche et naturellement lumineuse." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\nChez ELKHA.B, chaque rituel est pensé pour accompagner la peau à chaque moment de la journée. Le Rituel Luminescence réunit deux soins complémentaires pour révéler une peau plus lumineuse, plus confortable et naturellement éclatante, jour après jour." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT (avec sélecteur automatique)               │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "radiance-protect",
      nom: "Radiance Protect SPF 50",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Le trio complet pour une peau lumineuse et protégée, du matin au soir.\nLe matin, Luminescence Jour hydrate intensément la peau, puis Radiance Protect SPF 50 l'enveloppe d'une haute protection minérale contre les UVA et les UVB.\nLe soir, Luminescence Nuit prend le relais pour nourrir, raffermir et accompagner le renouvellement naturel de la peau.\nEnsemble, ils préservent la jeunesse de la peau pour un teint plus lumineux, plus uniforme et protégé jour après jour.",
      prix: "26,90€"
      // Les versions « Sans teinte » / « Teinté » sont reprises automatiquement de la fiche Radiance Protect
    }
  },

  // =====================================================================
  // RADIANCE PROTECT SPF 50
  // =====================================================================
  "radiance-protect": {
    nom: "Radiance Protect SPF 50",
    sousTitre: "Protection minérale UVA/UVB · Haute tolérance",
    details: ["12 g", "SPF 50", "Vegan"],
    note: "",
    prix: "26,90€",
    inci: "radiance-protect",
    avis: "Radiance Protect",

    // Sélecteur : la version choisie part au panier,
    // et le diaporama glisse jusqu'à sa photo (0 = 1re photo, 1 = 2e photo…)
    choixLabel: "Choisissez votre protection",
    variantes: [
      { label: "SANS TEINTE", variantId: "59547107950937", photo: 1, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/NON_TEINTE_e8ed88e7-e4b2-4449-b381-8fd1a2487438.jpg?v=1791384282" },
      { label: "TEINTÉ",      variantId: "59547107983705", photo: 0, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_57dc7c1a-83a1-4921-8981-147ee4b8e422.jpg?v=1791384291" }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  PHOTOS DE LA FICHE — Radiance Protect (diaporama)          │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000067b4820898e2100a2336668b.png?v=1792227560",   // 📷 petite photo : stick seul
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. TEINTÉ · BOÎTE + STICK
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/radiance-protect-teinte-1-boite-flacon.png?v=1792576367",
        // 📷 2. SANS TEINTE · BOÎTE + STICK
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/radiance-protect-sans-teinte-1-boite-flacon_3ab9f413-1a53-496b-8fb8-682c464c3239.png?v=1792576775",
        // 📷 3. PHOTO D'AMBIANCE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Solaire_Bloom_au_bord_de_plage.png?v=1792579207"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Le matin", titre: "Vos soins Bloom", texte: "Appliquez vos sérums, puis votre crème Luminescence." },
        { moment: "Le matin", soin: "radiance-protect", texte: "En dernière étape, faites glisser le stick sur le visage et estompez en douceur : un voile léger, sans effet gras, qui laisse la peau lumineuse." },
        { moment: "Au cours de la journée", texte: "Renouvelez l'application, notamment après une exposition prolongée au soleil, pour préserver durablement les bénéfices de votre rituel." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Chaque journée est une nouvelle exposition pour la peau. Radiance Protect SPF 50 l'enveloppe d'un voile protecteur léger qui préserve durablement son hydratation, son confort et sa radiance naturelle.\nSa texture fondante et son format stick rendent l'application simple, agréable et intuitive. Disponible en deux teintes naturelles, il se fond harmonieusement à la peau pour un fini lumineux, naturel et confortable." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que préserver la beauté de la peau commence par la protéger chaque jour.\nRadiance Protect SPF 50 associe une protection solaire minérale à une formule hydratante qui protège efficacement des rayons UVA et UVB tout en maintenant une peau souple, confortable et lumineuse tout au long de la journée.\nGrâce à son format stick, Radiance Protect SPF 50 s'applique avec précision et simplicité. Son geste intuitif permet une application homogène, facile à estomper, pour protéger la peau sans compromis sur le confort. Idéal pour une réapplication au cours de la journée." },
      { titre: "Bénéfices clés",
        liste: [
          "Protection solaire minérale SPF 50 à large spectre UVA/UVB",
          "Aide à préserver le capital jeunesse de la peau",
          "Maintient durablement l'hydratation et le confort cutané",
          "Révèle un teint naturellement lumineux (healthy glow)",
          "Texture légère, confortable et résistante à l'eau",
          "Format stick pratique pour une application et une réapplication faciles"
        ] },
      { titre: "Pensé pour",
        liste: [
          "Les peaux recherchant une protection solaire minérale au quotidien",
          "Les peaux sensibles en quête de confort et de haute tolérance",
          "Les peaux souhaitant préserver durablement leur capital jeunesse",
          "Les peaux recherchant une hydratation confortable associée à un teint naturellement lumineux"
        ] },
      { titre: "Texture & sensorialité",
        texte: "Une texture crème légère et fondante qui glisse facilement sur la peau. Elle s'estompe en douceur, sans effet gras ni sensation collante, et laisse un fini naturellement lumineux, confortable et invisible au quotidien.\nDisponible en version teintée et non teintée." },
      { titre: "Engagement ELKHA.B",
        liste: [
          "98% d'ingrédients d'origine naturelle",
          "Protection solaire minérale à haute tolérance",
          "Disponible en deux teintes naturelles",
          "Formule concentrée, pensée pour durer"
        ] }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "radiance-serum",
      nom: "Radiance C Serum",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Le duo indispensable de votre routine du matin. Radiance C Serum révèle l'éclat naturel du teint et aide à protéger la peau des agressions oxydatives.\nRadiance Protect SPF 50 prend ensuite le relais en offrant une haute protection contre les UVA et les UVB.\nEnsemble, ils contribuent à préserver la jeunesse de la peau pour un teint plus lumineux, plus uniforme et protégé jour après jour.",
      prix: "34,90€",
      variantId: "59324259434841"
    }
  },

  // =====================================================================
  // ROUTINE ÉCLAT (fiche routine — TEST)
  // =====================================================================
  "routine-eclat": {
    nom: "Routine Éclat",
    sousTitre: "Radiance Cleanser · Radiance C Serum · Luminescence Jour",   // remplacé selon le type de peau choisi
    details: ["3 soins", "Vegan"],
    note: "",
    prix: "94€",
    avis: "Routine éclat",

    // Choix du type de peau : il change le nettoyant inclus (deux lots Shopify, même prix)
    // fiche = soin qui remplace la 1re vignette de « Votre routine » ; mention = petite ligne sous le bouton panier
    choixLabel: "Votre type de peau",
    variantes: [
      { label: "Peau mixte à grasse",    variantId: "60085332509017", photo: 0, fiche: "radiance-cleanser", mention: "Livraison offerte",
        sousTitre: "Radiance Cleanser · Radiance C Serum · Luminescence Jour",
        etape: "Faites mousser une noisette de Radiance Cleanser entre vos mains humides, massez délicatement le visage, puis rincez abondamment à l'eau." },
      { label: "Peau sèche ou sensible", variantId: "60085379694937", photo: 1, fiche: "milky-bloom",       mention: "5,70 € d'économie par rapport aux soins achetés séparément · Livraison offerte",
        sousTitre: "Milky Bloom · Radiance C Serum · Luminescence Jour",
        etape: "Sur peau sèche ou humide, massez délicatement une noisette de Milky Bloom sur le visage, puis rincez abondamment à l'eau." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Routine Éclat                       │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "diaporama",
      images: [
        // 📷 1. ROUTINE PEAU MIXTE À GRASSE (Radiance Cleanser)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/routine-eclat-peau-mixte-carrousel.png?v=1792672935",
        // 📷 2. ROUTINE PEAU SÈCHE OU SENSIBLE (Milky Bloom)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/routine-eclat-peau-sensible-carrousel.png?v=1792673116"
      ]
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  CONTENU DE LA ROUTINE                                       │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      intro: "Trois soins complémentaires pour révéler l'éclat du teint, dès le nettoyage.\nVotre nettoyant prépare la peau : Radiance Cleanser pour les peaux mixtes à grasses, Milky Bloom pour les peaux sèches ou sensibles. Radiance C Serum illumine le teint grâce à son action antioxydante, puis Luminescence Jour lui apporte hydratation et confort.\nUn rituel complet pour une peau nette, hydratée et visiblement plus lumineuse.",
      soins: ["radiance-cleanser", "radiance-serum", "luminescence-jour"],
      soinSelonChoix: 0,   // la 1re vignette suit le type de peau choisi (Radiance Cleanser ou Milky Bloom)
      moment: "Le matin",
      etapes: [
        { selonChoix: true,          texte: "" },   // le nettoyant du type de peau choisi (nom + texte « etape » de la version)
        { soin: "radiance-serum",    texte: "Sur peau propre et sèche, appliquez une pression sur le visage et le cou." },
        { soin: "luminescence-jour", texte: "Laissez pénétrer quelques instants, puis appliquez Luminescence Jour." },
        { soin: "radiance-protect",  texte: "Pour finir, protégez l'éclat de votre peau avec Radiance Protect SPF 50 (non inclus dans la routine)." }
      ],
      conclusion: "Simple à adopter, pensée pour durer.\nTrois gestes complémentaires qui trouvent naturellement leur place dans votre quotidien."
    }
  },

  // =====================================================================
  // RADIANCE EYE CREAM
  // =====================================================================
  "radiance-eye-cream": {
    nom: "Radiance Eye Cream",
    sousTitre: "Acide hyaluronique · Complexe de 3 extraits végétaux bio",
    details: ["15 ml", "Vegan"],
    note: "une petite quantité suffit",
    prix: "28,90€",
    variantId: "59324162408793",
    inci: "radiance-eye-cream",
    avis: "Radiance Eye Cream",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Radiance Eye Cream
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000a11082109a9d69ab565cdea5.png?v=1792225354",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/radiance-eye-cream-1-boite-flacon.png?v=1792576367",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000a11082109a9d69ab565cdea5.png?v=1792225354",
        // 📷 3. PHOTO / VIDÉO D'AMBIANCE (à remplacer si ancien packaging)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Votre_texte_de_paragraphe_2.jpg?v=1791055787",
        // 📷 4. PHOTO / VIDÉO D'AMBIANCE (à remplacer si ancien packaging)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Texture_creme.png?v=1791055980"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Matin et/ou soir", soin: "radiance-eye-cream", texte: "Sur peau propre, prélevez une petite quantité de crème : sa texture douce, aux notes de coton et de fleurs, se pose délicatement sur le contour des yeux." },
        { moment: "Matin et/ou soir", texte: "Tapotez du bout des doigts jusqu'à absorption, puis poursuivez avec votre routine habituelle." },
        { moment: "1 à 2 fois par semaine", titre: "Lumi-Eyes Bright & Glow", texte: "Offrez à votre regard une pause fraîcheur de 15 minutes avec les patchs, comme un véritable masque du contour des yeux." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Un soin quotidien ciblé pour réveiller les regards fatigués. Radiance Eye Cream hydrate la zone délicate du contour de l'œil, aide à atténuer l'apparence des poches et des cernes et lisse visiblement les ridules de déshydratation. Le regard paraît plus frais, reposé et lumineux." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Pour son action complète sur les principaux signes de fatigue du regard. Son complexe de 3 extraits végétaux biologiques, associé à l'acide hyaluronique de différents poids moléculaires, cible les poches, les cernes, les ridules et la déshydratation tout en préservant le confort du contour de l'œil." },
      { titre: "Bénéfices clés",
        liste: [
          "Aide à atténuer l'apparence des poches et des cernes",
          "Aide à maintenir l'hydratation du contour de l'œil",
          "Aide à lisser l'apparence des ridules de déshydratation",
          "Apporte confort et souplesse au contour de l'œil",
          "Dévoile un regard plus frais et moins marqué par les signes de fatigue"
        ] },
      { titre: "Pensé pour",
        texte: "Les contours des yeux présentant cernes, poches, ridules ou signes de déshydratation, ainsi que les regards fatigués en quête de fraîcheur et de confort." },
      { titre: "Texture & sensorialité",
        texte: "Une texture crème douce et confortable qui enveloppe délicatement le contour des yeux. Son parfum délicat aux notes de coton doux et de fleurs accompagne le geste de soin." },
      { titre: "Engagement ELKHA.B",
        texte: "Une formule 100% d'origine naturelle, dont 10% issus de l'agriculture biologique, certifiée COSMOS Natural par ECOCERT Greenlife. Un soin qui s'inscrit dans l'engagement ELKHA.B pour des formules ciblées, sensorielles et respectueuses de la peau." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT (sélecteur des 3 patchs)                   │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "bright-glow-decongestionnant",   // « Découvrir » suit la formule choisie
      nom: "Lumi-Eyes Bright & Glow",

      // 📷 PHOTO DE L'ACCORD PARFAIT
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Trio_Bright_Glow.png?v=1791272097",

      texte: "Deux gestes complémentaires pour réveiller le regard.\nRadiance Eye Cream accompagne le contour de l'œil au quotidien, tandis que Lumi-Eyes Bright & Glow lui offre un boost de fraîcheur et d'hydratation.\nUn duo complice pour un contour des yeux visiblement plus lisse, lumineux et un regard qui paraît moins marqué par la fatigue.",
      prix: "28,90€",
      choixLabel: "Choisissez vos patchs",
      variantes: [
        // 📷 image : petite photo de rappel de chaque formule
        { label: "CAFÉINE + VITAMINE C",             variantId: "59565820182873", fiche: "bright-glow-decongestionnant", image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/patchs-cafeine-vitamine-c-1-boite-flacon_-_Copie.png?v=1792576367" },
        { label: "ANTIOXYDANTS + PROVITAMINE B5",    variantId: "59565819887961", fiche: "bright-glow-anti-fatigue",     image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/patchs-antioxydants-b5-1-boite-flacon_-_Copie.png?v=1792576367" },
        { label: "NIACINAMIDE + ACIDE HYALURONIQUE", variantId: "59565820412249", fiche: "bright-glow-patch",            image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/patchs-niacinamide-1-boite-flacon_-_Copie.png?v=1792576518" }
      ]
    }
  },

  // =====================================================================
  // LUMI-EYES BRIGHT & GLOW — Niacinamide + Acide hyaluronique
  // =====================================================================
  "bright-glow-patch": {
    nom: "Lumi-Eyes Bright & Glow",
    sousTitre: "Patchs éclaircissants & lissants",
    actifs: "Niacinamide · Acide hyaluronique",
    details: [["Cernes", "Ridules"], ["7 paires", "Vegan"]],
    note: "",
    prix: "28,90€",
    variantId: "59565820412249",
    inci: "bright-glow-patch",
    avis: "Lumi-Eyes Bright & Glow Niacinamide + Acide hyaluronique",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Lumi-Eyes Bright & Glow Niacinamide + Acide hyaluronique
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000018cc82108970f45b4b30dfff.png?v=1792225964",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/patchs-niacinamide-1-boite-flacon_-_Copie.png?v=1792576518",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000018cc82108970f45b4b30dfff.png?v=1792225964",
        // 📷 3. PATCHS SEULS
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Patchs_dore.png?v=1791273110",
        // 📷 4. MANNEQUIN
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Mannequin_patchs_dore.png?v=1791273035"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "1 à 2 fois par semaine", titre: "Lumi-Eyes Bright & Glow", texte: "Sur peau propre et sèche, déposez un patch sous chaque œil : l'hydrogel frais et enveloppant épouse délicatement le contour de l'œil." },
        { moment: "1 à 2 fois par semaine", texte: "Laissez poser 15 minutes, le temps d'une vraie pause pour votre regard." },
        { moment: "1 à 2 fois par semaine", texte: "Retirez les patchs, puis faites pénétrer l'excédent de sérum par légers tapotements. Ne pas rincer." },
        { moment: "Au quotidien", soin: "radiance-eye-cream", texte: "Prolongez l'effet fraîcheur avec Radiance Eye Cream, matin et/ou soir." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Un véritable masque hydrogel pour offrir au contour des yeux 15 minutes de fraîcheur et de soin. Lumi-Eyes Bright & Glow hydrate, aide à lisser l'apparence des ridules de déshydratation et à raviver l'éclat du regard. À retirer après la pose pour découvrir un contour des yeux visiblement plus frais, doux et reposé." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Pour son effet coup de frais express et sa formule associant niacinamide, acide hyaluronique, glycérine, aloe vera et panthénol. Un concentré d'actifs hydratants et réconfortants qui prend soin de la zone délicate du contour des yeux tout en aidant à révéler un regard plus lumineux et uniforme." },
      { titre: "Bénéfices clés",
        liste: [
          "Aide à illuminer et unifier le contour des yeux",
          "Apporte une hydratation multi-niveaux",
          "Aide à repulper l'apparence des ridules liées à la sécheresse",
          "Aide à apaiser et adoucir le contour des yeux",
          "Dévoile un regard plus frais et moins marqué par la fatigue"
        ] },
      { titre: "Pensé pour",
        texte: "Tous les types de peau, y compris les peaux sèches, sensibles et matures. Idéal lorsque le contour des yeux paraît fatigué, déshydraté, terne ou marqué par de fines ridules." },
      { titre: "Texture & sensorialité",
        texte: "Des patchs hydrogel frais et enveloppants, inspirés des rituels K-beauty, qui épousent délicatement le contour de l'œil pendant la pose. Sans parfum." },
      { titre: "Engagement ELKHA.B",
        texte: "Une formule sans parfum et testée sous contrôle dermatologique, pensée pour convenir également aux peaux sensibles. Des patchs conçus selon des procédés respectueux de l'environnement et des ressources naturelles, dans une démarche de formulation responsable." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "radiance-eye-cream",
      nom: "Radiance Eye Cream",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Prolongez l'effet fraîcheur au quotidien.\nAprès la parenthèse express des patchs Lumi-Eyes Bright & Glow, Radiance Eye Cream prend le relais jour après jour pour hydrater, lisser et illuminer le contour de l'œil.\nLe duo idéal pour préserver un regard frais, lumineux et visiblement moins marqué par les signes de fatigue.",
      prix: "28,90€",
      variantId: "59324162408793"
    }
  },

  // =====================================================================
  // LUMI-EYES BRIGHT & GLOW — Caféine + Vitamine C
  // =====================================================================
  "bright-glow-decongestionnant": {
    nom: "Lumi-Eyes Bright & Glow",
    sousTitre: "Patchs éclat décongestionnants",
    actifs: "Caféine · Vitamine C",
    details: [["Poches", "Teint terne"], ["7 paires", "Vegan"]],
    note: "",
    prix: "28,90€",
    variantId: "59565820182873",
    inci: "bright-glow-decongestionnant",
    avis: "Lumi-Eyes Bright & Glow Caféine + Vitamine C",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Lumi-Eyes Bright & Glow Caféine + Vitamine C
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000426481f48f8efd886f65ba45.png?v=1792225964",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/patchs-cafeine-vitamine-c-1-boite-flacon_-_Copie.png?v=1792576367",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000426481f48f8efd886f65ba45.png?v=1792225964",
        // 📷 3. PATCHS SEULS
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Patchs_gris.png?v=1791273110",
        // 📷 4. MANNEQUIN
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Mannequin_patchs_gris.png?v=1791273034"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Selon vos besoins", titre: "Lumi-Eyes Bright & Glow", texte: "Sur peau propre et sèche, déposez un patch sous chaque œil : l'hydrogel frais, sans parfum, épouse le contour de l'œil et apporte une sensation immédiate de fraîcheur." },
        { moment: "Selon vos besoins", texte: "Laissez poser 15 minutes, le temps d'une vraie pause pour votre regard." },
        { moment: "Selon vos besoins", texte: "Retirez les patchs, puis faites pénétrer l'excédent de sérum par légers tapotements. Ne pas rincer." },
        { moment: "Au quotidien", soin: "radiance-eye-cream", texte: "Prolongez l'effet fraîcheur avec Radiance Eye Cream, matin et/ou soir." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Offrez à votre regard une pause fraîcheur. Ces patchs hydrogel légers épousent délicatement le contour des yeux pour apporter une sensation immédiate de confort. Leur texture rafraîchissante accompagne un véritable moment de détente, tandis que leur formule aide à revitaliser le regard fatigué." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce que le contour des yeux mérite lui aussi un soin ciblé. L'association de la caféine et de la vitamine C aide à décongestionner et à raviver l'éclat du regard, tandis que le panthénol et la glycérine contribuent à maintenir la peau hydratée et apaisée. Un geste simple pour retrouver un regard visiblement plus frais, sans multiplier les étapes." },
      { titre: "Bénéfices clés",
        liste: [
          "Décongestionne le regard fatigué — la caféine aide à réduire l'apparence des poches",
          "Ravive l'éclat — la vitamine C contribue à illuminer le contour des yeux et atténuer le teint terne",
          "Hydrate et apaise — le panthénol et la glycérine maintiennent l'hydratation et le confort"
        ] },
      { titre: "Pensé pour",
        texte: "Les regards fatigués, les poches et les contours des yeux en manque d'éclat. Idéal pour celles et ceux qui recherchent un soin ponctuel rafraîchissant, hydratant et facile à intégrer à leur routine." },
      { titre: "Texture & sensorialité",
        texte: "Une texture hydrogel fraîche, légère et souple, qui épouse le contour des yeux. Sans parfum, elle offre une sensation de fraîcheur et de confort pendant la pose, sans nécessiter de rinçage." },
      { titre: "Engagement ELKHA.B",
        texte: "• Testé dermatologiquement\n• Végan\n• Sans parfum\nChez ELKHA.B, nous privilégions des formules ciblées qui associent performance et confort, sans superflu. Ces patchs sont formulés avec de la caféine, de la vitamine C, du panthénol et de la glycérine pour répondre aux besoins du contour des yeux." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "radiance-eye-cream",
      nom: "Radiance Eye Cream",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Prolongez l'effet fraîcheur au quotidien.\nAprès la parenthèse express des patchs Lumi-Eyes Bright & Glow, Radiance Eye Cream prend le relais jour après jour pour hydrater, lisser et illuminer le contour de l'œil.\nLe duo idéal pour préserver un regard frais, lumineux et visiblement moins marqué par les signes de fatigue.",
      prix: "28,90€",
      variantId: "59324162408793"
    }
  },

  // =====================================================================
  // LUMI-EYES BRIGHT & GLOW — Antioxydants + Provitamine B5
  // =====================================================================
  "bright-glow-anti-fatigue": {
    nom: "Lumi-Eyes Bright & Glow",
    sousTitre: "Patchs anti-fatigue réconfortants",
    actifs: "Antioxydants · Provitamine B5",
    details: [["Fatigue", "Sécheresse", "Inconfort"], ["7 paires", "Vegan"]],
    note: "",
    prix: "28,90€",
    variantId: "59565819887961",
    inci: "bright-glow-anti-fatigue",
    avis: "Lumi-Eyes Bright & Glow Antioxydants + Provitamine B5",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Lumi-Eyes Bright & Glow Antioxydants + Provitamine B5
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000027bc81f4ab57858a2c77cf29.png?v=1792225964",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/patchs-antioxydants-b5-1-boite-flacon_-_Copie.png?v=1792576367",
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_0000000027bc81f4ab57858a2c77cf29.png?v=1792225964",
        // 📷 3. PATCHS SEULS
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Patchs_orange.png?v=1791273110",
        // 📷 4. MANNEQUIN
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Mannequin_patchs_orange.png?v=1791273034"
      ]
    },
    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  LE RITUEL EN ÉTAPES (affiché après l'accordéon)             │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      etapes: [
        { moment: "Selon vos besoins", titre: "Lumi-Eyes Bright & Glow", texte: "Sur peau propre et sèche, déposez un patch sous chaque œil : l'hydrogel frais épouse le contour de l'œil, porté par un parfum floral léger aux notes végétales." },
        { moment: "Selon vos besoins", texte: "Laissez poser 15 minutes, le temps d'une vraie pause pour votre regard." },
        { moment: "Selon vos besoins", texte: "Retirez les patchs, puis faites pénétrer l'excédent de sérum par légers tapotements. Ne pas rincer." },
        { moment: "Au quotidien", soin: "radiance-eye-cream", texte: "Prolongez l'effet fraîcheur avec Radiance Eye Cream, matin et/ou soir." }
      ]
    },

    sections: [
      { titre: "L'expérience",
        texte: "Offrez à votre regard un moment de fraîcheur et de détente. Ces patchs hydrogel épousent délicatement le contour des yeux pour apporter une sensation de confort et de légèreté. Leur formule associe des antioxydants et des actifs hydratants pour revitaliser cette zone délicate et lui donner un aspect plus reposé." },
      { titre: "Pourquoi vous allez l'aimer",
        texte: "Parce qu'un regard fatigué mérite un soin ciblé, sans multiplier les étapes. Ces patchs associent des antioxydants, du panthénol et de la glycérine dans une formule hydrogel rafraîchissante. En 15 minutes, ils offrent une pause hydratante et réconfortante, idéale pour retrouver un contour des yeux frais et confortable." },
      { titre: "Bénéfices clés",
        liste: [
          "Rafraîchit le regard fatigué — la texture hydrogel aide à retrouver un regard visiblement plus reposé",
          "Hydrate et apaise — le panthénol et la glycérine maintiennent l'hydratation et le confort",
          "Aide à préserver la peau — les antioxydants protègent du stress oxydatif"
        ] },
      { titre: "Pensé pour",
        texte: "Les contours des yeux fatigués, en manque de fraîcheur ou de confort. Idéal pour celles et ceux qui recherchent un soin ponctuel hydratant et revitalisant, à intégrer facilement à leur routine." },
      { titre: "Texture & sensorialité",
        texte: "Une texture hydrogel fraîche, souple et légère, qui épouse délicatement le contour des yeux. Son parfum floral frais et léger, aux subtiles notes végétales, accompagne ce moment de détente." },
      { titre: "Engagement ELKHA.B",
        texte: "• Testé dermatologiquement\n• Végan\n• Sans noix\nChez ELKHA.B, nous privilégions des formules ciblées qui associent performance et confort, sans superflu. Ces patchs réunissent des antioxydants et des actifs hydratants dans un soin pensé pour revitaliser le contour des yeux tout en respectant sa délicatesse." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "radiance-eye-cream",
      nom: "Radiance Eye Cream",

      // 📷 PHOTO DE L'ACCORD PARFAIT : la 1re photo de la fiche associée est utilisée automatiquement

      texte: "Prolongez l'effet fraîcheur au quotidien.\nAprès la parenthèse express des patchs Lumi-Eyes Bright & Glow, Radiance Eye Cream prend le relais jour après jour pour hydrater, lisser et illuminer le contour de l'œil.\nLe duo idéal pour préserver un regard frais, lumineux et visiblement moins marqué par les signes de fatigue.",
      prix: "28,90€",
      variantId: "59324162408793"
    }
  },

  // =====================================================================
  // ROUTINE HYDRATATION
  // =====================================================================
  "routine-hydratation": {
    nom: "Routine Hydratation",
    sousTitre: "Gelée Lumi-Bloom · Luminescence Jour",
    details: ["2 soins", "Vegan"],
    note: "",
    prix: "63€",
    variantId: "59358151344473",
    avis: "Routine hydratation",

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Routine Hydratation
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "diaporama",
      mobileSeulement: [2],   // la photo 2 ne s'affiche que sur téléphone
      images: [
        // 📷 1. PHOTO DE LA ROUTINE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/routine-hydratation-carrousel.png?v=1792569443"
      ]
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  CONTENU DE LA ROUTINE                                       │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      intro: "Deux soins complémentaires pour renforcer l'hydratation et préserver le confort de la peau au quotidien.\nLa Gelée Lumi-Bloom aux prébiotiques aide à soutenir l'équilibre de la peau tout en lui apportant une première dose d'hydratation, tandis que Luminescence Jour complète le rituel en aidant à maintenir une peau souple et confortable.\nUn rituel simple pour une peau hydratée, équilibrée et confortable.",
      soins: ["gelee-lumibloom", "luminescence-jour"],
      moment: "Le matin",
      etapes: [
        { soin: "gelee-lumibloom", texte: "Sur peau propre, appliquez une pression de Gelée Lumi-Bloom sur le visage et le cou." },
        { soin: "luminescence-jour", texte: "Laissez pénétrer quelques instants, puis appliquez Luminescence Jour pour compléter l'hydratation." }
      ],
      conclusion: "L'essentiel, simplement.\nDeux gestes complémentaires pour accompagner l'équilibre et le confort de la peau jour après jour."
    }
  },

  // =====================================================================
  // ROUTINE FERMETÉ (anciennement « Routine Anti-âge » — l'identifiant routine-anti-age reste le même)
  // =====================================================================
  "routine-anti-age": {
    nom: "Routine Fermeté",
    sousTitre: "Luminescence Jour · Radiance Protect SPF 50 · Luminescence Nuit",
    details: ["3 soins", "Vegan"],
    note: "",
    prix: "93€",
    avis: "Routine fermeté",

    choixLabel: "Choisissez votre protection",
    photosTeintes: "radiance-protect",   // petites photos de rappel reprises de cette fiche
    variantes: [
      { label: "SANS TEINTE", variantId: "59547258618201", photo: 1, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/NON_TEINTE_e8ed88e7-e4b2-4449-b381-8fd1a2487438.jpg?v=1791384282" },
      { label: "TEINTÉ",      variantId: "59547258650969", photo: 0, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_57dc7c1a-83a1-4921-8981-147ee4b8e422.jpg?v=1791384291" }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Routine Fermeté 
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "diaporama",
      mobileSeulement: [2],   // la photo 2 ne s'affiche que sur téléphone
      images: [
        // 📷 1. PHOTO DE LA ROUTINE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/routine-fermete-carrousel-v2.png?v=1792569443"
      ]
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  CONTENU DE LA ROUTINE                                       │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      intro: "Une routine complète pour agir au quotidien sur les signes du vieillissement cutané.\nLuminescence Jour, avec son acide hyaluronique multimoléculaire, agit à différents niveaux de la peau pour la repulper.\nRadiance Protect SPF 50 offre une protection à large spectre contre les UVA et les UVB, responsables du photovieillissement.\nLuminescence Nuit, enrichie en collagène et en plancton marin, accompagne la peau durant sa régénération nocturne pour lui offrir un aspect plus lisse au réveil.\nJour après jour, la peau paraît plus rebondie, repulpée et visiblement plus lisse.",
      soins: ["luminescence-jour", "radiance-protect", "luminescence-nuit"],
      etapes: [
        { moment: "Le matin", soin: "luminescence-jour", texte: "Sur peau propre, appliquez une pression de Luminescence Jour sur le visage et le cou." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Terminez par Radiance Protect SPF 50, en dernière étape de votre routine." },
        { moment: "Le soir", soin: "luminescence-nuit", texte: "Sur peau propre, appliquez une pression de Luminescence Nuit." }
      ],
      conclusion: "Prendre soin aujourd'hui, préserver demain.\nUn rituel quotidien qui accompagne la peau à chaque moment clé, du matin jusqu'à la nuit."
    }
  },

  // =====================================================================
  // ROUTINE ÉQUILIBRE
  // =====================================================================
  "routine-equilibre": {
    nom: "Routine Équilibre",
    sousTitre: "Lumi-Bloom Niacinamide 5 · Gelée Lumi-Bloom · Lumi-Veil CC Cream",
    details: ["3 soins", "Vegan"],
    note: "",
    prix: "90€",
    avis: "Routine équilibre",

    choixLabel: "Choisissez votre teinte",
    photosTeintes: "lumiveil-cc-cream",   // petites photos de rappel reprises de cette fiche
    variantes: [
      { label: "N°B1 CLAIR", variantId: "59358176477529", photo: 0, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_CLAIR_c06c07dc-44a2-4d5d-b942-164990d69865.jpg?v=1791308948" },
      { label: "N°B2 MOYEN", variantId: "59358197186905", photo: 1, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_MOYENNE_ad0953ad-5a17-4603-b5ef-3c78bd357ffe.jpg?v=1791308962" },
      { label: "N°B3 HÂLÉ",  variantId: "59358197219673", photo: 2, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/HALE_a966c14d-9b78-4dc7-a661-f8a1cf5ab0c4.jpg?v=1791308743" },
      { label: "N°B4 FONCÉ", variantId: "59358197252441", photo: 3, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/FONCE_5b3e6189-9008-4c99-a85a-dbef815da88f.jpg?v=1791308970" }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Routine Équilibre
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "diaporama",
      mobileSeulement: [2],   // la photo 2 ne s'affiche que sur téléphone
      images: [
        // 📷 1. PHOTO DE LA ROUTINE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/routine-equilibre-carrousel.png?v=1792569443"
      ]
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  CONTENU DE LA ROUTINE                                       │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      intro: "Trois soins complémentaires pour retrouver une peau plus équilibrée, apaisée et confortable.\nLumi-Bloom Niacinamide 5 aide à réguler l'excès de sébum, à améliorer l'apparence des pores et à uniformiser le teint.\nLa Gelée Lumi-Bloom aux prébiotiques soutient l'équilibre de la barrière cutanée, hydrate et aide à apaiser les sensations d'inconfort.\nLumi-Veil CC Cream SPF 30 complète la routine en unifiant naturellement le teint tout en apportant confort et protection au quotidien.\nJour après jour, la peau paraît plus nette, apaisée et équilibrée, le teint plus uniforme.",
      soins: ["lumibloom-niac-5", "gelee-lumibloom", "lumiveil-cc-cream"],
      etapes: [
        { moment: "Le matin", soin: "lumibloom-niac-5", texte: "Sur peau propre, appliquez une pression sur le visage et laissez pénétrer 1 à 2 minutes." },
        { moment: "Le matin", soin: "lumiveil-cc-cream", texte: "Poursuivez avec votre crème de jour, puis terminez par Lumi-Veil CC Cream SPF 30." },
        { moment: "Le soir", soin: "gelee-lumibloom", texte: "Sur peau propre, appliquez une pression de Gelée Lumi-Bloom sur le visage et laissez pénétrer quelques minutes avant votre crème de nuit." }
      ],
      conclusion: "L'équilibre, jour après jour.\nUn rituel du matin au soir pour une peau plus nette, apaisée et un teint plus uniforme."
    }
  },

  // =====================================================================
  // ROUTINE TEINT & PROTECTION
  // =====================================================================
  "routine-teint-protection": {
    nom: "Routine Teint & Protection",
    sousTitre: "Radiance C Serum · Lumi-Veil CC Cream",
    details: ["2 soins", "Vegan"],
    note: "",
    prix: "61€",
    avis: "Routine teint & protection",

    choixLabel: "Choisissez votre teinte",
    photosTeintes: "lumiveil-cc-cream",   // petites photos de rappel reprises de cette fiche
    variantes: [
      { label: "N°B1 CLAIR", variantId: "59358330847577", photo: 0, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_CLAIR_c06c07dc-44a2-4d5d-b942-164990d69865.jpg?v=1791308948" },
      { label: "N°B2 MOYEN", variantId: "59358346903897", photo: 1, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_MOYENNE_ad0953ad-5a17-4603-b5ef-3c78bd357ffe.jpg?v=1791308962" },
      { label: "N°B3 HÂLÉ",  variantId: "59358346936665", photo: 2, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/HALE_a966c14d-9b78-4dc7-a661-f8a1cf5ab0c4.jpg?v=1791308743" },
      { label: "N°B4 FONCÉ", variantId: "59358346969433", photo: 3, image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/FONCE_5b3e6189-9008-4c99-a85a-dbef815da88f.jpg?v=1791308970" }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Routine Teint & Protection
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "diaporama",
      mobileSeulement: [2],   // la photo 2 ne s'affiche que sur téléphone
      images: [
        // 📷 1. PHOTO DE LA ROUTINE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/routine-teint-protection-carrousel.png?v=1792569442"
      ]
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  CONTENU DE LA ROUTINE                                       │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      intro: "Deux soins complémentaires pour protéger la peau et préserver un teint lumineux au quotidien.\nRadiance C Serum, grâce à l'action antioxydante de la vitamine C, aide à protéger la peau du stress oxydatif lié aux agressions extérieures et à raviver son éclat.\nLumi-Veil CC Cream SPF 30 renforce la protection quotidienne face aux UVA et aux UVB, tout en soutenant la barrière cutanée et en unifiant naturellement le teint.\nUne peau mieux protégée, un teint plus uniforme et un glow naturellement lumineux.",
      soins: ["radiance-serum", "lumiveil-cc-cream"],
      moment: "Le matin",
      etapes: [
        { soin: "radiance-serum", texte: "Sur peau propre, appliquez une pression de Radiance C Serum et laissez pénétrer 1 à 2 minutes. Utilisez-le seul ou complétez avec une crème de jour." },
        { soin: "lumiveil-cc-cream", texte: "Terminez avec Lumi-Veil CC Cream SPF 30 : appliquez-la localement pour estomper les petites imperfections, ou sur l'ensemble du visage pour unifier le teint et révéler un fini naturellement lumineux. Elle peut également servir de base de maquillage." }
      ],
      conclusion: "L'éclat commence par une peau bien protégée.\nUn teint lumineux, uniforme et naturellement sublimé."
    }
  },

  // =====================================================================
  // ROUTINE REGARD
  // =====================================================================
  "routine-regard": {
    nom: "Routine Regard",
    sousTitre: "Radiance Eye Cream · Lumi-Eyes Bright & Glow",
    details: ["2 soins", "Vegan"],
    note: "",
    prix: "57€",
    avis: "Routine regard",

    choixLabel: "Choisissez votre formule",
    variantes: [
      { label: "CAFÉINE + VITAMINE C",             variantId: "59358402216281", fiche: "bright-glow-decongestionnant", image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/patchs-cafeine-vitamine-c-1-boite-flacon_-_Copie.png?v=1792576367" },
      { label: "ANTIOXYDANTS + PROVITAMINE B5",    variantId: "59358466703705", fiche: "bright-glow-anti-fatigue",     image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/patchs-antioxydants-b5-1-boite-flacon_-_Copie.png?v=1792576367" },
      { label: "NIACINAMIDE + ACIDE HYALURONIQUE", variantId: "59358466736473", fiche: "bright-glow-patch",            image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/patchs-niacinamide-1-boite-flacon_-_Copie.png?v=1792576518" }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Routine Regard
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "diaporama",
      mobileSeulement: [2],   // la photo 2 ne s'affiche que sur téléphone
      images: [
        // 📷 1. PHOTO DE LA ROUTINE
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/routine-regard-carrousel.png?v=1792569442"
      ]
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  CONTENU DE LA ROUTINE                                       │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      intro: "Deux soins complémentaires pour réveiller le regard et prendre soin du contour de l'œil au quotidien.\nLumi-Eyes Bright & Glow apporte un véritable coup de frais au regard : les patchs hydratent, aident à atténuer les signes de fatigue et redonnent de l'éclat au contour de l'œil.\nRadiance Eye Cream prend le relais au quotidien pour hydrater, lisser l'apparence des ridules et préserver un regard lumineux.\nUn duo ciblé pour un contour des yeux hydraté, défatigué et visiblement plus lumineux.",
      soins: ["radiance-eye-cream", "bright-glow-decongestionnant"],
      soinSelonChoix: 1,   // cette vignette suit la formule choisie
      etapes: [
        { moment: "Au quotidien", soin: "radiance-eye-cream", texte: "Appliquez une petite quantité sur le contour des yeux et tapotez délicatement jusqu'à absorption. Utilisez-la comme un sérum regard, avant votre crème de jour et les étapes suivantes de votre routine." },
        { moment: "1 à 2 fois par semaine", titre: "Lumi-Eyes Bright & Glow", texte: "Sur peau propre, appliquez les patchs et laissez poser 15 minutes, comme un véritable masque du contour de l'œil. Retirez-les, puis faites pénétrer délicatement l'excédent de sérum." }
      ],
      conclusion: "Réveiller le regard, révéler sa lumière.\nUn regard frais, reposé et naturellement lumineux, jour après jour."
    }
  }

};
