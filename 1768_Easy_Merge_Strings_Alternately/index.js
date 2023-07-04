/**
 * @author Ryhn
 * @date 04 July 2023
 * @url https://leetcode.com/problems/merge-strings-alternately/description/
 *
 * TC: O(n+m)
 * SC: O(n)
 */
const mergeAlternately = (word1, word2) => {
    const arr = [];

    const maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (word1[i]) {
            arr.push(word1[i]);
        }
        if (word2[i]) {
            arr.push(word2[i]);
        }
    }

    return arr.join("");
};

console.log(mergeAlternately("abcd", "pq"));
