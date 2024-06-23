// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.
// @see https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

/**
 * 次の2つの場合に分けて考える
 * (a) numsが元の配列と同じ順番に並んでいる場合
 * (b) numsが元の配列をk回回転して得られた配列の場合(0 < k < n)
 *
 * (a)の場合
 *   numsの先頭の要素が最小値となる。
 * (b)の場合
 *   numsの昇順の並びが途切れている箇所が存在する。
 *   すなわち、nums[i] > nums[i+1]となるiが存在する。
 *   このとき、nums[i+1]が最小値となる。
 *   愚直に解くと次のようになるが、O(n)の計算量となる。
 *   function findMinByLinearOrder(nums: number[]): number {
 *       const n = nums.length
 *
 *       if (nums[0] < nums[n - 1]) {
 *           // 元の配列と同じ順番に並んでいる場合
 *           return nums[0]
 *       }
 *
 *       for (let i = 0; i < n; i++) {
 *           if (nums[i] > nums[i + 1]) {
 *               // 昇順の並びが途切れている場合
 *               // 切れ目の次の要素が最小値
 *               return nums[i + 1]
 *           }
 *       }
 *   }
 *
 *   2分探索を用いることでO(log n)の計算量で解くことができる。
 */
function findMin(nums: number[]): number {
    const n = nums.length

    if (n === 1) {
        return nums[0]
    }

    if (nums[0] < nums[n - 1]) {
        // 元の配列と同じ順番に並んでいる場合
        return nums[0]
    }

    let left = 0
    let right = n - 1

    // 元の配列の先頭の要素（最小値）を二分探索する
    // 多くてもn回の探索では終了する。
    for (let count = 0; count < n; count++) {
        if (nums[left] > nums[left + 1]) {
            // 昇順の並びが途切れている場合
            // 切れ目の次の要素が最小値
            return nums[left + 1]
        }

        const mid = Math.floor((left + right) / 2)
        const midValue = nums[mid]
        const rightValue = nums[right]
        const leftValue = nums[left]

        if (midValue > rightValue) {
            // 元の配列の先頭はmidより右にある
            left = mid
        } else if (midValue < leftValue) {
            // 元の配列の先頭はmidより左にある
            right = mid
        }
    }

    throw new Error('最小値が見つかりませんでした。')
};

// Test case
// console.log(findMin([5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4])) // 1
// console.log(findMin([5, 1, 2, 3, 4])) // 1
// console.log(findMin([3, 4, 5, 1, 2])) // 1
// console.log(findMin([4, 5, 6, 7, 0, 1, 2])) // 0
// console.log(findMin([11, 13, 15, 17])) // 11
console.log(findMin([1, 2, 3])) // 1
console.log(findMin([3, 1, 2])) // 1
console.log(findMin([2, 3, 1])) // 1
console.log(findMin([1, 2, 3, 4])) // 1
console.log(findMin([4, 1, 2, 3])) // 1
console.log(findMin([3, 4, 1, 2])) // 1
console.log(findMin([2, 3, 4, 1])) // 1
