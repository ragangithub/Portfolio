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

document.addEventListener('click', (e) => {
  const target1 = e.target.closest('#work');
  const target2 = e.target.closest('#about');
  const target3 = e.target.closest('#contact');
  if (target1 || target2 || target3) {
    navLinks.style.display = 'none';
  }
});
