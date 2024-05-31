// Given an integer array nums, return the length of the longest strictly increasing
// @see https://leetcode.com/problems/longest-increasing-subsequence/description/

function lengthOfLIS(nums: number[]): number {
    // nums.length >= 1 は仮定して良い

    // 1 <= i < nums.length に対して、dp[i]を次で定義する。
    // dp[i] := nums[i]までの要素を使った時の最長狭義単調増加部分列の長さ
    // この時、次が成り立つ。
    // dp[i] = max({ dp[j] | 0 <= j < i, nums[j] < nums[i]}) + 1

    let dp: number[] = new Array(nums.length).fill(1); // dpを1で初期化

    for (let i = 1; i < nums.length; i++) {
        let candidates: number[] = []
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                candidates.push(dp[j])
            }
        }

        if (candidates.length > 0) {
            dp[i] = Math.max(...candidates) + 1;
        }
    }

    return Math.max(...dp)
}

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))

// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4
console.log(lengthOfLIS([0,1,0,3,2,3]))

// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
console.log(lengthOfLIS([7,7,7,7,7,7,7]))
