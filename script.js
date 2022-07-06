const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let playerSelection;
let computerSelection;
let roundCount = 0;
// let playerScore = document.querySelector(".player-score");
// let computerScore = document.querySelector(".computer-score");
let playerScore = 0;
let computerScore = 0;

const result = document.getElementById("result");

// generate random computer input
function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);    
    switch(randomNum) {
        case 0: 
            document.getElementById("computer-img").src="images/rock-c.png";
            return 'rock';            
        case 1:
            document.getElementById("computer-img").src="images/paper-c.png";
            return 'paper';            
        case 2: 
            document.getElementById("computer-img").src="images/scissors-c.png";
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
                   
        if (playerSelection == 'rock') {
            document.getElementById('player-img').src= "images/rock.png";
        } else if (playerSelection == 'paper') {
            document.getElementById('player-img').src = "images/paper.png";
        } else {
            document.getElementById('player-img').src = "images/scissors.png";
        }
    computerSelection = computerPlay();
    console.log(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);        
}

// compare playerSelection vs computerSelection and keeps track of score
function playRound(playerSelection, computerSelection) {
        result.textContent = "";
        if (playerSelection === computerSelection ) {
            console.log("tie!");
            console.log("player score is " + playerScore, "computer score is " + computerScore);
            result.textContent = "It's a tie.";
        }

        if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
            console.log("Player wins this round`!");
            playerScore++;
            document.querySelector(".player-score").textContent = playerScore;
            console.log("player score is " + playerScore, "computer score is " + computerScore);
            result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        }

        if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')) {
            console.log("Computer wins this round!");            
            computerScore++;
            document.querySelector(".computer-score").textContent = computerScore;
            console.log("player score is " + playerScore, "computer score is " + computerScore);
            result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }

        roundCount++;
        console.log(roundCount);

        if (roundCount == 5) {
            console.log("GAME OVER! " + " Final score is " + playerScore + " for the player and " + computerScore + " for the computer")
            // gameOver();
            const timeout = setTimeout(gameOver, 1000)
        }

}

// reset everything for a new game
function gameOver() {
    if (computerScore == playerScore) {
        alert("Final score is " + playerScore + " for the player and " + computerScore + " for the computer. It's a tie! Would you like to try again?");
    } else if (computerScore > playerScore) {
        alert("Final score is " + playerScore + " for the player and " + computerScore + " for the computer. You lost! Would you like to try again?");
    } else if (playerScore > computerScore) {
        alert("Final score is " + playerScore + " for the player and " + computerScore + " for the computer. You won! Would you like to try again?");
    }
    // alert("Game Over! Would you like to try again?");
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;  
    document.querySelector(".player-score").textContent = 0;
    document.querySelector(".computer-score").textContent = 0;
    document.getElementById('player-img').src = "";
    document.getElementById('computer-img').src = "";
    result.textContent = "";                                
}