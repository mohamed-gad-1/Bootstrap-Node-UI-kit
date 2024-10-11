
function SignaturePad(selector) {
    const signaturePads = document.querySelectorAll(selector);
    signaturePads.forEach(pad => {
        const canvas = pad.querySelector('canvas');
        const signaturePad = new SignaturePad(canvas);

        pad.querySelector('.clear-button').addEventListener('click', () => {
            signaturePad.clear();
        });

        pad.querySelector('.save-button').addEventListener('click', () => {
            if (signaturePad.isEmpty()) {
                alert("Please provide a signature first.");
            } else {
                const dataURL = signaturePad.toDataURL();
                alert(`Signature saved: ${dataURL}`);
            }
        });
    });
}

