const Chapter = require('./Chapter');

function runHandler(runButton) {
  const chapterDom = runButton.closest('.chapter');
  const chapter = Chapter.chaptersDomMap.get(chapterDom);
  chapter.runJS();
}

module.exports = runHandler;
