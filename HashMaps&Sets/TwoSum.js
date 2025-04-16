// Find two indices i and j such that nums[i] + nums[j] == target.

const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
  }
  return -1;
};
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

// Time Complexity - 0(n)
// Space Complexity - 0(n)
