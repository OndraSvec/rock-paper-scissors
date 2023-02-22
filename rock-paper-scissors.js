//randomly select rock, paper or scissors for the computer
function getComputerChoice() {
    let gameArr = ["Rock", "Paper", "Scissors"];
    let randomChoice = gameArr[Math.floor(Math.random() * gameArr.length)];
    return randomChoice;
}
//play one round
function playRound(playerSelection, computerSelection) {
    //get player's selection as input
    playerSelection = prompt("Enter your choice: ");
    //lower case the input
    let playerSelectionLow = playerSelection.toLowerCase();
    //capitalize the input
    let playerSelectionCap = playerSelectionLow[0].toUpperCase() + playerSelectionLow.slice(1);
    console.log(playerSelectionCap);
    //invoke computer's choice
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    //display the winner of each round based on each player's choice
    if (playerSelectionCap === computerSelection) {
        return `It's a tie!`;
    } else if (playerSelectionCap === "Rock" && computerSelection === "Scissors") {
        return `You Win! ${playerSelectionCap} beats ${computerSelection}.`;
    } else if (playerSelectionCap === "Paper" && computerSelection === "Rock") {
        return `You Win! ${playerSelectionCap} beats ${computerSelection}.`;
    } else if (playerSelectionCap === "Scissors" && computerSelection === "Paper") {
        return `You Win! ${playerSelectionCap} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelectionCap}.`;
    }
}
console.log(playRound());

//play multiple rounds
//display the winner of the game