const RPS = ["ROCK", "PAPER", "SCISSOR"];
function getComputerChoice() {
    return RPS[Math.floor(Math.random() * RPS.length)];
}
function playGame(playerSelection, computerSelection) {
    const userChoice = playerSelection.toUpperCase();
    const computerChoice = computerSelection.toUpperCase();
    const possibleChoice = ["You Win!","You Lose!","It's a Tie!"];
    if (userChoice === computerChoice) {
        return(possibleChoice[2]);
    }
    else if (userChoice === "ROCK") {
        if (computerChoice === "SCISSOR") {
            return(possibleChoice[0] + " " + userChoice + " beats " + computerChoice);
        }
        else {
            return(possibleChoice[1] + " "  + computerChoice+ " beats " +userChoice );
        }
    }
    else if (userChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            return(possibleChoice[0] + " " + userChoice + " beats " + computerChoice);
        }
        else {
            return(possibleChoice[1] + " "  + computerChoice+ " beats " +userChoice );
        }
    }
    else if (userChoice === "SCISSOR") {
        if (computerChoice === "PAPER") {
            return(possibleChoice[0] + " " + userChoice + " beats " + computerChoice);
        }
        else {
            return(possibleChoice[1] + " "  + computerChoice+ " beats " +userChoice );
        }
    }
}

function game() {
    const playingTimes = parseInt(prompt("How many times?: "));
    for (let i = 0; i < playingTimes; i++) {
        const playerSelection = prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();
        let result = playGame(playerSelection, computerSelection);
        alert(result);
        console.log(result);
    }
}
game();
