import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { eventsData } from '../data/events';

const Events = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'en') as 'en' | 'ru' | 'kk';

  return (
    <div className="min-h-screen py-20 px-6 relative transition-colors duration-300" style={{ backgroundColor: 'var(--app-bg)' }}>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="incised-text mb-6 uppercase tracking-widest">{t('events.label')}</div>
          <h1 className="text-5xl lg:text-7xl font-serif font-black tracking-tighter mb-16" style={{ color: 'var(--app-text)' }}>
            {t('events.title')}
          </h1>

          <div className="grid gap-12">
            {eventsData.map((event, index) => (
              <Link to={`/events/${event.id}`} key={event.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer block"
                >
                  <div className="metal-plate p-6 md:p-8 relative overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-stretch h-full">
                    {event.coverImage && (
                      <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden rounded-sm relative shrink-0" style={{ backgroundColor: 'var(--zinc-plate)' }}>
                        <img 
                          src={event.coverImage} 
                          alt={event.title[lang] || event.title.en} 
                          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-[var(--card-border)] opacity-20"></div>
                      </div>
                    )}
                    <div className="flex flex-col justify-center flex-1 py-4">
                      <div className="mb-4 text-sm font-mono opacity-50 uppercase tracking-widest">{event.date}</div>
                      <h2 className="text-2xl md:text-3xl font-serif mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4" style={{ color: 'var(--app-text)' }}>
                        {event.title[lang] || event.title.en}
                      </h2>
                      {event.description && (
                        <p className="opacity-70 font-serif italic text-lg leading-relaxed line-clamp-3" style={{ color: 'var(--app-text)' }}>
                          {event.description[lang] || event.description.en}
                        </p>
                      )}
                      <div className="mt-8 flex items-center gap-2 font-mono text-sm uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--app-text)' }}>
                        {t('events.details')} <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
