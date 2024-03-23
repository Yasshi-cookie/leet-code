// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// @see https://leetcode.com/problems/pascals-triangle/description/

function generate(numRows: number): number[][] {
    let response = [[1]]

    if (numRows === 1) {
        // numRows >= 1 の場合
        return response
    }

    // numRows >= 2 の場合

    for (let i = 1; i < numRows; i++) {
        let directoryAboveRow = Array.from(response[response.length - 1]) // コピーを取っておく
        directoryAboveRow.unshift(0)
        directoryAboveRow.push(0)

        // パスカルの三角形のすぐ上の行から、現在の行を組み立てる
        let row : number[] = []

        for (let j = 0; j < directoryAboveRow.length - 1; j++) {
            row.push(directoryAboveRow[j] + directoryAboveRow[j + 1])
        }

        response.push(row)
    }

    return response
};

const numRows = 3
console.log(generate(numRows))
