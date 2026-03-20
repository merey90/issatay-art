import Database from 'better-sqlite3';
import path from 'path';

const db = new Database('issatay.db');

// Initialize schema
db.exec(`
  CREATE TABLE IF NOT EXISTS biography (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    content_en TEXT NOT NULL,
    content_ru TEXT NOT NULL,
    content_kk TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS albums (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_en TEXT NOT NULL,
    title_ru TEXT NOT NULL,
    title_kk TEXT NOT NULL,
    description_en TEXT,
    description_ru TEXT,
    description_kk TEXT,
    cover_image TEXT
  );

  CREATE TABLE IF NOT EXISTS artworks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    album_id INTEGER,
    title_en TEXT,
    title_ru TEXT,
    title_kk TEXT,
    image_url TEXT NOT NULL,
    year TEXT,
    FOREIGN KEY(album_id) REFERENCES albums(id)
  );

  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_en TEXT NOT NULL,
    title_ru TEXT NOT NULL,
    title_kk TEXT NOT NULL,
    content_en TEXT NOT NULL,
    content_ru TEXT NOT NULL,
    content_kk TEXT NOT NULL,
    date TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS press (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_en TEXT NOT NULL,
    title_ru TEXT NOT NULL,
    title_kk TEXT NOT NULL,
    source_en TEXT,
    source_ru TEXT,
    source_kk TEXT,
    content_en TEXT NOT NULL,
    content_ru TEXT NOT NULL,
    content_kk TEXT NOT NULL,
    date TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed initial data if empty
const bioCount = db.prepare('SELECT count(*) as count FROM biography').get() as { count: number };
if (bioCount.count === 0) {
  db.prepare('INSERT INTO biography (id, content_en, content_ru, content_kk) VALUES (1, ?, ?, ?)').run(
    `# Issatay Issabayev (1936–2018)
Issatay Issabayev was a legendary Kazakh graphic artist and painter. An Honored Art Worker of the Kazakh SSR and Kazakhstan, he left an indelible mark on the national art of the 20th century.`,
    `# Исатай Исабаев (1936–2018)
Исатай Исабаев был легендарным казахстанским графиком и живописцем. Заслуженный деятель искусств КазССР и Казахстана, он оставил неизгладимый след в национальном искусстве XX века.`,
    `# Исатай Исабаев (1936–2018)
Исатай Исабаев - қазақ бейнелеу өнеріндегі көрнекті графика шебері және кескіндемеші. Ол XX ғасырдағы ұлттық өнерде өшпес із қалдырған Қазақ КСР және Қазақстанның еңбек сіңірген өнер қайраткері.`
  );
}

// Always update the biography to ensure it matches the latest content
db.prepare('UPDATE biography SET content_en = ?, content_ru = ?, content_kk = ? WHERE id = 1').run(
  `# Issatay Issabayev (1936–2018)
Issatay Issabayev was a legendary Kazakh graphic artist and painter. An Honored Art Worker of the Kazakh SSR and Kazakhstan, he left an indelible mark on the national art of the 20th century.`,
  `# Исатай Исабаев (1936–2018)
Исатай Исабаев был легендарным казахстанским графиком и живописцем. Заслуженный деятель искусств КазССР и Казахстана, он оставил неизгладимый след в национальном искусстве XX века.`,
  `# Исатай Исабаев (1936–2018)
Исатай Исабаев - қазақ бейнелеу өнеріндегі көрнекті графика шебері және кескіндемеші. Ол XX ғасырдағы ұлттық өнерде өшпес із қалдырған Қазақ КСР және Қазақстанның еңбек сіңірген өнер қайраткері.`
);

const albumCount = db.prepare('SELECT count(*) as count FROM albums').get() as { count: number };
if (albumCount.count === 0) {
  const insertAlbum = db.prepare('INSERT INTO albums (title_en, title_ru, title_kk, description_en, description_ru, description_kk, cover_image) VALUES (?, ?, ?, ?, ?, ?, ?)');
  const insertArtwork = db.prepare('INSERT INTO artworks (album_id, title_en, title_ru, title_kk, image_url, year) VALUES (?, ?, ?, ?, ?, ?)');

  const album1 = insertAlbum.run(
    'The Path of Abai', 'Путь Абая', 'Абай жолы',
    'Illustrations for the epic novel by Mukhtar Auezov.', 'Иллюстрации к эпическому роману Мухтара Ауэзова.', 'Мұхтар Әуезовтің эпикалық романына иллюстрациялар.',
    'https://picsum.photos/seed/abai/800/600'
  ).lastInsertRowid;
  
  insertArtwork.run(album1, 'Abai in the Steppe', 'Абай в степи', 'Даладағы Абай', 'https://picsum.photos/seed/abai1/800/1000', '1970');

  const album2 = insertAlbum.run(
    'Steppe Legends', 'Степные легенды', 'Дала аңыздары',
    'Graphic works inspired by Kazakh folklore.', 'Графические работы, вдохновленные казахским фольклором.', 'Қазақ фольклорынан шабыт алған графикалық жұмыстар.',
    'https://picsum.photos/seed/steppe/800/600'
  ).lastInsertRowid;
  
  insertArtwork.run(album2, 'The Golden Warrior', 'Золотой воин', 'Алтын адам', 'https://picsum.photos/seed/gold/800/1000', '1985');
}

const newsCount = db.prepare('SELECT count(*) as count FROM news').get() as { count: number };
if (newsCount.count === 0) {
  db.prepare('INSERT INTO news (title_en, title_ru, title_kk, content_en, content_ru, content_kk, date) VALUES (?, ?, ?, ?, ?, ?, ?)').run(
    'Retrospective Exhibition in Almaty', 'Ретроспективная выставка в Алматы', 'Алматыдағы ретроспективті көрме',
    'A major retrospective of Issatay Issabayev\'s work is currently being held at the Kasteyev State Museum of Arts.', 'В Государственном музее искусств имени Кастеева проходит крупная ретроспектива работ Исатая Исабаева.', 'Ә. Қастеев атындағы Мемлекеттік өнер мұражайында Исатай Исабаевтың жұмыстарының ауқымды ретроспективасы өтуде.',
    '2024-05-15'
  );
}

const pressCount = db.prepare('SELECT count(*) as count FROM press').get() as { count: number };
if (pressCount.count === 0) {
  db.prepare('INSERT INTO press (title_en, title_ru, title_kk, source_en, source_ru, source_kk, content_en, content_ru, content_kk, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').run(
    'The Master of the Line', 'Мастер линии', 'Сызық шебері',
    'Kazakhstanskaya Pravda', 'Казахстанская правда', 'Казахстанская правда',
    'An in-depth look at the graphic legacy of Issatay Issabayev and his influence on contemporary Kazakh artists.', 'Глубокий взгляд на графическое наследие Исатая Исабаева и его влияние на современных казахстанских художников.', 'Исатай Исабаевтың графикалық мұрасы мен оның қазіргі қазақстандық суретшілерге тигізген әсері туралы терең шолу.',
    '2018-10-20'
  );
}

export default db;
