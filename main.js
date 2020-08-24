const OPTIONS = ['Rock', "Paper", "Scissors"];

const randomNum = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const computerPlay = () => {
    return OPTIONS[randomNum(3)];
};

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "Paper") {
        return (`You Lose! Paper beats Rock`);
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return ("You Win! Rock beats Scissors");
    } else if (playerSelection == "rock" && computerSelection == "Rock") {
        return ("Tied!");
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        return ("Tied!");
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return ("You Lose! Scissors beats Paper");
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return ("You Win! Paper beats Rock");
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return ("You Win! Scissors beats Paper");
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return ("Tied!");
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return ("You Lose! Rock beats Scissors");
    }
};

// const playerSelection = 'rock';
// const computerSelection = computerPlay();
// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection))