// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.
// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
// @see https://leetcode.com/problems/combination-sum/

/**
 * x_0 * candidates[0] + x_1 * candidates[1] + ... + x_n * candidates[n] = target
 * となるような係数 x_0, x_1, ..., x_n の組み合わせを求める(ただし、x_i は非負整数)
 *
 * 解答の流れ
 * 例
 * candidates = [2,3,5], target = 8
 * candidates  : 2 3 5
 * coefficient : 0 0 0 = 0 * 2 + 0 * 3 + 0 * 5 = 0 ・・・ x
 *               0 0 1 = 0 * 2 + 0 * 3 + 1 * 5 = 5 ・・・ x
 *               0 0 2 = 10 は target を超えるため、0 0 3 以降は走査しない
 *               0 1 0 = 0 * 2 + 1 * 3 + 0 * 5 = 3 ・・・ x
 *               0 1 1 = 0 * 2 + 1 * 3 + 1 * 5 = 8 ・・・ o ([3,5])
 *               0 1 2 = 13 は target を超えるため、0 1 3 以降は走査しない
 *               0 2 0 = 0 * 2 + 2 * 3 + 0 * 5 = 6 ・・・ x
 *               0 2 1 = 0 * 2 + 2 * 3 + 1 * 5 = 11 は target を超えるため、0 2 2 以降は走査しない
 *               0 3 0 = 0 * 2 + 3 * 3 + 0 * 5 = 9 は target を超えるため、0 3 1 以降は走査しない
 *               1 0 0 = 1 * 2 + 0 * 3 + 0 * 5 = 2 ・・・ x
 *               1 0 1 = 1 * 2 + 0 * 3 + 1 * 5 = 7 ・・・ x
 *               1 0 2 = 12 は target を超えるため、1 0 3 以降は走査しない
 *               1 1 0 = 1 * 2 + 1 * 3 + 0 * 5 = 5 ・・・ x
 *               1 1 1 = 1 * 2 + 1 * 3 + 1 * 5 = 10 は target を超えるため、1 1 2 以降は走査しない
 *               1 2 0 = 1 * 2 + 2 * 3 + 0 * 5 = 8 ・・・ o ([2,3,3])
 *               1 2 1 = 13 は target を超えるため、1 2 2 以降は走査しない
 *               1 3 0 = 1 * 2 + 3 * 3 + 0 * 5 = 11 は target を超えるため、1 3 1 以降は走査しない
 *               2 0 0 = 2 * 2 + 0 * 3 + 0 * 5 = 4 ・・・ x
 *               2 0 1 = 2 * 2 + 0 * 3 + 1 * 5 = 9 は target を超えるため、2 0 2 以降は走査しない
 *               2 1 0 = 2 * 2 + 1 * 3 + 0 * 5 = 7 ・・・ x
 *               2 1 1 = 2 * 2 + 1 * 3 + 1 * 5 = 12 は target を超えるため、2 1 2 以降は走査しない
 *               2 2 0 = 2 * 2 + 2 * 3 + 0 * 5 = 10 は target を超えるため、2 2 1 以降は走査しない
 *               3 0 0 = 3 * 2 + 0 * 3 + 0 * 5 = 6 ・・・ x
 *               3 0 1 = 11 は target を超えるため、3 0 2 以降は走査しない
 *               3 1 0 = 3 * 2 + 1 * 3 + 0 * 5 = 9 は target を超えるため、3 1 1 以降は走査しない
 *               4 0 0 = 4 * 2 + 0 * 3 + 0 * 5 = 8 ・・・ o ([2,2,2,2])
 *               4 0 1 = 13 は target を超えるため、4 0 2 以降は走査しない
 *               5 0 0 = 10 は target を超えるため、5 以降は走査しない
 *
 * 例.1
 * candidates = [2,3,6,7], target = 7
 * candidates  : 2 3 6 7
 * coefficient : 2 1 0 0
 *               0 0 0 1
 *
 * 例.2
 * candidates = [2,3,5], target = 8
 * candidates  : 2 3 5
 * coefficient : 0 1 1
 *               1 2 0
 *               4 0 0
 *
 * 例.3
 * candidates = [2], target = 1
 * candidates  : 2
 * coefficient : 解無し
 */
function combinationSum(candidates: number[], target: number): number[][] {
    // 昇順にソート
    candidates.sort((a, b) => a - b)

    // 解答を格納する配列
    let response: number[][] = []

    // 係数を初期化
    let coefficients = new Array(candidates.length).fill(0)

    const n = candidates.length

    while (true) {
        let sum = dotProduct(coefficients, candidates)

        if (sum === target) {
            // 各candidates[i]に対して、その係数の数だけ candidates[i] を持つ配列を作成して、(= (coeff, i) => Array(coeff).fill(candidates[i]))
            // それらを1つの配列にまとめて、(= flatMap)
            // response に追加する

            // 例
            // candidates = [2,3,5], coefficients = [1,2,0]
            // candidates[0] ・・・ [2]
            // candidates[1] ・・・ [3,3]
            // candidates[2] ・・・ []
            // ↓
            // response に [2,3,3] を追加
            response.push(coefficients.flatMap((coeff, i) => Array(coeff).fill(candidates[i])))
        }

        // idx = 0 から開始しても良い。その場合は探索順序が変わるだけ。
        let idx = n - 1

        while (idx >= 0 && coefficients[idx] * candidates[idx] >= target) {
            coefficients[idx] = 0
            idx--
        }

        if (idx < 0) {
            break
        }

        // 係数配列を更新
        coefficients[idx]++
    }

    return response
}

/**
 * 内積を計算する
 */
function dotProduct(arr1: number[], arr2: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i] * arr2[i];
    }
    return sum;
}

// Test cases
// console.log(combinationSum([1,2], 4)) // Output: [[1,1,1,1],[1,1,2],[2,2]]
// console.log(combinationSum([2,3,6,7], 7)) // Output: [[2,2,3],[7]]
console.log(combinationSum([2,3,5], 8)) // Output: [[2,2,2,2],[2,3,3],[3,5]]
// console.log(combinationSum([2], 1)) // Output: []
