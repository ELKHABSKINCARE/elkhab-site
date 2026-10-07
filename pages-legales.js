/* ═══════════════════════════════════════════════════════════════════════
   ELKHA.B — PAGES LÉGALES EN PANNEAU (pages-legales.js)
   Les liens du pied de page (CGV, mentions légales…) ouvrent le texte dans
   un panneau beige qui glisse par-dessus la page, sur tous les sites.
   Chargé automatiquement par cart-engine.js (rien à ajouter dans Carrd).
   ───────────────────────────────────────────────────────────────────────
   ✏️ POUR MODIFIER UN TEXTE : change-le entre les deux accents graves ` `
      • une ligne qui commence par « # »  = grand intertitre
      • une ligne qui commence par « ## » = intertitre
      • chaque autre ligne = un paragraphe
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
if(window.ebLegalCharge) return;
window.ebLegalCharge = true;

/* ╔═════════════════════════════════════════════════════════════════════╗
   ║ ✏️  TES INFORMATIONS D'ENTREPRISE — à remplir ici, et nulle part ailleurs ║
   ║                                                                     ║
   ║  Écris entre les guillemets. Elles s'affichent automatiquement      ║
   ║  dans les Mentions légales, les CGV et la Politique de              ║
   ║  confidentialité. Tant qu'une case est vide (""), le site affiche   ║
   ║  « À compléter ». Si une information ne te concerne pas, écris      ║
   ║  "Non applicable".                                                  ║
   ╚═════════════════════════════════════════════════════════════════════╝ */
var ENTREPRISE = {
  forme:     "",                     // ex. "Micro-entreprise" ou "SAS"
  capital:   "",                     // ex. "1 000 €" (ou "Non applicable")
  siege:     "",                     // adresse complète du siège social
  siret:     "",                     // ex. "123 456 789 00012"
  tva:       "",                     // n° de TVA intracommunautaire (ou "Non applicable")
  email:     "contact@elkhab.com",   // adresse e-mail de contact
  directeur: ""                      // ton prénom et ton nom (directeur de la publication)
};
/* ═══════════════════════════════════════════════════════════════════════ */

var PAGES = {
  "mentions-legales": {
    titre: "MENTIONS LÉGALES",
    texte: `
Le présent site est édité par ELKHA.B.
Forme juridique : {forme}
Capital social : {capital}
Siège social : {siege}
Numéro SIREN / SIRET : {siret}
Numéro de TVA intracommunautaire : {tva}
Adresse e-mail : {email}
Directeur de la publication : {directeur}
Nom de domaine : www.elkhab.com

## Hébergement
Le présent site est hébergé par :
Carrd Inc.
231 Public Square, Suite 300 PMB 12
Franklin, TN 37064
États-Unis

## Propriété intellectuelle
L'ensemble des éléments présents sur le site ELKHA.B, notamment les textes, visuels, photographies, illustrations, logos, éléments graphiques, vidéos, ainsi que leur mise en page, sont protégés par les dispositions du Code de la propriété intellectuelle.
Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, sans autorisation écrite préalable d'ELKHA.B, est strictement interdite.

## Responsabilité
Les informations diffusées sur ce site sont fournies à titre informatif et sont régulièrement mises à jour afin d'en assurer l'exactitude.
ELKHA.B ne saurait être tenue responsable des dommages directs ou indirects pouvant résulter de l'utilisation du site ou de l'impossibilité d'y accéder.
Les conseils et informations relatifs aux produits proposés ne remplacent en aucun cas l'avis d'un professionnel de santé

## Liens hypertextes
Le site peut contenir des liens vers des sites tiers. ELKHA.B ne peut être tenue responsable du contenu ou du fonctionnement de ces sites externes.

## Droit applicable
Les présentes mentions légales sont régies par le droit français.
En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents, sous réserve des dispositions légales applicables.
`
  },

  "cgv": {
    titre: "CONDITIONS GÉNÉRALES DE VENTE (CGV)",
    texte: `
## Article 1 – Identité du vendeur
Les présentes Conditions Générales de Vente (ci-après les « CGV ») régissent les ventes réalisées sur le site www.elkhab.com.
Les produits sont commercialisés par :
ELKHA.B
Forme juridique : {forme}
Siège social : {siege}
SIREN / SIRET : {siret}
TVA intracommunautaire : {tva}
E-mail : {email}
Ci-après dénommée « ELKHA.B » ou « le Vendeur ».

## Article 2 – Objet
Les présentes CGV définissent les droits et obligations du Vendeur et du Client dans le cadre de la vente en ligne de produits cosmétiques proposés sur le site www.elkhab.com
Toute commande implique l'acceptation pleine et entière des présentes Conditions Générales de Vente.
Les CGV applicables sont celles en vigueur au moment de la validation de la commande.

## Article 3 – Client
Les produits sont destinés exclusivement à des consommateurs agissant pour leurs besoins personnels et non professionnels.
Le Client déclare être majeur ou disposer de l'autorisation de son représentant légal pour effectuer une commande.
Le Client garantit l'exactitude des informations communiquées lors de sa commande.

## Article 4 – Produits
Les produits proposés à la vente sont des produits cosmétiques.
Chaque fiche produit présente notamment :
les caractéristiques essentielles ;
la contenance ;
les conseils d'utilisation ;
la composition INCI ;
les précautions d'emploi.
Les photographies sont réalisées avec le plus grand soin afin d'être les plus fidèles possibles. Toutefois, elles ne présentent pas un caractère contractuel et de légères différences de présentation, de couleur ou de packaging peuvent exister sans affecter les qualités essentielles du produit.
Les produits sont proposés dans la limite des stocks disponibles.

## Article 5 – Zone de livraison
À ce jour, ELKHA.B livre dans les pays suivants :
France
Belgique
Luxembourg
Allemagne
Pays-Bas
Autriche
Danemark
Suède
Finlande
Espagne
Portugal
Italie
Les livraisons vers la Suisse, le Royaume-Uni, l'Irlande ainsi que vers tout autre pays non mentionné ci-dessus ne sont actuellement pas proposées.
ELKHA.B se réserve le droit d'étendre ou de modifier cette liste à tout moment.

## Article 6 – Prix
Les prix affichés sur le site sont exprimés en euros (€) et s'entendent toutes taxes comprises (TTC), sauf indication contraire.
Les frais de livraison sont indiqués séparément avant la validation définitive de la commande.
Le prix facturé est celui affiché au moment de la validation de la commande.
ELKHA.B se réserve le droit de modifier ses prix à tout moment. Toutefois, les produits sont facturés au tarif en vigueur lors de l'enregistrement de la commande.
En cas d'erreur manifeste de prix résultant notamment d'un dysfonctionnement technique, ELKHA.B pourra annuler la commande après en avoir informé le Client et procéder au remboursement intégral des sommes versées.

## Article 7 – Commande
La commande est réalisée selon les étapes suivantes :
sélection des produits ;
vérification du panier ;
saisie des coordonnées ;
choix du mode de livraison ;
choix du mode de paiement ;
validation définitive.
Avant toute validation, le Client peut modifier sa commande.
La validation de la commande vaut acceptation des présentes Conditions Générales de Vente ainsi qu'obligation de paiement.
Après validation du paiement, un e-mail de confirmation est adressé au Client.
ELKHA.B se réserve le droit de refuser une commande notamment en cas :
d'informations manifestement erronées ;
de fraude ou suspicion de fraude ;
d'incident de paiement ;
de litige antérieur non résolu avec le Client.

## Article 8 – Paiement
Le paiement est exigible en totalité lors de la commande.
Les paiements sont effectués via l'interface sécurisée proposée par Shopify Payments et les autres moyens de paiement disponibles lors du passage de la commande.
Les données bancaires ne transitent jamais par ELKHA.B et sont traitées exclusivement par les prestataires de paiement sécurisés.
En cas de refus du paiement, la commande est automatiquement annulée.

## Article 9 – Préparation et expédition des commandes
Les commandes sont préparées après validation du paiement.
Afin d'assurer le traitement logistique des commandes, ELKHA.B peut faire appel à un partenaire spécialisé chargé de la préparation, de l'emballage et de l'expédition des produits.
Ce recours à un prestataire n'affecte en rien les droits du Client. ELKHA.B demeure le seul vendeur du produit et reste l'interlocuteur du Client pour toute question relative à sa commande, à sa livraison, au service après-vente ou à l'exercice de ses droits.
Selon la disponibilité des produits ou les contraintes logistiques, une commande peut exceptionnellement être expédiée en plusieurs colis, sans frais supplémentaires pour le Client.

## Article 10 – Livraison
Les produits sont livrés à l'adresse indiquée par le Client lors de sa commande.
Le Client est seul responsable de l'exactitude des informations communiquées. ELKHA.B ne pourra être tenue responsable d'un retard, d'une impossibilité de livraison ou de frais supplémentaires résultant d'une adresse incomplète, erronée ou imprécise.
Les délais de livraison indiqués sur le site sont donnés à titre indicatif.
Sauf circonstances exceptionnelles, les commandes sont généralement livrées dans un délai de 5 à 10 jours ouvrables à compter de leur expédition.
Ces délais peuvent varier selon :
le pays de destination ;
les périodes de forte activité ;
les transporteurs ;
les formalités logistiques indépendantes de la volonté d'ELKHA.B.
Conformément à la réglementation française, si aucun délai particulier n'a été convenu avec le Client, la commande sera livrée au plus tard dans les trente (30) jours suivant la conclusion du contrat.

## Article 11 – Retard de livraison
En cas de retard important, le Client est invité à contacter le service client afin qu'une vérification puisse être effectuée auprès du transporteur.
Si la livraison n'est pas intervenue dans le délai légal ou dans le délai expressément convenu entre les parties, le Client pourra mettre ELKHA.B en demeure d'effectuer la livraison dans un délai supplémentaire raisonnable.
À défaut d'exécution dans ce nouveau délai, le Client pourra demander l'annulation de la vente conformément aux dispositions du Code de la consommation.
Les sommes versées seront alors remboursées dans les délais prévus par la loi.

## Article 12 – Réception de la commande
Le Client est invité à vérifier l'état du colis dès sa réception.
En cas de colis endommagé, ouvert, incomplet, de produit cassé, défectueux ou ne correspondant pas à la commande, le Client est invité à contacter le service client dans les meilleurs délais.
Afin de faciliter le traitement de sa demande, il est recommandé de joindre :
le numéro de commande ;
des photographies du colis ;
des photographies des produits concernés ;
une description précise du problème rencontré.
Cette démarche permet un traitement plus rapide de la réclamation mais ne prive pas le Client de ses droits légaux.

## Article 13 – Droit de rétractation
Conformément aux articles L221-18 et suivants du Code de la consommation, le Client dispose d'un délai de quatorze (14) jours à compter de la réception des produits pour exercer son droit de rétractation sans avoir à justifier de motif.
Lorsque plusieurs produits d'une même commande sont livrés séparément, le délai commence à courir à compter de la réception du dernier produit.
Pour exercer ce droit, le Client doit adresser à ELKHA.B une déclaration dénuée d'ambiguïté exprimant sa volonté de se rétracter ou utiliser le formulaire de rétractation figurant à la fin des présentes CGV.

## Article 14 – Exceptions au droit de rétractation
Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé concernant les produits cosmétiques descellés après leur livraison lorsque ceux-ci ne peuvent être renvoyés pour des raisons d'hygiène ou de protection de la santé.
Ainsi, tout produit dont l'emballage de protection a été ouvert, descellé ou utilisé ne pourra être repris au titre d'un simple changement d'avis.
Cette disposition ne fait pas obstacle aux droits du Client en cas de produit défectueux, endommagé ou non conforme.

## Article 15 – Modalités de retour
Après avoir exercé son droit de rétractation, le Client dispose d'un délai de quatorze (14) jours pour retourner les produits.
Les produits doivent être retournés :
non ouverts ;
non utilisés ;
non descellés ;
complets ;
dans leur emballage d'origine ;
correctement protégés pour le transport.
L'adresse de retour sera communiquée au Client par le service client après réception de sa demande.
Aucun retour ne devra être effectué sans accord préalable d'ELKHA.B.

## Article 16 – Frais de retour
Lorsque le retour résulte d'un changement d'avis du Client dans le cadre du droit de rétractation, les frais directs de retour restent à sa charge.
En revanche, lorsqu'un produit est reconnu défectueux, endommagé à la livraison ou non conforme à la commande, ELKHA.B prendra en charge les frais de retour ou proposera une solution adaptée, conformément aux dispositions légales.
Le Client est invité à conserver toute preuve d'expédition jusqu'à la résolution complète de sa demande.

## Article 17 – Remboursement
Lorsque le droit de rétractation est exercé dans les conditions prévues par les présentes CGV, ELKHA.B rembourse les sommes versées par le Client, y compris les frais de livraison correspondant au mode de livraison standard proposé lors de la commande.
Les frais supplémentaires résultant du choix d'un mode de livraison plus coûteux que le mode standard ne sont pas remboursés.
Le remboursement intervient au plus tard dans les quatorze (14) jours suivant la récupération des produits ou la réception d'une preuve de leur expédition, la date retenue étant celle du premier de ces événements.
Le remboursement est effectué selon le même moyen de paiement que celui utilisé lors de la commande, sauf accord contraire entre les parties.

## Article 18 – Garanties légales
Les produits vendus bénéficient de la garantie légale de conformité ainsi que de la garantie contre les vices cachés, conformément aux dispositions du Code de la consommation et du Code civil.
Ces garanties permettent au Client d'obtenir, selon les cas prévus par la loi, la réparation, le remplacement, la réduction du prix ou le remboursement du produit concerné.
Les garanties légales s'appliquent indépendamment de toute garantie commerciale éventuellement proposée.

## Article 19 – Utilisation des produits
Les produits proposés sur le site sont exclusivement des produits cosmétiques.
Ils doivent être utilisés conformément aux conseils d'utilisation et aux précautions figurant sur leur emballage ou leur fiche produit.
Avant toute première utilisation, il est recommandé d'effectuer un test sur une petite zone de peau, notamment en cas de peau sensible.
En cas de réaction inhabituelle, le Client doit cesser immédiatement l'utilisation du produit et consulter un professionnel de santé si nécessaire.
Les produits commercialisés par ELKHA.B ne constituent pas des médicaments et ne sont pas destinés à diagnostiquer, prévenir ou traiter une maladie.

## Article 20 – Responsabilité
ELKHA.B est responsable de la bonne exécution des obligations résultant des présentes CGV.
Toutefois, sa responsabilité ne pourra être engagée lorsque l'inexécution résulte :
d'un fait imputable au Client ;
d'un événement imprévisible et insurmontable d'un tiers ;
ou d'un cas de force majeure.
ELKHA.B ne pourra notamment être tenue responsable d'une mauvaise utilisation des produits, d'un non-respect des précautions d'emploi ou d'une utilisation contraire à leur destination.

## Article 21 – Propriété intellectuelle
L'ensemble du contenu du site www.elkhab.com, notamment les textes, photographies, illustrations, vidéos, graphismes, logos, marques, éléments visuels, design, ainsi que tout autre contenu, est protégé par les lois relatives à la propriété intellectuelle.
Toute reproduction, représentation, adaptation, diffusion ou exploitation, totale ou partielle, sans autorisation écrite préalable d'ELKHA.B est strictement interdite.

## Article 22 – Données personnelles
Les données personnelles collectées lors de la commande sont nécessaires au traitement des commandes, à leur expédition, au service après-vente ainsi qu'au respect des obligations légales et comptables.
Les modalités de collecte, de traitement et les droits des utilisateurs sont détaillés dans la Politique de confidentialité disponible sur le site.

## Article 23 – Service client
Pour toute question, demande d'information ou réclamation, le Client peut contacter ELKHA.B exclusivement via le formulaire de contact disponible sur le site www.elkhab.com.

## Article 24 – Médiation de la consommation
En cas de litige, le Client est invité à contacter en priorité le service client afin de rechercher une solution amiable.
À défaut d'accord, il pourra saisir gratuitement le médiateur de la consommation auquel ELKHA.B aura adhéré.
Les coordonnées du médiateur seront indiquées sur le site et dans les présentes CGV dès l'adhésion du Vendeur.

## Article 25 – Droit applicable
Les présentes Conditions Générales de Vente sont régies par le droit français.
En cas de litige, et après tentative de résolution amiable, les juridictions compétentes seront celles désignées par les dispositions légales applicables.

## Article 26 – Modification des CGV
ELKHA.B se réserve le droit de modifier les présentes Conditions Générales de Vente à tout moment.
Les nouvelles conditions s'appliqueront uniquement aux commandes passées après leur mise en ligne.
Pour exercer votre droit de rétractation, il vous suffit d'envoyer un e-mail via le formulaire de contact du site en précisant votre numéro de commande et votre volonté de vous rétracter. Aucun formulaire spécifique n'est exigé.
`
  },

  "livraison-retours": {
    titre: "LIVRAISON & RETOURS",
    texte: `
# Politique de livraison

## 1. Zones de livraison
ELKHA.B livre actuellement en :
France, Belgique, Luxembourg, Allemagne, Pays-Bas, Autriche, Danemark, Suède, Finlande, Espagne, Portugal et Italie.

## 2. Délais de livraison
Les commandes sont généralement préparées et expédiées sous quelques jours ouvrés. Les délais de livraison varient ensuite selon le pays de destination.
Les délais indiqués sont donnés à titre indicatif et peuvent être prolongés en cas de circonstances exceptionnelles indépendantes de la volonté d'ELKHA.B.

## 3. Frais de livraison
Les frais de livraison sont indiqués au moment de la commande avant la validation du paiement.
La livraison peut être offerte à partir d'un certain montant, lorsque cette offre est applicable.

## 4. Réception de la commande
Le client est invité à vérifier l'état de son colis dès sa réception.
En cas de colis visiblement endommagé lors de la livraison, il est recommandé de refuser le colis et de le remettre au transporteur lorsque cela est possible.
Si le colis a été déposé en boîte aux lettres ou ne peut pas être refusé, ou en cas de produit manquant ou détérioré constaté à l'ouverture, le client est invité à contacter ELKHA.B dans les meilleurs délais via le formulaire de contact, en joignant, si possible, des photographies du colis et des produits concernés afin de faciliter le traitement de sa demande.

# Politique de retour et de remboursement

## 1. Droit de rétractation
Conformément à la réglementation en vigueur, le client dispose d'un délai de 14 jours à compter de la réception de sa commande pour exercer son droit de rétractation.
Toutefois, aucun retour ni remboursement ne sera accepté en cas de changement d'avis concernant un produit cosmétique qui a été ouvert, utilisé ou descellé, conformément à l'article L.221-28 du Code de la consommation.
Les produits retournés dans le cadre du droit de rétractation doivent être neufs, non ouverts, non utilisés et dans leur emballage d'origine.

## 2. Produits exclus
Pour des raisons d'hygiène et de protection de la santé, les produits cosmétiques ouverts, utilisés ou descellés ne peuvent pas être retournés.

## 3. Modalités de retour
Le client doit contacter ELKHA.B via le formulaire de contact afin d'obtenir les instructions de retour.
Les produits doivent être retournés dans leur état d'origine, complets et non utilisés.
Sauf erreur de la part d'ELKHA.B ou produit défectueux, les frais de retour restent à la charge du client.

## 4. Remboursement
Après réception et vérification du retour, le remboursement est effectué selon le même moyen de paiement que celui utilisé lors de la commande, dans les délais prévus par la réglementation.
`
  },

  "politique-confidentialite": {
    titre: "POLITIQUE DE CONFIDENTIALITÉ",
    texte: `
## 1. Qui sommes-nous ?
Le site www.elkhab.com est édité par ELKHA.B ({forme}), dont le siège social est situé : {siege}. SIREN / SIRET : {siret}.
Le responsable du traitement des données personnelles est {directeur}, joignable à l'adresse {email}.

## 2. Quelles données collectons-nous ?
Nom et prénom
Adresse de livraison et de facturation
Adresse e-mail
Téléphone (si communiqué)
Données de commande
Données de navigation (cookies, adresse IP...)

## 3. Pourquoi utilisons-nous ces données ?
Traiter les commandes
Assurer la livraison
Répondre aux demandes via le formulaire de contact
Respecter les obligations légales
Améliorer le fonctionnement du site

## 4. Avec qui les partageons-nous ?
Les données sont uniquement transmises aux prestataires nécessaires au fonctionnement de la boutique et aux autres prestataires techniques indispensables au fonctionnement du site, dans la limite de ce qui est nécessaire.

## 5. Combien de temps conservons-nous les données ?
Les données sont conservées uniquement pendant la durée nécessaire à la gestion de la relation commerciale et au respect des obligations légales.

## 6. Vos droits
Conformément au RGPD, chaque utilisateur peut demander l'accès, la rectification, l'effacement, la limitation ou la portabilité de ses données, ainsi que s'opposer à certains traitements lorsque la loi le permet.

## 7. Cookies
Le site utilise des cookies nécessaires à son fonctionnement. Les autres cookies, lorsqu'ils sont utilisés, sont soumis au consentement de l'utilisateur. Plus d'informations sont disponibles dans la Politique de cookies.

## 8. Nous contacter
Pour toute question concernant les données personnelles ou pour exercer vos droits, vous pouvez utiliser le formulaire de contact disponible sur le site.
`
  },

  "politique-cookies": {
    titre: "POLITIQUE DE COOKIES",
    texte: `
## 1. Qu'est-ce qu'un cookie ?
Un cookie est un petit fichier enregistré sur votre appareil (ordinateur, tablette ou smartphone) lors de votre navigation sur le site. Il permet notamment d'assurer le bon fonctionnement du site, d'améliorer votre expérience utilisateur et, selon les cas, de réaliser des statistiques de fréquentation.

## 2. Quels cookies utilisons-nous ?
Le site ELKHA.B utilise des cookies :
nécessaires au bon fonctionnement du site et au traitement des commandes ;
permettant de mesurer l'audience et d'améliorer les performances du site, lorsque ces outils sont utilisés ;
éventuellement déposés par certains services tiers indispensables au fonctionnement du site.
Les cookies non essentiels ne sont utilisés qu'après le consentement de l'utilisateur, lorsque celui-ci est requis par la réglementation.

## 3. Gérer vos préférences
Lors de votre première visite, un bandeau d'information vous permet d'accepter, de refuser ou de personnaliser l'utilisation des cookies lorsque cela est nécessaire.
Vous pouvez également modifier vos préférences à tout moment depuis les paramètres de votre navigateur ou via l'outil de gestion des cookies mis à disposition sur le site, lorsqu'il est disponible.

## 4. Nous contacter
Pour toute question concernant l'utilisation des cookies, vous pouvez contacter ELKHA.B via le formulaire de contact disponible sur le site.
`
  }
};

/* ┌─────────────────────────────────────────────────────────────────────┐
   │ ⛔ NE RIEN MODIFIER EN DESSOUS                                        │
   └─────────────────────────────────────────────────────────────────────┘ */

var css = ""
+ ".eb-legal{position:fixed;inset:0;background:#F6F4F0;color:#000;z-index:99990;transform:translateX(100%);transition:transform .5s cubic-bezier(.65,0,.35,1);overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;font-family:'Montserrat',sans-serif;-webkit-tap-highlight-color:transparent;visibility:hidden}"
+ ".eb-legal.open{transform:none;visibility:visible}"
+ ".eb-legal-in{max-width:720px;margin:0 auto;padding:110px 26px 90px;box-sizing:border-box}"
+ ".eb-legal-tag{display:block;font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;opacity:.5;margin-bottom:14px}"
+ ".eb-legal-titre{font-size:24px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;line-height:1.3;margin:0 0 30px}"
+ ".eb-legal-trait{display:block;width:46px;height:1px;background:#000;opacity:.6;margin:-14px 0 34px}"
+ ".eb-legal-h1{font-size:15px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin:44px 0 16px;padding-top:22px;border-top:1px solid rgba(0,0,0,.12)}"
+ ".eb-legal-trait + .eb-legal-h1{border-top:0;padding-top:0;margin-top:6px}"
+ ".eb-legal-h2{font-size:12.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin:30px 0 10px}"
+ ".eb-legal-p{font-size:14px;font-weight:300;line-height:1.85;margin:0 0 8px;opacity:.85}"
+ ".eb-legal-close{position:fixed;top:66px;right:21px;z-index:99995;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(0,0,0,.12);box-shadow:0 2px 10px rgba(0,0,0,.08);display:none;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:20px;font-weight:300;line-height:1;color:#000;cursor:pointer;padding:0;transition:transform .2s ease;-webkit-tap-highlight-color:transparent}"
+ ".eb-legal-close.visible{display:flex}.eb-legal-close:hover{transform:scale(1.1)}"
+ "html.eb-legal-lock,html.eb-legal-lock body{overflow:hidden !important}"
+ "@media (min-width:900px){.eb-legal-in{padding:130px 40px 110px}.eb-legal-titre{font-size:30px}.eb-legal-p{font-size:15px}}";

var panneau, contenu, croix, ouvert = null;

function esc(t){ var d = document.createElement('div'); d.textContent = t || ''; return d.innerHTML; }

function rendre(id){
  var page = PAGES[id];
  var html = '<span class="eb-legal-tag">ELKHA.B · Informations</span>'
           + '<h2 class="eb-legal-titre">' + esc(page.titre) + '</h2><span class="eb-legal-trait"></span>';
  var texte = page.texte.replace(/\{(forme|capital|siege|siret|tva|email|directeur)\}/g, function(m, cle){
    var v = (ENTREPRISE[cle] || '').trim();
    return v || 'À compléter';
  });
  texte.split('\n').forEach(function(l){
    l = l.trim();
    if(!l) return;
    if(l.indexOf('## ') === 0){ html += '<h4 class="eb-legal-h2">' + esc(l.slice(3)) + '</h4>'; }
    else if(l.indexOf('# ') === 0){ html += '<h3 class="eb-legal-h1">' + esc(l.slice(2)) + '</h3>'; }
    else { html += '<p class="eb-legal-p">' + esc(l).replace(/ ([?!:;»])/g, '&nbsp;$1').replace(/« /g, '«&nbsp;') + '</p>'; }
  });
  return html;
}

function preparer(){
  if(panneau) return;
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  panneau = document.createElement('div');
  panneau.className = 'eb-legal';
  panneau.setAttribute('role', 'dialog');
  panneau.innerHTML = '<div class="eb-legal-in"></div>';
  contenu = panneau.firstChild;
  croix = document.createElement('button');
  croix.type = 'button';
  croix.className = 'eb-legal-close';
  croix.setAttribute('aria-label', 'Fermer');
  croix.innerHTML = '&times;';
  croix.addEventListener('click', function(){ fermer(true); });
  document.body.appendChild(panneau);
  document.body.appendChild(croix);
}

function ouvrir(id, depuisLien){
  if(!PAGES[id]) return false;
  preparer();
  contenu.innerHTML = rendre(id);
  panneau.scrollTop = 0;
  if(!ouvert && depuisLien){ try { history.pushState({ ebLegal: id }, ''); } catch(e){} }
  ouvert = id;
  void panneau.offsetWidth;
  panneau.classList.add('open');
  croix.classList.add('visible');
  document.documentElement.classList.add('eb-legal-lock');
  return true;
}

function fermer(viaCroix){
  if(!ouvert) return;
  ouvert = null;
  panneau.classList.remove('open');
  croix.classList.remove('visible');
  document.documentElement.classList.remove('eb-legal-lock');
  // Arrivée directe sur une adresse du type elkhab.com/#cgv : on revient à la page
  var h = location.hash.replace('#', '');
  if(PAGES[h]){ location.hash = '#'; }
  else if(viaCroix && history.state && history.state.ebLegal){ try { history.back(); } catch(e){} }
}

// Retour arrière du téléphone : ferme le panneau au lieu de quitter la page
window.addEventListener('popstate', function(){ if(ouvert) fermer(false); });
document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && ouvert) fermer(true); });

// Clic sur un lien vers une page légale (sur n'importe quel site ELKHA.B)
window.addEventListener('click', function(e){
  if(e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  var a = e.target.closest && e.target.closest('a[href*="#"]');
  if(!a) return;
  var url;
  try { url = new URL(a.getAttribute('href'), location.href); } catch(err){ return; }
  var id = url.hash.replace('#', '');
  if(!PAGES[id]) return;
  if(!/(^|\.)elkhab\.com$/i.test(url.hostname) && url.hostname !== location.hostname) return;
  e.preventDefault();
  e.stopPropagation();
  ouvrir(id, true);
}, true);

// Arrivée directe sur une page légale (ex. lien depuis le paiement ou un e-mail)
function verifierAdresse(){
  var h = location.hash.replace('#', '');
  if(PAGES[h] && ouvert !== h){ ouvrir(h, false); }
}
if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', verifierAdresse); }
else { verifierAdresse(); }
window.addEventListener('hashchange', verifierAdresse);

window.ebLegalOpen = function(id){ return ouvrir(id, true); };
window.ebLegalClose = function(){ fermer(true); };
})();
