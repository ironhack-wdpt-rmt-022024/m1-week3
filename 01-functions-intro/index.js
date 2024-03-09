// Functions - best practices
/* 
Naming functions

Functions are named using 'camelCase' notation

##### When naming functions use the `verbNoun`  syntax. 

##### Example `sayHello`, `printDetails`
*/


function sayHelloToMyDog () {

}


function printFullName (firstName, lastName) {
  console.log(firstName + lastName);
}



// Don't change the passed arguments
// BAD - changing the parameters invites bugs and creates bug prone code
function concatFullName (firstName, lastName) {
  firstName = firstName + ' ' + lastName;
  return firstName;
}


// GOOD
function concatFullName(firstName, lastName) {
  const result = firstName + ' ' + lastName; // arguments are not tampered with 
  return result;
}