*原题链接：👉：[在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)*

题目描述:

1. 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
2. 如果数组中不存在目标值 target，返回 [-1, -1]。

**进阶**：你可以设计一个时间复杂度为 O(log n) 的解决方案吗？

示例：
```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

```
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

```
输入：nums = [], target = 0
输出：[-1,-1]
```

思路：
> 我认为这题和*33*题一起再逗我...

```
var searchRange = function(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
};
```

🤦‍♂️🤦‍♂️🤦‍♂️

好吧，正经一点...

> 好像还有很多其他方式，例如遍历，找到之后往对象里推，对象存的是位置数组，用例子测试一下，还有这种情况

```
[1,2,3,4,5]
3
输出: [2,2]
```

- 方法二:

```
var searchRange = function(nums, target) {
    let resMap = {};
    for(let i = 0; i <= nums.length - 1; i++) {
        if(nums[i] === target) {
            if(!resMap.hasOwnProperty(target)) {
                resMap[target] = [];
            }
            resMap[target].push(i);
        }
    }
    if(resMap.hasOwnProperty(target)) {
        let len = resMap[target].length;
        if(len === 1) {
            return [resMap[target][0], resMap[target][0]];
        } else {
            return [resMap[target][0], resMap[target][len - 1]];
        }
    }
    return [-1, -1];
};
```

- 方法三

> 不知道为啥看到`O(log n)`，就默认和二分查找挂上勾，找`target`的区间，一定是左或者右，很像之前看过的一个算法，*二分查找找左区间*，*二分查找找右区间*。

```

```