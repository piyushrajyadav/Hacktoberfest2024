function toggleDarkMode() {
    const body = document.body;

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
}

function loadThemePreference() {
    const body = document.body;
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

window.onload = loadThemePreference;
