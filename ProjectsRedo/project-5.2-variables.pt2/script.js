//Store your current age into a variable.
var currentAge = 31

//Store a maximum age into a variable.
var maxAge = 115

//Store an estimated amount of meals per day (as a number).
var mealsEaten = 5

//Calculate the difference between max age and current age.
let ageDifference = maxAge - currentAge

//How many meals do I eat in a year?
let totalYear = 365 

//Calculate how many meals would you eat total for the rest of your life.
let totalMeals = mealsEaten * totalYear * ageDifference

//Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
console.log("You will need " + totalMeals + " to last you until the ripe old age of " + maxAge + ".")