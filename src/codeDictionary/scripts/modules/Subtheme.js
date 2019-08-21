const Section = require('./Section');

class Subtheme {
  constructor(id, sections) {
    this.id = id;
    this.sections = {};
    sections.forEach((section) => {
      this.sections[section.section_id] = new Section(section);
    });

    this.renderSectionsDOM();
  }

  renderSectionsDOM() {
    let sectionsHTML = '';

    Object.values(this.sections).forEach((section) => {
      sectionsHTML += `<li class="sections__item" data-id="${section.id}">${section.name}</li>`;
    });

    this.sectionsHTML = sectionsHTML;
  }

  render() {
    const sectionsList = document.querySelector('.sections__list');
    sectionsList.innerHTML = this.sectionsHTML;
  }

  static render(subthemeId, sections, sectionId) {
    let subtheme;

    if (this.subthemesMap.has(subthemeId)) {
      subtheme = this.subthemesMap.get(subthemeId);
    } else {
      subtheme = new this(subthemeId, sections);
      this.subthemesMap.set(subthemeId, subtheme);
    }

    subtheme.render();
    this.clickSection(sectionId);
  }

  static clickSection(sectionId) {
    let sectionsItem;
    if (sectionId) {
      sectionsItem = document.querySelector(`.sections__item[data-id="${sectionId}"]`);
    } else {
      sectionsItem = document.querySelector('.sections__item');
    }

    if (sectionsItem) {
      const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      sectionsItem.dispatchEvent(event);
    }
  }
}

Subtheme.subthemesMap = new Map();

module.exports = Subtheme;
