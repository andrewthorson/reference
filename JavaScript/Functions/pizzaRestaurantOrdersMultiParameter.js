// Create takeOrder variable and set to function ()=> with parameter topping
const takeOrder = (topping, crustType) => {
// Print string with argument passed to parameter
	console.log(`Order: ${crustType} crust pizza topped with ${topping}`);
}
// Run function with arguments
takeOrder('pepperoni', 'thin'); // Output: Order: thin crust pizza topped with pepperoni
takeOrder('sardines', 'deep dish'); // Output: Order: deep dish crust pizza topped with sardines
takeOrder('sausage', 'hand-tossed'); // Output: Order: hand-tossed crust pizza topped with sausage
