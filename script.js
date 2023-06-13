const RPS = ["ROCK", "PAPER", "SCISSOR"];
function getComputerChoice() {
    return RPS[Math.floor(Math.random() * RPS.length)];
}
function playGame(userChoice,computerChoice) {
    const possibleResult = ["You Win!","You Lose!","It's a Tie!"];
    if (userChoice === computerChoice) {
        return(possibleResult[2]);
    }
    else if (userChoice === "ROCK") {
        if (computerChoice === "SCISSOR") {
            return(possibleResult[0]);
        }
        else {
            return(possibleResult[1]);
        }
    }
    else if (userChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            return(possibleResult[0]);
        }
        else {
            return(possibleResult[1]);
        }
    }
    else if (userChoice === "SCISSOR") {
        if (computerChoice === "PAPER") {
            return(possibleResult[0]);
        }
        else {
            return(possibleResult[1]);
        }
    }
}
function play(e) {
    // console.log(this.textContent);
    const playerSelection = this.textContent;
    const computerSelection = getComputerChoice();
    const result = playGame(playerSelection, computerSelection);
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
    if (result === "You Win!") {
        resultElement.style.color = "green";
    }
    else if (result === "You Lose!") {
        resultElement.style.color = "red";
    }
    else if (result === "It's a Tie!") {
        resultElement.style.color = "black";
    }
   
}
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", play, {capture: false}));



// In our UI, the player should be able to play the game by clicking on buttons rather 
// than typing their answer in a prompt.
// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your 
// playRound function with the correct playerSelection every time a button is clicked. (you can keep
//      the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
// That’s OK! Reworking old code is an important part of a programmer’s life.
