/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
  Input: nums1 = [1,3], nums2 = [2]
  Output: 2.00000
  Explanation: merged array = [1,2,3] and median is 2.
Example 2:
  Input: nums1 = [1,2], nums2 = [3,4]
  Output: 2.50000
  Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/


const findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  let a = nums1, b = nums2;

  if (b.length < a.length) {
    [a, b] = [b, a]
  }

  let total = a.length + b.length; 
  let half = Math.floor(total / 2) 
  let left = 0;
  let right = a.length - 1; 

  while (true) {
    let i = Math.floor((left + right) / 2) 
    let j = half - i - 2;

    let aLeft = (i >= 0) ? a[i] : -Infinity;
    let aRight = (i + 1 < a.length) ? a[i + 1] : Infinity;
    let bLeft = (j >= 0) ? b[j] : -Infinity;
    let bRight = (j + 1 < b.length) ? b[j + 1] : Infinity;

    if (aLeft <= bRight && bLeft <= aRight) {
      // odd
      if (total % 2) return Math.min(aRight, bRight);

      // even
      return ( Math.max(aLeft, bLeft) + Math.min(aRight, bRight) ) / 2
    } else if (aLeft > bRight) {
      right = i - 1;
    } else {
      left = i + 1
    }
  }
}

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3,4]))