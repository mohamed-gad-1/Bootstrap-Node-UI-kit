
function FocusStates(selector) {
    const focusStates = document.querySelectorAll(selector);
    focusStates.forEach(focusState => {
        focusState.addEventListener('focus', () => {
            alert('Element focused');
        });
    });
}

