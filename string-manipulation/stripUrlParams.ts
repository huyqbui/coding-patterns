const stripUrlParams = (str: string, arr: string[] = []) => {
  let paramStr = '';
  const [url, paramArr] = str.split('?');
  if (str === url) return str;
  const params = paramArr.split('&');
  const keys = new Set(); // Set to store encountered params
  const blackListed = new Set(); // Set to store blacklisted params

  for (let i = 0; i < arr.length; i += 1) {
    blackListed.add(arr[i]);
  }

  for (let i = 0; i < params.length; i += 1) {
    const key = params[i].split('=')[0];
    if (!keys.has(key) && !blackListed.has(key)) {
      if (paramStr === '') {
        paramStr = paramStr + params[i];
      } else {
        paramStr = paramStr + '&' + params[i];
      }
      keys.add(key);
    }
  }
  return url + '?' + paramStr;
};

console.log(stripUrlParams('https://www.meep.com?a=1&b=2&a=2'));
// 'https://www.meep.com?a=1&b=2'
console.log(stripUrlParams('https://www.meep.com?a=1&b=2&a=2', ['b']));
// 'https://www.meep.com?a=1'
console.log(stripUrlParams('https://www.meep.com', ['b']));
// 'https://www.meep.com'
