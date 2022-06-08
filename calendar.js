/*
create a function that will take accept a string of 'year-month'.
The function will generate a 2D matrix of the days in that month as a string.
For months that don't start on Sunday, put a set of empty strings in its place.

Example:
  input: '2020-07'
  output: [
    [  ' ',  ' ',  ' ',  '1',  '2',  '3',  '4' ],
    [  '5',  '6',  '7',  '8',  '9', '10', '11' ],
    [ '12', '13', '14', '15', '16', '17', '18' ],
    [ '19', '20', '21', '22', '23', '24', '25' ],
    [ '26', '27', '28', '29', '30', '31',  ' ' ]
  ]
*/

const calendar = (inputString) => {
  const [year, month] = inputString.split('-');

  const startDay = new Date(year, month -1, 1).getDay() // returns 0-6 where 0=Sunday, 1=Monday, etc...
  const daysInMonth = new Date(year, month, 0).getDate(); 

  const arr = []
  const maxRows = Math.ceil((daysInMonth + startDay) / 7) // Calculate max rows we'll need
  let day = 1;
  for (let row = 0; row < maxRows; row++) {
    const newRow = []
    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < startDay || day > daysInMonth) {
        newRow.push(' ');
      } else {
        newRow.push(String(day))
        day++;
      }
    }
    arr.push(newRow)
  }
  return arr;

}

console.log(calendar('2020-07'))
/*
[ [ ' ', ' ', ' ', '1', '2', '3', '4' ],
  [ '5', '6', '7', '8', '9', '10', '11' ],
  [ '12', '13', '14', '15', '16', '17', '18' ],
  [ '19', '20', '21', '22', '23', '24', '25' ],
  [ '26', '27', '28', '29', '30', '31', ' ' ] ]
*/