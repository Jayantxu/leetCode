---
title: leetCode-3-无重复字符的最长子串
date: 2021-04-19 21:23:51
tags:
    - 算法
---

*原题链接：👉：[无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)*

题目描述：
1. 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例：
```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

<!--more-->

> 很早之前就看过几次这个题，采用滑动窗口

意思是什么呢？我们维护一个窗口，从`idx=0`开始，遍历数组，每次遍历到的新值都要与窗口内的字符相比较是否出现过
1. 如果没用出现过，则此新字符可以增加进窗口。
2. 如果出现过，则需要将窗口内出现的索引值前的字符，均移除。

```
var lengthOfLongestSubstring = function(s) {
    let index = 0, max = 0
    for(let i = 0, j = 0; j < s.length; j++) {
        index = s.substring(i, j).indexOf(s[j]) 
        if(index !== -1) { 
            i = i + index + 1 
        } 
        max = Math.max(max, j - i + 1) 
    }
    return max
};
```
