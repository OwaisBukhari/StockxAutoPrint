chrome.browserAction.onClicked.addListener(function(){
	//chrome.tabs.create({url: 'http://google.com' , active: true});

	        chrome.tabs.executeScript(null, {file: 'scripts/script.js'});
			//chrome.tabs.update(1, {selected: true});
			//chrome.tabs.executeScript(chrome.tabs.getSelected.tabId, {file : 'scripts/print.js'});

			




			
	

});



