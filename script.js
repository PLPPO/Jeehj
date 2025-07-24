document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Glass breaking effect on intro
    const intro = document.getElementById('intro');
    intro.addEventListener('click', () => {
        intro.style.transition = 'clip-path 1s, opacity 1s';
        intro.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.style.display = 'none';
        }, 1000);
    });

    // Scroll animations for cards
    const cards = document.querySelectorAll('.social-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s forwards';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(style);
