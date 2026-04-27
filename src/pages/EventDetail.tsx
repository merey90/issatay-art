import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { eventsData } from '../data/events';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  
  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center pt-32">
        <h1 className="text-2xl font-serif">{t('events.not_found')}</h1>
      </div>
    );
  }

  const lang = (i18n.language || 'en') as 'en' | 'ru' | 'kk';

  return (
    <div className="min-h-screen pb-32 transition-colors duration-300" style={{ backgroundColor: 'var(--app-bg)' }}>
      {/* Hero Header */}
      <div className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {event.coverImage && (
            <>
              <img 
                src={event.coverImage} 
                alt="" 
                className="w-full h-full object-cover grayscale opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--app-bg)]"></div>
            </>
          )}
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link to="/events" className="inline-flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity" style={{ color: 'var(--app-text)' }}>
              <ArrowLeft size={16} /> {t('events.back')}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="incised-text mb-6 uppercase tracking-widest">{event.date}</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black tracking-tighter mb-8 leading-tight" style={{ color: 'var(--app-text)' }}>
              {event.title[lang] || event.title.en}
            </h1>
            {event.description && (
              <p className="text-xl md:text-2xl font-serif italic leading-relaxed opacity-80" style={{ color: 'var(--app-text)' }}>
                {event.description[lang] || event.description.en}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 mt-12">
        {event.schedules && event.schedules.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="metal-plate p-8 md:p-12 relative overflow-hidden"
          >
            <h2 className="text-3xl font-serif mb-12" style={{ color: 'var(--app-text)' }}>
              {t('events.schedule')}
            </h2>
            <div className="space-y-12">
              {event.schedules.map((schedule, sIndex) => (
                <div key={sIndex} className="flex flex-col md:flex-row gap-6 md:gap-12 relative group">
                  <div className="md:w-48 shrink-0 flex items-start gap-3 font-mono text-lg uppercase tracking-widest opacity-60 pt-1">
                    <Clock className="min-w-5 mt-0.5" size={20} />
                    {schedule.time}
                  </div>
                  <div className="flex-1 pb-12 border-b border-white/10 group-last:border-0 group-last:pb-0" style={{ borderColor: 'var(--card-border)' }}>
                    <div className="flex items-center gap-3 font-bold text-xl mb-3" style={{ color: 'var(--app-text)' }}>
                      <User className="opacity-60" size={20} />
                      {schedule.speaker[lang] || schedule.speaker.en}
                    </div>
                    <div className="text-lg font-serif italic leading-relaxed opacity-80" style={{ color: 'var(--app-text)' }}>
                      {schedule.topic[lang] || schedule.topic.en}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
