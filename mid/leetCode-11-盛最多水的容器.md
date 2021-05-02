
*原题链接：👉：[盛最多谁的容器](https://leetcode-cn.com/problems/container-with-most-water/)*

题目描述:
1. 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器。

示例：
```
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
```

思路：
> 双指针😂，别问我怎么知道，问就是很久以前做过...

> 取两个指针，一左一右，面积无非就*底 x 高*，两个执政该移动哪一条呢？

> 在指针像内部缩的情况下，底是不断再变小的，所以，为了维护可能的更优秀解，应该移动高度更低的那条。

```
var maxArea = function(height) {
    if(!height.length) {
        return 0;
    }
    let maxSize = 0, 
        maxLeftArrow = 0,
        maxRightArrow = height.length - 1;
    while(maxLeftArrow < maxRightArrow) {
        let bottomLen = maxRightArrow - maxLeftArrow;
        let nowHeight = Math.min(height[maxRightArrow], height[maxLeftArrow]);
        let nowSize = bottomLen * nowHeight;
        maxSize = Math.max(nowSize, maxSize);
        if(height[maxRightArrow] >= height[maxLeftArrow]) {
            maxLeftArrow += 1;
        } else {
            maxRightArrow -= 1;
        }
    }
    return maxSize;
};
```
