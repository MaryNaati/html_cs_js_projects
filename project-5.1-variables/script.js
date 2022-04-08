/* a. Store your name in a variable */
var fullName = "Mary Na'ati Takai";

/* b. Store your birth year in a variable. */
const birthDate = new Date(1990, 11, 27);

/* c. Store a future year in a variable.*/
var futureDate = new Date(2040, 02, 28);

/* d. Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.*/
let age = futureDate - birthDate 

/* e. Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.*/
console.log ("age: "+age)

var diff = futureDate.getTime() - birthDate.getTime();   
    
var daydiff = diff / (1000 * 60 * 60 * 24 * 365); 

console.log ("daydiff: "+daydiff)

let message = "I will be either " + Math.floor(daydiff) + " or " + Math.ceil(daydiff) + " on " + futureDate;

console.log (message)
