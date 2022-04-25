/*
Flatten a Dictionary
A dictionary is a type of data structure that is supported natively 
in all major interpreted languages such as JavaScript, Python, Ruby and PHP, 
where it’s known as an Object, Dictionary, Hash and Array, respectively. 
In simple terms, a dictionary is a collection of unique keys and their values. 
The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) 
or other dictionaries (dictionaries can be nested).

Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it.

If you’re using a compiled language such Java, C++, C#, Swift and Go, 
you may want to use a Map/Dictionary/Hash Table that maps strings (keys) 
to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

If a certain key is empty, it should be excluded from the output (see e in the example below).

Example 1:
  input: 
    {
      'Key1' : '1',
      'Key2' : { a: '2', b: '3', c: { d: { x: { y: '10' } }, e: '1' } },
    }
  
  output: 
    {
      'Key1': '1', 
      'Key2.a': '2', 
      'Key2.b': '3', 
      'Key2.c.d.x.y': '10',   
      'Key2.c.e': '1' 
    }
*/

const flattenDictionary = (dict) => {
  // create a local result object
  // check each key in the object,
  // if the key's value type is an object,
  // recursively travel inside passing in the that key value, and parent key
  // append any child keys to their parent keys

  const result = {};

  for (const key in dict) {
    if (typeof dict[key] === 'object') travel(key, dict[key]);
    else result[key] = dict[key];
  }

  function travel(key, obj) {
    for (const prop in obj) {
      let newKey;
      if (key === '') {
        newKey = prop;
      } else {
        newKey = key + '.' + prop;
      }

      if (typeof obj[prop] === 'object') {
        travel(newKey, obj[prop]);
      } else {
        result[newKey] = obj[prop];
      }
    }
  }
  return result;
};

const test1 = {
  Key1: '1',
  Key2: { a: '2', b: '3', c: { d: { x: { y: '10' } }, e: '1' } },
};

const test2 = { Key: { a: '2', b: '3' } };

const test3 = {
  Key1: '1',
  Key2: { a: '2', b: '3', c: { d: '3', e: { f: '4' } } },
};

const test4 = { '': { a: '1' }, b: '3' };

console.log(flattenDictionary(test1));
//-> //{'Key1':'1','Key2.a':'2','Key2.b':'3','Key2.c.d.x.y':'10','Key2.c.e':'1'}
console.log(flattenDictionary(test2));
//-> {'Key.a':'2','Key.b':'3'}
console.log(flattenDictionary(test3));
//-> {'Key1':'1','Key2.a':'2','Key2.b':'3','Key2.c.d':'3','Key2.c.e.f':'4'}
console.log(flattenDictionary(test4));
//-> {'a':'1','b':'3'}
