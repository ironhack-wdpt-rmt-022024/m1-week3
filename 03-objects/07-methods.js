const person4 = {
  firstName: "John",
  lastName: "Carr",
  age: 30,
  isStudent: false,
  projects: null,
  friends: [],
  address: {
    street: "123 Some Ave."
  },
  sayHello: function () {      // Method
    console.log("Hi there!");
  },
  // method shorthand syntax
  // sayHello() {

  // },

  sayGoodbye: () => {
    console.log("Goodbye!")
  }

}

person4.sayHello();
person4.sayGoodbye();