
function PDFViewer(selector) {
    const pdfViewers = document.querySelectorAll(selector);
    pdfViewers.forEach(viewer => {
        viewer.addEventListener('click', () => {
            alert('You clicked on the PDF Viewer');
        });
    });
}

