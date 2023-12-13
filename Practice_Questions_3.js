// Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
let number = prompt("Enter a number to check if it is a multiple of 5 or not: ");
if (number % 5 == 0) {
    alert ("The number " + number + " is a multiple of 5.");
}
else {
    alert("The number " + number + " is not a multiple of 5.");
}