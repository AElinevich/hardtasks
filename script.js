function greeting(){
    let date = new Date();
    console.log(date);
    let newYear = new Date('01 01 2021');
    console.log(newYear);
    console.log(newYear - date);
    msPerDay = 24*60*60*1000;
   
    daysLeft = Math.round((newYear.getTime() - date.getTime())/msPerDay);
    dayname = ""
    ds = ""+daysLeft;
    dd=parseInt(ds.substr(ds.length-1))
console.log(ds);


let hours = date.getHours();
let currentTimeofDay

console.log(hours);
if(hours > 4 && hours < 11){
    currentTimeofDay = 'Доброе утро';
} if(hours > 11 && hours < 15){
    currentTimeofDay = 'Добрый день';
} 
if(hours > 11 && hours < 23){
currentTimeofDay = 'Добрый вечер';
} if(hours > 23 && hours < 4){
console.log('Доброй ночи');
} 



let day = date.getDay();

let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница', 'Суббота']
let currentDay
daysOfWeek.forEach(function(item, i){
    if (i === day) {
        currentDay = item;
    }
})

let time = date.getHours() + ':'  + date.getMinutes() + ':' + date.getSeconds() + ' PM';


    document.body.innerHTML = `
    <p>${currentTimeofDay}</p>
    <p>Сегодня : ${currentDay}</p>
    <p>Текущее время: ${time}</p>
    <p>До нового года осталось ${ds} дней</p>
    `




}
greeting()

