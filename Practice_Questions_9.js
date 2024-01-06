//Q1) For a given array of numbers, print the square of each value using forEach() method.

// let arr = prompt("Enter a list of numbers seperated by commas:").split("");
// arr.forEach((val, ind) => 
// {
//     console.log(`Square of ${val} at the index ${ind} is ${val*val}`);
// });




//Q2) WWe are given array of marks of students. Filter out marks of the students that scored 90.

// let marks = prompt("Enter the marks of students seperated by commas: ").split(",");
// let topper = marks.filter((val) =>
// {
//     return val>=90;
// })
// console.log(`the marks of the students more than 90 are ${topper}`);





//Q3) Take a number n as input from the user. Create an array of numbers fromm 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.



// let n = prompt("Enter a number to find Sum and Product of all till that number: ");
// let arr = [];
// for(let i =1; i <= n; i++)
// {
//     arr.push(i);
// }

// let sum = arr.reduce((res, cur)=>
// {
//     return res + cur;
// });
// console.log(`The sum of all numbers till ${n} is ${sum}`);

// let product = arr.reduce((res, cur) =>
// {
//     return res * cur;
// });
// console.log(`The product off all numbers till ${n} is ${product}`);