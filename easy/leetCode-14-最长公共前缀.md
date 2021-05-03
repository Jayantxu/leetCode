
*原题链接：👉：[最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)*

题目描述:

1. 编写一个函数来查找字符串数组中的最长公共前缀。
2. 如果不存在公共前缀，返回空字符串 ""。

示例：
```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```
思路：

> emm...感觉可以先找两个串的最长子缀吗，用得出的结果和第三个串比较

> 好像看错题了，是前缀...三个指针呗？字符串数组，可能数组内字符串数量不定，emm那就依次对比，然后得出前缀和后面的再对比？


```
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    // 有任意一个字符为空的时候
    let bool = strs.filter((item) => {
        if(!item) {
            return true;
        }
    });
    if(bool.length) {
        return "";
    }
    let frontStr = strs[0];
    for(let idx = 1; idx <= strs.length - 1; idx++) {
        let frontStrLen = frontStr.length - 1;
        let idxStrLen = strs[idx].length - 1;
        let jIdx = 0;
        // 要么frontStr遍历完，要么str[idx]遍历完
        for(let j = 0; j <= frontStrLen && j <= idxStrLen; j++ ) {
            if(frontStr[j] !== strs[idx][j]) {
                break;
            }
            jIdx += 1;
        }
        frontStr = frontStr.substr(0, jIdx);
        if(frontStr === '') return ""
    }
    return frontStr;
};
```


