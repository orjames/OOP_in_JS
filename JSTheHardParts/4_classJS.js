// Solution 4
/* We're writing our shared methods seperately from our object
'constructor' itself (off in the User.prototype object)
Other languages let us do this all in one place,
ES2015 lets us do so too*/

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

// ----EXACT SAME AS BELOW----

class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log('login');
  }
}

const user1 = new UserCreator('Eva', 9);

user1.increment();

// Benefits Emerging as new standard
// similar to other langauges
// 99% of devs have no idea how it works under the hood

// ------------------------------
/* JavaScript uses this proto link to give objecst,
functions and arrays a bunch of bonus functionality
All objects have default __proto__ */

const obj = {
  num: 3
};
obj.num; // 3
obj.hasOwnProperty('num'); // ? where's this method

Object.prototype; // (hasOwnProperty: FUNCTION)

/* with Object.create we override the defualt __proto__
reference to Object.prototype and replace with functionStore*/
/* But functionStore is an object so IT has a __proto__ reference
to Object.prototype - we just inercede in the chain */

// -------------------------------------
/* Arrays and functions are also objects so they get access
to all the functions in Object.prototype but also more goodies*/

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.toString(); // where is this method?
Function.prototype; // (toString: FUNCTION, call: FUNCTION, bind: FUNCTION)
multiplyBy2.hasOwnProperty('score'); // Where's this function
Function.prototype.__proto__; // Object.prototype (hasOwnProperty: FUNCTION)
