// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.
// @see https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
    // nums の各要素の出現回数をマップに格納する
    const numToFrequency = new Map<number, number>()
    for (const num of nums) {
        numToFrequency.set(num, (numToFrequency.get(num) ?? 0) + 1)
    }

    return Array.from(numToFrequency) // numToFrequency を配列に変換。各要素は [num, frequency] の形式
        .sort((a, b) => b[1] - a[1]) // 出現回数の降順でソートして
        .map(([num]) => num) // num のみを取り出す。[num] は分割代入で、一般に [first second] = [1, 2] と書くと first に 1 が代入される
        .slice(0, k) // 上位 k 個を取り出す
};

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)) // Output: [1,2]
console.log(topKFrequent([1], 1)) // Output: [1]
