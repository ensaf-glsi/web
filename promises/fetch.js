async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseJson = await response.json();
    console.log(responseJson);
    const user1 = responseJson[0].id;
    const posts = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + user1 + "/comments"
    );
    const postsJson = await posts.json();
    return postsJson[0];
  } catch (error) {
    console.warn("error Ajax : ", error);
  }
}

const post = getPosts();
console.log(post);

post.then((reponse) => {
  console.log("fetch ", reponse);
});
// .catch((error) => {
//   console.warn("Erreur ajax  2: ", error);
// });
