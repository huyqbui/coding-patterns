class Trie {
  constructor() {
    this.dict = {};
  }

  addWords(word) {
    let node = this.dict;
    for (const char of word) {
      if (!node[char]) node[char] = {}
      node = node[char]
    }
    node.isEnd = true;
  }
}

// Time: O(N * M)
// Space: O(N)
// Optimize by changing the board[r][c] to '' before recursively traversing, 
// then set it back to its original char
const findWords = (board, words) => {
  // implement a trie DS and add words to the trie dict
  const root = new Trie();
  const node = root.dict;
  for (const word of words) {
    root.addWords(word);
  }
  // create constant variables for easy access
  const ROWS = board.length, COLS = board[0].length;
  const directions = [ [1, 0], [-1, 0], [0, 1], [0, -1]]
  // create a set to store visited positions, and array to store results
  const visited = new Set(), result = [];
  // check each pos in board, and use a helper function to travel
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const pos = board[r][c];
      if (node[pos])
        travel(r, c, node, '')
    }
  }

  return result;

  function travel(row, col, node, word) {
    // check if we are out of bounds
    // check if we visited this board pos already
    const outOfBounds = row < 0 || row >= ROWS || col < 0 || col >= COLS;
    const key = row + ',' + col
    const hasVisited = visited.has(key);
    
    if (outOfBounds || hasVisited) return;

    // get the char at the board pos
    // check if our trie doesn't have char at board pos
    const char = board[row][col]
    if (!node[char]) return;
    
    // add the pos to visited set
    // update the node to be the node[char]
    // add the char to our word
    visited.add(key);
    node = node[char];
    word += char;

    // if we reached end of node, push the word into our result
    if (node.isEnd === true) {
      result.push(word);
      node.isEnd = false;
    }
    // recursively travel every direction
    for (const [x, y] of directions) {
      travel(row + x, col + y, node, word)
    }
    // delete the pos from visited set
    visited.delete(key);
  }
}


const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];

const words = ["oath","pea","eat","rain"]

console.log(findWords(board, words)) //-> ['oath', 'eat']