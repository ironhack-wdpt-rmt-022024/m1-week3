// Deleting object properties

const person3 = {
  firstName: "Sarah",
  lastName: "Connor",
  movie: "Terminator",
  age: 29
}

console.log('BEFORE person3 ->', person3);


delete person3.firstName;
console.log('delete person3.firstName', person3);


delete person3["lastName"];
console.log('delete person3["lastName"]', person3)


const keyName = "movie";

delete person3[keyName];
console.log('delete person3[keyName]', person3);



