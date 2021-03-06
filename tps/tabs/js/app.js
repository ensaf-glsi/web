// recuperer les boutons
// Ajouter un listner click sur chaque bouton

let tabs = document.querySelectorAll(".nav-tabs .nav-link");
console.log(tabs);

// for (let i = 0; i < tabs.length; i++) {
//   let tab = tabs[i];
//   console.log("m1 : ", tab, i);

//   // traitment
// }

// function tabHandle(e) {
//   console.log('click sur : ', this);
// }

let tabHandler = function (e) {
  let self = this;
  console.log("click sur : ", self.classList, self.id);
  // si l element n a pas la classe active
  if (!self.classList.contains("active")) {
    let ul = self.parentElement.parentElement;
    let oldTab = ul.querySelector(".active");
    let oldTabPane = document.querySelector(oldTab.dataset.bsTarget);
    let newTabPane = document.querySelector(self.dataset.bsTarget);

    oldTab.classList.remove("active");
    oldTabPane.classList.remove("show", "active");

    newTabPane.classList.add("show", "active");
    self.classList.add("active");
  }
};
tabs.forEach((tab, i) => {
  console.log(tab, i);
  tab.addEventListener("click", tabHandler);
});
