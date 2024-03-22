// const alert = document.querySelector('.alert');

// 1. Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick.
// Написати функцію обробки події onclick, що додає CSS - клас alert - primary до елемента з id = alert та
//змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".

// Я замінила "до елемента з id = alert" на "до елемента з "класом btn-primary"!!!

const primBtn = document.querySelector('.btn-primary');

    primBtn.onclick = function () {
    // const alert = document.getElementById('alert');
    primBtn.classList.add('alert-primary');
    primBtn.textContent = "A simple primary alert—check it out!"; 
}

// 2. Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click".
// Написати функцію обробки події click, що додає CSS - клас alert - primary до елемента з класом btn-secondary 
//(замінила id = alert) та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"

const secondBtn = document.querySelector('.btn-secondary');

secondBtn.addEventListener('click', function () {
    secondBtn.classList.add('alert-primary');
    secondBtn.textContent = "A simple secondary alert—check it out!";
});

// 3. Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover".
// Написати функцію обробки події mouseover, що додає CSS - клас alert - success до елемента з класом btn-success 
// (замінила id = alert) та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"
// Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout, що видаляє
// CSS - клас alert - success з елемента btn-success та змінює значення властивості textContent цього елемента на
// пустий рядок.

const successBtn = document.querySelector('.btn-success');

successBtn.addEventListener('mouseover', function () {
    successBtn.classList.add('alert-success');
    successBtn.textContent = "A simple success alert—check it out!";
});

successBtn.addEventListener('mouseout', function() {
  successBtn.classList.remove('alert-success');
  successBtn.textContent = " ";
});

// 4. Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus".
//Написати функцію обробки події focus, що додає CSS - клас alert - danger до елемента з класом btn-danger 
// (замінила id = alert) та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!"
// Додати до кнопки прослуховувач події "focusout". Написати функцію обробки події focusout, що видаляє
//CSS - клас alert - danger з елемента alert та змінює значення властивості textContent цього елемента на
//пустий рядок.

const dangerBtn = document.querySelector('.btn-danger');

dangerBtn.addEventListener('focus', function () {
    dangerBtn.classList.add('alert-danger');
    dangerBtn.textContent = "A simple danger alert—check it out!";
});

dangerBtn.addEventListener('focusout', function() {
  dangerBtn.classList.remove('alert-danger');
  dangerBtn.textContent = " ";
});

// 5. Знайти на сторінці кнопки з класом btn-dark та btn-light. Написати функцію toggleMode, що перемикає клас
// «dark - mode» елемента document.body за допомогою методу classList.toggle().Одночасно при перемиканні класу
//dark - mode потрібно приховувати або показувати відповідну кнопку.Якщо ввімкнено режим dark - mode, показати
// кнопку btn - light та сховати кнопку dark - mode, і навпаки, якщо вимкнено режим dark - mode, показати кнопку
// btn - dark та сховати кнопку btn - light

const darkBtn = document.querySelector('.btn-dark');
const lightBtn = document.querySelector('.btn-light');

function toggleMode() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
    darkBtn.style.display = 'block';
    lightBtn.style.display = 'none';
  } else {
    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
  }
}

const buttons = document.querySelectorAll('.btn');

for (let button of buttons) {
    button.addEventListener('click', toggleMode);
}

// 6. Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". Написати
// функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter".Якщо це так, типову
// дію події потрібно скасовувати за допомогою методу event.preventDefault().Після скасування дії за замовчуванням,
// додати CSS - клас alert - info до елемента з класом btn-info (замінила id = alert) та змінити значення
// властивості textContent цього елемента на "A simple info alert—check it out!";

const infoBtn = document.querySelector('.btn-info');

infoBtn.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        infoBtn.classList.add('alert-info');
        infoBtn.textContent = "A simple info alert—check it out!";
    }
});

// 7. Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента
//з класом.card - title

const cards = document.querySelectorAll('.card');

for (const card of cards) {
  const title = card.querySelector('.card-title');
  console.log(title.textContent);
}

// 8. Знайти на сторінці всі селектори .card. Використовуючи цмкл for, знайти для кожного елемента .card кнопку
//з класом.add - to - cart, додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на
// консоль вміст кожного елемента з класом.card - title

const allCards = document.querySelectorAll('.card');

for (const card of allCards) {
  const button = card.querySelector('.add-to-cart');
  
  button.addEventListener('click', function() {
    const title = card.querySelector('.card-title');
    console.log(title.textContent);
  });
}