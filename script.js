// Marca en el menú la sección visible
const enlaces = document.querySelectorAll('nav a');
const secciones = [...enlaces].map(a => document.querySelector(a.getAttribute('href')));
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      enlaces.forEach(a => a.classList.toggle('activo', a.getAttribute('href') === '#' + entrada.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
secciones.forEach(s => s && observador.observe(s));
