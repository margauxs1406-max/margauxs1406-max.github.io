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
    contact/                          devis et assistance, un formulaire chacun
    contact/merci/                    page d'arrivée après envoi d'un formulaire
    sourire/                          page produit
    sourire/confidentialite/          politique de confidentialité
    sourire/support/                  redirection vers /contact/ (ancienne URL)
    exercise-kitchen/                 page produit
    en/, es/                          versions anglaise et espagnole
    mentions-legales/                 obligation légale, en français uniquement
    style.css                         feuille unique, variables de couleur en haut
    assets/fonts/                     Space Grotesk, servie depuis le site
    assets/img/                       logotypes et favicons
    CNAME                             domaine personnalisé

## Règles à tenir

- Aucune ressource externe : ni Google Fonts, ni analytics, ni script tiers, et
  pas une ligne de JavaScript. C'est ce qui permet de n'afficher aucune bannière
  cookies. Le menu Produits et les carrousels reposent sur `details` et sur le
  défilement natif avec accroche.
- Les deux formulaires de contact partent chez FormSubmit, qui relaie le message
  par e-mail. C'est la seule dépendance externe du site, et elle est mentionnée
  dans les mentions légales. À la première soumission, FormSubmit envoie un mail
  d'activation à l'adresse destinataire : sans ce clic, rien n'arrive.
- Les couleurs viennent des variables CSS en haut de `style.css`, elles
  correspondent à la charte d'identité du studio.
- Chercher `TODO` avant chaque mise en ligne : les points restant à compléter
  y sont signalés.
- Une page modifiée dans une langue doit l'être dans les trois. Les liens entre
  versions sont écrits en dur dans le bandeau et dans les balises `hreflang` :
  changer une URL oblige à mettre à jour les deux autres pages du groupe et le
  `sitemap.xml`.

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
