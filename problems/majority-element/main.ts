// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.
// @see https://leetcode.com/problems/majority-element/description/

function majorityElement(nums: number[]): number {
    const n = nums.length

    let stack = {}

    for (let i = 0; i < n; i++) {
        const num = nums[i];

        if (num in stack) {
            stack[num] += 1
        } else {
            stack[num] = 1
        }

        if (stack[num] > n / 2) {
            return num
        }
    }

    return 0
};

const nums = [3,2,3]
console.log(majorityElement(nums))
