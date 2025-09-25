include $(TOPDIR)/rules.mk

LUCI_TITLE:=LuCI support for v2ray
LUCI_DEPENDS:=+v2ray-core
LUCI_PKGARCH:=all

PKG_NAME:=luci-app-v2raya-server
PKG_VERSION:=1.1
PKG_RELEASE:=1

PKG_MAINTAINER:=OpenWrt LuCI community

include $(TOPDIR)/feeds/luci/luci.mk

$(eval $(call BuildPackage,$(PKG_NAME)))

