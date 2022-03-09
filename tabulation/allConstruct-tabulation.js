/*

Write a function 'allConstruct(target, wordBank)' 
that accepts a target string and an array of strings.

The function should return a 2D array containing all of the ways
the target can be constructed by concatenating elements of the
wordBank array. Each element of the 2D array should represent
one combination that constructs the target.

You may reuse element of wordBank as many times as needed

*/

const allConstruct = (target, wordBank) => {
  const grid = Array(target.length + 1)
    .fill()
    .map(() => [])
  grid[0] = [[]]

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const combinations = grid[i].map(subArray => [...subArray, word])
        grid[i + word.length].push(...combinations)
      }
    }
  }

  console.log(grid)
  return grid[target.length]
}


console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
/*
output: [
  [ab, cd, ef],
  [ab, c, def],
  [abc, def],
  [abcd, ef]
]
*/