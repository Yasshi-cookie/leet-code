class Solution:
    SYMBOL_VALUE_HASH = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }

    PREV_SYMBOLS = [
        'IV',
        'IX',
        'XL',
        'XC',
        'CD',
        'CM',
    ]

    def romanToInt(self, s: str) -> int:
        separtedSymbols = self.separator(s)
        print(separtedSymbols)
        return sum(list(
            map(lambda symbol: Solution.SYMBOL_VALUE_HASH[symbol], separtedSymbols)
        ))

    def separator(self, s: str) -> list:
        response = []

        for char in s:
            if (len(response) >= 1 and (response[-1] + char) in Solution.PREV_SYMBOLS):
                appendChar = response[-1] + char
                response.pop()
                response.append(appendChar)
            else:
                response.append(char)

        return response

print(Solution().romanToInt('III'))
print(Solution().romanToInt('LVIII'))
print(Solution().romanToInt('MCMXCIV'))

# Example 1:
# Input: s = "III"
# Output: 3
# Explanation: III = 3.

# Example 2:
# Input: s = "LVIII"
# Output: 58
# Explanation: L = 50, V= 5, III = 3.

# Example 3:
# Input: s = "MCMXCIV"
# Output: 1994
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

#   D L V
# M C X I
