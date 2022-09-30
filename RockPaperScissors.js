function getPlayerChoice() {
  let playerInput = prompt("Type Rock, Paper, or Scissors");
  console.log("Player picks: " + playerInput.toLowerCase());
  return playerInput.toLowerCase();
}

function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  console.log("Computer picks: " + computerChoice.toLowerCase());
  return computerChoice.toLowerCase();
}

function checkWinner(playerInput, computerChoice) {
  if (computerChoice === playerInput) {
    return "Tie";
  } else if (
    (playerInput === "rock" && computerChoice == "scissors") ||
    (playerInput === "paper" && computerChoice == "rock") ||
    (playerInput === "scissors" && computerChoice == "paper")
  ) {
    return "Player Wins";
  } else {
    return "Computer Wins";
  }
}

function playRPS() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  console.log(checkWinner(playerChoice, computerChoice));
}

playRPS();
