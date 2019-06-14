// SUBCLASSING
/* A core aspect of OOP approach is inheritance
or passing knowledge down */

// Subclassing in solution 2
// factory function approach

function userCreator(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

userFunctions = {
  sayName: function() {
    console.log("I'm " + this.name);
  },
  increment: function() {
    this.score++;
  }
};
const user1 = userCreator('Phil', 5);

user1.sayName(); // "I am Phil"

/* --------------------------------- */
// Interlude - call and apply
/* we have another way of running a function that allow
us to control the assignment of this */

const obj = {
  num: 1,
  increment: function() {
    this.num++;
  }
};

const otherObj = {
  num: 10
};

obj.increment(); // obj.num now 4

obj.increment.call(otherObj); // otherObj now 11
obj.increment.apply(otherObj); // otherObj now 12

/* this always refers to the object to the left of the dot
on which the function (method) is being called - unless we
override that by running the function using .call() or .appply()
which lets us set the value of this inside the increment funciton */

/* Subclassing using solution 3 */
function userCreator(user, score) {
  (this.name = name), (this.score = score);
}

userCreator.prototype.sayName = function() {
  console.log("I'm " + this.name);
};
userCreator.prototype.increment = function() {
  this.score++;
};

const user1 = new userCreator('Phil', 5);
const user2 = new userCreator('Tim', 4);

user1.sayName(); // I'm Phil

//subclassing

function paidUserCreator(paidName, paidScore, accountBalance) {
  userCreator.call(this, paidName, paidScore);
  // userCreator.apply(this, [paidName, paidScore])
  this.accountBalance = accountBalance;
}

paidUserCreator.prototype = Object.create(UserCreator.prototype);

paidUserCreator.prototype.increaseBalance = function() {
  this.accountBalance++;
};

const paidUser1 = new paidUserCreator('Alyssa;', 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();

/* --------------CORRECT SOLUTION--------------- */
// SUBCLASSING WITH SOLUTION 4

class UserCreator 