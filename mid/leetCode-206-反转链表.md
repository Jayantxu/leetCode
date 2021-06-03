*原题链接：👉：[反转链表](https://leetcode-cn.com/problems/reverse-linked-list/description/)*

题目描述:

1. 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

示例：
```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

```
输入：head = [1,2]
输出：[2,1]
```

思路：

> 建立两个变量，依次遍历，交替引用。

```
var reverseList = function(head) {
    let prevNode = null;
    let currNode = head;
    while(currNode) {
        const next = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = next;
    }
    return prevNode;
};
```