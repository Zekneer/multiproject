const Chapter = require('../../models/codeDictionary/chapter');
const logErr = require('../../config/errLogConfig');

module.exports.get = async function createThemes(request, response) {
  try {
    const { sectionId } = request.params;
    const chapters = await Chapter.getChaptersBySectionId(sectionId);
    response.render('./codeDictionary/adminCreateChapter.pug', { chapters });
  } catch (err) {
    const errMsg = `CodeDictionary/adminCreateChapter/${err}`;
    logErr(errMsg);
    response.status(500).render('./codeDictionary/500.pug');
  }
};

module.exports.post = async function createThemes(request, response) {
  try {
    const { sectionId } = request.params;
    const chapter = request.body;
    const res = await Chapter.createChapter(sectionId, chapter);
    response.json({ status: 'done', insertId: res.insertId });
  } catch (err) {
    const errMsg = `CodeDictionary/adminCreateChapter/${err}`;
    logErr(errMsg);
    response.sendStatus(500);
  }
};
