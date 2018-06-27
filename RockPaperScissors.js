function computerPlay() {
	var choice = Math.floor(Math.random() * Math.floor(3));
	if (choice == 0) {
		return 'ROCK';
	} else if (choice == 1) {
		return 'PAPER';
	} else if (choice == 2) {
		return 'SCISSORS';
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == 'ROCK') {
		if (computerSelection == 'ROCK') {
			return "It's a draw";
		} else if (computerSelection == 'PAPER') {
			computerScore++;
			return 'You lose';
		} else if (computerSelection == 'SCISSORS') {
			playerScore++;
			return 'You win';
		}
	} else if (playerSelection == 'PAPER') {
		if (computerSelection == 'ROCK') {
			playerScore++;
			return 'You win';
		} else if (computerSelection == 'PAPER') {
			return "It's a draw";
		} else if (computerSelection == 'SCISSORS') {
			computerScore++;
			return 'You lose';
		}
	} else if (playerSelection == 'SCISSORS') {
		if (computerSelection == 'ROCK') {
			computerScore++;
			return 'You lose';
		} else if (computerSelection == 'PAPER') {
			playerScore++;
			return 'You win';
		} else if (computerSelection == 'SCISSORS') {
			return "It's a draw";
		}
	} else {
		return 0;
	}
}

function game() {
	var playerScore = 0;
	var computerScore = 0;

	for (i = 0; i < 5; i++) {
		var playerSelection = prompt('enter rock, paper, or scissors')
			.toString()
			.toUpperCase();
		var computerSelection = computerPlay();
		while (true) {
			if (
				playerSelection == 'ROCK' ||
				playerSelection == 'PAPER' ||
				playerSelection == 'SCISSORS'
			) {
				break;
			}
			var playerSelection = prompt('enter rock, paper, or scissors')
				.toString()
				.toUpperCase();
		}
		console.log(playerScore);
		console.log(computerScore);
		console.log(
			'You chose: ' +
				playerSelection +
				', the computer chose:' +
				computerSelection +
				', ' +
				playRound(playerSelection, computerSelection)
		);
	}
	console.log(
		'Your Score: ' + playerScore + ' Computer Score: ' + computerScore
	);
}
game();
