*原题链接：👉：[岛屿数量](https://leetcode-cn.com/problems/number-of-islands/description/)*

题目描述:

1. 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

2. 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

3. 此外，你可以假设该网格的四条边均被水包围。

示例：
```
输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
```

```
输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
```

思路：

> 深度遍历，岛屿无非是上下左右连接的都是`1`，我们举个例子来说明

```
[
	[1, 0, 1],
	[0, 0, 1],
	[1, 1, 1]
]
```

我们需要记录有几个岛屿，并返回岛屿数量因此
```
let numIslands = 0;
return numIslands;
```
并且我们需要遍历这个二维数组所有的点，来确定岛屿，因此主方法即：
```
for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j <grid[0].length; j++) {
        if(grid[i][j] === '1') { // 是1的情况，则开始认为是一个岛屿
            isLandNum += 1;
            dfsLand(i, j);
        }
    }
}
```

dfsLand主要做的就是防止重复判断以及死循环，以及对上下左右的点判断。

```
const dfsLand = (i, j) => {
    // 如果遍历到的点，出了grid的边缘以及为0时，那么统统都认为是海
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
    if(grid[i][j] === '2') return;
    // 已经遍历过的岛屿记录为2，这样在深度遍历时，不会陷入1的循环
    grid[i][j] = '2'; 

    // 遍历上下左右四个点
    dfsLand(i - 1, j);
    dfsLand(i + 1, j);
    dfsLand(i, j - 1);
    dfsLand(i, j + 1);
}
```

首先，出届的、遇到海水的都不算，应该return了，不应该继续。

其次遍历找到上下左右，因为连在一起已经`isLandNum += 1;`了，因此需要统统找出来。

```
// 遍历上下左右四个点
dfsLand(i - 1, j);
dfsLand(i + 1, j);
dfsLand(i, j - 1);
dfsLand(i, j + 1);
```

那么
```
if(grid[i][j] === '2') return;
// 已经遍历过的岛屿记录为2，这样在深度遍历时，不会陷入1的循环
grid[i][j] = '2'; 
```
是怎么回事呢？为了防止死循环

```
[
	[1, 1],
	[1, 1]
]
```
我们寻找到`0,0`时，右与下都会归为一个岛屿，但是我们不断继续...
寻找`0,1`的时候，如果不把过去找到的`1`都做好记录，那么我们不是不断地循环了吗。

```
[
	[1, -> 1]
	 👆 	   👇
	[1, <- 1]
]
```


```
var numIslands = function(grid) {
    let isLandNum = 0;
    // 从i,j点出发，寻找连接在一起的为1的岛屿
    const dfsLand = (i, j) => {
        // 如果遍历到的点，出了grid的边缘以及为0时，那么统统都认为是海
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
        if(grid[i][j] === '2') return;
        // 已经遍历过的岛屿记录为2，这样在深度遍历时，不会陷入1的循环
        grid[i][j] = '2'; 

        // 遍历上下左右四个点
        dfsLand(i - 1, j);
        dfsLand(i + 1, j);
        dfsLand(i, j - 1);
        dfsLand(i, j + 1);
    }
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j <grid[0].length; j++) {
            if(grid[i][j] === '1') { // 是1的情况，则开始认为是一个岛屿
                isLandNum += 1;
                dfsLand(i, j);
            }
        }
    }
    return isLandNum;
};
```