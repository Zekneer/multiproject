const Section = require('../../models/codeDictionary/section');
const logErr = require('../../config/errLogConfig');

module.exports.get = async function createThemes(request, response) {
  try {
    const { subthemeId } = request.params;
    const sections = await Section.getSectionsBySubthemeId(subthemeId);
    response.render('./codeDictionary/adminCreateSection.pug', { sections });
  } catch (err) {
    const errMsg = `CodeDictionary/adminCreateSection/${err}`;
    logErr(errMsg);
    response.status(500).render('./codeDictionary/500.pug');
  }
};

module.exports.post = async function createThemes(request, response) {
  try {
    const { subthemeId } = request.params;
    const section = request.body;
    const res = await Section.createSection(subthemeId, section);
    response.json({ status: 'done', insertId: res.insertId });
  } catch (err) {
    const errMsg = `CodeDictionary/adminCreateSection/${err}`;
    logErr(errMsg);
    response.sendStatus(500);
  }
};
