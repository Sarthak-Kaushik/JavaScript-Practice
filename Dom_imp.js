// let heading1 = document.getElementById("head1");  //h1
// console.dir(heading1);

// let headings = document.getElementsByClassName("heading");
// console.dir(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);


// let elements = document.querySelectorAll("p");
// console.dir(elements);

// let elements2 = document.querySelectorAll(".heading");
// console.dir(elements2);

// let elements3 = document.querySelector("body");
// console.dir(elements3);


// PROPERTIES OF DOM MANIPULATION


// 1. tagName
// console.log(elements3.tagName);


// 2. innerText 

// console.log(elements3.innerText);



// let div = document.querySelector("div");
// console.dir(div);
// console.log(div.innerText);


// 3. innerHTML


let div = document.querySelector("div");
console.dir(div.innerHTML);

let elements4 = document.querySelector("h3");
console.dir(elements4);
elements4.innerHTML = "<i>I am a new heading</i>";
