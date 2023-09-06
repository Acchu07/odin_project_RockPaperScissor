
function getComputerChoice(){
    const checkValue = Math.floor(Math.random() * 3);
    return checkValue === 0 ? "rock":(checkValue === 1)? "scissors": "paper"; // Returns Rock paper or scissor based on a random value between 0 to 2
}

function getPlayerChoice(event){ // rock is default if prompt is empty or random string is entered
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


function Win(){

}

function updateScore(){
    const domPlayerScore = document.querySelector('#player-score');
    const domComputerScore = document.querySelector('#computer-score');

    domPlayerScore.textContent = `Player Score : ${playerScore}`;
    domComputerScore.textContent = `Cat Score: ${computerScore}`;

    if(playerScore === 5 || computerScore === 5){
        //reset score
        if(playerScore === 5){
            //call function to say player wins
        }
        else
        {
            //call function to say computer wins
        }
    }
}


function playRound(choice){
    const playerChoice = choice.target.id;
    const computerChoice = getComputerChoice();
    if(computerChoice === playerChoice){
        computerScore++;
        playerScore++;
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



function playGame(round){
    // const computerChoice = getComputerChoice();
    // const playerChoice = getPlayerChoice();
    
    const checkValue = playRound(computerChoice,playerChoice);
    switch(checkValue){
        case 1:
            console.log("Player Wins");
            return ++round;

        case 3:
            console.log("Draw");
            return ++round;
        
        case 0:
            console.log("Computer Wins");
            return ++round;

    }
   //(checkValue === 1)?console.log("Player Wins"):(checkValue === 7)?console.log("Draw"):console.log("Computer Wins");
}

let round = 0;
let playerScore = 0;
let computerScore = 0;
console.log(round);

const playerChoiceRock = document.querySelector('#rock');
const playerChoicePaper = document.querySelector('#paper');
const playerChoiceScissor = document.querySelector('#scissor');



playerChoiceRock.addEventListener('click',playRound);
playerChoicePaper.addEventListener('click',playRound);
playerChoiceScissor.addEventListener('click',playRound);
