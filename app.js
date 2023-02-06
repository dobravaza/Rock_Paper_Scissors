const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const scores = document.getElementsByClassName('scores')
const playerScre = document.getElementById('playerScore')
const computerScores = document.getElementById('computerScore')
const roundResult = document.getElementById('roundResult')
const reset = document.getElementById('reset')

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors']
	return choices[Math.floor(Math.random() * choices.length)]
}

reset.addEventListener('click', function () {
	playerScore = 0
	computerScore = 0
	roundCounter = 0
	roundResult.textContent = ''
	computerScores.textContent = ''
	playerScre.textContent = ''
	console.log(playerScore, computerScore, roundCounter)
})

const computerSelection = getComputerChoice()

let playerScore = 0
let computerScore = 0
let roundCounter = 0

rock.addEventListener('click', function () {
	playRound('rock')
})
paper.addEventListener('click', function () {
	playRound('paper')
})
scissors.addEventListener('click', function () {
	playRound('scissors')
})

function playRound(playerSelection) {
	if (playerScore === 5 || computerScore === 5) {
		playerScore = 0
		computerScore = 0
		roundCounter = 0
		roundResult.textContent = 'Game Over, do we play again?'
		roundResult.style.color = 'blue'
		computerScores.textContent = ''
		playerScre.textContent = ''
		return // end the game
	}

	const computerSelection = getComputerChoice()
	if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'rock')
	) {
		// update score for player
		playerScore++
		playerScre.textContent = playerScore
		roundResult.textContent = `Player Wins! ${playerSelection} beats ${computerSelection}`
		roundResult.style.color = `green`
	} else if (
		(playerSelection === 'rock' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'rock')
	) {
		// update score for computer
		computerScore++
		computerScores.textContent = computerScore
		roundResult.textContent = `That is a point for a computer ${playerSelection} loses with ${computerSelection}`
		roundResult.style.color = `red`
	} else {
		roundResult.textContent = 'Tie'
		roundResult.style.color = `black`
	}
}
