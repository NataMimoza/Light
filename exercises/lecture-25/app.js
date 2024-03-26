// 1. Маємо масив list
// Використовуючи метод createElement, створити невпорядкований список на основі масиву list та вставити його на 
//сторінку.
const list = ['html', 'css', 'javascript', 'react.js'];
const ul = document.getElementById('list');

for (let element of list) {
    const li = document.createElement('li');
    li.textContent = element;
    ul.append(li);
}

// ========================================================================
// 2. Маємо масив listWithHref
// Використовуючи метод createElement, створити впорядкований список на основі масиву listWithHref, де кожний елемент
// списку є тегом a з відповідним посиланням.Наприклад, для першого елемента списку:
//   <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a>
// Додайте створений список на сторінку.

const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
const ol = document.getElementById('list_ol');

for (let element of listWithHref) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = Object.values(element)[0];
    a.textContent = Object.keys(element)[0];
    li.append(a);
    ol.append(li);
}

//================================================================   
// 3. Маємо масив students
// Використовуючи метод createElement, створити таблицю на основі масиву students. Заголовки стовпчиків 
//таблиці - firstName, lastName, degree.Встановити для заголовків стовпчиків таблиці css - властивості: 
// background - color: blue; color: azure; Додайте таблицю на сторінку.
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]
const table = document.getElementById('students');

const thead = document.createElement('thead');
const tr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');

th1.textContent = 'firstName';
th2.textContent = 'lastName';
th3.textContent = 'degree';

tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);

thead.appendChild(tr);

table.appendChild(thead);

const tbody = document.createElement('tbody');

for (const student of students) {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');

  td1.textContent = student.firstName;
  td2.textContent = student.lastName;
  td3.textContent = student.degree;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tbody.appendChild(tr);
}

table.appendChild(tbody);