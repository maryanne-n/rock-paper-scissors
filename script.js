const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let playerSelection;
let computerSelection;
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
const item = document.getElementsByTagName(".item");
// console.log(roundCount, playerScore, computerScore)
// const playerSelection = "rock";

// generate random computer input
function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);    
    switch(randomNum) {
        case 0: 
            return 'rock';
        case 1:
            return 'paper';            
        case 2: 
            return 'scissors';
    }
}

// listen to what the player clicks
document.querySelectorAll(".item").forEach(function(e) {
    e.addEventListener('click', () => getPlayerSelection(e));
})

// triggers the comparison of playerSelection vs computerSelection
function getPlayerSelection(e) {
    playerSelection = event.target.id;
    computerSelection = computerPlay();
    console.log(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);        
}

// compare playerSelection vs computerSelection and keeps track of score
function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection ) {
            console.log("tie!");
            console.log("player score is " + playerScore, "computer score is " + computerScore);
        }

        if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
            console.log("Player wins this round`!");
            playerScore++;
            console.log("player score is " + playerScore, "computer score is " + computerScore);
        }

        if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')) {
            console.log("Computer wins this round!");            
            computerScore++;
            console.log("player score is " + playerScore, "computer score is " + computerScore);
        }

        roundCount++;
        console.log(roundCount);

        if (roundCount == 5) {
            console.log("GAME OVER! " + " Final score is " + playerScore + " for the player and " + computerScore + " for the computer")
            gameOver();
        }

}

// reset everything for a new game
function gameOver() {
    alert("Game Over! Would you like to try again?");
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;  
    
}