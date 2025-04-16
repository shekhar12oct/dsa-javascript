// Find the longest common prefix string among an array of strings.

const longestComPrefix = (strs) => {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
};

console.log(longestComPrefix(['flower', 'flow', 'flight']));

// Time Complexity - 0(n*m)
//  Space Complexity - 0(1)
