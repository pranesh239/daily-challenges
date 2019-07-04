/*
Challenge from: https://dev.to/thepracticaldev/daily-challenge-3-vowel-counter-34ni

Decscription: Write a function that returns the number (count) of vowels in a given string. Letters considered as vowels are: a, i, e, o, and u. The function should be able to take all types of characters as input, including lower case letters, upper case letters, symbols, and numbers.

Example:
countVowels('hello all') => 3
countVowels('Hi!!!!!!') => 1

*/

// function countVowels(str) {
//   const vowels = "aeiou";
//   let vowelsCount = 0;

//   const lowerCaseString = str.trim().toLowerCase();

//   for (let char of lowerCaseString) {
//     if (vowels.includes(char)) vowelsCount++;
//   }

//   return vowelsCount;
// }

function countVowels(str) {
  return [...str.toLowerCase()]
    .map(letter => ([..."aeiou"].includes(letter) ? 1 : 0))
    .reduce((aggr, curr) => aggr + curr);
}

export default countVowels;
