/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  addLike() {
    this.numberOfLikes = this.numberOfLikes + 1;
    console.log(this.numberOfLikes);
    console.log("Your tweet has a new like!");
  }

  addComment(newComment) {
    this.comments.push(newComment);
    console.log("You have a new comment!");
  }
};

// console.log(Tweet);

var tweet101 = new Tweet("Jane Doe", "Storytime", "2021-11-9 14:23", 0, ["Cool story!", "Interesting!"]);
console.log(tweet101);


var tweet102 = new Tweet("John Doe", "Bedtime Routine", "2021-11-9 15:00", 0, ["I love your routine!"] );
console.log(tweet102);

var tweet103 = new Tweet("Sal Frenchman", "Lasagna Recipe", "2021-11-9 15:48", 0, ["I'm trying this recipe tonight"]);
console.log(tweet103);

tweet101.addLike();
console.log(tweet101);

tweet102.addComment("Yassss");
tweet102.addLike();
console.log(tweet102);

tweet102.addComment("This wouldn't work for me.");
console.log(tweet102);

tweet103.addComment("Eww! Way too much garlic!");
console.log(tweet103);
