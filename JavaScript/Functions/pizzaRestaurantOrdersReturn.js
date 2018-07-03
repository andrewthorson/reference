// Create orderCount variable equal to 0
let orderCount = 0;
// Create takeOrder variable and set to function ()=> with parameter topping
const takeOrder = (topping, crustType) => {
// Add 1 to orderCount variable each time that takeOrder function runs
orderCount += 1;
// Print string with argument passed to parameter
	console.log(`Order: ${crustType} crust pizza topped with ${topping}`);
}
// Declare a new function named getSubTotal with one parameter named itemCount, each pizza costs $7.50
const getSubTotal = (itemCount) => {
	const subTotal = itemCount * 7.5;
	return subTotal;
}
// Declare a new function named getTax for calculating sales tax due for order
const getTax = (itemCount) => {
	const tax = getSubTotal(itemCount) * 0.06;
	return tax;
}
// Declare a new function for generating the total due for an order
const getTotal = (itemCount) => {
	const total = getSubTotal(itemCount) + getTax(itemCount);
	return total;
}
// Run takeOrder function with both arguments
takeOrder('pepperoni', 'thin'); // Output: Order: thin crust pizza topped with pepperoni
takeOrder('sardines', 'deep dish'); // Output: Order: deep dish crust pizza topped with sardines
takeOrder('sausage', 'hand-tossed'); // Output: Order: hand-tossed crust pizza topped with sausage
// Run getSubTotal function with orderCount argument, then print to console
console.log('Subtotal: ' + getSubTotal(orderCount)); // Output: Subtotal: 22.5
// Run getTotal function with itemCount argument, then print to console
console.log('Total: ' + getTotal(orderCount));// Output: Total: 23.85
