// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
// The algorithm for myAtoi(string s) is as follows:
// 1. Whitespace: Ignore any leading whitespace (" ").
// 2. Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
// 3. Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// 4. Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.
// @see https://leetcode.com/problems/string-to-integer-atoi/

function myAtoi(s: string): number {
    // 1. 先頭の空白を無視する
    s = s.trim()

    const n = s.length
    let sign = 1

    // 2. 符号： 次の文字が'-'か'+'かをチェックすることによって符号を決定する。
    if (s[0] === '+') {
        s = s.slice(1)
    } else if (s[0] === '-') {
        sign = -1
        s = s.slice(1)
    }

    let num = 0
    for (let i = 0; i < n; i++) {
        const char = s[i]

        // 3. 変換： 桁以外の文字に出会うか、文字列の最後に達するまで、先頭のゼロを飛ばして整数を読み込む。 桁が読み込まれなかった場合、結果は0である。
        // 3-1. 数字の場合はそのまま読み込む
        if (char in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) {
            num = num * 10 + Number(char)
        } else {
            // 3-2. 数字以外の場合は読み込むを終了する
            break
        }
    }

    // 4. 丸め： 整数が32ビットの符号付き整数範囲[-2^31、2^31 - 1]外にある場合、整数を範囲内にとどまるように丸める。 特に、-2^31未満の整数は-2^31に丸め、2^31 - 1より大きい整数は2^31 - 1に丸める。
    const response = sign * num

    const boundsValue = 2 ** 31
    if (response > boundsValue - 1) {
        return boundsValue - 1
    }

    if (response < -boundsValue) {
        return -boundsValue
    }

    return response
};

// Test cases
// console.log(myAtoi("42") === 42)
// console.log(myAtoi(" -42") === -42)
// console.log(myAtoi("1337c0d3") === 1337)
// console.log(myAtoi("0-1") === 0)
// console.log(myAtoi("words and 987") === 0)
console.log(myAtoi("-91283472332") === -2147483648)
