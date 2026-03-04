import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, X, Maximize2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Artwork {
  id: number;
  title: string;
  image_url: string;
  year: string;
}

interface Album {
  id: number;
  title: string;
  description: string;
  artworks: Artwork[];
}

const AlbumDetail = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState<Album | null>(null);
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch(`/api/albums/${id}?lang=${i18n.language.split('-')[0]}`)
      .then(res => res.json())
      .then(data => setAlbum(data));
  }, [id, i18n.language]);

  if (!album) return <div className="min-h-screen bg-black flex items-center justify-center text-white/20 uppercase tracking-widest">{t('album.loading')}</div>;

  return (
    <div className="min-h-screen bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/gallery" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 mb-12 uppercase tracking-widest text-xs font-bold">
            <ArrowLeft size={14} /> {t('album.back')}
          </Link>

          <div className="mb-24">
            <h1 className="text-5xl lg:text-7xl font-serif font-black tracking-tighter mb-6">{album.title}</h1>
            <p className="text-white/40 max-w-2xl text-lg font-serif italic">{album.description}</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {album.artworks.map((artwork, i) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-zinc-900"
                onClick={() => setSelectedImage(artwork)}
              >
                <img
                  src={artwork.image_url}
                  alt={artwork.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-white font-serif text-lg">{artwork.title}</h4>
                  <p className="text-white/60 text-xs uppercase tracking-widest">{artwork.year}</p>
                  <Maximize2 className="absolute top-6 right-6 text-white/40" size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image_url}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
              />
              <div className="text-center">
                <h3 className="text-2xl font-serif text-white mb-2">{selectedImage.title}</h3>
                <p className="text-white/40 uppercase tracking-widest text-xs">{selectedImage.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlbumDetail;
