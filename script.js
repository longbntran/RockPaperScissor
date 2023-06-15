function getComputerChoice() {
    const RPS = ["ROCK", "PAPER", "SCISSOR"];
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
function updateScore(result,compChoice) {
    switch(result) {
        case "You Win!":
            userScore += 1;
            break;
        case "You Lose!":
            computerScore += 1;
            break;
        case "It's a Tie!":
            break;
    }
    console.log(result,userScore, computerScore);
    if (userScore<5 && computerScore<5) {
        announcing.textContent = "theCompchose: "+compChoice+"."+result;
        tempUserScoreInHtml.textContent = userScore;
        tempCompScoreInHtml.textContent = computerScore;
    }
    if (userScore===5) {
        announcing.textContent = "theCompchose: "+compChoice+"."+result;
        tempUserScoreInHtml.textContent = userScore;
        tempCompScoreInHtml.textContent = computerScore;
        const alertMessage = document.getElementById("alert");
        alertMessage.style.display = "block";
        alertMessage.innerHTML = `
        <span class="closebtn" onclick="window.location.reload()">&times;</span>
        The winner is You ${userScore} against the Computer ${computerScore}.`;
    }
    else if (computerScore===5) {
        announcing.textContent = "theCompchose: "+compChoice+"."+result;
        tempUserScoreInHtml.textContent = userScore;
        tempCompScoreInHtml.textContent = computerScore;
        const alertMessage = document.getElementById("alert");
        alertMessage.style.display = "block";
        alertMessage.innerHTML = `
        <span class="closebtn" onclick="document.location.reload()">&times;</span>
        The winner is the Comp ${computerScore} against You ${userScore}.`
    }
}
const announcing = document.getElementById("announcing");
const tempUserScoreInHtml = document.getElementById("user_score");
const tempCompScoreInHtml = document.getElementById("computer_score");
let userScore = 0;
let computerScore = 0;
const allButton = document.querySelectorAll("button");
allButton.forEach(button => button.addEventListener("click", () => {
    const userChoice = button.textContent;
    const computerChoice = getComputerChoice();
    const result = playGame(userChoice, computerChoice);
    updateScore(result,computerChoice);
}));
