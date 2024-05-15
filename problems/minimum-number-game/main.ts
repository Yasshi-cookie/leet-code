// You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:
// Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
// Now, first Bob will append the removed element in the array arr, and then Alice does the same.
// The game continues until nums becomes empty.
// Return the resulting array arr.

// @see https://leetcode.com/problems/minimum-number-game/description/

function numberGame(nums: number[]): number[] {
    nums.sort((a, b) => a - b);

    let response: number[] = [];

    while (nums.length > 0) {
        const alice = nums.shift()
        const bob = nums.shift()

        if (alice && bob) {
            response.push(bob);
            response.push(alice);
        }
    }

    return response
};

// 別解
// 昇順にソートして「0番目と1番目」、「2番目と3番目」...の要素を入れ替える
// function numberGame(nums: number[]): number[] {
//     nums = nums.sort((a, b) => a - b)

//     for (let i = 0; i < nums.length; i += 2) {
//       [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
//     }

//     return nums
// }
