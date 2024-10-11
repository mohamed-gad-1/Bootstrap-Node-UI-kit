
function Avatar(selector) {
    const avatars = document.querySelectorAll(selector);
    avatars.forEach(avatar => {
        avatar.addEventListener('click', () => {
            alert('You clicked on the avatar');
        });
    });
}

