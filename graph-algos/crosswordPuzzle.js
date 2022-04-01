/*

A 10 X 10 Crossword grid is provided to you, 
along with a set of words (or names of places) which need to be filled into the grid. 
Cells are marked either + or -. 
Cells marked with a - are to be filled with the word list.

The following shows an example crossword from the input crossword grid and the list of words to fit:

Input 	   		Output

++++++++++ 		++++++++++
+------+++ 		+POLAND+++
+++-++++++ 		+++H++++++
+++-++++++ 		+++A++++++
+++-----++ 		+++SPAIN++
+++-++-+++ 		+++A++N+++
++++++-+++ 		++++++D+++
++++++-+++ 		++++++I+++
++++++-+++ 		++++++A+++
++++++++++ 		++++++++++

words = 'POLAND;LHASA;SPAIN;INDIA'
Function Description

Complete the crosswordPuzzle function in the editor below. It should return an array of strings, each representing a row of the finished puzzle.

crosswordPuzzle has the following parameter(s):

crossword: an array of  strings of length  representing the empty grid
words: a string consisting of semicolon delimited strings to fit into 

*/

function crosswordPuzzle(crossword, words) {
  // DFS approach with pointer for words, and a visited set
  const newCrossword = [...crossword]
  const columns = newCrossword.length,
      rows = newCrossword[0].length,
      visited = new Set();
  let wordIndex = 0;
  for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
          if (newCrossword[i][j] === '-') {
              fillWordsVertical(newCrossword, i, j, wordIndex)
          }
      }
  }
  
  function fillWordsVertical(newCrossword, i, j, char) {
      // check that we are staying in bounds
      let outColBounds = i < 0 || i >= columns,
          outRowBounds = j < 0 || j >= rows;

      if (
          outColBounds ||
          outRowBounds || 
          newCrossword[i][j] === '+' ||
          visited.has(`${i},${j}`)
          ) return
      visited.add(i + ',' + j);
      if (words[wordIndex] === ';') wordIndex++;
      if (newCrossword[i][j-1] === words[wordIndex]) wordIndex++
      newCrossword[i][j] = words[wordIndex];
      wordIndex++;
      console.log(`${words[wordIndex]}: ${newCrossword[i][j]}`)

      fillWordsVertical(newCrossword, i + 1, j, wordIndex) // DFS vertically
  } 
  return newCrossword;
}

const grid = [
  ['+','-','+','+','+','+','+','+','+','+'],
  ['+','-','+','+','+','+','+','+','+','+'],
  ['+','-','+','+','+','+','+','+','+','+'],
  ['+','-','-','-','-','-','+','+','+','+'],
  ['+','-','+','+','+','-','+','+','+','+'],
  ['+','-','+','+','+','-','+','+','+','+'],
  ['+','+','+','+','+','-','+','+','+','+'],
  ['+','+','-','-','-','-','-','-','+','+'],
  ['+','+','+','+','+','-','+','+','+','+'],
  ['+','+','+','+','+','-','+','+','+','+'],
]

const words = 'LONDON;DELHI;ICELAND;ANKARA'

console.log(crosswordPuzzle(grid, words))

