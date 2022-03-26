/*

Any number will be called a happy number if, after repeatedly 
replacing it with a number equal to the sum of the square of all of its digits, 
leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. 
Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

Example 1:
Input: 23   
Output: true (23 is a happy number)  
Explanations: Here are the steps to find out that 23 is a happy number:
2^2 + 3 ^2 = 4 + 9 = 13
1^2 + 3^2 = 1 + 9 = 10
1^2 + 0^2 = 1 + 0 = 1

Example 2:
Input: 12   
Output: false (12 is not a happy number)  
Explanations: Here are the steps to find out that 12 is not a happy number:
1^2 + 2 ^2 = 1 + 4 = 5
5^2 = 25
2^2 + 5^2 = 4 + 25 = 29
2^2 + 9^2 = 4 + 81 = 85
8^2 + 5^2 = 64 + 25 = 89
8^2 + 9^2 = 64 + 81 = 145
1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 42
4^2 + 2^2 = 16 + 4 = 20
2^2 + 0^2 = 4 + 0 = 4
4^2 = 16
1^2 + 6^2 = 1 + 36 = 37
3^2 + 7^2 = 9 + 49 = 58
5^2 + 8^2 = 25 + 64 = 89
Step ‘13’ leads us back to step ‘5’ 
as the number becomes equal to ‘89’, 
this means that we can never reach ‘1’, 
therefore, ‘12’ is not a happy number.

*/

// Time: O(logN) | Space: O(1) Constant
const findHappyNumber = (num: number) => {
  // use fast n slow pointers approach w/ a helper function
  let slow = num,
  fast = num;
  while (true) {
    slow = getSquareSum(slow); 
    fast = getSquareSum(getSquareSum(fast)); 
    if (slow === fast) break;
  }
  return slow === 1;
  
  // helper function will track sum of squared digits, and return accumulated sum
  function getSquareSum(num: number) {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10; 
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }
}
console.log(findHappyNumber(23)) //-> true
console.log(findHappyNumber(12)) //-> false


const findHappyNumberAlt = (num: number): boolean => {
  // use a hashMap to store values of squaredSum to check for loops, and use a helper function
  const hashMap: {[index: string]: number} = {};
  
  function helper(num: number): boolean {
    // convert the num to a string, and then to an array of individual digits
    let stringNum = String(num).split('');
    let digits = stringNum.map(Number)
    let squaredSum = 0;
    // for each digit in num, square it
    for (let i = 0; i < digits.length; i++) {
      let square = digits[i] * digits[i];
      // add the squared values, and store their squaredSum in a hash map
      squaredSum += square; 
    }
    // check if squaredSum = 1, return true if so
    if (squaredSum === 1) return true;
    // if we've reached the same squaredSum again, we've entered a loop, so return false
    if (squaredSum in hashMap) return false
    hashMap[squaredSum] = num;
    // otherwise recursively call function again
    return helper(squaredSum)
  }
  return helper(num)
}

console.log(findHappyNumberAlt(23)) //-> true
console.log(findHappyNumberAlt(12)) //-> false
