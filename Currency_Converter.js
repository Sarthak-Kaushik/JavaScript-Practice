// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// for (code in countryList) {
//     console.log(code, countryList[code]);      // here code is the key and countryList[code] is the value like - 0 : apple, 1 : banana.
// }

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        } else if(select.name === "to" && currCode === "INR") {
            newOption.selected = true;
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);                                      // Target is the select element that triggered the event.
    });                                                              // evt.target.value gives the value of the selected option.
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

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
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

    let finalAmount = Math.round(amtVal * data);
    msg.innerHTML = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    // console.log(finalAmount);
});
