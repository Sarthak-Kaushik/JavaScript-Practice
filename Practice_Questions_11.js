// Q1) Create a new button. Give it a text "Click Me", background color of red and text color of white.
//      Insert the button as the first element inside the body tag.

let bttn = document.createElement("button");
bttn.innerText = "Click Me!";
bttn.style.backgroundColor = "Red";
bttn.style.color = "White";
bttn.style.fontSize = "20px";
bttn.style.width = "100px";
bttn.style.height = "50px";
// let body = document.querySelector("body");
// body.insertBefore(bttn, body.firstChild);   

// OR

document.querySelector("body").prepend(bttn);

// Q2) Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element .
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.


let parah = document.querySelector("p");
parah.classList.add("newClass");