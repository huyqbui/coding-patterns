/*
You are given an integer array coins representing coins of different denominations 
and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
  Input: coins = [1,2,5], amount = 11
  Output: 3
  Explanation: 11 = 5 + 5 + 1

Example 2:
  Input: coins = [2], amount = 3
  Output: -1

Example 3:
  Input: coins = [1], amount = 0
  Output: 0
*/

/* APPROACH:
    create an arr of size i where i is the amount we want to make up
    arr[i] stores the fewest number of coins to make up amount i
    init all values in arr[i] to Infinity
    set arr[0] to 0 for our base case
    for each coin:
      create a for loop to iterate through each cell in arr
      if current coin is less than or equal to index
        find the prevAmount by checking arr[i - coin] + 1
        arr[i] will be the min between itself and the prevAmount
*/

// Time: O(n * m) where n is the amount, m is count of coins
// Space: O(n) where n is the space used for the arr table
const coinChange = (coins: number[], amount: number) => {

  const arr = Array(amount + 1).fill(Infinity);
  arr[0] = 0;

  for (const coin of coins) {
    for (let i = 0; i < arr.length; i++) {
      if (coin <= i) {
        let prevAmount = arr[i - coin] + 1
        arr[i] = Math.min(arr[i], prevAmount)
      }
    }
  }

  return arr[amount] === Infinity ? -1 : arr[amount];
};

console.log(coinChange([1, 2, 5], 11)); //-> 3
console.log(coinChange([2], 1)); //-> -1
console.log(coinChange([1], 0)); //-> 0
console.log(coinChange([1, 5, 10], 57)); //-> 8
