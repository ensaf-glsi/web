import Person, { Etudiant, max } from "./Etudiant.js";

let context = {
  firstName: "prenom",
};
function sayHello(name) {
  console.log("context : ", this);
  return "Hello " + name;
}
console.log(sayHello()); // <=> sayHello.apply(window, ['mr x', ...]); or sayHello.call(window, 'mr x', ...);
console.log(sayHello("mr x ", "y", "z"));
// console.log(sayHello.apply(context, ["avec apply"]));
// console.log(sayHello.call(context, "avec call", "p2"));

// const sayHello2 = sayHello.bind(context);
// sayHello2("avec bind");

let lastName = "janati";
const person = {
  firstName: "ahmed",
  lastName, // <=> lastName: lastName,
  // nomComplet: function() {
  //     return this.firstName + ' ' + this.lastName;
  // },
  nomComplet() {
    // return this.firstName + " " + this.lastName;
    return `Le nom complet : ${this.firstName} ${this.lastName.toUpperCase()}`;
  },
};

function destructuring() {
  // list matching
  const t = [1, 2, 3];
  let [a, , c = 20, d = 10] = t; // <=> let a = t[0], c = t[2], d = t[3];
  console.log(a, c, d);

  const person = {
    firstName: "ahmed",
    lastName, // <=> lastName: lastName,
    // nomComplet: function() {
    //     return this.firstName + ' ' + this.lastName;
    // },
    nomComplet() {
      //   console.log("context : ", this);
      // return this.firstName + " " + this.lastName;
      return `Le nom complet : ${
        this.firstName
      } ${this.lastName.toUpperCase()}`;
    },
  };
  // object matching
  let { firstName = "Zouhir", nomComplet, lastName: ln, age = 25 } = person;
  // <=> let firstName = person.firstName, nomComplet = person.nomComplet;
  console.log("firstName : ", firstName);
  console.log("lastName : ", ln);
  console.log("age : ", age);
  console.log(nomComplet.call(person));
  //   console.log(nomComplet.apply(person));
  //   console.log(nomComplet.bind(person)());

  function afficherPerson({ firstName, lastName, age = 23 }) {
    console.log("firstName : ", firstName);
    console.log("lastName: ", lastName);
    console.log("age: ", age);
  }
  afficherPerson(person);
}

// destructuring();

function restSpread() {
  function join(delim = " ", ...values) {
    // console.log(`<${delim}>`, values, typeof values);
    console.log(values.join(delim));
  }
  join();
  join(",");
  join(",", "a", "b");
  const tab = ["a", "b", "c", "d"];
  join(" or ", ...tab, "e");
}
// restSpread();

function modules() {
  new Etudiant();
  new Person();
  console.log(max(12, 24));
}

// modules();

function afficherPerson(p) {
  const person = Object.assign({ firstName: "", age: 18 }, p);
  console.log("person : ", person);
}

afficherPerson();
afficherPerson({ lastName: "janati" });
afficherPerson({ lastName: "janati", age: 13 });
