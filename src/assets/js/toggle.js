
        document.getElementById('themeToggle').addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-moon')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        });