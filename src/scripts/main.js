// main.js
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    headerEl.classList.toggle(
      'scrolled',
      window.scrollY > headerEl.offsetHeight
    );
  });

  const burgerBtnEl = document.querySelector('.burger');
  burgerBtnEl.addEventListener('click', () => {
    burgerBtnEl.classList.toggle('burger--active');
  });

  const menuEl = document.querySelector('.menu');
  menuEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__link')) {
      burgerBtnEl.classList.remove('burger--active');
      menuEl.classList.remove('menu--active');
    }
  });

  // dinamic load animation 'how-work'
  const section = document.querySelector('.how-work');
  if (section) {
    import('./animateHowWork.js').then((module) => {
      module.animateSection(section);
    });
  }
});
