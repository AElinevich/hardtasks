let num = 266219;
let result = 1;
let numLength = num.toString().length;


for (i = 0; i < numLength; i++) {
    let numTrunc = (Math.trunc(num / 10));
    let numEnd = num - (numTrunc * 10);
    num = numTrunc;
    result *= numEnd;
}

console.log(result);

let resultPow = result ** 3;

console.log(resultPow);

let resultStr = resultPow.toString();

let partOfResult = Number(resultStr[0] + resultStr[1])

console.log(partOfResult);
