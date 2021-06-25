*原题链接：👉：[跳跃游戏](https://leetcode-cn.com/problems/jump-game/description/)*

题目描述:

1. 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
2. 数组中的每个元素代表你在该位置可以跳跃的最大长度。
3. 判断你是否能够到达最后一个下标。

示例：
```
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
```
```
输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
```

思路：
> 穷举？每一步的每一个跳跃数都试一遍。


- 题解（贪心）

1. 如何判读最远位置可达，只要存在一个位置x，最远跳跃为`nums[x]`，只要`nums[x] + x >= y`，那么`y`就是可达的。
2. 遍历数组中每一个位置，维护最远可达的位置`rightmost`，对于当前遍历到的位置`x`，如果再**可以到达的位置rightmore内**，那么可以从此点进行下一次跳跃。
3. 如果最远可以达到的位置大于数组的最后一个位置，说明最后一个位置可达。

```
var canJump = function(nums) {
    let rightMore = 0;
    let nLen = nums.length;
    for(let i = 0; i < nLen; i++) {
        // 当前i在最远可达的范围内
        if(i <= rightMore) {
            // 更新最远可达位置
            rightMore = Math.max(rightMore, nums[i] + i);
            if(rightMore >= nLen - 1) {
                return true;
            }
        }
    }
    return false;
};
```

还是一样😭编码不难，思路难想呀。