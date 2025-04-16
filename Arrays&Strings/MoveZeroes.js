// Move all zeroes to the end while maintaining the relative order of non-zero elements.

const moveZeros = (nums) => {
  let insertPos = 0;
  for (let num in nums) {
    if (num !== 0) {
      nums[insertPos++] = num;
    }
  }
  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
  return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12]));

// O(n) - time complexity

//O(1) - space complexity
