// Filtre des projets par catégorie
const boutons = document.querySelectorAll(".filtre");
const projets = document.querySelectorAll(".carte");

boutons.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    boutons.forEach(function (b) { b.classList.remove("actif"); });
    bouton.classList.add("actif");

    const categorie = bouton.dataset.cat;
    projets.forEach(function (projet) {
      if (categorie === "all" || projet.dataset.cat === categorie) {
        projet.style.display = "block";
      } else {
        projet.style.display = "none";
      }
    });
  });
});