/*
To illustrate how to use a variable with bracket notation, we will need to add a couple of key-value pairs to the person object. By the end of this exercise, we will take the day of the week and determine when you need to set your alarm.

Begin by adding a key named weekendAlarm with a value of 'No alarms needed'.

Then, add another key named weekAlarm with a value of 'Alarm set to 7AM'.
*/

let person = {
  name: 'Andrew',
  age: 26,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

// Outside of the person object, create a variable named day set to today's day (i.e., Monday, Tuesday, ...).
// Then create another variable named alarm, like this:
// let alarm;
// We can declare alarm without a value at the top of our program, then set it later. Before we set it, its value will be undefined. We will set this variable in the next step.
let day = 'Tuesday';
let alarm;

/*
Under the variables you created and the person object, write an if/else statement that follows this logic:

If day is 'Saturday' or day is 'Sunday', then set alarm to 'weekendAlarm'.
If day is anything else, then set alarm to 'weekAlarm'.
*/
if (day === 'Saturday' || day === 'Sunday') {
	alarm = 'weekendAlarm';
} else {
	alarm = 'weekAlarm';
};

// Now, we can use the alarm variable to select a key in the person object.
// Inside of a console.log() statement, use bracket notation to select the value of alarm within the person object.

console.log(person[alarm]);

// Let's add a hobbies array to your person object.

// Under the person object, use dot notation to add a hobbies key and set it equal to an array of at least two of your hobbies.

person.hobbies = ['Drinking beer', 'Coding'];

// Write a console.log() to log the hobbies property to the console.
person.hobbies = ['Drinking beer'];
console.log(person.hobbies);

// Using dot notation, edit the value of your hobbies key to be an array with only one item.
// Make sure to edit your array on a line below the line on which you created it but before console.log(person.hobbies).
