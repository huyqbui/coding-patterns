
var Trie = function() {
  this.dict = {};
};

Trie.prototype.insert = function(word) {
  let node = this.dict
  for (const char of word) {
      if (!node[char]) {
          node[char] = {}
          node = node[char]
      }
    }
    node.isEnd = true;
};


Trie.prototype.search = function(word) {
  let node = this.dict
  for (const char of word) {
    if (!node[char]) {
      return false;
    }
    node = node[char]
  }
  return node.isEnd === true;

};


Trie.prototype.startsWith = function(prefix) {
  let node = this.dict;

  for (const char of prefix) {
    console.log(char);
    if (!node[char]) return false;
    node = node[char]
  }
  return true;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/

const trie = new Trie()
trie.insert('apple');
console.log(trie.search('apple'))
console.log(trie.startsWith('app'))
