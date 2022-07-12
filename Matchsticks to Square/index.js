// https://leetcode.com/problems/matchsticks-to-square/
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
let a;
const makesquare = (matchsticks) => {
    let sum = matchsticks.reduce((x, y) => x + y);
    if (sum % 4 != 0) return false;
    let edge = sum / 4;
    a = matchsticks;
    a.sort((x, y) => y - x); // sort decreasing to minimize the recursion times. Largest comes first, will quicker reach to edge.
    return dfs(Array(4).fill(0), 0, edge);
};

const dfs = (sums, pos, edge) => {
    if (pos >= a.length) return sums[1] == edge && sums[2] == edge && sums[3] == edge;
    for (let i = 0; i < 4; i++) {
        if (sums[i] + a[pos] > edge) continue;
        sums[i] += a[pos];
        if (dfs(sums, pos + 1, edge)) return true;
        sums[i] -= a[pos];
    }
    return false;
};
