document.addEventListener('DOMContentLoaded', function() {
  // Funcionalidad para las preguntas frecuentes
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Cerrar todas las otras preguntas
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Alternar la clase active en la pregunta actual
      item.classList.toggle('active');
    });
  });
  
  // Funcionalidad básica para el formulario de contacto
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Aquí normalmente enviarías los datos a un servidor
      // Por ahora, solo mostraremos un mensaje de éxito
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
      contactForm.reset();
    });
  }
});