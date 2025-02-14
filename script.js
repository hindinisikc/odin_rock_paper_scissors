let humanScore = 0;
let computerScore = 0;



function getHumanChoice() {
    const playerChoice = prompt("Rock... Paper.... or Scissors...?").toLowerCase();
    return playerChoice;
}

// alert(getHumanChoice());



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; // Array of choices
    const randomIndex = Math.floor(Math.random() * choices.length); // Generate a random index (0, 1, or 2)
    return choices[randomIndex]; // Return the random choice
}

// alert(getComputerChoice());   


function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") 
    ) {
        humanScore++;
        return `You win! ${humanSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lost! ${computerSelection} beats ${humanSelection}`;
    }
}

alert(playRound(getHumanChoice(), getComputerChoice()));




// function playGame(humanChoice, computerChoice) {
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         alert()
//     }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();