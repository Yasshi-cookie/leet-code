# 与えられた置換numsの2乗を返す
class Solution:
    def buildArray(self, nums: list[int]) -> list[int]:
        ans = [0] * len(nums)
        for i in range(len(nums)):
            ans[i] = nums[nums[i]]

        return ans
