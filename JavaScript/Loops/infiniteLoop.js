let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){
    break;
  }
}
// This code will terminate the while loop, with the break keyword, when the condition counter === 37 is met.
// Without this code the while loop would run infinitely because there is no condition stated to "break" the loop.
