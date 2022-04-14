/* write a function named assignGrade that*/
/* takes 1 argument, a number score*/


function assignGrade(score){
    let grade = ""
    if(score >= 90) {
        grade = "A"
    }else if(score <= 89 && score >= 80){
        grade = "B"
    }else if(score <= 79 && score >= 70) {
        grade = "C"
    } else if(score <= 69 && score >= 60) {
        grade = "D"
    }else(score <= 59) {
        grade = "F"
    }

    return grade
}

/* let yourGrade= assignGrade(95);

document.write("Your final grade is" + yourGrade);*/

let score = 99

let grade = assignGrade(score); 
let text = "Your final grade is " + yourGrade + "!"
console.log(text)


score = 88

grade = assignGrade(score1);

text = "Your final grade is " + yourGrade + "!"
console.log(text)


score = 77

grade = assignGrade(score1);

text = "Your final grade is " + yourGrade + "!"
console.log(text)


score = 66

grade = assignGrade(score1);

text = "Your final grade is " + yourGrade + "!"
console.log(text);


score = 55

grade = assignGrade(score1);

text = "Your final grade is " + yourGrade + "!"
console.log(text)