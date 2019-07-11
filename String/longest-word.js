/*

Challenge from: https://www.coderbyte.com/

Description: Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

Eg:
LongestWord('I ride bike!!!!!') => 'ride'
*/

// => solution 1
// function LongestWord(sen) {
//   const strippedSen = sen.replace(/[^a-zA-Z0-9 ]/g, "");
//   const strippedSenArray = strippedSen.split(" ");

//   if (strippedSenArray.length === 0) return null;
//   if (strippedSenArray.length === 1) return strippedSenArray[0];

//   let maxLengthWord = "";

//   // eslint-disable-next-line no-restricted-syntax
//   for (const arr of strippedSenArray) {
//     if (arr.length > maxLengthWord.length) maxLengthWord = arr;
//   }

//   return maxLengthWord;
// }

// => solution 2
function LongestWord(sen) {
  const strippedSen = sen.replace(/[^a-zA-Z0-9 ]/g, "");
  const strippedSenArray = strippedSen.split(" ");

  if (strippedSenArray.length === 0) return null;
  if (strippedSenArray.length === 1) return strippedSenArray[0];

  const sortedArray = strippedSenArray.sort((a, b) => b.length - a.length);
  return sortedArray[0];
}

export default LongestWord;
