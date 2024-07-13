// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
// The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The test cases are generated so that the answer will be less than or equal to 2 * 10^9.
// @see https://leetcode.com/problems/unique-paths/

/**
 * m x nのグリッドに対して、(0, 0)からGoalに到達するためのユニークなパスの数を返す。
 */
function uniquePaths(m: number, n: number): number {
    // m x n のグリッドを作成
    // grid[i][j]には、(i, j)からGoalに到達するためのユニークなパスの数を記録していく。
    const grid = Array.from({ length: m }, () => Array(n).fill(null))

    /**
     * m x nのグリッドに対して、(i, j)からGoalに到達するためのユニークなパスの数をメモしてその値を返す。
     */
    function calcUniquePathAndMark(i: number, j: number): number {
        if (i >= m || j >= n) {
            // girdの範囲外に出た場合はGoalに到達できないので0を返す
            return 0
        }

        if (i === m - 1 && j === n - 1) {
            // Goalに到達した場合
            return 1
        }

        if (grid[i][j] !== null) {
            // すでに計算済みの場合はその値を返す
            return grid[i][j]
        }

        // (i, j)からGoalに到達するためのユニークなパスの数
        // = (i + 1, j)からGoalに到達するためのユニークなパスの数 + (i, j + 1)からGoalに到達するためのユニークなパスの数
        grid[i][j] = calcUniquePathAndMark(i + 1, j) + calcUniquePathAndMark(i, j + 1)

        return grid[i][j]
    }

    return calcUniquePathAndMark(0, 0)
};

// テストケース
// console.log(uniquePaths(3, 7)) // 28
console.log(uniquePaths(3, 2)) // 3
