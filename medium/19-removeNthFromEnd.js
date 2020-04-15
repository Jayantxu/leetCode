/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 // 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
//  给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.

// !!!  查看了题解 思路
// !!! 	关键在于链表不清楚长度
// 于是因为是倒数第N个节电，我们可以有两个跨度为N的指针，这样，
// 当最后的指针指向最终长度时，第二个指针就是N了


// 1		2		3		4		5
// ^		^
// ^   		...n	^
// 			^				^
// 					^				^ // 找到



var removeNthFromEnd = function(head, n) {
	let list = new ListNode(0);
	list.next = head;
	let L = list;
	let R = list;
	let splitLen = n + 1;
	while(splitLen--) {
		R = R.next;
		if (splitLen > 1 && R === null) {
			return list;
		}
	}
	while (R) {
	    R = R.next
	    L = L.next
	 }

  L.next = L.next.next

  return list.next
};
console.log(removeNthFromEnd([]));