
let inputA = document.querySelector("#a");
const inputB = document.querySelector("#b");
const btnSum = document.querySelector("#sum");
let btnMult = document.querySelector("#mult");
let result = document.querySelector("#res");


const calculator = {
   sum: function(){
   let resultSum = +inputA.value + +inputB.value;
    return result.value = resultSum 
  },

  mult: function (){
    let resultMult =+inputA.value * +inputB.value;
    return result.value = resultMult 
  }
}

btnSum.addEventListener('click', function (){
  calculator.sum();
})

btnMult.addEventListener('click', function (){
  calculator.mult();

  
})