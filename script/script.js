// 1
let arr = ['2000', '65000', '9593952', '42383859','2575849', '9383', '6423', '4354'];

for (let i = 0; i < arr.length; i++) {
   if (arr[i][0] == 2 || arr[i][0] == 4) {
     console.log(arr[i])
   };
};

// 2

   let x = 100;
   
   searcNumber:
   for (let i = 2; i <= x; i++) {
       for (let k = 2; k < i; k++) {
           if(i % k == 0) continue searcNumber;
       }
       console.log(i + '-' + 'Делители этого числа: ' + i + ' и 1')
   }
