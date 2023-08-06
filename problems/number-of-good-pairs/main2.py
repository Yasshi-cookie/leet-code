# 別解
# 数字ごとにその数字が何回登場したか数えるだけで十分である
class Solution:
    def numIdenticalPairs(self, nums: list[int]) -> int:
        # numsの各数値num何回登場したかを格納する
        numAppearCountHashMap = {}

        for num in nums:
            if (num in numAppearCountHashMap):
                numAppearCountHashMap[num] += 1
            else:
                numAppearCountHashMap[num] = 1

        response = 0
        for count in numAppearCountHashMap.values():
            # ある数値の登場回数がcountの時、その数値を2つ選ぶ通りは「countC2 = (count * (count - 1))/2」
            response += int((count * (count - 1))/2)

        return response

nums = [1,2,3,1,1,3]
print(Solution().numIdenticalPairs(nums))
