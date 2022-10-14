let playerScore = 0;
let computerScore = 0;
let ties = 0;

//BUTTON STUFF
const buttons = document.querySelectorAll("input");
const refreshButton = document.querySelector(".restart");

buttons.forEach((button) => {
	button.addEventListener("click", function () {
		playRound(button.value);
	});
});

//AFTER GAME ENDS, BUTTONS ARE DISABLED AND HIDDEN
function disableButtons() {
	buttons.forEach((element) => {
		element.disabled = true;
		element.style.display = "none";
	});
}

function enableRestartButton() {
	refreshButton.style.display = "block";
}

function renamePageTitle() {
	if (playerScore == 5) {
		document.title = "You won!";
	} else {
		document.title = "You lost!";
	}
}

//TOO LAZY TO FIGURE OUT HOW TO DO THIS IN A BETTER WAY SORRY!
const refreshPage = () => {
	location.reload();
};
refreshButton.addEventListener("click", refreshPage);

function getComputerChoice() {
	let options = ["Rock", "Paper", "Scissors"];
	return options[Math.floor(Math.random() * options.length)];
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
			disableButtons();
			enableRestartButton();
			renamePageTitle();
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

		if (computerScore === 5) {
			result += "<br><br>You lost the game!";
			disableButtons();
			enableRestartButton();
			renamePageTitle();
		}
	}
	document.getElementById("result").innerHTML = result;
}
