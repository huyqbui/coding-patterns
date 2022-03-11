/*

You are visiting a farm to collect fruits. 
The farm has a single row of fruit trees. 
You will be given two baskets, and your goal is:
to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. 
The farm has following restrictions:

Each basket can have only one type of fruit. 
There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, 
i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

*/

// Time: O(n) where n = input size of fruits | Space: O(b + 1) where b = baskets
const fruitsIntoBaskets = function(fruits: string[]) {
  // store unique fruit types in hash map
  const basket: Map<string, any> = new Map();
  // store ref to start, end, currLength, maxLength
  let start: number = 0, 
    currLength: number = 0, 
    maxLength: number = -Infinity;
  // iterate through fruits, adding each fruit into hashmap
  for (let end = 0; end < fruits.length; end++) {
    const item = fruits[end]
    item in basket ? basket.get(item).val++ : basket.set(item, {val: 1});
    // while hashmap length > 2, subtract a fruit from the basket
    while (basket.size > 2) {
      const leftItem = fruits[start];
      basket.get(leftItem).val--;
      // if value of that fruit type is 0, delete it from basket
      if (basket.get(leftItem).val <= 0) basket.delete(leftItem);
      // increment start index
      start++;
    }
    currLength = end - start + 1;
    // compare currLength with maxLength, and reassign maxLength to w/e is greater
    maxLength = Math.max(currLength, maxLength);
  }
  // return maxLength;
  return maxLength;
};

console.log(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'])) // -> 3
console.log(fruitsIntoBaskets(['B', 'O', 'C', 'D', 'C', 'D', 'C', 'E'])) // -> 5

