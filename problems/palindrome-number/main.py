class Solution:
    def isPalindrome(self, x: int) -> bool:
        if (x < 0):
            return False

        stringInt = str(x)
        halfCount = self.getHalfCount(len(stringInt))

        for i, char in enumerate(stringInt):
            if (i >= halfCount):
                break

            if (not (stringInt[i] == stringInt[-(i + 1)])):
                return False

        return True

    def getHalfCount(self, number: int) -> int:
        if (number % 2 == 0):
            return int(number / 2)
        else:
            return int((number - 1) / 2)

print(Solution().isPalindrome(10))
