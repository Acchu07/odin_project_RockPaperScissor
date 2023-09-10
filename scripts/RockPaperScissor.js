// Modify to appealing visuals later
function getComputerChoice(){
    if(round > 4) return;
    const checkValue = Math.floor(Math.random() * 3);
    return checkValue === 0 ? "rock":(checkValue === 1)? "scissor": "paper";
}

function resetScore()
{
        //if(round < 5) return;
        playerScore = 0;
        computerScore = 0;
        round = 0;
        draw = 0;
        updateScoreWebsite();
}
    
function getWinner()
{
    const displayWinner = document.querySelector('#display-winner');  
    if(playerScore === computerScore)
    {
        displayWinner.textContent = 'Draw';
        return;
    }
    if(playerScore > computerScore)
    {
        displayWinner.textContent = 'You Win';
        return;
     }
    else
    {
            displayWinner.textContent = 'Opponent Wins';
    }
}
    
function updateScoreWebsite()
{
    const currentRound = document.querySelector('#round');
    const domPlayerScore = document.querySelector('#player-score');
    const domComputerScore = document.querySelector('#computer-score');
    const domDraw = document.querySelector('#draws');
    
    const displayWinner = document.querySelector('#display-winner');
    displayWinner.textContent = "";
    currentRound.textContent = `Round Number: ${round}`;
    domPlayerScore.textContent = `Your Current Score : ${playerScore}`;
    domComputerScore.textContent = `Opponent Current Score: ${computerScore}`;
    domDraw.textContent = `Draws between You and The Opponent: ${draw}`;
}

function updateScore(){
    if(round > 4) return;
    round++;
    updateScoreWebsite();
    if(round === 5){
        getWinner();
    }
}

function playRound(choice){
    if(round > 4) return;
    const playerChoice = choice.target.id;
    let displayedPlayerChoice;
    let displayedComputerChoice;
    (playerChoice === 'rock') ? displayedPlayerChoice = 'Fire': (playerChoice === 'scissor') ? displayedPlayerChoice = 'Water' : displayedPlayerChoice = 'Leaf';
    document.querySelector('.player-played').textContent = displayedPlayerChoice;
    const computerChoice = getComputerChoice();
    (computerChoice === 'rock') ? displayedComputerChoice = 'Fire': (displayedComputerChoice === 'scissor') ? displayedComputerChoice = 'Water' : displayedComputerChoice = 'Leaf';
    document.querySelector('.computer-played').textContent = displayedComputerChoice;
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

const playerChoiceRock = document.querySelector('#rock');
const playerChoicePaper = document.querySelector('#paper');
const playerChoiceScissor = document.querySelector('#scissor');
const resetGame = document.querySelector('#reset-game');

playerChoiceRock.addEventListener('click',playRound);
playerChoicePaper.addEventListener('click',playRound);
playerChoiceScissor.addEventListener('click',playRound);
resetGame.addEventListener('click', resetScore);
