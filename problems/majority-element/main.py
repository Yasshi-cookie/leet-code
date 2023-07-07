class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        if (len(nums) % 2 == 0):
            halfNum = len(nums)/2
        else:
            halfNum = (len(nums) + 1)/2

        stack = {}
        for num in nums:
            if (num in stack):
                stack[num] += 1
            else:
                stack[num] = 1

            if (stack[num] >= halfNum):
                return num

print(Solution().majorityElement([1,2,2]))
