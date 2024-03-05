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
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];

};

const drawGame = () => {
    console.log("Draw Game");
};
const playGame = (userChoice) => {
    console.log("User's Choice =",userChoice);
    // Generate Computer's Choice  --> Modular Programming
    const compChoice = genCompChoice();
    console.log("Computer's Choice =",compChoice);

    const showWinner = (userWin) => {
    }

    if(userChoice === compChoice)
    {
        // Draw Game
        drawGame();
    } else {                             // If The condition is not Draw, then we have to check who wins
        let userWin = true;
        if(userChoice === "rock")
        {
            // Two options for computer now => Scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }

        else if(userChoice === "paper")
        {
            // Two options for computer now => Rock, Scissors
            userWin = compChoice === "rock" ? true : false;
        }

        else
        {
            // Two options for computer now => Rock, Paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })

})