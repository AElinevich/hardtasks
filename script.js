let btnlogin =  document.querySelector('.login');
let authorization = document.querySelector('.authorization');
let info = document.querySelector('.info');

let userInfo = [];
if(localStorage.getItem('user')) {
    userInfo = JSON.parse(localStorage.getItem('user'));
    createInfo()
}
function render() {
    let name  = prompt("Введи имя и фамилию");
    let firstName = name.trim().split(" ")[0];
    let lastName = name.trim().split(" ")[1];
    let login  = prompt("А теперь логин");
    let password = prompt("Ну и пароль тогда уже");
    let date = new Date();
    let month = date.getMonth();
    let monthOfYear = ['Января', 'Ферваля', 'Мара', 'Апреля', 'Мая','Июня', 'Июля', 'Августа', 'Сентября', 'Октября','Ноября','Декабря'];
    let currentMonth
    monthOfYear.forEach(function(item, i){
        if (i === month) {
            currentMonth = item;
        }
    })
    let regDate = date.getDate() + ' '  + currentMonth + ' ' + date.getFullYear() + ' г., ' + date.getHours() + ':'  + date.getMinutes() + ':' + date.getSeconds();
    let newUserInfo = 
    {
        firstName : firstName,
        lastName : lastName,
        login : login,
        password : password,
        regDate : regDate,
    }     
    userInfo.push(newUserInfo);
   
    
}
function createInfo() {
    userInfo.forEach((item)=> {
        let list = document.createElement('li');
        list.innerHTML = `
        <br>
       Имя: ${item.firstName}, фамилия: ${item.lastName}, зарегистрирован:  ${item.regDate}
       <button class="remove">Удалить</button>
       `
   info.append(list);
   let btnRemove = list.querySelector('.remove');
   
   btnRemove.addEventListener('click', () =>{
  
        let parent = list.parentNode;
        userInfo.splice(userInfo.indexOf(item), 1)
       parent.removeChild(list);
       localStorage.setItem('user', JSON.stringify(userInfo)); 
       })
    })   
  }
btnlogin.addEventListener('click', ()=> {
    render()
    createInfo()
    localStorage.setItem('user', JSON.stringify(userInfo)); 
 
})

function showAuthorized() {
    let loginAut  = prompt("Введи логин");
    let passwordAut = prompt("Введи пароль");
    for(let key of userInfo) {
        if(loginAut === key.login && passwordAut === key.password)
        {alert ('Привет, ' + `${loginAut}`)
        } else {
            alert('Пользователь не найден')
        }
        }
    }

authorization.addEventListener('click', showAuthorized);



