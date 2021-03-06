// var oReq = new XMLHttpRequest();

// oReq.open(
//   "GET",
//   url + (/\?/.test(url) ? "&" : "?") + new Date().getTime(),
//   true
// );
// oReq.send(null);

// "/page.php"
let ajax = function (url, options = { method: "GET", data: null }) {
  // if (options == undefined) {
  //     options = { method: 'GET', data: null };
  // }
  let http = new XMLHttpRequest();
  http.open(options.method, url, true);
  // http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // listener sur ma requete ajax
  http.onreadystatechange = function () {
    console.log("onreadychange : ", this.readyState, this.status);
    //Appelle une fonction au changement d'état.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Requête finie, traitement ici.
      console.log("traitement ...", http);
      options.success(http.responseText, http);
      // document.getElementById("result").innerHTML = http.responseText;
    } else if (this.status !== 200) {
      options.error(http);
    }
  };
  // http.send("q=" + document.search.q.value);
  http.send(options.data);
};

console.log("fichier app.js");
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
