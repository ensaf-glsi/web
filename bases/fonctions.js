let tab = [3, 2, 14, 7, 9, 8, 12, 13];

// une fonction qui retourne les nombres pairs
let nombrePair = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let nb = arr[i];
    if (nb % 2 == 0) {
      result.push(nb);
    }
  }
  return result;
};
// console.log(nombrePair(tab));

// une fonction qui retourne les nombres >= 10
let nombreSup10 = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let nb = arr[i];
    if (nb >= 10) {
      result.push(nb);
    }
  }
  return result;
};
// console.log(nombreSup10(tab));

let filter = function (arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let nb = arr[i];
    if (predicate(nb)) {
      result.push(nb);
    }
  }
  return result;
};

let pairPredicate = function (item) {
  return item % 2 == 0;
  //   if (item % 2 == 0) {
  //       return true;
  //   }
  //   return false;
};

// console.log(filter(tab, pairPredicate));

let pairAndSup10Predicate = function (item) {
  return item >= 10 && item % 2 == 0;
};
// console.log(filter(tab, pairAndSup10Predicate));

// console.log(tab.filter(pairAndSup10Predicate));

/* une fonction qui multiplie par 2
 * tous les nombres du tableau
 */
function map(arr, transformer) {
  let result = [];
  arr.forEach(function (item, index) {
    console.log(item, index);
    result.push(transformer(item));
  });
  return result;
}
// function foreach(arr, iterator) {
//     for(i = 0; i < arr.length; i++) {
//         iterator(arr[i], i, arr);
//     }
// }
// let itemF2 = function (item) {
//   return item * 2;
// };
let itemF2 = (item) => item * 2; // arrow function

// console.log(map(tab, itemF2));

// console.log(tab.map(itemF2));

const array1 = [1, 2, 3, 4];
const reducer = (somme, currentValue) => {
  console.log("somme : ", somme);
  console.log("currentValue : ", currentValue);
  return somme + currentValue;
};
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

function reduce(arr, reducerCallback, initial) {
  let i = 0;
  let acc = initial;
  if (initial == undefined) {
    i = 1;
    acc = arr[0];
  }
  while (i < arr.length) {
    let item = arr[i];
    acc = reducerCallback(acc, item);
    i++;
  }
  return acc;
}

console.log(reduce(array1, reducer));

let ul = document.querySelector("ul");

const log = (x) => {
  setTimeout(() => console.log(x), 1000);
};
for (var j = 0; j < 10; j++) {
  //   log(j);
  //   setTimeout(() => console.log(j), 1000);
}
