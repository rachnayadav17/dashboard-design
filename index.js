const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Feb 14', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20'],
        datasets: [{
            label: 'Last 7 Days',
            data: [16287.94, 17290.34, 18000, 17500, 18200, 17800, 18500],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
        }, {
            label: 'Prior Week',
            data: [15000, 15500, 16000, 15800, 16500, 17000, 17200],
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('expanded');
    content.classList.toggle('shifted');
}