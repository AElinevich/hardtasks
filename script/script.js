
let currentDate = new Date;
let indexCurrent = currentDate.getUTCDay();
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница', 'Суббота', 'Воскресенье'];
console.log(week);
console.log(indexCurrent);

week.forEach(function(item, i){
  let list = document.createElement('div');
 console.log();
    list.innerHTML =  `
      <ul>
        <li>${item}</li>
     </ul>
  `;

document.body.insertAdjacentElement('beforeend', list);
// list.style.listStyleType = "none";
  if(item === 'Суббота' || item === 'Воскресенье') {
    list.style.fontStyle = "italic";
  }
  if(i + 1  ===  indexCurrent || i - 6 === indexCurrent) {
    list.style.fontWeight = "bold";

  };
});





