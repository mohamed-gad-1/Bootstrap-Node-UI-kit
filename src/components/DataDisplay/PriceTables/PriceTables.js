
function PriceTables(selector) {
    const priceTables = document.querySelectorAll(selector);
    priceTables.forEach(table => {
        const button = table.querySelector('button');
        button.addEventListener('click', () => {
            alert('Button clicked');
        });
    });
}

