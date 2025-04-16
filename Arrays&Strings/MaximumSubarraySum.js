// Kadane’s Algorithm (Maximum Subarray Sum)
// Find the contiguous subarray with the largest sum.

const maxSubArray = (nums) => {
  let maxSum = nums[0],
    currentSum = nums[0];
  let start = 0,
    end = 0,
    tempStart = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i;
    } else {
      currentSum += nums[i];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }
  return {
    maxSum,
    subarray: nums.slice(start, end + 1),
  };
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
