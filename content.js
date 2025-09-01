// This code runs on the actual webpage
chrome.storage.local.get(['textToPaste'], (result) => {
    const textToPaste = result.textToPaste;
    if (textToPaste === undefined) return;

    // Find the element the user is currently focused on
    const activeElement = document.activeElement;

    // Check if it's a valid place to type
    if (activeElement && (activeElement.isContentEditable || activeElement.tagName === 'TEXTAREA')) {
        // Insert the saved text
        activeElement.value = activeElement.value.substring(0, activeElement.selectionStart) + textToPaste + activeElement.value.substring(activeElement.selectionEnd);
        
        // This makes sure frameworks like React see the change
        activeElement.dispatchEvent(new Event('input', { bubbles: true }));
    }
});