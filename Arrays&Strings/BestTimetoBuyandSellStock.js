// Find the maximum profit from a single buy/sell.

const bestTimeStock = (prices) => {
  let minPrice = prices[0];
  let maxProft = 0;
  for (let i = 1; i < prices.length; i++) {
    maxProft = Math.max(maxProft, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProft;
};

console.log(bestTimeStock([7, 1, 5, 3, 6, 4]));

// One-pass

// Track min and diff

// O(n) - time complexity

//O(1) - space complexity