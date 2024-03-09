//                   0         1        2           3
const students = ["mafhoz", "fatma", "michael", "mahendra"];
console.log(students);




// Loop over an array using the for loop
for (let index = 0; index < students.length; index++) {
  // console.log( students[index] )
}


// Loop over an array in reverse
for(let index = students.length - 1; index >= 0; index--) {
  // console.log( students[index] );
}



// Loop over an array and also access string element characters
for (let index = 0; index < students.length; index++) {
  const firstLetter = students[index][0];
  const remainingLetters = students[index].slice(1)
  const uppercased = firstLetter.toUpperCase() + remainingLetters;

  console.log('uppercased', uppercased)
}



//                  0       1      2        3
// const matrix = [ [1, 2], [7, 8], [3, 2], [6, 5] ]

// matrix[1][1]