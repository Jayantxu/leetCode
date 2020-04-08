/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let addTwoNumbers = (l1, l2) => {
    let node = new ListNode('head');
    let temp = node;
    let sum = 0; // 记录和部分
    let n = 0; // 记录每位数与 10 的差值
    while(l1 || l2) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;
        sum = l1Val + l2Val + n;
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
        n = parseInt( sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    // 加完了，若还是存在进一位的时候
    if (n > 0) {
        temp.next = new ListNode(n);
    }
    return node.next;
}