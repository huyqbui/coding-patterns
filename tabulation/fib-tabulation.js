/*

  Write a function 'fib(n)' that takes in a number as an argument.
  The function should return the n-th number of the Fibonacci sequence.

  The 0th number of the sequence is 0.
  The 1st number of the sequenc is 1.

  To generate the next number of the sequence, we sum the previous two.

*/

// create an array that has one greater length than input
// iterate through array of size n


// time: O(n) | Space: O(n)
const fib = (n) => {
  const table = Array(n + 1).fill(0) // make sure last index of array is exactly n, and arrays start at index 0

  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  console.log(table)
  return table[n]
}


console.log(fib(6));
console.log(fib(8))
console.log(fib(50))