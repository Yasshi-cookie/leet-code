// You are given an m x n integer array grid.
// There is a robot initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
// The robot can only move either down or right at any point in time.
// An obstacle and space are marked as 1 or 0 respectively in grid.
// A path that the robot takes cannot include any square that is an obstacle.
// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The testcases are generated so that the answer will be less than or equal to 2 * 109.

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

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

        if (obstacleGrid[i][j] === 1) {
            // 障害物がある場合はGoalに到達できないので0を返す
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

// Test cases
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])); // 2
console.log(uniquePathsWithObstacles([[0,1],[0,0]])); // 1
