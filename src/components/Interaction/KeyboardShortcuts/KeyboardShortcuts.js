
function KeyboardShortcuts(selector) {
    const keyboardShortcuts = document.querySelectorAll(selector);
    keyboardShortcuts.forEach(shortcut => {
        document.addEventListener('keydown', (e) => {
            const key = e.key;
            const shortcutElem = shortcut.querySelector(`.shortcut[data-key="${key}"]`);
            if (shortcutElem) {
                alert(`Shortcut activated: ${key}`);
            }
        });
    });
}

