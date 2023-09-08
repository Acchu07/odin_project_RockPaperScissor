// Modify to appealing visuals later
function getComputerChoice(){
    if(round > 4) return;
    const checkValue = Math.floor(Math.random() * 3);
    return checkValue === 0 ? "rock":(checkValue === 1)? "scissors": "paper";
}

function resetScore()
{
        //if(round < 5) return;
        playerScore = 0;
        computerScore = 0;
        round = 0;
        draw = 0;
        document.querySelector('img').classList.remove('show-when-win')
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
        // (playerScore > computerScore) ? displayWinner.textContent = 'Player Wins' : displayWinner.textContent = 'Cat Wins';
    if(playerScore > computerScore)
    {
        displayWinner.textContent = 'Player Wins';
        return;
     }
    else
    {
            displayWinner.textContent = 'Cat Wins';
            document.querySelector('img').classList.add('show-when-win')
    }
}
    
function updateScoreWebsite()
{
    const currentRound = document.querySelector('#round');
    const domPlayerScore = document.querySelector('#player-score');
    const domComputerScore = document.querySelector('#computer-score');
    const domDraw = document.querySelector('#draws');
    
    const displayWinner = document.querySelector('#display-winner');
    displayWinner.textContent = `Winner : UNDECIDED`;
    currentRound.textContent = `Round Number: ${round}`;
    domPlayerScore.textContent = `Player Score : ${playerScore}`;
    domComputerScore.textContent = `Cat Score: ${computerScore}`;
    domDraw.textContent = `Draws between the Cat and the Player: ${draw}`;
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
    const playerChoice = choice.target.id;
    document.querySelector('.player-played').textContent = playerChoice.toUpperCase();
    const computerChoice = getComputerChoice();
    document.querySelector('.computer-played').textContent = computerChoice.toUpperCase();
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
