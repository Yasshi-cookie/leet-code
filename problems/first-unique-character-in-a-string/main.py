class Solution:
    def firstUniqChar(self, s: str) -> int:
        stack = {}

        for index, char in enumerate(s):
            if (char in stack):
                stack[char].append(index)
            else:
                stack[char] = [index]

        for char, indexes in stack.items():
            if (len(indexes) == 1):
                return indexes[0]

        return -1

    # 別解
    # def firstUniqChar(self, s: str) -> int:
    #     stack = self.constructDict({}, s, 0)

    #     for char, indexes in stack.items():
    #         if (len(indexes) == 1):
    #             return indexes[0]

    #     return -1

    # def constructDict(self, stack: dict, s: str, counter: int) -> dict:
    #     if (s == ''):
    #         return stack

    #     if (s[0] in stack):
    #         stack[s[0]].append(counter)
    #     else:
    #         stack[s[0]] = [counter]

    #     return self.constructDict(stack, s[1:], counter + 1)
