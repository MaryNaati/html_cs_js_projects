/*Store your current age into a variable.*/
var age = "31";

/*Store a maximum age into a variable.*/
var maxAge = "115";

/*Store an estimated amount per day (as a number).*/
var mealsADay = 3;

/*Calculate how many you would eat total for the rest of your life.*/
let totalMeals = mealsADay * 365 * maxAge;

/*Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".*/
let message = "I will need " + totalMeals + " to last me until the ripe old age of " + maxAge + ". " 
console.log (message)
