const Chapter = require('./Chapter');

function reloadHandler(reloadButton) {
  const chapterDom = reloadButton.closest('.chapter');
  const chapter = Chapter.chaptersDomMap.get(chapterDom);
  chapter.rerenderExampleDOM();
}

module.exports = reloadHandler;
