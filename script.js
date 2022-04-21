const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computerSelection = computerPlay();
const playerSelection = playerPlay();

document.querySelectorAll(".item").forEach(function(e) {
    e.addEventListener('click', function() {
        console.log(e.textContent.toLowerCase());
    })
})

// rock.addEventListener("click", () => myFunc());

// detect what the player selects
function playerPlay(element) {
    // console.log(element, computerSelection);
    return element;
    // console.log(element);
}

// generate random computer input
function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);
    // console.log(randomNum);
    switch(randomNum) {
        case 0: 
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2: 
            return 'scissors';
    }
}

// when player clicks on an item, it triggers a function
// this function should detect which of the items were clicked
// it then compares what the player clicked to the randomly generated computerSelection


function playRound(playerSelection, computerSelection) {
    // console.log(playerSelection, computerSelection);
    // if playerSelection === computerSelection then tie

    // if playerSelection === rock && computerSelection === scissors || playerSelection === scissors && computerSelection === paper then player gains 1 point

    // if playerSelection === scissors && computerSelection === rock || playerSelection === paper && computerSelection === scissors then computer gains 1 point

}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }    
}