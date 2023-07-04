class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        stack = {}
        for num in nums:
            if (num in stack):
                stack[num] += 1
            else:
                stack[num] = 1

        for key, value in stack.items():
            if (value == 1):
                return key
