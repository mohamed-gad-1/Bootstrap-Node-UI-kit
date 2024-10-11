
function ChatBubble(selector) {
    const chatBubbles = document.querySelectorAll(selector);
    chatBubbles.forEach(chatBubble => {
        chatBubble.addEventListener('click', (e) => {
            if (e.target.classList.contains('bubble')) {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

