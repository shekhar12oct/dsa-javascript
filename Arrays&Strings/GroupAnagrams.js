// Group words that are anagrams of each other.

const groupAnagrams = (strs) => {
  const map = new Map();
  for (let str of strs) {
    const sorted = str.split('').sort().join();
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }
  return [...map.values()];
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
