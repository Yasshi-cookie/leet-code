// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected
// and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.
// @see https://leetcode.com/problems/house-robber/

/**
 * 例.1
 * nums = [1,2,3,1]
 * nums  : 1 2 3 1
 * steal : o x o x
 * dp    : 1 2 4 4
 *
 * 例.2
 * nums = [2,7,9,3,1]
 * nums  : 2 7  9  3  1
 * steal : o x  o  x  o
 * dp    : 2 7 11 10 12
 *
 * 例.3
 * nums = [5,1,2,5]
 * nums  : 5 1 2  5
 * steal : o x x  o
 * dp    : 5 5 7 10
 */
function rob(nums: number[]): number {
    const n = nums.length
    // dp[i] には、強盗がi番目の家まで進んだ時に盗むことができる最大の金額を格納する
    let dp = (new Array(n)).fill(0)
    dp[0] = nums[0]

    if (n === 1) {
        return dp[0]
    }

    dp[1] = Math.max(nums[0], nums[1])

    if (n === 2) {
        return dp[1]
    }

    // 以下、n >= 3 の場合

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[n - 1]
};

// Test cases
// console.log(rob([1,2,3,1])) // Output: 4
// console.log(rob([2,7,9,3,1])) // Output: 12
console.log(rob([5,1,2,5])) // Output: 10
