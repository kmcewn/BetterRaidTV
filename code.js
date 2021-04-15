chrome.tabs.onUpdated.addListener(function(tabId,obj,tab) {
    if (tab.url.indexOf("?referrer=raid")!==-1 && tab.url.indexOf("twitch")!==-1) {
        console.log("Redirecting out of raid");
        chrome.tabs.update(tabId, {
            url: tab.url.substring(0,tab.url.indexOf('?'))
        });
    };
});