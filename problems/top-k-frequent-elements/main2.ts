// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.
// @see https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
    // nums の各要素の出現回数をマップに格納する
    const numToFrequency = new Map<number, number>()
    for (const num of nums) {
        numToFrequency.set(num, (numToFrequency.get(num) ?? 0) + 1)
    }

    return 
    // const sortedNums = Array.from(numToFrequency.entries())
    //     .sort((a, b) => b[1] - a[1])
    //     .slice(0, k)
    //     .map(([num]) => num)

    return sortedNums
};

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2)) // Output: [1,2]
console.log(topKFrequent([1], 1)) // Output: [1]
