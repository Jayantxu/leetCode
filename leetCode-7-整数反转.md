---
title: leetCode-7-整数反转
date: 2021-04-29 19:45:18
tags:
- 算法
---

*原题链接：👉：[整数反转](https://leetcode-cn.com/problems/reverse-integer/)*

题目描述:
1. 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
2. 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
3. 假设环境不允许存储 64 位整数（有符号或无符号）

示例：
```
输入：x = 123
输出：321
```

示例：
```
输入：x = -123
输出：-321
```

示例：
```
输入：x = 120
输出：21
```

<!--more-->
思路
> 取一个数，加一个数，并且判断是否小于限制值，大于最大最小？

- 解答
根据题意解即可，注意大小的判断

```
var reverse = function(x) { 
    let res = 0;
    while(x) {
        let unitNum = x % 10;
        res = res * 10 + unitNum;
        if(res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
            return 0;
        }
        if(x <= 0) {
            x = Math.ceil(x / 10);
        } else {
            x = Math.floor(x / 10);
        }
    }
    return res;
}
```
