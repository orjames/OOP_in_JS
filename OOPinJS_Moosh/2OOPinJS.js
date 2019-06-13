// object literal syntax
// const cirlce = {
//   radius: 1, // these are properties
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function() {
//     //method
//     console.log('draw');
//   }
// };
// cirlce.draw();

// // Factory Function
// function createCircle(radius) {
//   return {
//     radius: radius,
//     draw: function() {
//       //method
//       console.log('draw');
//     }
//   };
// }

// const circle = createCircle(1);
// circle.draw();

// // Constructor Function
// function Circle(radius) {
//   //prettier-ignore
//   this.radius = radius,
//   this.draw = function() {
//       console.log('draw');
//   };
// }

// // this is the exact same as new Circle(1)
// Circle.call({}, 1);
// // apply method passes in an array.
// Circle.apply({}, [1, 2, 3, 4]);

// const another = new Circle(1); // new creates new {} this changes where it points to, away from global object, window

// value Types aka primitives
// number, string, boolean, symbol, undefined, null

// Reference Types (aka objects)
// object, funciton, array

// // both x and y are pointing to the object
// let x = { value: 10 };
// let y = x;

// x.value = 20;
// // take-away Primitives are copied by their value, Objects are copied by thier reference

// // PRIMITIVE TYPES (COPIED BY VALUE)
// let number = 10;
// // value of number is copied into the function locally as a copy
// function increase(number) {
//   number++;
// }
// increase(number); //10 because this is an idependent copy of number
// console.log(number);

// // REFERENCE TYPES (COPIED BY REFERENCE)
// let number = { value: 10 };

// function increase(obj) {
//   obj.value++;
// }
// increase(obj); //11 because this is an reference to the same obj
// console.log(obj);

// // ADDING/REMOVING PROPERTIES
// // Constructor Function
// function Circle(radius) {
//   //prettier-ignore
//   this.radius = radius,
//   this.draw = function() {
//       console.log('draw');
//   };
// }

// const circle = new Circle(10);

// // can add additional properties to an object
// // for example to user object
// // user.token = 'asdfasdf'

// // add location property to circle object
// circle.location = { x: 1 };

// const propertyName = 'location';
// circle['location'] = { x: 1 };
// circle[propertyName] = { x: 1 };

// // remove a property
// delete circle['location'];

// for (let key in circle) {
//   if (typeof circle[key] !== 'function') {
//     console.log(key, circle[key]);
//   }
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle) {
//   console.log('Circle has a radius.');
// }

//ABSTRACTION & PRIVATE PROPERTIES
// Constructor Function
function Circle(radius) {
  //prettier-ignore

  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocatoin = function() {
    return defaultLocation;
  };

  this.draw = function() {
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error('Invalid Location.');
      }

      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
circle.defaultLocation;
// circle.draw();

//STOPWATCH OBJECT

function Stopwatch() {
  let duration = 0;
  let started = false;

  this.startTimer = function() {
    duration += 0.01;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });

  Object.defineProperty(this, 'start', {
    get: function() {
      if (started) {
        throw new Error('Already started');
      }
      timerInterval = setInterval(this.startTimer, 10);
      started = true;
    }
  });

  Object.defineProperty(this, 'stop', {
    get: function() {
      if (!started) {
        throw new Error('Already stopped');
      }
      clearInterval(timerInterval);
      started = false;
    }
  });

  Object.defineProperty(this, 'reset', {
    get: function() {
      duration = 0;
      started = false;
      clearInterval(timerInterval);
    }
  });
}

const sw = new Stopwatch();
// sw.duration;
// sw.reset;
// sw.start; // cant call start twice in a row
// sw.stop; // cant call stop twice in a row

function otherStopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function() {
    if (running) throw new Error('stopwatch has already started');

    running = true;

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) throw new Error('Stopwatch not started');

    running = false;

    endTime = new Date();

    const seconds = (endtime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}
