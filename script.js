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



function playRound (humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) 
    {
        return "human";
    } else if (humanChoice === computerChoice) {
        return "tie";
    } else {
        return "computer";
    }
}




function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++;
            alert(`Congrats Human, you won this round: ${humanSelection} vs Computer: ${computerSelection}`);
        } else if (result === "computer") {
            computerScore++;
            alert(`Congrats Computer, you are the winner: ${computerSelection} vs Human: ${humanSelection}`);
        } else {
            alert(`It's a tie! Both chose ${humanSelection}`);
        }
    }


    if (humanScore > computerScore) {
        alert("Human is the winner! Congrats human, you are one fly player!");
    } else if (computerScore > humanScore) {
        alert("Computer you are the winner, congrats pc and valiant effort human.");
    } else {
        alert("It's a tie, this is truly unacceptable, please play again.");
    }

}


playGame();


