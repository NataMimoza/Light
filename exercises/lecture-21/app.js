// 1. Маємо рядок fruits: const fruits = 'apple banana cantaloupe blueberries grapefruit';
// Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
// Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
// Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
// Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
// Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.

const fruits = 'apple banana cantaloupe blueberries grapefruit';
const myFruits = fruits.split();

console.log(myFruits);
//==
for (let f = 0; f < myFruits.length; f++) {
    console.log(myFruits[f]);
}
//==
let i = 0;

while (i < myFruits.length) {
    console.log(myFruits[i]);
    i++;    
}
//==
let j = 0;

do {
    console.log(myFruits[j]);
    j++;
} while (j < myFruits.length)
// ==

for (let fruit of myFruits) {
    console.log('fruit:', fruit);
}
// ===========================================
// 2. Маємо масив Numbs. const Numbs = [1,2,3,4,5,6,7,8,9,10];
// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numb of Numbs) {
    if(numb %2 === 0) {
        console.log(numb);
    }
}
// ================================================
// 3. Маємо масив names:const names = ['Batman']; Додати 'Joker' в кінець масиву names:

const names = ['Batman'];
names.push('Joker');

console.log(names);
// ===========================================
// 4. Маємо масив names:const names = ['Batman']; Додати 'Joker' на початок масиву names

const names1 = ['Batman'];
names1.unshift('Joker');

console.log(names1);
// ====================================================
// 5. Маємо масив names:names = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift

const names2 = ['Batman', 'Joker', 'Bane'];
names2.unshift('Catwoman');

console.log(names2);
// ====================================
// 6. Маємо масив names: names = ['Batman', 'Joker', 'Bane'];
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1

const names3 = ['Batman', 'Joker', 'Bane'];
names3.splice(1, 0, 'Catwoman');

console.log(names3);
// ================================================
// 7. Маємо масив names: const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Видалити елементи 'Catwoman' і 'Joker' з масиву names

const names4 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names4.splice(1, 2);

console.log(names4);
// ========================================
// 8. Маємо масив names: const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names

const names5 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
names5.splice(1, 2, 'Alfred');

console.log(names5);
// ====================================
// 9. Маємо масив names: const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.

const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

console.log(names6.includes('Alfred')); //false

names6.push('Alfred');
console.log(names6);
// ============================================
// 9. Маємо масив names: const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.

const names11 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const stringAlfred = names11.includes('Alfred');

if (stringAlfred) {
    let index = names11.indexOf('Alfred');
    names11.splice(index, 1);
}
console.log(names11);
