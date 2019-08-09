const pool = require('../../config/dbPool').codeDictionary;

class Theme {
  static async getThemes() {
    const sql = 'SELECT * FROM themes';
    const [themes] = await pool.query(sql);
    return themes;
  }
}

module.exports = Theme;
