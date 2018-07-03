let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// Use the .shift() method to remove the first item from the array groceryList.
groceryList.shift(0);
// Log the new groceryList to the console.
console.log(groceryList);
// Use the .unshift() method to add 'popcorn' to the beginning of your grocery list.
groceryList.unshift('popcorn');
// Log the new grocery list to the console.
console.log(groceryList);
/* You're in a hurry so you decide to ask a friend to help you with your grocery shopping.
	You want him to pick up the bananas, coffee beans, and brown rice. */
// Use .slice() to provide him with a list of these three things. Log this part of the list to the console.
console.log(groceryList.slice(1, 2, 3));
