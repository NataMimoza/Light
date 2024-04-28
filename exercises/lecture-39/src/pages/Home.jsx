import React from 'react';
import Navigation from '../components/Navigation';

function Home() {
    return (
    <>
        <Navigation />
        <h1>Привіт, друже!</h1>
        <p className='greeting'>Ми раді бачити тебе в нашій онлайн-книгарні. Це світ, де мрії стають реальністю, а сторінки книг ведуть до неймовірних пригод.
У нас ви знайдете книги на будь-який смак: від захоплюючих романів до цікавих наукових видань, від бестселерів до рідкісних антикварних книг.
Ми пишаємося тим, що можемо запропонувати нашим читачам не лише широкий вибір книг, але й високий рівень обслуговування. Завжди раді допомогти вам з вибором книги, відповісти на ваші запитання та зробити ваш досвід покупок максимально комфортним!</p>    
    </>
  );
}

export default Home;