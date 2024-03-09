const book = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
  	language: "English",
  	description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
	}
};

console.log('book.title', book.title);
console.log('book.details', book.details)
console.log('book.details.language', book.details.language)

// Object.keys(obj) -> returns an array with all the key names
const keys = Object.keys(book);

console.log('keys', keys);


// Object.values(obj) -> returns an array with all the own property values
const values = Object.values(book);
console.log('values', values);