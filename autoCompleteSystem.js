/*

Design a search autocomplete system for a search engine. 
Users may input a sentence (at least one word and end with a special character '#').

You are given a string array sentences and an integer array times both of length n 
where sentences[i] is a previously typed sentence and times[i] is 
the corresponding number of times the sentence was typed. 
For each input character except '#', return the top 3 historical hot sentences 
that have the same prefix as the part of the sentence already typed.

Here are the specific rules:

The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before.
The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest one). 
If several sentences have the same hot degree, use ASCII-code order (smaller one appears first).
If less than 3 hot sentences exist, return as many as you can.
When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.

Implement the AutocompleteSystem class:

AutocompleteSystem(String[] sentences, int[] times) Initializes the object with the sentences and times arrays.
List<String> input(char c) This indicates that the user typed the character c.
Returns an empty array [] if c == '#' and stores the inputted sentence in the system.
Returns the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed. 
If there are fewer than 3 matches, return them all.
 
Example 1:

Input:
  ["AutocompleteSystem", "input", "input", "input", "input"]
  [[["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]], ["i"], [" "], ["a"], ["#"]]
Output:
  [null, ["i love you", "island", "i love leetcode"], ["i love you", "i love leetcode"], [], []]

Explanation:
  AutocompleteSystem obj = new AutocompleteSystem(["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]);
  obj.input("i"); // return ["i love you", "island", "i love leetcode"]. 
    There are four sentences that have prefix "i". 
    Among them, "ironman" and "i love leetcode" have same hot degree. 
    Since ' ' has ASCII code 32 and 'r' has ASCII code 114, "i love leetcode" should be in front of "ironman". 
    Also we only need to output top 3 hot sentences, so "ironman" will be ignored.
  obj.input(" "); // return ["i love you", "i love leetcode"]. 
    There are only two sentences that have prefix "i ".
  obj.input("a"); // return []. 
    There are no sentences that have prefix "i a".
  obj.input("#"); // return []. 
    The user finished the input, the sentence "i a" should be saved as a historical sentence in system. 
    And the following input will be counted as a new search.
*/


// class AutocompleteSystem needs a:
  // insert method
  // input method
  // getLastPrefixNode method
  // findWords method

class AutoCompleteSystem {
  constructor(sentences, times) {
    this.root = {};
    this.prefix = '';

    for (let i = 0; i < sentences.length; i++) {
      this.insert(sentences[i], times[i]);
    }
  }

  insert(sentence, count) {
    let node = this.root;

    for (const char of sentence) {
      // if there is no node[char] in obj, create it, otherwise point to it
      if (!node[char]) 
        node[char] = {};
      node = node[char];
    }

    node.isEnd = true;
    node.count = node.count + 1 || count;
  }

  getLastPrefixNode(node, prefix) {
    let currNode = node;
    for (const char of prefix) {
      if (!currNode[char]) return [];
      currNode = currNode[char];
    }
    return currNode;
  }

  findWords(node, prefix, output = {}) {
    // if we reach end node, add it to output obj where key = count and value = prefix
    // if this end node has same count as another node, push it to the same key in output
    // sort the values in each output key
    if (node.isEnd) {
      const count = node.count;

      if (!output[count]) output[count] = [prefix];
      else output[count].push(prefix);

      output[count].sort();
    }

    // recursively call method, checking all the keys in the node, and adding the key to our prefix
    for (const key in node) {
      this.findWords(node[key], prefix + key, output);
    }
    return output;
  }

  input(char) {
    // add the sentence to the system if char is '#'
    if (char === '#') {
      this.insert(this.prefix, 1);
      this.prefix = '';
      return [];
    }

    // get last node of prefix
    // starting from last char that matches prefix, find all valid sentences
    this.prefix += char; // add the newest input char to our input

    // go to the node with the key of prefix
    const lastPrefixNode = this.getLastPrefixNode(this.root, this.prefix); 

    // create a words object with all the words that match our input char
    // object will look like { [key: count]: [stored sentences] }
    const words = this.findWords(lastPrefixNode, this.prefix); 

    const output = Object.entries(words)
      .sort((a, b) => b[0] - a[0]) // sort by highest count
      .reduce((acc, [_, s]) => acc.concat(s), []) // remove the count from the array and keep only the sentence
      .slice(0, 3); // get only the first 3 elements

    return output;
  }
}

const obj = new AutoCompleteSystem(["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2])

console.log(obj.input('i')) //-> [ 'i love you', 'island', 'i love leetcode' ]
console.log(obj.input(' ')) //-> [ 'i love you', 'i love leetcode' ]
console.log(obj.input('am')) //-> []
console.log(obj.input(' ')) //-> []
console.log(obj.input('hungry')) //-> []
console.log(obj.input('#')) //-> []//-> ['i a']
console.log(obj.input('i am dizzy')) //-> ['i am hungry']
console.log(obj.input('#')) //-> ['i am hungry']
console.log(obj.input('i am')) //-> ['i am dizzy', 'i am hungry']


