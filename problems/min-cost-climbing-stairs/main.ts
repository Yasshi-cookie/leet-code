// https://leetcode.com/problems/min-cost-climbing-stairs/description/

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

// Constraints:
// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999

/**
 * 方針 ----------------------------------------------------
 * ・階段の登り方が1段上がるか2段上がるかの2通り。
 * ・ゴールに辿り着くパターンは
 * ①「ゴールの直前のstepから1段上がる」または
 * ②「2個前のstepから2段上がるか」
 * の2通り。
 * ・ゴールに辿り着くまでにかかるコストの最小値は、
 * 上記のパターン①で発生するコストの最小値とパターン②で発生するコストの最小値である。
 *
 * 上記の事実から、問題を小さなサブ問題にしていく。
 * --------------------------------------------------------
 *
 * 定義 ----------------------------------------------------
 * 数値からなるリストnumbersに対するこの問題（Min Cost Climbing Stairs）の解を
 * MCCS(numbers)と書くことにする
 * --------------------------------------------------------
 *
 * Lをcostの要素の個数とする。
 *
 * 定義 ----------------------------------------------------
 * 0 <= n <= L を満たす任意の整数nに対して、P(n)を次で定める
 * P(0) := 0
 * P(n) := MCCS([cost[0],cost[1],...,cost[n-1]]) (n >= 1のとき)
 * --------------------------------------------------------
 *
 * L >= 2のとき次の主張が成り立つ
 * 主張 ----------------------------------------------------
 * 2 <= n <= L を満たす任意の整数nに対して、以下の等式が成り立つ
 * P(n) = min(P(n-1) + cost[n-1], P(n-2) + cost[n-2])
 * --------------------------------------------------------
 *
 * 例 ----------------------------------------------------
 * cost = [1,100,1,1,1,100,1,1,100,1]とする
 * L = 10である。
 * P(5)について定義から直接求めた値と上記の主張を使って求めた値とで比較してみよう。
 *
 * a) 定義から直接求める
 * P(5) = 「[1,100,1,1,1,100]に対するMin Cost Climbing Stairsの解」 = 3
 *
 * b) 主張を用いて求める
 * P(0) = 0
 * P(1) = 「[1]に対するMin Cost Climbing Stairsの解」 = 0
 * P(2) = min(P(1) + cost[1], P(0) + cost[0]) = min(100, 1) = 1
 * P(3) = min(P(2) + cost[2], P(1) + cost[1]) = min(2, 100) = 2
 * P(4) = min(P(3) + cost[3], P(2) + cost[2]) = min(3, 2) = 2
 * P(5) = min(P(4) + cost[4], P(3) + cost[3]) = min(3, 3) = 3
 *
 * a)とb)のそれぞれの結果を比較すると同じ値になっていることがわかる
 * --------------------------------------------------------
 *
 * 次の主張は自明である
 * 主張 ----------------------------------------------------
 * ・P(0) = P(1) = 0
 * ・MCCS(cost) = P(L)
 * --------------------------------------------------------
 */
function minCostClimbingStairs(cost: number[]): number {
    /**
     * stack[n]はコメントの説明文のP(n)に該当する
     * 注）「cost.length >= 2」は保証されている
     */
    let stack = {
        0: 0,
        1: 0,
    }

    for (let n = 2; n <= cost.length; n++) {
        stack[n] = Math.min(stack[n-1] + cost[n-1], stack[n-2] + cost[n-2])
    }

    return stack[cost.length]
};

// Example 1:
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

const cost = [10,15,20]
// const cost = [1,100,1,1,1,100,1,1,100,1]
console.log(minCostClimbingStairs(cost))
