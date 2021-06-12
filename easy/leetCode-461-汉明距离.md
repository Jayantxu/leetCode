*原题链接：👉：[汉明距离](https://leetcode-cn.com/problems/hamming-distance/description/)*

题目描述:

两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。

给你两个整数 x 和 y，计算并返回它们之间的汉明距离。

示例：
```
输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。
```

```
输入：x = 3, y = 1
输出：1
```

思路：

> 暴力比较，这里面一开始不知道的API是`padStart`和`padEnd`，字符串的头部、尾部补全。

先转为二进制，转为二进制的方法就是`toString`
转为二进制之后，在头部进行补全，长度相等
相等之后再遍历，判断

```
var hammingDistance = function(x, y) {
    let distance = 0;
    // 转换为二进制
    let xTwo = x.toString(2);
    let yTwo = y.toString(2);
    // 比较两者长短
    let bothMax = Math.max(xTwo.length, yTwo.length);
    // 这API参考题解的...
    /**
     * padStart、padEnd，分别是字符串头部、尾部补全
     */
    xTwo = xTwo.padStart(bothMax, 0);
    yTwo = yTwo.padStart(bothMax, 0);
    for(let i = 0; i < bothMax; i++) {
        if(xTwo[i] !== yTwo[i]) {
            distance+=1;
        }
    }
    // 返回距离
    return distance;
};
```