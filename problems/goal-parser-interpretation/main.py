class Solution:
    MAPPING = {
        'G': 'G',
        '()': 'o',
        '(al)': 'al',
    }
    def interpret(self, command: str) -> str:
        # 解釈された
        converted_str = ''
        not_yet_converted_str = ''

        for s in command:
            if (s in self.MAPPING.keys()):
                converted_str += self.MAPPING[s]
            else:
                not_yet_converted_str += s
                if (not_yet_converted_str in self.MAPPING.keys()):
                    converted_str += self.MAPPING[not_yet_converted_str]
                    not_yet_converted_str = ''

        return converted_str

command = "(al)G(al)()()G"
print(Solution().interpret(command))
