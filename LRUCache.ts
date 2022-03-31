/*

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) -> Initialize the LRU cache with positive size capacity.
int get(int key) -> Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) -> Update the value of the key if the key exists. 
Otherwise, add the key-value pair to the cache. 
If the number of keys exceeds the capacity from this operation, 
evict the least recently used key.


The functions get and put must each run in O(1) average time complexity.

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

*/

class LRUCache {
  cap: number;
  cache: Map<any, any>;
  constructor(capacity: number) {
    this.cap = capacity;
    this.cache = new Map();
  }

  get(key: any) {
    if (!this.cache.has(key)) return -1;
    // grab value of the key, but also delete the key
    // and set it again so that it becomes most recently used in cache
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key: any, value: any) {
    // if cache already has key, delete it and set it
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    // if size of cache exceeds capacity, delete the 'oldest' aka first entry from cache
    if (this.cache.size > this.cap) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }
}

const myCache = new LRUCache(3)

myCache.put(1, 'a')
myCache.put(2, 'b')
myCache.put(3, 'c')
myCache.put(4, 'd')
myCache.put(5, 'e')
myCache.put(6, 'f')


console.log(myCache) 
//-> LRUCache { cap: 3, cache: Map { 4=> 'd', 5=>'e', 6=>'f' } }

console.log(myCache.get(5)) //-> e
console.log(myCache.get(1)) //-> -1

