const balancedBrackets = (s) => {
  const stack = [];
  if (s.length % 2 !== 0) return false;

  for (const bracket of s) {
    const prevBracket = stack[stack.length - 1];

    // if bracket is a closing bracket with matching opening bracket
    if (
      (bracket === '}' && prevBracket === '{') ||
      (bracket === ']' && prevBracket === '[') ||
      (bracket === ')' && prevBracket === '(')
    ) {
      stack.pop();
    }

    // bracket is a closing bracket, or opening bracket
    else stack.push(bracket);
  }

  // if stack empty, all brackets were balanced
  return stack.length === 0;
};

console.log(balancedBrackets('{}')); //-> true
console.log(balancedBrackets('[(])')); //-> false
console.log(balancedBrackets('([])[]({})')); //-> true
console.log(balancedBrackets('([}}])')); //-> false
console.log(balancedBrackets('()[]{}')); //-> true
