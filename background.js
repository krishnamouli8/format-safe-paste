chrome.commands.onCommand.addListener((command) => {
    // Check if the command is the one we defined in the manifest
    if (command === "paste-text") {
        // Get the currently active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            // Run our content script in that tab
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['content.js']
            });
        });
    }
});