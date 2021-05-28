*原题链接：👉：[柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/)*

题目描述:

1. 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
2. 求在该柱状图中，能够勾勒出来的矩形的最大面积。

示例：

![NO1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram.png)

```
输入: [2,1,5,6,2,3]
输出: 10
```
![NO2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram_area.png)

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

思路：

> 题解的...一开始毫无思路。
> 解释一下：利用`单调栈`，就以[2,1,5,6,2,3]为例子。

我们利用一个创建一个数组，用来存放数组的索引（存索引或者存值都可以，理解到位即可），我们开始遍历数组。

1. 遍历到第一个数字`2`,索引为`0`，此时栈内没有其他的元素，因此我们可以将此索引推入，*为什么没有直接算呢？* 因为如果后续的元素将推入高度更高的数据，那么它们组成的面积可以更大，因此我们需要继续遍历，观察后面的元素特征。

```
stack = [0];
```

2. 遍历到第二个数字`1`，索引为`1`，此时这个`1<2`，因此对于前面的数字`2`来说，和`1`组合之后，面积会变得更小了，因此不应该，应该开始处理自己的面积值了，开始`while`判断在栈内的元素，直至找到比新值`1`小的数字了，找到`2`，`2`的面积就是*2*，因此记录下最大面积值`maxSize = 2`。并且将所有`0`pop出，push入索引`1`。

```
stack = [1]
```

3. 遍历到第三个数字`5`,索引为`2`，此时的`5>1`，因此可以继续push入栈内，因为1和它一起计算，面积是存在增大的趋势的。

```
stack = [1, 2]
```

4. 遍历到第四个数字`6`，索引为`3`，此时的`6>5`，因此可以继续push入栈。

```
stack = [1,2,3]
```

5. 遍历第五个数字`2`，索引为`4`，此时`2 < 6`，开始让面积减小的趋势了，因此可以逐步开始计算前面累计的面积了，开始`while`，pop出索引`3`，值为`6`，面积即*底×高*，面积为6，记录为maxSize；在比较下一位，下一位为`5`，依旧比`2`大，因此继续pop出，此时`5`这里的最大面积，即跨域了索引`2，3`,宽度为*2*，*为什么是2呢？*因为我们知道这个栈是递增的，那么`5`这个值的索引，向前还有数字`6`是比`5`大的，因此，对于pop出的位置来说，前面的元素，截至到当前遍历的`i`，都是宽度。

6. ...依次类推




```
var largestRectangleArea = function(heights) {
    heights = [0, ...heights, 0];
    let maxSize = 0,
        dullStack = [],
        hLen = heights.length;
    for(let i = 0; i < hLen; i++) {
        let nowVal = heights[i];
        if( heights[dullStack[dullStack.length - 1]] > nowVal ) {
            while(dullStack.length 
                && heights[dullStack[dullStack.length - 1]] > nowVal) {
                const stackTopIdx = dullStack.pop();
                let stackPopHeightVal = heights[stackTopIdx];
                let sizeWidth = (i - dullStack[dullStack.length - 1] - 1);
                maxSize = Math.max(
                    maxSize,
                    stackPopHeightVal * sizeWidth
                )
            }
            dullStack.push(i);
        } else {
            dullStack.push(i);
        }
    }
    return maxSize;
};
```


🤒好像写的乱起八糟，`chrome`debugger一下吧。