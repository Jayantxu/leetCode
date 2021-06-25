*原题链接：👉：[最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/description/)*

题目描述:
1. 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
2. 说明：每次只能向下或者向右移动一步。

示例：
```
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```

思路：
> 和`62`题，会有着相似的做法，因为一个位置的最小走法，无非是`Math.min(nums[i] + 上面一个元素, nums[i] + 前面一个元素)`，然后更新记录为此点的和。

```
var minPathSum = function(grid) {
    let resArr = [];
    for(let i = 0; i < grid.length; i++) {
        let nowMArr = grid[i];
        resArr[i] = []
        for(let j = 0; j < nowMArr.length; j++) {
            let temVal = nowMArr[j] + nowMArr[j - 1];
            if(i === 0 && j === 0) {
                temVal = nowMArr[j];
            } 
            // 以下注意：是加  resArr， 因为是一个累加的过程，所有前一个数组元素的值已经改变了。
            else if(i === 0 && j > 0) {
                temVal = nowMArr[j] + resArr[i][j - 1];
            } else if(i > 0 && j === 0) {
                temVal = resArr[i - 1][j] + nowMArr[j];
            } else {
                temVal = Math.min(nowMArr[j] + resArr[i][j - 1], nowMArr[j] + resArr[i - 1][j]);
            }
            resArr[i][j] = temVal;
        }
    }
    let m = grid.length - 1,
        n = grid[0].length - 1;
    return resArr[m][n];
    
};
```