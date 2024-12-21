const buttons = document.querySelectorAll("button")
const demoEl = document.querySelector("#demo")
const resultEL = document.querySelector("#result")
const playerScoreEl = document.querySelector("#user-score")
const computerScoreEl= document.querySelector("#computer-score")
const restartEl = document.getElementById("restartEl")
console.log(restartEl)
let playerScore = 0;
let computerScore = 0;



restartEl.addEventListener("click", () => {
	console.log("clicked")
	playerScore = 0;
	computerScore = 0;
	playerScoreEl.textContent = playerScore;
	computerScoreEl.textContent = computerScore;
	demoEl.innerHTML = "";
	resultEL.innerHTML = "";
})





buttons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.id, computerPlay())
	})
})

function computerPlay() {
	const choices = ["rock", "paper", "scissors"];
	const randomChoice = Math.floor(Math.random() * choices.length);
	console.log(choices[0])
	return choices[randomChoice];
}


let result = "";
function playRound(playerSeletion, computerSelection) {
	if (playerSeletion === computerSelection) {
		result = "It's a tie!";
	} else if (
		(playerSeletion === "rock" && computerSelection === "scissors") ||
		(playerSeletion === "paper" && computerSelection === "rock") ||
		(playerSeletion === "scissors" && computerSelection === "paper")
	) {
		playerScore ++
		result = "You win!";
		playerScoreEl.textContent = playerScore;
	} else {
		computerScore ++
		result = "You lose!";
		computerScoreEl.textContent = computerScore;
	}
	demoEl.innerHTML = result;
	resultEL.innerHTML = `You chose ${playerSeletion} and the computer chose ${computerSelection}`;
	console.log(result);
	return result;
}
