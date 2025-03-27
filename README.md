# 山东大学镜像站 前端

## 简介

前端基于React18 + React-router 6编写，脚手架使用Vite

UI方面使用了Tailwind CSS和Headless UI组件库Radix UI

文档：

[Tailwind CSS](https://tailwindcss.com/docs/installation)

[Radix UI](https://www.radix-ui.com/primitives/docs/overview/introduction)



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

**markdown文件夹并不会被复制到dist文件夹中，如果markdown有更新，请记得将其更新到服务器上**



## 自定义环境配置

本项目使用了三个模式：development，devtest，production

development模式用于本地开发，devtest用于为测试服务器构建网页，production用于为生产环境构建网页

如果你需要覆盖模式里的环境变量，请创建这样的文件并在文件里覆盖：

```
.env.[环境名].local
```

### 示例1

我想要测试自己搭建的后端是否正常，需要指定BASE_URL，则可以创建

```
.env.development.local
```

在里面填写

```
VITE_APP_BASE_URL = "你本地后端的地址"
```

随后运行

```
yarn dev
```



### 示例2

我想要在本地部署前端并测试自己搭建的后端是否正常，需要指定BASE_URL，则可以创建

```
.env.devtest.local
```

在里面填写

```
VITE_APP_BASE_URL = "你本地后端的地址"
```

随后运行

```
yarn build --mode=devtest
```



## 所使用的部分库

### svgr

该库用于将单个SVG作为组件引入

### vite-plugin-svg-spritemap

该库用于批量引入SVG来生成SVG精灵图

主要用于镜像页中的SVG图标

### react-markdown

该库用于在前端渲染Markdown文件

### vite-plugin-pwa

[文档链接](https://vite-pwa-org.netlify.app/guide/)

具有开箱即用的Service worker配置，用于解决网站更新新版本后因浏览器磁盘缓存导致用户无法及时查看到新版本的问题。

将网站更新后，刷新页面或等待一段时间可以在右下角观察到有新内容的提示框，用户点击刷新后即可完成更新。（需要全站HTTPS环境或本地localhost服务器方可观察到更新提示框）

注: 当前版本暂未启用Service worker

### serve-static

为开发环境提供额外的静态资源文件服务器

[参考链接](https://github.com/vitejs/vite/discussions/7374#discussioncomment-4013950)

### react-toastify

该库用于提供消息条提醒/通知功能

## 目录简介

这里只展示部分文件夹

```
Project
├─markdown			
│  ├─docs				//文档页下的文档
│  │  ├─blog			//有需要可以分类,比如这里分为了blog本站发展和guide帮助文档
│  │  └─guide
│  │      └─images		//如果文档里引用了图片(相对路径),请在同目录下创建images文件夹存放图片
│  └─helps				//帮助页下的文档
├─public
│  └─json
├─src
│  ├─assets
│  │  ├─member_avatar		//关于页的成员头像
│  │  ├─mirror_icons_svg	//镜像页的镜像图标
│  │  ├─source				//存放着镜像站各个大小的图标和一些二维码
│  │  └─svg					//一些svg格式的图标
│  ├─components
│  │  ├─Card				//卡片组件
│  │  ├─Layouts				//里面存放了Header导航栏和Footer页尾
│  │  ├─Loading				//加载动画
│  │  ├─MarkdownContainer	//Markdown容器组件
│  │  ├─ThemeButton			//主题切换按钮
│  │  ├─ThemeProvider		//提供主题切换能力
│  │  ├─SearchBar			//搜索框组件
│  │  └─UpdateNotification	//更新提示组件
│  ├─css
│  ├─pages				//路由页面放到这
│  │  ├─About			//关于页
│  │  ├─DocumentPage	//文档页
│  │  ├─HelpPage		//帮助页
│  │  ├─HomePage		//主页
│  │  └─Mirror			//镜像页
│  │  └─NotFoundPage	//404页
│  └─routes			//路由
│  └─utils			
│  	  └─utils.js			
└─svg_project		//一些重绘过的图标的原始文件

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
2. 在文档/帮助页中，在大约800-1000px宽度的浏览器中，页脚部分左右宽度不够合理，但并不想专门为了这两个页面重新复制一个新的页脚组件，故不修
3. 在移动端部分浏览器中，当系统(或浏览器)启用深色模式时，页面的浅色模式会被浏览器强制反色，破坏了浅色模式的配色方案