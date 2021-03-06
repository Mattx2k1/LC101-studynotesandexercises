// 8.1 Arrays are like strings

/* Arrays are similar to strings, but are a more general collection type. Like strings, arrays are a sequence of values that can be accessed via an ordered index. Unlike strings, arrays can store data of any type.

The figure below demonstrates an array of named languages. The array contains four strings, each of those values has an index position. */

/* 8.1.1. Declaring an Array
Programmers use multiple ways to declare a new array. The simplest way is to use array literal notation []. Anything enclosed in the square brackets will be items in the array. Each item should be followed by a comma ,. If there are no items inside the brackets, then the array is considered empty. */

let emptyArray = [];

let programmingLanguages = ["Javascript", "Python", "Java", "C#"];

// Array items can also be declared on multiple lines.

let javaScriptFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Vue"
];

/* 8.1.2. Array Length
To check the length of an array, use the length property, just like with strings. JavaScript array length is NOT fixed, meaning you can add or remove items dynamically.

Note
In other languages, such as Java and C#, arrays are of a static length requiring the length of the array to be declared upon creation. */

// Print out the length of two arrays

console.log(emptyArray.length);
console.log(programmingLanguages.length);

/* 8.1.3. Varying Data Types
JavaScript arrays can hold a mixture of values of any type. For example, you can have an array that contains strings, numbers, and booleans. */

let grabBag = ["A string value", true, 99, 105.5];

/* Note
It’s rare that you would store data of multiple types in the same array, because grouped data is usually the same type. In other languages, such as Java and C#, all items in an array have to be of the same type.
*/

/* 8.1.4. Check Your Understanding
Question
What is the length of the two arrays?

Hint: look closely at the quotes in the classes array.
//

let classes = ["science, computer, art"];

let teachers = ["Jones", "Willoughby", "Rhodes"];

//
How can you change the classes array declaration to have the same number of items as the teachers array? */


/* 8.2. Working With Arrays
8.2.1. Bracket Notation and Index
As previously discussed, arrays are an ordered collection where each item can be accessed via index. Similar to strings, an index in an array is the number order given to items. Individual items can be accessed using bracket notation (array[index]). Indexes are zero-based, going from 0 to array.length-1. */

/* Example
Use bracket notation and index to access items in an array. */

let programmingLanguages2 = [
  "JavaScript", // index 0
  "Python",    //  index 1
  "Java",     //   index 2
  "C#"       //    index 3
];

console.log(programmingLanguages2[0]);
console.log(programmingLanguages2[3]);

// What will happen when index 4 is requested?

console.log(programmingLanguages2[4]);

/* Notice above that undefined was printed out when index 4 was referenced. undefined is returned when you request an index that the array does not contain.

Note
undefined is a special value in JavaScript that means no value has been assigned. We will discuss undefined more later in the class.

Example
undefined will be returned for any index that is outside of the array's index range. */

// let programmingLanguages = ["JavaScript", "Python", "Java", "C#"]; // already done line 12

console.log(programmingLanguages[-1]);
console.log(programmingLanguages[100]);

/* 8.2.2. Arrays are Mutable
In programming, mutability refers to what happens when you attempt to change a value. Remember that strings are immutable, meaning that any change to a string results in a new string being created. In contrast, arrays are mutable, meaning that individual items in an array can be edited without a new array being created. 

Example
Update an item in an array using bracket notation and index. */

let javaScriptFrameworks2 = ["React", "Angular", "Ember"];
console.log(javaScriptFrameworks2);

// Set the value of index 2 to be "Vue"
javaScriptFrameworks2[2] = "Vue";

//Notice the value at index 2 is not "Vue"
console.log(javaScriptFrameworks2);

/* 8.3. Array Methods
As with strings, JavaScript provides us with useful methods for arrays. These methods will either alter an existing array, return information about the array, or create and return a new array.

8.3.1. Common Array Methods
Here is a sample of the most frequently used array methods. More complete lists can be found here:

W3 Schools Array Methods
MDN Web Docs
 */



// 
// Methods That Return Information About The Array
//

// includes - arrayName.includes(item) 
// Checks if an array contains the specified item

//indexOf - arrayName.indexOf(item)
// Returns the index of the FIRST occurrence of an item in the array. If the item is not in the array, -1 is returned.

// 
// Methods That Rearrange The Entries In The Array
//

// reverse - arrayName.reverse()
// Reverses the order of elements in an array

// sort - arrayName.sort()
// Arranges the elements of an array into increasing order (sort of (AKA Kinda) =p)

//
// Methods That Add Or Remove Entries From An Array
//

// pop - arrayName.pop()
// Removes and returns the LAST element in an array

// push - arrayName.push(item1, item2, ...) 
// Adds one or more items to the END of an array and returns the new length

// shift - arrayName.shift()
// Removes and returns the FIRST element in an array

// splice - arrayName.splice(index, number, item1, item2, ...)
// Adds, removes, or replaces one or more elements anywhere in the array

// unshift - arrayName.unshift(item1, item2, ...)
// Adds one or more items to the START of an array and returns the new length

//
// Methods That Create New Arrays
//

// concat - arr.concat(otherArray1, otherArray2, ...)
// Combines two or more arrays and returns the result as a new array

// join - arr.join('connector')
// Combines all the elements of an array into a string

//slice - arr.slice(start index, end index)
// Copies selected entries of an array into a new array

// split - stringName.split('delimiter')
// Divides a string into smaller pieces, which are stored in a new array

/* 8.3.2. Check Your Understanding
Follow the links in the table above for the sort, slice, split and join methods. Review the content and then answer the following questions.

//
Question
What is printed by the following code?

//
let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);
//

[350, 23, 47, 'Tech', 'coder']
['coder', 'Tech', 23, 47, 350]
[23, 47, 350, 'coder', 'Tech']
[23, 350, 47, 'Tech', 'coder']

//
Question
Which statement converts the string str = 'LaunchCode students rock!' into the array ['LaunchCode', 'students', 'rock!']?
//

str.join(" ");
str.split(" ");
str.join("");
str.split("");

//
Question
What is printed by the following program?

//
let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];
//
----------------------------------------------
selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);
['chips', 'cucumbers', 'edamame']
['chips', 'cucumbers', 'edamame', 'milk']
['cheese', 'chips', 'cucumbers']
['cheese', 'chips', 'cucumbers', 'edamame']
*/

/* 8.4. Multi-Dimensional Arrays
Earlier we learned that arrays can store any type of value. If that is true, can we store arrays inside of arrays? Well yes we can....

A multi-dimensional array is an array of arrays, meaning that the values inside the array are also arrays. The inner arrays can store other values such as strings, numbers, or even more arrays.

The figure below demonstrates a synonyms array that has arrays as values. The inner arrays contain words that are synonyms of each other. Notice each inner array has an index position. */

/* 8.4.1. Two Dimensional Arrays
The simplest form of a multi-dimensional array is a two dimensional array. A two dimensional array is like a spreadsheet with rows and columns. To access items in a two dimensional array, use square bracket notation and two indexes array[0][0]. The first index is for the outer array, or the "row", and second index is for the inner array, or the "column".


Note
The row and column analogy is used to help visualize a two dimensional array, however it's not a perfect analogy. There are no specific JavaScript language rules forcing the inner arrays to all have the same length. The inner arrays are separate arrays that can be of different length.

Example
Use a two dimensional array to contain three different lists of space shuttle crews.
*/

let shuttleCrews = [
  ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
  ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
  ['Eilen Collins', 'Winston Scott', 'Catherin Coleman']
];

console.log(shuttleCrews[0][2]);
console.log(shuttleCrews[1][1]);
console.log(shuttleCrews[2][1]);

/* 8.4.2. Multi-Dimensions and Array Methods
In a multi-dimensional array, both the inner and outer arrays can be altered with array methods. However, bracket notation must be used correctly. */

//To apply a method to the outer array, the syntax is:

// multiArrayName.method(); // this breaks all the code in notes lol better comment out

//To apply a method to one of the inner arrays, the syntax is:

// multiArrayName[indexOfInnerArray].method(); // so does this (tested)

/* Example
Use array methods to add an additional crew array and alter existing arrays. */

let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new array to the end of shuttleCrews
shuttleCrews.push(newCrew);
console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
shuttleCrews[1].reverse();
console.log(shuttleCrews[1]);

/* 8.4.3. Beyond Two Dimensional Arrays
Generally, there is no limit to how many dimensions you can have when creating arrays. However it is rare that you will use more than two dimensions. Later on in the class we will learn about more collection types that can handle complex problems beyond the scope of two dimensional arrays.

8.4.4. Check Your Understanding
//
Question
What are the two dimensional indexes for "Jones"?
//

let school = [
   ["science", "computer", "art"],
   ["Jones", "Willoughby", "Rhodes"]
];

//
How would you add "dance" to the array at school[0]?
//
How would you add "Holmes" to the array at school[1]?
