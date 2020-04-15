/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
*/
// 给定 1->2->3->4, 你应该返回 2->1->4->3.

// 直接遍历过去？
/*
	1		->		2		->		3		->		4
	^				^
	2		->		1		->		3		->		4
									^				^
	2		->		1		->		4		->		3
*/
/*

	L 	-> 	   R 	->   	X

	L 	->	   X

	

*/

var swapPairs = function(head) {
	let intVar = new ListNode(0);
	intVar.next = head;
	let temp = intVar;
	while(temp.next !== null && temp.next.next !== null) {
		let L = temp.next;
		let R = L.next;
		temp.next = R;
		L.next = R.next;
		R.next = L;
		temp = L;
	}
	return intVar.next;
};