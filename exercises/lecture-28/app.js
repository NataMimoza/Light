//Є проста реєстраційна форма з полями для імені користувача, електронної пошти, пароля та кнопки
// «Надіслати». Існує також контейнер div(errorMessages) для відображення повідомлень про помилки
// перевірки. Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.
// Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.
// Виконати базову перевірку:
// -ім’я користувача не може бути пустим,
// -електронна адреса має бути у правильному форматі,
// -пароль має містити принаймні 8 символів,
// -пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один
//спеціальний символ.
// Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення
// про помилку. Повідомлення про помилки відображаються в розділі errorMessages.
// Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.

const form = document.getElementById('registrationForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    errorMessages.textContent = '';

    
    let errors = false;

    if (username === '') {
        errorMessages.textContent = 'Fill in the field...';
        return;
    }
    if (!validEmail(email)) {
        errorMessages.textContent = 'Incorrect email format';
        return;
    }
    
    if (!validPassword(password)) {
        errorMessages.textContent = 'The password must be at least from 8 characters, 1 upeer letter, 1 lower letter, one number and 1 symbol.'
        return;
    }

    if (errors) {
        return;
    }
    
    form.reset();
});

errorMessages.style.color = 'tomato';

function validEmail(email) {
    const emailTemplate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailTemplate.test(email);
}

function validPassword(password) {
    const passwordTemplate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordTemplate.test(password);
}