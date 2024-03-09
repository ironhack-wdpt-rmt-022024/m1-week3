// Object properties - create, access and delete properties

const person2 = { 
  firstName: "Joshua",
  lastName: "George",
  age: 27,
  isStudent: false
};


console.log('person2', person2)

// Accessing object properties using dot . notation
console.log(person2.firstName);

// Update the value of an existing property
person2.firstName = "Josh";

// Create a new property on the object
person2.state = "Texas";
console.log('person2', person2);









// EXTRA
// // Ways to copy an object
// // 1.
// const person3 = Object.create({}, person2)

// // 2. Spread operator ...
// const person4 = { ...person2 }