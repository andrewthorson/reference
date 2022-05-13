/**
* <h1>Math Magic</h1>
* In this project, you will become a mathemagician and write
* a small program that performs a mathematical magic trick!
* It will involve performing arithmetic operations on an
* integer that you choose.
*
* @author  Andrew Thorson
* @version 1.0
* @since   2022-05-13
*/
public class Magic {
	public static void main(String[] args) {
    /*
      Method performs a series of operations dependent on
      an interger declared as the myNumber variable. The
      result is always 2.
    */
  
    // Create an int variable for the original number.
    int myNumber = 4;

    // Create a new variable equal to the original number multiplied by itself.
    int stepOne = myNumber^2;

    // Create a new variable equal to the squared number plus the original number.
    int stepTwo = stepOne + myNumber;

    // Create a new variable equal to the previously declared variable divided by the original number.
    int stepThree = stepTwo / myNumber;

    // Create a new variable equal to the previusly declared variable plus 17.
    int stepFour = stepThree + 17;

    // Create a new variable equal to the perviously declared variable minus the original number.
    int stepFive = stepFour - myNumber;

    // Create a new variable equal to the previously declared variable divided by 6.
    int stepSix = stepFive / 6;

    // Print the previously declared variable to the console.
    System.out.println(stepSix);

	}
}
