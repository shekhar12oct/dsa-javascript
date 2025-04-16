// Rotate an array to the right by k steps.

const rotateArr = (nums, k) => {
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

const reverse = (nums, i, j) => {
  while (i < j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
  return nums;
};

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));

// 1st reverse -- [7,6,5,4,3,2,1]  (0,length-1)
// 2nd reverse -- [5,6,7,4,3,2,1] (0,k-1)
// 3rd reverse -- [5,6,7,1,2,3,4] (k,length-1)

// Time Complexity - 0(n)
// Space Complexity - 0(1)
