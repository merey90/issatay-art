import Database from 'better-sqlite3';
const db = new Database('issatay.db');

db.prepare(`
  UPDATE biography 
  SET content_en = ? 
  WHERE id = 1
`).run(
  `# Issatay Issabayev (1936–2018)
Issatay Issabayev was a legendary Kazakh graphic artist, painter, and book illustrator. A People's Artist of Kazakhstan, he left an indelible mark on the national art of the 20th century.`
);

db.prepare(`
  UPDATE news 
  SET content_en = REPLACE(content_en, 'Isabayev', 'Issabayev')
`).run();

db.prepare(`
  UPDATE press 
  SET content_en = REPLACE(content_en, 'Isabayev', 'Issabayev')
`).run();

console.log('Database updated with double "s" spelling.');
