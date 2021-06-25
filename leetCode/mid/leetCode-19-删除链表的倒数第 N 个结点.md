
*原题链接：👉：[删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)*

题目描述:

1. 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

① -> ② -> ③ -> ④ -> ⑤

示例：
```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

```
输入：head = [1], n = 1
输出：[]
```


思路：
> 还是很久之前遇到过，前后的双指针，步长相距`n`即可。
```
var removeNthFromEnd = function(head, n) {
    let pre = new ListNode(-1,head);
    var last = pre;
    var fast = pre ;
    for(var i= 0;i<n;i++){
        fast = fast.next;

    }
    while(fast.next){
        fast = fast.next;
        last = last.next;
    }
    last.next = last.next.next;
    return pre.next ;
};
```

