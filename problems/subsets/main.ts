// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// @see https://leetcode.com/problems/subsets/

/**
 * 集合Aに対して、次で定義される(集合を要素に持つ)集合をAの冪集合という
 *
 * Aの冪集合 := {B | B は A の部分集合}
 *
 * 例：
 * A = {1, 2, 3}とする。Aの冪集合を求める。
 * Aの各要素を含むか含まないかで全ての組み合わせを考えれば良い。
 * 1   2   3 : 部分集合
 * o → o → o ： {1, 2, 3}
 * o → o → x ： {1, 2}
 * o → x → o ： {1, 3}
 * o → x → x ： {1}
 * x → o → o ： {2, 3}
 * x → o → x ： {2}
 * x → x → o ： {3}
 * x → x → x ： {}
 * 合計：2^3 = 8通り
 */
function subsets(nums: number[]): number[][] {
    if (nums.length === 0) {
        // 要素がなくなれば空集合を返して終了
        return [[]]
    }

    // 先頭の要素を含む場合と含まない場合で再帰的に処理していく
    const subsetsNotHasHead = subsets(nums.slice(1)) // numsから先頭の要素を除いたものをstackに渡す

    // ここで、「先頭の要素を含む全てのパターン」は
    // 「先頭の要素を含まない全てのパターン」に先頭の要素を追加したものであることに注意する
    return [
        // 先頭の要素を含む全てのパターン
        ...subsetsNotHasHead.map((subset) => [nums[0], ...subset]),
        // 先頭の要素を含まない全てのパターン
        ...subsetsNotHasHead,
    ]
}

console.log(subsets([1, 2, 3]))
// [
//     [ 1, 2, 3 ], [ 1, 2 ],
//     [ 1, 3 ],    [ 1 ],
//     [ 2, 3 ],    [ 2 ],
//     [ 3 ],       []
// ]
