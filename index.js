// Este archivo se reserva para funcionalidades interactivas.

// Función para manejar clics en los enlaces del menú
const menuLinks = document.querySelectorAll('nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        menuLinks.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
    });
});

