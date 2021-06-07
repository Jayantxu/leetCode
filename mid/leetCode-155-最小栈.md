*原题链接：👉：[最小栈](https://leetcode-cn.com/problems/min-stack/solution/fu-zhu-zhan-zui-xiao-zhan-by-demigodliu-wnpk/)*

题目描述:

1. 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
- push(x) —— 将元素 x 推入栈中。
- pop() —— 删除栈顶的元素。
- top() —— 获取栈顶元素。
- getMin() —— 检索栈中的最小元素。

示例：

```
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

思路：
> 本来想着，这个分两步，①：栈的模拟，这个不难，内部数组来做就好了；②：常数时间寻找最小值。这个本来想着，每次栈变化，`pop`或者`push`的时候，都运算一遍求最大最小值的，但是这样就要算好多。
> 看了题解，使用辅助栈！辅助栈用来记录每种情况下的最小值。

```
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [Infinity];
    }
    push(val) {
        this.stack.push(val);
        this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
    }
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
```