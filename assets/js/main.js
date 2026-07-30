(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const stored = localStorage.getItem('theme');

    function applyTheme(theme) {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
            toggle.textContent = '☀';
        } else {
            root.removeAttribute('data-theme');
            toggle.textContent = '☾';
        }
    }

    applyTheme(stored === 'light' ? 'light' : 'dark');

    toggle.addEventListener('click', function () {
        const isLight = root.getAttribute('data-theme') === 'light';
        const next = isLight ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem('theme', next);
    });
})();
