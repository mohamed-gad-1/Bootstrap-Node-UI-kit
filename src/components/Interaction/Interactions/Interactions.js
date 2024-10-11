
function Interactions(selector) {
    const interactions = document.querySelectorAll(selector);
    interactions.forEach(interaction => {
        interaction.addEventListener('click', (e) => {
            if (e.target.classList.contains('interaction-item')) {
                alert(`Interaction item clicked: ${e.target.textContent}`);
            }
        });
    });
}

