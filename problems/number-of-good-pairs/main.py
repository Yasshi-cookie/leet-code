class Solution:
    def numIdenticalPairs(self, nums: list[int]) -> int:
        response = 0
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if (nums[i] == nums[j]):
                    response += 1

        return response

nums = [1,2,3,1,1,3]
print(Solution().numIdenticalPairs(nums))
