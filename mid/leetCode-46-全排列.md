*原题链接：👉：[全排列](https://leetcode-cn.com/problems/permutations/description/)*

题目描述:

1. 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例：
```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

```
输入：nums = [0,1]
输出：[[0,1],[1,0]]
```

思路：
> 递归，之前博客中有一篇想尝试计算`商品SKU属性组合状态`时，有写过商品的状态全排列。

```
var permute = function(nums) {
    let res = [];
    const dfsPermute = (dfsArr, iterArr) => {
        if(!dfsArr.length) {
            res.push(iterArr);
            return;
        }
        for(let i = 0; i < dfsArr.length; i++) {
            let newIterArr = iterArr.slice(0);
            let nowItem = dfsArr[i];
            let newArr = dfsArr.slice(0);
            newArr.splice(i, 1);
            newIterArr.push(nowItem);
            dfsPermute(newArr, newIterArr);
        }
    }
    dfsPermute(nums, []);
    return res;
};
```

> ok✔
