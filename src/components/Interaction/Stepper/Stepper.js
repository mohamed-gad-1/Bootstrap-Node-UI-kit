
function Stepper(selector) {
    const steppers = document.querySelectorAll(selector);
    steppers.forEach(stepper => {
        const steps = stepper.querySelectorAll('.step');
        let currentStep = 0;

        steps.forEach((step, index) => {
            step.addEventListener('click', () => {
                currentStep = index;
                updateSteps();
            });
        });

        function updateSteps() {
            steps.forEach((step, index) => {
                if (index <= currentStep) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
        }

        updateSteps();
    });
}

