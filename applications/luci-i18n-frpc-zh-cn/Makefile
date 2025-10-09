include $(TOPDIR)/rules.mk

PKG_NAME:=luci-i18n-frpc-zh-cn
PKG_VERSION:=1.6.1
PKG_RELEASE:=1
PKG_LICENSE:=GPL-3.0-or-later
PKG_MAINTAINER:=RC <your@email.com>

include $(INCLUDE_DIR)/package.mk

define Package/$(PKG_NAME)
  SECTION:=luci
  CATEGORY:=LuCI
  TITLE:=LuCI translation for frpc (Simplified Chinese)
  PKGARCH:=all
endef

define Package/$(PKG_NAME)/description
  Simplified Chinese translation for luci-app-frpc, version $(PKG_VERSION)
endef

define Build/Compile
    # No compilation needed for pure translation package
endef

define Package/$(PKG_NAME)/install
    $(INSTALL_DIR) $(1)/usr/lib/lua/luci/i18n
    $(INSTALL_DATA) ./po/zh-cn/frpc.po $(1)/usr/lib/lua/luci/i18n/frpc.zh-cn.po
endef

$(eval $(call BuildPackage,$(PKG_NAME)))