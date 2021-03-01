function exThis() {
  console.log(this);

  function f() {
    console.log("f : ", this);
  }
  f();

  let f2 = function () {
    console.log("f2 : ", this);
  };
  f2();
}

let ahmed = {
  nom: "BENNANI",
  prenom: "Ahmed",
  age: 27,
  nomComplet: function () {
    let self = this;
    console.log(self);
    let calculerNomComplet = function () {
      console.log(self);
      function f1() {}
      let f2 = function () {};
      return self.nom + " " + self.prenom;
    };
    return calculerNomComplet();
  },
};

console.log(ahmed.nomComplet());

// console.log(ahmed)
