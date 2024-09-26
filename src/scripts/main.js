// fixed header
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    headerEl.classList.toggle(
      'scrolled',
      window.scrollY > headerEl.offsetHeight
    );
  });

  // burger
  const burgerBtnEl = document.querySelector('.burger');
  burgerBtnEl.addEventListener('click', () => {
    burgerBtnEl.classList.toggle('burger--active');
  });

  // close mobile menu if click
  const menuEl = document.querySelector('.menu');
  menuEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__link')) {
      burgerBtnEl.classList.remove('burger--active');
      menuEl.classList.remove('menu--active');
    }
  });

  // animation section how-work
  const section = document.querySelector('.how-work');
  const observer = new IntersectionObserver(([entry]) => {
    section.classList.toggle('how-work--active', entry.isIntersecting);
    section.classList.toggle('how-work--hide', !entry.isIntersecting);
  });
  observer.observe(section);
});
