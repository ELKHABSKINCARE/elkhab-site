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
    // │ 📷  PHOTOS & VIDÉO DE LA FICHE — Radiance C Serum              │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "video",   // "video" ou "diaporama"

      // 📷 VIDÉO (lien Shopify .mp4)
      video: "https://cdn.shopify.com/videos/c/o/v/a36600a0c70a4392be399a4a8a1c4d78.mp4",

      // 📷 PHOTO (affichée le temps que la vidéo se charge)
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/RADAINCE_C_SERUM.jpg?v=1790958700"

      // 📷 Pour un DIAPORAMA à la place de la vidéo :
      //    mettre type: "diaporama" et remplacer les lignes video/image par
      //    images: ["lien photo 1", "lien photo 2", "lien photo 3"]
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
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Luminescence_Jour.png?v=1791003209",

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
    // │ 📷  PHOTOS & VIDÉO DE LA FICHE — Luminescence Jour             │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "video",

      // 📷 VIDÉO (lien Shopify .mp4)
      video: "https://cdn.shopify.com/videos/c/o/v/bc82e3295d0341cb8b8b7504119e2e78.mp4",

      // 📷 PHOTO (affichée le temps que la vidéo se charge)
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/MHKFcKhyMM2Asg2pPJ6dZDtm-1jFHUWO.jpg?v=1788718984"
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
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Gelee_Lumibloom.png?v=1791003481",

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
      type: "diaporama",
      images: [
        // 📷 PHOTO 1
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Prebiotique_nette_HD.png?v=1791028579",
        // 📷 PHOTO 2
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_00000000454c8210a827f69035d58538.png?v=1791030948"
        // 📷 PHOTO 3 — à ajouter : mettre une virgule à la fin de la ligne PHOTO 2,
        //    puis coller ici le lien entre guillemets "…"
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
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Radiance_C_Serum.png?v=1791003209",

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
    details: ["SPF 30", "Vegan"],       // ajouter la contenance ici, ex. ["15 g", "SPF 30", "Vegan"]
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
      { label: "N°B3 HÂLÉ",  variantId: "59361531625817", photo: 4 },
      { label: "N°B4 FONCÉ", variantId: "59361531658585", photo: 3 }
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │ 📷  PHOTOS DE LA FICHE — Lumi-Veil CC Cream (diaporama)        │
    // └─────────────────────────────────────────────────────────────────┘
    media: {
      type: "diaporama",
      images: [
        // 📷 PHOTO 1 (photo 0 pour le sélecteur)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/k_2HSJO-YzNUoy4iqGFAiDCwrQESxBtm.jpg?v=1790241607",
        // 📷 PHOTO 2 — teinte CLAIR (photo 1)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_CLAIR_5b8aa941-9e33-48fe-b488-8bda773354d2.jpg?v=1789055738",
        // 📷 PHOTO 3 — teinte MOYEN (photo 2)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/TEINTE_MOYENNE_c5c7f861-cd6f-46d6-bdb6-996ebbd5fe01.jpg?v=1789055754",
        // 📷 PHOTO 4 — teinte FONCÉ (photo 3)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/FONCE_309d9185-ba4a-4b67-a6b2-56b16ae8b40d.jpg?v=1789055872",
        // 📷 PHOTO 5 — teinte HÂLÉ (photo 4)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/HALE_a966c14d-9b78-4dc7-a661-f8a1cf5ab0c4.jpg?v=1789055856",
        // 📷 PHOTO 6 (photo 5)
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/file_000000002dec81f4be313feecebdf58f.png?v=1791033748"
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
      image: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/Luminescence_Jour.png?v=1791003209",

      texte: "Offrez à votre peau le duo qui fait toute la différence.\nLuminescence Jour l'hydrate intensément, l'apaise et lui redonne toute sa souplesse.\nLumi-Veil CC Crème révèle ensuite un teint unifié, un glow naturel et une protection quotidienne.\nLa peau paraît plus rebondie, plus lumineuse et si fraîche qu'elle attire naturellement le regard.",
      prix: "34,90€",
      variantId: "59324221129049"
    }
  }

};
