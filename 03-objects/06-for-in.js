// for ... in statement
// Iterates over the object and returns its keys
/*
for (const key in <object>) {
  // Do something
}
*/
const book = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
  	language: "English",
  	description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
	}
};


// Example 1: simple loop where we print object keys:
for (const key in book) {
  console.log('key', key)
  // console.log('typeof key', typeof key)
}


// Example 2: loop over object keys and use them to access values
for (const key in book) {
  console.log( book[key] );   // key -> "title"   book["title"]
}