// 1. Маємо код
let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
// Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.
console.log(str1.length === str2.length); // true

// console.log(str1.length); // довжинa 13
// console.log(str2.length); // довжинa 13
// console.log(str1 == str2); // true
// console.log(str1.localeCompare(str2)); // 0

// ===========================================
// 2. Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.
let string5 = 'Hello World';

console.log(string5[0]);
console.log(string5.charAt(0));

// ====================================
// 3. повернути символ J рядка str3:

let str3 = "Hello Javascript";

console.log(str3[6]); // 'J'

// console.log(str3.indexOf('J')); // 6
// console.log(str3.charAt(6)); // 'J'

// ======================================
// 4. Використовуючи індекс, отримати доступ до останнього символу рядка двома способами:

let str43 = "Hello Javascript";

console.log(str43.slice(-1)); // 't'
console.log(str43[str43.length - 1]); // 't'

// ======================================
// 5. Напишіть три варіанти функції lastChar, що повертає останній символ рядка:
// let str4 = "Hello Javascript";

function lastChar1(str) {                  // 1 варіант
    return str[str.length - 1];
}

// let str4 = "Hello Javascript";
// console.log(lastChar1(str4));


function lastChar2(str) {                  // 2 варіант
    return str.charAt(str.length - 1);
}

// let str4 = "Hello Javascript";
// console.log(lastChar2(str4));


function lastChar3(str) {                    // 3 варіант
    return str.slice(-1);
}

let str4 = "Hello Javascript";
console.log(lastChar3(str4)); 

// =================================
// 6. Маємо код. Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey

let a = 'When candles are out,';
let b = 'all cats are grey.';

newStr = a.concat(' ', b); 
console.log(newStr);

// ================================
// 7. Маємо код. Використовуючи змінні c, d, fact, змінити значення fact та вивести його на консоль,
// щоб результат виглядав так: Fifteen is the same as 15

let fact = "Fifteen is the same as"
let c = 5;
let d = 10;

console.log(fact + ' ' + (c + 10));
// ===========================================
// 8. Маємо код. Напишіть функцію getFullName, що повертає результат: "Tom Cat"

let firstName = "Tom";
let lastName = "Cat";

function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
getFullName();

// ================================================
// 9. Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий
// результат: Hello, Tom Cat!

function getFullName() {
    return firstName + ' ' + lastName;
}

function greeting() {
    let fullName = getFullName();
    console.log('Hello, ' + fullName + '!');
}
greeting();

// ========================================
// 10. Використовуючи функцію greeting, створити такий шаблон: <div><h1>Hello, Tom Cat!</h1></div>

// function greeting() {
//     let message = "<div><h1>Hello, Tom Cat!</h1></div>";
//     return message;
// }

// let hello = greeting();
// document.getElementById('greeting').innerHTML = hello;

let template = (" " + " " + greeting(firstName, lastName) + " " + " ");
console.log(template);
// ===============================
// 11. Маємо наступний код:
// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"

let string1 = "  The name of our game  ";

console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());

// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'

const phoneNumber = '\t  555-123\n ';

console.log(phoneNumber.trim());
console.log(phoneNumber + '\n');

// ==============================
// 12. Маємо наступний код:
// Перевірити, чи містить рядок значення 'look up'
// Перевірити, чи містить рядок значення 'look on'
// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції

let sentence = 'Always look on the bright side of life';

console.log(sentence.includes('look up')); //false
console.log(sentence.includes('look on')); // true
console.log(sentence.includes('look on', 8)); //false

// console.log(sentence.slice(8).includes('look on')); //false

// ===============================
// 13. Маємо наступний код.
// Знайти індекс символу 'l'
// Знайти індекс символу 'l', починаючи з 3-ї позиції
// Знайти індекс символу 'L'

let sentence1 = 'Always look on the bright side of life';

console.log(sentence1.indexOf('l')); //1
console.log(sentence1.indexOf('l', 2)); //7
console.log(sentence1.indexOf('L')); // -1

// ================================
// 14. Маємо наступний код:
// Отримати підрядок 'look on the bright side of life'
// Отримати підрядок 'Always'
// Отримати підрядок 'look'

let sentence2 = 'Always look on the bright side of life';

console.log(sentence2.slice(7));
console.log(sentence2.substring(0, 6));
console.log(sentence2.substring(7, 11));

// =========================
// 15. Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри,
// літери у нижньому регістрі та символи - і _.Довжину імені користувача встановити від 8 до 16 знаків.

let pattern = /^[a-z0-9-]{8,16}$/;
let user = "tom_cat1";

const found = user.match(pattern);
console.log(found);
// ======================================
// 16. Створити регулярний вираз, який призначений для перевірки email на коректність.

let userEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]$/

// =======================================
// 17. Маємо наступний код:
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr

let sentences = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

function truncateText(text) {
    return text.substring(0, 50);
}
console.log(truncateText(sentences));


function truncateText(text) {
    return text.substr(0, 50);
}
console.log(truncateText(sentences));


