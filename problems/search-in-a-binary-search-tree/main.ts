// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val
// and return the subtree rooted with that node. If such a node does not exist, return null.
// @see https://leetcode.com/problems/search-in-a-binary-search-tree/description/

// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) {
        return null
    }

    if (root.val < val) {
        return searchBST(root.right, val);
    }

    if (root.val > val) {
        return searchBST(root.left, val);
    }

    return root
};
