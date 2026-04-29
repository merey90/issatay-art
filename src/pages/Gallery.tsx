import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { albums } from '../data/albums';

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

  const getLocalizedText = (item: any) => {
    if (i18n.language.startsWith('ru')) return item.ru;
    if (i18n.language.startsWith('kk')) return item.kk;
    return item.en;
  };

  return (
    <div className="min-h-screen py-20 px-6 relative" style={{ backgroundColor: 'var(--app-bg)' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="incised-text mb-12 block">{t('gallery.label')}</span>
          <h1 className="text-6xl lg:text-8xl font-serif font-black tracking-tighter mb-24 leading-none" style={{ color: 'var(--app-text)' }}>
            {t('gallery.title')}
          </h1>

          {/* Internal Albums Section */}
          <div className="mb-48">
            <h2 className="incised-text mb-12">{t('gallery.internal_albums')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {albums.map((album, i) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-sm transition-colors shadow-sm"
                  style={{ backgroundColor: 'var(--zinc-plate)', border: '1px solid var(--card-border)' }}
                >
                  <Link to={`/gallery/${album.id}`} className="block w-full h-full">
                    <img
                      src={album.cover_image}
                      alt={getLocalizedText(album.title)}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ background: 'var(--card-gradient)' }}>
                      <h3 className="text-2xl font-serif mb-2" style={{ color: 'var(--app-text)' }}>{getLocalizedText(album.title)}</h3>
                      <p className="text-sm line-clamp-2 mb-6 font-serif italic opacity-70" style={{ color: 'var(--app-text)' }}>{getLocalizedText(album.description)}</p>
                      <div className="incised-text group-hover:!opacity-100 transition-opacity flex items-center gap-2" style={{ color: 'var(--app-text)', opacity: 0.4 }}>
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
            <h2 className="incised-text mb-12">{t('gallery.external_museums')}</h2>
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
                <a href={museum.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-[16/10] overflow-hidden rounded-sm mb-8 transition-colors shadow-sm"
                   style={{ backgroundColor: 'var(--zinc-plate)', border: '1px solid var(--card-border)' }}>
                  <img
                    src={museum.image}
                    alt={getLocalizedText(museum.title)}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="px-6 py-3 border shadow-lg rounded-sm text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"
                         style={{ backgroundColor: 'var(--app-text)', color: 'var(--app-bg)', borderColor: 'var(--card-border)' }}>
                      {t('gallery.view_museum')} <ExternalLink size={14} />
                    </div>
                  </div>
                </a>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-serif mb-2" style={{ color: 'var(--app-text)' }}>{getLocalizedText(museum.title)}</h3>
                    <p className="text-sm max-w-md leading-relaxed font-serif italic opacity-70" style={{ color: 'var(--app-text)' }}>{getLocalizedText(museum.description)}</p>
                  </div>
                  <span className="font-mono text-4xl opacity-20" style={{ color: 'var(--app-text)' }}>0{i + 1}</span>
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
