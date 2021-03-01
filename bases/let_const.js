// console.log(globalA); // erreur

let globalA = "globalA";

console.log(globalA);

{
  let blocB = "blocB";
  console.log(blocB);
}
// console.log(blocB); //erreur

// portée bloc

function f() {
  // console.log(localC);
  let localC = "localC";
  console.log(localC, globalA);
  globalA = "_globalA";
}
f();
// console.log(localC); //erreur

console.log(globalA);

const PI = 3.14;

console.log(PI);

PI = 5;
