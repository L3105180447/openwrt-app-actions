module("luci.controller.komari-agent", package.seeall)

function index()
	if not nixio.fs.access("/etc/config/komari-agent") then
		return
	end
	entry({"admin", "services", "komari-agent"}, cbi("komari-agent"), _("Komari Agent"), 300).dependent = true
	entry({"admin","services","komari-agent","status"},call("act_status")).leaf=true
end

function act_status()
	local e={}
	e.running=luci.sys.call("pgrep komari-agent >/dev/null")==0
	e.enabled=luci.sys.exec("uci get komari-agent.config.enabled")
	e.tls=luci.sys.exec("uci get komari-agent.config.tls")
	
	luci.sys.call("/etc/init.d/komari-agent enable")
	-- e.port=luci.sys.exec("uci get komari-agent.config.port")
	luci.http.prepare_content("application/json")
	luci.http.write_json(e)
end
