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