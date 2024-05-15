// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// @see https://leetcode.com/problems/longest-common-prefix/description/

function longestCommonPrefix(strs: string[]): string {
    const minLength = Math.min(...strs.map(str => str.length))

    let result = ''

    for (let i = 0; i < minLength; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return result
            }
        }

        result += strs[0][i]
    }

    return result
};
