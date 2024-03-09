// Non-mutating array methods

//                   0         1        2           3
const students = ["mafhoz", "fatma", "michael", "mahendra"];
console.log(students);


// Create a string from an array of elemets - .join()
const res1 = students.join(" * ");
// console.log('res1', res1);


// Split a string on a specified character and convert to array - str.split()
const dogNames = "pretzel sandy loky gato";

const names = dogNames.split(" ");
// console.log('names', names);



// Revrsing a string by combining these methods
const reversed = dogNames.split(" ").reverse().join(" ");
// console.log('reversed', reversed)


// Copy elements from an array (non-mutating) - .slice()
// arr.slice(begin, end(exlusive) )
const pairProgramming = students.slice(1, 3);
console.log('pairProgramming', pairProgramming);

console.log('students', students);


// Join two or more arrays - .concat()
const group1 = ['alex', 'adrian'];
const group2 = ['michael', 'laura'];
const group3 = ['mimmy', 'rafael'];


const team = group1.concat(group2, group3);
console.log('team', team);

console.log('group2', group2)





