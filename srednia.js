chrome.browserAction.onClicked.addListener(function (tab) {

	chrome.tabs.executeScript(tab.ib, {
		file: 'skrypt.js'
	});
});
