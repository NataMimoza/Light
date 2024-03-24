// 1. Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір.
//Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
const h1 = document.querySelectorAll('h1');
console.log(typeof h1);
console.log(h1.length);

for (let i = 0; i < h1.length; i++) {
    console.log(h1[i]);
}
//=========================================
// 2. Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1.
//Встановити для нього стиль background - color = "gold"

const pFirst = document.querySelector('#p1');
pFirst.style.backgroundColor = 'gold';
//========================================
//3. Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2.
//Встановити для нього стилі background - color: gold; color: blue; font - size: 2rem;

const pSecond = document.querySelector('#p2');
// pSecond.style.background = 'gold';
// pSecond.style.color = 'blue';
// pSecond.style.fontSize = '2 rem'; 
pSecond.style.cssText += 'background: gold; color: blue; fontSize: 2rem';

//===========================================
// 4. Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3.
//Призначити для нього клас third

const pThird = document.querySelector('#p3');
pThird.classList.add('third');

//==============================================
// 5.Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4.
//Призначити для нього класи fourth та border

const pFourth = document.getElementById('p4');
pFourth.classList.add('fourth', 'border');

// pFourth.style.border = '5px dotted tomato';
//==============================================
// 6. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент
//для кожного зі знайдених елементів.

const allContainers = document.querySelectorAll('.container');

for (let i = 0; i < allContainers.length; i++) {
    const container = allContainers[i];
    console.log(container.firstElementChild);
}
// ====================================
// 7. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого
// елементу для кожного першого елемента зі знайдених елементів.

const containers = document.querySelectorAll('.container');
 
for (let i = 0; i < containers.length; i++){
    const container = containers[i];
    console.log(container.firstElementChild.textContent);
}
//===========================================
// 8. Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers.
// Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином:
// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4 зберегти початкові атрибути id та class

const headers = document.querySelectorAll('.container header');

for (let i = 0; i < headers.length; i++) {
  let html = headers[i].firstElementChild;

let text = html.textContent;
let currentId = html.getAttribute('id');
let currentClass = html.getAttribute('class');

let newHtml = "<h"+(i+1)+">"+text+"</h"+(i+1)+">";

headers[i].innerHTML = newHtml;
headers[i].firstElementChild.setAttribute('id', currentId);
headers[i].firstElementChild.setAttribute('class', currentClass);

console.log(headers[i].firstElementChild.getAttribute('id')); 
  console.log(headers[i].firstElementChild); 
  
  //   const header = headers[i];
  //   const h1 = header.querySelector('h1');

  //   if (i === 1) {
  //   h1.outerHTML = '<h2>' + h1.innerHTML + '</h2>';
  // } else if (i === 2) {
  //   h1.outerHTML = '<h3>' + h1.innerHTML + '</h3>';
  // } else if (i === 3) {
  //   h1.outerHTML = '<h4>' + " class='title' id='fourth-title' "  + '</h4>';
  // }
}
//Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів - заголовків класи
//таким чином:
// до h1 додати клас first
// до h2 додати клас second
// до h3 додати клас third
// до h4 додати клас fourth

const headerss = document.querySelectorAll('.container header');
const classes = ['first', 'second', 'third', 'fourth'];

for (let i = 0; i < headerss.length; i++) {
  let h = document.querySelector('h'+(i+1));
h.classList.add(classes[i]);
//     const header = headerss[i];

//     const h1 = header.querySelector('h1');
// const h2 = header.querySelector('h2');
//   const h3 = header.querySelector('h3');
//   const h4 = header.querySelector('h4');

//   h1.classList.add(classes[0]);
//   h2.classList.add(classes[1]);
//   h3.classList.add(classes[2]);
//   h4.classList.add(classes[3]);     
}

