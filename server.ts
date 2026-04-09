import express from "express";
import { createServer as createViteServer } from "vite";
import db from "./src/db.ts";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/biography", (req, res) => {
    const lang = req.query.lang || 'en';
    const bio = db.prepare(`SELECT content_${lang} as content FROM biography WHERE id = 1`).get();
    res.json(bio);
  });

  app.get("/api/albums", (req, res) => {
    const lang = req.query.lang || 'en';
    const albums = db.prepare(`SELECT id, title_${lang} as title, description_${lang} as description, cover_image FROM albums`).all();
    res.json(albums);
  });

  app.get("/api/albums/:id", (req, res) => {
    const lang = req.query.lang || 'en';
    const album = db.prepare(`SELECT id, title_${lang} as title, description_${lang} as description, cover_image FROM albums WHERE id = ?`).get(req.params.id);
    
    // Fetch artworks with all language audio URLs for fallback logic
    const artworksRaw = db.prepare(`SELECT id, title_${lang} as title, description_${lang} as description, image_url, audio_url_en, audio_url_ru, audio_url_kk, year FROM artworks WHERE album_id = ? ORDER BY id ASC`).all(req.params.id);
    
    const artworks = artworksRaw.map((art: any) => {
      // Fallback logic: current lang -> ru -> en
      let audio_url = art[`audio_url_${lang}`];
      if (!audio_url) audio_url = art.audio_url_ru;
      if (!audio_url) audio_url = art.audio_url_en;

      if (!audio_url) {
        console.warn(`[Audio Warning] No audio track found for Artwork ID: ${art.id} ("${art.title}") in language: ${lang} (or fallbacks RU/EN)`);
      }

      return {
        id: art.id,
        title: art.title,
        description: art.description,
        image_url: art.image_url,
        audio_url: audio_url || null,
        year: art.year
      };
    });

    if (!album) {
      return res.status(404).json({ error: 'Album not found' });
    }

    res.json({ ...(album as object), artworks });
  });

  app.get("/api/news", (req, res) => {
    const lang = req.query.lang || 'en';
    const news = db.prepare(`SELECT id, title_${lang} as title, content_${lang} as content, date FROM news ORDER BY date DESC`).all();
    res.json(news);
  });

  app.get("/api/press", (req, res) => {
    const lang = req.query.lang || 'en';
    const press = db.prepare(`SELECT id, title_${lang} as title, source_${lang} as source, content_${lang} as content, date FROM press ORDER BY date DESC`).all();
    res.json(press);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
