// GSAP Entrance Animations
gsap.from(".stat-card", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".card", {
    duration: 1,
    opacity: 0,
    delay: 0.5,
    ease: "power1.inOut"
});

// Chart.js Configuration
const ctx = document.getElementById('performanceChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mar 6', 'Mar 9', 'Mar 12', 'Mar 15', 'Mar 19'],
        datasets: [{
            label: 'Daily OPS',
            data: [1.250, 0.850, 0.780, 0.920, 1.100],
            borderColor: '#7BAFD4',
            backgroundColor: 'rgba(123, 175, 212, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { grid: { color: '#1a2a35' }, ticks: { color: '#D9B48F' } },
            x: { grid: { display: false }, ticks: { color: '#D9B48F' } }
        }
    }
});
