class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        mostLeftZeroPointer = 0
        for i in range(len(nums)):
            print(nums)
            if (nums[i] != 0):
                # numsのi番目の要素と0要素のうち一番左側にある要素を入れ替える
                tmp = nums[i]
                nums[i] = nums[mostLeftZeroPointer]
                nums[mostLeftZeroPointer] = tmp

                mostLeftZeroPointer += 1

        return nums

nums = [0,1,0,3,12]
print(Solution().moveZeroes(nums))
