
function UserProfiles(selector) {
    const userProfiles = document.querySelectorAll(selector);
    userProfiles.forEach(profile => {
        profile.addEventListener('click', (e) => {
            if (e.target.closest('.profile')) {
                alert(`You clicked on: ${e.target.closest('.profile').querySelector('.name').textContent}`);
            }
        });
    });
}

