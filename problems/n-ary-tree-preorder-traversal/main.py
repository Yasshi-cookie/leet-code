# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children

class Solution:
    def preorder(self, root: Node) -> list[int]:
        if (root == None):
            return []

        response = [root.val]
        for childNode in root.children:
            response += self.preorder(childNode)

        return response
