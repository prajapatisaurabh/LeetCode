/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  const n = nums.length;
  let left = 0;
  let right = queries.length;
  let result = -1;

  const canZeroArray = function (nums, queries, k) {
    const n = nums.length;
    const diff = new Array(n + 1).fill(0);

    for (let i = 0; i < k; i++) {
      let [l, r, val] = queries[i];
      diff[l] -= val;
      if (r + 1 < n) {
        diff[r + 1] += val;
      }
    }

    let currentDecrement = 0;
    for (let i = 0; i < n; i++) {
      currentDecrement += diff[i];
      if (nums[i] + currentDecrement > 0) {
        return false;
      }
    }
    return true;
  };

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);

    if (canZeroArray(nums.slice(), queries, mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};
