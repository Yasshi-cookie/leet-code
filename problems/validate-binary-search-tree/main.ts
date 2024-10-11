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
    function valid(node: TreeNode | null, min: number, max: number): boolean {
        if (node === null) {
            // 現在のノードがnullの場合は、BSTの定義を満たしているとみなして次に行く
            return true
        }

        if (node.val <= min || node.val >= max) {
            // 現在のノードの値がmin未満またはmax以上の場合は、BSTの定義を満たしていない
            return false
        }

        if (node.left === null && node.right === null) {
            // 左のノードと右のノードが共にnullの場合は、BSTの定義を満たしているとみなして次に行く
            return true
        }

        if (node.left !== null && node.right === null) {
            // 左のノードのみが存在する場合
            if (node.left.val < node.val) {
                // BSTの定義を満たしていれば、子ノードに対して再帰的にチェックする
                return valid(node.left, min, node.val)
            } else {
                return false
            }
        }

        if (node.left === null && node.right !== null) {
            // 右のノードのみが存在する場合
            if (node.val < node.right.val) {
                // BSTの定義を満たしていれば、子ノードに対して再帰的にチェックする
                return valid(node.right, node.val, max)
            } else {
                return false
            }
        }

        // 以下、左右のノードが存在する場合
        if (node.left!.val < node.val && node.val < node.right!.val) {
            // BSTの定義を満たしていれば、子ノードに対して再帰的にチェックする
            return valid(node.left, min, node.val) && valid(node.right, node.val, max)
        } else {
            return false
        }
    }

    return valid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};

// Test cases
const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
console.log(isValidBST(tree1)) // Output: true
const tree2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)))
console.log(isValidBST(tree2)) // Output: false
const tree3 = new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7)))
console.log(isValidBST(tree3)) // Output: false
