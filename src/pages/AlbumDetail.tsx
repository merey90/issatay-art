import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, Maximize2, Music } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Artwork {
  id: number;
  title: string;
  image_url: string;
  audio_url?: string;
  year: string;
}

interface Album {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  artworks: Artwork[];
}

const AlbumDetail = () => {
  const { id, trackId } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState<Album | null>(null);
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch(`/api/albums/${id}?lang=${i18n.language.split('-')[0]}`)
      .then(res => res.json())
      .then(data => {
        setAlbum(data);
        // If trackId is in URL, find and select it (trackId in URL is 1-based index)
        if (trackId && data.artworks) {
          const index = parseInt(trackId) - 1;
          if (index >= 0 && index < data.artworks.length) {
            setSelectedImage(data.artworks[index]);
          }
        }
      });
  }, [id, i18n.language, trackId]);

  const handleOpenArtwork = (artwork: Artwork, index: number) => {
    setSelectedImage(artwork);
    // Use 1-based index for the URL to avoid database ID offsets
    navigate(`/gallery/${id}/${index + 1}`, { replace: true });
  };

  const handleCloseArtwork = () => {
    setSelectedImage(null);
    navigate(`/gallery/${id}`, { replace: true });
  };

  if (!album) return <div className="min-h-screen bg-black flex items-center justify-center text-white/20 uppercase tracking-widest">{t('album.loading')}</div>;

  return (
    <div className="min-h-screen bg-black py-32 px-6 relative overflow-hidden">
      {album.title === 'The Book World' && (
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none grayscale"
          style={{ 
            backgroundImage: `url(${album.cover_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(100px)'
          }}
        />
      )}
      <div className="max-w-7xl mx-auto relative z-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {album.artworks.map((artwork, i) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-zinc-900 aspect-square"
                onClick={() => handleOpenArtwork(artwork, i)}
              >
                <img
                  src={artwork.image_url}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-white font-serif text-lg leading-tight mb-1">{artwork.title}</h4>
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">{artwork.year}</p>
                  <div className="absolute top-6 right-6 flex gap-3">
                    {artwork.audio_url && <Music className="text-white/80" size={16} />}
                    <Maximize2 className="text-white/40 group-hover:text-white/80 transition-colors" size={16} />
                  </div>
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
            onClick={handleCloseArtwork}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={handleCloseArtwork}
            >
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
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
              />
              <div className="text-center w-full max-w-2xl">
                <h3 className="text-2xl font-serif text-white mb-2">{selectedImage.title}</h3>
                <p className="text-white/40 uppercase tracking-widest text-xs mb-8">{selectedImage.year}</p>
                
                {selectedImage.audio_url && (
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 w-full">
                    <audio 
                      controls 
                      className="w-full h-12 invert opacity-80"
                      autoPlay={false}
                    >
                      <source src={selectedImage.audio_url} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlbumDetail;
