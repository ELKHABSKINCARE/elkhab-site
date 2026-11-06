// © 2026 ELKHA.B — Tous droits réservés. Reproduction interdite.
// =====================================================================
// ELKHA.B — Page « Votre rituel » (rituel.elkhab.com), ouverte par le QR code au dos des coffrets
// Embed Carrd :  <div id="eb-rituel"></div>
//                <script defer src="https://elkhabskincare.github.io/elkhab-site/rituel-engine.js"></script>
// L'adresse choisit le coffret : ?ts (Le Temps Suspendu), ?lh (Lumière d'hiver), ?rm (Rituel de Minuit), ?na (Nouvelle Aube)
// Le rituel (étapes, conclusion) vient des fiches des coffrets (produits-data-test.js et produits-balance-test.js) :
// une étape modifiée dans la fiche l'est aussi ici.
//
// MODE D'EMPLOI
// - Couleurs, textures des soins (sens), « Le saviez-vous ? » (savoir) : dans COFFRETS ci-dessous.
// - Texte de l'univers ELKHA.B et petit mot cadeau : UNIVERS et MOT, juste après.
// - Ne pas supprimer les guillemets, les virgules ni les accolades { } [ ].
// =====================================================================
(function(){
  if(window.ebRituel) return; window.ebRituel = true;

  // ───────────────────────────── RÉGLAGES ─────────────────────────────
  var BASE = 'https://elkhabskincare.github.io/elkhab-site/';
  var SHOP = 'https://cdn.shopify.com/s/files/1/1016/8683/7593/files/';
  // grille : [colonnes, rangées de carreaux entiers de l'image des motifs, rangée de la bande du haut, rangée de la bande du bas]
  //   (les motifs tombent toujours sur un bord de carreau : jamais de motif coupé sur les côtés)
  // motif : l'écran d'ouverture (motifs de la boîte) · voile / encre : couleur posée sur le motif et couleur du texte
  // nuit / or : fond des moments du soir et couleur des titres sur ce fond
  // sens : la texture et le parfum de chaque soin · savoir : les « Le saviez-vous ? », rangés par moment du rituel
  var COFFRETS = {
    ts: {
      fiche: 'coffret-temps-suspendu', nom: 'Le Temps Suspendu', sous: 'Coffret Rituel Lift', couleur: '#8a6a22',
      bande: BASE + 'rituel-grille-ts.webp', motif: BASE + 'rituel-grille-ts.webp', grille: [3, 5, 3, 4],
      voile: 'rgba(16,24,14,.5)', base: '#2c3826', encre: '#e9c979', nuit: '#1f2a1b', or: '#e9c979',
      sens: {
        'active-lift': "Un sérum au parfum floral, réchauffé de notes d'ambre et de poudre.",
        'age-lift': "Une crème légère et nourrissante, au fini souple et au délicat parfum floral.",
        'eye-lift': "Une texture légère, sans film gras, aux notes de rose et de géranium."
      },
      savoir: {
        'Matin et soir': [
          "Les peptides sont de courtes chaînes d'acides aminés, les briques qui composent le collagène. Ils agissent comme des messagers : ils signalent à la peau qu'il est temps de produire du collagène, la protéine de sa fermeté, que l'on fabrique un peu moins chaque année dès 25 ans. Les résultats se construisent donc avec la régularité, semaine après semaine. Le matin, terminez par une protection solaire : les UV sont le premier accélérateur du relâchement cutané.",
          "La peau du contour de l'œil est trois à cinq fois plus fine que celle du visage, et presque sans glandes sébacées : c'est là que les ridules apparaissent en premier. Appliquez Eye Lift du bout de l'annulaire, le doigt qui appuie le moins."
        ]
      }
    },
    lh: {
      fiche: 'coffret-lumiere-dhiver', nom: "Lumière d'hiver", sous: 'Coffret Rituel Éclat', couleur: '#7d1f2b',
      bande: BASE + 'rituel-grille-lh.webp', motif: BASE + 'rituel-grille-lh.webp', grille: [4, 8, 1, 6],
      voile: 'rgba(40,6,12,.55)', base: '#4a1219', encre: '#e9c979', nuit: '#3d0d15', or: '#e9c979',
      sens: {
        'radiance-serum': "Une texture sorbet jaune soleil, fondante et douce, au parfum d'agrumes.",
        'lumibloom-arbutin': "Un sérum léger et soyeux, aux notes de vétiver, de cèdre et de vanille."
      },
      savoir: {
        'Le matin': ["La vitamine C est un antioxydant : elle neutralise les radicaux libres produits par les UV et la pollution, ceux qui ternissent le teint. Appliquée le matin, elle prépare la peau à la journée et renforce l'action de votre protection solaire, sans la remplacer."],
        'Le soir': ["L'alpha-arbutine freine la tyrosinase, l'enzyme qui fabrique la mélanine. Moins de pigment produit en excès : les taches s'estompent peu à peu. Comptez six à huit semaines, le temps que votre peau se renouvelle."]
      }
    },
    rm: {
      fiche: 'coffret-rituel-de-minuit', nom: 'Rituel de Minuit', sous: 'Coffret Soin du Soir', couleur: '#9b2f62',
      bande: BASE + 'rituel-grille-rm.webp', motif: BASE + 'rituel-grille-rm.webp', grille: [4, 7, 0, 5],
      voile: 'rgba(36,8,22,.55)', base: '#3a1a2c', encre: '#ffffff', nuit: '#33111f', or: '#f0b8d2',
      sens: {
        'fusion-balance': "Deux phases qui fusionnent quand on l'agite, une texture qui fond sur le maquillage. Sans parfum.",
        'luminescence-boost': "Une texture fondante et fraîche, aux notes poudrées d'iris et de violette.",
        'radiance-eye-cream': "Une crème douce et confortable, aux notes de coton et de fleurs."
      },
      savoir: {
        'Le soir': [
          "Le maquillage, surtout waterproof, est conçu pour résister à l'eau : seule une phase huileuse peut le dissoudre. Celle de Fusion Balance capte les pigments, la phase aqueuse rince. Pas besoin de frotter, et la peau garde ses huiles naturelles, celles qui protègent sa barrière.",
          "La nuit, la peau change de rythme : le renouvellement de ses cellules s'accélère, mais elle perd aussi plus d'eau. C'est le meilleur moment pour lui apporter des actifs raffermissants et hydratants."
        ]
      }
    },
    na: {
      fiche: 'coffret-nouvelle-aube', nom: 'Nouvelle Aube', sous: 'Coffret Peau Neuve', couleur: '#7a4900',
      bande: BASE + 'rituel-grille-na.webp', motif: BASE + 'rituel-grille-na.webp', grille: [4, 6, 0, 5],
      voile: 'rgba(246,244,240,.3)', base: '#cdd8c0', encre: '#7a4900', nuit: '#2b3424', or: '#d9b27a',
      sens: {
        'aha-balance-peel': "Une texture liquide et légère, à la senteur discrète, légèrement sucrée.",
        'active-lift': "Un sérum au parfum floral, réchauffé de notes d'ambre et de poudre.",
        'hydra-balance': "Un gel frais qui glisse sur la peau, au parfum aquatique et fruité."
      },
      savoir: {
        'Matin et soir': ["L'acide hyaluronique peut retenir jusqu'à mille fois son poids en eau. Dans Hydra Balance, il est présent en plusieurs tailles de molécules : les plus grandes hydratent en surface, les plus petites agissent plus profondément dans l'épiderme."],
        '1 à 2 soirs par semaine': ["L'acide lactique est un AHA : il dissout le « ciment » qui retient les cellules mortes à la surface de la peau, sans grains ni frottement. C'est une exfoliation chimique, plus régulière qu'un gommage. Il fait aussi partie des composants naturels de l'hydratation de la peau : il exfolie tout en hydratant. Le lendemain matin, la protection solaire est indispensable : une peau fraîchement exfoliée est plus sensible aux UV."]
      }
    }
  };
  // ───────────── LES SOINS (QR au dos des flacons : rituel.elkhab.com/?cs …) ─────────────
  // couleur / clair : la couleur de l'étiquette (bas du dégradé) et sa version claire
  // role : ce que fait le soin · sens : texture et parfum · etapes : son rituel (moment + geste)
  // savoir : les « Le saviez-vous ? » rangés par moment · conseil : « Pour bien commencer »
  // Le flacon (photo à l'échelle) vient de FLACONS ; l'accord parfait vient de la fiche du soin.
  var SOINS = {
    // ── BLOOM ──
    mb: {
      fiche: 'milky-bloom', nom: 'Milky Bloom', gamme: 'Bloom', sous: "Nettoyant huile-en-lait", couleur: '#8a6f5c', clair: '#efe2d6',
      role: "Il démaquille, même un maquillage épais, et nettoie la peau en la nourrissant, sans tiraillement ni sensation de film.",
      sens: "Un gel huileux rosé et nacré qui devient lait soyeux au contact de l'eau, aux notes de fleurs blanches, de jasmin et de bois de santal crémeux.",
      etapes: [
        { moment: 'Le matin', texte: "Appliquez une noisette sur peau sèche ou humide, massez quelques secondes, puis rincez." },
        { moment: 'Le soir', texte: "Sur peau sèche, massez une noisette sur le visage pour dissoudre le maquillage et les impuretés. Humidifiez vos mains et continuez à masser : l'huile se transforme en lait. Rincez abondamment, en évitant le contact direct avec les yeux." }
      ],
      savoir: { 'Le soir': ["Le maquillage, la protection solaire et le sébum sont des corps gras : l'eau seule ne les dissout pas, une huile si. C'est le principe du premier temps du double nettoyage. Au contact de l'eau, les émulsifiants de Milky Bloom transforment l'huile en lait, qui emporte tout au rinçage sans laisser de film."] },
      conseil: "Le soir, massez toujours sur peau sèche : l'eau ajoutée trop tôt empêche l'huile de dissoudre le maquillage. Le matin, un passage rapide suffit, la peau a seulement besoin d'être rafraîchie."
    },
    rc: {
      fiche: 'radiance-cleanser', nom: 'Radiance Cleanser', gamme: 'Bloom', sous: 'Gel nettoyant éclat', couleur: '#8a6f5c', clair: '#efe2d6',
      role: "Il élimine l'excès de sébum, les impuretés et les traces de maquillage qui ternissent le teint, sans dessécher ni tirailler.",
      sens: "Un gel fluide et frais qui devient une mousse légère au contact de l'eau, au parfum léger.",
      etapes: [{ moment: 'Matin et soir', texte: "Faites mousser une noisette entre vos mains humides, massez le visage en petits cercles pendant une trentaine de secondes, puis rincez abondamment." }],
      savoir: { 'Matin et soir': ["Une peau grasse décapée par un nettoyant trop fort se déshydrate en surface et réagit souvent en brillant davantage. Radiance Cleanser nettoie avec des agents lavants parmi les plus doux et garde un cœur hydratant : son Sodium PCA fait partie du facteur naturel d'hydratation de la peau, celui qui retient l'eau dans ses couches supérieures."] },
      conseil: "Rincez à l'eau tiède : l'eau chaude dessèche et sensibilise la peau. Une légère séparation dans le flacon est normale avec une formule d'origine naturelle."
    },
    lp: {
      fiche: 'lumi-pure', nom: 'Lumi-Pure', gamme: 'Bloom', sous: "Masque purifiant", couleur: '#8a6f5c', clair: '#efe2d6',
      role: "Ce masque aux argiles et au charbon végétal absorbe l'excès de sébum, désincruste les pores et affine le grain de peau des peaux mixtes à grasses.",
      sens: "Une texture d'argile enveloppante, facile à répartir, au parfum discret aux nuances minérales.",
      etapes: [{ moment: 'Le soir, une à deux fois par semaine', texte: "Sur peau propre, appliquez une couche uniforme en évitant le contour des yeux et des lèvres. Laissez poser 5 à 10 minutes, puis rincez abondamment à l'eau tiède." }],
      savoir: { 'Le soir, une à deux fois par semaine': ["Le kaolin et la montmorillonite sont deux argiles complémentaires : la première absorbe le sébum, la seconde capte les impuretés grâce à sa structure en feuillets. Le charbon végétal, très poreux, retient ce qui encrasse les pores. Ensemble, ils purifient sans décaper."] },
      conseil: "Rincez avant que le masque ne sèche complètement : une argile qui craquelle tire l'eau de la peau. Une légère rougeur juste après est normale et disparaît vite. Lumi-Pure ne convient pas aux peaux sensibles."
    },
    gl: {
      fiche: 'gelee-lumibloom', nom: 'Gelée Lumi-Bloom', gamme: 'Bloom', sous: 'Soin équilibrant aux prébiotiques', couleur: '#8a6f5c', clair: '#efe2d6',
      role: "Première étape d'une peau éclatante, elle hydrate instantanément, rééquilibre le microbiome et renforce la barrière cutanée, pour préparer la peau aux soins suivants.",
      sens: "Une gelée fraîche qui se pose comme une eau sur la peau, sans effet collant.",
      etapes: [{ moment: 'Matin et/ou soir', texte: "Sur peau propre, déposez quelques gouttes de gelée dans le creux de la main et appliquez-la sur le visage et le cou, avant vos sérums et votre crème." }],
      savoir: { 'Matin et/ou soir': ["Votre peau abrite des milliards de micro-organismes, son microbiome, qui la protègent comme un bouclier invisible. Les prébiotiques nourrissent les bonnes bactéries de ce microbiome pour qu'elles gardent le dessus : une peau équilibrée est moins réactive et retient mieux son eau."] },
      conseil: "Appliquez la gelée en premier, sur une peau encore humide après le nettoyage : elle hydrate et aide les soins suivants à mieux s'étaler. Elle convient à tous les types de peau, même sensibilisées."
    },
    cs: {
      fiche: 'radiance-serum', nom: 'Radiance C Serum', gamme: 'Bloom', sous: 'Sérum éclat à la vitamine C', couleur: '#8e5a4c', clair: '#e9d6cc',
      role: "Il ravive l'éclat d'un teint terne, unifie peu à peu les taches et protège la peau des agressions du quotidien, sans jamais l'assécher grâce à l'acide hyaluronique.",
      sens: "Une texture sorbet jaune soleil, fondante et douce, au parfum d'agrumes.",
      etapes: [{ moment: 'Matin et/ou soir', texte: "Sur peau propre, déposez une pression de sorbet sur le visage et le cou, puis appliquez votre crème." }],
      savoir: { 'Matin et/ou soir': ["La vitamine C pure s'oxyde vite à l'air et à la lumière : elle perd son efficacité et peut irriter. Radiance C Serum contient une vitamine C stabilisée, qui se libère une fois dans la peau, épaulée par la vitamine E et l'acide férulique qui renforcent son action antioxydante. Elle reste efficace jusqu'à la dernière pression, même sur les peaux sensibles."] },
      conseil: "Le matin, terminez toujours par une protection solaire : la vitamine C renforce la défense de votre peau contre les UV, mais ne remplace pas un SPF. Les premiers effets sur l'éclat se voient en quelques jours, ceux sur les taches en quelques semaines."
    },
    ar: {
      fiche: 'lumibloom-arbutin', nom: 'Lumi-Bloom Arbutin', gamme: 'Bloom', sous: "Sérum anti-taches", couleur: '#8e5a4c', clair: '#e9d6cc',
      role: "Il cible les taches brunes et les marques laissées par le soleil ou d'anciennes imperfections, pour un teint plus uniforme, tout en gardant la peau hydratée et souple.",
      sens: "Un sérum léger et soyeux, aux notes de vétiver et de cèdre, réchauffées d'amande douce et de vanille.",
      etapes: [{ moment: 'Matin et/ou soir', texte: "Sur peau propre et sèche, appliquez une pression sur le visage en insistant sur les zones marquées, sans frotter, puis appliquez votre crème." }],
      savoir: { 'Matin et/ou soir': ["Une tache brune, c'est de la mélanine produite en excès au même endroit. Pour la fabriquer, la peau a besoin d'une enzyme, la tyrosinase : l'alpha-arbutine freine son activité, et la peau produit moins de pigment là où elle en faisait trop. Comme la peau se renouvelle en un mois environ, les taches s'estompent progressivement, au fil des renouvellements."] },
      conseil: "Comptez six à huit semaines d'application régulière avant de juger le résultat. Le matin, terminez toujours par une protection solaire comme Radiance Protect SPF 50 : sans elle, les UV relancent la production de mélanine et les taches reviennent."
    },
    n5: {
      fiche: 'lumibloom-niac-5', nom: 'Lumi-Bloom Niacinamide 5', gamme: 'Bloom', sous: 'Gel équilibrant à la niacinamide', couleur: '#8e5a4c', clair: '#e9d6cc',
      role: "Il resserre visiblement les pores, régule les brillances et unifie le teint, tout en renforçant la barrière cutanée des peaux mixtes, grasses ou sensibles.",
      sens: "Un gel frais et léger qui fond instantanément, sans effet collant ni fini gras.",
      etapes: [{ moment: 'Matin et/ou soir', texte: "Sur peau propre, appliquez une pression de gel sur l'ensemble du visage, puis poursuivez avec votre crème." }],
      savoir: { 'Matin et/ou soir': ["La niacinamide, c'est la vitamine B3. Elle aide la peau à fabriquer ses propres céramides, les lipides qui la protègent du dessèchement, et freine le passage du pigment vers les cellules de surface, d'où un teint plus homogène. Dosée à 5 %, elle donne toute son efficacité en restant bien tolérée. Et contrairement à une idée reçue, elle s'associe très bien à la vitamine C : vous pouvez l'utiliser avec Radiance C Serum."] },
      conseil: "Les brillances diminuent en quelques jours, le grain de peau s'affine en quatre semaines environ. Le matin, une protection solaire préserve l'uniformité gagnée."
    },
    lj: {
      fiche: 'luminescence-jour', nom: 'Luminescence Jour', gamme: 'Bloom', sous: "Crème de jour éclat", couleur: '#8e4d33', clair: '#f0d9cc',
      role: "Elle hydrate durablement, apaise la peau et protège son éclat des agressions de la journée, pour un teint frais et lumineux du matin au soir.",
      sens: "Une crème soyeuse qui fond sur la peau et l'enveloppe d'une hydratation fraîche, sans film gras.",
      etapes: [{ moment: 'Le matin', texte: "Appliquez une pression de crème sur le visage en lissant de l'ovale vers les tempes, puis sur le cou en descendant vers la poitrine." }],
      savoir: { 'Le matin': ["L'acide hyaluronique de Luminescence Jour est multimoléculaire : les grosses molécules restent en surface et forment un voile qui retient l'eau, les plus petites pénètrent dans les couches supérieures de l'épiderme pour hydrater de l'intérieur. Le bisabolol, issu de la camomille, apaise la peau et calme les rougeurs passagères."] },
      conseil: "Appliquez-la sur une peau encore légèrement humide : l'acide hyaluronique capte cette eau et l'hydratation dure plus longtemps. Terminez par une protection solaire comme Radiance Protect SPF 50."
    },
    ln: {
      fiche: 'luminescence-nuit', nom: 'Luminescence Nuit', gamme: 'Bloom', sous: "Crème de nuit repulpante", couleur: '#6e1f29', clair: '#ead2d0',
      role: "Elle nourrit intensément la peau pendant le sommeil et améliore sa fermeté et sa souplesse, pour un réveil avec une peau rebondie et reposée.",
      sens: "Une texture riche et fondante, aux notes de nénuphar, de jasmin blanc et de vanille, relevées d'une pointe de menthe poivrée.",
      etapes: [{ moment: 'Le soir', texte: "Réchauffez une pression entre vos mains, posez-les sur le visage puis enveloppez-le de gestes lents, de l'ovale vers les tempes, et le cou en descendant." }],
      savoir: { 'Le soir': ["La nuit, la peau passe en mode réparation : son renouvellement s'accélère, mais elle perd aussi plus d'eau que dans la journée. C'est pour cela qu'une crème de nuit est plus riche : les beurres de cacao et de karité forment un voile qui limite cette perte, pendant que le plancton marin et le collagène accompagnent la fermeté et le rebond de la peau."] },
      conseil: "Appliquez-la une vingtaine de minutes avant de vous coucher, pour qu'elle pénètre avant le contact avec l'oreiller. Avec Luminescence Boost juste avant, son action raffermissante se prolonge toute la nuit."
    },
    lb: {
      fiche: 'luminescence-boost', nom: 'Luminescence Boost', gamme: 'Bloom', sous: 'Sérum booster de fermeté', couleur: '#6e1f29', clair: '#ead2d0',
      role: "Il aide la peau à retrouver tonus et rebond, lisse l'apparence des ridules et la prépare à recevoir toute la richesse de Luminescence Nuit.",
      sens: "Une texture légère et fraîche, absorbée en quelques secondes, aux notes poudrées d'iris et de violette sur un fond musqué.",
      etapes: [{ moment: 'Le soir', texte: "Sur peau propre, appliquez une pression sur le visage en lissant de l'ovale vers les tempes, puis sur le cou en descendant vers la poitrine. Poursuivez avec Luminescence Nuit." }],
      savoir: { 'Le soir': ["Le geste compte autant que le soin. Sur le visage, on remonte toujours de l'ovale vers les tempes, pour accompagner les traits vers le haut. Sur le cou, c'est l'inverse : on descend vers la poitrine pour drainer. Remonter le cou fait stagner les liquides sous le menton et alourdit le bas du visage."] },
      conseil: "Utilisez-le chaque soir avant Luminescence Nuit : le sérum apporte les actifs, la crème les nourrit et les garde au contact de la peau toute la nuit. La peau paraît plus rebondie en quelques semaines."
    },
    ec: {
      fiche: 'radiance-eye-cream', nom: 'Radiance Eye Cream', gamme: 'Bloom', sous: 'Soin contour des yeux', couleur: '#8e5a4c', clair: '#e9d6cc',
      role: "Elle hydrate le contour des yeux, aide à atténuer poches et cernes et lisse les ridules de déshydratation, pour un regard frais et reposé.",
      sens: "Une crème douce et confortable, aux notes de coton et de fleurs.",
      etapes: [{ moment: 'Matin et/ou soir', texte: "Sur peau propre, déposez une petite quantité sous l'œil et sur la paupière, puis faites-la pénétrer en tapotant du bout de l'annulaire, de l'intérieur vers l'extérieur." }],
      savoir: { 'Matin et/ou soir': ["La peau du contour des yeux est jusqu'à quatre fois plus fine que celle du reste du visage et presque dépourvue de glandes sébacées : elle se déshydrate plus vite et montre la fatigue en premier. L'annulaire est le doigt qui exerce la pression la plus légère, c'est pour cela qu'on l'utilise sur cette zone."] },
      conseil: "Une petite quantité suffit pour les deux yeux. Ne l'appliquez pas trop près des cils : la crème migre naturellement vers l'œil avec la chaleur de la peau."
    },
    // ── BALANCE ──
    hy: {
      fiche: 'hydra-balance', nom: 'Hydra Balance', gamme: 'Balance', sous: "Gel hydratant repulpant", couleur: '#6e7f58', clair: '#e1e6d6',
      role: "Ce gel désaltère la peau, la repulpe et lisse les ridules de déshydratation, pour une peau souple, rebondie et lumineuse.",
      sens: "Un gel frais et léger, au parfum aquatique aux notes fruitées et juteuses.",
      etapes: [{ moment: 'Matin et/ou soir', texte: "Sur peau propre, appliquez une pression de gel sur le visage et le cou, puis poursuivez avec votre crème." }],
      savoir: { 'Matin et/ou soir': ["Une peau grasse peut être déshydratée : le sébum est un corps gras, l'hydratation, c'est de l'eau. Une peau peut donc briller et tirailler en même temps. Hydra Balance réunit l'acide hyaluronique en plusieurs tailles de molécules, pour hydrater en surface et plus en profondeur, et le Sodium PCA, qui retient l'eau dans la peau."] },
      conseil: "Appliquez-le sur une peau encore légèrement humide : l'acide hyaluronique capte cette eau. Sur une peau mixte, il peut suffire seul ; sur une peau sèche, terminez par une crème."
    },
    cj: {
      fiche: 'calm-balance-jour', nom: 'Calm Balance Jour', gamme: 'Balance', sous: "Crème de jour apaisante", couleur: '#6e7f58', clair: '#e1e6d6',
      role: "Cette crème de jour sans parfum apaise les inconforts, atténue l'apparence des rougeurs et hydrate durablement les peaux sensibles.",
      sens: "Une crème légère qui s'absorbe facilement, sans fini gras et sans parfum ajouté.",
      etapes: [{ moment: 'Le matin', texte: "Appliquez une pression de crème et lissez-la du centre vers l'extérieur du visage, puis sur le cou en descendant." }],
      savoir: { 'Le matin': ["L'huile de jojoba n'est pas tout à fait une huile : c'est une cire liquide dont la composition est très proche de celle du sébum. La peau la reconnaît et l'absorbe facilement, sans film gras. Avec l'aloe vera, l'acide hyaluronique et le Sodium PCA, elle aide la barrière cutanée à retenir l'eau, et une peau bien hydratée est moins réactive."] },
      conseil: "Une peau sensible aime la simplicité : introduisez un seul nouveau soin à la fois et rincez à l'eau tiède plutôt que chaude. Le matin, terminez par une protection solaire."
    },
    nc: {
      fiche: 'calm-balance-nuit', nom: 'Calm Balance Nuit', gamme: 'Balance', sous: "Crème de nuit apaisante", couleur: '#6e7f58', clair: '#e1e6d6',
      role: "Cette crème de nuit sans parfum apaise les irritations, atténue les rougeurs et hydrate la peau toute la nuit, pour un réveil confortable.",
      sens: "Une texture enveloppante, sans parfum ajouté, à l'odeur naturellement neutre.",
      etapes: [{ moment: 'Le soir', texte: "Terminez votre routine par une pression de crème, posée à plat sur le visage puis lissée vers l'extérieur." }],
      savoir: { 'Le soir': ["Une peau sensible est souvent une peau dont la barrière laisse s'échapper l'eau et entrer les irritants. La nuit, la peau perd naturellement plus d'eau que le jour : c'est le meilleur moment pour l'aider. Les algues et l'aloe vera apaisent, l'acide hyaluronique retient l'eau jusqu'au matin."] },
      conseil: "Le soir, évitez les nettoyants trop moussants et l'eau très chaude, qui fragilisent la barrière. Calm Balance Jour prend le relais le matin pour garder la peau apaisée toute la journée."
    },
    fb: {
      fiche: 'fusion-balance', nom: 'Fusion Balance', gamme: 'Balance', sous: "Démaquillant biphasé", couleur: '#6e7f58', clair: '#e1e6d6',
      role: "Il dissout le maquillage des yeux et du visage, même waterproof, sans frotter et sans laisser de film gras.",
      sens: "Deux phases qui fusionnent d'un geste, une texture qui fond sur le maquillage puis disparaît, sans parfum ajouté.",
      etapes: [{ moment: 'Le soir', texte: "Agitez le flacon pour mélanger les deux phases. Imbibez un coton, posez-le quelques secondes sur les paupières fermées, puis glissez-le vers l'extérieur, sans frotter. Recommencez sur le visage jusqu'à ce que le coton ressorte propre." }],
      savoir: { 'Le soir': ["Pourquoi deux phases ? Le mascara waterproof et le maquillage longue tenue sont conçus pour résister à l'eau : seule une phase huileuse peut les dissoudre. La phase aqueuse, à l'aloe vera, rince ensuite les impuretés et laisse la peau fraîche, sans film. C'est pour cela que les maquilleurs professionnels l'utilisent pour les yeux."] },
      conseil: "Laissez toujours le coton poser quelques secondes avant de le glisser : c'est ce temps de pose qui fait le travail, pas le frottement. Seul, il démaquille et nettoie ; vous pouvez aussi poursuivre avec votre nettoyant."
    },
    cm: {
      fiche: 'ceramide-night-restore', nom: 'Ceramide Night Restore', gamme: 'Balance', sous: "Crème de nuit réparatrice", couleur: '#5f7149', clair: '#d9dfcd',
      role: "Cette crème de nuit renforce la barrière cutanée, hydrate en profondeur et nourrit la peau pendant le sommeil, pour un réveil confortable et lumineux.",
      sens: "Une crème nourrissante qui enveloppe la peau, au parfum de fleurs blanches et de lavande sur un fond herbacé.",
      etapes: [{ moment: 'Le soir', texte: "Terminez par une pression de crème sur le visage et le cou. Les soirs où vous utilisez Glyco Balance ou AHA Balance Peel, elle apporte tout le réconfort dont la peau a besoin." }],
      savoir: { 'Le soir': ["Imaginez votre peau comme un mur : les cellules sont les briques, les céramides le ciment. Ils représentent environ la moitié des lipides de la couche superficielle de la peau, et c'est quand ils manquent que l'eau s'échappe. Les céramides végétaux de Ceramide Night Restore aident à reconstituer ce ciment, pendant que le karité nourrit."] },
      conseil: "C'est le soin idéal après une exfoliation : appliquez-la les soirs d'AHA ou de Glyco, sur une peau bien sèche. Une peau qui tiraille retrouve son confort en quelques nuits."
    },
    ce: {
      fiche: 'cellular-eye-restore', nom: 'Cellular Eye Restore', gamme: 'Balance', sous: "Sérum lissant regard", couleur: '#5f7149', clair: '#d9dfcd',
      role: "Ce sérum à l'alternative végétale au rétinol atténue les ridules, les pattes-d'oie et les signes de fatigue, tout en hydratant le contour des yeux.",
      sens: "Une texture légère pensée pour la peau fine du regard, au parfum de rose légèrement sucré, relevé de géranium rouge.",
      etapes: [{ moment: 'Le soir', texte: "Déposez une petite quantité sur le contour des yeux et faites-la pénétrer en tapotant du bout de l'annulaire, de l'intérieur vers l'extérieur." }],
      savoir: { 'Le soir': ["Le rétinol est l'actif de référence contre les rides, mais il peut irriter, surtout sur la peau fine du regard. L'extrait de Bidens pilosa, une plante tropicale, aide à atténuer les mêmes signes sans cette irritation : c'est pour cela qu'on parle d'alternative végétale au rétinol."] },
      conseil: "Appliquez-le le soir, sans aller trop près des cils. Si vous utilisez Cellular Reveal sur le visage, Cellular Eye Restore est son relais pour le regard."
    },
    cn: {
      fiche: 'cellular-renew', nom: 'Cellular Renew', gamme: 'Balance', sous: "Crème régénérante anti-rides", couleur: '#5f7149', clair: '#d9dfcd',
      role: "Cette crème à l'alternative végétale au rétinol atténue les rides et ridules au fil des semaines, tout en hydratant la peau, pour un fini frais et lumineux.",
      sens: "Une crème légère et fondante, au parfum de rose légèrement sucrée et de géranium rouge sur un fond vert et fruité.",
      etapes: [
        { moment: 'Le matin', texte: "Sur peau propre, appliquez une pression sur le visage en lissant de l'ovale vers les tempes, puis sur le cou en descendant." },
        { moment: 'Le soir', texte: "Appliquez de nouveau Cellular Renew, seule ou après Cellular Reveal, pour prolonger son action pendant la nuit." }
      ],
      savoir: { 'Le soir': ["Le sérum et la crème travaillent ensemble : Cellular Reveal lisse le grain de peau, Cellular Renew prolonge son action et hydrate. La nuit, la peau se renouvelle plus activement : c'est le moment où l'alternative au rétinol donne le meilleur d'elle-même."] },
      conseil: "Si vous n'avez jamais utilisé d'alternative au rétinol, commencez par Cellular Renew seule pendant deux semaines, puis ajoutez Cellular Reveal le soir. Évitez le contour des yeux."
    },
    ac: {
      fiche: 'active-lift', nom: 'Active Lift', gamme: 'Balance', sous: "Sérum lissant et raffermissant", couleur: '#5f7149', clair: '#d9dfcd',
      role: "Ce sérum aux peptides lisse l'apparence des rides et ridules, raffermit et repulpe la peau, pour un grain de peau plus fin et un visage plus tonique.",
      sens: "Un sérum fluide au parfum floral subtil, réchauffé de notes d'ambre sur un fond poudré.",
      etapes: [{ moment: 'Matin et/ou soir', texte: "Sur peau propre, appliquez une pression sur le visage en lissant de l'ovale vers les tempes, puis sur le cou en descendant vers la poitrine. Poursuivez avec votre crème." }],
      savoir: { 'Matin et/ou soir': ["Les peptides sont de courtes chaînes d'acides aminés, les briques du collagène. Ils jouent le rôle de messagers : l'hexapeptide-11 d'Active Lift encourage la peau à entretenir sa fermeté et son élasticité, pendant que le ginkgo biloba et l'huile de graines de myrtille la protègent du stress oxydatif, l'une des causes du relâchement."] },
      conseil: "Les peptides agissent dans la durée : utilisez-le chaque jour pendant au moins six à huit semaines pour en voir tout l'effet. Avec Age Lift, il complète son action raffermissante."
    },
    al: {
      fiche: 'age-lift', nom: 'Age Lift', gamme: 'Balance', sous: "Crème raffermissante", couleur: '#4f6a3d', clair: '#d0d9c4',
      role: "Cette crème aux peptides lisse l'apparence des ridules, hydrate et repulpe la peau, matin et soir, en un seul soin.",
      sens: "Une texture légère et nourrissante, sans sensation de lourdeur, au parfum floral délicat.",
      etapes: [{ moment: 'Matin et soir', texte: "Appliquez une pression sur le visage en remontant de l'ovale vers les tempes, puis sur le cou en descendant vers la poitrine." }],
      savoir: { 'Matin et soir': ["Dès la vingtaine, la peau fabrique un peu moins de collagène chaque année, et elle produit aussi moins d'acide hyaluronique : elle perd en fermeté et retient moins bien l'eau. Age Lift agit sur ces deux fronts : ses peptides soutiennent la fermeté, son acide hyaluronique repulpe et lisse les ridules."] },
      conseil: "Sur une peau légèrement humide, la crème repulpe davantage. Pour un effet lift complet, appliquez Active Lift juste avant : le sérum concentre les peptides, la crème prolonge leur action."
    },
    el: {
      fiche: 'eye-lift', nom: 'Eye Lift', gamme: 'Balance', sous: 'Contour des yeux aux peptides', couleur: '#4f6a3d', clair: '#d0d9c4',
      role: "Cette crème aux peptides lisse les ridules et les pattes-d'oie et raffermit la peau du contour des yeux, pour un regard visiblement plus lisse.",
      sens: "Une texture légère, sans film gras, au parfum de rose légèrement sucré relevé de géranium rouge.",
      etapes: [{ moment: 'Matin et soir', texte: "Sur peau propre, déposez une petite quantité sur le contour des yeux et faites-la pénétrer en tapotant du bout de l'annulaire, de l'intérieur vers l'extérieur." }],
      savoir: { 'Matin et soir': ["Les pattes-d'oie se forment là où la peau du visage est la plus fine et où elle se plisse le plus : nous clignons des yeux plus de quinze mille fois par jour. Les peptides d'Eye Lift aident à entretenir la fermeté de cette zone, et les vitamines C et E la protègent du stress oxydatif qui accélère son vieillissement."] },
      conseil: "Une petite quantité suffit pour les deux yeux. Ne l'appliquez pas trop près des cils : la crème migre naturellement vers l'œil avec la chaleur de la peau."
    },
    cr: {
      fiche: 'cellular-reveal', nom: 'Cellular Reveal', gamme: 'Balance', sous: "Sérum lissant anti-rides", couleur: '#4f6a3d', clair: '#d0d9c4',
      role: "Ce sérum à l'alternative végétale au rétinol affine le grain de peau, atténue les ridules et aide à unifier le teint, pour une peau plus lisse et lumineuse.",
      sens: "Une texture légère qui laisse la peau confortable, au parfum de rose légèrement sucré, relevé de géranium rouge sur un fond vert et fruité.",
      etapes: [{ moment: 'Le soir', texte: "Sur peau propre, appliquez une pression sur le visage en lissant de l'ovale vers les tempes, puis sur le cou en descendant. Poursuivez avec votre crème." }],
      savoir: { 'Le soir': ["Cellular Reveal est le premier pas vers les alternatives au rétinol. Son extrait de Bidens pilosa accompagne le renouvellement de la peau, sans les rougeurs ni les tiraillements que peut provoquer le rétinol. Plus doux que Bakuchiol Elixir, il prépare la peau à des actifs plus affirmés, si elle en a besoin plus tard."] },
      conseil: "Si c'est votre premier soin de ce type, commencez un soir sur deux pendant deux semaines, puis chaque soir. Évitez le contour des yeux : pour le regard, il y a Cellular Eye Restore."
    },
    bk: {
      fiche: 'bakuchiol-elixir', nom: 'Bakuchiol Elixir', gamme: 'Balance', sous: 'Élixir lissant au bakuchiol', couleur: '#3b5b2a', clair: '#c9d4bd',
      role: "Cet élixir au bakuchiol lisse l'apparence des rides, améliore la fermeté et aide à unifier le teint, dans un soin nourrissant aux huiles précieuses.",
      sens: "Une texture soyeuse aux huiles de jojoba, de rose musquée et d'onagre, au parfum de rose aux notes chaleureuses, épicées et boisées.",
      etapes: [{ moment: 'Le soir', texte: "Réchauffez quelques gouttes entre vos paumes et pressez-les délicatement sur le visage, puis sur le cou en descendant. Les soirs d'exfoliation, sautez cette étape." }],
      savoir: { 'Le soir': ["Le bakuchiol vient des graines du babchi, une plante utilisée depuis des siècles en Inde. Une étude clinique l'a comparé au rétinol : des résultats proches sur les rides, avec beaucoup moins de rougeurs et de desquamation. C'est l'alternative végétale au rétinol la plus affirmée de la gamme."] },
      conseil: "Si votre peau découvre les actifs anti-âge, commencez deux à trois soirs par semaine, puis augmentez. Jamais le même soir que Glyco Balance ou AHA Balance Peel."
    },
    sc: {
      fiche: 'spot-control', nom: 'Spot Control', gamme: 'Balance', sous: "Sérum anti-taches ciblé", couleur: '#3b5b2a', clair: '#c9d4bd',
      role: "Ce sérum ciblé agit précisément sur les taches brunes et les marques laissées par les imperfections, pour un teint plus uniforme et lumineux.",
      sens: "Un sérum précis, au parfum d'agrumes, de gingembre et de concombre sur un fond boisé de vétiver et de cèdre.",
      etapes: [{ moment: 'Matin et soir', texte: "Sur peau propre, appliquez Spot Control uniquement sur les taches, en tapotant légèrement, puis poursuivez avec votre crème." }],
      savoir: { 'Matin et soir': ["L'acide kojique est issu de la fermentation, celle-là même qui sert à fabriquer le saké. Il capte le cuivre dont la tyrosinase, l'enzyme qui fabrique la mélanine, a besoin pour fonctionner : la tache reçoit moins de pigment. La vitamine C renforce cette action et ravive l'éclat."] },
      conseil: "Les taches s'estompent au rythme du renouvellement de la peau : comptez six à huit semaines. Le matin, une protection solaire comme Radiance Protect SPF 50 est indispensable, sinon les UV relancent la tache."
    },
    bc: {
      fiche: 'bright-control', nom: 'Bright Control', gamme: 'Balance', sous: "Crème correctrice anti-taches", couleur: '#3b5b2a', clair: '#c9d4bd',
      role: "Cette crème correctrice agit sur tout le visage : elle atténue l'apparence des taches brunes, unifie le teint et ravive l'éclat, tout en hydratant.",
      sens: "Une crème hydratante au parfum d'agrumes, de gingembre et de concombre sur un fond boisé de vétiver, de cèdre et de patchouli.",
      etapes: [{ moment: 'Matin ou soir', texte: "Sur peau propre, appliquez une pression sur l'ensemble du visage et le cou. Le matin, terminez toujours par votre protection solaire." }],
      savoir: { 'Matin ou soir': ["Un teint irrégulier, ce sont des taches visibles, et d'autres encore invisibles, prêtes à apparaître. En traitant tout le visage, Bright Control agit sur les deux : l'acide kojique freine la production de mélanine, la vitamine C et l'extrait de romarin protègent la peau du stress oxydatif qui ternit le teint."] },
      conseil: "Choisissez le moment qui vous convient, le matin ou le soir, et gardez-le chaque jour. Dans tous les cas, une protection solaire comme Radiance Protect SPF 50 chaque matin est indispensable : c'est elle qui préserve les résultats. Pour une tache précise, ajoutez Spot Control en touche avant la crème."
    },
    bh: {
      fiche: 'bha-balance', nom: 'BHA Balance', gamme: 'Balance', sous: "Lotion purifiante au BHA", couleur: '#3b5b2a', clair: '#c9d4bd',
      role: "Cette lotion à l'acide salicylique désobstrue les pores, élimine l'excès de sébum et les impuretés, sans déséquilibrer la peau.",
      sens: "Une lotion fluide et fraîche qui pénètre instantanément, sans film, à la senteur naturelle d'eaux florales, de fruits secs et de rose.",
      etapes: [{ moment: 'Le soir', texte: "Après le nettoyage, versez quelques gouttes dans le creux de vos mains et appliquez sur l'ensemble du visage, en évitant le contour des yeux." }],
      savoir: { 'Le soir': ["L'acide salicylique est un BHA : contrairement aux AHA, qui travaillent à la surface de la peau, il est soluble dans les corps gras. Il se glisse donc dans le sébum et va nettoyer l'intérieur du pore, là où se forment les points noirs. C'est l'actif de référence des peaux mixtes à grasses."] },
      conseil: "Les deux premières semaines, utilisez-la un soir sur deux, puis chaque soir si votre peau est à l'aise. Jamais le même soir que Glyco Balance ou AHA Balance Peel, et le matin, une protection solaire."
    },
    gb: {
      fiche: 'glyco-balance', nom: 'Glyco Balance', gamme: 'Balance', sous: "Lotion resurfaçante", couleur: '#2b3826', clair: '#c2cab7',
      role: "Cette lotion à l'acide glycolique élimine les cellules mortes qui ternissent le teint et affine le grain de peau, pour une peau plus lisse et lumineuse.",
      sens: "Une lotion liquide et légère, à appliquer au coton, sans parfum ajouté.",
      etapes: [{ moment: 'Le soir, 2 à 3 fois par semaine', texte: "Sur peau propre et sèche, passez un coton imbibé de Glyco Balance sur le visage, en évitant le contour des yeux. Ne rincez pas, puis appliquez votre crème." }],
      savoir: { 'Le soir, 2 à 3 fois par semaine': ["L'acide glycolique est le plus petit des AHA : sa molécule pénètre facilement et décolle les cellules mortes qui s'accumulent en surface et ternissent le teint. C'est ce qui le rend efficace dès les premières utilisations, et c'est aussi pour cela qu'on l'introduit progressivement."] },
      conseil: "Les soirs d'exfoliation, terminez par Ceramide Night Restore pour réconforter la peau. Le lendemain matin, la protection solaire est indispensable : les AHA rendent la peau plus sensible au soleil. Jamais le même soir qu'AHA Balance Peel ou BHA Balance."
    },
    ah: {
      fiche: 'aha-balance-peel', nom: 'AHA Balance Peel', gamme: 'Balance', sous: "Peeling hydratant", couleur: '#2b3826', clair: '#c2cab7',
      role: "Ce peeling à l'acide lactique affine le grain de peau, lisse les ridules et illumine le teint, en préservant l'hydratation.",
      sens: "Un liquide léger qui s'étale facilement, à la senteur discrète et légèrement sucrée.",
      etapes: [{ moment: 'Le soir, 1 à 2 fois par semaine', texte: "Sur peau propre et sèche, déposez quelques gouttes sur le visage et répartissez-les en fine couche, en évitant le contour des yeux. Ne rincez pas." }],
      savoir: { 'Le soir, 1 à 2 fois par semaine': ["L'acide lactique est un AHA à plus grosse molécule que l'acide glycolique : il pénètre plus lentement, il exfolie donc plus en douceur. Il fait aussi partie du facteur naturel d'hydratation de la peau : il exfolie tout en l'aidant à retenir son eau. Associé ici à l'acide hyaluronique, c'est un peeling qui hydrate."] },
      conseil: "Un léger picotement à l'application est normal et disparaît vite. Jamais le même soir que Glyco Balance ou BHA Balance, et le lendemain matin, une protection solaire comme Radiance Protect SPF 50."
    }
  };
  // la photo détourée de chaque soin (petite vignette de l'accord parfait) et la position du flacon dans sa photo
  var VIGNETTES = {
    'active-lift': 'soin-activelift', 'age-lift': 'soin-agelift', 'aha-balance-peel': 'soin-aha', 'lumibloom-arbutin': 'soin-arbutin',
    'bakuchiol-elixir': 'soin-bakuchiol', 'bha-balance': 'soin-bha', 'luminescence-boost': 'soin-boost', 'bright-control': 'soin-bright',
    'calm-balance-jour': 'soin-calmj', 'calm-balance-nuit': 'soin-calmn', 'ceramide-night-restore': 'soin-ceramide', 'radiance-cleanser': 'soin-cleanser',
    'radiance-eye-cream': 'soin-eyecream', 'eye-lift': 'soin-eyelift', 'cellular-eye-restore': 'soin-eyerest', 'fusion-balance': 'soin-fusion',
    'gelee-lumibloom': 'soin-gelee', 'glyco-balance': 'soin-glyco', 'hydra-balance': 'soin-hydra', 'luminescence-jour': 'soin-jour',
    'lumiveil-cc-cream': 'soin-lumiveil', 'milky-bloom': 'soin-milky', 'lumibloom-niac-5': 'soin-niac', 'luminescence-nuit': 'soin-nuit',
    'radiance-protect': 'soin-protect', 'lumi-pure': 'soin-pure', 'cellular-renew': 'soin-renew', 'cellular-reveal': 'soin-reveal',
    'radiance-serum': 'soin-serum', 'spot-control': 'soin-spot',
    'bright-glow-patch': 'soin-patchsNiac', 'bright-glow-decongestionnant': 'soin-patchsCafe', 'bright-glow-anti-fatigue': 'soin-patchsB5'
  };
  var CENTRE = {   // milieu du flacon dans sa photo (en %), pour qu'il soit parfaitement centré
    'active-lift': 50, 'age-lift': 49.9, 'aha-balance-peel': 50.1, 'eye-lift': 51.5, 'fusion-balance': 50.1, 'hydra-balance': 53.4,
    'lumibloom-arbutin': 66.2, 'luminescence-boost': 65.6, 'radiance-serum': 51, 'radiance-eye-cream': 67.8,
    'calm-balance-jour': 51.1
  };
  // textes communs aux quatre coffrets
  var UNIVERS = "Chez ELKHA.B, chaque soin est formulé avec précision : des actifs choisis pour leur efficacité, dosés au juste nécessaire, dans des formules vegan et d'origine naturelle, certifiées COSMOS Natural.";
  var VALEURS = ['Vegan', 'COSMOS Natural', 'Marque française'];
  // le monogramme de la maison (E inversé + B sur le même fût), au-dessus d'ELKHA.B — PARIS —
  var MONO = '<svg class="ebq-mono" viewBox="18 7 72 90" aria-hidden="true"><g fill="currentColor" fill-rule="evenodd"><rect x="48" y="10" width="7" height="84"/><rect x="21" y="10" width="27" height="2.4"/><rect x="28" y="49.12" width="20" height="2.4"/><rect x="21" y="91.60" width="27" height="2.4"/><path d="M55 10H65A16.5 20.16 0 0 1 65 50.32H55ZM55 12.4H64.5A10.8 18.36 0 0 1 64.5 49.12H55Z"/><path d="M55 50.32H68A19 21.84 0 0 1 68 94H55ZM55 51.52H67.5A12.6 20.04 0 0 1 67.5 91.60H55Z"/></g></svg>';
  var MOT_SOIN = "Merci de votre confiance. Voici tout ce qu'il faut savoir pour que votre soin donne le meilleur de lui-même.";
  var MOT = "Que ce coffret vous ait été offert ou que vous vous soyez fait plaisir, ce moment est pour vous.";
  // les soins à leur taille réelle : [hauteur en cm, photo du flacon sur le fond du site, ce qu'il fait]
  // (sur ces photos, le bas du flacon est toujours à 82,8 % de la hauteur : tous les flacons sont posés sur la même ligne)
  var FLACONS = {
    'active-lift':        [9.5,  SHOP + 'balance-active-lift-flacon-site-v8.png', 'Sérum aux peptides'],
    'age-lift':           [14.5, SHOP + 'balance-age-lift-flacon-site-v6.png', 'Crème aux peptides'],
    'eye-lift':           [7.5,  SHOP + 'balance-eye-lift-flacon-site-v7.png', 'Contour des yeux aux peptides'],
    'aha-balance-peel':   [11,   SHOP + 'balance-aha-balance-peel-flacon-site-v6.png', "Peeling à l'acide lactique"],
    'hydra-balance':      [10.5, SHOP + 'balance-hydra-balance-flacon-site-v7.png', "Gel à l'acide hyaluronique"],
    'fusion-balance':     [12.5, SHOP + 'balance-fusion-balance-flacon-site-v6.png', 'Démaquillant biphasé'],
    'luminescence-boost': [9.5,  SHOP + 'bloom-luminescence-boost-flacon-site-v1.png', 'Sérum booster de fermeté'],
    'radiance-eye-cream': [7.5,  SHOP + 'bloom-radiance-eye-cream-flacon-site-v1.png', 'Soin contour des yeux'],
    'radiance-serum':     [12.5, BASE + 'bloom-radiance-c-serum-flacon-site-v1.png', 'Sérum éclat à la vitamine C'],
    'lumibloom-arbutin':  [9.5,  SHOP + 'bloom-lumi-bloom-arbutin-flacon-site-v1.png', "Sérum anti-taches à l'alpha-arbutine"],
    'milky-bloom':        [14.5, BASE + 'bloom-milky-bloom-flacon-site-v1.png', 'Nettoyant huile-en-lait'],
    'radiance-cleanser':  [15,   BASE + 'bloom-radiance-cleanser-flacon-site-v1.png', 'Gel nettoyant éclat'],
    'lumi-pure':          [8,    BASE + 'bloom-lumi-pure-flacon-site-v1.png', 'Masque purifiant'],
    'gelee-lumibloom':    [11,   BASE + 'bloom-gelee-lumibloom-flacon-site-v1.png', 'Soin équilibrant aux prébiotiques'],
    'lumibloom-niac-5':   [14.5, BASE + 'bloom-lumibloom-niac-5-flacon-site-v1.png', 'Gel à la niacinamide'],
    'luminescence-jour':  [14.5, BASE + 'bloom-luminescence-jour-flacon-site-v1.png', 'Crème de jour éclat'],
    'luminescence-nuit':  [14.5, BASE + 'bloom-luminescence-nuit-flacon-site-v1.png', 'Crème de nuit repulpante'],
    'calm-balance-jour':  [14.5, SHOP + 'balance-calm-balance-jour-flacon-site-v6.png', 'Crème de jour apaisante'],
    'calm-balance-nuit':  [14.5, SHOP + 'balance-calm-balance-nuit-flacon-site-v6.png', 'Crème de nuit apaisante'],
    'ceramide-night-restore': [14.5, SHOP + 'balance-ceramide-night-restore-flacon-site-v6.png', 'Crème de nuit aux céramides'],
    'cellular-eye-restore':   [7.5,  SHOP + 'balance-cellular-eye-restore-flacon-site-v6.png', 'Sérum contour des yeux'],
    'cellular-renew':     [14.5, SHOP + 'balance-cellular-renew-flacon-site-v6.png', 'Crème alternative au rétinol'],
    'cellular-reveal':    [10.5, SHOP + 'balance-cellular-reveal-flacon-site-v6.png', 'Sérum alternative au rétinol'],
    'bakuchiol-elixir':   [11,   SHOP + 'balance-bakuchiol-elixir-flacon-site-v7.png', 'Élixir au bakuchiol'],
    'spot-control':       [7.5,  SHOP + 'balance-spot-control-flacon-site-v7.png', 'Sérum anti-taches ciblé'],
    'bright-control':     [14.5, SHOP + 'balance-bright-control-flacon-site-v6.png', 'Crème correctrice anti-taches'],
    'bha-balance':        [16,   SHOP + 'balance-bha-balance-flacon-site-v6.png', "Lotion à l'acide salicylique"],
    'glyco-balance':      [12.5, SHOP + 'balance-glyco-balance-flacon-site-v6.png', "Lotion à l'acide glycolique"]
  };
  var LIENS = { site: 'https://elkhab.com/', routines: 'https://routines.elkhab.com/' };
  // ─────────────────────────── FIN DES RÉGLAGES ───────────────────────────

  var DONNEES = [BASE + 'produits-data-test.js', BASE + 'produits-balance-test.js'];
  var AVIS = BASE + 'avis-engine.js', SKINID = BASE + 'skin-id-engine.js?v=6';

  var CSS = ""
  + "#eb-rituel{font-family:'Montserrat',sans-serif;color:#1d1b18;background:#f5f4f0;text-align:center;-webkit-font-smoothing:antialiased;width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden}"
  + "#eb-rituel *{box-sizing:border-box}"
  + "#eb-rituel h1,#eb-rituel h2,#eb-rituel p{margin:0;font-family:'Montserrat',sans-serif}"
  + ".ebq-bande{height:74px;background-size:cover;background-position:center}"
  + ".ebq-in{max-width:520px;margin:0 auto;padding:0 0 10px}"
  + ".ebq-logo{font-size:20px;letter-spacing:.42em;padding-left:.42em;font-weight:400;margin-top:26px;color:#111}"
  + ".ebq-paris{font-size:7px;letter-spacing:.6em;padding-left:.6em;color:#555;margin-top:4px;display:flex;align-items:center;justify-content:center;gap:9px}"
  + ".ebq-paris:before,.ebq-paris:after,#ebq-ouv .ebq-op:before,#ebq-ouv .ebq-op:after{content:'';display:block;width:18px;height:1px;background:currentColor;opacity:.7}"
  + "#eb-rituel .ebq-k{font-size:9.5px;letter-spacing:.32em;padding-left:.32em;text-transform:uppercase;font-weight:600;margin:30px 0 10px}"
  + "#eb-rituel h1{font-size:23px;letter-spacing:.2em;padding-left:.2em;font-weight:500;text-transform:uppercase;line-height:1.3;color:#111}"
  + "#eb-rituel .ebq-sous{font-size:11px;letter-spacing:.24em;padding-left:.24em;text-transform:uppercase;color:#4a453e;margin-top:8px}"
  + ".ebq-g{display:block;width:70px;height:1px;margin:18px auto}"
  + "#eb-rituel .ebq-bien{font-size:14px;line-height:1.7;margin:0 26px;color:#2a2723}"
  + "#eb-rituel .ebq-bien b{display:block;font-weight:600;color:#111}"
  + ".ebq-photo{margin:20px 0 0;overflow:hidden}"
  + ".ebq-photo img{display:block;width:100%;height:100%;object-fit:cover}"
  + "#eb-rituel h2{font-size:11px;letter-spacing:.3em;padding-left:.3em;text-transform:uppercase;font-weight:600;margin:34px 0 16px;color:#111}"
  + ".ebq-soins{display:grid;gap:6px;padding:0 14px;align-items:start}"
  + ".ebq-soin{display:flex;flex-direction:column;align-items:center;background:none;border:0;padding:0;font-family:inherit;color:inherit}"
  + ".ebq-fl{display:flex;align-items:flex-end;justify-content:center;height:146px;width:100%;margin-bottom:24px}"
  + ".ebq-fl img{display:block;width:auto;max-width:100%}"
  + ".ebq-soin b{font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;margin-top:10px;line-height:1.35}"
  + ".ebq-soin span{font-size:10px;color:#5a544c;margin-top:4px;line-height:1.35}"
  + "#eb-rituel .ebq-mom{font-size:10px;letter-spacing:.28em;padding-left:.28em;text-transform:uppercase;font-weight:600;margin:26px 0 10px}"
  + ".ebq-et{list-style:none;margin:0 22px;padding:0;text-align:left}"
  + ".ebq-et li{position:relative;padding:12px 0 12px 34px;border-top:1px solid #e3dccf;font-size:13px;line-height:1.6;color:#2a2723}"
  + ".ebq-et li:last-child{border-bottom:1px solid #e3dccf}"
  + ".ebq-et li i{position:absolute;left:0;top:13px;font-style:normal;font-size:10px;color:#9a8f80}"
  + ".ebq-et li b{display:block;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;margin-bottom:2px;color:#111}"
  + "#eb-rituel .ebq-cons{margin:30px 26px 0;font-size:13px;line-height:1.7;color:#2a2723}"
  + "#eb-rituel .ebq-cons b{display:block;font-size:9.5px;letter-spacing:.28em;padding-left:.28em;text-transform:uppercase;margin-bottom:10px}"
  + ".ebq-btn{display:block;width:calc(100% - 44px);margin:28px 22px 0;background:#111;color:#f5f4f0;border:1px solid #111;font-family:'Montserrat',sans-serif;font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;font-weight:600;padding:17px 10px;cursor:pointer;text-decoration:none}"
  + ".ebq-btn2{margin-top:10px;background:transparent;color:#111}"
  + "#eb-rituel .ebq-lien{display:inline-block;margin:22px 0 0;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#111;text-decoration:none;border-bottom:1px solid #111;padding-bottom:3px}"
  + "#eb-rituel .ebq-fin{font-size:12.5px;font-style:italic;color:#4a453e;line-height:1.7;margin:34px 30px 34px}"
  + ".ebq-liste{display:grid;gap:10px;margin:26px 22px 0}"
  + ".ebq-liste a{display:block;padding:16px;border:1px solid #e3dccf;color:#111;text-decoration:none;font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:600}"
  // ── version immersive : univers, petit mot, textures, moments jour / nuit, « Le saviez-vous ? »
  + "#eb-rituel .ebq-bien2{font-size:15px;font-weight:600;color:#111;margin:0 0 10px}"
  + "#eb-rituel .ebq-univ{font-size:13.5px;line-height:1.8;margin:0 28px;color:#2a2723}"
  + ".ebq-val{display:flex;justify-content:center;flex-wrap:wrap;gap:4px 0;margin:22px 16px 0;font-size:7.5px;letter-spacing:.42em;text-transform:uppercase;font-weight:300;color:#2a2723}"
  + ".ebq-val span+span:before{content:'\\00B7';margin:0 10px;color:var(--c)}"
  + "#eb-rituel .ebq-mot{margin:34px 40px 0;font-style:italic;font-weight:300;font-size:12px;line-height:1.8;letter-spacing:.02em;color:#5a544c;text-wrap:balance}"
  + ".ebq-soin em{display:block;font-size:11px;line-height:1.6;color:#5a544c;margin-top:6px;padding:0 2px}"
  + ".ebq-m{padding:40px 24px 42px;text-align:left}"
  + ".ebq-mi{max-width:480px;margin:0 auto}"
  + "#eb-rituel .ebq-mh{font-size:10px;letter-spacing:.32em;padding-left:.32em;text-transform:uppercase;font-weight:600;text-align:center}"
  + "#eb-rituel .ebq-st{font-size:13px;line-height:1.7;margin-top:18px}"
  + ".ebq-st b{display:block;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;margin-bottom:4px}"
  + ".ebq-sav{margin-top:24px;padding-top:18px;border-top:1px solid #e3dccf}"
  + ".ebq-sav i{display:block;font-style:normal;font-size:9px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;margin-bottom:8px}"
  + "#eb-rituel .ebq-sav p{font-size:13px;line-height:1.75}"
  + "#eb-rituel .ebq-sav p+p{margin-top:14px}"
  + ".ebq-jour .ebq-mh,.ebq-jour .ebq-sav i{color:var(--c)}.ebq-jour .ebq-st b{color:#111}.ebq-jour{color:#2a2723}"
  + ".ebq-nuit{color:#efe4d6}.ebq-nuit .ebq-mh,.ebq-nuit .ebq-sav i,.ebq-nuit .ebq-st b{color:var(--o)}.ebq-nuit .ebq-sav{border-color:rgba(255,255,255,.2)}"
  + ".ebq-jour+.ebq-jour{padding-top:0}"
  + ".ebq-js .ebq-rv{opacity:0;transform:translateY(16px);transition:opacity .9s ease,transform .9s ease}"
  + ".ebq-js .ebq-rv.ebq-vu{opacity:1;transform:none}"
  // ── page « choisissez votre soin » (adresse sans code, ou code pas encore connu)
  + ".ebq-gr{display:grid;grid-template-columns:repeat(3,1fr);gap:22px 8px;margin:0 14px}"
  + ".ebq-gr a{display:flex;flex-direction:column;align-items:center;text-decoration:none;color:#111}"
  + ".ebq-gr span{height:120px;display:flex;align-items:flex-end;justify-content:center}"
  + ".ebq-gr img{max-height:120px;max-width:100%;width:auto;display:block}"
  + ".ebq-gr b{font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;margin-top:10px;line-height:1.4;text-align:center}"
  + ".ebq-gr i{font-style:normal;font-size:9.5px;color:#6b655c;margin-top:3px;line-height:1.35;text-align:center}"
  + "@media (min-width:700px){.ebq-gr{grid-template-columns:repeat(4,1fr)}}"
  // ── griffe de la maison (haut des pages des soins)
  + ".ebq-griffe{padding-top:30px;margin-bottom:48px;display:flex;flex-direction:column;align-items:center;color:#111}"
  + ".ebq-mono{display:block;width:auto;height:32px}"
  + ".ebq-filet{display:block;width:18px;height:1px;background:#111;opacity:.45;margin:11px 0 10px}"
  + "#eb-rituel .ebq-griffe .ebq-logo{margin-top:0;font-size:14px;letter-spacing:.42em;padding-left:.42em}"
  + "#eb-rituel .ebq-griffe .ebq-paris{font-size:5.5px;margin-top:4px;gap:7px}"
  + "#eb-rituel .ebq-griffe .ebq-paris:before,#eb-rituel .ebq-griffe .ebq-paris:after{width:13px}"
  + "#eb-rituel .ebq-griffe+.ebq-k{margin-top:0}"
  // ── page d'un soin
  + ".ebq-bande2{height:46px}"
  + ".ebq-soin1{display:flex;align-items:flex-end;gap:16px;margin:0 22px;text-align:left}"
  + ".ebq-soin1 span{flex:none;width:112px;display:flex;justify-content:center;overflow:hidden}"
  + ".ebq-soin1 img{display:block;height:190px;width:auto;margin-bottom:-28px}"
  + ".ebq-soin1 div{padding-bottom:6px}"
  + ".ebq-soin1 b{display:block;font-size:9px;letter-spacing:.26em;text-transform:uppercase;font-weight:600;margin-bottom:8px;color:var(--c)}"
  + "#eb-rituel .ebq-soin1 p{font-size:13px;line-height:1.7}"
  + "#eb-rituel .ebq-sens{margin:28px 30px 0;font-style:italic;font-size:13px;line-height:1.7;color:#5a544c}"
  + ".ebq-cons2{padding:34px 24px 36px;text-align:left;color:#fbf6f2}"
  + ".ebq-cons2 i{display:block;font-style:normal;font-size:9px;letter-spacing:.3em;padding-left:.3em;text-transform:uppercase;font-weight:600;margin-bottom:10px;text-align:center}"
  + "#eb-rituel .ebq-cons2 p{font-size:13px;line-height:1.75;color:#fbf6f2}"
  + ".ebq-acc{display:flex;align-items:center;gap:16px;margin:0 22px;padding:16px 18px;border:1px solid #e3dccf;text-align:left;color:inherit;text-decoration:none;background:transparent;font-family:inherit;cursor:pointer;width:calc(100% - 44px)}"
  + ".ebq-acc img{height:104px;width:auto;flex:none}"
  + ".ebq-acc b{display:block;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;color:#111;margin-bottom:6px}"
  + ".ebq-acc em{display:block;font-style:normal;font-size:12px;line-height:1.6;color:#4a453e}"
  + ".ebq-acc u{display:inline-block;margin-top:10px;font-size:9px;letter-spacing:.22em;text-transform:uppercase;text-decoration:none;border-bottom:1px solid #111;padding-bottom:2px;color:#111}"
  // ouverture d'un soin : l'étiquette (fond du site, couleur du soin tout en bas) et le flacon
  + "#ebq-ouv .ebq-fl0{display:block;height:min(36vh,280px);width:auto;margin:2vh auto 0}"
  + "#ebq-ouv.ebq-soin .ebq-ok{margin-top:6vh;font-weight:600}"
  + "#ebq-ouv.ebq-soin .ebq-on{font-size:25px}"
  + "#ebq-ouv.ebq-soin button{margin-top:4vh}"
  + "#ebq-ouv.ebq-soin .ebq-c{justify-content:flex-start;padding-top:9vh}"
  // ── écran d'ouverture (le couvercle)
  + "#ebq-ouv{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483000;font-family:'Montserrat',sans-serif;text-align:center;-webkit-font-smoothing:antialiased;overflow:hidden}"
  + "#ebq-ouv .ebq-p{position:absolute;top:0;bottom:0;width:50.5%;overflow:hidden;transition:transform 1.2s cubic-bezier(.7,0,.25,1) .35s}"
  + "#ebq-ouv .ebq-pg{left:0}#ebq-ouv .ebq-pd{right:0}"
  + "#ebq-ouv .ebq-p i{position:absolute;top:0;bottom:0;width:100vw;background-size:cover;background-position:center}"
  + "#ebq-ouv .ebq-pg i{left:0}#ebq-ouv .ebq-pd i{right:0}"
  + "#ebq-ouv .ebq-p b{position:absolute;top:0;left:0;right:0;bottom:0}"
  + "#ebq-ouv .ebq-c{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 20px;transition:opacity .45s ease}"
  + "#ebq-ouv .ebq-ol{font-size:22px;letter-spacing:.45em;padding-left:.45em}"
  + "#ebq-ouv .ebq-op{font-size:7.5px;letter-spacing:.7em;padding-left:.7em;margin-top:5px;opacity:.85;display:flex;align-items:center;justify-content:center;gap:10px}"
  + "#ebq-ouv{visibility:hidden}#ebq-ouv.ebq-vis{visibility:visible;animation:ebqApparait .6s ease}@keyframes ebqApparait{from{opacity:0}}"
  + "#ebq-ouv button.ebq-att{opacity:.55}"
  + "#ebq-ouv .ebq-ok{font-size:9.5px;letter-spacing:.34em;padding-left:.34em;text-transform:uppercase;margin-top:16vh;opacity:.9}"
  + "#ebq-ouv .ebq-on{font-size:27px;letter-spacing:.16em;padding-left:.16em;font-weight:500;text-transform:uppercase;margin-top:14px;line-height:1.3}"
  + "#ebq-ouv .ebq-os{font-size:10.5px;letter-spacing:.26em;padding-left:.26em;text-transform:uppercase;margin-top:10px;font-weight:500}"
  + "#ebq-ouv button{margin-top:14vh;background:transparent;border:1px solid currentColor;color:inherit;font-family:inherit;padding:16px 34px 16px calc(34px + .26em);font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;font-weight:600;cursor:pointer}"
  + "#ebq-ouv .ebq-of{position:absolute;bottom:26px;left:0;right:0;font-size:8.5px;letter-spacing:.3em;padding-left:.3em;text-transform:uppercase;opacity:.75}"
  + "#ebq-ouv.ebq-ouvert .ebq-c{opacity:0}#ebq-ouv.ebq-ouvert .ebq-pg{transform:translateX(-101%)}#ebq-ouv.ebq-ouvert .ebq-pd{transform:translateX(101%)}"
  + "@media (prefers-reduced-motion:reduce){#ebq-ouv .ebq-p{transition:none}#ebq-ouv{transition:opacity .5s}#ebq-ouv.ebq-ouvert{opacity:0}}"
  + "@media (min-width:700px){.ebq-bande{height:110px}#eb-rituel h1{font-size:28px}#ebq-ouv .ebq-on{font-size:34px}#ebq-ouv .ebq-ol{font-size:26px}}";

  function esc(t){ return String(t == null ? '' : t).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function charger(src, ok){ var s = document.createElement('script'); s.src = src; s.async = false; s.onload = ok; s.onerror = ok; document.head.appendChild(s); }
  function chargerTous(liste, fin){ var i = 0; (function suivant(){ if(i >= liste.length) return fin(); charger(liste[i++], suivant); })(); }

  function code(){
    var q = location.search.replace(/^\?/, '').split('&')[0].toLowerCase();
    if(COFFRETS[q] || SOINS[q]) return q;
    for(var c in SOINS) if(SOINS[c].fiche === q) return c;
    try { var c = new URL(location.href).searchParams.get('coffret'); if(c && COFFRETS[c]) return c; } catch(e){}
    return '';
  }

  function soinsHTML(P, soins, sens){
    sens = sens || {};
    var reel = soins.filter(function(s){ return FLACONS[s]; });
    var hmax = Math.max.apply(null, reel.map(function(s){ return FLACONS[s][0]; }).concat([1]));
    return '<div class="ebq-soins" style="grid-template-columns:repeat(' + soins.length + ',1fr)">' + soins.map(function(s){
      var f = FLACONS[s], p = P[s] || {};
      var h = f ? Math.round(138 * f[0] / hmax) : 120;
      var img = f ? f[1] : ((p.media && (p.media.miniature || (p.media.images && p.media.images[0]))) || '');
      return '<div class="ebq-soin"><span class="ebq-fl">' + (img ? '<img src="' + esc(img + (img.indexOf('cdn.shopify.com') < 0 ? '' : (img.indexOf('?') < 0 ? '?' : '&') + 'width=400')) + '" alt="' + esc((p.nom || '') + ' ELKHA.B') + '" style="height:' + h + 'px;margin-bottom:-' + Math.round(h * 0.172) + 'px" loading="lazy">' : '') + '</span>'
        + '<b>' + esc(p.nom || '') + '</b>' + (sens[s] ? '<em>' + esc(sens[s]) + '</em>' : '<span>' + esc(f ? f[2] : '') + '</span>') + '</div>';
    }).join('') + '</div>';
  }

  function estNuit(m){ return /soir/i.test(m) && !/matin/i.test(m); }
  function momentsHTML(P, ro, C){
    var groupes = [], g = null;
    (ro.etapes || []).forEach(function(e){
      var m = e.moment || ro.moment || '';
      if(!g || g.m !== m){ g = { m: m, et: [] }; groupes.push(g); }
      g.et.push(e);
    });
    return groupes.map(function(g){
      var nuit = estNuit(g.m), sav = (C.savoir || {})[g.m] || [];
      return '<section class="ebq-m ' + (nuit ? 'ebq-nuit' : 'ebq-jour') + '"' + (nuit ? ' style="background:' + C.nuit + '"' : '') + '><div class="ebq-mi ebq-rv">'
        + (g.m ? '<p class="ebq-mh">' + esc(g.m) + '</p>' : '')
        + g.et.map(function(e){ var nom = e.titre || (P[e.soin] && P[e.soin].nom) || ''; return '<p class="ebq-st">' + (nom ? '<b>' + esc(nom) + '</b>' : '') + esc(e.texte) + '</p>'; }).join('')
        + (sav.length ? '<div class="ebq-sav"><i>Le saviez-vous ?</i>' + sav.map(function(t){ return '<p>' + esc(t) + '</p>'; }).join('') + '</div>' : '')
        + '</div></section>';
    }).join('');
  }

  // l'écran d'ouverture : affiché dès le scan, pendant que les fiches se chargent derrière ;
  // les motifs de la boîte s'écartent ensuite comme un couvercle qu'on soulève
  var OUV = null;
  function styles(){ if(document.getElementById('ebq-css')) return; var st = document.createElement('style'); st.id = 'ebq-css'; st.textContent = CSS; document.head.appendChild(st); }
  // cadre les motifs sur leurs carreaux : un nombre entier de carreaux sur la largeur (et la hauteur)
  function carreaux(el, G, larg, haut, cible, rang){
    var n = Math.max(1, Math.round(larg / cible)), tx = larg / n, ty = tx;
    if(haut){ var m = Math.max(1, Math.round(haut / tx)); ty = haut / m; }
    el.style.backgroundSize = (G[0] * tx) + 'px ' + (G[1] * ty) + 'px';
    el.style.backgroundRepeat = rang == null ? 'repeat' : 'repeat-x';
    el.style.backgroundPosition = (Math.floor((n - G[0]) / 2) * tx) + 'px ' + (rang == null ? 0 : -rang * ty) + 'px';
    return tx;
  }
  function bandes(root, C){
    if(!C.grille) return;
    var bs = root.querySelectorAll('.ebq-bande');
    var go = function(){ [].forEach.call(bs, function(b, i){
      var w = b.clientWidth || root.clientWidth; if(!w) return;
      var t = carreaux(b, C.grille, w, 0, w < 700 ? 82 : 120, i ? C.grille[3] : C.grille[2]);
      b.style.height = t + 'px';
    }); };
    go(); window.addEventListener('resize', go);
  }
  function ouverture(C){
    styles();
    var o = document.createElement('div'); o.id = 'ebq-ouv'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', 'Votre rituel ' + C.nom);
    var soin = !!C.flacon;   // un soin : l'étiquette du flacon ; un coffret : les motifs de sa boîte
    var pan = function(c){ return soin
      ? '<div class="ebq-p ' + c + '" style="background:linear-gradient(180deg,#f5f4f0 0%,#f5f4f0 72%,' + C.clair + ' 87%,' + C.couleur + ' 100%)"></div>'
      : '<div class="ebq-p ' + c + '" style="background:' + (C.base || '#111') + '"><i style="background-image:url(' + esc(C.motif) + ')"></i><b style="background:' + C.voile + '"></b></div>'; };
    if(soin) o.className = 'ebq-soin';
    o.innerHTML = pan('ebq-pg') + pan('ebq-pd')
      + '<div class="ebq-c" style="color:' + (soin ? '#111' : C.encre) + '"><div class="ebq-ol">ELKHA.B</div><div class="ebq-op"' + (soin ? ' style="color:#555"' : '') + '>PARIS</div>'
      + '<div class="ebq-ok"' + (soin ? ' style="color:' + C.couleur + '"' : '') + '>Votre rituel</div><div class="ebq-on">' + esc(C.nom) + '</div><div class="ebq-os"' + (soin ? ' style="color:#4a453e"' : '') + '>' + esc(C.sous) + '</div>'
      + (soin ? '<img class="ebq-fl0" src="' + esc(C.flacon) + '" alt="" style="transform:translateX(' + (50 - (C.centre || 50)) + '%)">' : '')
      + '<button type="button">Ouvrir mon rituel</button><div class="ebq-of"' + (soin ? ' style="color:#fff"' : '') + '>' + (soin ? esc(C.gamme) : 'Édition des fêtes') + '</div></div>';
    document.body.appendChild(o);
    if(!soin && C.grille){
      var cadre = function(){ var w = window.innerWidth, h = window.innerHeight, cible = w < 700 ? 98 : 170;
        cible = w / (2 * Math.max(1, Math.round(w / (2 * cible))));
        [].forEach.call(o.querySelectorAll('.ebq-p i'), function(i){ carreaux(i, C.grille, w, h, cible); }); };
      cadre(); window.addEventListener('resize', cadre);
    }
    // l'écran reste caché (le logo de chargement reste visible) tant que l'image des motifs n'est pas arrivée
    var vu = false, montrer = function(){ if(vu) return; vu = true; o.classList.add('ebq-vis'); };
    var im = new Image(); im.onload = im.onerror = montrer; im.src = C.motif || C.flacon; if(im.complete) montrer();
    setTimeout(montrer, 4000);
    var html = document.documentElement, avant = [html.style.overflow, document.body.style.overflow];
    html.style.overflow = 'hidden'; document.body.style.overflow = 'hidden';
    var fini = false, pret = false, demande = false, btn = o.querySelector('button');
    function fermer(){
      if(fini) return; fini = true;
      html.style.overflow = avant[0]; document.body.style.overflow = avant[1];
      if(o.parentNode) o.parentNode.removeChild(o);
    }
    function ouvrir(){ window.scrollTo(0, 0); o.classList.add('ebq-ouvert'); setTimeout(fermer, 1700); }
    btn.addEventListener('click', function(){ if(pret) ouvrir(); else { demande = true; btn.classList.add('ebq-att'); } });
    return { pret: function(){ pret = true; if(demande) ouvrir(); }, fermer: fermer };
  }

  function apparitions(root){
    if(!('IntersectionObserver' in window)) return;
    root.classList.add('ebq-js');
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('ebq-vu'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    [].forEach.call(root.querySelectorAll('.ebq-rv'), function(el){ io.observe(el); });
  }

  function pageSoin(root, P, S){
    var r = P[S.fiche], coul = S.couleur, f = FLACONS[S.fiche];
    document.title = 'Votre rituel ' + r.nom + ' | ELKHA.B';
    root.style.setProperty('--c', coul); root.style.setProperty('--o', S.clair);
    // le rituel du soin, en moments (même présentation que les coffrets)
    var C2 = { savoir: S.savoir || {}, nuit: S.nuit || coul };
    var etapes = (S.etapes || []).map(function(e){ return { moment: e.moment, soin: S.fiche, texte: e.texte }; });
    // l'accord parfait de la fiche
    var a = r.accord && P[r.accord.fiche] ? r.accord : null, acc = '';
    if(a){
      var vig = VIGNETTES[a.fiche] ? BASE + VIGNETTES[a.fiche] + '.webp' : '';
      var phr = String(a.texte || '').split('\n').filter(function(x){ return x.trim(); });
      acc = '<h2>Pour aller plus loin</h2><button type="button" class="ebq-acc ebq-rv" data-fiche="' + esc(a.fiche) + '">' + (vig ? '<img src="' + esc(vig) + '" alt="' + esc(P[a.fiche].nom + ' ELKHA.B') + '" loading="lazy">' : '')
        + '<span><b>' + esc(P[a.fiche].nom) + '</b><em>' + esc(phr.length > 1 ? phr[1] : (phr[0] || '')) + '</em><u>Découvrir</u></span></button>';
    }
    root.innerHTML = '<div class="ebq-in">'
      + '<div class="ebq-griffe">' + MONO + '<i class="ebq-filet"></i><div class="ebq-logo">ELKHA.B</div><div class="ebq-paris">PARIS</div></div>'
      + '<p class="ebq-k" style="color:' + coul + '">Votre rituel</p>'
      + '<h1>' + esc(r.nom) + '</h1><p class="ebq-sous">' + esc(S.gamme + ' · ' + S.sous) + '</p>'
      + '<i class="ebq-g" style="background:linear-gradient(90deg,#f5f4f0,' + coul + ')"></i>'
      + '<p class="ebq-bien2">Bienvenue parmi les B.</p>'
      + '<p class="ebq-univ">' + esc(UNIVERS) + '</p>'
      + '<div class="ebq-val">' + VALEURS.map(function(v){ return '<span>' + esc(v) + '</span>'; }).join('') + '</div>'
      + '<p class="ebq-mot ebq-rv">' + esc(MOT_SOIN) + '</p>'
      + '<div class="ebq-rv"><h2>Votre soin</h2><div class="ebq-soin1">'
      +   (f ? '<span><img src="' + esc(f[1] + '?width=500') + '" alt="' + esc(r.nom + ' ELKHA.B ' + S.gamme) + '" style="transform:translateX(' + (50 - (CENTRE[S.fiche] || 50)) + '%)"></span>' : '')
      +   '<div><b>Ce qu\'il fait</b><p>' + esc(S.role) + '</p></div></div>'
      +   (S.sens ? '<p class="ebq-sens">' + esc(S.sens) + '</p>' : '') + '</div>'
      + '<h2 style="margin-bottom:0">Votre rituel</h2>'
      + '</div>'
      + momentsHTML(P, { etapes: etapes }, C2)
      + (S.conseil ? '<section class="ebq-cons2" style="background:' + coul + '"><div class="ebq-mi ebq-rv"><i>Pour bien commencer</i><p>' + esc(S.conseil) + '</p></div></section>' : '')
      + '<div class="ebq-in">' + acc
      + '<button type="button" class="ebq-btn" data-a="avis">Donner mon avis</button>'
      + '<button type="button" class="ebq-btn ebq-btn2" data-a="skinid">Faire mon Skin ID</button>'
      + '<a class="ebq-lien" href="' + LIENS.site + '">Découvrir ELKHA.B</a>'
      + '<p class="ebq-fin">Bienvenue parmi les B. : beauté, bien-être, et surtout bien dans sa peau.</p>'
      + '</div>';
    apparitions(root);
    if(OUV) OUV.pret();
    root.addEventListener('click', function(ev){
      var b = ev.target.closest && ev.target.closest('[data-a],[data-fiche]'); if(!b) return;
      if(b.getAttribute('data-fiche')){ location.href = (P[b.getAttribute('data-fiche')].gamme === 'balance' ? 'https://balance.elkhab.com/' : 'https://bloom.elkhab.com/') + '?fiche=' + b.getAttribute('data-fiche'); return; }
      if(b.getAttribute('data-a') === 'avis'){
        var items = [{ n: r.avis || r.nom, d: r.nom, i: f ? f[1] : '' }];
        if(typeof window.ebAvisOpen === 'function') window.ebAvisOpen(items); else charger(AVIS, function(){ if(window.ebAvisOpen) window.ebAvisOpen(items); });
      } else {
        if(typeof window.ebSkinIdOpen === 'function') window.ebSkinIdOpen(); else charger(SKINID, function(){ if(window.ebSkinIdOpen) window.ebSkinIdOpen(); });
      }
    });
  }

  function page(root){
    var P = window.EB_PRODUITS || {}, k = code(), C = COFFRETS[k];
    styles();
    if(SOINS[k] && P[SOINS[k].fiche]) return pageSoin(root, P, SOINS[k]);
    if(!C || !P[C.fiche]){
      if(OUV){ OUV.fermer(); OUV = null; }
      // adresse sans code (ou code pas encore connu) : tous les rituels, la cliente touche le sien
      document.title = 'Votre rituel | ELKHA.B';
      var parFiche = {}; for(var c in SOINS) parFiche[SOINS[c].fiche] = c;
      var grille = function(g){
        return '<div class="ebq-gr">' + Object.keys(VIGNETTES).filter(function(id){ var x = P[id]; return x && (x.gamme || 'bloom') === g; }).map(function(id){
          var x = P[id], lien = parFiche[id] ? '?' + parFiche[id] : (g === 'balance' ? 'https://balance.elkhab.com/' : 'https://bloom.elkhab.com/') + '?fiche=' + id;
          return '<a href="' + esc(lien) + '"><span><img src="' + esc(BASE + VIGNETTES[id] + '.webp') + '" alt="' + esc(x.nom + ' ELKHA.B') + '" loading="lazy"></span><b>' + esc(x.nom) + '</b>' + (x.sousTitre ? '<i>' + esc(String(x.sousTitre).split(/\n| · /)[0]) + '</i>' : '') + '</a>';
        }).join('') + '</div>';
      };
      root.innerHTML = '<div class="ebq-in">' + '<div class="ebq-griffe">' + MONO + '<i class="ebq-filet"></i><div class="ebq-logo">ELKHA.B</div><div class="ebq-paris">PARIS</div></div>'
        + '<p class="ebq-k" style="color:#8f8676">ELKHA.B</p><h1>Votre rituel</h1><i class="ebq-g" style="background:linear-gradient(90deg,#f5f4f0,#8f8676)"></i><p class="ebq-bien2">Bienvenue parmi les B.</p>'
        + '<p class="ebq-univ">Touchez votre soin pour découvrir son rituel : comment l\'appliquer, ce qu\'il fait pour votre peau et nos conseils pour en tirer le meilleur.</p>'
        + '<h2>Coffrets des fêtes</h2><div class="ebq-liste" style="margin-top:0">'
        + Object.keys(COFFRETS).map(function(c){ var f = P[COFFRETS[c].fiche]; return f ? '<a href="?' + c + '">' + esc(f.nom) + '</a>' : ''; }).join('')
        + '</div><h2>Les soins Bloom</h2>' + grille('bloom') + '<h2>Les soins Balance</h2>' + grille('balance')
        + '<a class="ebq-lien" href="' + LIENS.site + '">Découvrir ELKHA.B</a><p class="ebq-fin">Bienvenue parmi les B. : beauté, bien-être, et surtout bien dans sa peau.</p></div>';
      return;
    }
    var r = P[C.fiche], ro = r.routine || {}, soins = (ro.soins || []).filter(function(s){ return P[s]; }), coul = C.couleur;
    document.title = 'Votre rituel ' + r.nom + ' | ELKHA.B';
    root.style.setProperty('--c', coul); root.style.setProperty('--o', C.or || coul);
    root.innerHTML = '<div class="ebq-bande" style="background-image:url(' + esc(C.bande) + ')"></div>'
      + '<div class="ebq-in">'
      + '<div class="ebq-griffe">' + MONO + '<i class="ebq-filet"></i><div class="ebq-logo">ELKHA.B</div><div class="ebq-paris">PARIS</div></div>'
      + '<p class="ebq-k" style="color:' + coul + '">Votre rituel</p>'
      + '<h1>' + esc(r.nom) + '</h1><p class="ebq-sous">' + esc(C.sous) + '</p>'
      + '<i class="ebq-g" style="background:linear-gradient(90deg,#f5f4f0,' + coul + ')"></i>'
      + '<p class="ebq-bien2">Bienvenue parmi les B.</p>'
      + '<p class="ebq-univ">' + esc(UNIVERS) + '</p>'
      + '<div class="ebq-val">' + VALEURS.map(function(v){ return '<span>' + esc(v) + '</span>'; }).join('') + '</div>'
      + '<p class="ebq-mot ebq-rv">' + esc(MOT) + '</p>'
      + '<div class="ebq-rv"><h2>Dans votre coffret</h2>' + soinsHTML(P, soins, C.sens) + '</div>'
      + '<h2 style="margin-bottom:0">Votre rituel</h2>'
      + '</div>'
      + momentsHTML(P, ro, C)
      + '<div class="ebq-in">'
      + '<button type="button" class="ebq-btn" data-a="avis">Donner mon avis</button>'
      + '<button type="button" class="ebq-btn ebq-btn2" data-a="skinid">Faire mon Skin ID</button>'
      + '<a class="ebq-lien" href="' + LIENS.site + '">Découvrir ELKHA.B</a>'
      + '<p class="ebq-fin">Bienvenue parmi les B. : beauté, bien-être, et surtout bien dans sa peau.</p>'
      + '</div><div class="ebq-bande" style="background-image:url(' + esc(C.bande) + ')"></div>';
    bandes(root, C);
    apparitions(root);
    if(OUV) OUV.pret();

    root.addEventListener('click', function(ev){
      var b = ev.target.closest && ev.target.closest('[data-a]'); if(!b) return;
      if(b.getAttribute('data-a') === 'avis'){
        var items = soins.map(function(s){ var p = P[s], f = FLACONS[s]; return { n: p.avis || p.nom, d: p.nom, i: f ? f[1] : '' }; });
        if(typeof window.ebAvisOpen === 'function') window.ebAvisOpen(items); else charger(AVIS, function(){ if(window.ebAvisOpen) window.ebAvisOpen(items); });
      } else {
        if(typeof window.ebSkinIdOpen === 'function') window.ebSkinIdOpen(); else charger(SKINID, function(){ if(window.ebSkinIdOpen) window.ebSkinIdOpen(); });
      }
    });
  }

  function demarrer(){
    var root = document.getElementById('eb-rituel');
    if(!root){ root = document.createElement('div'); root.id = 'eb-rituel'; document.body.appendChild(root); }
    if(root.getAttribute('data-ok')) return; root.setAttribute('data-ok', '1');
    var k = code(), C = COFFRETS[k], S = SOINS[k];
    if(C && C.motif) OUV = ouverture(C);
    // les soins : pas d'écran d'ouverture, on arrive directement sur la page (l'ouverture reste pour les coffrets)
    if(window.EB_PRODUITS && (C || S) && window.EB_PRODUITS[(C || S).fiche]) return page(root);
    chargerTous(DONNEES, function(){ page(root); });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer); else demarrer();
})();
