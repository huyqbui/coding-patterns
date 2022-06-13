/*

Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
  Input: strs = [""]
  Output: [[""]]
Example 3:
  Input: strs = ["a"]
  Output: [["a"]]
*/

// create a map to store a sorted key, and values will be strings that when sorted, equal the key
// iterate through each str, and sort it (use a helper function)
// check if map has the sorted key, or create an empty array
// push the str to the array, and set this updated array to the map's key
// return a new array created from all the map's values

// Time: O(N * MlogM) where M is from sorting every letter in a word, and N is the length of strs
// Space: O(N * M) where we store N strings of size M
const groupAnagrams = (strs: string[]) => {
  const map = new Map();
  for (const str of strs) {
    const key = sort(str);

    const list = map.get(key) || [];
    list.push(str);
    map.set(key, list);
  }
  
  return Array.from(map.values());

  function sort(str: string) {
    return str.split('').sort().join('');
  }
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) 
  //-> [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) 
  //-> [[""]]
console.log(groupAnagrams(["a"])) 
  //-> [["a"]]