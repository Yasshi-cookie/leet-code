// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
//  (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);

// @see https://leetcode.com/problems/zigzag-conversion/

function convert(s: string, numRows: number): string {
    /**
     * 文字列sのi番目の文字が何行目に出力されるかを返す
     */
    function getRowNumber(numRows: number, i: number): number {
        const remainder = i % (2 * (numRows - 1))
        return remainder <= (numRows - 1) ? remainder : 2 * (numRows - 1) - remainder
    }

    /**
     * 文字列sのi番目の文字が何列目に出力されるかを返す
     */
    function getColumnNumber(numRows: number, i: number): number {
        // iを(numRows - 1)で割った商
        const quotient = Math.floor(i / (numRows - 1))
        // iを(numRows - 1)で割った余り
        const remainder = i % (numRows - 1)

        if (quotient % 2 === 0) {
            // 商が偶数の場合
            return (quotient / 2) * (numRows - 1)
        } else {
            // 商が奇数の場合
            return remainder + ((quotient - 1) / 2) * (numRows - 1)
        }
    }

    if (numRows === 1) {
        return s
    }

    return s.split('')
        .map((char, index) => {
            // 各文字の行番号と列番号を取得する
            return {
                char,
                row: getRowNumber(numRows, index),
                column: getColumnNumber(numRows, index),
            }
        })
        .sort((a, b) => {
            // 次のルールで並び替える
            // ①aとbの行番号が小さいものを優先にする
            // ②行番号が同じ場合は列番号が小さいものを優先にする
            if (a.row !== b.row) {
                return a.row - b.row
            }

            return a.column - b.column
        })
        .map(({ char }) => char)
        .join('')
};

/**
 * 以下はすべてデバッグ用のコード
 */

const debug = (s: string, numRows: number): void => {
    const printer = new ZigZagPrint(s)
    printer.printByNumRows(numRows)
}

class ZigZagPrint {
    private static readonly SPACE = ' '

    constructor(
        private readonly s: string,
    ) {
    }

    /**
     * sを指定された行数numRowsで出力する
     *
     * 例：
     * s = "PAYPALISHIRING" とする。
     *
     * numRows = 4 の場合、以下のように出力する
     * 出力：
     * P     I    N
     * A   L S  I G
     * Y A   H R
     * P     I
     */
    printByNumRows(numRows: number): void {
        // queueを行数がnumRows、列数がs.lengthの行列（2次元配列）として初期化する
        let queue: string[][] = Array(numRows)
            .fill(null)
            .map(() => Array(this.s.length).fill(ZigZagPrint.SPACE))

        for (let i = 0; i < this.s.length; i++) {
            queue[this.getRowNumber(numRows, i)][this.getColumnNumber(numRows, i)] = this.s[i]
        }

        for (let i = 0; i < numRows; i++) {
            console.log(queue[i].join(' '))
        }
    }

    /**
     * 文字列sのi番目の文字が何行目に出力されるかを返す
     *
     * 例：
     * numRows = 4
     * i → 出力
     * 0 → 0
     * 1 → 1
     * 2 → 2
     * 3 → 3
     * 4 → 2
     * 5 → 1
     * 6 → 0
     * 7 → 1
     * 8 → 2
     *
     * プロットすると以下のようになる
     *
     * y
     * ↑
     * 3    /\      /\
     * 2   /  \    /  \
     *    /    \  /    \
     * 1 /      \/      \
     * 0    3   6   9    12 → x
     */
    private getRowNumber(numRows: number, i: number): number {
        if (numRows <= 0) {
            throw new Error('numRowsは0より大きい値を指定してください')
        }

        if (numRows === 1) {
            return 0
        }

        const remainder = i % (2 * (numRows - 1))
        return remainder <= (numRows - 1) ? remainder : 2 * (numRows - 1) - remainder
    }

    /**
     * 文字列sのi番目の文字が何列目に出力されるかを返す
     *
     * 例：
     * numRows = 4
     * i → 出力
     * 0 → 0
     * 1 → 0
     * 2 → 0
     * 3 → 0
     * 4 → 1
     * 5 → 2
     * 6 → 3
     * 7 → 3
     * 8 → 3
     * 9 → 3
     * 10 → 4
     * 11 → 5
     * 12 → 6
     * 13 → 6
     *
     * プロットすると以下のようになる
     *
     * y
     * ↑        ____/
     * 3       /
     * 2      /
     * 1_____/
     * 0    3   6   9    12 → x
     */
    private getColumnNumber(numRows: number, i: number): number {
        if (numRows <= 0) {
            throw new Error('numRowsは0より大きい値を指定してください')
        }

        if (numRows === 1) {
            return i
        }

        // iを(numRows - 1)で割った商
        const quotient = Math.floor(i / (numRows - 1))
        // iを(numRows - 1)で割った余り
        const remainder = i % (numRows - 1)

        if (quotient % 2 === 0) {
            // 商が偶数の場合
            return (quotient / 2) * (numRows - 1)
        } else {
            // 商が奇数の場合
            return remainder + ((quotient - 1) / 2) * (numRows - 1)
        }
    }
}

const s = "A"
const numRows = 1

debug(s, numRows)
console.log(convert(s, numRows))
// const s = "PAYPALISHIRING"
// const numRows = 1
// console.log(convert(s, numRows))


// numRows = 1
/**
 * PAYPALISHIRING
 */

// numRows = 2
/**
 * P Y A I H R N
 * A P L S I I G
 */

// numRows = 3
/**
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 */

// numRows = 4
/**
 * P     I     N
 * A   L S   I G
 * Y A   H R
 * P     I
 */

// numRows = 5
/**
 * P       H
 * A     S I
 * Y   I   R
 * P L     I G
 * A       N
 */
