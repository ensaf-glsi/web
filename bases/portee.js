console.log(globalA); // undefined
var globalA = "globalA";

function f1() {
  console.log(globalA); // globalA
  globalA = "_globalA";
  localB = "localB";
  var localC = "localC";
}
// console.log(localB); // erreur
// console.log(localC); // erreur

f1();
console.log(globalA); // _globalA

console.log(localB); // localB
// console.log(localC); // erreur
