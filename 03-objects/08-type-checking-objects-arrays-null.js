const myArr = [];
const myObj = {};
const myNull = null;


console.log(typeof myArr);
console.log(typeof myObj);
console.log(typeof myNull);

// ARRAY
// Check if a value is an array
if (Array.isArray(myArr)) {
  console.log("value is an array!")
}

// Check if the value is not an array
if (!Array.isArray(myObj)) {
  console.log("value is not an array.")
}


// OBJECT
// Check if the value is an object (and not null)
if (typeof myObj === "object" && myObj !== null) {
  console.log("value is an object.")
}

// NULL
if (myNull === null) {
  console.log("value is null")
}