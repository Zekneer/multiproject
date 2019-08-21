const Subtheme = require('./Subtheme');

function addActiveClass(sectionItem) {
  const activeSectionItem = document.querySelector('.sections__item_active');

  if (activeSectionItem) {
    activeSectionItem.classList.remove('sections__item_active');
  }

  sectionItem.classList.add('sections__item_active');
}

function sectionHandler(sectionItem) {
  addActiveClass(sectionItem);
  const currentSubthemeId = localStorage.getItem('currentSubthemeId');
  const { id } = sectionItem.dataset;
  const subtheme = Subtheme.subthemesMap.get(currentSubthemeId);
  const section = subtheme.sections[id];
  localStorage.setItem('currentSectionId', id);

  section.render();
}

module.exports = sectionHandler;
