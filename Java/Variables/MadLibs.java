/**
* <h1>Java Variables: Mad Libs</h1>
* In this project, we’ll use Java to write a Mad Libs word 
* game! Mad Libs have short stories with blank spaces that a 
* player can fill in. The result is usually funny (or
* strange).
*
* Mad Libs require:
* <ul>
*   <li>A short story with blank spaces (asking for different types of words).</li>
*   <li> Words from the player to fill in those blanks.</li>
* </ul>
*
* For this project, we have provided the story, but it will
* be up to you to complete the following:
*
* Create all the variables needed for the story.
* Print the story with the variables in the right places.
* <ol>
*   <li>Create all the variables needed for the story.</li>
*   <li>Print the story with the variables in the right places.</li>
* </ol>
*
* @author  Andrew Thorson
* @version 1.0
* @since   2022-05-13
*/
public class MadLibs {
  /*
  This program generates a mad libbed story.
  Author: Andrew
  Date: 2022-05-13
  */
  	public static void main(String[] args){
      
      // Declare variables
      // Names
      String name1 = "Woody";
      String name2 = "Weller";
      // Adjectives
      String adjective1 = "smart";
      String adjective2 = "cute";
      String adjective3 = "soft";
      // Verbs
      String verb1 = "bark";
      // Nouns
      String noun1 = "street";
      String noun2 = "couch";
      String noun3 = "bowl";
      String noun4 = "bed";
      String noun5 = "kennel";
      String noun6 = "bone";
      // Proper Noun - Place
      String place1 = "Tampa Bay";
      // Whole Number
      int number = 6;
      
      // The template for the story
      String story = "This morning " + name1 + " woke up feeling " + adjective1 + ". 'It is going to be a " + adjective2 + " day!' Outside, a bunch of " + noun1 + "s were protesting to keep " + noun2 + " in stores. They began to " + verb1 + " to the rhythm of the " + noun3 + ", which made all the " + noun4 + "s very " + adjective3 + ". Concerned, " + name1 + " texted " + name2 + ", who flew " + name1 + " to " + place1 + " and dropped " + name1 + " in a puddle of frozen " + noun5 + ". " + name1 + " woke up in the year " + number + ", in a world where " + noun6 + "s ruled the world.";

      // Print story to console.
      System.out.println(story);

    }       
}
