// Create a variable named input that is equal to any phrase.
// This variable will contain the text we will translate into whale language.
let input = 'come at me, bro!';
// We will also need an array of letters that we are going to look for in the input variable.
// Since whale language only contains vowels, create an array with every vowel inside of it and set it equal to a variable named vowels.
// Whales don't consider Y a vowel.
let vowels = ['a', 'e', 'i', 'o', 'u'];
// Later, when we find a vowel in the input string, we will need somewhere to store it.
// Create a variable named resultArray and set it equal to an empty array: [].
let resultArray = [];
/* Now that we have an input phrase and the vowels we're looking for, we need to write logic that compares the input variable's text to the vowels array. Our goal is to find all the vowels in the input string.

We can do this with a for loop, going letter-by-letter to check if each letter in the input is a vowel.

Write a for loop that

starts at let i = 0,
stops at i < input.length, and
iterates by i++.
Recall that instead of i, you should choose a descriptive variable name such as inputIndex. */
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
	for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
		if (input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }
 	if (input[inputIndex] === 'e') {
    resultArray.push(input[inputIndex]);
  }
 	if (input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }
}
console.log(resultArray.join('').toUpperCase());
