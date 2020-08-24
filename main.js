let playerPoints = 0;
let computerPoints = 0;

const OPTIONS = ['Rock', 'Paper', 'Scissors'];

const randomNum = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const computerPlay = () => {
  return OPTIONS[randomNum(3)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == 'rock' && computerSelection == 'Paper') {
    computerPoints++;
    return `You Lose! Paper beats Rock`;
  } else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
    playerPoints++;
    return 'You Win! Rock beats Scissors';
  } else if (playerSelection == 'rock' && computerSelection == 'Rock') {
    return 'Tied!';
  } else if (playerSelection == 'paper' && computerSelection == 'Paper') {
    return 'Tied!';
  } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
    computerPoints++;
    return 'You Lose! Scissors beats Paper';
  } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
    playerPoints++;
    return 'You Win! Paper beats Rock';
  } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
    playerPoints++;
    return 'You Win! Scissors beats Paper';
  } else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
    return 'Tied!';
  } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
    computerPoints++;
    return 'You Lose! Rock beats Scissors';
  }
};

const game = () => {
  for (let i = 1; i <= 5; i++) {
    let playerChoice = prompt('Your Turn: ').toLowerCase();

    console.log(playRound(playerChoice, computerPlay()));
  }

  if (playerPoints > computerPoints) {
    console.log('You won the game.');
  } else if (playerPoints < computerPoints) {
    console.log('You lost the game.');
  } else if (playerPoints == computerPoints) {
    console.log('The game is tied!');
  }
};

console.log(game());