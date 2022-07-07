// https://leetcode.com/problems/interleaving-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
/**
 * 這篇的答案跟自己的很類似
 * 遇到兩字串相同字母的位置時，需要一起去判斷用 s1 或 s2 去填充的情況
 * 但是自己沒有cache住之前的結果導致了超時
 * 這裡用Map去記錄之前走過的路解決的重複運算的問題
 * 缺點就是記憶體會稍微大一點
 */
var isInterleave = function(s1, s2, s3) {
  if(s1.length + s2.length !== s3.length) return false;
  const memo = new Map()
  
  function run(i1, i2, i3) {
      if(i1 === s1.length) return s3.slice(i3) === s2.slice(i2);
      if(i2 === s2.length) return s3.slice(i3) === s1.slice(i1);
      const key = `${i1}-${i2}`;
      if(memo.has(key)) return memo.get(key)
      
      let res = false;
      
      if(s1[i1] === s2[i2] && s1[i1] === s3[i3]) res = run(i1+1, i2, i3+1) || run(i1, i2+1, i3+1);
      else if(s1[i1] === s3[i3]) res = run(i1+1, i2, i3+1);
      else if(s2[i2] === s3[i3]) res = run(i1, i2+1, i3+1);
      
      memo.set(key, res);
      return res;
  }
  return run(0, 0, 0)
};
