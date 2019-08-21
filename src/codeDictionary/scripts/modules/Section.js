const Chapter = require('./Chapter');
const Prism = require('../thirdPartyScripts/prism');
const readMore = require('./readMore');

class Section {
  constructor(section) {
    this.id = section.section_id;
    this.name = section.section_name;
    this.chapters = {};
    section.chapters.forEach((chapter) => {
      this.chapters[chapter.chapter_id] = new Chapter(chapter);
    });
  }

  renderChaptersDOM() {
    const chaptersWrapper = new DocumentFragment();

    Object.values(this.chapters).forEach((chapter) => {
      chaptersWrapper.append(chapter.chapterDOM);
    });

    this.chaptersDOM = chaptersWrapper;
  }

  render() {
    this.renderChaptersDOM();
    const content = document.querySelector('.content');
    content.innerHTML = '';
    content.append(this.chaptersDOM);
    Prism.highlightAll();
    readMore();
  }
}

module.exports = Section;
