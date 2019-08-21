const Subtheme = require('./Subtheme');

function checkDbVersion() {
  const currentDbVersion = document.querySelector('.bottom-navbar__version').dataset.version;
  const cachedDbVersion = localStorage.getItem('cachedDbVersion');

  if (currentDbVersion !== cachedDbVersion) {
    localStorage.clear();
    localStorage.setItem('cachedDbVersion', currentDbVersion);
  }
}

function setupMenu(subthemeId) {
  const subthemeLink = document.querySelector(`.subthemes__link[data-id="${subthemeId}"]`);
  const themeItem = subthemeLink.closest('.themes__item');
  themeItem.classList.add('themes__item_opened');

  const subthemeItem = subthemeLink.closest('.subthemes__item');
  subthemeItem.classList.add('subthemes__item_active');
}

function init() {
  checkDbVersion();

  const currentSubthemeId = localStorage.getItem('currentSubthemeId');
  if (currentSubthemeId) {
    setupMenu(currentSubthemeId);
    const sections = localStorage.getItem(currentSubthemeId);

    const sectionId = localStorage.getItem('currentSectionId');
    Subtheme.render(currentSubthemeId, JSON.parse(sections), sectionId);
  }
}

module.exports = init;
