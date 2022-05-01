/*
Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack with a capacity ‘C.’ 
The goal is to get the maximum profit out of the knapsack items. 
Each item can only be selected once, as we don’t have multiple quantities of any item.

Let’s take Merry’s example, who wants to carry some fruits in the knapsack to get maximum profit. 
Here are the weights and profits of the fruits:

Items: { Apple, Orange, Banana, Melon }
Weights: { 2, 3, 1, 4 }
Profits: { 4, 5, 3, 7 }
Knapsack capacity: 5

Let’s try to put various combinations of fruits in the knapsack, 
such that their total weight is not more than 5:

Apple + Orange (total weight 5) => 9 profit
Apple + Banana (total weight 3) => 7 profit
Orange + Banana (total weight 4) => 8 profit
Banana + Melon (total weight 5) => 10 profit

This shows that Banana + Melon is the best combination as it gives us the maximum profit, 
and the total weight does not exceed the capacity.

Problem Statement#
Given two integer arrays to represent weights and profits of ‘N’ items, 
we need to find a subset of these items which will give us maximum profit such that 
their cumulative weight is not more than a given number ‘C.’ 
Each item can only be selected once, 
which means either we put an item in the knapsack or we skip it.

Example 1:
  profits = [1, 6, 10, 16];
  weights = [1, 2, 3, 5];
  capacity = 7
  output = 22

Example 2:
  profits = [1, 6, 10, 16];
  weights = [1, 2, 3, 5];
  capacity = 6
  output = 17
*/

// Time: O(n * m) where n is items in profits, and m is maximum capacity
// Space: O(n) to store array of values that is length of capacity
const knapsack = (profits: number[], weights: number[], capacity: number) => {
  const pLen = profits.length;
  // handle edge cases
  if (capacity <= 0 || !pLen || weights.length !== pLen) return 0;
  // create an array that is capacity length + 1 to store values of calculated profits
  const arr = Array(capacity + 1).fill(0);

  let profit1, profit2, remaining;
  // process all sub-arrays for all the capacities
  for (let i = 0; i < pLen; i++) {
    for (let c = capacity; c >= 0; c--) {
      (profit1 = 0), (profit2 = 0);
      // TAKE IT: include the item, if its weight not more than capacity
      // add profit plus the profit from remaining capacity
      if (weights[i] <= c) {
        remaining = arr[c - weights[i]];
        profit1 = profits[i] + remaining;
      }
      // LEAVE IT : exclude the item
      profit2 = arr[c];
      // compare and store the greater profit value
      arr[c] = Math.max(profit1, profit2);
    }
  }
  return arr[capacity];
};

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];

console.log(knapsack(profits, weights, 7)); //-> 22
console.log(knapsack(profits, weights, 6)); //-> 16

export {}
