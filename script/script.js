// 1 a 
let day = new Date();
let n = day.getDay();
let daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  let monthOfYear = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',

  ]
let month = day.getMonth();



let decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];
function decOfNum(number, titles)
{
    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}
let second = decOfNum(day.getSeconds(), ['секунда', 'секунды', 'секунд']);
let minutes = decOfNum(day.getMinutes(), ['минута', 'минуты', 'минут']);
let hour = decOfNum(day.getHours(), ['час', 'часа', 'часов']);

let result = 'Сегодня, ' + daysOfWeek[n] + ', ' + day.getDate() + ' ' + monthOfYear[month] + ' ' + day.getFullYear() + ' года, ' + day.getHours() + ' ' + hour + ' ' + day.getMinutes() + ' ' + minutes + ' ' + day.getSeconds() +  ' ' + second;

let timerId = setInterval(() => console.log(result), 1000);


// 1 b 
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
console.log(date + ' - ' + time);

