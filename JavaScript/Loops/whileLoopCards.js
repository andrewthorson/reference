let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
// Below the array cards, create a variable named currentCard and set it equal to 'Spade'.
// This variable will hold the name of the card we just flipped. We are using 'Spade' as the first card.
let currentCard = 'Heart';
// Create a while loop. The condition should check if the currentCard is NOT a 'Spade'.
// Inside the while loop, log the value of currentCard to the console.
// Add the following code below that: currentCard = cards[Math.floor(Math.random() * 4)];
while (currentCard != 'Spade') {
	console.log(currentCard);
	currentCard = cards[Math.floor(Math.random() * 4)];
	// This code will generate a random number between 0 and 3, the range of indices of the cards array, and reassign currentCard to a new card from that array. Because the while loop only runs if the card is NOT a Spade, the value of currentCard will only be logged to the console if it is not 'Spade'.
}
// Outside the while loop, on the last line of the program, use console.log() to log that the program found a spade.
// You can use the string "found a spade" inside console.log().
console.log('found a spade')
