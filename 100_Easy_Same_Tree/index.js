/**
 * @author Ryhn
 * @date 05 July 2023
 * @url https://leetcode.com/problems/same-tree/description
 *
 *
 * @runtime 61ms
 * @memory 42.6 MB
 */

const solution = (t1, t2) => {
    if (!t1 || !t2) {
        return t1 === t2;
    }

    return (
        t1.val === t2.val &&
        solution(t1.left, t2.left) &&
        solution(t1.right, t2.right)
    );
};
