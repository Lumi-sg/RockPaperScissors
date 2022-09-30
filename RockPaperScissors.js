let options = [
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice()
{
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

console.log(getComputerChoice());
