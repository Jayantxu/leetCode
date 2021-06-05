*原题链接：👉：[数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/)*

题目描述:

1. 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例：

```
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```

```
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```

思路：
> 排序，取倒数第N个。一开始还以为要去重...
> 感觉好像考验得是排序

```
var findKthLargest = function(nums, k) {
    // 以为排序还去重😥
    // let numsArr = [...new Set(nums.sort((a, b) => a - b) )];
    let numsArr = nums.sort((a, b) => a - b);
    let len = numsArr.length - k;
    return numsArr[len];
};

```

- 题解

看了一下题解，我是不是...太笨了

- 快速选择排序

> 快速选择是在快排的基础上，衍生出来的，快排的时候，会对左右都进行排序，快速选择在这个基础上，只找一遍，找那个大于中数的，包含的，这样就减少了一半的排序。

