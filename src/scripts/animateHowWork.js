// animateHowWork.js
export function animateSection(section) {
  const observer = new IntersectionObserver(([entry]) => {
    section.classList.toggle('how-work--active', entry.isIntersecting);
    section.classList.toggle('how-work--hide', !entry.isIntersecting);
  });
  observer.observe(section);
}
