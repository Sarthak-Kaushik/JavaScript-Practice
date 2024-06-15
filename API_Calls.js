const URL = "https://cat-fact.herokuapp.com/facts";

                                                    // Using Promise
//let api = fetch(URL);
// console.log(api);

                                                    // using Async - Await Function

let getFacts = async () => {
    console.log("Fetching Data...");
    let response = await fetch(URL);
    console.log(response);                         // response is in JSON format
};

// getFacts();