let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0; // Track number of rounds

document.getElementById("rock").addEventListener("click", handleButtonClick);
document.getElementById("paper").addEventListener("click", handleButtonClick);
document.getElementById("scissors").addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
    if (roundsPlayed >= 5) return; // Stop if 5 rounds are played

    const humanSelection = event.target.id; // Get player's choice
    const computerSelection = getComputerChoice(); // Get computer's choice
    const result = playRound(humanSelection, computerSelection); // Determine winner

    roundsPlayed++; // Increment round counter
    updateScore(result); // Update score and display result

    if (roundsPlayed === 5) {
        setTimeout(endGame, 500); // Small delay before ending the game
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

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

function updateScore(result) {
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function endGame() {
    let finalMessage = "";

    if (humanScore > computerScore) {
        finalMessage = "Congratulations! You won the game!";
    } else if (humanScore < computerScore) {
        finalMessage = "Game over! The computer won.";
    } else {
        finalMessage = "It's a tie game!";
    }

    document.getElementById("result").textContent = finalMessage;

    // Disable buttons after game ends
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    // Show Restart button
    document.getElementById("restart").style.display = "block";
}

// Restart Game
document.getElementById("restart").addEventListener("click", function() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    
    document.getElementById("score").textContent = `Human: 0 | Computer: 0`;
    document.getElementById("result").textContent = "Choose Rock, Paper, or Scissors!";
    
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    
    this.style.display = "none"; // Hide restart button
});
