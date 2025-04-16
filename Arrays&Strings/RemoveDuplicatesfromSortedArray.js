// Remove duplicates in-place and return the new length.

const removeDuplicates = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2]));

// Time Complexity - 0(n)
// Space Complexity - 0(1)
