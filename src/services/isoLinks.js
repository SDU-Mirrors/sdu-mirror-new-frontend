const isoLinks = [
  {
    value: "AOSC OS",
    label: "AOSC OS",
    category: "os",
    children: [
      { label: "20251206 (riscv64, desktop)", value: "/anthon/aosc-os/os-riscv64/desktop/aosc-os_desktop_20251206_riscv64.tar.xz" },
      { label: "20251206 (riscv64, container)", value: "/anthon/aosc-os/os-riscv64/container/aosc-os_container_20251206_riscv64.tar.xz" },
      { label: "20251206 (riscv64, buildkit)", value: "/anthon/aosc-os/os-riscv64/buildkit/aosc-os_buildkit_20251206_riscv64.tar.xz" },
      { label: "20251206 (riscv64, base)", value: "/anthon/aosc-os/os-riscv64/base/aosc-os_base_20251206_riscv64.tar.xz" },
      { label: "20251206 (ppc64el, desktop)", value: "/anthon/aosc-os/os-ppc64el/desktop/aosc-os_desktop_20251206_ppc64el.tar.xz" },
      { label: "20251206 (ppc64el, container)", value: "/anthon/aosc-os/os-ppc64el/container/aosc-os_container_20251206_ppc64el.tar.xz" },
      { label: "20251206 (ppc64el, buildkit)", value: "/anthon/aosc-os/os-ppc64el/buildkit/aosc-os_buildkit_20251206_ppc64el.tar.xz" },
      { label: "20251206 (ppc64el, base)", value: "/anthon/aosc-os/os-ppc64el/base/aosc-os_base_20251206_ppc64el.tar.xz" },
      { label: "20251206 (loongson3, desktop)", value: "/anthon/aosc-os/os-loongson3/desktop/aosc-os_desktop_20251206_loongson3.tar.xz" },
      { label: "20251206 (loongson3, container)", value: "/anthon/aosc-os/os-loongson3/container/aosc-os_container_20251206_loongson3.tar.xz" },
      { label: "20251206 (loongson3, buildkit)", value: "/anthon/aosc-os/os-loongson3/buildkit/aosc-os_buildkit_20251206_loongson3.tar.xz" },
      { label: "20251206 (loongson3, base)", value: "/anthon/aosc-os/os-loongson3/base/aosc-os_base_20251206_loongson3.tar.xz" },
      { label: "20251206 (loongarch64, desktop)", value: "/anthon/aosc-os/os-loongarch64/desktop/aosc-os_desktop_20251206_loongarch64.tar.xz" },
      { label: "20251206 (loongarch64, container)", value: "/anthon/aosc-os/os-loongarch64/container/aosc-os_container_20251206_loongarch64.tar.xz" },
      { label: "20251206 (loongarch64, buildkit)", value: "/anthon/aosc-os/os-loongarch64/buildkit/aosc-os_buildkit_20251206_loongarch64.tar.xz" },
      { label: "20251206 (loongarch64, base)", value: "/anthon/aosc-os/os-loongarch64/base/aosc-os_base_20251206_loongarch64.tar.xz" },
      { label: "20251206 (amd64, desktop)", value: "/anthon/aosc-os/os-amd64/desktop/aosc-os_desktop_20251206_amd64.tar.xz" },
      { label: "20251206 (amd64, container)", value: "/anthon/aosc-os/os-amd64/container/aosc-os_container_20251206_amd64.tar.xz" },
      { label: "20251206 (amd64, buildkit)", value: "/anthon/aosc-os/os-amd64/buildkit/aosc-os_buildkit_20251206_amd64.tar.xz" },
      { label: "20251206 (amd64, base)", value: "/anthon/aosc-os/os-amd64/base/aosc-os_base_20251206_amd64.tar.xz" },
      { label: "20251206 (arm64, desktop)", value: "/anthon/aosc-os/os-arm64/desktop/aosc-os_desktop_20251206_arm64.tar.xz" },
      { label: "20251206 (arm64, container)", value: "/anthon/aosc-os/os-arm64/container/aosc-os_container_20251206_arm64.tar.xz" },
      { label: "20251206 (arm64, buildkit)", value: "/anthon/aosc-os/os-arm64/buildkit/aosc-os_buildkit_20251206_arm64.tar.xz" },
      { label: "20251206 (arm64, base)", value: "/anthon/aosc-os/os-arm64/base/aosc-os_base_20251206_arm64.tar.xz" }
    ]
  },
  {
    value: "CentOS",
    label: "CentOS",
    category: "os",
    children: [
      { label: "9-Stream (x86_64, dvd)", value: "/centos/9-stream/isos/x86_64/CentOS-Stream-9-20231201.0-x86_64-dvd.iso" },
      { label: "9-Stream (x86_64, boot)", value: "/centos/9-stream/isos/x86_64/CentOS-Stream-9-20231201.0-x86_64-boot.iso" },
      { label: "8-Stream (x86_64, dvd)", value: "/centos/8-stream/isos/x86_64/CentOS-Stream-8-20231201.0-x86_64-dvd1.iso" },
      { label: "8-Stream (x86_64, boot)", value: "/centos/8-stream/isos/x86_64/CentOS-Stream-8-20231201.0-x86_64-boot.iso" },
      { label: "7-2009 (x86_64, dvd)", value: "/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso" },
      { label: "7-2009 (x86_64, minimal)", value: "/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-Minimal-2009.iso" },
      { label: "7-2009 (x86_64, everything)", value: "/centos/7.9.2009/isos/x86_64/CentOS-7-x86_64-Everything-2009.iso" }
    ]
  },
  {
    value: "Debian",
    label: "Debian",
    category: "os",
    children: [
      { label: "12.8.0 (amd64, dvd-1)", value: "/debian-cdn/debian/12.8.0/amd64/iso-dvd/debian-12.8.0-amd64-DVD-1.iso" },
      { label: "12.8.0 (amd64, dvd-2)", value: "/debian-cdn/debian/12.8.0/amd64/iso-dvd/debian-12.8.0-amd64-DVD-2.iso" },
      { label: "12.8.0 (amd64, dvd-3)", value: "/debian-cdn/debian/12.8.0/amd64/iso-dvd/debian-12.8.0-amd64-DVD-3.iso" },
      { label: "11.9.0 (amd64, dvd-1)", value: "/debian-cdn/debian/11.9.0/amd64/iso-dvd/debian-11.9.0-amd64-DVD-1.iso" },
      { label: "11.9.0 (amd64, dvd-2)", value: "/debian-cdn/debian/11.9.0/amd64/iso-dvd/debian-11.9.0-amd64-DVD-2.iso" },
      { label: "10.13.0 (amd64, dvd-1)", value: "/debian-cdn/debian/10.13.0/amd64/iso-dvd/debian-10.13.0-amd64-DVD-1.iso" },
      { label: "10.13.0 (amd64, dvd-2)", value: "/debian-cdn/debian/10.13.0/amd64/iso-dvd/debian-10.13.0-amd64-DVD-2.iso" }
    ]
  },
  {
    value: "Deepin",
    label: "Deepin",
    category: "os",
    children: [
      { label: "20.9 (amd64)", value: "/deepin-cd/deepin-20.9-amd64.iso" },
      { label: "20.8 (amd64)", value: "/deepin-cd/deepin-20.8-amd64.iso" },
      { label: "20.7 (amd64)", value: "/deepin-cd/deepin-20.7-amd64.iso" }
    ]
  },
  {
    value: "Fedora",
    label: "Fedora",
    category: "os",
    children: [
      { label: "41 (x86_64, Workstation)", value: "/fedora/releases/41/Workstation/x86_64/iso/Fedora-Workstation-41-1.4.x86_64.iso" },
      { label: "41 (x86_64, Server)", value: "/fedora/releases/41/Server/x86_64/iso/Fedora-Server-41-1.4.x86_64.iso" },
      { label: "41 (x86_64, Spins)", value: "/fedora/releases/41/Spins/x86_64/iso/Fedora-Spins-41-1.4.x86_64.iso" },
      { label: "40 (x86_64, Workstation)", value: "/fedora/releases/40/Workstation/x86_64/iso/Fedora-Workstation-40-1.14.x86_64.iso" },
      { label: "40 (x86_64, Server)", value: "/fedora/releases/40/Server/x86_64/iso/Fedora-Server-40-1.14.x86_64.iso" },
      { label: "39 (x86_64, Workstation)", value: "/fedora/releases/39/Workstation/x86_64/iso/Fedora-Workstation-39-1.5.x86_64.iso" },
      { label: "39 (x86_64, Server)", value: "/fedora/releases/39/Server/x86_64/iso/Fedora-Server-39-1.5.x86_64.iso" }
    ]
  },
  {
    value: "Kali Linux",
    label: "Kali Linux",
    category: "os",
    children: [
      { label: "2025.4 (amd64, installer)", value: "/kali-images/current/kali-linux-2025.4-installer-amd64.iso" },
      { label: "2025.4 (amd64, installer-purple)", value: "/kali-images/current/kali-linux-2025.4-installer-purple-amd64.iso" },
      { label: "2025.4 (amd64, installer-netinst)", value: "/kali-images/current/kali-linux-2025.4-installer-netinst-amd64.iso" },
      { label: "2025.4 (arm64, installer)", value: "/kali-images/current/kali-linux-2025.4-installer-arm64.iso" },
      { label: "2025.4 (amd64, weekly)", value: "/kali-images/current/kali-linux-weekly-amd64.iso" }
    ]
  },
  {
    value: "Rocky Linux",
    label: "Rocky Linux",
    category: "os",
    children: [
      { label: "9.7 (x86_64, minimal)", value: "/rocky/9.7/isos/x86_64/Rocky-9.7-x86_64-minimal.iso" },
      { label: "9.7 (x86_64, dvd)", value: "/rocky/9.7/isos/x86_64/Rocky-9.7-x86_64-dvd.iso" },
      { label: "9.7 (x86_64, boot)", value: "/rocky/9.7/isos/x86_64/Rocky-9.7-x86_64-boot.iso" },
      { label: "9.7 (aarch64, minimal)", value: "/rocky/9.7/isos/aarch64/Rocky-9.7-aarch64-minimal.iso" },
      { label: "9.7 (aarch64, dvd)", value: "/rocky/9.7/isos/aarch64/Rocky-9.7-aarch64-dvd.iso" },
      { label: "8.10 (x86_64, minimal)", value: "/rocky/8.10/isos/x86_64/Rocky-8.10-x86_64-minimal.iso" },
      { label: "8.10 (x86_64, dvd1)", value: "/rocky/8.10/isos/x86_64/Rocky-8.10-x86_64-dvd1.iso" }
    ]
  },
  {
    value: "Ubuntu - CD Images",
    label: "Ubuntu - CD Images",
    category: "os",
    children: [
      { label: "24.04.3 (amd64, Server)", value: "/ubuntu-releases/noble/ubuntu-24.04.3-live-server-amd64.iso" },
      { label: "24.04.3 (amd64, Desktop LiveDVD)", value: "/ubuntu-releases/noble/ubuntu-24.04.3-desktop-amd64.iso" },
      { label: "22.04.5 (amd64, Server)", value: "/ubuntu-releases/jammy/ubuntu-22.04.5-live-server-amd64.iso" },
      { label: "22.04.5 (amd64, Desktop LiveDVD)", value: "/ubuntu-releases/jammy/ubuntu-22.04.5-desktop-amd64.iso" },
      { label: "20.04.6 (amd64, Server)", value: "/ubuntu-releases/focal/ubuntu-20.04.6-live-server-amd64.iso" },
      { label: "20.04.6 (amd64, Desktop LiveDVD)", value: "/ubuntu-releases/focal/ubuntu-20.04.6-desktop-amd64.iso" },
      { label: "18.04.6 (amd64, Server)", value: "/ubuntu-releases/bionic/ubuntu-18.04.6-live-server-amd64.iso" }
    ]
  }
];

export default isoLinks;
