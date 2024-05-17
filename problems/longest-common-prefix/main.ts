// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// @see https://leetcode.com/problems/longest-common-prefix/description/

function longestCommonPrefix(strs: string[]): string {
    const minLength = Math.min(...strs.map(str => str.length))

    let result = ''

    for (let i = 0; i < minLength; i++) {
        const currentChar = strs[0][i];

        if (strs.some(str => str[i] !== currentChar)) {
            // 全ての文字列が同じprefixを持っていない場合は、それまでのprefixを返す
            return result;
        }

        result += currentChar;
    }

    return result
};
