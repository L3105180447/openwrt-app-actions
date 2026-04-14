// SPDX-License-Identifier: Apache-2.0

'use strict';
'require form';
'require poll';
'require rpc';
'require uci';
'require view';
'require fs';
'require ui';

const callServiceList = rpc.declare({
	object: 'service',
	method: 'list',
	params: ['name'],
	expect: { '': {} }
});

function getServiceStatus() {
	return L.resolveDefault(callServiceList('zeronews'), {}).then(function (res) {
		var isRunning = false;
		try {
			isRunning = res['zeronews']['instances']['zeronews']['running'];
		} catch (e) { }
		return isRunning;
	});
}

function renderStatus(isRunning) {
	var spanTemp = '<span style="color:%s"><strong>%s %s</strong></span>';
	var renderHTML;
	if (isRunning) {
		var button = String.format('&#160;<a class="btn cbi-button" href="https://user.zeronews.cc/device" target="_blank" rel="noreferrer noopener">%s</a>',
			_('Open Console'));
		renderHTML = spanTemp.format('green', _('ZeroNews'), _('RUNNING')) + button;
	} else {
		renderHTML = spanTemp.format('red', _('ZeroNews'), _('NOT RUNNING'));
	}
 
	return renderHTML;
}

return view.extend({
	load: function() {
		return Promise.all([
			uci.load('zeronews')
		]);
	},

	render: function() {
		let m, s, o;

		m = new form.Map('zeronews', _('ZeroNews'),
			_('ZeroNews is an innovative edge cloud intranet penetration platform designed to help users quickly address security and fast access needs between internal and external networks.'));

		s = m.section(form.TypedSection);
		s.anonymous = true;
		s.render = function () {
			poll.add(function () {
				return L.resolveDefault(getServiceStatus()).then(function (res) {
					var view = document.getElementById('service_status');
					view.innerHTML = renderStatus(res);
				});
			});

			return E('div', { class: 'cbi-section', id: 'status_bar' }, [
					E('p', { id: 'service_status' }, _('Collecting data...'))
			]);
		}

		s = m.section(form.NamedSection, 'config', 'zeronews');

		o = s.option(form.Flag, 'enabled', _('Enable'));
		o.default = o.disabled;
		o.rmempty = false;

		o = s.option(form.Value, 'token', _('Token'), _('Please enter your Token'));
		o.password = true;
		o.rmempty = false;

		o = s.option(form.Button, '_reset', _('Reset'), _('If the ZeroNews Agent encounters problems or needs to reset its configuration, you can use the reset feature to restore it to the state it was in when first downloaded.'));
		o.inputtitle = _('Reset ZeroNews');
		o.inputstyle = 'remove';
		o.onclick = function() {
			return fs.exec('/usr/bin/zeronews', ['reset'])
				.then(
					function() {
						ui.addNotification(null, E('p', _('Reset Successful')), 'success');
					}
				);
		};
		

		return m.render();
	}

	});
