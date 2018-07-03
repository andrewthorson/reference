/*
Let's make the .sayHello() method a bit more interesting. Use this to return a string that says:
`Hello, my name is ${name here}`
In place of the name here, use this to interpolate your name property.
*/
let person = {
  name: 'Andrew',
  age: 26,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => {
  	return 'Hello, my name is ${this.name}';
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
