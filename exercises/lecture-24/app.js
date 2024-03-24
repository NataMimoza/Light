// 1. Маємо масив кольорів
// Масив кольорів складається з 3 елементів. 
// Визначити функцію зворотного виклику під назвою "iter". Функція приймає один параметр під назвою «item». 
// Усередині функції має бути оператор console.log, який виводить значення параметра «item» на консоль.
// Використовуючи forEach() та функцію iter, вивести в консоль значення кожного кольору.
const colors = ['blue', 'green', 'white'];

function iter(item) {
    console.log(item);
}
colors.forEach(iter);

// 2.Маємо масив кольорів
// Масив кольорів складається з 3 елементів. 
// Визначити функцію зворотного виклику під назвою "iterate", яка приймає два параметри: "item" та "index". 
// Функція повинна видавати повідомлення на консоль за допомогою шаблонних літералів.Повідомлення має містити значення
// «item» і значення «index» - ${ item } has index ${ index }. Використовуючи forEach() та функцію iterate, вивести 
// в консоль значення кожного кольору.
// Перепишіть функцію iterate, використовуючи масив colors, таким чином, щоб на консоль видавалось повідомлення
// 'The last iteration!', коли функція виконує останню ітерацію для елементів colors.
const colors1 = ['blue', 'green', 'white'];

function iterate(item, index) {
    console.log(`${item} has index ${index}`);
}

function iterate(item, index, array) {
    console.log(item);
    if (index === array.length - 1) {
        console.log('The last iteration!')
    }
}

colors.forEach(iterate);

// ============================================================
// 3. Маємо масив letters
// Визначити функцію зворотного виклику під назвою "iterate", яка приймає параметр під назвою "letter". 
// Усередині функції має бути оператор console.log, який перевіряє, чи значення «this» дорівнює об'єкту «window».
// Коли функція викликається, вона повинна реєструвати «true» на консолі, якщо значення «this» дорівнює об'єкту «window».
const letters = ['a', 'b', 'c'];

function iterate(letter) {
    console.log(this === window);
}

// ==========================================================
// 4. Маємо масив під назвою Numbers.
// Встановити, чи всі числа масиву парні методом forEach()
const Numbers = [22, 3, 4, 10];
let even = true;
Numbers.forEach(function (number) {
    if (number % 2 === 1) {
        even = false;
    }
});

console.log(even);

// =================================================================
//  5. Маємо масив під назвою numbers.
// Встановити, чи всі числа масиву парні методом every()
const numbers = [22, 3, 4, 10];
const everyEven = numbers.every(function (number) {
    return number % 2 === 0;
});
console.log(everyEven);

// =======================================================
// 6. Маємо масив під назвою fruits
// Використовуючи метод findIndex, знайти індекс першого елемента в масиві, який задовольняє умову
// fruit === "blueberries".
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === 'blueberries');

console.log(index);

// ========================================================
// 7. Маємо масив під назвою arr
// Використовуючи метод find, знайти перший елемент у масиві arr, який задовольняє умову елемент > 10.
const arr = [7, 33, 47, 99, 2, 103, 79];
const firstEl = arr.find(element => element > 10);

console.log(firstEl);

// ===============================================================
//  8. Маємо масив під назвою array
// Використовуючи метод some, перевірте, чи існує принаймні один елемент у масиві array, що є парним.
const array = [1, 2, 3, 4, 5];
const oneEven = (element) => element % 2 === 0;

console.log(array.some(oneEven));

// ====================================================
// 9. Маємо масив під назвою numbers
// Використовуючи метод sort, відсортуйте елементи масиву "numbers" у порядку зростання.

const numbers1 = [1, 30, 4, 21, 100000];
console.log(numbers1.sort());