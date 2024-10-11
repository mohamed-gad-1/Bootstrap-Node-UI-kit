
function DragAndDrop(selector) {
    const dragAndDrops = document.querySelectorAll(selector);
    dragAndDrops.forEach(dropArea => {
        dropArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropArea.classList.add('dragover');
        });

        dropArea.addEventListener('dragleave', () => {
            dropArea.classList.remove('dragover');
        });

        dropArea.addEventListener('drop', (e) => {
            e.preventDefault();
            dropArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            alert(`Files dropped: ${files.length}`);
        });
    });
}

