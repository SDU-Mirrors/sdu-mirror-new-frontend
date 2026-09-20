# 山东大学镜像站 前端

## 简介

一个为[山东大学镜像站](https://mirrors.sdu.edu.cn/)编写的新前端，基于 React18 编写

## 安装依赖

```
yarn install --frozen-lockfile
```



## 启动项目

```
yarn dev
```



## 构建网页

用于测试服务器

```
yarn build --mode=devtest
```

用于生产环境

```
yarn build
```

默认构建输出位于 dist 文件夹中
此外，对于初次部署，如果需要提供文章功能，还需要准备`markdown`文件夹和`json`文件夹，这两个文件夹需要和`index.html`在同一目录下，文件树如下：

```
Project
├─dist
│  ├─markdown
|  | └─...
│  ├─json
|  | └─...
|  ├─...
│  └─index.html
```

可以参考 `src/mock-data/` 文件夹

## 更多关于项目的信息

请参考[ README_DETAIL.md ](README_DETAIL.md)文件
