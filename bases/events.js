document.getElementById("page2").addEventListener("click", function (e) {
  console.log(e);
  e.preventDefault(); // annuler le traitement

  console.log("click sur a");
});
document.getElementById("p").addEventListener("click", function (e) {
  console.log(e);
  //   e.preventDefault(); // annuler le traitement
  //   e.stopPropagation();
  console.log("click sur p 2");
});
document.body.addEventListener("click", function (e) {
  console.log(e);
  //   e.preventDefault(); // annuler le traitement

  console.log("click sur le body");
});
window.addEventListener("scroll", function (e) {
  console.log("scroll");
});

document.querySelectorAll("table .delete").forEach(function (a) {
  a.addEventListener("click", function (e) {
    console.log("suppression");
    e.stopPropagation();
    // e.preventDefault();
  });
});
document.querySelectorAll("tr").forEach(function (tr) {
  tr.addEventListener("click", function (e) {
    console.log("affichage du detail");
  });
});
