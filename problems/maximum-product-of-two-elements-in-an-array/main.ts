// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/
// Given the array of integers nums, you will choose two different indices i and j of that array.
// Return the maximum value of (nums[i]-1)*(nums[j]-1).

/**
 * 解説
 *
 * f(x, y) := (x - 1) * (y - 1) (x, y >= 1)
 *
 * 任意のx, x', y, y' >= 1 に対して
 * x > x' かつ y > y' ならば f(x, y) > f(x', y')
 * が成り立つ。
 *
 * 従って、f(x, y)が最大となるのは x と y が最大になる時である。
 */
function maxProduct(nums: number[]): number {
    // numsを降順に並び替え
    nums.sort((a, b) => a > b ? -1 : 0)
    return (nums[0] - 1) * (nums[1] - 1)
};
