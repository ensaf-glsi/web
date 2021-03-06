let timer2 = setTimeout(function () {
  // if (condition ) {
  //     clearTimeout(timer2);
  // }
  console.log("alerte apres deux seconde");
}, 2000);

let timer = setInterval(function () {
  console.log("message chaque seconde !");
}, 1000);

setTimeout(function () {
  console.log("areter le timer");
  clearInterval(timer);
}, 10000);
