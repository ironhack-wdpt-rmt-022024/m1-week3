// Creating an Object

// object literal <-
const obj = {};
console.log('obj', obj);


// Object constructor/class syntax
const obj2 = new Object();
console.log('obj2', obj2);


// Object syntax
/*
const obj = {
  key: value,
  key: value
}
*/


const person = {
  name: "Sarah",
  age: 29
}

// The above is the equivalent of doing:
// const person = {}
// person.name = "Sarah";
// person.age = 29;

console.log('person', person)