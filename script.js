const PLAYER_ID = 813429; // Lucas Ramirez

async function fetchStats() {
    try {
        const response = await fetch(`https://statsapi.mlb.com/api/v1/people/${PLAYER_ID}?hydrate=stats(group=[hitting],type=[season],season=2026)`);
        const data = await response.json();
        
        // Default to WBC stats if MiLB season hasn't updated data yet
        const stats = data.people[0].stats[0]?.splits[0]?.stat || { avg: ".182", homeRuns: 2, rbi: 2, ops: "1.127" };
        
        updateDashboard({
            avg: parseFloat(stats.avg),
            hr: stats.homeRuns,
            rbi: stats.rbi,
            ops: parseFloat(stats.ops),
            war: 0.3 // Hand-calculated proxy for prospect value
        });
    } catch (e) {
        console.error("API Offline", e);
    }
}

function updateDashboard(stats) {
    // GSAP Counter Animations
    gsap.to("#avg", { innerText: stats.avg, duration: 1.5, snap: { innerText: 0.001 }, onUpdate: function() { this.targets()[0].innerText = stats.avg.toFixed(3); }});
    gsap.to("#hr", { innerText: stats.hr, duration: 1, snap: { innerText: 1 }});
    gsap.to("#rbi", { innerText: stats.rbi, duration: 1, snap: { innerText: 1 }});
    gsap.to("#ops", { innerText: stats.ops, duration: 1.5, onUpdate: function() { this.targets()[0].innerText = stats.ops.toFixed(3); }});
    gsap.to("#war", { innerText: stats.war, duration: 2, onUpdate: function() { this.targets()[0].innerText = stats.war.toFixed(1); }});

    // Populate News
    const news = [
        "Represented Brazil in 2026 WBC with 2 Home Runs.",
        "Assigned to Tri-City Dust Devils for 2026 High-A season.",
        "Opening Day: April 3rd vs Vancouver Canucks."
    ];
    document.getElementById('news-list').innerHTML = news.map(n => `<li>${n}</li>`).join('');
}

window.onload = fetchStats;
