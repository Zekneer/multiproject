const Section = require('../../models/codeDictionary/section');
const logErr = require('../../config/errLogConfig');

module.exports.get = async function getSections(request, response) {
  try {
    const subthemeId = request.params.id;
    const sections = await Section.getSectionsBySubthemeId(subthemeId);
    response.json(sections);
  } catch (err) {
    const errMsg = `CodeDictionary/Subtheme/${err}`;
    logErr(errMsg);
    response.sendStatus(500);
  }
};
