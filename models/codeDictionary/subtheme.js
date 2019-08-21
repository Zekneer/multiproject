const pool = require('../../config/dbPool').codeDictionary;

class Subtheme {
  static async getSubthemesByThemeId(themeId) {
    const sql = `SELECT * FROM subthemes WHERE theme_id=${themeId}`;
    const [subthemes] = await pool.query(sql);
    return subthemes;
  }

  static async getSubthemes() {
    const sql = 'SELECT * FROM subthemes';
    const [subthemes] = await pool.query(sql);
    return subthemes;
  }

  static async createSubtheme(themeId, subtheme) {
    const sql = 'INSERT INTO subthemes(subtheme_name, theme_id) VALUES (?, ?)';
    const [res] = await pool.query(sql, [subtheme.subtheme_name, themeId]);
    return res;
  }
}

module.exports = Subtheme;
