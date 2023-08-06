class Solution:
    def findCenter(self, edges: list[list[int]]) -> int:
        hashMap = {}
        for edge in edges:
            for num in edge:
                if (num in hashMap):
                    hashMap[num] += 1
                else:
                    hashMap[num] = 1

        for num, appearCount in hashMap.items():
            if (appearCount == len(edges)):
                return num

edges = [[1,2],[5,1],[1,3],[1,4]]
print(Solution().findCenter(edges))
