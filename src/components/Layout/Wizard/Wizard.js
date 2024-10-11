
function Wizard(selector) {
    const wizards = document.querySelectorAll(selector);
    wizards.forEach(wizard => {
        const steps = wizard.querySelectorAll('.steps .step');
        const contents = wizard.querySelectorAll('.content > div');
        const controls = wizard.querySelector('.controls');
        let currentStep = 0;

        function updateSteps() {
            steps.forEach((step, index) => {
                if (index === currentStep) {
                    step.classList.add('active');
                    contents[index].style.display = 'block';
                } else {
                    step.classList.remove('active');
                    contents[index].style.display = 'none';
                }
            });
        }

        controls.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const action = e.target.dataset.action;
                if (action === 'prev' && currentStep > 0) {
                    currentStep--;
                } else if (action === 'next' && currentStep < steps.length - 1) {
                    currentStep++;
                }
                updateSteps();
            }
        });

        updateSteps();
    });
}

