
const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

// const xhrPromise = (method, url) => {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.send();
  
//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };

//     xhr.onerror = () => {
//       reject('Something went wrong!');
//     };
//   });

//   return promise;
// };

// console.log(xhrPromise("GET", url));

// xhrPromise("GET", url)
// .then(response => {
//     const posts = JSON.parse(response)
// 		let result = ''
//     posts.forEach(item => {
//         result += template(item)
//     })
//     document.getElementById("blog").innerHTML = result;
    
// })

// .then( () => {
//   const users  = document.querySelectorAll('.author');
//   users.forEach(user => {
//     xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
//     .then(response => {
//       let userName = JSON.parse(response)
//       console.log(userName.name)
//       user.textContent = userName.name
//     })
//   })

// });

// Використовуючи метод fetch замість XMLHttpRequest, переписати сценарій app.js

fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      return response.json();
    })
    .then(function(posts) {
      let result = "";
      posts.forEach(function(item) {
        result += template(item);
      });
      document.getElementById("blog").innerHTML = result;

      const users = document.querySelectorAll('.author');
      users.forEach(function(user) {
        const userId = user.dataset.id;
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then(function(response) {
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            return response.json();
          })
          .then(function(userData) {
            user.textContent = userData.name;
          })
          .catch(function(error) {
            console.error(error);
          });
      });
    })
    .catch(function(error) {
      console.error(error);
    });
