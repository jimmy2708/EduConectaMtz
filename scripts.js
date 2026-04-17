document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (nombre === '' || correo === '' || mensaje === '') {
        formMessage.textContent = 'Por favor, completa todos los campos.';
        return;
      }

      formMessage.textContent = `Gracias, ${nombre}. Tu mensaje fue enviado correctamente.`;
      contactForm.reset();
    });
  }
});
