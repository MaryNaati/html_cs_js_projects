//Write a for loop that will iterate from 0 to 20. 
for (let i = 0; i <= 20; ++i) {
    
    // 0 is not even or odd!
    if ( i === 0 ) {continue}

//For each iteration, it will check if the current number is even or odd,
//How do we know a number is even?
    //If the number is divisable by 2 then it's even

    if (i % 2 == 0) {
        console.log(i + " is even.")
    } 
    else {
        console.log(i + "is odd.")
    }

//and report that to the screen (e.g. "2 is even").

}