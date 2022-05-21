/*
Problem: Given a sorted array arr[] of n elements, 
  write a function to search a given element x in arr[].

Example 1: 
  Input: arr[] = {10, 20, 30, 50, 60, 80, 110, 130, 140, 170}, x = 110
  Output: 6
  Explanation: Element x is present at index 6

Example 2:
  Input: arr[] = {10, 20, 30, 40, 60, 110, 120, 130, 170}, x = 175
  Output: -1
  Explanation: Element x is not present in arr[].
*/

const binarySearch = (arr: number[], x: number) => {
  let low = 0, high = arr.length - 1, mid;
  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) {
      return mid;
    }
    if (arr[mid] < x) 
      low = mid + 1;
    else 
      high = mid - 1;
  }
  return -1;
}

const test = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170]

console.log(binarySearch(test, 110))