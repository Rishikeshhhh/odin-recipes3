
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    if (choice === null) {
        console.log("You cancelled the game.");
        return null;
    }
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const resultMessages = {
        "rock": {
            "rock": "It's a tie!",
            "paper": "You lose! Paper beats Rock",
            "scissors": "You win! Rock beats Scissors"
        },
        "paper": {
            "rock": "You win! Paper beats Rock",
            "paper": "It's a tie!",
            "scissors": "You lose! Scissors beats Paper"
        },
        "scissors": {
            "rock": "You lose! Rock beats Scissors",
            "paper": "You win! Scissors beats Paper",
            "scissors": "It's a tie!"
        }
    };
    const resultMessage = resultMessages[humanChoice][computerChoice];
    console.log(resultMessage);
    if (resultMessage.includes("win")) {
        humanScore++;
    } else if (resultMessage.includes("lose")) {
        computerScore++;
    }
}
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
