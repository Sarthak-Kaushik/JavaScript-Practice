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


// let div = document.querySelector("div");
// console.dir(div.innerHTML);

// let elements4 = d/ocument.querySelector("h3");
// console.dir(elements4);
// elements4.innerHTML = "<i>I am a new heading</i>";



// 4. textContent

// let elements5 = document.querySelector("h1");
// console.dir(elements5.textContent);


//5. Attribute

// let parah = document.querySelector("p");
// console.log(parah.getAttribute("id"));
// console.log(parah.setAttribute("id", "newId"))
// console.log(parah);


//6. STYLE

let div = document.querySelector("div");
div.style.backgroundColor = "red";
div.style.color = "yellow";
div.style.fontSize = "20px";

//7. INSERT ELEMENTS   

let newBtn = document.createElement("button");
newBtn.innerText = "Click me please!";
newBtn.style.marginBottom = "10px";
newBtn.style.backgroundColor = "Blue";
newBtn.style.color = "white";
newBtn.style.width = "100px";
newBtn.style.height = "50px";

let div2 = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
   div.after(newBtn);


//8. REMOVE ELEMENTS