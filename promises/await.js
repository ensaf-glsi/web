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

async function getPosts() {
  try {
    const users = await ajax("https://jsonplaceholder.typicode.com/users");
    const responseJson = JSON.parse(users);
    console.log(responseJson);
    const user1 = responseJson[0].id;
    const posts = await ajax(
      "https://jsonplaceholder.typicode.com/posts/" + user1 + "/comments"
    );
    const postsJson = JSON.parse(posts);
    return postsJson[0];
  } catch (error) {
    console.warn("error Ajax : ", error);
  }
}

const post = getPosts();
console.log(post);

post.then((reponse) => {
  console.log(reponse);
});
// .catch((error) => {
//   console.warn("Erreur ajax  2: ", error);
// });
