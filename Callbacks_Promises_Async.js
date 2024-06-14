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


// function sum(a, b)
// {
//     console.log(a+b);
// }
 
// function sub(a, b)
// {
//     console.log(a-b);
// }

// function mul(a, b)
// {
//     console.log(a*b);

// }

// function div(a, b)
// {
//     console.log(a/b);

// }

// function calculator(a, b, sumcallback){
//     sumcallback(a, b);
// }

// calculator(5, 6, sum);
// calculator(5, 6, sub);
// calculator(5, 6, mul);
// calculator(5, 6, div);

// This is callbacks, its use is that we can pass a function as an argument to another function.
// This is used in asyncronous programming. We can pass multiple functions as arguments to another function.
// An example is written above. We can pass multiple functions as arguments to the calculator function.


                                                          // nesting


// for (let i=0; i<5; i++){
//     let str = "";
//     for (let j = 0; j <5; j++){
//         str += j;
//     }
//     console.log(i, str);
// }


                                                          // Callback Hell



// function getData(dataId){
//     setTimeout(() => {
//         console.log("data =", dataId);
//     }, 2000);
// }

//getData(3, getData(2, getData(1)));  // Here the data will be shown instantly staqcked one after the other after the intial 2 sec interval.

// Here the callback hell for executing the data sets after 2 secx interval each will be - 

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("Data =", dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(10, () => {
//     console.log("Getting data set 2...");
//     getData(20, () => {
//         console.log("Getting data set 3...");
//         getData(30, () => {
//             console.log("Getting data set 4...");
//             getData(40);
//         });
//     });
// });


                                                          // Promises


// function getData(dataId, getNextData){                  // getData function is created
//     return new Promise((resolve, reject) => {    // Creates a function PROMISE 
//         setTimeout(() => {
//             console.log("Data :", dataId);
//             resolve("Success");                         // If RESOLVE occurs
//             reject("Error has occured");                // If REJECT occurs
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);                                       // 5 Second Delay
//     });
// }
// let result = new getData(10);                          // Creating an object "RESULT" and storing the value of getData() in it.

// let result = 0;
// for(let i = 10; i<=40; i+=10){
//     result = new getData(i);
// }


                                                       // using THEN and CATCH


// let getData = () => {                                  // Creates getData function using ARROW function
//     return new Promise((resolve, reject) => {          // returns PROMISE function
//         console.log("Data is received");
//         resolve("Success");                            // if RESOLVE occures
//         reject("Error has occured");                   // if REJECT occures
//     });
// }

// let result = getData();                                // Callback to getData() function
// result.then((res) => {                                 // if RESOLVE occures
//     console.log("Resolve is fullfilled.", res);
// });

// result.catch((err) => {                                // else REJECT occures
//     console.log("Reject is fullfilled.", err);       
// });


                                                    // THEN & CATCH Chaining


