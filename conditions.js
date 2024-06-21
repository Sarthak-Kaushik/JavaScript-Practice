// conditional statements - if, else if, else

// IF 
let age = 16;
// if(age > 18)
// {
//     console.log("You are eligible to vote");
// }

// if(age < 18)
// {
//     console.log("You are not eligible to vote");
// }

// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// }

// if(mode === "light") {
//     color = "white";
// }

// console.log(color);

// IF ELSE

// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }

// console.log(color);

// // odd or even example

// let num = 11;
// if (num % 2 === 0) {
//     console.log("Number is EVEN");
// } else {
//     console.log("Number is ODD");
// }

// ELSE IF  - 3 or more conditions
if(age < 18) {
    console.log("You are a Junior");
}
else if (age >= 18 && age < 60) {
    console.log("You are a middle aged adult");
}
else {
    console.log("You are a Senior Citizen");
}
