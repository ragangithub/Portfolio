const menu = document.querySelector('.menu');
const closee = document.querySelector('.close');
const navLinks = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  navLinks.style.display = 'flex';
  closee.style.display = 'block';
});
closee.addEventListener('click', () => {
  navLinks.style.display = 'none';
  closee.style.display = 'none';
});
