a();
// b();

function a() {
  console.log("func a");
  b();
  function b() {
    console.log("func b");
  }
}
// console.log("func b : ", b);

console.log("func aa : ", aa);
// console.log("func bb : ", bb);

var aa = function () {
  console.log("func aa");
  console.log("func bb : ", bb);
  var bb = function () {
    console.log("func bb");
  };
};
aa();
// console.log("func bb : ", bb);
