---
title:   Debian 镜像源使用说明
date: "2023-02-18T13:41:03.284Z"
description: ""
tags: ["帮助文档"]
sidebarDepth: 1
---
# Debian 镜像源使用说明

受镜像站硬盘容量限制，只对部分内容进行了同步。

- 支持的指令集：i386，amd64，arm64 和 riscv64。其中上游 riscv64 仍处于 sid 阶段，本站与上游保持一致。

- 支持的版本：bookworm，bullseye 和 buster。

- 仅二进制包，不包含源码。

## Debian 12

Debian 12 (bookworm) 用户请先检查``/etc/apt/sources.list.d/debian.sources``文件是否存在

若不存在，请将 `/etc/apt/sources.list` 文件改为以下内容：

```
deb https://mirrors.sdu.edu.cn/debian bookworm main contrib non-free non-free-firmware
deb https://mirrors.sdu.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware
deb https://mirrors.sdu.edu.cn/debian bookworm-updates main contrib non-free non-free-firmware
```

否则请将``/etc/apt/sources.list.d/debian.sources``文件改为以下内容：

```
Types: deb
URIs: https://mirrors.sdu.edu.cn/debian
Suites: bookworm
Components: main contrib non-free non-free-firmware

Types: deb
URIs: https://mirrors.sdu.edu.cn/debian-security
Suites: bookworm-security
Components: main contrib non-free non-free-firmware

Types: deb
URIs: https://mirrors.sdu.edu.cn/debian
Suites: bookworm-updates
Components: main contrib non-free non-free-firmware
```

## Debian 11

Debian 11 (bullseye) 用户请先检查``/etc/apt/sources.list.d/debian.sources``文件是否存在

若是，请将 `/etc/apt/sources.list` 文件改为以下内容：

```
deb https://mirrors.sdu.edu.cn/debian bullseye main contrib non-free
deb https://mirrors.sdu.edu.cn/debian-security bullseye-security main contrib non-free
deb https://mirrors.sdu.edu.cn/debian bullseye-updates main contrib non-free
```

否则请将``/etc/apt/sources.list.d/debian.sources``文件改为以下内容：

```
Types: deb
URIs: https://mirrors.sdu.edu.cn/debian
Suites: bullseye
Components: main contrib non-free

Types: deb
URIs: https://mirrors.sdu.edu.cn/debian-security
Suites: bullseye-security
Components: main contrib non-free

Types: deb
URIs: https://mirrors.sdu.edu.cn/debian
Suites: bullseye-updates
Components: main contrib non-free
```

## Debian 10

Debian 10 (buster) 用户请先检查``/etc/apt/sources.list.d/debian.sources``文件是否存在

若是，请将 `/etc/apt/sources.list` 文件改为以下内容：

```
deb https://mirrors.sdu.edu.cn/debian buster main contrib non-free
deb https://mirrors.sdu.edu.cn/debian-security buster/updates main contrib non-free
deb https://mirrors.sdu.edu.cn/debian buster-updates main contrib non-free
```

否则请将``/etc/apt/sources.list.d/debian.sources``文件改为以下内容：

```
Types: deb
URIs: https://mirrors.sdu.edu.cn/debian
Suites: buster
Components: main contrib non-free

Types: deb
URIs: https://mirrors.sdu.edu.cn/debian-security
Suites: buster/updates
Components: main contrib non-free

Types: deb
URIs: https://mirrors.sdu.edu.cn/debian
Suites: buster-updates
Components: main contrib non-free
```

## 提示

对于精简安装的 Debian，apt-get 工具不一定能够支持 https。使用如下命令安装依赖包。

```bash
apt install apt-transport-https ca-certificates
```

