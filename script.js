
const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementsByClassName("plyScore")[0];
const computerScoreDislay = document.getElementsByClassName("compScore")[0];

let playerScore = 0;
let computerScore = 0;


function playGame(playerSelection) {
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerSelection === computerSelection) {
        result = "It's a TIE!";
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    result = "YOU WIN!";
                    playerScore += 1;
                } else {
                    result = "YOU LOSE!";
                    computerScore +=1;
                }
                break;
            case "paper":
                if (computerSelection === "rock") {
                    result = "YOU WIN!";
                    playerScore += 1;
                } else {
                    result = "YOU LOSE!";
                    computerScore +=1;
                }
                break;
            case "scissors":
                if (computerSelection === "paper") {
                    result = "YOU WIN!";
                    playerScore += 1;
                } else {
                    result = "YOU LOSE!";
                    computerScore +=1;
                }
                break;
        }
    }


    playerDisplay.textContent = `PLAYER: ${playerSelection}`;
    computerDisplay.textContent = `COMPUTER: ${computerSelection}`;
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDislay.textContent = `${computerScore}`;
}


function clearGame () {
    playerScoreDisplay.textContent = 0;
    computerScoreDislay.textContent = 0;
}











/*function playGame () {
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


*/




