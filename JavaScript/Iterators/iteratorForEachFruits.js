let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.
// Use function(parameter) syntax for this step (not arrow function => syntax).
// Iterate over fruits below
fruits.forEach(function(fruitsType){
  console.log(`I want to eat a ${fruitsType}`);
});
// Refactor the .forEach() call you just wrote using arrow function syntax instead.
fruits.forEach(fruitsType => console.log(`I want to eat a ${fruitsType}`));
