// Write an array and set it equal to a variable named vacationSpots.
// Inside of this array, list three places you'd like to visit.
let vacationSpots = ['Detroit Lakes', 'Minneapolis', 'Fargo']
// Write a for loop that loops through your vacationSpots array.
// Use vacationSpotIndex as your iterator variable.
// Inside the block of the for loop, use console.log() to print each item in the vacationSpots array in backwards order.
for (let vacationSpotIndex = vacationSpots.length; vacationSpotIndex >= 0; vacationSpotIndex --) {
  console.log("I would love to visit " + vacationSpots[vacationSpotIndex]);
}
// Output:
// I would love to visit undefined
// I would love to visit Fargo
// I would love to visit Minneapolis
// I would love to visit Detroit Lakes
// This loop printed undefined because vacationSpots[3] does not exist.
// Because arrays start counting at 0, the start condition needs to be the length of the vacationSpots array minus 1.
for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex --) {
  console.log("I would love to visit " + vacationSpots[vacationSpotIndex]);
}
