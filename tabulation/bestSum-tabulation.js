/*

Write a function 'bestSum(targetSum, numbers)' 
that takes in a targetSum and an array of numbers as an argument.

The function should return an array containing the shortest
combination of numbers that add up exactly to targetSum

If there is no combination that adds up to the targetSum,
then return null.

If there is a tie for shortest, you may return
any one of the shortest combinations.

*/

// Time: O(m^2 * n) | Space: O(m^2)
const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        
        if (!table[i + num] || table[i + num].length > combination.length) {
          if (table[i + num] <= targetSum) table[i + num] = combination
        }
      }
    }
  }
  console.log(table)
  return table[targetSum]
}

console.log(bestSum(8, [2, 3, 5])) // -> [3,5]
console.log(bestSum(300, [25, 1, 5, 2, 150, 200, 270, 30, 100]))