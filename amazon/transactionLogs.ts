/*
A Company parses logs of online store user transactions/activity to flag fraudulent activity.
The log file is represented as an Array of arrays. The arrays consist of the following data:
[ <# of transactions>]
For example:

['345366 89921 45']
Note: the data is space delimited
So, the log data would look like:

[
['345366 89921 45'],
['029323 38239 23']
...
]

Write a function to parse the log data to find distinct users that meet or cross a certain threshold.

The function will take in 2 inputs:
logData: Log data in form an array of arrays
threshold: threshold as an integer

Output: It should be an array of userids that are sorted.

If same userid appears in the transaction as userid1 and userid2, it should count as one occurrence, not two.

Example:
Input:
logData:

[
  ['345366 89921 45'],
  ['029323 38239 23'],
  ['38239 345366 15'],
  ['029323 38239 77'],
  ['345366 38239 23'],
  ['029323 345366 13'],
  ['38239 38239 23']
]
threshold: 3

Output: [ '029323', '38239', '345366' ]
Explanation:
Given the following counts of userids, there are only 3 userids that meet or exceed the threshold of 3.
*/

// Time: O(n logn) due to sorting the output array
// Space: O(n) 
const parseLogs = (logs: string[][], threshold: number) => {
  // iterate through logs, extract userId, senderId, 
  // create a users object to store userId keys and their frequency values
  // iterate through users object, and push to output array any userId's whose frequency >= threshold
  // return the array sorted by ascending userId
  const users: {[key: string]: number} = {}
  const output: string[] = []
  let data;
  for (const log of logs) {
    data = log[0].split(' ')
    const [userId, senderId] = data;
    if (userId === senderId) {
      !users.hasOwnProperty(userId) ? users[userId] = 1 : users[userId] ++
    } else {
      !users.hasOwnProperty(userId) ? users[userId] = 1 : users[userId] ++
      !users.hasOwnProperty(senderId) ? users[senderId] = 1 : users[senderId] ++
    }
  }
  for (const ID in users) {
    if (users[ID] >= threshold) output.push(ID)
  }
  return output.sort((a,b) => Number(a) - Number(b));
}

const logs = [
  ['345366 89921 45'],
  ['029323 38239 23'],
  ['38239 345366 15'],
  ['029323 38239 77'],
  ['345366 38239 23'],
  ['029323 345366 13'],
  ['38239 38239 23']
]

console.log(parseLogs(logs, 3)) //-> [ '029323', '38239', '345366' ]