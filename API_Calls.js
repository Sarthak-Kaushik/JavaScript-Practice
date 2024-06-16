// const URL = "https://cat-fact.herokuapp.com/facts";
// const btn = document.querySelector("#button1");
// const facts = document.querySelector("#para");

                                                    // Using Promise
//let api = fetch(URL);
// console.log(api);

                                                    // using Async - Await Function

// let getFacts = async () => {
//     console.log("Fetching Data...");
//     let response = await fetch(URL);
//     console.log(response);                         // response is in JSON format
//     let data = await response.json();
//     let x = Math.floor(Math.random() * 5);
//     facts.innerHTML = data[x].text;                // data[4] is the 5th element in the JSON data
// };                                                 // we used through the API.


// using Promise - Chaining Then & Catch method

// function getFacts() { 
//     fetch(URL)
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         let x = Math.floor(Math.random() * 5);
//         facts.innerHTML = data[x].text;
//     })
// }

// addEventListener("click", getFacts);

// getFacts();