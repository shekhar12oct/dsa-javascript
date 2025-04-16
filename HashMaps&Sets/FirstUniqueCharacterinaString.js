// Find the first non-repeating character in a string and return its index. If none exists, return -1.

const firstNonRepeatingChar = (chars) => {
  const map = new Map();
  for (let char of chars) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const [key, value] of map) {
    if (value === 1) {
      return [key, value];
    }
  }
  return -1;
};

console.log(firstNonRepeatingChar('leetcode'));

// Time Complexity - 0(n)
// Space Complexity - 0(n)
