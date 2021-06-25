---
title: leetCode-6-z字形变换
date: 2021-04-29 18:52:32
tags:
- 算法
---

*原题链接：👉：[z字形变换](https://leetcode-cn.com/problems/zigzag-conversion/)*

题目描述:
1. 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
2. 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

示例：
```
P   A   H   N
A P L S I I G
Y   I   R
```
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

示例：
```
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```
<!--more-->
思路
> 先创建一个`numRows`行的二维数组，定义一个方向变量，当数字达到了，就变换推入方向。

- 暴力解答

```
var convert = (s, numRows) => {
    if(s.length === 1) {
        return s;
    }
    let resArr = new Array(numRows).fill(0).map(item => new Array(0));
    let dir = 'down';
    let nowIdx = 1;
    
    for(let idx = 0; idx <= s.length - 1; idx++) {
        resArr[nowIdx - 1].push(s[idx]);
        if(nowIdx >= numRows ) {
            dir = 'up';
        }
        if(nowIdx == 1) {
            dir = 'down';
        }
        if(dir === 'up') {
            nowIdx -= 1;
        } else {
            nowIdx += 1;
        }
    }

    let resStr = [];
    for(let iTem of resArr) {
        resStr = resStr.concat(iTem);
    }
    return resStr.join('');

}
```

