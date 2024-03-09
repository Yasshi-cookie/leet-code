// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// @see https://leetcode.com/problems/single-number/

/**
 * XOR演算子「^」を使う。
 * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
 *
 * XOR演算子^は次の性質を持つ
 * 1) a ^ b = b ^ a
 * 2) a ^ a = 0
 *
 */
function singleNumber(nums: number[]): number {
    let answer = 0

    nums.forEach((num) => {
        answer ^= num
    })

    return answer
}
