/*

Write a function that, given a string S representing the day of the week,
and an integer K(between 0 & 500), returns the day of the week
that is K weekDays later.

Example 1:
Given S = 'Wed', K = 2, output should be 'Fri'.

Example 2:
Given S = 'Sat', K = 23, output should be 'Mon'.

*/


const daysOfWeekLater = (s: string, k: number): string => {
  const weekDays: string[] = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  const weekDaysInd: {[key: string]: number} = {
    'Sun': 0,
    'Mon': 1,
    'Tues': 2,
    'Wed': 3,
    'Thurs': 4,
    'Fri': 5,
    'Sat': 6
  }

  const startingInd = weekDaysInd[s];
  const resultInd = (startingInd + k) % 7
  return weekDays[resultInd]
}

console.log(daysOfWeekLater('Wed', 2)) //-> 'Fri'
console.log(daysOfWeekLater('Sat', 23)) //-> 'Mon'
console.log(daysOfWeekLater('Sun', 6)) //-> 'Sat'
