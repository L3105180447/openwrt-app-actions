include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-v2raya-server
PKG_VERSION:=1.1
PKG_RELEASE:=1

PKG_MAINTAINER:=OpenWrt LuCI community
PKG_LICENSE:=GPL-3.0-or-later
PKG_DESCRIPTION:=LuCI support for v2rayA server

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
  SECTION:=luci
  CATEGORY:=LuCI
  SUBMENU:=3. Applications
  TITLE:=LuCI support for v2ray
  DEPENDS:=+v2ray-core
  PKGARCH:=all
endef

define Package/$(PKG_NAME)/description
LuCI support for v2rayA server.
endef

define Build/Compile
	# LuCI apps are typically scripts, no build needed
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/usr/lib/lua/luci/controller
	$(INSTALL_DATA) ./luasrc/controller/*.lua $(1)/usr/lib/lua/luci/controller/

	$(INSTALL_DIR) $(1)/usr/lib/lua/luci/model/cbi
	$(INSTALL_DATA) ./luasrc/model/cbi/* $(1)/usr/lib/lua/luci/model/cbi/

	$(INSTALL_DIR) $(1)/usr/lib/lua/luci/view
	$(INSTALL_DATA) ./luasrc/view/* $(1)/usr/lib/lua/luci/view/
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
