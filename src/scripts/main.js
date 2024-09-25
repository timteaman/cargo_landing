// fixed header

const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > headerEl.offsetHeight) {
    headerEl.classList.add('scrolled');
  } else {
    headerEl.classList.remove('scrolled');
  }
});

// burger

const burgerBtnEl = document.querySelector('.burger');

const handleBurgerClick = () => {
  burgerBtnEl.classList.toggle('burger--active');
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('burger')) {
    handleBurgerClick();
  }
});

//animation

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.how-work');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add('how-work--active');
        section.classList.remove('how-work--hide');
      } else {
        section.classList.remove('how-work--active');
        section.classList.add('how-work--hide');
      }
    });
  });

  observer.observe(section);
});
