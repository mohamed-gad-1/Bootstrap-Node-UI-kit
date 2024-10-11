
function QRCodeGenerator(selector) {
    const qrCodeGenerators = document.querySelectorAll(selector);
    qrCodeGenerators.forEach(generator => {
        const input = generator.querySelector('input[type="text"]');
        const button = generator.querySelector('button');
        const qrCode = generator.querySelector('.qr-code');

        button.addEventListener('click', () => {
            const data = input.value;
            if (data) {
                qrCode.innerHTML = '';
                const qr = new QRCode(qrCode, {
                    text: data,
                    width: 128,
                    height: 128
                });
            }
        });
    });
}

