let playerScore = 0;
let computerScore = 0;
let ties = 0;

//BUTTON STUFF
const buttons = document.querySelectorAll("input");
const restartBTN = document.createElement("button");

buttons.forEach((button) => {
	button.addEventListener("click", function () {
		playRound(button.value);
	});
});

restartBTN.innerHTML = "Restart the game?";
restartBTN.onclick = function () {
	window.location.reload();
};

function computerChoice() {
	let options = ["rock", "paper", "scissors"];
	return options[Math.floor(Math.random() * options.length)];
}

function disableButtons() {
	buttons.forEach((elem) => {
		elem.disabled = true;
		elem.hidden = true;
	});
}

function playRound(playerSelection) {
	let computerSelection = computerChoice();
	let result = "";

	if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "rock")
	) {
		playerScore += 1;
		result =
			"You win!<br><br>" +
			playerSelection +
			" beats " +
			computerSelection +
			"." +
			"<br><br>Player score: " +
			playerScore +
			"<br>Computer score: " +
			computerScore +
			"<br>Ties: " +
			ties;
		if (playerScore == 5) {
			result += "<br><br>You won the game!";
			document.body.appendChild(restartBTN);
			disableButtons();
		}
	} else if (playerSelection === computerSelection) {
		ties++;
		result =
			"It's a tie!<br><br> You both chose " +
			playerSelection +
			"." +
			"<br><br>Player score: " +
			playerScore +
			"<br>Computer score: " +
			computerScore +
			"<br>Ties: " +
			ties;
	} else {
		computerScore += 1;
		result =
			"You lose!<br><br> " +
			computerSelection +
			" beats " +
			playerSelection +
			"." +
			"<br><br>Player score: " +
			playerScore +
			"<br>Computer score: " +
			computerScore +
			"<br>Ties: " +
			ties;

		if (computerScore == 5) {
			result += "<br><br>You lost the game!";
			document.body.appendChild(restartBTN);
			disableButtons();
		}
	}
	document.getElementById("result").innerHTML = result;
}
