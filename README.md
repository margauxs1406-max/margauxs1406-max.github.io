# mxsstudio.com

Site vitrine de MxS Studio. Site statique, sans build : ce qui est dans le
dépôt est exactement ce qui est servi.

## Publier

    git add .
    git commit -m "..."
    git push

GitHub Pages publie la branche `main` en une minute environ.

## Structure

    index.html                        accueil du studio : offre, étapes, profil
    methode/                          les dix étapes d'une réalisation
    a-propos/                         parcours et positionnement
    contact/                          devis et assistance, un formulaire chacun
    contact/merci/                    page d'arrivée après envoi d'un formulaire
    sourire/                          page produit
    sourire/confidentialite/          politique de confidentialité
    sourire/support/                  redirection vers /contact/ (ancienne URL)
    exercise-kitchen/                 page produit
    mentions-legales/                 obligation légale, en français uniquement
    style.css                         feuille unique, variables de couleur en haut
    script.js                         menu et carrousels, une trentaine de lignes
    assets/fonts/                     Space Grotesk, servie depuis le site
    assets/img/                       logotypes et favicons
    CNAME                             domaine personnalisé

## Règles à tenir

- Aucune ressource externe : ni Google Fonts, ni analytics, ni script tiers,
  donc aucune bannière cookies à afficher. Le menu Produits repose sur
  `details`, sans script.
- Seule exception, `script.js` : la fermeture du menu Produits au clic
  extérieur et les flèches des carrousels. Aucun appel réseau, aucun stockage.
  Sans lui, le menu se referme en recliquant sur « Produits » et les carrousels
  défilent au doigt et au trackpad, donc rien n'est cassé.
- Les deux formulaires de contact partent chez FormSubmit, qui relaie le message
  par e-mail. C'est la seule dépendance externe du site, et elle est mentionnée
  dans les mentions légales. À la première soumission, FormSubmit envoie un mail
  d'activation à l'adresse destinataire : sans ce clic, rien n'arrive.
- Les couleurs viennent des variables CSS en haut de `style.css`, elles
  correspondent à la charte d'identité du studio.
- Chercher `TODO` avant chaque mise en ligne : les points restant à compléter
  y sont signalés.
- Le site est en français uniquement. Les versions anglaise et espagnole ont
  été retirées : le navigateur traduit à la demande, et l'entreprise s'adresse
  au marché français.
- `style.css` et `script.js` sont appelés avec un numéro de version
  (`?v=5`). À chaque modification de l'un des deux, incrémenter ce numéro dans
  toutes les pages, sinon les navigateurs continuent de servir l'ancienne
  version depuis leur cache.

## Images

Les visuels des pages produit sont les mockups et les bannières des fiches de
store, recomposés et convertis en WebP. Les scènes de Sourire forment un ruban
continu : un visuel isolé montre un téléphone coupé, d'où le regroupement par
deux ou trois dans `sourire-1` à `sourire-3`.

## Réglages GitHub Pages

- Dépôt public, Settings > Pages, source `main` / racine.
- Custom domain : mxsstudio.com, puis cocher *Enforce HTTPS*.
- Zone DNS OVH : quatre enregistrements A vers 185.199.108.153,
  185.199.109.153, 185.199.110.153, 185.199.111.153, et un CNAME `www` vers
  <utilisateur>.github.io.
