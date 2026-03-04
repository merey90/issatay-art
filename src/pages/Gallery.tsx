import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Album {
  id: number;
  title: string;
  description: string;
  cover_image: string;
}

const Gallery = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch(`/api/albums?lang=${i18n.language.split('-')[0]}`)
      .then(res => res.json())
      .then(data => setAlbums(data));
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/30 uppercase tracking-[0.3em] text-xs mb-12 block">{t('gallery.label')}</span>
          <h1 className="text-6xl lg:text-8xl font-serif font-black tracking-tighter mb-24 leading-none">
            {t('gallery.title')}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {albums.map((album, i) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/gallery/${album.id}`} className="block relative aspect-[16/10] overflow-hidden rounded-2xl mb-8">
                  <img
                    src={album.cover_image}
                    alt={album.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      {t('gallery.view_album')} <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-serif text-white mb-2">{album.title}</h3>
                    <p className="text-white/40 text-sm max-w-md leading-relaxed">{album.description}</p>
                  </div>
                  <span className="text-white/20 font-serif italic text-4xl">0{i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
