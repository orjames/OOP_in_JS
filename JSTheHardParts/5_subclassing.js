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
