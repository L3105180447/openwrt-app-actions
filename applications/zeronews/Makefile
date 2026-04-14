# SPDX-License-Identifier: GPL-3.0-only
#
# Copyright (C) 2023 ImmortalWrt.org
# Copyright (C) 2026 Internet1235

include $(TOPDIR)/rules.mk

PKG_NAME:=zeronews
PKG_VERSION:=3.0.3
PKG_RELEASE:=1

PKG_SOURCE:=$(PKG_NAME)-openwrt-v2-$(PKG_VERSION).tar
ifeq ($(ARCH),aarch64)
  PKG_ARCH:=arm64
  PKG_HASH:=e6a023f76a1391a88bdc72142468a96e9a1a1988e701e2ea16ca91e74244ca09
else ifeq ($(ARCH),arm)
  PKG_ARCH:=arm
  PKG_HASH:=6347aac1345b9bc8b3b93e54325a6272d42db5fe2fe72910a7fe38a5dc72f455
else ifeq ($(ARCH),mips)
  PKG_ARCH:=mips
  PKG_HASH:=c15324848602de80ae36c1d1fb88f2b9247281f1aaa748523d2c4025695379af
else ifeq ($(ARCH),x86_64)
  PKG_ARCH:=x86_x64
  PKG_HASH:=c3b553d3cdbdcf10f1be576000b96b3f4cdee4b6cefd8f94d519c29db89d4bde
endif
PKG_SOURCE_URL:=https://download.zeronews.cc/openwrt/$(PKG_ARCH)
PKG_BUILD_DIR:=$(BUILD_DIR)/zeronews

PKG_LICENSE:=Proprietary
PKG_MAINTAINER:=Internet1235

include $(INCLUDE_DIR)/package.mk

define Package/zeronews
  SECTION:=net
  CATEGORY:=Network
  TITLE:=ZeroNews Intranet Penetration
  DEPENDS:=@(aarch64||arm||mips||x86_64)
  URL:=https://zeronews.cc
endef

define Package/zeronews/description
  ZeroNews is an innovative edge cloud intranet penetration platform 
  designed to help users quickly address the security and fast access 
  needs between intranet and internet.
endef

define Build/Compile
endef

define Package/zeronews/conffiles
/etc/config/zeronews
/etc/zeronews/
endef

define Package/zeronews/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/zeronews $(1)/usr/bin/zeronews

	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) $(CURDIR)/files/zeronews.init $(1)/etc/init.d/zeronews

	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) $(CURDIR)/files/zeronews.config $(1)/etc/config/zeronews
endef

$(eval $(call BuildPackage,zeronews))
