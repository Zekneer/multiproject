const Subtheme = require('../../models/codeDictionary/subtheme');
const logErr = require('../../config/errLogConfig');

module.exports.get = async function createThemes(request, response) {
  try {
    const { themeId } = request.params;
    const subthemes = await Subtheme.getSubthemesByThemeId(themeId);
    response.render('./codeDictionary/adminCreateSubtheme.pug', { subthemes });
  } catch (err) {
    const errMsg = `CodeDictionary/adminCreateSubtheme/${err}`;
    logErr(errMsg);
    response.status(500).render('./codeDictionary/500.pug');
  }
};

module.exports.post = async function createThemes(request, response) {
  try {
    const { themeId } = request.params;
    const subtheme = request.body;
    const res = await Subtheme.createSubtheme(themeId, subtheme);
    response.json({ status: 'done', insertId: res.insertId });
  } catch (err) {
    const errMsg = `CodeDictionary/adminCreateSubtheme/${err}`;
    logErr(errMsg);
    response.sendStatus(500);
  }
};
