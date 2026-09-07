# mxsstudio.com

Site vitrine de MxS Studio. Site statique, sans build : ce qui est dans le
dépôt est exactement ce qui est servi.

## Publier

    git add .
    git commit -m "..."
    git push

GitHub Pages publie la branche `main` en une minute environ.

## Structure

    index.html                        accueil du studio (FR)
    sourire/                          page produit
    sourire/support/                  URL d'assistance déclarée aux stores
    sourire/confidentialite/          politique de confidentialité
    en/, es/                          mêmes pages en anglais et en espagnol
    exercise-kitchen/                 squelette à compléter
    mentions-legales/                 obligation légale, en français uniquement
    style.css                         feuille unique, variables de couleur en haut
    assets/fonts/                     Space Grotesk, servie depuis le site
    assets/img/                       logotypes et favicons
    CNAME                             domaine personnalisé

## Règles à tenir

- Aucune ressource externe : ni Google Fonts, ni analytics, ni script tiers.
  C'est ce qui permet de n'afficher aucune bannière cookies.
- Les couleurs viennent des variables CSS en haut de `style.css`, elles
  correspondent à la charte d'identité du studio.
- Chercher `TODO` avant chaque mise en ligne : les points restant à compléter
  y sont signalés.
- Une page modifiée dans une langue doit l'être dans les trois. Les liens entre
  versions sont écrits en dur dans le bandeau et dans les balises `hreflang` :
  changer une URL oblige à mettre à jour les deux autres pages du groupe et le
  `sitemap.xml`.

## Réglages GitHub Pages

- Dépôt public, Settings > Pages, source `main` / racine.
- Custom domain : mxsstudio.com, puis cocher *Enforce HTTPS*.
- Zone DNS OVH : quatre enregistrements A vers 185.199.108.153,
  185.199.109.153, 185.199.110.153, 185.199.111.153, et un CNAME `www` vers
  <utilisateur>.github.io.
