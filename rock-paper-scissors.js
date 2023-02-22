//randomly select rock, paper or scissors for the computer
function getComputerChoice() {
    let gameArr = ["Rock", "Paper", "Scissors"];
    let randomChoice = gameArr[Math.floor(Math.random() * gameArr.length)];
    return randomChoice;
}
console.log(getComputerChoice());
//get player's selection as input
//play one round
//play multiple rounds
//display the winner of each round
//display the winner of the game