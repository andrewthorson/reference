// Function isGreaterThan as function declaration
function isGreaterThan(numberOne, numberTwo){
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}
// Calling isGreaterThan function declaration
isGreaterThan(4, 8)

// Function isGreaterThan as function expression with arrow function syntax
const isGreaterThan = (numberOne,numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}
// Calling isGreaterThan function expression
isGreaterThan(4, 8)
