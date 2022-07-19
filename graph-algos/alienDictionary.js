var alienOrder = function (words) {
  let graph = {};
  words.forEach((word) => {
    word.split('').forEach((char) => (graph[char] = []));
  }); // initialize graph entry for every character
  // build the relationship graph
  for (let i = 1; i < words.length; i++) {
    let word1 = words[i - 1];
    let word2 = words[i];
    if (word2.length < word1.length && word1.startsWith(word2)) return '';

    let minLength = Math.min(word1.length, word2.length);

    for (let j = 0; j < minLength; j++) {
      if (word1[j] != word2[j]) {
        graph[word1[j]].push(word2[j]);
        break; // only need to find the first pair
      }
    }
  }

  let visiting = new Set(),
    visited = new Set(),
    result = [];
  for ([key, val] of Object.entries(graph)) {
    if (!dfs(key)) return '';
  }
  return result.reverse().join('');

  // regular graph dfs
  function dfs(char) {
    if (visiting.has(char)) return false;
    if (visited.has(char)) return true;
    visiting.add(char);
    for (let n of graph[char]) {
      if (!dfs(n)) return false;
    }
    visiting.delete(char);
    visited.add(char);
    result.push(char);
    return true;
  }
};

function alienOrder2(words) {
  const list = {};
  const result = [];
  const visited = new Set();
  const cycle = new Set();

  words.forEach((word) => {
    word.split('').forEach((char) => {
      list[char] = [];
    })
  })

  for (let i = 1; i < words.length; i++) {
    const [word1, word2] = [words[i - 1], words[i]];
    if (word2.length < word1.length && word1.startsWith(word2)) {
      return '';
    }

    let minLen = Math.min(word1.length, word2.length);

    for (let p = 0; p < minLen; p++) {
      if (word1[p] !== word2[p]) {
        list[word1[p]].push(word2[p]);
        break;
      }
    }
  }

  for (const char in list) {
    if (dfs(char) === false) return '';
  }

  return result.reverse().join('');

  function dfs(char) {
    if (cycle.has(char)) return false;
    if (visited.has(char)) return true;
    cycle.add(char);

    for (const value of list[char]) {
      if (dfs(value) === false) return false;
    }

    cycle.delete(char);
    visited.add(char);
    result.push(char);

    return true;
  }
}

console.log(alienOrder(["ac","ab","zc","zb"]))
console.log(alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']));
