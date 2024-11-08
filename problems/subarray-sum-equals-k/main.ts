// Given an array of integers nums and an integer k,
// return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.
// @see https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * 例
 * nums = [1, 2, 4, -4, 3], k = 3
 * num sum sum-k count         map
 *  1   1    -2    0   { 0 => 1, 1 => 1 }
 *  2   3     0    1   { 0 => 1, 1 => 1, 3 => 1 }
 *  4   7     4    1   { 0 => 1, 1 => 1, 3 => 1, 7 => 1 }
 * -4   3     0    2   { 0 => 1, 1 => 1, 3 => 2, 7 => 1 }
 *  3   6     3    4   { 0 => 1, 1 => 1, 3 => 2, 7 => 1, 6 => 1 }
 *
 * 【解答方針】
 * nums := [a1, a2, a3, ..., an]
 * とする。
 * 1 <= i <= j <= n に対して、
 * a[i] + a[i+1] + ... + a[j] = k となるような (i, j) の組み合わせを求める。
 * これらの組み合わせは、求める部分配列に1対1に対応する。
 * したがって、先ほどの条件式を満たす(i, j)の組み合わせの数を求めれば良い。
 *
 * sum(i) := a1 + a2 + ... + ai (1 <= i <= n)
 * sum(0) := 0
 * sum(i, j) を i番目からj番目までの和とする。すなわち、
 * sum(i, j) := a[i] + a[i+1] + ... + a[j] (1 <= i <= j <= n)
 * とする。
 * このとき、sum(i, j) = sum(j) - sum(i-1) である。
 *
 * したがって、
 * sum(i, j) = k となるような(i, j) (1 <= i <= j <= n) の組み合わせの数を求めれば良い。
 *
 * 任意のj (1 <= j <= n) を取る。
 * この時、任意のi (1 <= i <= j) に対して、
 * sum(i, j) = k は、 sum(i-1) = sum(j) - k と同値である。
 *
 * よって、
 * 各 j (1 <= j <= n) に対して、sum(i-1) = sum(j) - k となるような i (1 <= i <= j) の数を求めれば良い。(*)
 */
function subarraySum(nums: number[], k: number): number {
    const map = new Map<number, number>([[0, 1]])
    let response = 0
    let sum = 0

    for (let j = 0; j < nums.length; j++) {
        // 累積和を計算
        sum += nums[j] // nums[0] + nums[1] + ... + nums[j] = sum(j)

        if (map.has(sum - k)) {
            // (*) により、各 j に対して、 sum(i-1) = sum(j) - k となるような i (1 <= i <= j) の数が求める答えである。
            response += map.get(sum - k)!
        }

        // 累積和をmapに追加する
        map.set(sum, (map.get(sum) || 0) + 1)
    }

    return response
};

// Test cases
// console.log(subarraySum([1, 1, 1], 2)); // Output: 2
// console.log(subarraySum([1, 2, 3], 3)); // Output: 2
console.log(subarraySum([1, 2, 4, -4, 3], 3)); // Output: 3
