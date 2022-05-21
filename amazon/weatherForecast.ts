/*
Amazon Alexa AI team is working to add feature that suggest days 
for camping based on the weather forecast.
According to survey, a day is ideal for camping if the amount of rainfall 
has been non-increasing for the prior k days from the considered day 
and will be non-decreasing for the following k days from the considered day. 

TODO:
Given the predicted rainfall for the next n days, find all ideal days. 
Formally a day is ideal if the following is true
day[i-k] >= day[i-k+1] >= .... >= day[i-1] >= day[i] <= day[i+1] <= .... <= day[i+k-1] <= day[i+k]
Return the ideal days in ascending order. 
The ith element of the array represents the data for the day i+1. 

Example 1:
  given/Input day = [3,2,2,2,3,4], k = 2
  here day1 >= day2 >= day3 <= day4 <= day5, so day3(2) is ideal
  also day2 >= day3 >= day4 <= day5 <= day6, so day4(2) is ideal
  The answer is [3,4]

Ex 2:
  Given/Input day=[1,0,1,0,1], k=1
  So, day1 >= day2 <= day3
  day3 >= day4 <= day5
  Output: [2,4]

Ex 3: 
  Given/input day=[1,0,0,0,1], k=2
  So, day1 >= day2 >= day3  <= day4 <= day5
  Output: [3] 

Ex 4:
  Given day=[1,1,1,1,1,1,1,1,1,1], k=3
  day1 >= day2 >= day3 >= day4 <= day5 <= day6 <= day7
  day2 >= day3 >= day4 >= day5 <= day6 <= day7 <= day8
  day3 >= day4 >= day5 >= day6 <= day7 <= day8 <= day9
  day4 >= day5 >= day6 >= day7 <= day8 <= day9 <= day10
  Output: [4,5,6,7]

Input method takes 2 arguments day[n] and k(an integer)
returns int[], the ideal days in sorted ascending
*/

// Time: O(n * k) where n is length of days
// Space: O(1) if we ignore resulting array, else O(n)
const weatherForecast = (days: number [], k: number) => {
  const result = [];
  // iterate through days, and check left neighbor values, then right neighbor values
  for (let i = k; i < days.length - k; i++) {
    let prevDaysCheck = true, nextDaysCheck = true;

    // while prev <= k, if prevDay < currDay, update prevDaysCheck to false
    for (let prev = 1, j = 0; prev <= k; prev++, j++) {
      let currDay = days[i - j];
      let prevDay = days[i - j - prev];

      if (prevDay < currDay) prevDaysCheck = false;   
    }

    // check days next from curr day
    // while next <= k, if nextDay < currDay, update nextDaysCheck to false
    for (let next = 1, j = 0; next <= k; next++, j++) {
      let currDay = days[i + j]
      let nextDay = days[i + j + next]

      if (nextDay < currDay) nextDaysCheck = false;
    }

    // if both checks pass, push corresponding index to result
    if (prevDaysCheck && nextDaysCheck) 
      result.push(i + 1);
  }

  return result;
}

const days1 = [3, 2, 2, 2, 3, 4]
//                L
//                      R
const days2 = [1, 0, 1, 0, 1]
const days3 = [1, 0, 0, 0, 1]
const days4 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

console.log(weatherForecast(days1, 2)) //-> [3, 4]
console.log(weatherForecast(days2, 1)) //-> [2, 4]
console.log(weatherForecast(days3, 2)) //-> [3]
console.log(weatherForecast(days4, 3)) //-> [4, 5, 6, 7]