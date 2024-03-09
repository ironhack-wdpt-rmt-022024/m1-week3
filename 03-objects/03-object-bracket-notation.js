// Object properties - create, access and delete properties

const person2 = { 
  firstName: "Joshua",
  lastName: "George",
  age: 27,
  isStudent: false
};


// Accessing object properties using bracket [] notation
// Dynamic way to access object properties


console.log('person2["firstName"]', person2["firstName"])

// person2["firstName"]
// person2.firstName

const key = "isIronhacker";

person2[key] = true;
person2["techSkill" + 1] = "JS";    //  person2["techSkill1"] = "JS"
person2["techSkill" + 2] = "React";

console.log('person2', person2)