// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// (i.e., from left to right, then right to left for the next level and alternate between).
// @see https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return []
    }

    let response: number[][] = []
    let currentLevelNodes: TreeNode[] = [root]

    let depth = 0 // トップレベルの深さは0

    while (currentLevelNodes.length > 0) {
        if (depth % 2 === 0) {
            response.push(currentLevelNodes.map(node => node.val))
        } else {
            response.push([...currentLevelNodes].reverse().map(node => node.val))
        }

        // currentLevelNodes を1階層下のノードに更新
        currentLevelNodes = currentLevelNodes
            .flatMap(node => [node.left, node.right])
            .filter(node => node !== null)

        depth++
    }

    return response
};

// Test case
const root1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(
        20,
        new TreeNode(15),
        new TreeNode(7)
    )
)
const root2 = new TreeNode(
    3,
    new TreeNode(
        9,
        new TreeNode(8),
        new TreeNode(10)
    ),
    new TreeNode(
        20,
        new TreeNode(15),
        new TreeNode(7)
    )
)
console.log(zigzagLevelOrder(root1)) // [[3], [20, 9], [15, 7]]
console.log(zigzagLevelOrder(root2)) // [[3], [20, 9], [8, 10, 15, 7]]
