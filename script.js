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
    const playerSelection = this.textContent;
    const computerSelection = getComputerChoice();
    const result = playGame(playerSelection, computerSelection);
    let humanScore = parseInt(document.getElementById("human-score").textContent);
    let computerScore = parseInt(document.getElementById("computer-score").textContent);
    if (Math.max(humanScore, computerScore) === 5) {
        let resultElement = document.getElementById("result");
        resultElement.style.color = "blue";
        let winner = humanScore > computerScore ? "The Hooman" : "The Mighty Comp";
        resultElement.textContent = resultElement.textContent + "And the winner is: " + winner + `. Score: ${humanScore} - ${computerScore}`;
    }
    console.log(humanScore,computerScore)
    // const resultElement = document.getElementById("result");
    // resultElement.textContent = result;
    if (result === "You Win!") {
        // resultElement.style.color = "green";
        humanScore += 1;
        document.getElementById("human-score").textContent = `${humanScore}`;
    }
    else if (result === "You Lose!") {
        // resultElement.style.color = "red";
        computerScore += 1;
        document.getElementById("computer-score").textContent = `${computerScore}`;
    }
    else if (result === "It's a Tie!") {
        // resultElement.style.color = "black";
    }
   
}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", play, {capture: false}));



// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
// That’s OK! Reworking old code is an important part of a programmer’s life.


// In our UI, the player should be able to play the game by clicking on buttons rather 
// than typing their answer in a prompt.
// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that call your 
// playRound function with the correct playerSelection every time a button is clicked. (you can keep
//      the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
