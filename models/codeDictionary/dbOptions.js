const pool = require('../../config/dbPool').codeDictionary;

class DbOptions {
  static async getDatabaseVersion() {
    const sql = 'SELECT * FROM database_config WHERE config_name = ?';
    const params = ['db_version'];
    const [config] = await pool.query(sql, params);
    return config[0].value;
  }

  static async updateDatabaseVersion() {
    let version = await this.getDatabaseVersion();
    version += 1;
    const sql =
      'UPDATE database_config SET value=? WHERE config_name="db_version"';
    const params = [version];
    await pool.query(sql, params);
  }
}

module.exports = DbOptions;
