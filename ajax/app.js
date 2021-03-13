// "/page.php"
let ajax = function (url, options = { method: "GET" }) {
  // if (options == undefined) {
  //     options = { method: 'GET', data: null };
  // }
  let http = new XMLHttpRequest();
  http.open(options.method, url, true);
  // http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // listener sur ma requete ajax
  http.onreadystatechange = function () {
    console.log("onreadychange : ", this.readyState, this.status);
    // Appelle une fonction au changement d'état.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Requête finie, traitement ici.
      console.log("traitement ...", http);
      // return http.responseText;
      if (options.success) {
        // <=> if (options.success !== undefined) {
        options.success(http.responseText, http);
      }
      // document.getElementById("result").innerHTML = http.responseText;
    } else if (this.status !== 200) {
      // if (a === 1 && b === 3)
      options.error && options.error(http);
    }
  };
  // http.send("q=" + document.search.q.value);
  http.send(options.data);
};

function ajaxAndPhp() {
  document
    .querySelector('form[name="search"]')
    .addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("submit form");
      ajax("/page.php", {
        method: "POST",
        data: new FormData(this),
        success: function (response) {
          document.getElementById("result").innerHTML = response;
        },
      });
      // http.send("q=" + document.search.q.value);
    });
}
console.log("fichier app.js");
