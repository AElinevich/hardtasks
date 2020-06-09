let lang = prompt('What is your language(en/ru)?');
let EngDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let RuDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// Task 1(а)
if (lang === 'ru') {
    console.log(RuDays);
} else if (lang === 'en') {
    console.log(EngDays);
} 

// Task 1(b)
switch (lang) {
    case 'ru':
    console.log(RuDays);
    break;
    case 'en':
    console.log(EngDays);   
    break;
} 

// Task 1(c)
let allLanguages = [
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

];
let result = 
    (lang === 'en') ? console.log(allLanguages[0]) :
    (lang === 'ru') ? console.log(allLanguages[1]) :
    console.log('Wrong answer');

// Task 2
let namePerson = prompt('Как тебя зовут?', '');

let message = 
    (namePerson === 'Артем') ? console.log('Директор') : 
    (namePerson === 'Максим') ?  console.log('Преподаватель') :
    console.log('Студент');
