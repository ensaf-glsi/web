let ajax = function (url, options = { method: "GET" }) {
  //   console.log("arguments : ", arguments);
  console.log("url : ", url);
  console.log("options : ", options);
  // if (options == undefined) {
  //     options = { method: 'GET', data: null };
  // }
  let http = new XMLHttpRequest();
  //   let method = 'GET';
  //   if (options.method !== undefined) {
  //       method = options.method;
  //   }
  http.open(options.method || "GET", url, true);
  // http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // listener sur ma requete ajax
  http.onreadystatechange = function () {
    // console.log("onreadychange : ", this.readyState, this.status);
    // Appelle une fonction au changement d'état.
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 200) {
        // Requête finie, traitement ici.
        //   console.log("traitement ...", http);
        // return http.responseText;
        if (options.success) {
          // <=> if (options.success !== undefined) {
          options.success(http.responseText, http);
        }
        // document.getElementById("result").innerHTML = http.responseText;
      } else {
        //   console.log("error ====");
        // if (a === 1 && b === 3)
        options.error && options.error(http);
      }
    }
  };
  // http.send("q=" + document.search.q.value);
  http.send(options.data);
};

function getPosts(success, error) {
  let user1;
  ajax("https://jsonplaceholder.typicode.com/userrs", {
    success: (response) => {
      const responseJson = JSON.parse(response);
      console.log(responseJson);
      user1 = responseJson[0].id;
      //   console.log("user 1 dans le callback ", user1);
      ajax(
        "https://jsonplaceholder.typicode.com/posts/" + user1 + "/comments",
        {
          success: (resp) => {
            const resJson = JSON.parse(resp);
            // console.log("les posts", resJson);
            success(resJson);
          },
          error: error,
        }
      );
    },
    error,
  });
  console.log("user 1 : ", user1);
}

getPosts(
  (posts) => {
    console.log("les posts : ", posts);
  },
  (error) => {
    console.warn("Erreur ajax : ", error);
  }
);
