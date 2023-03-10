//initialize variables to keep track of players' number of wins
let numOfWinsUser = 0;
let numOfWinsComp = 0;

//add button event listeners
const buttons = document.querySelectorAll('.rps');
buttons.forEach(button => button.addEventListener('click', playRound));

const displayDiv = document.querySelector('.display');

//randomly select rock, paper or scissors for the computer
function getComputerChoice() {
     let gameArr = ["Rock", "Paper", "Scissors"];
     let randomChoice = gameArr[Math.floor(Math.random() * gameArr.length)];
     return randomChoice;
}

//play one round
function playRound(e, playerSelection, computerSelection) {
    //get player's selection as input
    playerSelection = e.target.value;
    //invoke computer's choice
    computerSelection = getComputerChoice();
    //create a paragraph with the info about the current round
    const para = document.createElement('p');
    //stop the game when either player reaches 5 points
    if (numOfWinsUser === 5 || numOfWinsComp === 5) {
        gameOver();
    //store the winner of each round based on each player's choice
    } else if (playerSelection === computerSelection) {
         para.textContent = `It's a tie! You both chose ${playerSelection}.`;
    } else if (
         playerSelection === "Rock" && computerSelection === "Scissors"
         || playerSelection === "Paper" && computerSelection === "Rock"
         || playerSelection === "Scissors" && computerSelection === "Paper"
         ) {
         numOfWinsUser++;
         para.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
         numOfWinsComp++;
         para.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
    //append the paragraph to the display div
    displayDiv.appendChild(para);
}

//stop the game once a player reaches 5 points
function gameOver() {
    //create a paragraph with the info about the current round
    const para = document.createElement('p');
        while (displayDiv.firstChild) {
            displayDiv.removeChild(displayDiv.lastChild);
        }
        if (numOfWinsUser > numOfWinsComp) {
            para.textContent = `You Win ${numOfWinsUser} to ${numOfWinsComp}.`;
        } else {
            para.textContent = `You Lose ${numOfWinsComp} to ${numOfWinsUser}.`;
        }
        displayDiv.appendChild(para);
}

//add event listener to the reset button
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGame);

//reset the game upon reset button click
function resetGame() {
    numOfWinsComp = 0;
    numOfWinsUser = 0;
    while (displayDiv.firstChild) {
        displayDiv.removeChild(displayDiv.lastChild);
    }
}