// Encapsulation

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + this.overtime * this.rate;
  }
};
employee.getWage();

// Abstraction
// simpler interface, reduce the impact of change

// Inheritance
// mechanism that allows you to eliminate redundant code

// Polymorphism
// many forms
// allows you to eliminate many if and else statements
// method will behave differently depending on the type of object performing it on
