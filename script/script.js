// 1
let currentDate = new Date;
let indexCurrent = currentDate.getUTCDay();
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница', 'Суббота', 'Воскресенье'];


week.forEach(function(item, i){
  let list = document.createElement('div');
 
    list.innerHTML =  `
      <ul>
        <li>${item}</li>
     </ul>
  `;

  document.body.insertAdjacentElement('beforeend', list);

  if(item === 'Суббота' || item === 'Воскресенье') {
    list.style.fontStyle = "italic";
  }
  if(i  ===  indexCurrent + 6) {
    list.style.fontWeight = "bold";

  };
});





