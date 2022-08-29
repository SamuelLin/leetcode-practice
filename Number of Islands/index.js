// https://leetcode.com/problems/number-of-islands/


/**
 * 思路：
 * 通過尋找相鄰的陸地設置為0
 * 避免重複計算
 * 透過簡單的counter累計就可以輕鬆地計算出島嶼的數量
 * 很聰明的做法
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let rlen = grid.length;
  let clen = grid[0].length;
  let count = 0;

  function travel(i, j) {
    if (i < 0 || i >= rlen || j < 0 || j >= clen || grid[i][j] !== "1") return;

    grid[i][j] = 0;
    travel(i - 1, j);
    travel(i + 1, j);
    travel(i, j - 1);
    travel(i, j + 1);
  }

  for (i = 0; i < rlen; i++) {
    for (j = 0; j < clen; j++) {
      if (grid[i][j] === "1") {
        count++;
        travel(i, j);
      }
    }
  }

  return count;
};
