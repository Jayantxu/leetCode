*原题链接：👉：[LRU 缓存机制](https://leetcode-cn.com/problems/lru-cache/description/)*

题目描述:

实现 LRUCache 类：
1. LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
2. int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
3. void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 
进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例：

```
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```

思路：

> LRU，不多说了，[大量，批量数据绘制总结](http://jayantxu.cn/2021/05/26/2021/%E6%89%B9%E9%87%8F%E6%95%B0%E6%8D%AE%E7%BB%98%E5%88%B6%E5%BF%83%E5%BE%97/) 

```
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.lruMap = new Map();
    }
    get(key) {
        if(this.lruMap.has(key)) {
            let keyVal = this.lruMap.get(key);
            // 更新key位置值
            this.lruMap.delete(key);
            this.lruMap.set(key, keyVal);
            return keyVal;
        } else {
            return -1;
        }
    }
    put(key, val) {
        if(this.lruMap.has(key)) {
            this.lruMap.delete(key);
            this.lruMap.set(key, val);
            return;
        }
        if(this.lruMap.size === this.capacity) {
            this.lruMap.delete(this.lruMap.keys().next().value);
        }
        this.lruMap.set(key, val);
    }
}
```


- 题解

看到有大佬使用双向链表及哈希表结合使用，各取优点。