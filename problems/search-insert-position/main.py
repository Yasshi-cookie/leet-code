class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        return self.getInsertIndex(nums, target, 0, len(nums) - 1) # リストの全ての区間[0, len(nums) - 1]で検索

    def getInsertIndex(self, nums: list[int], target: int, left: int, right: int) -> int:
        print('[' + str(left) + ', ' + str(right) + ']')
        if (left > right):
            return left

        mideum = (left + right + 1) // 2
        if (target > nums[mideum]):
            return self.getInsertIndex(nums, target, mideum + 1, right) # 検索範囲を[midumn + 1, right]に更新
        elif (target < nums[mideum]):
            return self.getInsertIndex(nums, target, left, mideum - 1) # 検索範囲を[left, mideum - 1]に更新
        else:
            return mideum

nums = [1,3,5,7,9,11]
target1 = 4
print(Solution().searchInsert(nums, target1))

# Given a sorted array of distinct integers and a target value,
# return the index if the target is found.
# If not, return the index where it would be if it were inserted in order.
# You must write an algorithm with O(log n) runtime complexity.
