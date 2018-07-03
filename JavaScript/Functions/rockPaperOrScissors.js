// Create a function named getUserChoice which has a single parameter userInput
const getUserChoice = userInput => {
// Make all provided input lower case
userInput = userInput.toLowerCase();
// Validate that userInput is equal to rock, paper, or scissors
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
	return userInput;
} else {
	return 'Invalid input. Accepted input is either rock, paper, or scissors.'
}
}
// Create a new function named getComputerChoice with no parameters
const getComputerChoice = () => {
	const computerChoice = Math.floor(Math.random() * 3)
	if (computerChoice == 0) {
		return 'rock';
	} else if (computerChoice == 1) {
		return 'paper';
	} else if (computerChoice == 2) {
		return  'scissors';
	}
}

// Create a function to determine the winner using parameters userChoice and computerChoice
const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return `The game is a tie. Both players selected ${userChoice}`;
} else if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'User has won.';
  } else {
    return 'Computer has won.';
  }
} else if (userChoice === 'scissors') {
  if (computerChoice === 'paper') {
    return 'User has won.';
 	} else {
    return 'Computer has won.';
  	}
} else if (userChoice === 'bomb') {
  return `User has selected ${userChoice}. User wins!`;
	}
}

// Create a function called playGame
const playGame = () => {
	const userChoice = getUserChoice('bomb');
	const computerChoice= getComputerChoice();
	console.log(`User selected ${userChoice}.`);
	console.log(`Computer selected ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
};

//Run the game
playGame();
