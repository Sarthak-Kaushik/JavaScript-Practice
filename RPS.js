let userScore = 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");

// Here we are storing the details in an array because there is no way we can generate a random string in JS.
// So we generate a random whole number between 0-2 and use it as index for the array to call the choice of Computer.
// We use math.random() function here which generates 0-1, but we * 3 to generate 0-2 numbers and we make it a 
// whole number so that we will have a choice for the array using math.floor()
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // Rock, Paper, Scissors
    const randomIndex = Math.floor(Math.random() * 3);

};

const playGame = (userChoice) => {
    console.log("User's Choice will be, ", userChoice);
    // Generate Computer's Choice  --> Modular Programming
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);

    })

})