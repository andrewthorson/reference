// Make a variable named newYearsResolutions and set it equal to an array with three strings inside of it.
const newYearsResolutions = ['Loose weight.', 'Buy a house.', 'Quit smoking.'];
// Use console.log to print newYearsResolutions to the screen.
console.log(newYearsResolutions);
// Individual elements of arrays can also be stored to variables.
// Create a variable named listItem and set it equal to the first item in your newYearsResolutions array using square bracket notation 
let listItem = newYearsResolutions[0];
// Use console.log() to print the listItem variable to the console.
console.log(listItem);
// Now, console.log() the third item in the newYearsResolutions array without using a variable.
console.log(newYearsResolutions[2]);
// Try to log the item at position [3] to the console.
console.log(newYearsResolutions[3]); // Output: undefined
// Change the second element of your newYearsResolutions array to be, 'Learn a new language'.
newYearsResolutions[1] = 'Learn a new language'
// Find the length of your newYearsResolutions array and log it to the console.
console.log(newYearsResolutions.length);
// Add two more items to your newYearsResolutions array using .push().
newYearsResolutions.push('Get a new job.', 'Take a vacation.');
// Now, use console.log to print your newYearsResolutions array to make sure your items were added.
console.log(newYearsResolutions);
// Use the .pop() method to remove the last element from your array.
// Log newYearsResolutions to the console to make sure it worked.
newYearsResolutions.pop();
console.log(newYearsResolutions);
