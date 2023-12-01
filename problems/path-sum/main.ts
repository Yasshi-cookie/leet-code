// https://leetcode.com/problems/path-sum/
// Given the root of a binary tree and an integer targetSum,
// return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) {
        return false;
    }

    if (root.left === null && root.right === null) {
        return targetSum - root.val === 0;
    }

    if (root.left === null) {
        return hasPathSum(root.right, targetSum - root.val);
    }

    if (root.right === null) {
        return hasPathSum(root.left, targetSum - root.val);
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

const root = new TreeNode(
    5,
    new TreeNode(
        4,
        new TreeNode(
            11,
            new TreeNode(
                7,
                null,
                null
            ),
            new TreeNode(
                2,
                null,
                null
            ),
        ),
        null
    ),
    new TreeNode(
        8,
        new TreeNode(
            13,
            null,
            null
        ),
        new TreeNode(
            4,
            null,
            new TreeNode(
                1,
                null,
                null
            ),
        ),
    )
);

const targetSum = 22;

console.log(hasPathSum(root, targetSum));
