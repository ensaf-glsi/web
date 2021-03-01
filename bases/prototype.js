// let nb = 1;

// let s = "salut";

// let person = {
//   nom: "nom",
//   prenom: "prenom",
//   toString: function () {
//     return "Person(" + this.nom + ", " + this.prenom + ")";
//   },
// };

// console.log(person);

// console.log(person.toString());
// // console.log(person.nomComplet());

let ligneCommande = {
  quantite: 1,
  pu: 0,
  total: function () {
    return this.quantite * this.pu;
  },
  tva: function () {
    return this.total() * 0.2;
  },
};

let lc1 = {
  article: "souris",
  pu: "40",
  quantite: 3,
  //   total: function () {
  //     return this.quantite * this.pu;
  //   },
  //   tva: function () {
  //     return this.total() * 0.2;
  //   },
};
// lc1.__proto__ = ligneCommande;
// console.log(lc1);
let lc2 = {
  article: "clavier",
  pu: "50",
  quantite: 4,
  //   total: function () {
  //     return this.quantite * this.pu;
  //   },
  //   tva: function () {
  //     return this.total() * 0.2;
  //   },
};
// lc2.__proto__ = ligneCommande;
// console.log(lc2);

let lc3 = Object.create(ligneCommande);
// console.log(lc3);
// console.log(lc3.total());
lc3.article = "Souris sans fil";
lc3.pu = 90;
// console.log(lc3.total());

// function LigneCommande(...)
let LigneCommande = function (article, pu, quantite) {
  if (quantite == undefined) {
    quantite = 1;
  }
  this.article = article;
  this.pu = pu;
  this.quantite = quantite;
  //   this.total = function () {
  //     return this.pu * this.quantite;
  //   };
};

LigneCommande.prototype.total = function () {
  return this.pu * this.quantite;
};
LigneCommande.prototype.tva = function () {
  return this.total() * 0.2;
};

let lc4 = new LigneCommande("clavier", 40);

// ES6
class Person {
  constructor(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }
  nomComplet() {
    return this.nom + " " + this.prenom;
  }
}

class Etudiant extends Person {
  constructor(nom, prenom, age, grade) {
    super(nom, prenom, age);
    this.grade = grade;
  }
}
