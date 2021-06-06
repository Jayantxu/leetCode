*原题链接：👉：[搜索二维矩阵 II](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/description/)*

题目描述:

1. 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

2. 每行的元素从左到右升序排列。
3. 每列的元素从上到下升序排列。

示例：

![搜索二维矩阵Ⅱ](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/11/25/searchgrid2.jpg)
```
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true
```

![搜索二维矩阵Ⅱ](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/11/25/searchgrid.jpg)
```
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false

```

思路：

> 一开始，想着都是升序，从左上角开始遍历，一右一下的形式进行，例如：
```
[
    [1, 👉  4,  7,  11,  15],
            👇
    [2,     5, 👉  8,  12,  19],
                    👇
    [3,     6,     9,  16,  22],
    [10,    13,    14,  17,  24],
    [18,    21,    23,  26,  30]
]

```
这种形式去求解，但是后来开始处理的时候，发现，右和下都是变大的趋势，这不好判断呀。

后来看了一下题解，从右上角`15`开始，下一定是增大，左一定是变小...焕然大悟

**code**

```
var searchMatrix = function(matrix, target) {
    if(!matrix.length) return false;
    if(!matrix[0].length) return false;
    let iLen = matrix.length - 1,
        jLen = matrix[0].length - 1;
    let idx = 0,
        jdx = jLen;
    while(idx <= iLen && jdx >= 0) {
        let nowVal = matrix[idx][jdx];
        if(nowVal > target ) {
            jdx -= 1;
        } else if (nowVal < target ) {
            idx += 1;
        } else if (nowVal === target ) {
            return true;
        }
    }
    return false;
};
```