/*
For a given number ‘N’, 
write a function to generate all combination of ‘N’ pairs of balanced parentheses.

Example 1:
  Input: N=2
  Output: (()), ()()

Example 2:
  Input: N=3
  Output: ((())), (()()), (())(), ()(()), ()()()
*/

const genBalancedParens = (num: number) => {
  class ParenStr {
    str: string;
    openCount: number;
    closeCount: number;
    constructor(str: string, openCount: number, closeCount: number) {
      this.str = str;
      this.openCount = openCount;
      this.closeCount = closeCount;
    }
  }

  const result = [];
  const queue = [];
  queue.push(new ParenStr('', 0, 0));
  while (queue.length > 0) {
    const ps: ParenStr | undefined = queue.shift();

    // if we reached max open&close, push to result
    if (ps && ps.openCount === num && ps.closeCount === num) {
      result.push(ps.str);
    } else {
      if (ps && ps.openCount < num) { // check if we can add a '('
        queue.push(new ParenStr(`${ps.str}(`, ps.openCount + 1, ps.closeCount))
      }
      if (ps && ps.openCount > ps.closeCount) { // check if we can add a ')'
        queue.push(new ParenStr(`${ps.str})`, ps.openCount, ps.closeCount + 1))
      }
    }
  }
  return result
}

console.log(genBalancedParens(2)) // -> (()), ()()
console.log(genBalancedParens(3)) // -> ((())), (()()), (())(), ()(()), ()()()

export {}