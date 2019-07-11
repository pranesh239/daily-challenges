/*
Challenge from: https://dev.to/thepracticaldev/daily-challenge-2-string-diamond-21n2

Description: Your task is to return a string that displays a diamond shape on the screen using asterisk (“*”) characters.

Example:
diamond(11) =>

     *
    ***
   *****
  *******
 *********
***********
 *********
  *******
   *****
    ***
     *
*/

function diamond(n) {
  if (n < 0 || n % 2 === 0) return null;

  const center = "*".repeat(n);
  const stars = [];

  for (let i = n - 2; i > 0; i -= 2) {
    const space = (n - i) / 2;
    stars.push(" ".repeat(space) + "*".repeat(i) + " ".repeat(space));
  }

  return `${[...stars].reverse().join("\n")}\n${center}\n${stars.join("\n")}`;
}

export default diamond;
