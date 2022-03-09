/*
MINIMUM ISLAND
Write a function, minimumIsland, 
that takes in a grid containing Ws and Ls. 
W represents water and L represents land. 
The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2
*/



// Time: O(n*m) Quadratic | Space: O(1) Constant
const minimumIsland = (grid) => {
  // depth first traversal

  // def column and row of grid
  const column = grid.length, row = grid[0].length;
  
  // store ref for smallestIsland
  let smallestIsland = column * row;
  
  // iterate through grid column and rows
  for (let c = 0; c < column; c++) {
    for (let r = 0; r < row; r++) {
      // if curr pos is 'L', explore land, and store as size
      if (grid[c][r] === 'L') {
        const size = explore(c, r);
        console.log({size})
        // get the min between smallestIsland and size
        if (size < smallestIsland) smallestIsland = size
      }
    }
  }
 
  // return smallestIsland
  return smallestIsland;
  
  function explore(c, r) {
    // explore will be helper function
    // if out of bounds or pos is 'W', return out
    if (
    c < 0 ||
    r < 0 || 
    c >= column ||
    r >= row ||
    grid[c][r] === 'W') return 0;
    
    // init size to 1
    let size = 1;
    
    // else turn curr pos to 'W'
    grid[c][r] = 'W';
    
    // recursively explore neighbor lands, incrementing size
    size += explore(c, r + 1);
    size += explore(c, r - 1);
    size += explore(c + 1, r);
    size += explore(c - 1, r);
    
    return size;
  }
    
};


const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2