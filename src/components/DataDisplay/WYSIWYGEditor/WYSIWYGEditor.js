
function WYSIWYGEditor(selector) {
    const wysiwygEditors = document.querySelectorAll(selector);
    wysiwygEditors.forEach(editor => {
        const toolbar = editor.querySelector('.toolbar');
        const editorArea = editor.querySelector('.editor');

        toolbar.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const command = e.target.dataset.command;
                document.execCommand(command, false, null);
            }
        });
    });
}

