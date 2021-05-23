*原题链接：👉：[合并区间](https://leetcode-cn.com/problems/merge-intervals/description/)*

题目描述:

1. 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
2. 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。


示例：
```
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```
```
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

思路：
> 以每一个区间数组第一位数进行排序，例如为`arr1`、`arr2`，逐一进行合并计算，计算`arr1[0]`与`arr2[0]`、`arr1[1]`与`arr2[1]`的大小关系，然后合并。

> 建立一个新的结果数组，需要合并的后一项和`pop`出来的进行比较，比较大小。

```
var merge = function(intervals) {
    let interLen = intervals.length;
    let resArr = [];
    intervals.sort((a, b) => { return a[0] - b[0]});
    for(let i = 0; i < interLen; i ++) {
        let willMergeArr = resArr.pop();
        if(!willMergeArr) {
            resArr.push(intervals[i].slice(0));
            continue;
        }

        let willPushArr = [];
        let nowArrInter = intervals[i];
        if(nowArrInter[0] > willMergeArr[1]) {
            resArr.push(willMergeArr.slice(0));
            willPushArr = nowArrInter.slice(0);
        } else if ( nowArrInter[0] >= willMergeArr[0] && nowArrInter[1] >= willMergeArr[1] ) {
            willPushArr = [willMergeArr[0], nowArrInter[1]];
        } else if ( nowArrInter[0] >= willMergeArr[0] && nowArrInter[1] < willMergeArr[1] ) {
            willPushArr = [willMergeArr[0], willMergeArr[1]];
        }
        resArr.push(willPushArr);

    }
    return resArr;
};
```