// Check if a string of parentheses is valid (i.e., every open has a matching close in the right order).

const isValid = (s) => {
  let stack = [];
  let map = { ')': '(', '[': ']', '{': '}' };
  for (let char in s) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

console.log(isValid('()[]{}'));

// Time Complexity - 0(n)
// Sapce Complexity - 0(n)
