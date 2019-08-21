const pool = require('../../config/dbPool').codeDictionary;
const Subtheme = require('./subtheme');

class Theme {
  static async getThemes() {
    const sql = 'SELECT * FROM themes';
    const [themes] = await pool.query(sql);
    for (const theme of themes) {
      theme.subthemes = await Subtheme.getSubthemesByThemeId(theme.theme_id);
    }
    return themes;
  }

  static async createTheme(theme) {
    const sql = 'INSERT INTO themes(theme_name) VALUES (?)';
    const [res] = await pool.query(sql, [theme.theme_name]);
    return res;
  }
}

module.exports = Theme;
