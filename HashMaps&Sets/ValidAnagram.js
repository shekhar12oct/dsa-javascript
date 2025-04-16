// Check if two strings are anagrams (same letters, same count, different order).

const validAnagram = (str1, str2) => {
  let count = {};
  if (str1.length !== str2.length) return -1;
  for (const char of str1) {
    count[char] = (count[char] || 0) + 1;
  }
  for (const char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
};

console.log(validAnagram('anagram', 'nagaram'));

// Time Complexity - 0(n)
// Space Complexity - 0(n)
