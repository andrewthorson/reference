/*

Build a Library
Congratulations, you've passed the grueling rigmarole of librarian school and have become head librarian at your local Books-'N-Stuff.

Just as you sit down, eager to utilize all those skills you learned in "Lib 203 - Shushing: How to Maintain Order While Spitting", you realize you're still using index cards to handle everything.

But no matter, you know some JavaScript, so let's get to work modernizing your new digs.

Books-'N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

BOOK
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
MOVIE
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
If you're looking for a challenge, try to create the four classes without using the steps below.

*/

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(checkOutStatus) {
    this._isCheckedOut = checkOutStatus;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating,0);
    return ratingsSum / this.ratings.length;
  }
  addRating(newRating) {
    this._ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

/*
Nice work! If you've made it this far, you clearly have a strong understanding of class syntax and inheritance.

If you would like to continue working on this project, we have listed some avenues to build on your existing progress.

Add more properties to each class (movieCast, songTitles, etc.)
Create a CD class that extends Media.
In .addRating(), make sure input is between 1 and 5.
Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
Create class called Catalog that holds all of the Media items in our library.
*/
