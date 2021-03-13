let ajax = function (url, options = { method: "GET" }) {
  //   console.log("arguments : ", arguments);
  console.log("url : ", url);
  console.log("options : ", options);
  // if (options == undefined) {
  //     options = { method: 'GET', data: null };
  // }
  return new Promise((resolve, reject) => {
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
          resolve(http.responseText, http);
          // document.getElementById("result").innerHTML = http.responseText;
        } else {
          //   console.log("error ====");
          // if (a === 1 && b === 3)
          reject(http);
        }
      }
    };
    // http.send("q=" + document.search.q.value);
    http.send(options.data);
  });
};

function getPosts() {
  return ajax("https://jsonplaceholder.typicode.com/users")
    .then((users) => {
      const responseJson = JSON.parse(users);
      console.log(responseJson);
      const user1 = responseJson[0].id;
      const p = ajax(
        "https://jsonplaceholder.typicode.com/posts/" + user1 + "/comments"
      );
      console.log("prompise posts : ", p);
      return p;
    })
    .then((posts) => {
      const postsJson = JSON.parse(posts);
      return postsJson[0];
      // console.log(postsJson);
    });

  // ajax("https://jsonplaceholder.typicode.com/users").then((response) => {
  //     const responseJson = JSON.parse(response);
  //     console.log(responseJson);
  //     user1 = responseJson[0].id;
  //     //   console.log("user 1 dans le callback ", user1);
  //     ajax(
  //       "https://jsonplaceholder.typicode.com/posts/" + user1 + "/comments").then( (resp) => {
  //           const resJson = JSON.parse(resp);
  //           // console.log("les posts", resJson);
  //           success(resJson);
  //         },
  //         error: error,
  //       }
  //     );
  //   }
  // });
  // console.log("user 1 : ", user1);
}

// getPosts(
//   (posts) => {
//     console.log("les posts : ", posts);
//   },
//   (error) => {
//     console.warn("Erreur ajax : ", error);
//   }
// );

getPosts()
  .then((reponse) => {
    console.log(reponse);
  })
  .catch((error) => {
    console.warn("Erreur ajax  2: ", error);
  });
