
function getComputerChoice(){
    const checkValue = Math.floor(Math.random() * 3)
    return checkValue === 0 ? "rock":(checkValue === 1)? "scissors": "paper"; // Returns Rock paper or scissor based on a random value between 0 to 2
}

function getPlayerChoice(){ // rock is default if prompt is empty or random string is entered
    let playerChoice = prompt("Choose between Rock Paper and Scissor. Random will be assigned if let empty or something else is chosen").toLowerCase();
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

function playRound(computerChoice,playerChoice){
    if(computerChoice === playerChoice){
        return 3;
    }
    if(computerChoice === "rock"){
        if(playerChoice === "paper"){
            return 1;
        }
        else { //if(playerChoice === "scissors")
            return 0;
        }
    }
    else if(computerChoice === "paper"){
        if(playerChoice === "scissor"){
            return 1;
        }
        else { //if(playerChoice === "rock")
            return 0;
        }
    }
    else{
        if(playerChoice === "rock"){
            return 1;
        }
        else{ // if(playerChoice === "paper")
            return 0;
        }
    }
}

function playGame(round){
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    const checkValue = playRound(computerChoice,playerChoice);
    switch(checkValue){
        case 1:
            console.log("Player Wins")
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
round = playGame(round);
round = playGame(round);
round = playGame(round);
round = playGame(round);
round = playGame(round);
console.log(round);