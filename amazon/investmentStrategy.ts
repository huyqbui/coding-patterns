/*
Your team at Amazon has been asked to help outline options for a hypothetical investment strategy. 
Imagine an investor opens a new account and wants to invest in a number of assets. 
Each asset begins with a balance of 0, and its value is stored in an array using 1-based Indexing. 
Periodically, a contribution is received and equal investments are made in a subset of the portfolio. 
Each contribution will be given by investment amount, start index, end index. 
Each investment in that range will receive the contribution amount. 
Determine the maximum amount invested in any one investment after all contributions.

For example, start with an array of 5 elements: investments = [0, 0, 0, 0, 0]*. 
The variables left and right represent the starting and ending indices, inclusive. 
Another variable, contribution, is the new funds to invest per asset. T
he first investment is at index 1.

left	right	contribution	investments
 	 	 	                    [ 0, 0, 0, 0, 0 ] 
  1	      2	      10	    [ 10, 10, 0, 0, 0]
  2	      4	      5	      [ 10, 15, 5, 5, 0] 
  3	      5	      12	    [ 10, 15, 17, 17, 12]

In the first round, a contribution of 10 is made to investments 1 and 2. 
In the second round, a contribution of 5 is made to assets 2, 3 and 4. 
Finally, in the third round, a contribution of 12 is added to investments 3, 4 and 5. 
The maximum invested in any one asset is 17.

*Note: The investments array is not provided in the function. 
It is to be created after the number of assets available is known.


Function description: Complete the maxValue function in the editor below.

maxValue has the following parameters:
  int n: the number of investments available
  int rounds[o][3]: each rounds[i] contains 3 integers, [left, right, contribution]
Returns:
  int: the maximum invested in any one asset

Constraints:
  3 <= n <= 10^7
  1 <= o <= 2 * 10^5
  1 <= left <= right <= n
  0 <= contribution <= 10^9

Example 1:
  n = 5
  rounds = [ [1, 2, 10], [2, 4, 5], [3, 5, 12] ]
  output = 17
*/
// Time: O(n)
// Space: O(n)
const maxValue = (n: number, rounds: number[][]) => {
  const arr = Array(n).fill(0)
  let maxInvestment = 0;

  for (const round of rounds) {
    const [start, end, funds] = round;
    arr[start] += funds;

    if (end < rounds.length) {
      arr[end + 1] -= funds;
    }
  }

  let curr = 0;

  arr.forEach(val => {
    curr += val;
    maxInvestment = Math.max(maxInvestment, curr)
  })
  return maxInvestment;
}




console.log(maxValue(5, [[1, 2, 10], [2, 4, 5], [3, 5, 12]])) // -> 17