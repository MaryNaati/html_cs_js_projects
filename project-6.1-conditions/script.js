/* Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.*/

function greaterNum (number1, number2) {
    if (number1 < number2){
        return number2;
    }else{
        return number1;
    }
}


/*Call that function 2 times with different number pairs, 
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").*/

let num1 = 19;
let num2 = 90;

let answer = greaterNum(num1,num2);
let text = "The greater number of " + num1 +" and " + num2 + " is " + answer + "."

console.log(text)

let num3 = 27
let num4 = 11

answer = greaterNum(num3,num4)
let message = "The greater number of " + num3 + " and " + num4 + " is " + answer + "."

console.log(message)