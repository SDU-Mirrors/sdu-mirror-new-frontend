const mirrorTemplates = [
  {
    name: "AAA",
    url: "/aaa/",
    help_url: "/help/markdown-test",
    sync_method: "rsync",
    display_name: "AAA",
    description: "一个测试数据，点击帮助按钮跳到MarkdownTest去。",
    status: 0,
    size: 10,
    sync_timeout: false
  },
  {
    name: "alpine",
    url: "/alpine/",
    help_url: "https://help.mirrors.cernet.edu.cn/alpine/?mirror=SDU",
    sync_method: "rsync",
    display_name: "Alpine",
    description: "Alpine Linux 是一个由社区开发的基于 musl 和 BusyBox 的轻量级 Linux 发行版，专为容器化应用和安全加固而设计。",
    status: 0,
    size: 1010000,
    sync_timeout: false
  },
  {
    name: "archlinux",
    url: "/archlinux/",
    help_url: "https://help.mirrors.cernet.edu.cn/archlinux/?mirror=SDU",
    sync_method: "rsync",
    display_name: "Arch Linux",
    description: "Arch Linux 是一个 x86-64 架构的通用 GNU/Linux 发行版，采用滚动更新模式，以其简洁、现代、实用和用户友好的设计著称。",
    status: 1,
    size: 1070000,
    sync_timeout: false
  },
  {
    name: "archlinuxcn",
    url: "/archlinuxcn/",
    help_url: "https://github.com/archlinuxcn/repo/wiki/ArchlinuxCN%E6%96%87%E6%9C%AF%E5%92%8C%E5%AE%89%E8%A3%85",
    sync_method: "custom",
    display_name: "Arch Linux CN",
    description: "Arch Linux CN 是面向中国用户的 Arch Linux 软件源，提供国内访问更快的软件包镜像。",
    status: 2,
    size: 1060000,
    sync_timeout: false
  },
  {
    name: "centos",
    url: "/centos/",
    help_url: "",
    sync_method: "rsync",
    display_name: "CentOS",
    description: "CentOS 是一个企业级的开源软件发行版，与 Red Hat Enterprise Linux 源码兼容，提供稳定可靠的计算平台。",
    status: 3,
    size: 1040000,
    sync_timeout: false
  },
  {
    name: "debian",
    url: "/debian/",
    help_url: "https://help.mirrors.cernet.edu.cn/debian/?mirror=SDU",
    sync_method: "rsync",
    display_name: "Debian",
    description: "Debian 是一个完全由开源软件构建的 GNU/Linux 操作系统，以其稳定性、安全性和自由度而闻名。",
    status: 0,
    size: 1100000,
    sync_timeout: false
  },
  {
    name: "debian-cdn",
    url: "/debian-cdn/",
    help_url: "",
    sync_method: "rsync",
    display_name: "Debian CDN",
    description: "Debian CDN 镜像，提供 Debian 软件包的高速下载服务。",
    status: 0,
    size: 1085000,
    sync_timeout: true
  },
  {
    name: "debian-security",
    url: "/debian-security/",
    help_url: "",
    sync_method: "rsync",
    display_name: "Debian Security",
    description: "Debian 安全更新镜像，提供 Debian 系统安全补丁的快速访问。",
    status: 1,
    size: 1015000,
    sync_timeout: true
  },
  {
    name: "deepin",
    url: "/deepin/",
    help_url: "",
    sync_method: "rsync",
    display_name: "Deepin",
    description: "Deepin 是一个基于 Debian 的 Linux 发行版，以其美观的 DDE 桌面环境和用户体验著称。",
    status: 2,
    size: 1095000,
    sync_timeout: true
  },
  {
    name: "rocky",
    url: "/rocky/",
    help_url: "https://help.mirrors.cernet.edu.cn/rocky/?mirror=SDU",
    sync_method: "rsync",
    display_name: "Rocky Linux",
    description: "Rocky Linux 是一个企业级开源 Linux 发行版，作为 Red Hat Enterprise Linux (RHEL) 的兼容替代品，专注于稳定性与长期支持。",
    status: 3,
    size: 10620,
    sync_timeout: true
  },
  {
    name: "termux",
    url: "/termux/",
    help_url: "https://help.mirrorz.org/termux/?mirror=SDU",
    sync_method: "rsync",
    display_name: "Termux",
    description: "Termux 是一款强大的 Android 终端模拟器和 Linux 环境应用，无需 root 即可运行命令行工具，支持包管理和开发环境配置。",
    status: 0,
    size: 1042,
    sync_timeout: false
  },
  {
    name: "ubuntu",
    url: "/ubuntu/",
    help_url: "https://help.mirrors.cernet.edu.cn/ubuntu/?mirror=SDU",
    sync_method: "rsync",
    display_name: "Ubuntu",
    description: "Ubuntu 是基于 Debian 的流行 Linux 发行版，以用户友好性和定期更新著称，适用于桌面、服务器及云环境。",
    status: 0,
    size: 1102000,
    sync_timeout: false
  },
  {
    name: "ubuntu-ports",
    url: "/ubuntu-ports/",
    help_url: "",
    sync_method: "rsync",
    display_name: "Ubuntu Ports",
    description: "Ubuntu Ports 镜像，为 ARM、RISC-V 等非 x86 架构提供 Ubuntu 软件包。",
    status: 0,
    size: 1022000,
    sync_timeout: false
  },
  {
    name: "ubuntu-releases",
    url: "/ubuntu-releases/",
    help_url: "",
    sync_method: "rsync",
    display_name: "Ubuntu - CD Images",
    description: "Ubuntu 官方 ISO 镜像下载。",
    status: 0,
    size: 1052000,
    sync_timeout: false
  }
];

export default mirrorTemplates;
