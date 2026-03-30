// Add to your script.js
const popCtx = document.getElementById('popularityChart').getContext('2d');
new Chart(popCtx, {
    type: 'bar',
    data: {
        labels: ['Feb 25', 'Mar 1', 'Mar 6 (WBC)', 'Mar 12', 'Mar 19'],
        datasets: [{
            label: 'Search Interest',
            data: [5, 12, 100, 45, 60], // Simulated Google Trends scaling
            backgroundColor: (context) => {
                return context.tick.value === 100 ? '#D9B48F' : '#7BAFD4';
            },
            borderRadius: 5
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { display: false },
            x: { ticks: { color: '#7BAFD4' }, grid: { display: false } }
        }
    }
});

// GSAP to reveal the table rows one by one
gsap.from("tbody tr", {
    x: -20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: ".game-log"
});
