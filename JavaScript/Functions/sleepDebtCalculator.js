// Create a function named getSleepHours with single parameter day
const getSleepHours = day => {
// Function should accept a day as an argument and return the number of hours slept that night
  switch (day) {
    case 'Sunday':
      return 8;
      break;
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 8;
      break;
    case 'Wednesday':
      return 8;
      break;
    case 'Thursday':
      return 8;
      break;
    case 'Friday':
      return 8;
      break;
    case 'Saturday':
      return 8;
      break;
             }
}

// Create a new function getActualSleepHours with no parameters that will return the sum of weeks total hours slept.
const getActualSleepHours = () => getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday');

// Create a function named getIdealSleepHours with no parameters
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

// Create a function named calculateSleepDebt with no parameters
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You have gotten the ideal amount of sleep this week.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some more rest.');
	} else if (actualSleepHours > idealSleepHours) {
    console.log('You have gotten more rest than is needed this week.');
  }
  };
// Call the calculateSleepDebt function
calculateSleepDebt();
