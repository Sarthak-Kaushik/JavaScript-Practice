//Q1) Create an array to store companies -> Bloomberg, Microsoft, Uber, Google, IBM, Netflix
//a. Remove the first and last company from the array.
//b. Remove uber and add ola in its place.
//c. Add amazon at the end and replace IBM with intel.
//d. Add facebook at the start of the array and replace microsoft with jpmc.

let companies = prompt("Enter the name of the companies accompanied with a comma: ").split(",");


// a. Remove the first and last company from the array.
companies.shift();
companies.pop();
console.log(companies);

// b. Remove uber and add ola in its place.
let val = companies.indexOf("Uber")*-1;
console.log(val);
companies.splice(1, 1, "Ola");
console.log(companies);

// c. Add amazon at the end and replace IBM with intel.

companies.push("Amazon");
console.log(companies);
companies.splice(3, 1, "Intel");
console.log(companies);

// d. Add facebook at the start of the array and replace microsoft with jpmc.

companies.unshift("Facebook");
console.log(companies); 
companies.splice(1, 1, "JPMC");
console.log(companies);