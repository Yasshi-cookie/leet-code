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

function isSymmetric(root: TreeNode | null): boolean {
    return areSymmetric(root?.left, root?.right)
};

function areSymmetric(node1?: TreeNode | null, node2?: TreeNode | null): boolean {
    if (!node1 && !node2) {
        // 終了条件
        return true
    }

    if (
        (node1 && !node2) || (!node1 && node2)
    ) {
        return false
    }

    return node1?.val === node2?.val
        && areSymmetric(node1?.right, node2?.left)
        && areSymmetric(node1?.left, node2?.right)
};
