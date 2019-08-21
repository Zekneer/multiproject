const pool = require('../../config/dbPool').codeDictionary;
const Chapter = require('./chapter');

class Section {
  static async getSectionsBySubthemeId(subthemeId) {
    const sql = `SELECT * FROM sections WHERE subtheme_id=${subthemeId}`;
    const [sections] = await pool.query(sql);

    const chaptersPromise = [];
    sections.forEach((section) => {
      chaptersPromise.push(Chapter.getChaptersBySectionId(section.section_id));
    });
    const chapters = await Promise.all(chaptersPromise);

    sections.forEach((section, id) => {
      section.chapters = chapters[id];
    });

    return sections;
  }

  static async createSection(subthemeId, section) {
    const sql = 'INSERT INTO sections(section_name, subtheme_id) VALUES (?, ?)';
    const [res] = await pool.query(sql, [section.section_name, subthemeId]);
    return res;
  }
}

module.exports = Section;
