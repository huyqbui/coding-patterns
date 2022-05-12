/*
We are given a list of file path strings. Each file path is split by a /.
Example: /image/screenshots/web/dashboard_2x.png

Make a function that will parse any number of file path strings and
return a JSON representation of it.
This JSON should show the nested hierarchy of our file system.
Folders should be represented as a JSON object {}
Files should be represented with a null
  Hint: A name with a trailing slash should represent a folder.

Example 1:
  input: [
  '/dist/',
  '/dist/js',
  '/index.html',
  'image/screenshots/ios/ipad/temp',
  '/dist/js/main.js',
  '/dist/css/main.css',
  '/image/hero_2x.png',
  '/image/screenshots/web/dashboard_2x.png'
]
  output: 
    { 
      "dist": { 
          "js": { 
              "main.js": null 
          }, 
          "css": { 
              "main.css": null 
          } 
      }, 
      "index.html": null, 
      "image": { 
          "screenshots": { 
              "ios": { 
                  "ipad": { 
                      "temp": {} 
                  } 
              }, 
              "web": { 
                  "dashboard_2x.png": null 
              } 
          }, 
          "hero_2x.png": null 
      } 
  } 
*/

const buildJSONFileSystem = (paths) => {
  const jsonObj = {};

  // iterate through each string path
  for (const path of paths) {
    // split each string by '/' and ignore the beginning string if it's empty
    let splitPaths = path.split('/');
    if (splitPaths[0] === '') splitPaths = splitPaths.slice(1);

    // use curr as a reference pointer
    let curr = jsonObj;

    // iterate through each segment in splitPaths e.g. paths[4] = 'dist', 'js', 'main.js'
    for (const directory of splitPaths) {
      if (directory === '') continue;

      if (!(directory in curr)) {
        // if the directory is actually a file we can mark it's value as null
        if (directory.includes('.')) curr[directory] = null;
        else curr[directory] = {};
      }
      // update curr to be the nested path we just created
      curr = curr[directory];
    }
  }
  return jsonObj;
};

const paths = [
  '/dist/',
  '/dist/js',
  '/index.html',
  'image/screenshots/ios/ipad/temp',
  '/dist/js/main.js',
  '/dist/css/main.css',
  '/image/hero_2x.png',
  '/image/screenshots/web/dashboard_2x.png',
];

console.log(JSON.stringify(buildJSONFileSystem(paths), null, 4));
/* output of paths should be:
{ 
    "dist": { 
        "js": { 
            "main.js": null 
        }, 
        "css": { 
            "main.css": null 
        } 
    }, 
    "index.html": null, 
    "image": { 
        "screenshots": { 
            "ios": { 
                "ipad": { 
                    "temp": {} 
                } 
            }, 
            "web": { 
                "dashboard_2x.png": null 
            } 
        }, 
        "hero_2x.png": null 
    } 
} 
*/
const paths2 = [
  '/years/2020/memories',
  '/months/september',
  '/years/',
  '/years/2020/covid.virus',
  '/months/december/xmas.jpg',
];

// Uncomment line below to test paths2
// console.log(JSON.stringify(buildJSONFileSystem(paths2), null, 4))

/* output of paths2 should be:
{ 
    "years": { 
        "2020": { 
            "memories": {}, 
            "covid.virus": null 
        } 
    }, 
    "months": { 
        "september": {}, 
        "december": { 
            "xmas.jpg": null 
        } 
    } 
} 
*/
