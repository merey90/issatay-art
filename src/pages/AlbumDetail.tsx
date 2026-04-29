import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, Maximize2, Music, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { albums } from '../data/albums';

interface Artwork {
  id: number;
  title: Record<string, string | null>;
  description?: Record<string, string | null>;
  image_url: string;
  audio_url_en?: string | null;
  audio_url_ru?: string | null;
  audio_url_kk?: string | null;
  year: string;
}

interface Album {
  id: number;
  title: Record<string, string>;
  description: Record<string, string>;
  cover_image: string;
  artworks: Artwork[];
}

const AlbumDetail = () => {
  const { id, trackId } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState<Album | null>(null);
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isSpeedOpen, setIsSpeedOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { t, i18n } = useTranslation();

  const getLocalizedText = (item: Record<string, any> | undefined) => {
    if (!item) return '';
    if (i18n.language.startsWith('ru')) return item.ru || item.en;
    if (i18n.language.startsWith('kk')) return item.kk || item.en;
    return item.en;
  };

  const getLocalizedAudio = (artwork: Artwork) => {
    if (i18n.language.startsWith('ru')) return artwork.audio_url_ru;
    if (i18n.language.startsWith('kk')) return artwork.audio_url_kk;
    return artwork.audio_url_en;
  };

  useEffect(() => {
    if (id) {
      const foundAlbum = albums.find(a => a.id === parseInt(id)) as unknown as Album;
      setAlbum(foundAlbum);
    }
  }, [id]);

  useEffect(() => {
    if (album && trackId) {
      const idNum = parseInt(trackId);
      const artwork = album.artworks.find(a => a.id === idNum);
      if (artwork) {
        setSelectedImage(artwork);
      }
    } else {
      setSelectedImage(null);
    }
  }, [album, trackId]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, selectedImage]);

  const handleOpenArtwork = (artwork: Artwork) => {
    setSelectedImage(artwork);
    // Use database ID for the URL to ensure stable links even if items are removed
    navigate(`/gallery/${id}/${artwork.id}`);
  };

  const handleCloseArtwork = () => {
    setSelectedImage(null);
    navigate(`/gallery/${id}`);
  };

  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];

  if (!album) return <div className="min-h-screen flex items-center justify-center uppercase tracking-widest opacity-20" style={{ backgroundColor: 'var(--app-bg)', color: 'var(--app-text)' }}>{t('album.loading')}</div>;

  return (
    <div className="min-h-screen py-20 px-6 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--app-bg)' }}>
      {album.title?.en === 'The Book World' && (
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none grayscale"
          style={{ 
            backgroundImage: `url(${album.cover_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(120px)'
          }}
        />
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/gallery" className="incised-text hover:opacity-100 transition-opacity flex items-center gap-2 mb-12" style={{ color: 'var(--app-text)', opacity: 0.4 }}>
            <ArrowLeft size={14} /> {t('album.back')}
          </Link>

          <div className="mb-24">
            <h1 className="text-5xl lg:text-7xl font-serif font-black tracking-tighter mb-6" style={{ color: 'var(--app-text)' }}>{getLocalizedText(album.title)}</h1>
            <p className="max-w-2xl text-lg font-serif italic opacity-70" style={{ color: 'var(--app-text)' }}>{getLocalizedText(album.description)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {album.artworks.map((artwork, i) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-sm aspect-square transition-colors shadow-sm"
                style={{ backgroundColor: 'var(--zinc-plate)', border: '1px solid var(--card-border)' }}
                onClick={() => handleOpenArtwork(artwork)}
              >
                <img
                  src={artwork.image_url}
                  alt={getLocalizedText(artwork.title)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ background: 'var(--card-gradient)' }}>
                  <h4 className="font-serif text-lg leading-tight mb-1" style={{ color: 'var(--app-text)' }}>{getLocalizedText(artwork.title)}</h4>
                  <p className="incised-text" style={{ color: 'var(--incised-text-color)' }}>{artwork.year}</p>
                  <div className="absolute top-6 right-6 flex gap-3">
                    {getLocalizedAudio(artwork) && <Music className="opacity-40" size={16} style={{ color: 'var(--app-text)' }} />}
                    <Maximize2 className="opacity-20 group-hover:opacity-60 transition-opacity" size={16} style={{ color: 'var(--app-text)' }} />
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
            className="fixed inset-0 z-40 flex flex-col items-center p-6 pt-24 pb-12 backdrop-blur-md overflow-y-auto"
            style={{ backgroundColor: 'var(--nav-bg)' }}
            onClick={handleCloseArtwork}
          >
            <button 
              className="fixed top-24 right-8 opacity-30 hover:opacity-100 transition-opacity z-50"
              style={{ color: 'var(--app-text)' }}
              onClick={handleCloseArtwork}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-sm shadow-2xl border w-full max-w-3xl" style={{ borderColor: 'var(--card-border)' }}>
                <img
                  src={selectedImage.image_url}
                  alt={getLocalizedText(selectedImage.title)}
                  className="w-full max-h-[50vh] md:max-h-[60vh] object-contain"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 pointer-events-none text-center" 
                     style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}>
                  <h3 className="text-xl md:text-2xl font-serif mb-1" style={{ color: '#FFFFFF' }}>{getLocalizedText(selectedImage.title)}</h3>
                  {selectedImage.description && (
                    <p className="text-[10px] md:text-xs font-serif italic opacity-80 mb-2" style={{ color: '#FFFFFF' }}>
                      {getLocalizedText(selectedImage.description)}
                    </p>
                  )}
                  <p className="incised-text text-[10px] md:text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{selectedImage.year}</p>
                </div>
              </div>

              <div className="w-full max-w-2xl">
                <div className="p-4 rounded-sm border w-full shadow-sm flex items-center gap-4" style={{ backgroundColor: 'var(--app-bg)', borderColor: 'var(--card-border)' }}>
                  {getLocalizedAudio(selectedImage) ? (
                    <>
                      <audio 
                        ref={audioRef}
                        controls 
                        controlsList="nodownload noplaybackrate"
                        className="flex-1 h-10 opacity-80 hover:opacity-100 transition-opacity"
                        autoPlay={false}
                        key={getLocalizedAudio(selectedImage)} // Force re-render when URL changes
                      >
                        <source src={getLocalizedAudio(selectedImage)!} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      
                      <div className="relative">
                        <button 
                          onClick={() => setIsSpeedOpen(!isSpeedOpen)}
                          className="flex items-center gap-2 px-3 py-2 rounded-sm border transition-all hover:opacity-100 opacity-60 text-[10px] font-mono uppercase tracking-widest"
                          style={{ borderColor: 'var(--card-border)', color: 'var(--app-text)' }}
                        >
                          {playbackRate}x <ChevronDown size={12} className={`transition-transform duration-300 ${isSpeedOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isSpeedOpen && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="absolute bottom-full right-0 mb-2 min-w-[80px] border shadow-2xl rounded-sm overflow-hidden z-50"
                              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                            >
                              {speedOptions.map((speed) => (
                                <button
                                  key={speed}
                                  onClick={() => {
                                    setPlaybackRate(speed);
                                    setIsSpeedOpen(false);
                                  }}
                                  className={`w-full px-4 py-2 text-[10px] font-mono text-left transition-colors ${
                                    playbackRate === speed 
                                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-black' 
                                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                  }`}
                                  style={{ 
                                    color: playbackRate === speed ? '' : 'var(--app-text)'
                                  }}
                                >
                                  {speed}x
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 py-2 flex items-center justify-center gap-3 opacity-40">
                      <Music size={16} />
                      <span className="text-xs uppercase tracking-widest font-mono">
                        {t('album.audio_missing')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlbumDetail;
