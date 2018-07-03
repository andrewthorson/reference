/*
Meal Maker
As a frequent diner, you love trying out new restaurants and experimenting with different foods.
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big,
and you want an easier way to be able to figure out what you are going to eat.

In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu.
We'll keep running it until we're satisfied with the generated meal!
*/

// Start by creating an empty menu object.
// Add a _courses property to your menu object and set its value to an empty object. This property will ultimately contain a mapping between each course and the dishes available to order in that course.
const menu = {
	_courses: {
		appetizers: [],
		mains: [],
		desserts: []
  },
	get appetizers() {
	},
 	set appetizers(appetizersIn) {
	},
	get mains() {
	},
	set mains(mainsIn) {
	},
	get desserts() {
	},
	set desserts(dessertsIn) {
	},
  get courses() {
		return {
   		appetizers: this._courses.appetizers,
    	mains: this._courses.main,
    	desserts: this._courses.desserts}
	},
 	addDishToCourse (courseName, dishName, dishPrice) {
   	const dish = {
      name: dishName,
      price: dishPrice
    };
  	this._courses[courseName].push(dish);  
 	},
	getRandomDishFromCourse (courseName) {
  	const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `A meal including ${appetizer.name}, ${main.name}, and ${dessert.name} will cost ${totalPrice}.`
  }
};

menu.addDishToCourse('desserts', 'Special Brownies', 4.20);
menu.addDishToCourse('desserts', 'Special Cookies', 8.40);
menu.addDishToCourse('desserts', 'Special Ice Cream', 16.80);
menu.addDishToCourse('mains', 'Pizza', 7.89);
menu.addDishToCourse('mains', 'Cheeseburger', 3.99);
menu.addDishToCourse('mains', 'Pasta', 19.99);
menu.addDishToCourse('appetizers', 'Breadsticks', 1.99);
menu.addDishToCourse('appetizers', 'Meatballs', 4.99);
menu.addDishToCourse('appetizers', 'Onion Rings', 7.99);

let meal = menu.generateRandomMeal();
console.log(meal);
// console.log(menu._courses.mains);
