let rounds = 0;
let playerWins = 0;
let computerWins = 0;
const roundsParagraph = document.querySelector('#round-score');
const myScoreParagraph = document.querySelector('#my-score');
const cpuScoreParagraph = document.querySelector('#cpu-score');
const bearsButton = document.querySelector('#bear-button');
const beesButton = document.querySelector('#bees-button');
const honeyButton = document.querySelector('#honey-button');
const outcomeParagraph = document.querySelector('#outcome-paragraph');

/* Returns random choice between Bear, Bee, Honey */
function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  let choice;

  switch (number) {
    case 0:
      choice = "Bear";
      break;
    case 1:
      choice = "Bee";
      break;
    case 2:
      choice = "Honey";
      break;
  }

  return choice;
}

/* Plays one rock, paper, scissors round */
function playRound(playerChoice, computerChoice) {
  let resultString;
  let status;

  if (playerChoice === computerChoice) {
    status = "Tie";
    resultString = `You tied. ${playerChoice} ties ${computerChoice}.`;
  } else if (playerChoice === "Bear" && computerChoice === "Honey" || 
    playerChoice === "Bee" && computerChoice === "Bear" || 
    playerChoice === "Honey" && computerChoice === "Bee") {
      status = "Win";
      resultString = `You win! ${playerChoice} beats ${computerChoice}!`;
      playerWins++;
  } else {
    status = "Lose";
    resultString = `You lost.. ${playerChoice} loses to ${computerChoice}.`;
    computerWins++;
  }
  updateScores(resultString, status);
  rounds++;

  if (playerWins >= 5) {
    endGame("You");
  } else if (computerWins >= 5) {
    endGame("Oski"); 
  } else {
    updateScores(resultString, status);
  }

}

/* Connect buttons to playerChoices and plays round with choice */
function game() {
  bearsButton.addEventListener('click', () => {
    playRound("Bear", getComputerChoice())
  });
  beesButton.addEventListener('click', () => {
    playRound("Bee", getComputerChoice())
  });
  honeyButton.addEventListener('click', () => {
    playRound("Honey", getComputerChoice())
  });
}

function updateScores(resultString, status) {
  roundsParagraph.textContent = `Rounds: ${rounds}`;
  myScoreParagraph.textContent = `You: ${playerWins}`;
  cpuScoreParagraph.textContent = `Oski: ${computerWins}`;
  outcomeParagraph.textContent = resultString;

  if (status === "Win") {
    outcomeParagraph.style.color = "Green";
  } else if (status === "Tie") {
    outcomeParagraph.style.color = "White";
  } else {
    outcomeParagraph.style.color = "Red";
  }
}

function endGame(winner) {
  const winnerParagraph = document.querySelector('#winner-paragraph');
  winnerParagraph.textContent = `The winner is: ${winner}!`;
  bearsButton.disabled = true;
  beesButton.disabled = true;
  honeyButton.disabled = true;
}

game();