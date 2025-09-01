document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const saveBtn = document.getElementById('save-btn');
    const notification = document.getElementById('notification');

    // Load any text that was previously saved
    chrome.storage.local.get(['textToPaste'], (result) => {
        if (result.textToPaste) {
            textInput.value = result.textToPaste;
        }
    });

    // Save the new text to storage when the button is clicked
    saveBtn.addEventListener('click', () => {
        chrome.storage.local.set({ textToPaste: textInput.value }, () => {
            notification.textContent = 'Content saved! Use Alt+X to paste.';
            setTimeout(() => { notification.textContent = ''; }, 3000);
        });
    });
});