// Solution 1. Generate objects using a function
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser;
}

const user1 = userCreator('Phil', 4);

// problem is the increment method is on every object created
// this is impossible because suppose we had 100 functions
// they would be available on every single user
// we want just one copy of the increment function

/* Solution 2. Store the increment function in just one 
function and have the interpreter look up to that object
if it can't find the function on the user obj*/

// How do we make this link? Prototype chain.

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

// uses the protypal feature if looking in an object for
// a property that JS can't find, it will look under
// __proto__
