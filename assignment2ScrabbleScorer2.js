// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// A) Initial Prompt

// 1. Modify the provided initialPrompt() function to prompt the user to enter a word to score.

// 2. Use the oldScrabbleScorer() function provided to score the word provided by the user. Print the result to the console.

function initialPrompt() {
   console.log("Let's play some scrabble!");
   console.log();
   candidateWord = input.question('Enter a word to score: ');
   //console.log(oldScrabbleScorer(candidateWord));

};

// B) Add and Organize Scoring Algorithms

// 1. simpleScore: Define a function that takes a word as a parameter and returns a numerical score. Each letter within the word is worth 1 point.

let simpleScore = function (word) {
  let i = 0;
   for (i = 0; i < word.length; i++) {
     //test
     //console.log(i);
     
   }

  return i;
};

//test
//simpleScore('money');

// 2. vowelBonusScore: Define a function that takes a word as a parameter and returns a score. Each vowel within the word is worth 3 points, and each consonant is worth 1 point.

// create array for vowels
let vowels = ['a', 'e', 'i', 'o', 'u', 'y']

let vowelBonusScore = function (word) {
  word = word.toLowerCase();
  let points = 0;
  let score = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (vowels.includes(word[i])) {
      //test
      //console.log(word[i]);
      points = 1
      score = score + points;
      console.log(`Points for '${word[i]}': ${points}\n`);
      console.log(`Score is ${score}`);
      //return i;
    } else {
      //test
      //console.log('no worky');
      points = 3
      score = score + points;      
      console.log(`Points for '${word[i]}': ${points}\n`);
      console.log(`Score is ${score}`);
    }
 }

 return score;
}; 

// test
// vowelBonusScore('MONEY');

let scrabbleScore;

/* Once you've written these scoring functions, organize all three of the scoring options into an array. Your program will use the scoringAlgorithms array to retrieve information about the three scoring algorithms and convey that information to the user. */

// OKAY this next set of instructions changes things.. 0.o 

/* 1. Finish writing the scoringAlgorithms array. It should be populated with three objects, one for each of the three scoring options. Each object should contain three keys: name, description, and scoringFunction. */

// QUESTIONS I HAVE:

// So was I supposed to make the original array mentioned into a dictionary?

// For the 'Score Function' key value, should it be the actual function ot its desc?

simpleScoreObject = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  score_function: simpleScore
};

vowelBonusScoreObject = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  score_function: vowelBonusScore
};

oldScrabbleScorerObject = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  score_function: oldScrabbleScorer
};

const scoringAlgorithms = [simpleScoreObject, vowelBonusScoreObject, oldScrabbleScorerObject];

// 3. Finish writing scorerPrompt() so that the user can select which scoring algorithm to use when the program scores their word. Use the selected algorithm to determine the score for the word:

function scorerPrompt() {
   //test
   console.log('Choose a scoring algorithm: ')
   console.log('');
   console.log('0 - Simple: One point per character');
   console.log('1 - Vowel Bonus: Vowels are worth 3 points');
   console.log('2 - Scrabble: Uses scrabble point system');
   console.log('');
   
   let userInput = Number(input.question('Please enter: 0, 1, or 2: '));

   // Thinking of storing the result of scoringAlgorithms[userInput] in a variable:

   let userInputScoreFunction;

   while (userInput !== 0 || userInput !== 1 || userInput !== 2) {
     if (userInput === 0) {
       userInputScoreFunction = scoringAlgorithms[userInput].score_function(candidateWord); 
       //test 
       console.log(`Score for '${candidateWord}': ` + userInputScoreFunction);       
       return userInputScoreFunction;
      
     } else if (userInput === 1) {
        userInputScoreFunction = scoringAlgorithms[userInput].score_function(candidateWord); 
        //test 
        console.log(`Score for '${candidateWord}': ` + userInputScoreFunction);       
        return userInputScoreFunction; 

     } else if (userInput === 2) {
        userInputScoreFunction = scoringAlgorithms[userInput].score_function(candidateWord); 
        //test 
        console.log(`Score for '${candidateWord}': ` + userInputScoreFunction);       
        return userInputScoreFunction;

     } else {
      return scorerPrompt();
      //break;
     }
 }
 //return userInputScoreFunction;
}

//test
//scorerPrompt();
// Simple scoring

// tests given by the assignment:

//console.log("algorithm name: ", scoringAlgorithms[0].name);

//console.log("scoringFunction result: ", scoringAlgorithms[0].score_function)
//console.log("scoringFunction result: ", scoringAlgorithms[0].score_function("JavaScript"));

// these console logs above currently do not work and point to
// the original array being a dictionary not an array possibly?

// Part C 

/* Transform the Object
1. Write the rest of the transform() function. It will need to take an object as a parameter - specifically the oldPointStructure object. Calling transform(oldPointStructure) will return an object with lowercase letters as keys. The value for each key will be the points assigned to that letter. */

/*Recall that for...in loops iterate over the keys within an object.

If you need a reminder of how to assign new key/value pairs, review the relevant section in the Objects and Math chapter.

To access the letter arrays within oldPointStructure, use bracket notation (oldPointStructure['key']).

To access a particular element within a letter array, add a second set of brackets (oldPointStructure['key'][index]), or assign the array to a variable and use variableName[index]. */

function transform(object) {
  for (item in object) {
    //test
     console.log(`${item}  ${object[item]}`);
  }

}


// 2. Locate the newPointStructure object in the starter code and set it equal to transform(oldPointStructure). 

let newPointStructure = transform(oldPointStructure);

console.log(newPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}

// Call scorerPrompt() inside of runProgram() so that the program asks the user for a scoring algorithm after prompting for a word. Use the scoring object returned from scorerPrompt() to score the user's word and let the user know what score their word receives.

// this line below is wrong. They meant call it in the function like line 179 - 181 (current save state, will partially remove comment next update):

// runProgram(scorerPrompt());

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
