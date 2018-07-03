/*
Use ES6 method syntax to add a method called .sayGoodbye() inside the person object. The method shouldn't accept any parameters.
Inside the function's code block return the string, 'Goodbye!'.
*/
let person = {
  name: 'Andrew',
  age: 26,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => {
  	return 'Hello, there!';
  },
  sayGoodbye() {
  return 'Goodbye!';
  }
};

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
