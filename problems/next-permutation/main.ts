// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
// For example, for arr = [1,2,3], the following are all the permutations of arr:
// [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

// The next permutation of an array of integers is the next lexicographically greater permutation of its integer.
// More formally, if all the permutations of the array are sorted in one container according to their lexicographical order,
// then the next permutation of that array is the permutation that follows it in the sorted container.
// If such arrangement is not possible, the array must be rearranged
// as the lowest possible order (i.e., sorted in ascending order).
// ・For example, the next permutation of arr = [1,2,3] is [1,3,2].
// ・Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// ・While the next permutation of arr = [3,2,1] is [1,2,3]
//     because [3,2,1] does not have a lexicographical larger rearrangement.

// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.
// @see https://leetcode.com/problems/next-permutation/

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const n = nums.length

    if (n <= 1) {
        // n <= 1 の場合、何もする必要が無い️
        return
    }

    // 以下、n >= 2 の場合

    const originalNums = [...nums]

    /**
     * numsのi番目とj番目の要素を入れ替える
     */
    function transposition(nums: number[], i: number, j: number): void {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    /**
     * numsのi番目からj番目までの要素を反転する
     */
    function reverse(nums: number[], i: number, j: number): void {
        while (i < j) {
            transposition(nums, i++, j--)
        }
    }

    // numsの後ろから見ていき、nums[i] < nums[i+1] を満たす最大のiを求める
    let i = n - 2
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }

    if (i >= 0) {
        // そのようなiが存在する場合、nums[i] < nums[j] を満たす最大のjを求める
        let j = n - 1
        while (j >= 0 && nums[i] >= nums[j]) {
            j--
        }

        // nums[i] と nums[j] を入れ替える
        transposition(nums, i, j)
    }

    // nums[i+1] 以降を反転する
    reverse(nums, i + 1, n - 1)

    if (originalNums.join('') === nums.join('')) {
        // numsが最大の順列の場合、最小の順列にする
        nums.sort((a, b) => a - b)
    }
};

// Test cases
console.log(nextPermutation([1, 2, 3])) // Output: [1, 3, 2]
console.log(nextPermutation([3, 2, 1])) // Output: [1, 2, 3]
console.log(nextPermutation([1, 1, 5])) // Output: [1, 5, 1]
