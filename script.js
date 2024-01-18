let num1 = prompt("first number");
let num2 = prompt("second number");
let smallerNumber = getSmallerNumber(num1, num2);

function getSmallerNumber(num1, num2){
    return Math.min(num2 , num1);
}
alert("the smaller number is " + smallerNumber);

let num = prompt("give a number");
let numFactorial = countFactorial(num);




function countFactorial(num){
    if (num < 0){
        alert("it cannot be factorialized");
    }
    else if (num === 0 ){
        return 1;
    }
    else {
        return (num * countFactorial(num-1));
    }
}

alert("the factorial is  "+ numFactorial);



function createNumber(a, b, c) {
    var result = 0;
    result += a * 100;
    result += b * 10;
    result += c;
    return result;
}



function getRectangleArea(width, length) {
  return width * length;

  if ((width = NaN)) {
    return length * length;
  } else if ((length = NaN)) {
    return width * width;
  }
}




function isPerfect(num) {
    let sum = 0;
     
    for (let i = 1; i < num; i++) {
       if (num % i === 0) {
         sum += i;
       }
    }
     
    if (sum === num) {
       return true;
    } else {
       return false;
    }
   }

   

