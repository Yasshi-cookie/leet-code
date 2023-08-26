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

function findTarget(root: TreeNode | null, k: number): boolean {
    return existsTarget(root, k, new Set())
};

const existsTarget = (root: TreeNode | null, k: number, complements: Set<number>): boolean => {
    if (root === null) {
        return false
    }

    // complementsの型をarrayではなくSetにしている理由は、下記の検索処理の計算量を
    if (complements.has(root.val)) {
        return true
    }

    // 足すとkになる数をcomplementsにスタックしていく
    complements.add(k - root.val)

    // ※左側のexistsTargeで更新されたcomplementsが右側のexistsTargetに渡される
    return existsTarget(root.left, k, complements) || existsTarget(root.right, k, complements)
}

// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true

// let root = new TreeNode(
//     5,
//     new TreeNode(
//         3,
//         new TreeNode(
//             2,
//             null,
//             null
//         ),
//         new TreeNode(
//             4,
//             null,
//             null
//         ),
//     ),
//     new TreeNode(
//         6,
//         null,
//         new TreeNode(
//             7,
//             null,
//             null
//         ),
//     ),
// )

let root = new TreeNode(
    5,
    new TreeNode(
        3,
        null,
        null
    ),
    new TreeNode(
        6,
        null,
        null
    )
)

console.log(findTarget(root, 9))
