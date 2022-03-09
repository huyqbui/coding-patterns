/*

Write a function 'howSum(targetSum, numbers)' 
that takes in a targetSum and an array of numbers as an argument.

The function should return an array containing any
combination of elements that add up exactly to targetSum

If there is no combination that adds up to the targetSum,
then return null.

If there are multiple combinations, you may return
any single one.

*/

// Time: O(mn) | Space: O(m)
const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = [];
  
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        if (table[i + num] <= targetSum) table[i + num] = [...table[i], num]
      }
    }
  }

  console.log(table)
  
  return table[targetSum];
  

}

console.log(howSum(7, [5,3,4,7])) // [4,3]  or [7]