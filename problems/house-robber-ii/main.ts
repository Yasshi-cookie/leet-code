// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed. All houses at this place are arranged in a circle.
// That means the first house is the neighbor of the last one.
// Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police
// if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
// @see https://leetcode.com/problems/house-robber-ii/

function rob(nums: number[]): number {
    const n = nums.length

    if (n === 1) {
        return nums[0]
    }

    if (n === 2) {
        return Math.max(nums[0], nums[1])
    }

    // 最初の家を強盗する場合とそうで無い場合とで分ける
    return Math.max(
        // (1) 最初の家を強盗する場合
        // このとき、最後の家は強盗できないので、最初の家から最後の1つ前の家までが対象範囲である。
        // この範囲に対しては、強盗できる金額の求めかたは家が直線上に並んでいる場合と同じである。
        robThroughStraightWay(nums.slice(0, n - 1)),
        // (2) 最初の家を強盗しない場合
        // このとき、最初の家の次の家から最後の家までが対象範囲である。
        // この範囲に対しても、強盗できる金額の求めかたは家が直線上に並んでいる場合と同じである。
        robThroughStraightWay(nums.slice(1, n))
    )
};

/**
 * 家が直線上に並んでいる場合の強盗の最大金額を求める
 * house-robber1のケース
 */
function robThroughStraightWay(nums: number[]): number {
    const n = nums.length
    // dp[i] には、強盗がi番目の家まで進んだ時に盗むことができる最大の金額を格納する
    let dp = (new Array(n)).fill(0)

    // n >= 3 は仮定して良い
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[n - 1]
};

// Test cases
console.log(rob([2,3,2])) // Output: 3
console.log(rob([1,2,3,1])) // Output: 4
console.log(rob([1,2,3])) // Output: 3
