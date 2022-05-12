const reverseMe = (string: string) => string.split('').reverse().join('')

const isPalindrome = (string: string) => {
  if (!string.length) return true;
  return string === reverseMe(string)
}

const palindromePairs = (words: string[]) => {
  const obj: {[key: string]: [string, number]} = {}, result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let rev = reverseMe(word)
    obj[rev] = [word, i]
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // check if prefix and suffix of each word exists in obj
    for (let j = 0; j < words.length; j++) {
      const pre = word.slice(0, j);
      const suff = word.slice(j); 
      const preIdx = obj[pre];
      const suffIdx = obj[suff];

      // if suffix exists in obj && not at same idx
      if (obj[suff] && suffIdx[1] !== i) {
        let revWord = suffIdx[0]
        const validPrefix = isPalindrome(pre);
        if (validPrefix) result.push([word, revWord])
      }

      // if prefix exists in obj && not at same idx
      if (obj[pre] && preIdx[1] !== i) {
        let revWord = preIdx[0]
        const validSuffix = isPalindrome(suff);
        if (validSuffix) result.push([word, revWord])
      }
    }
  }
  return result
}

const test1 = ['bag', 'gab', 'cat'];
const test2 = ['race', 'dog', 'car', 'nurses', 'run', 'seat'];
const test3 = ['apple', 'aire', 'pop', 'gigeria'];
console.log(palindromePairs(test1)) //-> [ ['bag', 'gab' ], [ 'gab', 'bag' ] ]
console.log(palindromePairs(test2)) //-> [ [ 'race', 'car' ], [ 'nurses', 'run' ] ]
console.log(palindromePairs(test3)) //-> [ [ 'gigeria', 'aire' ] ]