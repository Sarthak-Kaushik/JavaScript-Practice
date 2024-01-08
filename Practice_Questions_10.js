// Q1) Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to 
//this using JS.


let h2 = document.querySelector("h2");
h2.innerText += " from Apna College Students";
console.log(h2);








// Q2) Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
console.log(divs);
divs.forEach((div, ind) => {
    div.innerText = `This is the box number ${ind + 1}`;
});
