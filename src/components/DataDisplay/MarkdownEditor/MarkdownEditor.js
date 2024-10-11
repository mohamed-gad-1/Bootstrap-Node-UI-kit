
function MarkdownEditor(selector) {
    const markdownEditors = document.querySelectorAll(selector);
    markdownEditors.forEach(editor => {
        const textarea = editor.querySelector('textarea');
        const preview = editor.querySelector('.preview');

        textarea.addEventListener('input', () => {
            preview.innerHTML = marked.parse(textarea.value);
        });
    });
}

