*原题链接：👉：[包含min函数的栈](https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/)*

题目描述:

1. 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
```

思路：
> `leetCode`有原题，维护两个栈，一个存数字，一个存对应的最大最小情况

```
/**
 * initialize your data structure here.
 */
class MinStack {
    constructor() {
        this.numStack = [];
        this.minStack = [];
    }
    push(num) {
        this.numStack.push(num);
        if(this.minStack.length) {
            if(this.minStack[this.minStack.length - 1] <= num) {
                this.minStack.push(this.minStack[this.minStack.length - 1]);
            } else {
                this.minStack.push(num);
            }
        } else {
            this.minStack.push(num);
        }
    }
    pop() {
        this.minStack.pop();
        return this.numStack.pop();
    }
    top() {
        return this.numStack[this.numStack.length - 1];
    }
    min() {
        return this.minStack[this.minStack.length - 1];
    }
}
```