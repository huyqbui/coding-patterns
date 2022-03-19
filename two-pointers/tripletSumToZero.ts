

// Time: O(n^2) Quadratic | Space: O(n) Linear due to sorting
const tripletSumToZero = (arr: number[]) => {
  const triplets: number[][] = [];
  // sort the array, and then iterate through each num in arr
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i], prevNum = arr[i - 1]
    // if currNum is equal to the prevNum, skip it and continue
    if (currNum === prevNum) continue;
    // use helper function(arr, targetSum, left, triplets) to search for pairs for targetSum
    // targetSum will be the -currNum, left will be one index after i
    searchPairs(arr, -currNum, i + 1, triplets);
  }

  function searchPairs(arr: number[], targetSum: number, left: number, triplets: number[][]) {
    let right = arr.length - 1;
    // have ref for right end pointer, and iterate while left < right
    while (left < right) {
      // grab the currSum of arr[left] + arr[right]
      let currSum = arr[left] + arr[right];
      // if currSum is equal to targetSum:
      // push into triplets([-(targetSum), arr[left], arr[right]])
      // increment left, decrement right
      if (currSum === targetSum) {
        triplets.push([-targetSum, arr[left], arr[right]])
        left++, right--;
        // while any duplicates going left, increment left to skip them
        while (left < right && arr[left] === arr[left - 1]) left++;
        // while any duplicates going right, decrement right skip them
        while (left < right && arr[right] === arr[right + 1]) right++;
      } 
      // else if targetSum greater than currSum, increment left to find a greater pair
      else if (targetSum > currSum) left++;
      // else decrement right to find a smaller pair
      else right--;
    }
  }
  return triplets;
};

console.log(tripletSumToZero([-5, 2, -1, -2, 3])) //-> [[-5, 2, 3], [-2, -1, 3]]
console.log(tripletSumToZero([-3, 0, 1, 2, -1, 1, -2])) //-> [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
