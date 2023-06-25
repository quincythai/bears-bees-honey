/* Function returns rock, paper or scissors. (Bears, bees, honey)
                      0     1         2 */
function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  let choice;

  switch (number) {
    case 0:
      choice = "Bears";
      break;
    case 1:
      choice = "Bees";
      break;
    case 2:
      choice = "Honey";
      break;
  }

  return choice;
}

let rounds = 0;
let playerWins = 0;
let computerWins = 0;

function playRound(playerChoice, computerChoice) {
  let string;

  if (playerChoice === computerChoice) {
    string = `You tied. ${playerChoice} ties ${computerChoice}.`;
  } else if (playerChoice === "Bears" && computerChoice === "Honey" || 
  playerChoice === "Bees" && computerChoice === "Bears" || 
  playerChoice === "Honey" && computerChoice === "Bees") {
    playerWins++;
    string = `You win! ${playerChoice} beats ${computerChoice}!`;
  } else {
    computerWins++;
    string = `You lost.. ${playerChoice} lose to ${computerChoice}.`;
  }

  rounds++;
  updateScores(string);
}

const bearsButton = document.querySelector('#bear-button');
const beesButton = document.querySelector('#bees-button');
const honeyButton = document.querySelector('#honey-button');
const outcomeParagraph = document.querySelector('#outcome-paragraph');

function game() {
  bearsButton.addEventListener('click', () => {
    handleButtonClick("Bears");
  });
  beesButton.addEventListener('click', () => {
    handleButtonClick("Bees");
  });
  honeyButton.addEventListener('click', () => {
    handleButtonClick("Honey");
  });
}

function handleButtonClick(choice) {
  playRound(choice, getComputerChoice());
}

const roundsParagraph = document.querySelector('#round-score');
const myScoreParagraph = document.querySelector('#my-score');
const cpuScoreParagraph = document.querySelector('#cpu-score');

function updateScores(string) {
  roundsParagraph.textContent = `Rounds: ${rounds}`;
  myScoreParagraph.textContent = `You: ${playerWins}`;
  cpuScoreParagraph.textContent = `Oski: ${computerWins}`;
  outcomeParagraph.textContent = string;
}

function endGame(winner) {
  outcomeParagraph.textContent = `The winner is: ${winner}`;
}

game();