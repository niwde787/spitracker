// Data for the Popularity Chart (Simulated Google Trends)
const popCtx = document.getElementById('popularityChart').getContext('2d');
new Chart(popCtx, {
    type: 'line',
    data: {
        labels: ['Feb 20', 'Mar 1', 'Mar 6 (WBC)', 'Mar 15', 'Mar 29'],
        datasets: [{
            label: 'Search Interest',
            data: [2, 8, 100, 35, 28], // 100 is the peak (Mar 6)
            borderColor: '#D9B48F', // Dust Devils Khaki
            backgroundColor: 'rgba(217, 180, 143, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: '#7BAFD4' // Sky Blue
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { display: false },
            x: { 
                ticks: { color: '#7BAFD4', font: { size: 10 } },
                grid: { display: false }
            }
        }
    }
});

// GSAP: Animate the Table Rows
gsap.from(".game-log tbody tr", {
    x: -30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out"
});
