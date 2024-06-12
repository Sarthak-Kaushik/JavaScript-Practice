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

function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("Data =", dataId);
        getNextData();
    }, 2000);
}

getData(10, () => {
    getData(20, () => {
        getData(30, () => {
            getData(40);
        });
    });
});