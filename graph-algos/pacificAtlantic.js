
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

// Time: O(m * n)
// Space: O(m * n)
const pacificAtlantic = (heights) => {
  // use a set that will contain a collection of positions that can reach each ocean
  // iterate through the first row, and dfs travel to add these pos to the corresponding set
  // iterate through the first col and dfs travel to add these pos to the corresponding set
  // iterate through each pos, and if it's pos is in both sets, push its pos to our output array
  const ROWS = heights.length, COLS = heights[0].length, LASTROW = ROWS - 1, LASTCOL = COLS - 1;
  const pacific = new Set(), atlantic = new Set();
  const directions = [ [1, 0], [-1, 0], [0, 1], [0, -1] ]
  const result = [];
  
  for (let r = 0; r < ROWS; r++) {
      travel(r, 0, pacific, heights[r][0]) // adds initial left vals & dfs travel vals to pacific set
      travel(r, LASTCOL, atlantic, heights[r][LASTCOL]) // adds initial right vals & dfs travel vals to atlantic set
  }
  
  for (let c = 0; c < COLS; c++) {
      travel(0, c, pacific, heights[0][c]); // adds initial top vals & dfs travel vals to pacific set
      travel(LASTROW, c, atlantic, heights[LASTROW][c]) // adds initial bottom vals & dfs travel vals to atlantic set
  }
  
  for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
          const pos = `${r},${c}`
          if (pacific.has(pos) && atlantic.has(pos))
              result.push([r, c])
      }
  }
  
  return result;
  
  function travel(r, c, visitedSet, prevHeight) {
      const outOfBounds = r < 0 || r >= ROWS || c < 0 || c >= COLS;
      const pos = `${r},${c}`
      const inVisited = visitedSet.has(pos);
      
      if (outOfBounds || inVisited || heights[r][c] < prevHeight)
          return;
      
      visitedSet.add(pos);
      
      for (const [x, y] of directions) {
          travel(r + x, c + y, visitedSet, heights[r][c])
      }
  }
};

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

const heights2 = [
  [2, 1], [1, 2]
]

console.log(pacificAtlantic(heights));
//-> [ [ 0, 4 ], [ 1, 3 ], [ 1, 4 ], [ 2, 2 ], [ 3, 0 ], [ 3, 1 ], [ 4, 0 ] ]
console.log(pacificAtlantic(heights2));
//-> [ [0, 0], [0, 1], [1, 0], [1, 1] ]