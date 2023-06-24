// Computer chooses randomly between rock, paper and scissors and returns the string.
function getComputerChoice() {
  const num = Math.floor((Math.random() * 3) + 1);

  let computerChoice;

  switch (num) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }

  return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  const playerSel = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let status;

  if (playerSel === "Rock") {
    if (computerSelection === "Paper") {
      status = "lose";
      computerScore++;
    } else if (computerSelection === "Rock") {
      status = "tie";
    } else {
      status = "win";
      playerScore++;
    }
  } else if (playerSel === "Paper") {
    if (computerSelection === "Rock") {
      status = "win";
      playerScore++;
    } else if (computerSelection === "Paper") {
      status = "tie";
    } else {
      status = "lose";
      computerScore++;
    }
  } else if (playerSel === "Scissors") {
    if (computerSelection === "Rock") {
      status = "lose";
      computerScore++;
    } else if (computerSelection === "Paper") {
      status = "win";
      playerScore++;
    } else {
      status = "tie";
    }
  }

  const outcomeParagraph = document.querySelector('#outcome-paragraph');
  const scoreParagraph = document.querySelector('#score-paragraph');
  let paragraphText;

  if (status === "tie") {
    paragraphText = `You tied. ${playerSel} ties ${computerSelection}.`; // string to be outputted
  } else if (status === "lose") {
    paragraphText = `You ${status}! ${playerSel} loses to ${computerSelection}.`;
  } else if (status === "win") {
    paragraphText = `You ${status}! ${playerSel} beats ${computerSelection}.`; 
  }

  outcomeParagraph.textContent = paragraphText;
  scoreParagraph.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;

  if (playerScore === 5)
    alert('The winner is player!');
  else if (computerScore === 5)
    alert('The winner is the computer!');
}

/* eventType - 'click, keydown, submit, mouseover...'
eventListener - function that executes when specified event (ex: click) occurs

*/
//element.addEventListener(eventType, eventListener)

function game() {
  const rockBtn = document.querySelector('#rock-btn');
  const paperBtn = document.querySelector('#paper-btn');
  const scissorsBtn = document.querySelector('#scissors-btn');
  // selects the element with id rock-btn and assigns it to rockBtn. Now, you can add eventListener to rockBtn, and modify its attributes, change styling, or perform any other actions JS allows on HTML elements.

  // doesn't work because JS evaluates function call (getComputerchoice()) immediately
  // before addEventListener even is set up
  //rockBtn.addEventListener('click', playRound("Rock", getComputerChoice()));


  rockBtn.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
  });
  paperBtn.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
  });
  scissorsBtn.addEventListener('click', () => {
   playRound("Scissors", getComputerChoice());
  });
}

game();