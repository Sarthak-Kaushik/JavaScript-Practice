// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// for (code in countryList) {
//     console.log(code, countryList[code]);      // here code is the key and countryList[code] is the value like - 0 : apple, 1 : banana.
// }
window.onload = () => {                                   // Here the code will run even when the code is written before the
    updateExchangeRate();                                 // initialization of the function updateExchangeRate().
};

// we could have also done 
//window.onload = updateExchangeRate();                    // But this can run only when this code is written after the initialization 
                                                           // of the function updateExchangeRate().

// we can do 
// window.addEventListener("load", updateExchangeRate);      // Same as above.

// we can also do

// window.addEventListener("load", () => {                // This method will run before the initialization of the function updateExchangeRate().
//     updateExchangeRate();
// });

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");            // Here we are creating a new option element.
        newOption.innerText = currCode;                              // Here we are setting the inner text of the new option element.
        newOption.value = currCode;                                  // Here we are setting the value of the new option element.
        if(select.name === "from" && currCode === "USD") {           // Here we are setting the default values of the select elements.
            newOption.selected = true;
        } else if(select.name === "to" && currCode === "INR") {      // Here we are setting the default values of the select elements.
            newOption.selected = true;
        }
        select.append(newOption);                                    // Here we are appending the new options to the select element.
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);                                      // Target is the select element that triggered the event.
    });                                                              // evt.target.value gives the value of the selected option.
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal);    
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;                                         // whe have done this so that no value less tahn 1 or negative value is entered.
        amount.value = 1;
    }
    // console.log(amtVal);
    // console.log(fromCurr.value.toLowerCase(), toCurr.value.toLowerCase());
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
     let response = await fetch(URL);
     let result = await response.json();
    let data = result[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    // Here we are getting the data from the API and then calculating the amount in the required currency.
    // we did not used The "." operator between "fromCurr" and "toCurr" [] bracketrs because the currency code is in the form of string 
    // and we cannot use the "." operator on strings.
    //  console.log(data);
 
    let finalAmount = Math.round(amtVal * data);                                      // Here we are calculating the final amount.
    msg.innerHTML = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;   // Here we are setting the inner HTML of the msg element.
    // console.log(finalAmount);
}
const updateFlag = (element) => {
    // console.log(element.value);
    // console.log(element);
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", (evt) => {                      // Here evt is the event object.
    evt.preventDefault();                                     // This is done so that the page does not reload when the button is clicked.
    updateExchangeRate();                                     // This is done so that the exchange rate is updated when the button is clicked.
});