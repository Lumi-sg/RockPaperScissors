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

//TOO LAZY TO FIGURE OUT HOW TO DO THIS IN A BETTER WAY SORRY!
restartBTN.innerHTML = "▶️";
restartBTN.onclick = function () {
	window.location.reload();
};

function getComputerChoice() {
	let options = ["Rock", "Paper", "Scissors"];
	return options[Math.floor(Math.random() * options.length)];
}
//AFTER GAME ENDS, BUTTONS ARE DISABLED AND HIDDEN
function disableButtons() {
	buttons.forEach((element) => {
		element.disabled = true;
		element.style.display = "none";
	});
}

function playRound(playerSelection) {
	let computerSelection = getComputerChoice();
	let result = "";

	if (
		(playerSelection == "Rock" && computerSelection == "Scissors") ||
		(playerSelection == "Scissors" && computerSelection == "Paper") ||
		(playerSelection == "Paper" && computerSelection == "Rock")
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
			playerSelection +
			" loses to " +
			computerSelection +
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
