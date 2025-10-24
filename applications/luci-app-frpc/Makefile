#
# Copyright (C) 2008-2014 The LuCI Team <luci@lists.subsignal.org>
#
# This is free software, licensed under the Apache License, Version 2.0 .
#

include $(TOPDIR)/rules.mk

LUCI_TITLE:=LuCI for FRPC
LUCI_DEPENDS:=+frpc
LUCI_PKGARCH:=all

PKG_VERSION:=1.6.1
PKG_RELEASE:=1

define Package/luci-app-frpc/install
    $(INSTALL_DIR) $(1)/usr/lib/lua/luci/controller
    $(INSTALL_DATA) ./luasrc/controller/frpc.lua $(1)/usr/lib/lua/luci/controller/

    $(INSTALL_DIR) $(1)/usr/lib/lua/luci/model/cbi/frpc
    $(INSTALL_DATA) ./luasrc/model/cbi/frpc/*.lua $(1)/usr/lib/lua/luci/model/cbi/frpc/

    $(INSTALL_DIR) $(1)/usr/lib/lua/luci/view/frpc
    $(INSTALL_DATA) ./luasrc/view/frpc/*.htm $(1)/usr/lib/lua/luci/view/frpc/

    $(INSTALL_DIR) $(1)/etc/config
    $(INSTALL_CONF) ./files/frpc.config $(1)/etc/config/frpc
endef

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature
