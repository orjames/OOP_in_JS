// Objects - store functions with their associated data

const user1 = {
  name: 'Phil',
  score: 4,
  increment: function() {
    user1.score++;
  }
};

user1.increment(); //user1.score => 4
console.log(user1.score);
// this is the principle of encapsulation
