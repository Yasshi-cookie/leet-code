class Solution:
    def hammingWeight(self, n: int) -> int:
        binOfN = bin(n)
        stack = {
            '1': 0
        }

        for bit in binOfN:
            if (bit in stack):
                stack[bit] += 1
            else:
                stack[bit] = 1

        return stack['1']
