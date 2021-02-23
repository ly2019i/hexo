---
title: leetcode
date: 2021-02-23 21:17:00
categories: "leetcode"
tags: ["中等","leetcode","每日打卡","算法"]
---
### 爱生气的书店老板

今天，书店老板有一家店打算试营业 customers.length 分钟。每分钟都有一些顾客（customers[i]）会进入书店，所有这些顾客都会在那一分钟结束后离开。

在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。 当书店老板生气时，那一分钟的顾客就会不满意，不生气则他们是满意的。

书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 X 分钟不生气，但却只能使用一次。

请你返回这一天营业下来，最多有多少客户能够感到满意的数量。

###### 示例：

    输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
    输出：16
    解释：
    书店老板在最后 3 分钟保持冷静。
    感到满意的最大客户数量 = 1 + 1 + 1 + 1 + 7 + 5 = 16.
 
###### 提示：

    1 <= X <= customers.length == grumpy.length <= 20000
    0 <= customers[i] <= 1000
    0 <= grumpy[i] <= 1

#### 解题思路

1. 既然要算出最多有多少客户能感到满意的数量，那么可以先把必定满意也就是grumpy[i]的值为0的客户数量加起来，然后把customers[i]置为0
2. 利用窗口算法，找到在customers中X个值之和最大的值

#### 结果

    /**
    * @param {number[]} customers
    * @param {number[]} grumpy
    * @param {number} X
    * @return {number}
    */
    var maxSatisfied = function(customers, grumpy, X) {
      let len = customers.length;
      let cur = 0;
      for(let i = 0;i < len;i++){
        if(grumpy[i] === 0) {
          cur += customers[i];
          customers[i] = 0;
        }
      }
      let max = 0,sum = 0;
      for(let right = 0,left = 0;right < len;right++){
        sum += customers[right];
        //  如果right - left的值大于X - 1 说明此时sum的值为X个值的和 那么就将当前窗口向右移动一个位置 也就是减去左边第一个值并将left + 1
        if(right - left + 1 > X) sum -= customers[left++];
        max = Math.max(max, sum);
      }
      return cur + max;
    };

##### 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/grumpy-bookstore-owner