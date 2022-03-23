const findSubarraysProductLessThanTarget = (arr: number[], target: number) => {
  // sliding window + 2 pointer approach
  // create a result array, init product at 1, right & left at 0
  const result: number[][] = [];
  let product = 1,
    left = 0;
  // iterate through arr and grab the curr accumulated product
  // if product is greater than target, we need to shrink the window
  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];
    while (product >= target && left < arr.length) {
      product /= arr[left]; // 3
      left += 1;
    }

    // otherwise, product is less than target, and we need another for loop to generate subArrays
    // we can store values in an object, and push them into our result array, to prevent
    const tempSubArrays: {[key: string]: number} = {}
    for (let i = right; i > left - 1; i--) {
      tempSubArrays[i] = arr[i];
      result.push(Object.values(tempSubArrays));
    }
  }
  return result;
}

console.log(findSubarraysProductLessThanTarget([2, 5, 3, 10], 30));
//-> [ [2], [5], [2, 5], [3], [5, 3], [10] ]
console.log(findSubarraysProductLessThanTarget([8, 2, 6, 5], 50));
//-> [ [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] ]