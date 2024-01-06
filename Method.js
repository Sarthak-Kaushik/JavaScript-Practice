let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forEach() METHOD. It runs the loop for each element in the array and takes a function as an argument.

// arr.forEach(function printVal(val, ind, array)      // forEach is a method
// {
//     console.log(val, ind, array);                   // Used as a normal function
// });

// arr.forEach((val) =>                                   // used as an arrow function
// {
//     console.log(val*val);
// });
// console.log(arr);







// MAP() METHOD. It runs the loop for each element in the array and returns a new array with the values 
//returned by the function.

// let newArr = arr.map((val) =>
// {
//     return val*val;
// })
// console.log(newArr);







// FILTER() METHOD. It runs the loop for each element in the array and returns a new array with the 
//filtered/conditioned values returned by the function.

// let evenArr = arr.filter((val, ind, arr) =>
// {
//     return val%2===0;
// })
// console.log(evenArr);





// REDUCE() METHOD. It runs the loop for each element in the array. Performs some operations and reduces the
// array to a single value. It returns the single value.

// let sum = arr.reduce((acc, curVal) => 
// {
//     return acc + curVal;
// });
// console.log(sum);   

// to find the biggest number in the given array.
let num = [1, 10, 5, 8, 9, 6, 7];
let max = num.reduce((res, cur) =>
{
    return res > cur ? res : cur;
});
console.log(max);
