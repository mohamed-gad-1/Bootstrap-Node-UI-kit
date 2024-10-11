
function SyntaxHighlighter(selector) {
    const syntaxHighlighters = document.querySelectorAll(selector);
    syntaxHighlighters.forEach(highlighter => {
        const code = highlighter.querySelector('code');
        hljs.highlightBlock(code);
    });
}

