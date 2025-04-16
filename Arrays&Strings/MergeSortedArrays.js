// You’re given two sorted arrays, merge the second into the first one in-place.

const mergeSortArr = (arr1, m, arr2, n) => {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }
  while (i < m) merged.push(nums1[i]);
  while (j < n) merged.push(nums2[j]);

  for (let k = 0; k < m + n; k++) {
    nums1[k] = merged[k];
  }
  return nums1;
};

console.log(mergeSortArr([1, 2, 3, 0, 0, 0], [2, 5, 6]));

// Time Compleixity - O(m+n);
// Space Complexity - O(m+n);
