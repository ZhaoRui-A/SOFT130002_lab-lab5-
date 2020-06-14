# Lab 11 设计文档

## 1、Cookie&Session

Cookie与Session目的是维护用户与服务器会话状态。

**Cookie通过在客户端记录信息确定用户身份**，**Session通过在服务器端记录信息确定用户身份**。

## 2、Cookie

### 优点

可节省服务器端开销

便于SEO

### 缺点

cookie可能被禁用；

cookie与浏览器相关，不能互相访问；

cookie可能被用户删除；

cookie安全性不够高；（Cookie欺骗）

cookie存储空间很小(只有4–10KB左右)

## 3、Session

### 优点

Session变量相比QueryString传递变量更简单

不必事先声明，也不必特意释放（变量）

存储在服务器端，相对安全

### 缺点

服务器负担相对更大

session是通过cookie来工作的，因此可以考虑将登陆信息等重要信息存放为session

### 总结

安全性能考虑Session，服务器性能考虑Cookie。