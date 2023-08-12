# タイムアウトになる。
class KthLargest:
    def __init__(self, k: int, nums: list[int]):
        self.k = k
        nums.sort()
        self.nums = nums

    def add(self, val: int) -> int:
        self.nums = self.appendKeepingOrder(val, self.nums)
        return self.nums[-self.k]

    def appendKeepingOrder(self, x: int, accendingOrderedList: list[int]) -> list[int]:
        if (len(accendingOrderedList) == 0):
            return [x]

        if (x <= accendingOrderedList[0]):
            return [x] + accendingOrderedList

        return [accendingOrderedList[0]] + self.appendKeepingOrder(x, accendingOrderedList[1:])

    # def searchKthElement(self) -> int:

kthLargest = KthLargest(3, [4, 5, 8, 2])
print(kthLargest.add(3))  # return 4
print(kthLargest.add(5))  # return 5
print(kthLargest.add(10)) # return 5
print(kthLargest.add(9))  # return 8
print(kthLargest.add(4))  # return 8

# Constraints:

# 1 <= k <= 10^4
# 0 <= nums.length <= 10^4
# -10^4 <= nums[i] <= 10^4
# -10^4 <= val <= 10^4
# At most 10^4 calls will be made to add.
# It is guaranteed that there will be at least k elements in the array when you search for the kth element.
