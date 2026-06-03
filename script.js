document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto Parallax para el brillo de fondo
    const glow = document.querySelector('.bg-glow');
    
    if (glow) {
        document.addEventListener('mousemove', (e) => {
            // Calcula la posición relativa del mouse
            const moveX = (window.innerWidth / 2 - e.pageX) / 45;
            const moveY = (window.innerHeight / 2 - e.pageY) / 45;
            
            // Aplica la transformación sutil
            glow.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }

    // 2. Transición de Navbar al hacer scroll
    const nav = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(1, 4, 8, 0.98)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(1, 4, 8, 0.9)';
            nav.style.boxShadow = 'none';
        }
    });

    // 3. Animación de entrada para los items de características
    const features = document.querySelectorAll('.feature-item');
    features.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 800 + (index * 150));
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Ajuste por el navbar fijo
                behavior: 'smooth'
            });
        }
    });
});