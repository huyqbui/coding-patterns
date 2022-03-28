/*

Given two non-empty arrays of integers, write a function that determines
whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent
in the array but that are in the same order as they appear in the array. For
instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4],
and so do the number [2, 4]. Note that a single numbe rin an array and the array
itself are both valid subsequences of the array.

Example 1:
  array = [5,1,22,25,6,-1,8,10]
  sequence = [1,6,-1,10]
  output = true

*/

// Time: O(N) where N is length of array | Space: O(1) Constant
const isValidSubsequence = (array: number[], sequence: number[]): boolean => {
  // use a two pointers approach: one pointer for array ind, one for sequence ind
  let arrInd = 0,
    seqInd = 0;
  // iterate through nums in array while index's are less than array and sequence lenght
  while (arrInd < array.length && seqInd < sequence.length) {
    // if num is the first num in seq, then increment seq ind to check next num
    if (array[arrInd] === sequence[seqInd]) seqInd++;
    arrInd++;
  }
  // if sequence ind = sequence legnth, then it's a valid subsequence
  if (seqInd === sequence.length) return true;
  return false;
}

console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [1,6,-1,10])) //-> true
console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [5,1,22,10])) //-> true
console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [1,6,-1,5])) //-> false
console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [5,26,22,8])) //-> false