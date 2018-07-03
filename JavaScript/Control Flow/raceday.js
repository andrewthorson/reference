// Randomly assign race number
let raceNumber = Math.floor(Math.random() * 1000);
// Create a variable that indicates whether or not runner registered early
let registeredEarly = true;
// Create a variable for runner's age
let runnersAge = 3;
// Create a control flow statement that checks whether the runner is an adult and registered early
if (runnersAge >= 18 && registeredEarly) {
  raceNumber += 100;
}
// Create a control flow statement that will check age and registration time to determine race time
if (runnersAge >= 18 && registeredEarly) {
  console.log(`You are set to run with the runners 18 years of age and older who registered early. The race starts at 9:30 AM. Your assigned number is ${raceNumber}.`);
} else if (runnersAge >= 18 && !registeredEarly) {
  console.log(`You are set to run with the runners 18 years of age and older who did not register early. The race starts at 11:00 AM. Your assigned number is ${raceNumber}.`);
} else if (runnersAge < 18) {
  console.log(`You are set to run with the runners under 18 years of age. The race starts at 12:30 PM. Your assigned number is ${raceNumber}`);
} else {
  console.log(`Please visit the registration desk for more information.`)
}
