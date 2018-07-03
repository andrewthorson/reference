/*
Let's add a method inside the person object.

Name the key sayHello and set it equal to a function that takes no parameters.

Inside the function's code block return the string, 'Hello, there!'.
*/

let person = {
  name: 'Andrew',
  age: 26,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => {
  	return 'Hello, there!'
  }
};

// To make sure it works, outside of the person object, call the person.sayHello() method inside of a console.log(). You should see the return statement print to the console.
console.log(person[sayHello]);


let alarm;

if (day === 'Saturday' || day === 'Sunday') {
	alarm = 'weekendAlarm';
} else {
	alarm = 'weekAlarm';
};
console.log(person[alarm]);
person.hobbies = ['Drinking beer', 'Coding'];
person.hobbies = ['Drinking beer'];
console.log(person.hobbies);
