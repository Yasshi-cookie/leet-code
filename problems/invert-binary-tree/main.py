from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def toJson(self) -> str:
        leftNode = 'None'
        rightNode = 'None'

        if (self.left != None):
            leftNode = self.left.toJson()
        if (self.right != None):
            rightNode = self.right.toJson()

        return 'TreeNode{val: ' + str(self.val) + ', left: ' + leftNode + ', right: ' + rightNode + '}'

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if (root == None):
            return None

        return TreeNode(root.val, self.invertTree(root.right), self.invertTree(root.left))

test = TreeNode(4, TreeNode(2, TreeNode(1, None, None), TreeNode(3, None, None)), TreeNode(7, TreeNode(6, None, None), TreeNode(9, None, None)))
print(Solution().invertTree(test).toJson())
