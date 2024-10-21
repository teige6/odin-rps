function getComputerChoice () {
    const rock = "rock";
    const paper = "paper";
    const scissor = "scissors";
    let tbot = Math.floor(Math.random() * 3);

    if (tbot === 0) {
        return rock;
    }   else if (tbot === 1) {
        return paper;
    }   else {
        return scissor;
    }
}


function getHumanChoice () {
    let useri = prompt("Please enter 'r', 'p', or 's' for rock, paper or scissors! ");

    if (useri === "r") {
        useri = "rock";
    } else if (useri ===  "p") {
        useri = "paper";
    } else if (useri === "s") {
        useri = "scissors";
    } else {
        return "You did not enter correctly, try again";
    }
    return useri;
}


let humanScore = 0;
let computerScore = 0;


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


alert(playRound(humanSelection, computerSelection));


function playGame () {
    function playRound (humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) 
        {
            return "Congrats Human! You Won";
        } else if (humanChoice === computerChoice) {
            return "It's a tie, try again.";
        } else {
            return "Congrats Computer! You Won.";
        }
    }
}


