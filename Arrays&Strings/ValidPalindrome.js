// Check if a string is a palindrome (ignore casing and non-alphanumerics).

const isValidPalindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let lp = 0,
    rp = str.length - 1;
  while (lp < rp) {
    if (str[lp++] !== str[rp--]) {
      return false;
    }
  }
  return true;
};

console.log(isValidPalindrome('A man, a plan, a canal: Panama'));

// Time Complexity: O(n)
// Space Complexity: O(n)
