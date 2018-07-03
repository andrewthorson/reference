//Start out by writing a variable named myPlaces and set it equal to an array with three places you'd like to visit.
let myPlaces = ['Detroit Lakes', 'Minneapolis', 'Fargo']
//make another variable named friendPlaces and set it equal to an array with three places a friend might like to visit. At least one place from myPlaces array.
let friendPlaces = ['Chicago', 'Winnipeg', 'Fargo']
// Write a for loop that iterates through each item in myPlaces and logs out each place.
// Use myPlacesIndex as the iterator variable.
for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
	console.log(myPlaces[myPlacesIndex]);
}
// Inside of the existing for loop's block, below the console.log() statement, write another for loop that loops over friendPlaces.
// This time, rather than using the myPlacesIndex as the variable name, use friendPlacesIndex
for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
	console.log(myPlaces[myPlacesIndex]);
	for(let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
		console.log(friendPlaces[friendPlacesIndex]);
	}
}
// Delete the two console.log() statements you wrote in the previous steps.
// Inside the second for loop's block, write an if statement that checks if myPlaces[myPlacesIndex] is equal to friendPlaces[friendPlacesIndex].
// If it is, log to the console the place you have in common.
for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
	console.log(myPlaces[myPlacesIndex]);
	for(let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
		if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
			console.log(myPlaces[myPlacesIndex]);
		}
	}
}
