//Write a function named calculateDogAge that:
//takes 1 argument: your puppy's age. ONLY 1 ARGUMENT?
function calculateDogAge (pupsAge) {
    const dogYears = 7*pupsAge;
    
    console.log("Your doggie is " + dogYears + " years old in dog years!")
}

//calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//outputs the result to the screen like so: 
//"Your doggie is NN years old in dog years!"
//Call the function three times with different sets of values.

calculateDogAge(3)
calculateDogAge(7)
calculateDogAge(9)

//Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
