/*
Have the function MostFreeTime(strArr) read the strArr parameter being passed 
which will represent a full day and will be filled with events that span from time X to time Y in the day.
The format of each event will be hh:mmAM/PM-hh:mmAM/PM. 
For example, strArr may be ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"].
Your program will have to output the longest amount of free time available 
between the start of your first event and the end of your last event in the format: hh:mm.
The start event should be the earliest event in the day and the latest event should be the latest event in the day. 
The output for the previous input would therefore be 01:30 
(with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). 
The input will contain at least 3 events and the events may be out of order.

Example 1:
  input: ['10:00AM-12:30PM', '02:00PM-02:45PM', '09:00AM-09:50AM'];
  output: '01:30' as in 1hr 30min between 12:30PM - 02:00PM
*/

const mostFreeTime = (times) => {
  const formattedTimes = []

  // convert each start and end time to a Date format and push to formattedTimes array
  for (const time of times) {
    const event = time.split('-');
    const timeStart = event[0].slice(0,5); // '10:00'
    const startAM_PM = event[0].slice(5); // 'AM'

    const timeEnd = event[1].slice(0, 5); // '12:30'
    const endAM_PM = event[1].slice(5); // 'PM'

    const start = timeStart + ':00 ' + startAM_PM;
    const end = timeEnd + ':00 ' + endAM_PM;

    const startDay = new Date(`Jan 1, 2022 ${start}`);
    const endDay = new Date(`Jan 1, 2022 ${end}`);

    formattedTimes.push([startDay, endDay])
  }

  // sort formattedTimes by starting time
  formattedTimes.sort((a, b) => a[0] - b[0]);

  return calculateFreeTime(formattedTimes) 

  function calculateFreeTime(times) {
    // declare variable to keep track of greatest max free time;
    let maxTimeInMilli = 0;
    let currIdx = 0;
    let nextIdx = 1;

    // compare each current Time's end with the next Time's start
    while (nextIdx < times.length) {
      const currEnd = times[currIdx][1]; 
      const nextStart = times[nextIdx][0]; 
      let interval = nextStart - currEnd;

      maxTimeInMilli = Math.max(maxTimeInMilli, interval)
      
      currIdx++;
      nextIdx++;
    }

    // convert milliseconds to minutes and hours
    let MilliToMinutes = Math.floor(maxTimeInMilli / 60000); 
    let hours = Math.floor(MilliToMinutes / 60);
    let minutes = MilliToMinutes % 60
    
    if (minutes < 10) minutes = '0' + minutes
    if (hours < 10) hours = '0' + hours

    return `${hours}:${minutes}`
  }
}

const times = ['10:00AM-12:30PM', '02:00PM-02:45PM', '09:00AM-09:50AM'];
const times2 = ['12:15PM-02:00PM','09:00AM-12:11PM','02:02PM-04:00PM'];

console.log(mostFreeTime(times)) //-> 01:30
console.log(mostFreeTime(times2)) //-> 00:04