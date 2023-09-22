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

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (root1 === null && root2 === null) {
        return null;
    }

    if (root1 === null) {
        return root2;
    }

    if (root2 === null) {
        return root1;
    }

    return new TreeNode(
        root1.val + root2.val,
        mergeTrees(root1.left, root2.left),
        mergeTrees(root1.right, root2.right)
    );
};

const root1 = new TreeNode(
    1,
    new TreeNode(
        3,
        new TreeNode(5, null, null),
        null
    ),
    new TreeNode(2, null, null),
);

const root2 = new TreeNode(
    2,
    new TreeNode(
        1,
        null,
        new TreeNode(4, null, null),
    ),
    new TreeNode(
        3,
        null,
        new TreeNode(7, null, null)
    ),
);

console.log(mergeTrees(root1, root2));
