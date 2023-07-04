/**
 * @author Ryhn
 * @date 04 July 2023
 * @url https://leetcode.com/problems/container-with-most-water/description
 *
 *
 * @runtime 84ms
 * @memory 51.4 MB
 */

const maxArea = (height) => {
    let start = 0;
    let end = height.length - 1;
    let res = 0;

    while (start < end) {
        const min = Math.min(height[start], height[end]);
        const dist = end - start;
        const volume = min * dist;

        res = Math.max(res, volume);

        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return res;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 3, 2, 5, 25, 24, 5]));
