const Theme = require('../../models/codeDictionary/themes');
const DbOptions = require('../../models/codeDictionary/dbOptions');
const logErr = require('../../config/errLogConfig');

module.exports = async function index(request, response) {
  try {
    const themes = await Theme.getThemes();
    const dbVersion = await DbOptions.getDatabaseVersion();
    response.render('./codeDictionary/index.pug', {
      themes,
      admin: true,
      dbVersion: dbVersion / 100,
    });
  } catch (err) {
    const errMsg = `CodeDictionary/Index/${err}`;
    logErr(errMsg);
    response.status(500).render('./codeDictionary/500.pug');
  }
};
