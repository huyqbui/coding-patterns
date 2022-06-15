var WordDictionary = function () {
  this.dict = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.dict;
  for (const char of word) {
    if (!node[char]) node[char] = {};
    node = node[char];
  }
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  // use a helper fx(index, node) to traverse nodes in dict
  return dfs(0, this.dict);

  function dfs(idx, node) {
    const char = word[idx];

    if (idx === word.length) return node.isEnd === true;

    // if char is '.', we need to recursively traverse each key in the curr node
    if (char === '.') {
      for (const key in node) {
        // if traversing returns a true boolean, we found a path so return true;
        if (dfs(idx + 1, node[key])) return true;
      }
    } else if (node[char]) {
      return dfs(idx + 1, node[char]);
    }
    return false;
  }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const wordDictionary = new WordDictionary();
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
console.log(wordDictionary.dict);
console.log(wordDictionary.search('pad')); //-> false
console.log(wordDictionary.search('bad')); //-> true
console.log(wordDictionary.search('.ad')); //-> true
console.log(wordDictionary.search('b..')); //-> true
