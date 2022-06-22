/*

Requirements:
- The function must accept a valid object format.
- The function must remove invalid objects.
- The function must output a valid byline HTML string.
- A byline string must start with a "By"
- The last Author must be separated by an "and"
- The Author must be wrapped by the style specified in the block parameter
- Assume the we support the `<em>` and `<strong>` html tags.

example input below should return:
  "By <strong>Jonah Engel Bromwich</strong>, <em>Matthew Schenier</em> and Niraj Chokshi"

*/

/*
  - create/init output variable => ''
  - iterate through each element of authors

  - deconstruct the object at authors[i] & grab the firstName, middleName, lastName, block values
  - correctly CapitalCase our names
  
  - create function to get the block.__typename value, 
  - and return [ '<openTag>', '<closeTag>' ] or return null

  - for the first element, add 'By' to line
  - if we have a block, add block[0] to line
  - if we have firstName, middleName, lastName, add to line
  - if we have a block, add block[1] to line
  - after filling the line, add a comma, IF this is not the last element
  - if on last element: add 'and '  to line
*/

const generateByLines = (dataObj) => {
  const authors = dataObj.authors;
  let result = '';
  // iterate through each object in dataObj.authors
  for (let i = 0; i < authors.length; i++) {
    let { firstName, middleName, lastName, block } = authors[i]; // grab all the values

    if (!firstName && !middleName && !lastName && !block) continue; // if current obj is empty, we skip it

    firstName = capitalCase(firstName); // returns a string || null
    middleName = capitalCase(middleName); // returns a string || null
    lastName = capitalCase(lastName); // returns a string || null
    block = createTag(block); // returns [ <openTag>, <closingTag> ] || null

    let line = ''; // use this variable to start building our line
    if (i === 0) { // for first element, we add 'By'
      line += 'By ';
    }

    // add to the line only if we have values for it
    if (block) line = `${line}${block[0]}`;
    if (firstName) line = `${line}${firstName}`;
    if (middleName) line = `${line} ${middleName}`;
    if (lastName) line = `${line} ${lastName}`;
    if (block) line = `${line}${block[1]}`;
  
    // if we are NOT at last obj, add a comma
    if (i !== authors.length - 1) { 
      line += ', ';
    } else if (i === authors.length - 1) {
      // else add 'and'
      line = 'and ' + line;
    }
    console.log({line})
    // add this line to our final result
    result += line;
  }
  return result;
  function capitalCase(string) {
    // lowercase everything
    // capitalize the first char
    if (string === '') return null;
    let firstChar = string.slice(0, 1).toUpperCase();
    let remainingChars = string.slice(1).toLowerCase();
    return firstChar + remainingChars;
  }
  function createTag(blockObj) {
    const { __typename } = blockObj;
    if (__typename === 'Bold') return ['<strong>', '</strong>'];
    else if (__typename === 'Italics') return ['<em>', '</em>'];
    else return null
  }
};

const exampleByLines = {
  authors: [
    {
      firstName: 'jonah',
      middleName: 'Engel',
      lastName: 'bromwich',
      block: {
        __typename: 'Bold',
      },
    },
    { random: 'node' },
    {},
    {
      firstName: 'matthew',
      middleName: '',
      lastName: 'sChneier',
      block: {
        __typename: 'Italics',
      },
    },
    {
      firstName: 'Niraj',
      middleName: '',
      lastName: 'chokshi',
      block: {},
    },
  ],
};

console.log(generateByLines(exampleByLines));
//->  "By <strong>Jonah Engel Bromwich</strong>, <em>Matthew Schenier</em> and Niraj Chokshi"
