// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) {
        return [1];
    }

    // 以下、rowIndex >= 1 の場合
    let dp: number[][] = [[1]];
    for (let i = 1; i <= rowIndex; i++) {
        let newRow: number[] = [];
        newRow[0] = 1; // 各行の最初の要素は1
        for (let j = 1; j < i; j++) {
            // 現在のj番目の要素newRow[j]は、前の行dp[j-1]のj-1番目とj番目の要素の和
            newRow[j] = dp[i-1][j-1] + dp[i-1][j];
        }
        newRow[i] = 1; // 各行の最後の要素も1
        dp.push(newRow);
    }

    return dp[rowIndex];
};

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]
const rowIndex1 = 3;
console.log(getRow(rowIndex1)); // Output: [1, 3, 3, 1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]
const rowIndex2 = 0;
console.log(getRow(rowIndex2)); // Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]
const rowIndex3 = 1;
console.log(getRow(rowIndex3)); // Output: [1, 1]
