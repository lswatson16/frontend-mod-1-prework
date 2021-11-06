/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello() {
  console.log("Oh, Hello!");
}

sayHello();
sayHello();
//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name) {
  console.log(name);
}

greetMe("Kim");
greetMe("Donna");
greetMe("Alexis");


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function sumOf (numA, numB) {
  console.log(numA + numB);
}

sumOf(10, 21);
sumOf(98, 2);
sumOf(394, 76);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function concatenateString (name, movieTitle) {
  console.log(name + "'s favorite movie is " + movieTitle + ".");
}

concatenateString("Tori", "The Notebook");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:

I called the function concatenateString because thats what best describes what
the function is doing. The function's task is to print a concatenation of two strings.

I called the parameters name and movieTitle. The naming of the parameters best
describes the data stored inside the parameters. movieTitle and name are given values
when an argument is passed into the called function. 


*/
