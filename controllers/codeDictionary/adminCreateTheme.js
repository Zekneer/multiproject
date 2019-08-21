const Theme = require('../../models/codeDictionary/themes');
const logErr = require('../../config/errLogConfig');

module.exports.get = async function createThemes(request, response) {
  try {
    const themes = await Theme.getThemes();
    response.render('./codeDictionary/adminCreateTheme.pug', { themes });
  } catch (err) {
    const errMsg = `CodeDictionary/adminCreateTheme/${err}`;
    logErr(errMsg);
    response.status(500).render('./codeDictionary/500.pug');
  }
};

module.exports.post = async function createThemes(request, response) {
  try {
    const theme = request.body;
    const res = await Theme.createTheme(theme);
    response.json({ status: 'done', insertId: res.insertId });
  } catch (err) {
    const errMsg = `CodeDictionary/adminCreateTheme/${err}`;
    logErr(errMsg);
    response.sendStatus(500);
  }
};
