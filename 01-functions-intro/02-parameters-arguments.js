// Task: sum numbers (take 2 numbers)
//   Steps:
//   1. sum the 2 numbers
//   2  print the sum



//                   parameters - placeholders
function sumNumbers (a, b) {  
  const result = a + b;
  console.log(result);
}

//         arguments
sumNumbers(10,  20);
sumNumbers(5,  3);
sumNumbers(1 , 1);


const sumNumbers2 = (a, b) => {
  // Parameters are function's internal variables
  // const a = 100;
  // const b = 50;

  const result = a + b;
  console.log(result);
}

sumNumbers2(100, 50);
