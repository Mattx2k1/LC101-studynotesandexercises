// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

function divide (numerator, denominator) {
  let result = numerator / denominator;

  if (denominator === 0) {
    throw Error("You can't divide by 0!")
  }

  return result;
}

//test divide function

divide(2,0);


