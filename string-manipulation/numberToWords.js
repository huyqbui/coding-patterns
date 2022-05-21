/*
Convert a non-negative integer num to its English words representation.

Example 1:
  Input: num = 123
  Output: "One Hundred Twenty Three"

Example 2:
  Input: num = 12345
  Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:
  Input: num = 1234567
  Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/

function numberToWords(num) {
  const dict = {
    0: ['Zero', 'Ten', ''],
    1: ['One', 'Eleven', ''],
    2: ['Two', 'Twelve', 'Twenty'],
    3: ['Three', 'Thirteen', 'Thirty'],
    4: ['Four', 'Fourteen', 'Forty'],
    5: ['Five', 'Fifteen', 'Fifty'],
    6: ['Six', 'Sixteen', 'Sixty'],
    7: ['Seven', 'Seventeen', 'Seventy'],
    8: ['Eight', 'Eighteen', 'Eighty'],
    9: ['Nine', 'Nineteen', 'Ninety'],
  };

  const numStr = String(num).split('');
  let output = '';
  let subStr = '';
  let result = '';

  // segment will keep track if our num is in the thousands, millions, or billions
  let segment = 0;

  // split the num into substrings of 3 digits, going right to left
  for (let i = numStr.length - 1; i >= 0; i -= 3) {
    const ones = numStr[i];
    const tens = numStr[i - 1] || '';
    const hundreds = numStr[i - 2] || '';
    subStr = hundreds + tens + ones;

    // handle each substring
    output = parseHundreds(subStr, 0, '');

    // then add the parsed substrings together
    output = parseBeyondHundreds(output, segment);

    // then place them in the correct order
    result = output + result;
    segment++;
  }

  return result;

  function parseHundreds(subStr, index, str) {
    // handle cases where we get leading zeros
    if (subStr[0] === '0' && subStr.length > 1) subStr = subStr.slice(1);
    if (subStr === '000') return '';

    for (let i = subStr.length - 1; i >= 0; i--) {
      let digit = subStr[i];
      let prev = subStr[i + 1];
      
      // index keeps track if the digit is in the tens (index = 1) or hundreds (index >= 2) column
      if (index === 1) {
        // handle cases where the tens column digit is a '1', i.e. 11-19
        if (digit === '1') {
          str = dict[prev][index];

          // Handle cases where we get numbers that end in '00' like 100
        } else if (prev === '0') {
          index++;
          str = dict[digit][index];
        } else {
          index++;
          if (dict[digit][index] !== '') 
            str = dict[digit][index] + ' ' + str
        }
        
      // Handle the hundreds column
      } else {
        if (index >= 2) {
          if (str !== '') str = dict[digit][0] + ' Hundred ' + str;
          else str = dict[digit][0] + 'Hundred';
        } else {
          str = dict[digit][index] + str;
        }
      }
      index++;
    }
    return str;
  }

  // check each substring and concat a numeric string according to the segment
  function parseBeyondHundreds(output, segment) {
    if (segment === 3) {
      if (output === '') output = output;
      else output = output + ' Billion ';
    }
    if (segment === 2) {
      if (output === '') output = output;
      else output = output + ' Million ';
    }
    if (segment === 1) {
      if (output === '') output = output;
      else output = output + ' Thousand ';
    }
    return output;
  }
}

console.log(numberToWords(01)); //-> One
console.log(numberToWords(8)); //-> One
console.log(numberToWords(101)); //-> One
console.log(numberToWords(0)); //-> Zero
console.log(numberToWords(10)); //-> Ten
console.log(numberToWords(12)); //-> Twelve
console.log(numberToWords(10069)); //-> Twelve
console.log(numberToWords(1300492)) //-> One Million Three Hundred Thousand Four Hundred Ninety Two
console.log(numberToWords(9010009010)) //-> Nine Billion Ten Million Nine Thousand Eleven
