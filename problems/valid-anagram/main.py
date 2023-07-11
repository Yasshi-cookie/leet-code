class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        stack = {}
        for char in s:
            if (char in stack):
                stack[char] += 1
            else:
                stack[char] = 1

        for char in t:
            if (char in stack):
                stack[char] -= 1
            else:
                return False

        for value in stack.values():
            if (value != 0):
                return False

        return True

s = 'anagram'
t = 'nagaram'
print(Solution().isAnagram(s, t))
