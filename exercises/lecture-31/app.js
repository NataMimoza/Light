//  Маємо код, що будує стрічку публікацій та поміщає отриманий результат всередину елемента з id="blog".
// Продовжити ланцюжок промісив, використовуючи метод then, де потрібно звернутись до сервера
// https://jsonplaceholder.typicode.com/users і для кожного userId отримати ім'я user, після чого
// помістити це ім'я всередину елемента з класом "author".

const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
  
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };   
  });

  return promise;
};

xhrPromise("GET", url)
    .then(response => {
        const posts = JSON.parse(response)
        let result = ''
        posts.forEach(item => {
            result += template(item)
        })
        document.getElementById("blog").innerHTML = result;

         return xhrPromise("GET", "https://jsonplaceholder.typicode.com/users");
  })
  .then(function(response) {
    const users = JSON.parse(response);
    const author = document.querySelectorAll(".author");

    author.forEach(function (author) {
      const userId = author.getAttribute("data-id");
      const user = users.find(function (user) {
        return user.id.toString() === userId;
      });

      if (user) {
        author.textContent = user.name;
      } 
    });
  })
  .catch(function (error) {
    console.error("Error:", error);
  });