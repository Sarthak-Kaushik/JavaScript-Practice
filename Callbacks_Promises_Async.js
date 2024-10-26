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


// let asyncFunc1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("Success for resolve 1");
//         }, 4000);
//     });
// };

// let asyncFunc2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2");
//             resolve("Success for resolve 2");
//         }, 4000);
//     });
// };
// console.log("Fetching Data 1...");
// let result = asyncFunc1();
// result.then((res) => {
//     console.log(res);
//     console.log("Fetching Data 2...");
//     let result2 = asyncFunc2();
//     result2.then((res) => {
//         console.log(res);
//     });
// });

                                                    // OR

// console.log("Fetching Data 1...");
// asyncFunc1().then((res) => {
//     setTimeout(() => {
//         console.log("Fetching Data 2...");
//         asyncFunc2().then((res) => {});
//     }, 1000);
// });


                                                    // using CHAINING THEN & CATCH method with getData() EXAMMPLE.


// let getData = (dataId) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data :", dataId);
//             resolve("Success");
//         }, 2000);
//     });
// };

// getData(10)                                     // calling getData(10).
// .then(() => {                                   // if getdata(10) is successfully executed, then
//     return getData(20);                         // call getData(20) and return whatever happens i.e, if it is successful then,
// })                                              // execute the next "THEN" and return getData(30) IF failed then return error.
// .then(() => {                                   // if getData(20) is successfully executed, then
//     return getData(30);                         // call getData(30) and return whatever happens i.e., if it is successful then,
// })                                              // execute the next "THEN" and return getData(40) IF failed then return error.
// .then(() => {                                   // if getData(30) is successfully executed, then
//     return getData(40);                         // call getData(40) and return whatever happens i.e., if it is successful then,
// })                                              // execute the next "THEN" and return getData(40) IF failed then return error.
// .then((res) => {
//     console.log(res);
// });


                                                    // ASYNC AWAIT with getData() Example


let getData = (dataId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data :", dataId);
            resolve("Success");
        }, 2000);
    });
};

// One way of Using Async - Await is....
async function getAllData() {
    console.log("Fetching data 1...");
    await getData(10);
    console.log("Fetching data 2...");
    await getData(20);
    console.log("Fetching data 3...");
    await getData(30);
    console.log("Fetching data 4...");
    await getData(40);
}

// getAllData();

// Another way of Using Aysnc - Await is....

(async function () {
    console.log("Fetching data 1...");
    await getData(10);
    console.log("Fetching data 2...");
    await getData(20);
    console.log("Fetching data 3...");
    await getData(30);
    console.log("Fetching data 4...");
    await getData(40);
})();

// This is called IIFE - Immediately-Invoked Function Expression. Here the async function needs no calling. 
// The function will be immediately invoked by its own and will be executed here only.
// Only downfall of this method is that this code cannot be recalled again and will have to manually copy the code if needed anywhere else.


// We use Async - Await instead of chaining a Promise or callback hell in most of the scenarios in real life.
// In real life the code is very big and complex, Promise Chaining and Callbacks hell will make it even more complex than it needs to be.