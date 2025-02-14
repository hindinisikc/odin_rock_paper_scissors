function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; // Array of choices
    const randomIndex = Math.floor(Math.random() * choices.length); // Generate a random index (0, 1, or 2)
    return choices[randomIndex]; // Return the random choice
}

alert(getComputerChoice());