// With memoization

const fib = (n, memo = {}) => {
  if (n <= 1) return n;
  if (n in memo) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// Time Complexity: O(n)
// Space Complexity: O(n)
