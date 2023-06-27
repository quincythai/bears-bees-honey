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
let computerButton;
function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  let choice;

  switch (number) {
    case 0:
      choice = "Bear";
      computerButton = bearsButton;
      break;
    case 1:
      choice = "Bee";
      computerButton = beesButton;
      break;
    case 2:
      choice = "Honey";
      computerButton = honeyButton;
      break;
    default:
      choice = "Unknown";
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
    updateButtonBorder(status, playerChoice, computerChoice);
  }
}

function updateScores(resultString, status) {
  roundsParagraph.textContent = `Rounds: ${rounds}`;
  myScoreParagraph.innerHTML = "You: ";
  cpuScoreParagraph.innerHTML = "Oski: ";

  if (status === "Win") {
    myScoreParagraph.innerHTML += `<span style="color: green">${playerWins}</span>`;
    cpuScoreParagraph.innerHTML += `${computerWins}`;
  } else if (status === "Lose") {
    cpuScoreParagraph.innerHTML += `<span style="color: green">${computerWins}</span>`;
    myScoreParagraph.innerHTML += `${playerWins}`;
  } else {
    myScoreParagraph.innerHTML += `<span style="color: white">${playerWins}</span>`;
    cpuScoreParagraph.innerHTML += `<span style="color: white">${computerWins}</span>`;
  }

  outcomeParagraph.textContent = resultString;
  outcomeParagraph.style.color = getColorFromStatus(status);
}

/* Announces winner, disables buttons. */
function endGame(winner) {
  const winnerParagraph = document.querySelector('#winner-paragraph');
  winnerParagraph.textContent = `The winner is: ${winner}!`;
  bearsButton.disabled = true;
  beesButton.disabled = true;
  honeyButton.disabled = true;
}

/* Returns text color based on status */
function getColorFromStatus(status) {
  let color;
  switch (status) {
    case "Win":
      color = "Green";
      break;
    case "Tie":
      color = "White";
      break;
    case "Lose":
      color = "Red";
      break;
    default:
      color = "Black";
      break;
  }
  return color;
}

/* Based on who wins and lose, the button choices of the player and computer
change their border color per round */
function updateButtonBorder(status) {
  // reset each round
  bearsButton.style.transition = "border-color 0.3s ease";
  beesButton.style.transition = "border-color 0.3s ease";
  honeyButton.style.transition = "border-color 0.3s ease";
  playerButton.style.transition = "border-color 0.3s ease";
  computerButton.style.transition = "border-color 0.3s ease";

  bearsButton.style.borderColor = "#FDB515";
  beesButton.style.borderColor = "#FDB515";
  honeyButton.style.borderColor = "#FDB515";

  if (status === "Tie") {
    playerButton.style.borderColor = "White";
  } else if (status === "Win") {
    playerButton.style.borderColor = "Green";
    computerButton.style.borderColor = "Red";
  } else {
    playerButton.style.borderColor = "Red";
    computerButton.style.borderColor = "Green";
  }
}


let playerChoice;
let playerButton;
/* Connect buttons to playerChoices and plays round with choice */
function game() {
  bearsButton.addEventListener('click', () => {
    playerButton = bearsButton;
    playerChoice = "Bear";
    makePlayerChoice();
  });
  beesButton.addEventListener('click', () => {
    playerButton = beesButton;
    playerChoice = "Bee";
    makePlayerChoice();
  });
  honeyButton.addEventListener('click', () => {
    playerButton = honeyButton;
    playerChoice = "Honey";
    makePlayerChoice();
  });

  function makePlayerChoice() {
    if (playerChoice) {
      playRound(playerChoice, getComputerChoice());
    }
  }
}


game();