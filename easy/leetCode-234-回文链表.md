
*原题链接：👉：[回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/description/)*

题目描述:
请判断一个链表是否为回文链表。


示例：

输入
```
输入: 1->2
输出: false
```

输出
```
输入: 1->2->2->1
输出: true
```

思路：

> 快慢指针找出中点，翻转一半，对比，arr1还有优化，可以在`while`里面做的。

```
var isPalindrome = function(head) {
    let fastArr = head,
        slowArr = head,
        Head = head;
    // 找到中间位置
    while(fastArr && fastArr.next) {
        fastArr = fastArr.next.next;
        slowArr = slowArr.next;
    }
    let arr1 = [],
        arr2 = [];
    // 以下之所以要判断fastArr的状态，是因为奇数链表和偶数链表最终的fastArr指向状态是不一样的，借用这个判断奇偶数
    while(Head) {
        if(fastArr && Head === slowArr) {
            break;
        }
        arr1.push(Head.val);
        Head = Head.next;
        if(!fastArr && Head === slowArr) {
            break;
        }
    }
    if(fastArr) {
        slowArr = slowArr.next;
    }
    while(slowArr) {
        arr2.push(slowArr.val);
        slowArr = slowArr.next;
    }
    arr1 = arr1.reverse()
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};
```

看了一下题解还有其他挺多处理的，处理成数组，然后双指针对比等等。