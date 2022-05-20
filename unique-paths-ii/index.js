// https://leetcode.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1]) return false;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        obstacleGrid[i][j] = 1;
        continue;
      }

      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
        continue;
      }

      if (i === 0) {
        obstacleGrid[i][j] = obstacleGrid[i][j - 1];
        continue;
      }

      if (j === 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j];
        continue;
      }

      obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
    }
  }

  return obstacleGrid[m - 1][n - 1];
};

/**
 * 需耗費記憶體較多 但比較快
 */
var uniquePathsWithObstacles2 = function (obstacleGrid) {
  let m = obstacleGrid.length - 1;
  let n = obstacleGrid[0].length - 1;

  let stepMap = new Map();

  function countStep(x, y) {
    if (x === -1 || y === -1 || obstacleGrid[x]?.[y] === 1) return 0;
    if (x === 0 && y === 0) return 1;

    if (stepMap.has(`${x}-${y}`)) return stepMap.get(`${x}-${y}`);

    const steps = countStep(x - 1, y) + countStep(x, y - 1);
    stepMap.set(`${x}-${y}`, steps);

    return steps;
  }

  return countStep(m, n);
};
