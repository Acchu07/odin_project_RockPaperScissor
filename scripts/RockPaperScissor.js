
function getComputerChoice(){
    const checkValue = Math.floor(Math.random() * 3);
    return checkValue === 0 ? "rock":(checkValue === 1)? "scissors": "paper";
}

function getPlayerChoice(event){ 
    let playerChoice = prompt("Choose between Rock Paper and Scissor. Random will be assigned if let empty or something else is chosen");
    if(playerChoice === null){
        playerChoice = "rock";
    }
    playerChoice = playerChoice.toLowerCase();
    switch(playerChoice){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissor":
            return "scissor";
        default:
            return "rock";
    }
}


function resetScore(){
    playerScore = 0;
    computerScore = 0;
    round = 0;
    draw = 0;
    updateScoreWebsite();
}

function getWinner(){
    // Modify to appealing visuals later
    if(playerScore === computerScore){
        return alert('Draw');
    }
    return (playerScore > computerScore) ? alert('Player Wins') : alert('Cat Wins');
}

function updateScoreWebsite(){
    console.log(round);
    const currentRound = document.querySelector('#round');
    const domPlayerScore = document.querySelector('#player-score');
    const domComputerScore = document.querySelector('#computer-score');
    const domDraw = document.querySelector('#draws');
    
    currentRound.textContent = `Round Number: ${round}`;
    domPlayerScore.textContent = `Player Score : ${playerScore}`;
    domComputerScore.textContent = `Cat Score: ${computerScore}`;
    domDraw.textContent = `Draws between the Cat and the Player: ${draw}`;
}

function updateScore(){
    round++;
    updateScoreWebsite();
    if(round === 5){
        getWinner();
        resetScore();
    }
}


function playRound(choice){
    const playerChoice = choice.target.id;
    const computerChoice = getComputerChoice();
    if(computerChoice === playerChoice){
        draw++;
        updateScore();
        return;
    }
    if(computerChoice === "rock"){
        if(playerChoice === "paper"){
            playerScore++;
            updateScore();
            return;
        }
        else { 
            computerScore++;
            updateScore();
            return;
        }
    }
    else if(computerChoice === "paper"){
        if(playerChoice === "scissor"){
            playerScore++;
            updateScore();
            return;
        }
        else { 
            computerScore++;
            updateScore();
            return;
        }
    }
    else{
        if(playerChoice === "rock"){
            playerScore++;
            updateScore();
            return;
        }
        else{ 
            computerScore++;
            updateScore();
            return;
        }
    }
}

let round = 0;
let playerScore = 0;
let computerScore = 0;
let draw = 0;
console.log(round);

const playerChoiceRock = document.querySelector('#rock');
const playerChoicePaper = document.querySelector('#paper');
const playerChoiceScissor = document.querySelector('#scissor');




playerChoiceRock.addEventListener('click',playRound);
playerChoicePaper.addEventListener('click',playRound);
playerChoiceScissor.addEventListener('click',playRound);
