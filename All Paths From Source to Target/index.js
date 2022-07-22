// https://leetcode.com/problems/all-paths-from-source-to-target/
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  let result = [];
  let lastIndex = graph.length - 1;
  
  function dfs(index, arr) {
      arr.push(index);

      if (index === lastIndex) return result.push(arr.slice());

      const connectedNodes = graph[index];
      
      for (let i = 0; i < connectedNodes.length; i++) {
          dfs(connectedNodes[i], arr)
          arr.pop();
      }
  }
  
  dfs(0, [])
  
  return result;
};
