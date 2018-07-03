let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
// Below the two existing arrays, add your favorite condiment to the condiments array using .push().
condiments.push( 'Buffalo Sauce');
// Log the updated array to the console.
console.log(condiments);
// Below your code from Step 1, reassign condiments to be an array that contains a single string.
condiments = [condiments.join()];
// Log the result to the console.
console.log(condiments);
// Below your code from Step 2, remove the last item from the utensils array using .pop().
utensils.pop();
// Log the updated array to the console.
console.log(utensils);
// Below your code from Step 3, reassign the utensils array to be a new array with only your favorite utensil inside of it.
// You should have received an error!
utensils = ['Chopsticks']; // Output: TypeError: Assignment to constant variable.
