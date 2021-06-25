*原题链接：👉：[相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/description/)*

题目描述:

1. 编写一个程序，找到两个单链表相交的起始节点。

示例：

![相交链表1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)
```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```


![相交链表2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_2.png)
```
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

```

思路：
> 定义两个指针？先走第一遍，先到达的，等等第二个指针到结尾，记录下`p1`比`p2`领先多少步，第二轮循环的时候，快的那个记录让慢的几步，最终就是同一步。


```
var getIntersectionNode = function(headA, headB) {
    if(!headB || !headA) return null;
    let p1 = headA,
        p2 = headB;
    let leadStep = 0;
    while(p1 && p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    if(p1) {
        while(p1) {
            leadStep += 1;
            p1 = p1.next;
        }
    }
    if(p2) {
        while(p2) {
            leadStep += 1;
            p2 = p2.next;
        }
    }
    // ...
};
```

😭😭😭麻了，看了一下题解，思路一样，别人咋写的就这么清晰简洁：

```
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA,
        pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};
```

重点在 `pA = pA === null ? headB : pA.next;`, `pB = pB === null ? headA : pB.next;`，在快的一条查找结束之后，跳到另一条的头步，这样就相当于计算`leadStep`！！tql