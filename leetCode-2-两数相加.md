---
title: leetCode-2-两数相加
date: 2021-04-19 20:52:15
tags:
    - 算法
---

*原题链接：👉：[两数相加](https://leetcode-cn.com/problems/add-two-numbers/)*

题目描述:
1. 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
2. 请你将两个数相加，并以相同形式返回一个表示和的链表。
3. 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：
```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807
```
思路
> 两个指针，遍历链表，然后每一位相加，大于10的部分，进一位。
> 即个位数相加，必定是最大也就`9 + 9`的情况，例如`9 + 8 = 17`，17 % 10，余`7`，新的个数为`7`，将`1`进一位。

```
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let nodeIdx = null;
    let lastCarry = 0;
    while(l1 || l2) {
        let nodeVal1 = l1 ? l1.val : 0;
        let nodeVal2 = l2 ? l2.val : 0;
        let nodeUnitSum = nodeVal1 + nodeVal2 + lastCarry;
        lastCarry = nodeUnitSum % 10;
        if(!head) {
            tail = head = new ListNode(lastCarry);
        } else {
            tail.next = new ListNode(lastCarry);
            tail = tail.next;
        }
        lastCarry = Math.floor(nodeUnitSum / 10);
        if(l1) {
            l1 = l1.next;
        }
        if(l2) {
            l2 = l2.next;
        }
    }
    // 最后的最后如果有多余的，需要记住进一位
    if(lastCarry > 0) {
        tail.next = new ListNode(lastCarry);
    }
    return head;
};
```

