const numbers = [14, 5, 10, 23];

// Loop over array using the for loop
for (let index = 0; index < numbers.length; index++) {
  console.log( numbers[index] );
}


// Loop over arrays using the forEach method
// This method calls the provided function for each array element

numbers.forEach( function (el, i, orginalArray) {
  console.log(`${i}: ${el}`);
});
