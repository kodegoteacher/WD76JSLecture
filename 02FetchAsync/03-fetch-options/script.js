//method - HTTP method that you want to use
//body - Data that you want to send. Usually this is to be put in a database
//headers: any HTTP headers that you want to send - specify the type of data, content type header

//original talaga
//#####################################
// function createPost(post) {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify({
//       title: post.title,
//       body: post.body,
//     })
//   })
// }
//#####################################
//applying destructuring from the code above
function createPost(title, body) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
      token: "abc123", //fake token for demo purposes
    },
  })
  .then((res) => res.json())
  .then((data) => console.log(data)) //return ng promise
}

createPost({title: "My Post", body: "This is my Post"});
