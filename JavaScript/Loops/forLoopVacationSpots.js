// Write an array and set it equal to a variable named vacationSpots.
// Inside of this array, list three places you'd like to visit.
let vacationSpots = ['Detroit Lakes', 'Minneapolis', 'Fargo']
// Write a for loop that loops through your vacationSpots array.
// Use vacationSpotIndex as your iterator variable.
// Inside the block of the for loop, use console.log() to print each item in the vacationSpots array.
for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex ++) {
  console.log(vacationSpots[vacationSpotIndex]);
}
// Now, add text to the console.log() statement
for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex ++) {
  console.log("I would love to visit " + vacationSpots[vacationSpotIndex]);
}
