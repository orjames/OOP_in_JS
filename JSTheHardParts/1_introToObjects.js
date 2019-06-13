// Objects - store functions with their associated data

// object-literal
const user1 = {
  name: 'Phil',
  score: 4,
  increment: function() {
    user1.score++;
  }
};

user1.increment(); //user1.score => 4
// this is the principle of encapsulation

// Alternative techniques to creating objects
// using dot notation
const user2 = {};

user2.name = 'Julia';
user2.score = 5;
user2.increment = function() {
  user2.score++;
};

// Object.create
// build in method in JS always will store an empty object
const user3 = Object.create(null);

user3.name = 'Eva';
user3.score = 9;
user3.increment = function() {
  user3.score++;
};

// our code is getting repetitive, break it out and DRY
// suppose we have millions of users
