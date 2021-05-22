console.log("carregado");

const options = ["rock", "scissors", "paper"];

function computerPlay() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

const playerSelection = 'rock';
const computerSelection = computerPlay();

console.log(playerSelection)
console.log(computerSelection)

function playRound(playerSelection, computerSelection) {
  if(playerSelection === 'rock' && computerSelection === 'paper'){
    return "You Lose! Paper beats Rock"
  }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
    return "You Won! Rock beats Scissors"
  }else{
    return "Draw"
  }
}

console.log(playRound(playerSelection, computerSelection));
