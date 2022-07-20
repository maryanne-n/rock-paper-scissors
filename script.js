const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const tools = document.querySelector(".user-tools")

const tryBtn = document.getElementById("try-btn");
tryBtn.style.display = "none";
let playerSelection;
let computerSelection;
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

// const result = document.getElementById("result");
const result = document.querySelector(".result");

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
    playRound(playerSelection, computerSelection);        
}

// compare playerSelection vs computerSelection and keeps track of score
function playRound(playerSelection, computerSelection) {
        result.textContent = `Round ${roundCount + 1}: `;
    if (playerSelection === computerSelection ) {
        result.textContent += "It's a tie.";
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++;
        document.querySelector(".player-score").textContent = playerScore;
        result.textContent += `You win! ${playerSelection} beats ${computerSelection}`;
    }
    if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')) {         
        computerScore++;
        document.querySelector(".computer-score").textContent = computerScore;
        result.textContent += `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    roundCount++;

    if (roundCount == 5) {
        // Grey out the user playboard temporarily to signify game is inactive
        tools.classList.add("inactive");
        setTimeout(gameOver, 2000);
    }

}

// reset everything for a new game
function gameOver() {
    if (computerScore == playerScore) {
        result.textContent = "It's a tie! Final score is " + playerScore + " for the player and " + computerScore + " for the computer. Would you like to try again?";

    } else if (computerScore > playerScore) {
        result.textContent = "You lost the game! Final score is " + playerScore + " for the player and " + computerScore + " for the computer. Would you like to try again?";

    } else if (playerScore > computerScore) {
        result.textContent = "You won the game! Final score is " + playerScore + " for the player and " + computerScore + " for the computer. Would you like to try again?";

    }

    // Remove the scoreboard selections
    document.querySelector(".choice-p").style.display = "none";
    document.querySelector(".choice-c").style.display = "none";

    // Reveal the try again button
    tryBtn.style.display = "block";                                
}

function reStart() {
    // Restore user playboard
    tools.classList.remove("inactive");    

    // Restore the scoreboard selections
    document.querySelector(".choice-p").style.display = "flex";
    document.querySelector(".choice-c").style.display = "flex";

    // Hide the try again button
    tryBtn.style.display = "none";

    // Reset player/computer scores and selections
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;  
    document.querySelector(".player-score").textContent = 0;
    document.querySelector(".computer-score").textContent = 0;
    document.getElementById('player-img').src = "";
    document.getElementById('computer-img').src = "";
    result.textContent = "";    
}