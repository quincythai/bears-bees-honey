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

function playRound(playerChoice, computerChoice) {
  
}