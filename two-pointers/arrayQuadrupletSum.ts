/*

Given an unsorted array of integers arr and a number s, 
write a function findArrayQuadruplet that 
finds four numbers (quadruplet) in arr that sum up to s. 
Your function should return an array of these numbers in an ascending order. 
If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. 
You’re asked to return the first one you encounter (considering the results are sorted).


Example:
  input:  
    arr = [2, 7, 4, 0, 9, 5, 1, 3]
    s = 20
  output: [0, 4, 7, 9] 
    The ordered quadruplet of (7, 4, 0, 9) whose sum is 20. 
    Notice that there are two other quadruplets whose sum is 20:                     
    (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re                     
    asked to return the just one quadruplet (in an                    
    ascending order)
*/

// Time: O(n^3) due to our three nested loops
// Space: O(1) since we used a constant amount of space
const arrayQuadrupletSum = (arr: number[], s: number) => {
  // use a two pointers approach
  // sort the array and then use a nested loop
  // get the target sum by subtracting s from arr[i] + arr[j]
  // get a low and high pointer, and look to see all four pointers can equal the target

  if (arr.length < 4) return [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      let target = s - (arr[i] + arr[j]);

      let low = j + 1, high = arr.length - 1;

      while (low < high) {
        if (arr[low] + arr[high] < target) low++;
        else if (arr[low] + arr[high] > target) high--;
        else return [ arr[i], arr[j], arr[low], arr[high] ];
      }
    }
  }
  return [];
}

console.log(arrayQuadrupletSum([1, 2, 3], 6)) //-> []
console.log(arrayQuadrupletSum([4, 4, 4, 2], 16)) //-> []
console.log(arrayQuadrupletSum([2, 7, 4, 0, 9, 5, 1, 3], 20)) //-> [0, 4, 7, 9]
console.log(arrayQuadrupletSum([1,2,3,4,5,9,19,12,12,19], 40)) //-> [4, 5, 12, 19]