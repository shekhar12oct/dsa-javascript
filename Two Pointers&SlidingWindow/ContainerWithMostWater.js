// Find the two lines that, together with the x-axis, form a container that holds the most water.

const maxArea = (height) => {
  const lp = 0;
  const rp = height.length - 1;
  const max = 0;

  while (lp < rp) {
    const area = Math.min(height[lp], height[rp]) * (rp - lp);
    max = Math.max(max, area);
    height[left] < height[right] ? lp++ : rp--;
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Time Complexity: O(n)
// Space Complexity: O(1)
