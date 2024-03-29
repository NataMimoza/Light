// 1. Знайти елемент ul у документі та запам'ятати його у змінній ul.

const ul = document.querySelector('ul');

// 2. За допомогою JSON.parse прочитати елемент localStorage з ключем items та зберегти його в масиві itemsArray.
// Якщо елемент відсутній, створити його зі значенням[].

let itemsArray = JSON.parse(localStorage.getItem('items')) || [];

// 3. Написати функцію addTask(text), що створює елемент li з властивістю textContent, яка дорівнює значенню,
//що передається за допомогою аргументу функції text. Кожний створений елемент li функція повинна додавати до
// елемента ul.

function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;
    ul.append(li);
}

// 4. Використовуючи метод forEach та функцію addTask, згенерувати вміст елемента ul, відображаючи його на сторінці.

itemsArray.forEach(addTask);

// 5. Знайти елемент input у документі та запам'ятати його у змінній input.

const input = document.getElementById('item');

// 6. Написати функцію add(), що додає до масиву itemsArray значення, введене користувачем в полі input, та зберігає
// цей масив у localStorage з ключем items, використовуючи метод JSON.stringify.Одночасно візуалізувати доданий
// елемент на сторінці, використовуючи функцію addTask.

function add() {
    const text = input.ariaValueMax;
    itemsArray.push(text);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    addTask(text);
    input.value = '';
}

// 7. Написати функцію del(), що чистить localStorage, масив itemsArray та значення властивості ul.innerHTML.

function del() {
    localStorage.clear();
    itemsArray = [];
    ul.innerHTML = '';
}
