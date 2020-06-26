function getResult(x,y){
    let preResult = (x**y)
    .toString()
    .split("")
    .reduce(function(acc,item){
      return (+acc) + (+item);
  }, 0)
    return  preResult
  }
  
  console.log(getResult(4, 8));
 

