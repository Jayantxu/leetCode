*原题链接：👉：[字符串解码](https://leetcode-cn.com/problems/decode-string/description/)*

题目描述:

1. 给定一个经过编码的字符串，返回它解码后的字符串。

2. 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

3. 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

4. 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例 1：
```
输入：s = "3[a]2[bc]"
输出："aaabcbc"
```
示例 2：
```
输入：s = "3[a2[c]]"
输出："accaccacc"
```
示例 3：
```
输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
```
示例 4：
```
输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"
```

思路:
> 回溯？递归？
> 以示例2为例子，`3[a2[c]`，实际上也可以看作：`1[3[a2[c]]]`，我们只需要每次遍历到数字的时候，开始进入多一层，数字推入栈，遇到`]`，开始出栈拼接字符串并且修改索引下标即可。

```
var decodeString = function(s) {
    let resStr = '';
    s = `1[${s}]`;
    let numsStack = [];
    let strStack = [];
    const strStackFunc = (idx) => {
        let str = '';
        for(let i = idx; ; i++) {
            if(s.charAt(i) === '[') {
                continue;
            } else if (s.charAt(i) === ']') {
                let cnt = numsStack.pop();
                let formalStr = str;
                while(cnt > 1) {
                    str += formalStr;
                    cnt -= 1;
                }
                return {
                    i,
                    str
                };
            } else if (!isNaN(Number(s.charAt(i)))) {
                let recordNum = '';
                while(!isNaN(Number(s.charAt(i)))) {
                    recordNum += s.charAt(i);
                    i++;
                }
                i--;
                numsStack.push(Number(recordNum));
                let obj = strStackFunc(i + 1);
                str += obj.str;
                i = obj.i;
            } else {
                str += s.charAt(i);
            }
            if(i >= s.length - 1) {
                return str;
            }
        }
    }
    resStr = strStackFunc(0);
    return resStr;
};
```