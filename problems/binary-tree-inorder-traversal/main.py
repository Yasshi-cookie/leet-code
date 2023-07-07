from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> list[int]:
        if (root == None):
            return []

        if (root.left == None and root.right == None):
            return [root.val]

        return self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right)

test1 = TreeNode(1, None, TreeNode(2, TreeNode(3, None, None), None))
test2 = None
test3 = TreeNode(1, None, None)
print(Solution().inorderTraversal(test3))
