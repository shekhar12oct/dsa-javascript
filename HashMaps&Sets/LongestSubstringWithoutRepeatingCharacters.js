// Find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
  let longestStr = 0;
  let set = new Set();
  let lp = 0;
  let rp = 0;
  while (rp < s.length) {
    let letter = s[rp];
    if (!set.has(letter)) {
      set.add(letter);
      longestStr = Math.max(set.size, longestStr);
      rp++;
    } else {
      set.delete(s[lp]);
      lp++;
    }
  }
  return longestStr;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3

// Time Complexity - 0(n)
// Space Complexity - 0(n)
