document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('aside.sidebar');

    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('expanded');
        });
    } else {
        console.log('Toggle button or sidebar not found');
    }
});