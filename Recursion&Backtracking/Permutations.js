// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

const permute = (nums, arr = [], res = []) => {
  // base case for recursion
  if (nums.length === 0) return res.push([...arr]);

  for (let i = 0; i < nums.length; i++) {
    let rest = nums.filter((n, index) => index !== i);
    arr.push(nums[i]);
    permute(rest, arr, res);
    arr.pop();
  }
  return res;
};

console.log(permute([1, 2, 3]));

// Time Complexity - 0(n!)
// Space Complexity - 0(n)  recursive stack
