//Q1 Print all even numbers from 0 to 100

// for(let i = 0; i<=100; i++)
// {
//     if(i%2==0)
//     {
//         console.log("The number", i, "is even");
//     }
// }

// for(let  i = 0; i <= 100; i+=2)
// {
//     console.log("The number", i, "is even");
// }

//Q2 create a game where you start with any random game number. Ask the user to keep guessing the number until user enters the correct value.

// let num = 8;
// let userNum = prompt("Guess the number between 0 and 10: ");
// for(let i=0; i>=0; i++)
// {
//     if(userNum == num)
//     {
//         alert("You have guessed the number correctly")
//         break
//     }
//     else
//     {
//         userNum = prompt("Guess again: ");   
//     }
// }

// another way to do it

let gameNum  = 25;
let userNumb = prompt("Guess the number between 0 and 100: ");

while(userNumb != gameNum)
{
   userNumb = prompt("Guess again: ");
}
alert("You have guessed the number correctly");