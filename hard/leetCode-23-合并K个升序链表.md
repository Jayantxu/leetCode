
*原题链接：👉：[合并K个升序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/description/)*

题目描述:

1. 给你一个链表数组，每个链表都已经按升序排列。
2. 请你将所有链表合并到一个升序链表中，返回合并后的链表。

① -> ② -> ③ -> ④ -> ⑤

示例：
```
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```

```
输入：lists = []
输出：[]
```

思路：
> 和合并两个升序链表一样，比较合并？

```
var mergeKLists = function(lists) {
    let listLen = lists.length;
    if(!listLen) {
        return null;
    }
    const mergeTwoLists = (l1, l2) => {
        if(l1 === null){
            return l2;
        }
        if(l2 === null){
            return l1;
        }
        if(l1.val < l2.val){
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        }else{
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    };
    let newStartList = lists[0];
    for(let i = 1; i < listLen; i++) {
    	if(lists[i]) {
	        newStartList = mergeTwoLists(newStartList, lists[i]);	
    	}
    }
    return newStartList;
};

```

- 😂在题解中看的一个，先全部遍历成数组，然后再组合成链表。

试一下。

```
let listsLen = lists.length;
    if(!listsLen) {
        return null;
    }
    let resArr = [];
    for(let ltem of lists) {
        while(ltem) {
            if(ltem.val === 0 || ltem.val) {
                resArr.push(ltem.val);
                ltem = ltem.next;
            }
        }
    }
    if(!resArr.length) {
        return null;
    }
    resArr.sort((a, b) => {return a - b;});
    let resLen = resArr.length;
    let startList = new ListNode(resArr[0], null);
    let tmpList = startList;
    for(let i = 1; i < resLen; i++) {
        let nextNode = new ListNode(resArr[i], null);
        tmpList.next = nextNode;
        tmpList = nextNode
    }
    return startList;
```

⚠需要注意的是空链表的情况即可。