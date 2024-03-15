// 1. Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа.
// Надати значення цим властивостям.Вивести значення властивостей об'єкту на консоль

const person = {
    name: 'Taras',
    surname: 'Shevchenko',
    age: 16,
}
console.log(person.name, person.surname, person.age);

// =======================================
// 2. Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим
//властивостям. Вивести значення властивостей об'єкту на консоль.

const person1 = {
    name:  {
        firstName: 'Taras',
        lastName: 'Shevchenko',
    },
    age: 16,
}
console.log(person1.name);
// ================================
// 3. Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.

const person2 = {
    name: 'Taras',
    surname: 'Shevchenko',
    age: 16,

    bio() {
    console.log(`name: ${this.name}`);
    console.log(`surname: ${this.surname}`);
    console.log(`age: ${this.age}`);
  },
}

person2.bio();

// ======================================
// 4. Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.

const person3 = {
    name: 'Taras',
    surname: 'Shevchenko',
    age: 16,

    introduceSelf() {
        console.log(`Hi! I\'m ${this.name}`);
    },
}
person3.introduceSelf();

// ======================================
// 5. Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю
// name та методом introduceSelf.Створити за допомогою createPerson 2 екземпляри об'єкта.

function createPerson(name) {
    return {
        name,
        introduceSelf() {
            console.log(`I am ${this.name}`);
        },
    };
}
const person11 = createPerson('Kyryll');
const person12 = createPerson('Albina');

person11.introduceSelf();
person12.introduceSelf();

// ==========================================
// 6. Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю
// name та методом introduceSelf.Створити за допомогою Person 2 екземпляри об'єкта mary та tom.

function person20(name) {
    return {
        name,
        introduceSelf() {
            console.log(`I am ${this.name}`);
        },
    };
}

const person21 = createPerson('Mary');
const person22 = createPerson('Tom');

person21.introduceSelf();
person22.introduceSelf();
// визначити, чи містить об'єкт mary властивість під назвою prop.

const mary = new person20('Mary');

if ("prop" in mary) {
  console.log("Mary has prop");
} else {
  console.log("Mary don\'t has prop"); 
}

// ================================================================
// 7. Брудний мартіні – ідеальний коктейль для любителів оливкового. Його можна приготувати на горілці чи джині
// за таким рецептом: ingredients:
//  6 fluid ounces gin
//  1 dash dry vermouth
//  1 fluid ounce brine from olive jar
//  4 stuffed green olives
//   fluid ounces - одиниця ваги avoirdupois - одна шістнадцята фунта (28.4131 грамів).
// Офіційно dash становить приблизно 1 мл, 10 крапель або 1 / 5 чайної ложки.

// Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() При виклику методу 
// excuse_my_french(), на консоль виводиться:

//       ingrédients:  
//         170.4786 ml de gin
//         1 trait de vermouth sec (0.0351951ml) 
//         28.4131 ml de saumure du pot d'olive
//         4 olives vertes farcies

// При виклику методу english_please(), на консоль виводиться:

//       ingredients:
//         6 fluid ounces gin
//         1 dash dry vermouth (0.0351951ml) 
//         1 fluid ounce brine from olive jar
//         4 stuffed green olives

const DirtyMartini = {
    ingredients: {
        gin: 6,
        vermouth: 1,
        brine: 1,
        olives: 4,
    },

    excuse_my_french() {
        console.log(`ingrédients:`);
        console.log(`${this.ingredients.gin} ml de gin`);
        console.log(`${this.ingredients.vermouth} trait de vermouth sec (0.0351951ml)`);
        console.log(`${this.ingredients.brine} ml de saumure du pot d'olive`);
        console.log(`${this.ingredients.olives} olives vertes farcies`);
    },

    english_please() {
        console.log(`ingredients:`);
        console.log(`${this.ingredients.gin} fluid ounces gin`);
        console.log(`${this.ingredients.vermouth} dash dry vermouth (0.0351951ml)`);
        console.log(`${this.ingredients.brine} fluid ounce brine from olive jar`);
        console.log(`${this.ingredients.olives} stuffed green olives`);
  },
};
 
DirtyMartini.excuse_my_french();
DirtyMartini.english_please();