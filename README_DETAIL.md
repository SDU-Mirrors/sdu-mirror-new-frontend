# 山东大学镜像站 前端

## 简介

前端基于React18 + React-router 6编写，脚手架使用Vite

UI方面使用了Tailwind CSS和Headless UI组件库Radix UI

文档：

[Tailwind CSS](https://tailwindcss.com/docs/installation)

[Radix UI](https://www.radix-ui.com/primitives/docs/overview/introduction)

浏览器兼容性：

- 完整体验建议使用 Chrome 90+ / Firefox 80+ 以上版本浏览器
- 上一次测试中：
    - Chrome 最低可打开版本为 49，Firefox 最低可打开版本为 46，但部分布局 / 功能无法正常工作，仅确保可基础浏览
    - 能全部正常渲染（除了暗色模式）的浏览器版本最低为 Chrome 57+ / Firefox 55+
    - 暗色模式能正常显示需要 Chrome 88+ / Firefox 78+
    - Firefox 66 - 77 打不开镜像站网页...
- 随着项目更新，结果可能会有变化，建议以实测为准

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

默认构建输出位于dist文件夹中

**~~此外，还需要修改 dist/index.html 文件，将所有以"./"开头的路径修改以为"/"开头~~**

**现在构建时会自动将 dist/index.html 里的 "./" 改为 "/"，不需要手动修改了~**

关于为什么要修改的解释：
- 对于编译好的 index.html 文件，里面存在多处 ./ 开头的 uri，（具体如 ./favicon.ico，./assest/index-xx.js，）
- 对于从 https://mirrors.sdu.edu.cn/ 开始访问的用户，即使不对 index.html 做任何修改，也能正常访问；
- 问题出现在尝试直接打开（或刷新）部分二级路径上，例如：https://mirrors.sdu.edu.cn/docs/2021-03-26-DNSIssue；由于前端现在是 SPA 形式，对于这样的路径，caddy 会直接返回 index.html 的内容，随后由前端完成处理。此时由于相对路径的存在，浏览器会尝试请求 mirrors.sdu.edu.cn/docs/assest/index-xx.js，导致网页无法渲染；
- 具体修改：将所有 ./ 开头的路径改为 / 开头即可；
- 为啥会引入这个问题：因为 vite.config.js 里新添加了一个选项 base:"./"，如果不添加这个选项，就会导致 @vitejs/plugin-legacy 无法正常工作（具体表现为旧浏览器打不开网页），添加这个选项就会导致上述问题的产生；

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

## 自定义环境配置

本项目使用了三个模式：development，devtest，production

development模式用于本地开发，devtest用于为测试服务器构建网页，production用于为生产环境构建网页

如果你需要覆盖模式里的环境变量，请创建这样的文件并在文件里覆盖：

```
.env.[环境名].local
```

## 所使用的部分库

### svgr

该库用于将单个SVG作为组件引入

### vite-plugin-svg-spritemap

该库用于批量引入SVG来生成SVG精灵图

主要用于镜像页中的SVG图标

### react-markdown

该库用于在前端渲染Markdown文件

### Service Worker

当前不再注册 Service Worker。`public/sw.js` 仅用于注销历史版本留下的注册和缓存，文件名及部署路径需要长期保持不变。

### serve-static

为开发环境提供额外的静态资源文件服务器

[参考链接](https://github.com/vitejs/vite/discussions/7374#discussioncomment-4013950)

### react-toastify

该库用于提供消息条提醒/通知功能

## 目录简介

这里只展示部分文件夹

```
Project
├─src
│  ├─assets
│  │  ├─member_avatar      // 关于页的成员头像
│  │  ├─mirror_icons_svg   // 镜像页的镜像图标
│  │  ├─source             // 存放着镜像站各个大小的图标和一些二维码
│  │  └─svg                // 一些 svg 格式的图标
│  ├─components
│  │  ├─Card               // 卡片组件
│  │  ├─Layouts            // 里面存放了 Header 导航栏和 Footer 页尾
│  │  ├─Loading            // 加载动画
│  │  ├─MarkdownContainer  // Markdown 容器组件
│  │  ├─ScrollToTop        // 滚动到顶部按钮
│  │  ├─SearchBar          // 搜索框组件
│  │  ├─ThemeButton        // 主题切换按钮
│  │  ├─ThemeProvider      // 提供主题切换能力
│  ├─css
│  ├─mock-data             // 帮助页与博客页的模拟数据
│  ├─pages                 // 路由页面放到这
│  │  ├─About              // 关于页
│  │  ├─DocumentPage       // 文档页
│  │  ├─HelpPage           // 帮助页
│  │  ├─HomePage           // 主页
│  │  ├─Mirror             // 镜像页
│  │  └─NotFoundPage       // 404 页
│  ├─routes                // 路由
│  ├─services              // 请求相关
│  └─utils
│     └─utils.js
└─svg_project              // 一些重绘过的图标的原始文件

```



## 镜像页图标来源

图标全部采用了SVG格式

部分图标可以在[Simple Icons](https://simpleicons.org)里找到

部分图标需要在互联网中寻找或者尝试手绘

以下是图标来源标注

### 来自Simple Icons

- Arch Linux
- Debian
- Github
- Kali Linux
- Manjaro Linux
- OpenWRT
- Rocky Linux
- Ubuntu

### 来自互联网各处

- AOSC OS

  来自于https://github.com/AOSC-Dev/logo/blob/master/aosc-os.svg

- Armbian

  来自于https://github.com/armbian/stationery/blob/master/logos/logo.svg

- BioArchLinux

  基于https://github.com/BioArchLinux/hugo-theme-bioarchlinux/blob/main/static/css/archnavbar/bioarchlinux.svg修改

- Python

  来自于https://www.python.org/community/logos/

- Termux

  来自于https://en.m.wikipedia.org/wiki/File:Termux.svg

### 来自手动重绘

- 暂无



## 相关数据维护

### 首页中的镜像站时间记录轴

文件位于

```
src/pages/HomePage/Timeline/Timeline.json
```

json格式参考：

```json
{
	"id":"要求是唯一id",
	"time":"时间",
	"content":"内容"
}
```



### 页脚的Copyright

位于Footer组件里的theYear变量



### 镜像页中的图标

文件位于

```
src/pages/Mirror/icons.json
```

图标存放于

```
src/assets/mirror_icons_svg/
```

格式参考：

```json
{
	"name":"需要应用图标的镜像的名称，需与从后端获取的镜像名一致",
    "icon":"图标名，需与图标文件夹下的svg图标名称一致"
}
```



### 关于页中的成员信息

json文件位于

```
src/pages/About/members.json
```

成员头像位于

```
src/assets/member_avatar/
```

注意头像需为jpg格式（除非有人愿意把About.jsx里相关部分重写一下支持更多格式）

json格式参考：

```json
{
	"id":"填写一个唯一id",
    "title":"显示标题",
    "display":"控制是否显示这一届成员信息，默认填true",
    "members":[
    	{
    		"name":"成员名字",
    		"short":"名字拼音缩写，其名称要和存放在src/assets/member_avatar下的头像名称一致，如果遭遇拼音重名情况可在后面加上数字",
    		"position":"职位",
    		"description":"来自于哪个学院"
		}
    ]
    
}
```





## 需要注意的点

### 导入单个svg格式图标

需要在路径后面加上?react

示例：

```js
import CloseSVG from "src/assets/svg/close.svg?react";
```



## 一些已知且并不打算修的BUG

1. 在移动端中，若浏览器启用了手势滑动返回，则在镜像页的列表模式中无法正常左右滑动表格，只能斜着滑
2. 在移动端部分浏览器中，当系统(或浏览器)启用深色模式时，页面的浅色模式会被浏览器强制反色，破坏了浅色模式的配色方案
