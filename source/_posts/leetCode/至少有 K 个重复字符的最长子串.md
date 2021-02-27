---
title: 至少有 K 个重复字符的最长子串
date: 2021-02-27 20:36:00
categories: "leetcode"
tags: ["中等","leetcode","每日打卡","算法"]
---
### 至少有 K 个重复字符的最长子串

给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

#### 示例 1：

    输入：s = "aaabb", k = 3
    输出：3
    解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。

#### 示例 2：

    输入：s = "ababbc", k = 2
    输出：5
    解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
 

#### 提示：

1. 1 <= s.length <= 104
2. s 仅由小写英文字母组成
3. 1 <= k <= 105

### 题解

### 代码

    /**
      * @param {string} s
      * @param {number} k
      * @return {number}
    */
    var longestSubstring = function(s, k) {

    };

###### 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters