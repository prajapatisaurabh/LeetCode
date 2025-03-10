/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  let startIndex = 0,
    endIndex = 0;
  let ob = ["a", "i", "o", "u", "e"];
  let consonentCount = 0;
  let result = 0;
  let count = 0;
  const map = new Map();
  while (endIndex < word.length) {
    if (ob.includes(word[endIndex])) {
      map.set(word[endIndex], (map.get(word[endIndex]) || 0) + 1);
    } else if (word[endIndex]) {
      consonentCount++;
    }
    while (consonentCount > k) {
      if (ob.includes(word[startIndex])) {
        map.set(word[startIndex], map.get(word[startIndex]) - 1);
        if (!map.get(word[startIndex])) {
          map.delete(word[startIndex]);
        }
      } else {
        consonentCount--;
      }
      startIndex++;
    }
    while (map.size === 5 && consonentCount === k) {
      if (ob.includes(word[startIndex])) {
        map.set(word[startIndex], map.get(word[startIndex]) - 1);
        if (!map.get(word[startIndex])) {
          map.delete(word[startIndex]);
        }
      } else {
        consonentCount--;
      }
      count++;
      startIndex++;
    }
    result += count;
    endIndex++;
    if (word[endIndex] && !ob.includes(word[endIndex])) {
      count = 0;
    }
  }
  return result;
};
