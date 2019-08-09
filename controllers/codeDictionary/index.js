const Theme = require('../../models/codeDictionary/themes');
const logErr = require('../../config/errLogConfig');

module.exports = async function index(request, response) {
  try {
    const themes = await Theme.getThemes();
    response.render('./codeDictionary/index.pug', {
      themes,
    });
  } catch (err) {
    const errMsg = `CodeDictionary/Index/${err}`;
    logErr(errMsg);
    response.status(500).render('./codeDictionary/500.pug');
  }
};
