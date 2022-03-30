/*

Write a function that takes in a non-empty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order.

Example 1:
array = [1, 2, 3, 4, 5, 6, 8, 9]
output = [1, 4, 9, 25, 36, 64, 81]

*/

// Time: O(N) where N is length of input array | Space: O(N) where N is length of squaredArray
const sortedSquareArray = (array: number[]): number[] => {
  const squaredArray: number[] = new Array(array.length).fill(0);
  // use a two pointers approach, for lo and hi indx
  let loIndx = 0,
    hiIndx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    // keep track of small and big values
    const smallVal = array[loIndx];
    const bigVal = array[hiIndx];
    // compare absolute values of smallVal & bigVal, square the larger one, and place it in the squaredArray as needed
    if (Math.abs(smallVal) > Math.abs(bigVal)) {
      squaredArray[i] = smallVal * smallVal;
      loIndx++;
    } else {
      squaredArray[i] = bigVal * bigVal;
      hiIndx--;
    }
  }
  return squaredArray;
}

// Alternative approach, but similar to the first
// Time: O(N) where N is length of input array | Space: O(N) where N is length of squaredArray
const sortedSquareArray2 = (arr: number[]) => {
  const squares: number [] = []
  // store ref to left and right pointer, lastIndex
  let left = 0, right = arr.length - 1, lastIndex = arr.length -1
  // while left is <= right:
  while (left <= right) {
    // grab and store value of arr[left] squared, arr[right] squared
    let leftSq = arr[left] * arr[left]
    let rightSq = arr[right] * arr[right]
    // if leftSquared > rightSquared, reassign squares[lastIndex] to leftSquared
    if (leftSq > rightSq) {
      squares[lastIndex] = leftSq;
      // increment left
      left++;
    } else {
      // else reassign squares[lastIndex] to rightSquared
      squares[lastIndex] = rightSq
      // decrement right
      right--
    }
    // decrement lastIndex
    lastIndex--;
  }
  return squares;
};

console.log(sortedSquareArray([1, 2, 3, 4, 5])) //-> [1, 4, 9, 16, 25]
console.log(sortedSquareArray([-3, -2, -1])) //-> [1, 4, 9]