/*
	🔴 RED:  Write a test that fails. Think of it as setting a goal for our code.
	🟢 GREEN: Write just enough code to make the test pass.
	🟠 REFACTOR: Improve the code quality by refactoring.
*/

// Function that converts a value from cents 
// to a floating point number with 2 decimals


function centsToDecimals(cents) {
  // Check if the argument is not passed
  if (cents === undefined) {
    return 0;
  }
  else if (typeof cents === "string") {
    return undefined;
  }
  return cents * 0.01;
}


console.log("Should convert cents value to a floating point number with 2 decimals")
console.log( centsToDecimals(103) === 1.03  )
console.log( centsToDecimals(25) === 0.25  )

console.log("\nShould return `undefined` when the first argument passed is a string")
console.log( centsToDecimals("123") === undefined );


console.log("\nShould return 0 when the first argument is not passed");
console.log( centsToDecimals() === 0 );

