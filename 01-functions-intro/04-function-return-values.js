// Functions can return any data type from within

function returnNumber () {
  return 1 + 2;
}

function returnString () {
  return "Howdy!!!"
}

function returnArr () {
  return [1, 2, 3, 'a'];
}

function returnObj () {
  return { 
    name: "bob",
    age: 21
  }
}

function returnFunc () {
  return function () {
    console.log("I'm the inner function!")
  }
}

console.log( returnNumber() );
console.log( returnString() );
console.log( returnArr() );
console.log( returnObj() );
console.log( returnFunc() );

const myFunc = returnFunc();
myFunc();

// Chain function invocations when returning a function
returnFunc()()


// Functions in JS are just objects
console.log(returnFunc instanceof Object);