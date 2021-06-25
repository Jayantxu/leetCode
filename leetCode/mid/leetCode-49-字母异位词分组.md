*原题链接：👉：[字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/description/)*

题目描述:

1. 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例：
```
输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

思路：

> 这题看过题解写的，说的是异味，不同组合，但是无论如何组合，也一定有相同的字母组成的，所有可以先排序，排了序，再收集相同的`字母序`的组合即可。

```
var groupAnagrams = function(strs) {
    let resArr = [];
    let tmpCollect = {};
    for(let i of strs) {
        let newStr = i.split('').sort().join('');
        if(!tmpCollect.hasOwnProperty(newStr)) {
            tmpCollect[newStr] = [];
        }
        tmpCollect[newStr].push(i);
    }
    for(let j in tmpCollect) {
        resArr.push(tmpCollect[j]);
    }
    return resArr;
};
```

其实写出来倒是不难，比较不好想的是，如何从*异位* -> *相同字母组合*这一方面去想。

tql.👍