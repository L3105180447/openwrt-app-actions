#
# <https://github.com/xueycn/openwrt_komari/>
# 
# Copyright (C) 2021 zPonds <admin@shinenet.cn>
# Copyright (C) 2020 KFERMercer <KFER.Mercer@gmail.com>
# Copyright (C) 2020 [CTCGFW] Project OpenWRT
# 
# THIS IS FREE SOFTWARE, LICENSED UNDER GPLv3.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-komari-agent
LUCI_TITLE:=LuCI support for komari agent
LUCI_DEPENDS:=+komari-agent
LUCI_PKGARCH:=all
PKG_VERSION:=3.0
PKG_RELEASE:=1
PKG_MAINTAINER:=<https://github.com/xueycn/openwrt_komari/>

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature
