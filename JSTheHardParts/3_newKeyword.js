function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log("you're logged in");
  }
};

const user1 = userCreator('Phil', 4);
const user2 = userCreator('Julia', 5);
user1.increment();

const user1 = new userCreator('Phil', 4);

// when we call the constructor function wihth the new
// in front, we automate 2 things;
// 1. create a new user object
// 2. return the new user object
// ---------------------------
// but now we need to adjust how we write the body of
// userCreator - how can we:
// Refer to the auto-created object?
// Know where to put our single copies of functions?

// ---------
// Interlude - functions are both objects and functions

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5;
multiplyBy2(3); // 6

multiplyBy2.stored; // 5
multiplyBy2.prototype; // {}

//---------------------------------------------
// Complete Solution 3

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  this.score++;
};
UserCreator.prototype.login = function() {
  console.log('login');
};

const user1 = new UserCreator('Eva', 9);
user1.increment();

// 99% of developers don't understand how this works
// need to have the capital first letter in the function

//-------------------------------------------------
/* What if we wanted to organize our code inside one
of our shared functions - perhaps by defining a new
inner function */

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  function add1() {
    this.score++;
  }

  // const add1 = function()(this.score++)
  add1();
};
UserCreator.prototype.login = function() {
  console.log('login');
};

const user1 = new UserCreator('Eva', 9);
user1.increment();

// --------------------------------------------
// using arrow functions changes where "this" inside
// its execution context is going to refer to whatever
// this was when it was defined

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  const add1 = () => {
    this.score++;
  };
  add1();
};
UserCreator.prototype.login = function() {
  console.log('login');
};

const user1 = new UserCreator('Eva', 9);
user1.increment();

/* arrow functions bind "this" lexically. Lexical means position on the page. */
