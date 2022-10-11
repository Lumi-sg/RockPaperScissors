let playerScore = 0;
let computerScore = 0;
let round = 0;
game();


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
		round++;
		return (
			"Tie! Round: " +
			round +
			" -- Score | Player: " +
			playerScore +
			" | Computer: " +
			computerScore
		);
	} else if (
		(playerInput === "rock" && computerChoice === "scissors") ||
		(playerInput === "paper" && computerChoice === "rock") ||
		(playerInput === "scissors" && computerChoice === "paper")
	) {
		round++;
		playerScore++;
		return (
			"Player Wins! Round: " +
			round +
			" -- Score | Player: " +
			playerScore +
			" | Computer: " +
			computerScore
		);
	} else {
		round++;
		computerScore++;
		return (
			"Computer Wins! Round: " +
			round +
			" -- Score | Player: " +
			playerScore +
			" | Computer: " +
			computerScore
		);
	}
}

function playRPS() {
	let playerChoice = getPlayerChoice();
	let computerChoice = getComputerChoice();
	console.log(checkWinner(playerChoice, computerChoice));
}

function game() {
	for (let i = 0; i < 6; i++) {
		if (i < 5) {
			playRPS();
		} else if ((score = 5)) {
			console.log("Game is over!");
			let playAgain = prompt("Do you want to play again? Yes/No ");
			if (playAgain === "yes") {
				i = 0;
				playerScore = 0;
				computerScore = 0;
				round = 0;

				game();
			} else {
				break;
			}
		}
	}
}
