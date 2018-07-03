/* Create userName variable */
let userName = ``

/* Ternary expression to determine introduction */
userName ? console.log(`Hello, ${userName}!`):
	console.log(`Hello!`);

/* Create a variable named userQuestion */
let userQuestion = `Will I ever learn JavaScript?`

/* Restate question with statement based on userName value */
userName ? console.log(`${userName} asked, ${userQuestion} Let's ask the Magic Eight Ball!`):
	console.log(`Let's get an answer from the Magic Eight Ball for the following question: ${userQuestion}`);

/* Create randomNumber variable and set to a random number between 0 and 7 */
let randomNumber = Math.floor(Math.random() * 8);

/* Create eightBall variable and set to empty string */
let eightBall = ``;

/* Create a control flow that takes accounts for randomNumber and assigns a value to eightBall. */
switch (randomNumber) {
  case 0:
    eightBall = `It is certain!`;
    break;
  case 1:
    eightBall = `It is decidedly so.`;
    break;
  case 2:
    eightBall = `Reply hazy, try again.`;
    break;
  case 3:
    eightBall = `Cannot predict now.`;
    break;
  case 4:
    eightBall = `Do not count on it.`;
    break;
  case 5:
    eightBall = `My sources say no.`;
    break;
  case 6:
    eightBall = `Outlook not so good.`;
    break;
  case 7:
    eightBall = `Signs point to yes!`;
    break;
}

/* Print Magic Eight Ball's answer */
console.log(`The Magic Eight Ball says: ${eightBall}`);
