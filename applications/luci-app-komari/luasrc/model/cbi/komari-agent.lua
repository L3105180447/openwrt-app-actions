--[[

Copyright (C) 2021 zPonds <admin@shinenet.cn>
Copyright (C) 2020 KFERMercer <KFER.Mercer@gmail.com>
Copyright (C) 2020 [CTCGFW] Project OpenWRT

THIS IS FREE SOFTWARE, LICENSED UNDER GPLv3

]]--

m = Map("komari-agent")
m.title	= translate("komari-agent")
m.description = translate("Komari Agent For OpenWRT")

m:section(SimpleSection).template  = "komari-agent/komari-agent_status"

s = m:section(TypedSection, "komari-agent")
s.addremove = false
s.anonymous = true

enable = s:option(Flag, "enabled", translate("启用"))
enable.rmempty = false

tls = s:option(Flag, "tls", translate("使用TLS"))
tls.rmempty = false

o = s:option(Value, "host", translate("面板RPC Host:Port"))
o.datatype = "hostport"
o.placeholder = "localhost:5555"
o.default = "localhost:5555"
o.rmempty = false

o = s:option(Value, "secret", translate("Agent密钥"))
o.placeholder = ""
o.default = ""
o.rmempty = false

return m
