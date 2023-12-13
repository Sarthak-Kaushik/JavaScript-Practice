// Write a code which can give grades to students according to their scores : 90-100, A 70-89, B 60-69, C 50-59, D 0-49, F

let score = prompt("Enter your score: ");
if(score <= 100 && score > 90) {
    console.log("Your grade " + score + " is A");
}
else if(score <= 89 && score > 70) {
    console.log("Your grade " + score + " is B");
}
else if(score <= 69 && score > 60) {
    console.log("Your grade " + score + " is C");
}
else if(score <= 59 && score > 50) {
    console.log("Your grade " + score + " is D");
}
else if(score <= 49 && score >= 0) {
    console.log("Your grade " + score + " is F");
}
else {
    console.log("Invalid score");
}