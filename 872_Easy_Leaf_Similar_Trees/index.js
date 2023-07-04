/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @author Ryhn
 * @date 04 July 2023
 * @url https://leetcode.com/problems/leaf-similar-trees/description
 *
 * @runtime 61ms
 * @memory 44.8 MB
 */

const leafSimilar = function (root1, root2) {
    const arr1 = [];
    const arr2 = [];

    preOrder(root1, arr1);
    preOrder(root2, arr2);

    return (
        arr1.length === arr2.length &&
        arr1.every((item, idx) => item === arr2[idx])
    );
};

const preOrder = (root, arr) => {
    if (!root) return;
    preOrder(root.left, arr);
    if (!root.left && !root.right) arr.push(root.val);
    preOrder(root.right, arr);
};
