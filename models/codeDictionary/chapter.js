const pool = require('../../config/dbPool').codeDictionary;
const DbOptions = require('./dbOptions');

class Chapter {
  static async getChaptersBySectionId(sectionId) {
    const sql = `SELECT * FROM chapters WHERE section_id=${sectionId}`;
    const [chapters] = await pool.query(sql);
    return chapters;
  }

  static async createChapter(sectionId, chapter) {
    const sql =
      'INSERT INTO chapters(chapter_title, chapter_spec, chapter_text, chapter_html, chapter_css, chapter_js, section_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const params = [
      chapter.chapter_title,
      chapter.chapter_spec,
      chapter.chapter_text,
      chapter.chapter_html,
      chapter.chapter_css,
      chapter.chapter_js,
      sectionId,
    ];
    const [res] = await pool.query(sql, params);
    await DbOptions.updateDatabaseVersion();
    return res;
  }
}

module.exports = Chapter;
