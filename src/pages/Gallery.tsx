import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Album {
  id: number;
  title: string;
  description: string;
  cover_image: string;
}

const museums = [
  {
    id: 1,
    title: {
      en: 'A. Kasteyev State Museum of Arts',
      ru: 'Государственный музей искусств им. А. Кастеева',
      kk: 'Ә. Қастеев атындағы Мемлекеттік өнер мұражайы'
    },
    description: {
      en: 'Graphics Collection of Kazakhstan Fine Arts',
      ru: 'Коллекция графики изобразительного искусства Казахстана',
      kk: 'Қазақстан бейнелеу өнерінің графика коллекциясы'
    },
    link: 'https://www.gmirk.kz/en/kollektsiya/izobrazitelnoe-iskusstvo-kazakhstana/grafika',
    image: '/Isabaeb_08.jpg'
  },
  {
    id: 2,
    title: {
      en: 'Almaty Museum of Arts',
      ru: 'Музей искусств Алматы',
      kk: 'Алматы өнер мұражайы'
    },
    description: {
      en: 'Collection of works by Issatay Issabayev',
      ru: 'Коллекция работ Исатая Исабаева',
      kk: 'Исатай Исабаевтың жұмыстар топтамасы'
    },
    link: 'https://collection.almaty.art/entity/PERSON/3917766',
    image: '/Isabaeb_02.jpg'
  },
  {
    id: 3,
    title: {
      en: 'State Tretyakov Gallery',
      ru: 'Государственная Третьяковская галерея',
      kk: 'Мемлекеттік Третьяков галереясы'
    },
    description: {
      en: 'My Tretyakov App Collection',
      ru: 'Коллекция приложения Моя Третьяковка',
      kk: 'Менің Третьяковкам қосымшасының топтамасы'
    },
    link: 'https://my.tretyakov.ru/app/?lang=en',
    image: '/Isabaeb_01.jpg'
  },
  {
    id: 4,
    title: {
      en: 'National Museum of the Republic of Kazakhstan',
      ru: 'Национальный музей Республики Казахстан',
      kk: 'Қазақстан Республикасының Ұлттық мұражайы'
    },
    description: {
      en: 'National Art Collection',
      ru: 'Национальная коллекция искусства',
      kk: 'Ұлттық өнер топтамасы'
    },
    link: 'https://nmrk.kz/en/',
    image: '/Isabaeb_03.jpg'
  }
];

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch(`/api/albums?lang=${i18n.language.split('-')[0]}`)
      .then(res => res.json())
      .then(data => setAlbums(data));
  }, [i18n.language]);

  const getLocalizedText = (item: any) => {
    if (i18n.language.startsWith('ru')) return item.ru;
    if (i18n.language.startsWith('kk')) return item.kk;
    return item.en;
  };

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

          {/* Internal Albums Section */}
          <div className="mb-32">
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-12 font-bold">{t('gallery.internal_albums')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {albums.map((album, i) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900"
                >
                  <Link to={`/gallery/${album.id}`} className="block w-full h-full">
                    <img
                      src={album.cover_image}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                      <h3 className="text-2xl font-serif text-white mb-2">{album.title}</h3>
                      <p className="text-white/40 text-sm line-clamp-2 mb-6 font-serif italic">{album.description}</p>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/60 group-hover:text-white transition-colors">
                        {t('gallery.open_album')} <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* External Museums Section */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-12 font-bold">{t('gallery.external_museums')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {museums.map((museum, i) => (
              <motion.div
                key={museum.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <a href={museum.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/10] overflow-hidden rounded-2xl mb-8">
                  <img
                    src={museum.image}
                    alt={getLocalizedText(museum.title)}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      {t('gallery.view_museum')} <ExternalLink size={14} />
                    </div>
                  </div>
                </a>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-serif text-white mb-2">{getLocalizedText(museum.title)}</h3>
                    <p className="text-white/40 text-sm max-w-md leading-relaxed">{getLocalizedText(museum.description)}</p>
                  </div>
                  <span className="text-white/20 font-serif italic text-4xl">0{i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default Gallery;
