// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// Return the answer in any order.

const letterCombinations = (digits, start = 0) => {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  if (!digits) return [];
  if (start >= digits.length) return [''];
  const digit = digits[start];
  const letters = map[digit];
  const combinations = [];

  const suffixCondition = letterCombinations(digits, start + 1);
  for (const letter of letters) {
    for (const suffix of suffixCondition) {
      combinations.push(letter + suffix);
    }
  }
  return combinations;
};

console.log(letterCombinations('23'));

// Time Complexity - 0(n*4^n)
// Space Complexity - O(4^n * n)
