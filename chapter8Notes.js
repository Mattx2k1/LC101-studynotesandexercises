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
