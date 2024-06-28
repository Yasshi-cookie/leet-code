// You are given an m x n binary matrix grid.
// An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
// You may assume all four edges of the grid are surrounded by water.
// The area of an island is the number of cells with a value 1 in the island.
// Return the maximum area of an island in grid. If there is no island, return 0.
// @see https://leetcode.com/problems/max-area-of-island/

function maxAreaOfIsland(grid: number[][]): number {
    /**
     * grid[i][j]を含む連結成分の面積を計算し、その際に訪問した陸地をマークする
     */
    function calcAreaAndMarkConnectedLand(grid: number[][], i: number, j: number): number {
        if (
            ! (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length)
        ) {
            // gridの範囲外である場合は面積0として終了
            return 0
        }

        if (! isIsland(grid, i, j)) {
            // 現在訪問しているノードが陸地でない場合も面積0として終了
            return 0
        }

        // 以下は陸地の場合

        grid[i][j] = -1 // 訪問済みとしてマークする

        // 現在訪問している陸地の面積（=1）+ 上下左右の陸地の面積
        return 1
            + calcAreaAndMarkConnectedLand(grid, i - 1, j) // ↑ 上
            + calcAreaAndMarkConnectedLand(grid, i + 1, j) // ↓ 下
            + calcAreaAndMarkConnectedLand(grid, i, j - 1) // ← 左
            + calcAreaAndMarkConnectedLand(grid, i, j + 1) // → 右
    }

    /**
     * grid[i][j]が陸地であるかどうかを判定する
     */
    function isIsland(grid: number[][], i: number, j: number): boolean {
        return grid[i][j] === 1
    }

    const m = grid.length
    const n = grid[0].length

    let response = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isIsland(grid, i, j)) {
                // 未訪問の陸地を発見した場合、
                // その陸地を含む連結成分の面積を計算して、最大値を更新する
                response = Math.max(response, calcAreaAndMarkConnectedLand(grid, i, j))
            }
        }
    }

    return response
}

// Test case
const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
console.log(maxAreaOfIsland(grid)) // 6
