// Mutating Array methods - pop() push() unshift() shift() splice()


//                   0         1        2           3
const students = ["mafhoz", "fatma", "michael", "mahendra"];
console.log(students);


// Remove last element from an array - .pop()
const mahendra = students.pop();
console.log('mahendra', mahendra)


// Add an element at the  end of an array - .push()
students.push("rafael", "mimmy", "alex");
console.log('students', students);


// Remove the first element from an array - .shift()
const mafhoz = students.shift();

console.log('mafhoz', mafhoz)
console.log('students', students);


// Add an element to the beginning of the array - .unshift()
students.unshift("Uros");
console.log('students', students);


// Remove multiple elements startig from a specific index - .splice()
// .splice() always returns an array with removed elements

const removed = students.splice(1, 3, "Eric");

console.log('removed', removed);
console.log('students after splice\n', students);



