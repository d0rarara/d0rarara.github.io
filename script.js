// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 12*8,
      behavior: 'smooth'
    });
  });
});

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      // these IDs from the previous steps
      emailjs.sendForm('service_0m454eg', 'template_51yljho', this)
          .then(function() {
              console.log('SUCCESS!');

          }, function(error) {
              console.log('FAILED...', error);
          });
      this.reset()
  });
}
