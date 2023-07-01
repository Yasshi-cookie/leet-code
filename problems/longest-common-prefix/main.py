class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if (len(strs) == 0):
            return ''

        minLength = min(map(lambda str: len(str), strs))

        if (minLength == 0):
            return ''

        response = ''
        for i in range(minLength):
            charOfFirstStrInList = strs[0][i]
            for str in strs:
                if (not (str[i] == charOfFirstStrInList)):
                    return response

            response += charOfFirstStrInList

        return response

test = Solution().longestCommonPrefix(["a"])
print(test)
