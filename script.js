
let inputA = document.querySelector("#a");
const inputB = document.querySelector("#b");
const btnSum = document.querySelector("#sum");
let btnMult = document.querySelector("#mult");
let result = document.querySelector("#res");


const calculator = {
   sum: function(){
   let resultSum = +inputA.value + +inputB.value;
    return resultSum
  },

  mult: function (){
    return +inputA.value * +inputB.value;
  },
  show: function(){
  if(this.sum) {
    console.log(this.sum());
      result.value = this.sum();
     
  }
  else if(this.mult){
    console.log(mult);
    result.value = this.mult();
    
  }
  
  return result.value;
}
  
}

btnSum.addEventListener('click', function (){
  calculator.sum();
  calculator.show();
})

btnMult.addEventListener('click', function (){
  calculator.mult();
  calculator.show();
  
})