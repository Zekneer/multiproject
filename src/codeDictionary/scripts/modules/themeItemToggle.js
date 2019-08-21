function menuToggleHandler(themeTitle) {
  themeTitle.closest('.themes__item').classList.toggle('themes__item_opened');
}

module.exports = menuToggleHandler;
