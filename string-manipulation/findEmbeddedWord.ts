const findEmbeddedWord = (words: string[], string: string) => {
  // convert the chars in string to an object: key = letter, value = freq
  const wordObj: { [key: string]: number } = {};
  for (let i = 0; i < string.length; i++) {
    wordObj.hasOwnProperty(string[i])
      ? wordObj[string[i]]++
      : (wordObj[string[i]] = 1);
  }

  // iterate through words array
  for (const word of words) {
    const charMap: { [key: string]: number } = {};

    // add each char and it's frequency in a word to an object
    for (let i = 0; i < word.length; i++) {
      charMap.hasOwnProperty(word[i])
        ? charMap[word[i]]++
        : (charMap[word[i]] = 1);
    }

    const length = word.length;
    let count = 0;

    // compare wordObj with charMap
    for (const char in charMap) {
      if (charMap[char] <= wordObj[char]) count += charMap[char];
    }
    if (count === length) return word;
  }
  return null;
};

const words = ['cat', 'baby', 'dog', 'bird', 'car', 'ax'];
const string1 = 'tcabnihjs';
const string2 = 'baykkj1';
const string3 = 'bbaby1kkj';

console.log(findEmbeddedWord(words, string1)); //-> 'cat'
console.log(findEmbeddedWord(words, string2)); //-> 'null'
console.log(findEmbeddedWord(words, string3)); //-> 'baby'

export {};
