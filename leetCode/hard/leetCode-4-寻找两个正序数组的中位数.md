---
title: leetCode-4-寻找两个正序数组的中位数
date: 2021-04-21 20:17:57
tags:
    - 算法
---

*原题链接：👉：[寻找两个正序数组的中位数](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)*

题目描述：
1. 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
2. 请你找出并返回这两个正序数组的 中位数 

示例：
```
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

```
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
```

<!--more-->

*思路：*
> 第一思路，先合并成一个数组！建立两个指针，分别指向`num1`，`num2`的第一元素下标。
> 遍历开来，然后比大小，合并，然后再计算中位数。

```
var findMedianSortedArrays = function(nums1, nums2) {
    let L = R = 0;
    let nums1Len = nums1.length;
    let nums2Len = nums2.length;
    let newNumArr = Array();
    while(L < nums1Len && R < nums2Len) {
        if(nums1[L] < nums2[R] ) {
            newNumArr.push(nums1[L]);
            L++;
        }
        if(nums1[L] >= nums2[R] ) {
            newNumArr.push(nums2[R]);
            R++;
        }
    }
    while(L < nums1Len) {
        newNumArr.push(nums1[L]);
        L++
    }
    while(R < nums2Len) {
        newNumArr.push(nums2[R]);
        R++
    }
    let valA = 0;
    let val1 = 0;
    let val2 = 0
    let idx = Math.floor(newNumArr.length / 2);
    if(newNumArr.length % 2 === 0) {
        val1 = newNumArr[idx];
        val2 = newNumArr[idx - 1];
        valA = (val1 + val2) / 2;
    } else {
        valA = newNumArr[idx];
    }
    return valA;

};
```

但是这是暴力解🤣

更多优质答案可以看原题链接：👉：[无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)*

