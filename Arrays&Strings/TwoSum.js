// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 5, 7, 8], 13));

// Hash map

// Array lookup

// Complement search

// O(n) - time complexity

//O(n) - space complexity