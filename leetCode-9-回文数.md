---
title: leetCode-9-回文数
date: 2021-04-30 13:58:25
tags:
- 算法
---

*原题链接：👉：[回文数](https://leetcode-cn.com/problems/palindrome-number/submissions/)*

题目描述:
1. 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
2. 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是


示例：
```
输入：x = 121
输出：true
```

示例：
```
输入：x = 10
输出：false
```


示例：
```
输入：x = -121
输出：false
```
<!--more-->

思路：
> 注意一些边界情况，例如负数，小于10，两位数的情况
> 创建左右指针，一次`+1`、`-1`做对比
> 估计这种解法也还是暴力吧😂
```
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    if(x <= 9) return true;
    x = '' + x;
    if(x.length === 2 &&  x.charAt(0) === x.charAt(1)){
        return true;
    }
    let arrowIdx1 = Math.floor(x.length / 2);
    let arrowIdx2 = '';
    if(x.length % 2 === 0) {
        arrowIdx2 = arrowIdx1 - 1;
    } else {
        arrowIdx2 = arrowIdx1;
    }
    let flag = true;
    while(arrowIdx1 >= 0) {
        if(x[arrowIdx1] !== x[arrowIdx2]) {
            flag = false;
        }
        arrowIdx1 -= 1;
        arrowIdx2 += 1;
    }
    return flag;
};
```

- 官方

官方写法太强了，果然没这个思路

1. 取出后半段数字进行翻转。
2. 这里需要注意的一个点就是由于回文数的位数可奇可偶，所以当它的长度是偶数时，它对折过来应该是相等的；当它的长度是奇数时，那么它对折过来后，有一个的长度需要去掉一位数（除以 10 并取整）。
具体做法如下：
1. 每次进行取余操作 （ %10），取出最低的数字：y = x % 10
2. 将最低的数字加到取出数的末尾：revertNum = revertNum * 10 + y
3. 每取一个最低位数字，x 都要自除以 10
4. 判断 x 是不是小于 revertNum ，当它小于的时候，说明数字已经对半或者过半了
5. 最后，判断奇偶数情况：如果是偶数的话，revertNum 和 x 相等；如果是奇数的话，最中间的数字就在revertNum 的最低位上，将它除以 10 以后应该和 x 相等。

```
var isPalindrome = function(x: number): boolean {
    // 特殊情况：
    // 如上所述，当 x < 0 时，x 不是回文数。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let revertedNumber: number = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
    // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
    // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};
```
