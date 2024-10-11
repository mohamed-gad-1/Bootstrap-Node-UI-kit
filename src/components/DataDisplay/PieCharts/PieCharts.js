
function PieCharts(selector) {
    const pieCharts = document.querySelectorAll(selector);
    pieCharts.forEach(chart => {
        const data = [
            { label: 'Category 1', value: 30 },
            { label: 'Category 2', value: 20 },
            { label: 'Category 3', value: 50 }
        ];

        const total = data.reduce((sum, item) => sum + item.value, 0);
        let startAngle = 0;

        data.forEach(item => {
            const slice = document.createElement('div');
            slice.style.width = '100%';
            slice.style.height = '100%';
            slice.style.position = 'absolute';
            slice.style.borderRadius = '50%';
            slice.style.transform = `rotate(${startAngle}deg)`;
            slice.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            slice.style.clipPath = `polygon(50% 50%, 50% 0, ${50 + 50 * Math.cos(startAngle + item.value / total * 360)}% ${50 + 50 * Math.sin(startAngle + item.value / total * 360)}%)`;
            chart.appendChild(slice);
            startAngle += item.value / total * 360;
        });
    });
}

