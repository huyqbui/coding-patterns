/*

There is a bookstore owner that has a store open for n minutes. 
Every minute, some number of customers enter the store. 
You are given an integer array customers of length n where customers[i] is the number of the customer 
that enters the store at the start of the ith minute 
and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy. 
You are given a binary array grumpy where grumpy[i] 
is 1 if the bookstore owner is grumpy during the ith minute, 
and is 0 otherwise.

When the bookstore owner is grumpy, 
the customers of that minute are not satisfied, 
otherwise, they are satisfied.

The bookstore owner knows a secret technique to keep themselves 
not grumpy for minutes consecutive minutes, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

Example 1: 

Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

*/

const maxSatisfied = function(customers: number[], grumpy: number[], minutes: number) {
  // const grumpy = [0, 1, 0, 1, 0, 1, 0, 1] = 
  // const custom = [1, 0, 1, 2, 1, 1, 7, 5] = 18
  // const mHappy = [1, 0, 1, 0, 1, 0, 7, 0] = 10  
  // const mGrump = [0, 0, 0, 2, 0, 1, 0, 5] = 8
  
  

};

const grumpy: number[] = [0, 1, 0, 1, 0, 1, 0, 1];
const custom: number[] = [1, 0, 1, 2, 1, 1, 7, 5]; // customers
const minutes: number = 3;

console.log(maxSatisfied(custom, grumpy, minutes))