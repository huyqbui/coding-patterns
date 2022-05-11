const addBigNumbers = (str1: string, str2: string) => {
  // split the strings by decimals
  const str1Arr = str1.split('.');
  const str2Arr = str2.split('.');
  
  if (str1Arr.length < 2) str1Arr.push('0');
  if (str2Arr.length < 2) str2Arr.push('0');
  
  // add 0's to the left and right side of strings if they are not equal
  padZeroes(str1Arr, str2Arr, 1);
  padZeroes(str1Arr, str2Arr, 0);
  
  let carry = 0;
  // add the right side of string together, then add left side of string together
  let right = addStr(str1Arr[1], str2Arr[1])
  let left = addStr(str1Arr[0], str2Arr[0])

  // if any carry remains, update left
  if (carry === 1) {
    left = '1' + left;
  }

  // combine the left and right side
  return left + '.' + right

  function padZeroes(arr1: string[], arr2: string[], idx: number) {
    let arrToPad, numToPad;
    if (arr1[idx].length > arr2[idx].length) {
      arrToPad = arr2;
      numToPad = arr1[idx].length - arr2[idx].length;
    } else {
      arrToPad = arr1;
      numToPad = arr2[idx].length - arr1[idx].length;
    }
    
    while (numToPad > 0) {
      if (idx === 0) {
        arrToPad[idx] = '0' + arrToPad[idx];
      } else {
        arrToPad[idx] += '0';
      }
      numToPad--;
    }
  }

  function addStr(str1: string, str2: string) {
    let result = ''
    let ptr = str1.length - 1;

    while (ptr >= 0) {
      let num1 = parseInt(str1[ptr]);
      let num2 = parseInt(str2[ptr]); 
      let sum = num1 + num2 + carry

      carry = 0
      if (sum > 9) {
        carry = 1;
        sum -= 10;
      }
      result = sum + result
      ptr--;
    }
    return result;
  }
};

console.log(addBigNumbers('3.14', '1.4')); //-> 4.54
console.log(addBigNumbers('309.34', '1.45')) //-> 310.79
console.log(addBigNumbers('10.90', '90.10')) //-> 101.00
console.log(addBigNumbers('3.14', '1.499')); //-> 4.639
console.log(addBigNumbers('3.01', '1.000009')); //-> 4.010009
