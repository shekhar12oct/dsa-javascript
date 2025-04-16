// Find all unique triplets in the array that sum to zero.
const threeSum = (nums) => {
  if (nums.length === 0) return [];
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left++], nums[right--]]);
        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// Time Complexity - O(n²)
// Space Complexity - O(1) (excluding output)
