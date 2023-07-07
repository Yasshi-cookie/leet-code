class Solution:
    def numUniqueEmails(self, emails: list[str]) -> int:
        stack = {}
        for email in emails:
            splittedArray = email.split('@')
            stack[splittedArray[0].replace('.', '').split('+')[0] + '@' + splittedArray[1]] = 0

        return len(stack)

test = ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com']
print(Solution().numUniqueEmails(test))
