// https://leetcode.com/problems/permutations-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = new Set([]);

  function permute(arr, resArr) {
    if (arr.length === 1) {
      const newResArr = resArr.slice();

      newResArr.push(arr[0]);
      result.add(JSON.stringify(newResArr));

      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const newResArr = resArr.slice();
      const copyArr = arr.slice();

      newResArr.push(copyArr[i]);
      copyArr.splice(i, 1);

      permute(copyArr, newResArr);
    }
  }

  permute(nums, []);

  let res = [];

  result.forEach((v) => {
    res.push(JSON.parse(v));
  });

  return res;
};

var permuteUnique2 = function (nums) {
  const output = [],
    count = []; // keeping track of amount of each num\

  for (let num of nums) {
    if (num in count) count[num]++;
    else count[num] = 1;
  }

  function dfs(depth, path) {
    if (depth === nums.length) {
      output.push(path.slice());
      return;
    }

    for (let num in count) {
      // for each unique number
      if (count[num] > 0) {
        path.push(num);
        count[num]--;

        // move to the next depth
        dfs(depth + 1, path);

        // backtrack to previous state
        path.pop();
        count[num]++;
      }
    }
  }

  dfs(0, []);

  return output;
};
