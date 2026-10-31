// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — FICHES BALANCE — VERSION TEST (à charger après produits-data-test.js)
// Ajoute les soins Balance au catalogue des fiches (window.EB_PRODUITS).
// À compléter depuis Shopify : 🛒 variantId et 📷 photos de chaque soin.
// Active Lift : fiche à écrire (fiche Selfnamed à recevoir).
// =====================================================================
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "calm-balance-jour",
    avis: "Calm Balance Jour",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-calm-balance-jour-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-calm-balance-jour-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "calm-balance-nuit",
    avis: "Calm Balance Nuit",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-calm-balance-nuit-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-calm-balance-nuit-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "hydra-balance",
    avis: "Hydra Balance",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-hydra-balance-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-hydra-balance-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "ceramide-night-restore",
    avis: "Ceramide Night Restore",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-ceramide-night-restore-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-ceramide-night-restore-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "cellular-reveal",
    avis: "Cellular Reveal",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-reveal-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-reveal-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "cellular-eye-restore",
    avis: "Cellular Eye Restore",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-eye-restore-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-eye-restore-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
    }
  },

  // =====================================================================
  // AGE LIFT
  // =====================================================================
  "age-lift": {
    nom: "Age Lift",
    sousTitre: "Crème raffermissante · Peptides · Acide hyaluronique",
    details: ["50 ml", "Vegan"],
    note: "une pression suffit",
    prix: "37,90€",
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "age-lift",
    avis: "Age Lift",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-age-lift-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-age-lift-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "eye-lift",
    avis: "Eye Lift",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-eye-lift-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-eye-lift-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "bakuchiol-elixir",
    avis: "Bakuchiol Elixir",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bakuchiol-elixir-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bakuchiol-elixir-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "bright-control",
    avis: "Bright Control",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bright-control-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bright-control-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "spot-control",
    avis: "Spot Control",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-spot-control-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-spot-control-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "glyco-balance",
    avis: "Glyco Balance",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-glyco-balance-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-glyco-balance-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "aha-balance-peel",
    avis: "AHA Balance Peel",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-aha-balance-peel-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-aha-balance-peel-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "cellular-renew",
    avis: "Cellular Renew",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-renew-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-cellular-renew-flacon-site.png",
        // 📷 3. TEXTURE
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
      variantId: ""   // 🛒 à compléter
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
    variantId: "",   // 🛒 numéro de variante Shopify (à compléter)
    inci: "bha-balance",
    avis: "BHA Balance",
    media: {
      miniature: "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bha-balance-flacon-site.png",   // 📷 petite photo (routines, accord parfait) : flacon seul
      type: "diaporama",
      images: [
        // 📷 1. BOÎTE + FLACON
        // 📷 2. FLACON SEUL
        "https://cdn.shopify.com/s/files/1/1016/8683/7593/files/balance-bha-balance-flacon-site.png",
        // 📷 3. TEXTURE
      ]
    },
    routine: {
      etapes: [
        { moment: "Matin et/ou soir", soin: "radiance-cleanser", texte: "Nettoyez votre peau avec Radiance Cleanser." },
        { moment: "Matin et/ou soir", soin: "bha-balance", texte: "Versez quelques gouttes de BHA Balance dans le creux de vos mains et appliquez sur l'ensemble du visage, en évitant le contour des yeux." },
        { moment: "Matin et/ou soir", soin: "hydra-balance", texte: "Poursuivez avec Hydra Balance, puis votre crème : Luminescence Jour le matin, Luminescence Nuit le soir. Si votre peau est sensible ou sensibilisée, préférez Calm Balance Jour et Calm Balance Nuit." },
        { moment: "Le matin", soin: "radiance-protect", texte: "Le matin, terminez toujours par Radiance Protect SPF 50." }
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
        texte: "Les peaux mixtes à grasses, sujettes à l'excès de sébum, aux pores visibles et aux brillances. Idéal pour intégrer un actif purifiant à sa routine, après le nettoyage. Convient aussi aux peaux normales.\nPour commencer en douceur : les deux premières semaines, utilisez BHA Balance un jour sur deux, puis chaque jour si votre peau est à l'aise. Jamais le même soir que Glyco Balance ou AHA Balance Peel." },
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
      variantId: ""   // 🛒 à compléter
    }
  }
};
for(var k in BALANCE){ window.EB_PRODUITS[k] = BALANCE[k]; }
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
