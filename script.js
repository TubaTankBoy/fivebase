document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation ---
    const mobileBtn = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Icon ändern
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // --- Impressum Modal Logic ---
    const modal = document.getElementById('imprintModal');
    const btn = document.getElementById('openImprint');
    const span = document.getElementsByClassName('close-modal')[0];

    // Öffnen bei Klick auf Link
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Scrollen verhindern
    }

    // Schließen bei Klick auf X
    span.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Scrollen erlauben
    }

    // Schließen bei Klick außerhalb
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // --- Smooth Scroll für Anker-Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Nur preventDefault wenn es kein leerer Link ist
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Mobile Menü schließen beim Klick
                    if(navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
});
