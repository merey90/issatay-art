import Database from 'better-sqlite3';
const db = new Database('issatay.db');
const albums = db.prepare("SELECT title_en, cover_image FROM albums").all();
const artworks = db.prepare("SELECT title_en, image_url FROM artworks WHERE album_id IN (SELECT id FROM albums WHERE title_en = 'The Book World')").all();
console.log('ALBUMS:', JSON.stringify(albums, null, 2));
console.log('ARTWORKS:', JSON.stringify(artworks, null, 2));
