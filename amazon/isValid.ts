/*
At Amazon's annual sale, employees are tasked with generating valid discount coupons for loyal customers. 
However, there are some used/invalid coupons in the mix and the challenge in this task 
is to determine whether a given discount coupon is valid or not.
The validity of a discount coupon is determined as follows:
An empty discount coupon is valid.
If a discount coupon A is valid, then a discount coupon C made by adding 
one character x to both the beginning of A and the end of A is also valid 
(i.e the discount coupon C = xAx is valid).

If two discount coupons A and B are valid, then the concatenation of B and A is also valid 
(i.e the coupons AB and BA are both valid).
Given n discount coupons, each coupon consisting of only lowercase English characters, 
determine if each discount coupon is valid or not. 
A valid coupon is denoted by 1 in the answer may while an invalid coupon is denoted by 0.

Input: Array of discount coupons as a string
Output: Array of integers, a valid coupon is denoted by 1 and an invalid coupon is denoted by 0.

Example:
  Input:['abba', 'abca']
  Output: [1, 0]

  Explanation:
  'abba' is valid and 'abca' is invalid.

*/

const validCoupons = (discounts: string[]) => {
  const results = [];

  for (const discount of discounts) {
    if (isValid(discount)) results.push(1);
    else results.push(0);
  }

  return results;

  function isValid (str: string) {
    if (!str.length) return true;
    const stack: string[] = [];

    for (const char of str) {
      if (!stack.length || char !== stack[stack.length - 1]) {
        stack.push(char);
      }
      else stack.pop();
    }
    return stack.length === 0;
  }
}


console.log(validCoupons(['xAx', '', 'vv', 'xbbx', 'xyffyxdd', 'abcd' ])) //-> [ 0, 1, 1, 1, 1, 0 ]

