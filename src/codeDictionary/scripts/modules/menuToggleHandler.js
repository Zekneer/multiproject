const dictionaryMenu = document.querySelector('.dictionary-menu');

function menuToggleHandler(button) {
  button.classList.toggle('navbar__button-toggle_closed');
  dictionaryMenu.classList.toggle('dictionary-menu_closed');
}

module.exports = menuToggleHandler;
