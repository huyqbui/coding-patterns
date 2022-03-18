const makeSquares = (arr: number[]) => {
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
