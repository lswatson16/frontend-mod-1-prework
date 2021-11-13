// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// create a function called buildABear that has 5 parameters called name, age, fur, clothes, and specialPower.
function buildABear(name, age, fur, clothes, specialPower) {
  // inside the function buildABear is a variable called greeting assigned to a string interpolation
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // inside the function buildABear is an array called demographics with 2 array items, name & age
  var demographics = [name, age];
  // inside the function buildABear is a variable called powerSaying with a concatenated string value
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // inside the function buildABear is an object called builtBear
  var builtBear = {
    // inside the object builtBear is a key called basicInfo with a value called demographics
    basicInfo: demographics,
    // inside the object builtBear is a key called clothes with a value called clothes
    clothes: clothes,
    // inside the object builtBear is a key called exterior with a value called fur
    exterior: fur,
    // inside the object builtBear is a key called cost with an integer value of 49.99
    cost: 49.99,
    // inside the object builtBear is a key called sayings that holds an array
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // inside the object builtBear is a key called isCuddly that will return a boolean value
    isCuddly: true,
  };
// return the object builtBear
  return builtBear
}
// passing arguments to the function buildABear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// passing arguments to the fuction buildABear
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// create a function fizzBuzz with parameters num1, num2, & range
function fizzBuzz(num1, num2, range) {
  // create a for loop inside the function fizzBuzz
  // starting at the index 0, the code will run under the condition that i is less
  // than or equal to range; and the value of i will increment by 1 after each iteration
  for (var i = 0; i <= range; i++) {
    // create a conditional statement using logical operator AND
    // both conditions joined by the logical operator must evaluate as true in order
    // to run the code block within the if statement
    // if the remainder of i and num1 is strictly equal to 0 AND if the remainder
    // of i and num2 is strictly equal to 0, then run the code block
    if (i % num1 === 0 && i % num2 === 0) {
      // print "fizzBuzz" to the console
      console.log('fizzbuzz');
      // if the remainder of i and num1 is strictly equal to 0 then run the code block
    } else if (i % num1 === 0) {
      // print "fizz" to the console
      console.log('fizz');
      // if the remainder of i and num2 is strictly equal to 0 then run the code block
    } else if (i % num2 === 0) {
      // print "buzz" to the console
      console.log('buzz');
      // if the conditions evaluate as false
    } else {
      // print the value of i to the console
      console.log(i);
    }
  }
}

// passing arguments to the function fizzBuzz
fizzBuzz(3, 5, 100);
// passing arguments to the function fizzBuzz
fizzbuzz(5, 8, 400);
