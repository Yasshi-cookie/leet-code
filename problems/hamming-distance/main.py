class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        bits = bin(x ^ y)

        response = 0
        for bit in bits:
            if (bit == '1'):
                response += 1

        return response

x = 1
y = 4
print(Solution().hammingDistance(x, y))
