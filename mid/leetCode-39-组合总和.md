*原题链接：👉：[组合总和](https://leetcode-cn.com/problems/combination-sum/description/)*

题目描述:

1. 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
2. candidates 中的数字可以无限制重复被选取。
3. 说明：
	- 所有数字（包括 target）都是正整数。
	- 解集不能包含重复的组合。 

示例：
```
输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
```

```
输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

思路：
> 感觉像是那个组合零钱的题啊，嘿嘿
> [2, 3, 6, 7]，当我们选了*2*，剩下*5*，那么再求这数组中比*5*小的，都是可能的，依次不断的递归。

```
var combinationSum = function(candidates, target) {
    let resArr = [];
    if(candidates.length === 0) {
        return resArr;
    }
    let len = candidates.length - 1;

    const dfsIter = (tmpTarget, tmpArr, startIdx) => {
        if(tmpTarget === 0) {
            resArr.push(tmpArr.slice());
        }
        if(tmpTarget < 0) {
            return;
        }
        for(let ikey = startIdx; ikey <= len ; ikey++) {
            tmpArr.push(candidates[ikey]);
            let otherSum = tmpTarget - candidates[ikey];
            dfsIter(otherSum, tmpArr, ikey);
            tmpArr.pop();
        }
    }
    // 设置0 为起点，是因为防止重复，会再去找之前的数字，例如
    // [2, 3, 5] 找 8， [2,3,5]组合和[3,2,5]组合是一样的，没必要回头去找了，行就行
    dfsIter(target, [], 0);
    return resArr;
};
```
