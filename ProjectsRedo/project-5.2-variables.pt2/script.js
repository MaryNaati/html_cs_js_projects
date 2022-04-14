//Store your name in a variable
var fullName = "Mary Na'ati Takai"

//Store your birth year in a variable.
const birthYear = 1990

//Store a future year in a variable.
const futureYear = 2040

//Calculate your 2 possible ages for that year based on the stored values.
//For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.

const futureAge1 = futureYear - birthYear
const futureAge2 = (futureYear - birthYear) - 1;

//Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
console.log("I will be either " + futureAge2 + " or " + futureAge1 + " in " + futureYear)