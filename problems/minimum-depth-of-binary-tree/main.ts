// Definition for a binary tree node.
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

function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }

    // 片方の枝がない場合はもう片方の枝の深さを返す

    if (root.left === null) {
        return 1 + minDepth(root.right)
    }

    if (root.right === null) {
        return 1 + minDepth(root.left)
    }

    // 両方の枝がnullでない場合は
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};

let root1 = new TreeNode(
    3,
    new TreeNode(
        9,
        null,
        null
    ),
    new TreeNode(
        20,
        new TreeNode(
            17,
            null,
            null
        ),
        new TreeNode(
            17,
            null,
            null
        ),
    ),
)

let root2 = new TreeNode(
    2,
    null,
    new TreeNode(
        3,
        null,
        new TreeNode(
            4,
            null,
            new TreeNode(
                5,
                null,
                new TreeNode(
                    6,
                    null,
                    null
                ),
            ),
        ),
    ),
)

// console.log(minDepth(root1)) // 2
console.log(minDepth(root2)) // 5

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Input: root = [3,9,20,null,null,15,7]
// Output: 2
