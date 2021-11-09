/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

}

var chihuahua = new Dog();
console.log(chihuahua);

var poodle = new Dog();
console.log(poodle);

// Prompt 2: Snack
class Snack {

}

var lollipop = new Snack()
console.log(lollipop);

var apple = new Snack()
console.log(apple);

// Prompt 3: Shirt
class Shirt {

}

var hawaiiShirt = new Shirt()
console.log(hawaiiShirt);

var whiteShirt = new Shirt()
console.log(whiteShirt);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog2 {
  constructor(){
    this.size = "small"
    this.friendly = 9;
    this.isFriendlyKids = true;
  }
}

var maltese = new Dog2();
console.log(maltese);

// Prompt 2: Snack

class Snack2 {
  constructor(){
    this.taste = "sour";
    this.quantity = 1023;
    this.isplastic = true;
  }
}

var sourPatchCandy = new Snack2()
console.log(sourPatchCandy);

// Prompt 3: Shirt

class Shirt2 {
  constructor(){
    this.sleeve = "no sleeves";
    this.type = "tank top";
    this.length = "waist length";
  }
}

var floralShirt = new Shirt2()
console.log(floralShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog3 {
  constructor(sizeDog, friendlyLevel, goodWithKids) {
    this.size = sizeDog;
    this.friendly = friendlyLevel;
    this.isFriendlyKids = goodWithKids;
  }
}

var yorkie = new Dog3("small", 10, true);
console.log(yorkie);

var greatDane = new Dog3("large", 5, false);
console.log(greatDane);

// Prompt 2: Snack

class Snack3 {
  constructor(tasteBuds, totalQuantity, plastic){
    this.taste = tasteBuds;
    this.quantity = totalQuantity;
    this.isPlastic = plastic;
  }
}

var potatoChips = new Snack3("salty", 304, true)
console.log(potatoChips);

var mango = new Snack3("sweet", 12, false)
console.log(mango);

// Prompt 3: Shirt

class Shirt3 {
  constructor(sleeveStyle, shirtType, shirtLength){
    this.sleeve = sleeveStyle;
    this.type = shirtType;
    this.length = shirtLength;
  }
}

var hawaiiShirt = new Shirt3("short sleeve", "silky shirt", "hip length")
console.log(hawaiiShirt);

var whiteShirt = new Shirt3("short sleeve", "t-shirt", "knee length")
console.log(whiteShirt);
