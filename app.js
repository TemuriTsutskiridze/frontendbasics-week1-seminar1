/*
Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.

*/

// function flick(arr) {
//   let flick = true;

//   return arr.map((el) => {
//     if (el === "flick") {
//       flick = !flick;
//     }

//     if (flick) {
//       return true;
//     }
//     return false;
//   });
// }

// console.log(flick(["flick", "chocolate", "adventure", "sunshine"]));

// 2. Write a function that determines if string is pangram (includes all the lettes of alphabet)

// function isPangram(string) {
//   let lowString = string.toLowerCase();
//   const alphabetArray = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];

//   for (let char of alphabetArray) {
//     if (!lowString.includes(char)) {
//       return false;
//     }
//   }

//   return true;
// }

// function isPangram(string) {
//   let lowString = string.toLowerCase();
//   let newString = "";

//   for (let char of lowString) {
//     if (char >= "a" && char <= "z") {
//       newString += char;
//     }
//   }

//   let charSet = new Set(newString);
//   return charSet.size === 26;
// }

function isPangram(string) {
  let newString = string.replace(/[^a-zA-Z]/g, "");
  console.log(newString);

  let charSet = new Set(newString.toLowerCase());
  return charSet.size === 26;
}

console.log(
  isPangram(
    "The 43242quick, bro4234wn 432432f!ox ju.m4234ps'%#* over The lazy dog"
  )
);
