/*

Say that you are a traveler on a 2D grid. 
You begin in the top left corner
and your goal is to travel to the bottom-right corner.
You may only move dn or right.

In h many ways can you travel to the goal 
on a grid with dimensions m * n?

Write function 'gridTraveler(m,n)' that calculates this.

*/

// create an array grid and fill with 0's
// iterate through array grid
// add current iteration value to the next iteration values


// Time: O(m * n) | Space: O(m * n)
const gridTraveler = (m, n) => {
  const grid = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  grid[1][1] = 1;
  
  for (let c = 0; c <= m; c++) {
    for (let r = 0; r <= n; r++) {
      const current = grid[c][r]
      if (r + 1 <= n) grid[c][r + 1] += current; // if r in bounds, add curr pos to neighbor pos
      if (c + 1 <= m) grid[c + 1][r] += current; // if c in bounds, add curr pos to neighbor pos
    }
  }
  
  console.log(grid)

  return grid[m][n]

}

const gridTraveler2 = (m, n) => {

}

console.log(gridTraveler(3,3)) // -> 6
console.log(gridTraveler(18, 18))