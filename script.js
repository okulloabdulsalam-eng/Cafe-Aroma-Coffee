// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple contact form validation and success message
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();
      let valid = true;
      if (!name) {
        alert('Please enter your name.');
        valid = false;
        e.preventDefault();
      } else if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        valid = false;
        e.preventDefault();
      } else if (!message) {
        alert('Please enter your message.');
        valid = false;
        e.preventDefault();
      }
      if (valid) {
        // Show success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
          successMessage.style.display = 'block';
        }
        // Hide form after submission
        setTimeout(() => {
          form.style.display = 'none';
        }, 500);
      }
    });
  }
});

// Responsive mobile menu toggle (if you add a hamburger menu)
// Example: Add a button with id="menu-toggle" and nav with id="main-nav"
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}
