// console.log("Hello everyone!");
// function hello()
// {
//     // console.log("Hello I am Sarthak");
// }

// setTimeout(() => {
//     console.log("Hello I am Sarthak!");    // Timeout
// }, 3000);

// console.log("Hello everyone again!");

// This is called Asyncronous programming. The code is not executed in the order it is written.
// The code is executed in the order of the time it takes to execute the code.


function sum(a, b)
{
    console.log(a+b);
}

function sub(a, b)
{
    console.log(a-b);
}

function mul(a, b)
{
    console.log(a*b);

}

function div(a, b)
{
    console.log(a/b);

}

function calculator(a, b, sumcallback){
    sumcallback(a, b);
}

calculator(5, 6, sum);
calculator(5, 6, sub);
calculator(5, 6, mul);
calculator(5, 6, div);

// This is callbacks, its use is that we can pass a function as an argument to another function.
// This is used in asyncronous programming. We can pass multiple functions as arguments to another function.
// An example is written above. We can pass multiple functions as arguments to the calculator function.


