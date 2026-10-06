// =====================================================================
// ELKHA.B — Catalogue des fiches produits
// Chaque fiche s'ouvre en panneau, par-dessus la page.
//
// MODE D'EMPLOI
// - Pour modifier un texte : changer uniquement ce qui est entre guillemets "…".
// - Pour changer une photo ou une vidéo : chercher (Ctrl + F) le repère
//   📷  puis remplacer le lien entre guillemets par le nouveau lien Shopify.
// - Ne pas supprimer les guillemets, les virgules ni les accolades { }.
// =====================================================================
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
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. PHOTO PRODUIT
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Radiance_C_Serum_2.png?v=1791129774",
        // 📷 2. PHOTO 2
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Goutte_de_creme_jaune_brillante.png?v=1791129397",
        // 📷 3. PHOTO 3
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Design_sans_titre_7.jpg?v=1791129452"
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
      { titre: "Votre rituel",
        texte: "Appliquez une pression sur peau propre, matin et/ou soir, avant la Crème Luminescence. Le matin, complétez votre routine avec Radiance Protect SPF 50 afin de préserver durablement la radiance de la peau et de la protéger des agressions quotidiennes." },
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

      // 📷 PHOTO DE L'ACCORD PARFAIT
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Luminescence_jour_1f7cd66e-6693-43ff-91c7-ac246a40bb05.png?v=1791131916",

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
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. PHOTO PRODUIT
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Luminescence_Jour_2.png?v=1791129774",
        // 📷 2. VIDÉO TEXTURE
        "https://cdn.shopify.com/videos/c/o/v/794796597ae04672834ed23ca6aa9b51.mp4",
        // 📷 3. PHOTO 3
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000abd88243ba1913179c7d8e92.png?v=1791130040"
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
      { titre: "Votre rituel",
        texte: "Appliquez chaque matin sur une peau propre, après le Radiance C Serum, puis appliquez Luminescence Jour pour hydrater durablement la peau et révéler tout son éclat." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\nChez ELKHA.B, chaque formule est pensée pour révéler la beauté naturelle de votre peau grâce à des actifs soigneusement sélectionnés. Luminescence Jour associe efficacité, sensorialité et confort dans un soin concentré conçu pour accompagner votre peau jour après jour." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "gelee-lumibloom",
      nom: "Gelée Lumi-Bloom",

      // 📷 PHOTO DE L'ACCORD PARFAIT
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Publicite_minimaliste_pour_serum_eclat.png?v=1791131937",

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
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. PHOTO PRODUIT
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Gelee_Lumi-bloom_2.png?v=1791129773",
        // 📷 2. VIDÉO TEXTURE
        "https://cdn.shopify.com/videos/c/o/v/f39e74d85032496689b66ce6fa09cf3a.mp4",
        // 📷 3. PHOTO 3
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000454c8210a827f69035d58538.png?v=1791030948"
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
      { titre: "Votre rituel",
        texte: "Appliquez une pression matin et/ou soir sur une peau propre avant votre sérum. La Gelée Lumi-Bloom prépare la peau, optimise le confort cutané et accompagne chaque étape de votre routine ELKHA.B." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\nChez ELKHA.B, nous croyons qu'une peau éclatante commence par une peau équilibrée. La Gelée LumiBloom associe des actifs soigneusement sélectionnés pour renforcer la barrière cutanée, préserver le microbiome et révéler durablement l'éclat naturel de votre peau." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "radiance-serum",
      nom: "Radiance C Serum",

      // 📷 PHOTO DE L'ACCORD PARFAIT
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Radiance_C_Serum_1.png?v=1791131947",

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
      { label: "N°B1 CLAIR", variantId: "59361531560281", photo: 1 },
      { label: "N°B2 MOYEN", variantId: "59361531593049", photo: 2 },
      { label: "N°B3 HÂLÉ",  variantId: "59361531625817", photo: 3 },
      { label: "N°B4 FONCÉ", variantId: "59361531658585", photo: 4 }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  PHOTOS DE LA FICHE — Lumi-Veil CC Cream (diaporama)        │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. PHOTO PRODUIT  (n°0 pour le sélecteur)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Lumi-Veil.png?v=1791129774",
        // 📷 2. TEINTE CLAIR  (n°1 pour le sélecteur)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_CLAIR_c06c07dc-44a2-4d5d-b942-164990d69865.jpg?v=1789055825",
        // 📷 3. TEINTE MOYEN  (n°2 pour le sélecteur)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_MOYENNE_c5c7f861-cd6f-46d6-bdb6-996ebbd5fe01.jpg?v=1789055754",
        // 📷 4. TEINTE HÂLÉ  (n°3 pour le sélecteur)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/HALE_96fcd036-81c4-4cf6-b189-370d27d0dc2d.jpg?v=1789055767",
        // 📷 5. TEINTE FONCÉ  (n°4 pour le sélecteur)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/FONCE_5b3e6189-9008-4c99-a85a-dbef815da88f.jpg?v=1789055785"
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
      { titre: "Votre rituel",
        texte: "Appliquez chaque matin en dernière étape de votre routine, directement sur la peau, puis estompez du bout des doigts ou au pinceau. Retouchez au cours de la journée selon vos envies." },
      { titre: "Engagement ELKHA.B",
        texte: "• 98% d'ingrédients d'origine naturelle\nChez ELKHA.B, chaque formule est pensée pour offrir des résultats visibles tout en respectant l'équilibre naturel de la peau." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT                                            │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "luminescence-jour",
      nom: "Luminescence Jour",

      // 📷 PHOTO DE L'ACCORD PARFAIT
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Luminescence_jour_1f7cd66e-6693-43ff-91c7-ac246a40bb05.png?v=1791131916",

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
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. PHOTO PRODUIT
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/LUMI-BLOOM_Niacinamide_5.png?v=1791129774",
        // 📷 2. VIDÉO TEXTURE
        "https://cdn.shopify.com/videos/c/o/v/2306ccc5a1554bcea8c47c32c12f29be.mp4",
        // 📷 3. PHOTO 3
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Flacon_de_soin_Lumi-Bloom_sur_verre_reflechissant.png?v=1791131037"
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
      { titre: "Votre rituel",
        texte: "Appliquez une pression sur peau propre, matin et/ou soir, avant la Crème Luminescence. Pour une routine Bloom complète, associez-le au Radiance C Serum puis à la Crème Luminescence." },
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

      // 📷 PHOTO DE L'ACCORD PARFAIT
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Gamme_CC_Cream_Lumi_Veil_SPF30.png?v=1791131975",

      texte: "L'alliance de Lumi-Bloom Niacinamide 5 et de Lumi-Veil CC Cream SPF 30 révèle un teint plus uniforme, des pores visiblement estompés et une peau naturellement lumineuse.\nLe gel perfecteur prépare la peau, tandis que Lumi-Veil unifie, protège et sublime l'éclat pour un effet glow frais et naturel, sans effet gras.",
      prix: "26,90€"
      // Les teintes et leurs identifiants sont repris automatiquement de la fiche Lumi-Veil CC Cream
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
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. PHOTO PRODUIT
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Luminescence_Nuit_2.png?v=1791129775",
        // 📷 2. VIDÉO TEXTURE
        "https://cdn.shopify.com/videos/c/o/v/8aa68ee794404b48a3a17fad02c2610a.mp4",
        // 📷 3. PHOTO 3
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Elegance_skincare_sur_velours_rose.png?v=1791130417"
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
      { titre: "Votre rituel",
        texte: "Appliquez une pression sur peau propre chaque soir, après votre sérum Bloom. Pour une routine complète, associez-la au Radiance C Serum ou à Lumi-Bloom Niacinamide 5 selon les besoins de votre peau." },
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

      // 📷 PHOTO DE L'ACCORD PARFAIT
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Niacinamide_5.png?v=1791132000",

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
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. PHOTO PRODUIT
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Elegance_skincare_sur_fond_creme.png?v=1791131104",
        // 📷 2. VIDÉO TEXTURE (Luminescence Jour)
        "https://cdn.shopify.com/videos/c/o/v/794796597ae04672834ed23ca6aa9b51.mp4",
        // 📷 3. PHOTO 3
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Design_sans_titre_24.png?v=1791131395"
      ]
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
      { titre: "Votre rituel",
        texte: "Le matin, appliquez Luminescence Jour sur une peau propre après le Radiance C Serum. Le soir, appliquez Luminescence Nuit pour accompagner la peau pendant la nuit et favoriser son renouvellement naturel. Ensemble, ils offrent une routine complète pour hydrater, nourrir et révéler durablement l'éclat de votre peau." },
      { titre: "Engagement ELKHA.B",
        texte: "• 99% d'ingrédients d'origine naturelle\nChez ELKHA.B, chaque rituel est pensé pour accompagner la peau à chaque moment de la journée. Le Rituel Luminescence réunit deux soins complémentaires pour révéler une peau plus lumineuse, plus confortable et naturellement éclatante, jour après jour." }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🤝  L'ACCORD PARFAIT (avec sélecteur automatique)               │
    // └─────────────────────────────────────────────────────────────────┘
    accord: {
      fiche: "radiance-protect",
      nom: "Radiance Protect SPF 50",

      // 📷 PHOTO DE L'ACCORD PARFAIT
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Radiance_Protect_1.png?v=1791132013",

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
      { label: "SANS TEINTE", variantId: "59547107950937", photo: 1 },
      { label: "TEINTÉ",      variantId: "59547107983705", photo: 2 }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  PHOTOS DE LA FICHE — Radiance Protect (diaporama)          │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "diaporama",   // photos et vidéos de texture (.mp4), dans l'ordre du défilement
      images: [
        // 📷 1. PHOTO PRODUIT  (n°0 pour le sélecteur)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Radiance_Protect_2.png?v=1791129774",
        // 📷 2. SANS TEINTE  (n°1 pour le sélecteur)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/NON_TEINTE_e8ed88e7-e4b2-4449-b381-8fd1a2487438.jpg?v=1790155246",
        // 📷 3. TEINTÉ  (n°2 pour le sélecteur)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_0f2cdd3d-9968-440f-947d-23df50887b8d.jpg?v=1790154976"
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
      { titre: "Votre rituel",
        texte: "Appliquez Radiance Protect SPF 50 chaque matin en dernière étape de votre routine Bloom, après vos sérums et votre Crème Luminescence.\nRenouvelez l'application au cours de la journée, notamment après une exposition prolongée au soleil, afin de préserver durablement les bénéfices de votre rituel Bloom." },
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

      // 📷 PHOTO DE L'ACCORD PARFAIT
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Radiance_C_Serum_1.png?v=1791131947",

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
    sousTitre: "Radiance C Serum · Luminescence Jour · Lumi-Veil CC Cream",
    details: ["3 soins", "Vegan"],
    note: "",
    prix: "96€",
    avis: "Routine éclat",

    // Sélecteur de teinte (teinte de la CC Cream incluse dans la routine)
    // La petite photo de rappel reprend les photos de teintes de la fiche Lumi-Veil CC Cream
    choixLabel: "Choisissez votre teinte",
    photosTeintes: "lumiveil-cc-cream",
    variantes: [
      { label: "N°B1 CLAIR", variantId: "59324360720729", photo: 1 },
      { label: "N°B2 MOYEN", variantId: "59358027972953", photo: 2 },
      { label: "N°B3 HÂLÉ",  variantId: "59358028005721", photo: 3 },
      { label: "N°B4 FONCÉ", variantId: "59358028038489", photo: 4 }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  DIAPORAMA DE LA FICHE — Routine Éclat                       │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "diaporama",
      images: [
        // 📷 1. PHOTO PRODUIT (provisoire : photo du carrousel)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Routine_eclat_2.png?v=1791127339"
      ]
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 🌿  CONTENU DE LA ROUTINE                                       │
    // └─────────────────────────────────────────────────────────────────┘
    routine: {
      intro: "Trois soins complémentaires pour révéler l'éclat du teint, préserver l'hydratation de la peau et l'unifier au quotidien.\nRadiance C Serum prépare la peau grâce à son action antioxydante et illuminatrice, Luminescence Jour lui apporte hydratation et confort, puis Lumi-Veil CC Cream SPF 30 unifie le teint et le protège tout au long de la journée.\nUn rituel simple pour une peau hydratée, lumineuse, protégée et visiblement plus uniforme.",
      soins: ["radiance-serum", "luminescence-jour", "lumiveil-cc-cream"],
      moment: "Le matin",
      etapes: [
        { soin: "radiance-serum",    texte: "Sur peau propre, appliquez une pression sur le visage et le cou." },
        { soin: "luminescence-jour", texte: "Laissez pénétrer quelques instants, puis appliquez Luminescence Jour." },
        { soin: "lumiveil-cc-cream", texte: "En dernière étape, appliquez-la directement sur la peau, puis estompez du bout des doigts. Retouchez au cours de la journée selon vos envies." }
      ],
      conclusion: "Simple à adopter, pensée pour durer.\nTrois gestes complémentaires qui trouvent naturellement leur place dans votre quotidien."
    }
  }

};
