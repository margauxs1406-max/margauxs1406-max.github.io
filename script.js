/* MxS Studio — les deux seuls comportements qui demandent du JavaScript.
   Aucun appel réseau, aucun cookie, aucun stockage : la page reste utilisable
   à l'identique si ce fichier ne se charge pas. */

// Le menu Produits se referme quand on clique ailleurs, ou avec Échap.
// `details` sait s'ouvrir seul, mais il n'a aucune notion de « clic en
// dehors » : c'est la seule chose que le navigateur ne fait pas pour nous.
function fermerLesMenus() {
  document.querySelectorAll('details.menu[open]').forEach(function (menu) {
    menu.open = false;
  });
}

document.addEventListener('click', function (evenement) {
  document.querySelectorAll('details.menu[open]').forEach(function (menu) {
    if (!menu.contains(evenement.target)) menu.open = false;
  });
});

document.addEventListener('keydown', function (evenement) {
  if (evenement.key === 'Escape') fermerLesMenus();
});

// Les flèches des carrousels sont un confort de bureau : le défilement au doigt
// et au trackpad fonctionne sans elles. Elles restent donc masquées tant que ce
// script n'a pas tourné, pour ne jamais afficher un bouton mort.
document.querySelectorAll('.zone-carrousel').forEach(function (zone) {
  var piste = zone.querySelector('.carrousel');
  zone.querySelectorAll('.fleche').forEach(function (bouton) {
    bouton.hidden = false;
    bouton.addEventListener('click', function () {
      var pas = piste.clientWidth * 0.8;
      piste.scrollBy({
        left: bouton.classList.contains('gauche') ? -pas : pas,
        behavior: 'smooth'
      });
    });
  });
});
