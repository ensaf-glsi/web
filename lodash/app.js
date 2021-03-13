document.querySelector("#q").addEventListener(
  "keyup",
  _.debounce(function () {
    console.log(this.value);
  }, 150)
);
