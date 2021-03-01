// var prenom;

// console.log(prenom);
// // console.log(nom);
// console.log(x);

// nom = "bennani";

// var prenom = "ahmed";

// console.log(nom);
// console.log(prenom);

// porté < 2015
// - portée globale
// - portée fonction
// function demo() {
//   var x;
//   console.log(n, x);
//   var n = 14;
//   x = 100;
//   console.log(n, x);
// }
// demo();

// var n = 12; // int

// var ch = "Salut"; // string
// var ch2 = "10"; // string

// console.log(n + ch2 * 1);

// var pi = 3.14;

// var tab = [1, "salut", 4, 3.5];

// console.log(tab);
// console.log(tab[1]);

// // tableau associatif n existe pas en js

// var person = {
//   nom: "doss",
//   prenom: "youssef",
//   age: 24,
//   nomComplet: function () {
//     console.log(this.nom + " " + this.prenom);
//   },
// };

// console.log(person);
// console.log(person.age);
// console.log(person.nom);

// person.genre = "H";

// console.log(person);

// person.nomComplet();
// /*
// if (condition1) {
//  // instructions
// }
// [
// else if (condition2) {
//  // instructions
// }
// ] *
// [
// } else {

// }
// ]?
// */

// switch (variable) {
//   case v1:
//     // traitememnt
//     break;
//   case v2:
//   case v3:
//     // traitement
//     break;
//   default:
// }

// if (variable == v1) {
//   // tr
// } else if (variable == v2 || variable == v3) {
//   // tr
// } else {
//   //default
// }
// boucles
// for, while, do {} while

// jeu de devinette
// nombre = 7
// x = 5
// si x == nombre => bravo
// sinon si x < nombre => au dessous
// sinon => au dessus
function jeu() {
  var nombre = Math.round(Math.random() * 10);
  console.log(nombre);
  var essais = 3;
  var essai = 0;
  do {
    console.log(essai);
    var x = prompt("Entrez un nombre");
    if (x < nombre) {
      alert("au dessous");
    } else if (x > nombre) {
      alert("au dessus");
    }
    essai++;
  } while (x != nombre && essai < essais);

  if (x == nombre) {
    alert("bravo");
  } else {
    alert("echec !");
  }
}

function exBoucles() {
  var notes = [1, 2, 5, 7];
  var somme = 0;
  for (var i = 0; i < notes.length; i++) {
    somme += notes[i];
  }
  // while (i < notes.length) {
  //   somme += notes[i];
  //   i++;
  // }
  console.log(i, somme / notes.length);
  var i = 0;
}

console.log("3! = ", factoriel(3));
function factoriel(n) {
  console.log("n : ", n);
  if (n == undefined) {
    n = 0;
  }
  var f = 1;
  for (var i = 2; i <= n; i++) {
    f *= i;
  }
  return f;
}
console.log("3! = ", factoriel(3));
console.log("undefined! = ", factoriel());

console.log("0! = ", factoriel(0));
console.log("S = ", somme);
// console.log("S = ", somme(4));
var somme = function (n, a) {
  console.log("n : ", n);
  s = 0;
  for (var i = 1; i <= n; i++) {
    s += i;
  }
  return s;
};
console.log("S = ", somme(4));

console.log("local s : ", s);
