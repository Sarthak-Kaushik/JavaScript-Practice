const URL = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector("#button1");
const facts = document.querySelector("#para");

                                                    // Using Promise
//let api = fetch(URL);
// console.log(api);

                                                    // using Async - Await Function

let getFacts = async () => {
    console.log("Fetching Data...");
    let response = await fetch(URL);
    console.log(response);                         // response is in JSON format
    let data = await response.json();
    facts.innerHTML = data[4].text;
};

addEventListener("click", getFacts);

// getFacts();