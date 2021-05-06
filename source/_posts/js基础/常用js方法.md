---
title: 常用js方法
date: 2021-05-06
categories: "js"
tags: ["js"]
---

#### 获取url参数（兼容hash模式和history模式）

    ```
    function getUrlParam(name) {
      var vars = {};
      window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
          vars[key] = value;
        }
      );
      return vars[name];
    }
    ```

#### 格式化金钱
```
    function formatNum(s, n) {
      /*
      * 参数说明：
      * s：要格式化的数字
      * n：保留几位小数
      * */
      if (typeof s !== "number") {
        return s;
      }
      n = n > 0 && n <= 20 ? n : 2;
      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
      var l = s
          .split(".")[0]
          .split("")
          .reverse(),
        r = s.split(".")[1];
      var t = "";
      for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
      }
      return (
        t
          .split("")
          .reverse()
          .join("") +
        "." +
        r
      );
    }
```

#### 生成指定范围随机数
```
    const RandomNum = (min, max) =>Math.floor(Math.random() * (max - min + 1)) + min;
    const num = RandomNum(1, 10);
```

#### 短路运算符
```
    const a = d && 1; // 满足条件赋值：取假运算，从左到右依次判断，遇到假值返回假值，后面不再执行，否则返回最后一个真值
    const b = d || 1; // 默认赋值：取真运算，从左到右依次判断，遇到真值返回真值，后面不再执行，否则返回最后一个假值
    const c = !d; // 取假赋值：单个表达式转换为true则返回false，否则返回true
```

#### 交换赋值
```
    let a = 0;
    let b = 1;
    [a, b] = [b, a];
    // a b => 1 0
```