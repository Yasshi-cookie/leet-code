// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).
// @see https://leetcode.com/problems/binary-tree-level-order-traversal/

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

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return []
    }

    let response: number[][] = []
    let currentLevelNodes: TreeNode[] = [root]

    while (currentLevelNodes.length > 0) {
        response.push(currentLevelNodes.map(node => node.val))

        // currentLevelNodes を1階層下のノードに更新
        currentLevelNodes = currentLevelNodes
            .flatMap(node => [node.left, node.right])
            .filter(node => node !== null)

        // console.log({response, currentLevelNodes})
    }

    return response
};

function bfsTraversal(root: TreeNode | null): void {
    if (root === null) {
        return;
    }

    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current) {
            // console.log(current.val);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        console.log({current, queue})
    }
}

// Test case
// const root1 = new TreeNode(
//     3,
//     new TreeNode(9),
//     new TreeNode(
//         20,
//         new TreeNode(15),
//         new TreeNode(7)
//     )
// )
// const root2 = new TreeNode(
//     3,
//     new TreeNode(
//         9,
//         new TreeNode(8),
//         new TreeNode(10)
//     ),
//     new TreeNode(
//         20,
//         new TreeNode(15),
//         new TreeNode(7)
//     )
// )
// console.log(levelOrder(root1)) // [[3], [9, 20], [15, 7]]
// console.log(levelOrder(root2)) // [[3], [9, 20], [8, 10, 15, 7]]

// console.log(bfsTraversal(root2))
