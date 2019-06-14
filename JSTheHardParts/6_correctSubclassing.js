/* --------------CORRECT SOLUTION--------------- */
// SUBCLASSING WITH SOLUTION 4

class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  sayName() {
    console.log('I am ' + this.name);
  }
  increment() {
    this.score++;
  }
}

const user1 = new UserCreator('Phil', 4);
const user2 = new UserCreator('Tim', 4);

user1.sayName();

class PaidUser extends UserCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    this.accountBalance = accountBalance;
  }
  increaseBalance() {
    this.accountBalance++;
  }
}

const paidUser1 = new paidUserCreator('Alyssa', 8, 25);

paidUser1.increaseBalance();

paidUser1.sayName();
