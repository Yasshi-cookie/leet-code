// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// ・The left subtree of a node contains only nodes with keys less than the node's key.
// ・The right subtree of a node contains only nodes with keys greater than the node's key.
// ・Both the left and right subtrees must also be binary search trees.
// @see https://leetcode.com/problems/validate-binary-search-tree/

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

function isValidBST(root: TreeNode | null): boolean {
    if (root === null) {
        // 現在のノードがnullの場合は、BSTの定義を満たしているとみなして次に行く
        return true
    }

    if (root.left === null && root.right === null) {
        // 左のノードと右のノードが共にnullの場合は、BSTの定義を満たしているとみなして次に行く
        return true
    }

    if (root.left !== null && root.right === null) {
        // 左のノードのみが存在する場合
        if (root.left.val < root.val) {
            // BSTの定義を満たしていれば、子ノードに対して再帰的にチェックする
            return isValidBST(root.left)
        } else {
            return false
        }
    }

    if (root.left === null && root.right !== null) {
        // 右のノードのみが存在する場合
        if (root.val < root.right.val) {
            // BSTの定義を満たしていれば、子ノードに対して再帰的にチェックする
            return isValidBST(root.right)
        } else {
            return false
        }
    }

    // 以下、左右のノードが存在する場合
    if (root.left!.val < root.val && root.val < root.right!.val) {
        // BSTの定義を満たしていれば、子ノードに対して再帰的にチェックする
        return isValidBST(root.left) && isValidBST(root.right)
    } else {
        return false
    }
};
