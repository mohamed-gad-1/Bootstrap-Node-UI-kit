
function PasswordStrengthMeter(selector) {
    const passwordStrengthMeters = document.querySelectorAll(selector);
    passwordStrengthMeters.forEach(meter => {
        const input = meter.querySelector('input[type="password"]');
        const strengthBar = meter.querySelector('.strength-bar');

        input.addEventListener('input', () => {
            const value = input.value;
            const strength = calculatePasswordStrength(value);
            strengthBar.className = `strength-bar ${strength}`;
        });

        function calculatePasswordStrength(password) {
            const length = password.length;
            if (length < 6) return 'weak';
            if (length < 10) return 'medium';
            return 'strong';
        }
    });
}

