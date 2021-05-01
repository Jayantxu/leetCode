---
title: leetCode-8-字符串转换整数
date: 2021-04-29 20:18:29
tags:
- 算法
---

*原题链接：👉：[字符串转换整数](https://leetcode-cn.com/problems/string-to-integer-atoi/)*

题目描述:
1. 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

示例：
```
输入：s = "42"
输出：42
```

示例：
```
输入：s = "4193 with words"
输出：4193
```

<!--more-->
思路
> 额...很久很久以前我看过一次题目，parseInt...

```
var myAtoi = function(s) {
    // ...还需要判断第一字符 


    let num = parseInt(s);
    if(num > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) -1;    
    }
    if(num < Math.pow(-2,31)) {
        return Math.pow(-2, 31);
    }
    return num;
};
```

- 官方

> 看了一下官方，状态机，本步得出状态用于后续一步。👍