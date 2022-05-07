/*

You want to schedule a list of jobs in d days. 
Jobs are dependent (i.e To work on the ith job, 
  you have to finish all the jobs j where 0 <= j < i).

You have to finish at least one task every day. 
The difficulty of a job schedule is the sum of difficulties of each day of the d days. 
The difficulty of a day is the maximum difficulty of a job done on that day.

You are given an integer array jobDifficulty and an integer d. 
The difficulty of the ith job is jobDifficulty[i].

Return the minimum difficulty of a job schedule. 
If you cannot find a schedule for the jobs return -1.

Example 1:
  Input: jobDifficulty = [6,5,4,3,2,1], d = 2
  Output: 7
  Explanation: 
    First day you can finish the first 5 jobs, total difficulty = 6.
      max(6,5,4,3,2) = 6
    Second day you can finish the last job, total difficulty = 1.
      max(1) = 1
    The difficulty of the schedule = 6 + 1 = 7 

Example 2:
  Input: jobDifficulty = [9,9,9], d = 4
  Output: -1
  Explanation: 
    If you finish a job per day you will still have a free day. 
    Since there are more days than jobs, you cannot create a schedule for the jobs.
*/

/*
1. For each day, we want to update dp from i = 0 to i = n - d.
  Why n - d? Well, think of it this way. After d = 1 is completed, our dp looks like this : [ 7, 7, 7, 3, 0 ]
  When d = 2, would it make sense to update dp[3]? No, because we can't distribute one job, namely, [3] over 2 days.
  This upper limit ensures that we never update dp where there aren't enough jobs to fill the days specified by our outer loop.
2. For each iteration of i over dp, we want to go over all of the elements in A from j = i to j = n - d.
3. In this innermost loop, keep track of maxd, and for each iteration, the minimum is either dp[i] or maxd + dp[j + 1], whichever is smallest.
Now two final things.

What's up with the 0 at the end of our dp array?
We need that 0 to properly update dp during day 1.
Why do we reassign dp[i] = inf at the beginning of each iteration of the second loop?
If we don't assign infinity, dp[i] might not be replaced with a new value.
*/
const minDifficultyJobs = (jobDifficulty: number[], D: number) => {
  let jobLen = jobDifficulty.length,
    job = jobDifficulty,
    inf = Infinity,
    maxD;

  // if more days than jobs, then we can't create a schedule
  if (jobLen < D) return -1;

  let arr = Array(jobLen + 1).fill(inf);
  arr[jobLen] = 0;

  for (let day = 1; day <= D; day++) {
    for (let i = 0; i <= jobLen - day; i++) {
      maxD = 0;
      arr[i] = inf;

      for (let j = i; j <= jobLen - day; j++) {
        maxD = Math.max(maxD, job[j]);
        arr[i] = Math.min(arr[i], maxD + arr[j + 1]);
      }
    }
  }
  return arr[0];
};

console.log(minDifficultyJobs([6, 5, 4, 3, 2, 1], 2)); //-> 7
console.log(minDifficultyJobs([9, 9, 9], 4)); //-> 7
console.log(minDifficultyJobs([1, 1, 1], 3)); //-> 7
export {};
