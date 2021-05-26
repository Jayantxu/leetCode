*原题链接：👉：[最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/description/)*

题目描述:

1. 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
2. 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。


示例：
```
示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
```

思路：
> 滑动窗口，其实我的理解来说，就是你追我赶，做好临界字符的记录。

简化的说，思路大概是这样的的，用*默认用例*举例子🥝说明：

```
s = "ADOBECODEBANC"
t = "ABC"
```
我们先建立一个Map和Obj做 t 的记录，并且一个strSize做Map中各类字母的数量记录。

Map ->  A: 1, B: 1, C: 1
Obj -> A: 1, B: 1, C: 1
strSize -> Map.size = 3

我们开始遍历，结束的标识就是j到了数组的最后。

1. j = 0, s[j] = A, 那么此时，Map中的`A`就要减1，并且`Map-A`为0，`strSize - 1`，继续
2. j = 1, s[j] = D, 不在Map中，无操作
3. j = 2, s[j] = O, 不在Map中，无操作
4. j = 3, s[j] = B, 在`Map`中，且Map中的`B`要减1，并且`Map-B`为0，`strSize - 1 => 1`，继续
5. j = 4, s[j] = E, 不在Map中，无操作
6. j = 5, s[j] = C, 在`Map`中，且Map中的`C`要减1，并且`Map-C`为0，`strSize - 1 => 0`，继续 
7. 由于`strSize`为0了，为0意味着，`t`中的字符全都已经满足有了，因此需要开始动左指针了。
8. i = 0, s[i] = A, 在`Map`中，需要为`Map-A`增加1，并且增加之后为1了，这意味着，再增加，这个区间就将没有`A`了，因此，此时要开始计算是否为最小区间，并且记录`i`,`j`的位置了。


#### code

😭😭😭*调试这题真的太麻烦了，总是一不小心漏了一些逻辑，到最后leetCode的*`"cabbabaaaaccbbaabccccbabcacbbcbaacacbacbbbacabac", "aacbcbcbbcbccabaabcbccabb"`*这么长测试用例都出来了*


```
var minWindow = function(s, t) {
    let sLen = s.length;
    let i = 0,
        j = 0;
    let strMap = new Map(),
        strObj = {},
        strSize = 0;
    let minStrArr = [],
        minLen;
    if(s === t) {
        return s;
    }
    for(let uS of t) {
        if(!strMap.has(uS)) {
            strObj[uS] = 0;
            strMap.set(uS, 0);
        }
        strObj[uS] += 1;
        strMap.set(uS, strMap.get(uS) + 1)
    }
    strSize = strMap.size;
    // ②，③
    let tmpMinArr = [];
    for(; j < sLen; j++) {
        let nowJVal = s[j];
        if(strMap.has(nowJVal)) {
            let jvalNum = strMap.get(nowJVal);
            jvalNum -= 1;
            strMap.set(nowJVal, jvalNum);
            if(jvalNum === 0) {
                strSize -= 1;
            }
        }
        while(strSize === 0) {
            tmpMinArr[1] = j;
            let iS = s[i];
            if(strMap.has(iS)) {
                let newIsN = strMap.get(iS) + 1;
                strMap.set(iS, newIsN);
                // ①
                if(newIsN === 1) {
                    tmpMinArr[0] = i;
                    if(!minLen) {
                        minLen = tmpMinArr[1] - tmpMinArr[0] + 1;
                        minStrArr = tmpMinArr.slice(0);
                    } else {
                        if(tmpMinArr[1] - tmpMinArr[0] + 1 < minLen) {
                            minStrArr = tmpMinArr.slice(0);
                            // ④
                            minLen = tmpMinArr[1] - tmpMinArr[0] + 1;
                        }
                    }
                    strSize += 1
                }
            }
            i++;
        }
    }
    return s.slice(minStrArr[0], minStrArr[1] + 1);
};
```

序号①、②、③都是分别在这几个用例上踩下的坑。。


1. "aa", "aa"
2. "acbbaca", "aba"
3. "cabwefgewcwaefgcf", "cae"




