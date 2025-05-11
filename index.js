const toggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  toggle.textContent = navbar.classList.contains('active') ? '✕' : '☰';
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.remove('.active');
    toggle.textContent = '☰';
  });
});