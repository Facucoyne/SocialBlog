// Menu móvil
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Formulario de contacto
const form = document.getElementById('formContacto');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
    form.reset();
});




// Animación de Skills al hacer scroll
const skillsSection = document.getElementById('skills');
const skillLevels = document.querySelectorAll('.skill-level');

function animateSkills() {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionTop < screenPos) {
        skillLevels.forEach(skill => {
            skill.style.width = skill.getAttribute('data-level');
        });
        window.removeEventListener('scroll', animateSkills);
    }
}

window.addEventListener('scroll', animateSkills);
