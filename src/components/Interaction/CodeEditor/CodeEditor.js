
function CodeEditor(selector) {
    const codeEditors = document.querySelectorAll(selector);
    codeEditors.forEach(editor => {
        editor.addEventListener('input', () => {
            console.log(`Code changed: ${editor.textContent}`);
        });
    });
}

