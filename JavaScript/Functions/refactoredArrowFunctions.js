// Original function
const volumeOfSphere = (diameter) => {
  return (1/6) * Math.PI * diameter * diameter * diameter;
};

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

// Function refactored as concise body
const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;
console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
