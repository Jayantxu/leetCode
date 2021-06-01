*原题链接：👉：[排序链表](https://leetcode-cn.com/problems/sort-list/description/)*

题目描述:

1. 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
进阶：

你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

示例：

![示例1](https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg)
```
输入：head = [4,2,1,3]
输出：[1,2,3,4]
```


![示例2](https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg)

```
输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
```

思路：


> 使用归并排序，其他的说明见注释。学习学习归并排序。

```
var sortList = function(head) {
    // sortList用于拆分两个子链表及返回合并的链表
    if(!head || !head.next) return head;

    // 使用快慢指针，用于找到中点
    let slow = head,
        fast = head;
    let splitArrow = null; // 中点的记录指针，用户中断链表为两部分
    while(fast && fast.next) {
        splitArrow = slow; // 为什么要在此处 = 呢？ 因为紧接下去，slow会继续next一步，要不在while里面处理的话，无法准确获取slow前的一个节点
        slow = slow.next;
        fast = fast.next.next;
    }
    splitArrow.next = null; // 中断
    
    // 继续对左右链表进行相同拆分工作
    const left = sortList(head);
    const right = sortList(slow);
    // 合并两个切分链表
    return mergeList(left, right);
};
// 如何对两个链表排序，这个前面有相同的题目，合并两个链表
// new一个新的链表，然后两个链表依次遍历，比大小，然后小的拼接到new的链表上。
const mergeList = (l, r) => {
    let tmpNodeList = new ListNode(0);
    let recordNode = tmpNodeList; // 此处要留下一个头的标记，因为上一步是0，0不是一开始l，r包含的，因为得取next
    while(l && r) {
        if(l.val < r.val) {
            tmpNodeList.next = l;
            l = l.next;
        } else {
            tmpNodeList.next = r;
            r = r.next;
        }
        tmpNodeList = tmpNodeList.next;
    }
    if(l) tmpNodeList.next = l;
    if(r) tmpNodeList.next = r;
    return recordNode.next;
};
```