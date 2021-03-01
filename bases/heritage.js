let Person = function (nom, prenom, age) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
};
Person.prototype.nomComplet = function () {
  return this.nom + " " + this.prenom;
};

let Etudiant = function (nom, prenom, age, notes) {
  Person.call(this, nom, prenom, age); // <=> super
  this.notes = notes;
};

Etudiant.prototype = Object.create(Person.prototype);
Etudiant.prototype.constructor = Etudiant;
