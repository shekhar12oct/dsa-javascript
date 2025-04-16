// Return the k most frequent elements in an array.

var topKFrequent = function (nums, k) {
  const result = [];
  const map = new Map();
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });
  for (let [num, count] of map) {
    result.push([count, num]);
  }
  result.sort((a, b) => b[0] - a[0]);
  console.log(result);
  return result.slice(0, k).map((item) => item[1]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]

// Time Complexity - 0(n)
// Space Complexity - 0(n)
