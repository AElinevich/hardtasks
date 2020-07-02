

const wrapper = document.querySelector('.wrapper') 
const randomColor = document.querySelector('.random-color')
const btn = document.querySelector('.btn')


function generateColor() {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = color;
    randomColor.textContent = color;
    return color 
  }


btn.addEventListener('click', generateColor)