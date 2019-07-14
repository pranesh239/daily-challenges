/*
Challenge from: https://dev.to/thepracticaldev/daily-challenge-1-string-peeler-4nep

Description: Your goal is to create a function that removes the first and last letters of a string. Strings with two characters or less are considered invalid. You can choose to have your function return null or simply ignore.

Example:
stringPeeler('hello all') => "ello al"
stringPeeler('al') => null
stringPeeler('     Hi all    ') => i al
*/

// function stringPeeler(str) {
//   if (!str || str.length <= 2) return null;

//   const charArray = str.trim().split("");
//   charArray.pop();
//   charArray.shift();
//   const resultStr = charArray.join("");
//   return resultStr;
// }

function stringPeeler(str) {
  if (!str || str.length <= 2) return null;

  return str.trim().slice(1, -1);
}

export default stringPeeler;
