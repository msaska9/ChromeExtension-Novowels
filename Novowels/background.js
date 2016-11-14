// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    chrome.tabs.executeScript(
        tab.id,
        {file: "change_paragraphs.js"},
        function() {
        if (chrome.runtime.lastError) {	
            console.error(chrome.runtime.lastError.message);
        }
    });
});