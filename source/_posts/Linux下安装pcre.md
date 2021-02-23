---
title: Linux下安装pcre
---

PCRE(Perl Compatible Regular Expressions)是一个Perl库，包括 perl 兼容的正则表达式库。

##### 下载

##### 安装步骤
###### 执行命令
    wget https://ftp.pcre.org/pub/pcre/pcre-8.44.tar.gz 
###### 解压缩
    tar -zxf pcre-8.10.tar.gz
###### 进入解压好的目录
    cd pcre-8.10.tar.gz
###### 执行配置
    ./configure
###### 编译安装
    make && make install