---
title: Linux下安装和配置nginx
---
## Nginx简介
#### Nginx是什么？
Nginx是一款轻量级Web服务器，也是一款反向代理服务器
> 官网：http://nginx.org/
> 中文文档: http://www.nginx.cn/doc/

#### Nginx能干什么?
Nginx能干的事情很多,这里简要罗列一-些：

可直接支持Rails和PHP的程序
可作为HTTP反向代理服务器
作为负载均衡服务器
作为邮件代理服务器
帮助实现前端动静分离

#### nginx安装

##### Nginx下载
> 官网下载：http://nginx.org/en/download.html


##### 安装步骤

###### 安装依赖

```
    wget http://nginx.org/download/nginx-1.12.2.tar.gz
```

###### 解压缩

```
    tar -zxvf nginx-1.12.2.tar.gz
```
###### 进入解压好的目录

```
    cd nginx-1.12.2/
```
###### 执行配置

```
    ./configure
```
###### 编译安装(默认安装在/usr/local/nginx)

```
    make && make install
```