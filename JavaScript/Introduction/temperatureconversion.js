// Create constant variable named Kelvin and set to 293
let kelvin = 293;
// Convert Kelvin to Celsius by subracting 273 from kelvin
const celsius = kelvin - 273;
// Calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
// Print temperature in degrees Fahrenheit, degrees Celsius, and degrees Kelvin
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, ${celsius} degrees Celsius, and ${kelvin} degrees Kelvin.`);
