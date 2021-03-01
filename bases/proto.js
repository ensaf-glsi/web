let commande = {
  lignes: [],
  total: function () {},
  totalTva: function () {},
};

let commande1 = { id: 1, date: new Date(), reference: "2021/001" };
console.log(commande1);

let commande2 = { id: 2, date: new Date(), reference: "2021/002" };
commande2.__proto__ = commande;
console.log(commande2);

let commande3 = Object.create(commande);
console.log(commande3);

let commande4 = Object.create(commande);
commande4.id = 4;
commande4.reference = "2021/004";
console.log(commande4);

function Commande(id, reference, date) {
  this.id = id;
  this.reference = reference;
  this.date = date;
  this.total = function () {};
}
Commande.prototype.totalTva = function () {};

let commande5 = new Commande(5, "2021/005");
console.log(commande5);

let LigneCommande = function (id, article, quantite, pu) {
  this.id = id;
  this.article = article;
  this.quantite = quantite;
  this.pu = pu;
};
LigneCommande.prototype.total = function () {
  return this.pu * this.quantite;
};
LigneCommande.prototype.tva = function () {
  return this.total() * 0.2;
};

let lc1 = new LigneCommande(1, "clavier", 3, 200);
console.log(lc1);

class Article {
  constructor(id, name, pu, unite) {
    this.id = id;
    this.name = name;
    this.pu = pu;
    this.unite = unite;
  }

  getPu() {
    return this.pu;
  }
}
console.log(Article);

let a1 = new Article(1, "clavier", 12.3, "U");
console.log(a1);

Article.prototype.getUnite = function () {
  return this.unite;
};
console.log(a1.getUnite());

class Produit extends Article {}

class CommandeFournisseur extends Commande {}

class MonErreur extends Error {}
