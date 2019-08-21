document.addEventListener('click', (event) => {
  if (event.target.closest('.menu__link_inactive')) {
    event.preventDefault();
  }
});
