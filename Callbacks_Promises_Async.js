 // function hello() {
 //     console.log('Hello');
 // }
 // setTimeout(hello, 4000);



// console.log("One");
// console.log("Two");
// setTimeout(() => {
//     console.log("Hello");
// }, 4000);    // Timeout is in milliseconds;
// console.log("Three");
// console.log("Four");


// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(10, 5, sum);      // 15       // SYNCHHROUNOUS CALLBACKS

// const hello = () => {
//     console.log("Hello World");
// }

// setTimeout(hello, 3000);

// console.log("Kaise hai aap sab");          // ASYNCHRONOUS CALLBACKS

// CALLBACK HELL

// function getData(dataId, getNextData) {    // CALLBACK HELL
//     setTimeout(() => {
//         console.log("Data:", dataId);
//         if (getNextData)  {
//             getNextData();
//         }
//     }, 2000);
// }
// getData(10, () => {
//     getData(20, () => {
//         getData(30, () => {
//             getData(40);
//         });
//     });
// });


//  Promises

 let promise = new Promise((resolve, reject) => {
    console.log("This is a promise");
    resolve(123);
   // reject("Error has occured");
 });
 console.log(promise);