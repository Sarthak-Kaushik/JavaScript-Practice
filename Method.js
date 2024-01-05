let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach(function printVal(val, ind, array)      // forEach is a method
// {
//     console.log(val, ind, array);                   // Used as a normal function
// });

arr.forEach((val) =>                                   // used as an arrow function
{
    console.log(val);
});