/*

Challenge from: https://dev.to/thepracticaldev/daily-challenge-4-checkbook-balancing-hei

Description: You are given a small checkbook to balance that is given to you as a string. Sometimes, this checkbook will be cluttered by non-alphanumeric characters.

The first line shows the original balance. Each other (not blank) line gives information: check number, category, and check amount.

You need to clean the lines first, keeping only letters, digits, dots, and spaces. Next, return the report as a string. On each line of the report, you have to add the new balance. In the last two lines, return the total expenses and average expense. Round your results to two decimal places.


Example:
Input to Function:
1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10

checkbook(input) =>
Original_Balance: 1000.00
125 Market 125.45 Balance 874.55
126 Hardware 34.95 Balance 839.60
127 Video 7.45 Balance 832.15
128 Book 14.32 Balance 817.83
129 Gasoline 16.10 Balance 801.73
Total expense 198.27
Average expense 39.65
*/

function floatFormatter(num) {
  return parseFloat(num).toFixed(2);
}

function checkbook(checkbookinput) {
  const lines = checkbookinput.split('\n');
  let balance = floatFormatter(lines[0]);
  let totalSpend = 0;

  const result = lines.map((entry, i) => {
    if (i === 0) {
      return `Original_Balance: ${balance}`;
    }

    const lineArray = entry.split(' ');
    const spent = parseFloat(lineArray[lineArray.length - 1]);
    totalSpend += spent;
    balance -= spent;

    return `${lineArray.join(' ')} Balance ${balance.toFixed(2)}`;
  });

  result.push(`Total expense ${totalSpend.toFixed(2)}`);
  result.push(`Average expense ${(totalSpend / (lines.length - 1)).toFixed(2)}`);

  return result.join('\n');
}

export default checkbook;
