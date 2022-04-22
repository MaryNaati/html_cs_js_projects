//Write a function named greaterNum that:
//takes 2 arguments, both numbers.
//returns whichever number is the greater (higher) number.

function greaterNum(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

/*Call that function 2 times with different number pairs, 
and log the output to make sure it works
 (e.g. "The greater number of 5 and 10 is 10.").*/

let num1 = 19
let num2 = 90

let highNum = greaterNum(num1, num2)


console.log("The greater number of " + num1 + " and " + num2 + " is " + highNum + ".")

num1 = 23
num2 = 27

console.log("The greater number of " + num1 + " and " + num2 + " is " + highNum + ".")
