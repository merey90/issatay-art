import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Clock, User, Info, X, Video } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { eventsData, ScheduleItem } from '../data/events';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const [selectedBio, setSelectedBio] = useState<{ speaker: string, bio: string } | null>(null);
  
  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center pt-20">
        <h1 className="text-2xl font-serif">{t('events.not_found')}</h1>
      </div>
    );
  }

  const lang = (i18n.language || 'en') as 'en' | 'ru' | 'kk';

  const handleSpeakerClick = (schedule: ScheduleItem) => {
    if (schedule.bio) {
      setSelectedBio({
        speaker: schedule.speaker[lang] || schedule.speaker.en,
        bio: schedule.bio[lang] || schedule.bio.en
      });
    }
  };

  return (
    <div className="min-h-screen pb-32 transition-colors duration-300 relative" style={{ backgroundColor: 'var(--app-bg)' }}>
      {/* Hero Header */}
      <div className="relative pt-20 pb-6 px-6 overflow-hidden">
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
            
            {event.onlineLink && event.onlineInfo && (
              <motion.a
                href={event.onlineLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12 inline-flex items-start gap-4 p-6 metal-plate hover:opacity-100 opacity-90 transition-all group max-w-2xl"
                style={{ backgroundColor: 'var(--zinc-plate)' }}
              >
                <Video className="w-8 h-8 mt-1 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" style={{ color: 'var(--app-text)' }} />
                <div>
                  <p className="font-serif italic text-lg leading-relaxed mb-4 whitespace-pre-line" style={{ color: 'var(--app-text)' }}>
                    {event.onlineInfo[lang] || event.onlineInfo.en}
                  </p>
                  <span className="font-mono text-sm uppercase tracking-widest flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--app-text)' }}>
                    {t('events.join_online')} →
                  </span>
                </div>
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 mt-2">
        {event.schedules && event.schedules.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden"
          >
            <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--app-text)' }}>
              {t('events.schedule')}
            </h2>
            <div className="metal-plate p-6 md:p-8 -mx-6 sm:mx-0 relative overflow-hidden">
              <div className="space-y-4">
              {event.schedules.map((schedule, sIndex) => (
                <div key={sIndex} className="flex flex-col md:flex-row gap-4 md:gap-6 relative group">
                  <div className="md:w-48 shrink-0 flex items-start gap-3 font-mono text-lg uppercase tracking-widest opacity-60 pt-1">
                    <Clock className="min-w-5 mt-0.5" size={20} />
                    {schedule.time}
                  </div>
                  <div className="flex-1 pb-4 border-b border-white/10 group-last:border-0 group-last:pb-0" style={{ borderColor: 'var(--card-border)' }}>
                    <div 
                      className={`flex items-center gap-3 font-bold text-xl mb-3 transition-colors ${schedule.bio ? 'cursor-pointer hover:opacity-80' : ''}`} 
                      style={{ color: 'var(--app-text)' }}
                      onClick={() => handleSpeakerClick(schedule)}
                    >
                      <User className="opacity-60 shrink-0" size={20} />
                      <span className={schedule.bio ? 'underline decoration-1 underline-offset-4 decoration-dotted' : ''}>
                        {schedule.speaker[lang] || schedule.speaker.en}
                      </span>
                      {schedule.bio && (
                        <Info size={16} className="opacity-40 shrink-0" />
                      )}
                    </div>
                    {schedule.topic && (
                      <div className="text-lg font-serif italic leading-relaxed opacity-80" style={{ color: 'var(--app-text)' }}>
                        {schedule.topic[lang] || schedule.topic.en}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedBio && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedBio(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="metal-plate w-full max-w-lg p-8 relative"
              style={{ backgroundColor: 'var(--app-bg)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedBio(null)}
                className="absolute top-6 right-6 opacity-50 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--app-text)' }}
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-3 font-bold text-2xl mb-4 pr-8" style={{ color: 'var(--app-text)' }}>
                <User className="opacity-60 shrink-0" size={24} />
                {selectedBio.speaker}
              </div>
              <p className="text-lg font-serif italic leading-relaxed opacity-80" style={{ color: 'var(--app-text)' }}>
                {selectedBio.bio}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventDetail;
