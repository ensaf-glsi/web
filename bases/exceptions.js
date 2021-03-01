try {
  console.log("avant exception");
  console.log(a); //arret du bloc try
  console.log(12 + 5);
} catch (e) {
  console.warn("erreur de calcul");
} finally {
  console.log("bloc finally");
}
console.log("apres bloc finally");

function factoriel(n) {
  console.log("n : ", n);
  if (n == undefined) {
    n = 0;
  }
  if (!Number.isInteger(n) || n < 0) {
    // throw Error("n doit etre un nombre positif");
    throw new Error("n doit etre un nombre positif");
  }
  let f = 1;
  for (let i = 2; i <= n; i++) {
    f *= i;
  }
  return f;
}

try {
  let result = factoriel("RE");
} catch (e) {
  console.warn(e.message);
  console.log(e.stack);
  alert(e.message);
}
