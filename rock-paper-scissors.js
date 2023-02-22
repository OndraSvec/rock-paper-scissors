//initialize variables to keep track of players' number of wins
let numOfWinsUser = 0;
let numOfWinsComp = 0;

//randomly select rock, paper or scissors for the computer
function getComputerChoice() {
    let gameArr = ["Rock", "Paper", "Scissors"];
    let randomChoice = gameArr[Math.floor(Math.random() * gameArr.length)];
    return randomChoice;
}

//play multiple rounds
function game(numOfRounds) {
    //get user's input and turn it into a number
    numOfRounds = parseInt(prompt("How many rounds would you like to play?"));
    //play a specific number of rounds based on user's input
    for (let i = 0; i < numOfRounds; i++) {
        console.log(playRound());
    }
    //display the winner of the game
    return ((numOfWinsUser > numOfWinsComp) ? `You Win ${numOfWinsUser} to ${numOfWinsComp}.`
            : (numOfWinsComp > numOfWinsUser) ? `You Lose ${numOfWinsComp} to ${numOfWinsUser}.`
            : `It's a draw.`);
}
console.log(game());

//play one round
function playRound(playerSelection, computerSelection) {
    //get player's selection as input
    playerSelection = prompt('Enter "rock", "paper" or "scissors".');
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
    } else if (playerSelectionCap === "Rock" && computerSelection === "Scissors" || playerSelectionCap === "Paper" && computerSelection === "Rock" || playerSelectionCap === "Scissors" && computerSelection === "Paper") {
        numOfWinsUser++;
        return `You Win! ${playerSelectionCap} beats ${computerSelection}.`;
    } else {
        numOfWinsComp++;
        return `You Lose! ${computerSelection} beats ${playerSelectionCap}.`;
    }
}