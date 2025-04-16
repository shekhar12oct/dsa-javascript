// Find the longest sequence of consecutive numbers in an array (order doesn’t matter).

var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (let n of set) {
        if (!set.has(n - 1)) {
            let length = 1;

            while (set.has(n + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;    
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4

// Time Complexity - 0(n)
// Space Complexity - 0(n)
