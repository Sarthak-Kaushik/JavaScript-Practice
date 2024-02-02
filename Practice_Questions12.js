//Q1 Create a toggle button taha changes the screen  to dark - mode when clicked and light - mode when clicked again.
let curMode = document.querySelector("#mode");
let body = document.querySelector("body");
let mode = "light";
curMode.addEventListener("click", () => {
    if(mode === "light")
    {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        curMode.innerHTML = "Set Dark Mode";
        mode = "dark";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        curMode.innerHTML = "Set Light Mode";
        mode = "light";
    }


    console.dir(mode);
});