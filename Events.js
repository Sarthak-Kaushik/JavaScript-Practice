let btn1 = document.getElementById("btn1");
// btn1.onclick = () => {
//     console.log("Button 1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a); //26
// }

btn1.addEventListener("click", () => {
    console.log("Event 1 was fired");
});

btn1.addEventListener("click", () => {
    console.log("Event 2 was fired");
});

let box = document.querySelector("#div1");
box.onmouseover = () => {
    console.log("Box is being hovered over");
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = "dodgerblue";
    box.style.color = "black";
    box.style.border = "5px solid black";
    box.style.marginTop = "10px";
}

box.onmouseout = () => {
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = "black";
    box.style.color = "white";
    box.style.border = "5px solid dodgerblue";
    box.style.marginTop = "10px";
}