import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import { milestones } from '../data/milestones';

const Biography = () => {
  const [bio, setBio] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch(`/api/biography?lang=${i18n.language.split('-')[0]}`)
      .then(res => res.json())
      .then(data => setBio(data.content));
  }, [i18n.language]);

  const getLocalizedEvent = (item: any) => {
    if (i18n.language.startsWith('ru')) return item.ru;
    if (i18n.language.startsWith('kk')) return item.kk;
    return item.en;
  };

  return (
    <div className="min-h-screen py-20 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--app-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="incised-text mb-12 block">{t('biography.label')}</span>
          <h1 className="text-6xl lg:text-8xl font-serif font-black tracking-tighter mb-16 leading-none" style={{ color: 'var(--app-text)' }}>
            {t('biography.title')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 prose prose-zinc prose-lg max-w-none">
              <div className="leading-relaxed font-serif text-xl space-y-8 opacity-80" style={{ color: 'var(--app-text)' }}>
                {bio ? (
                  <ReactMarkdown>{bio}</ReactMarkdown>
                ) : (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 w-full rounded" style={{ backgroundColor: 'var(--card-border)' }} />
                    <div className="h-4 w-3/4 rounded" style={{ backgroundColor: 'var(--card-border)' }} />
                    <div className="h-4 w-5/6 rounded" style={{ backgroundColor: 'var(--card-border)' }} />
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1 space-y-12">
              <div className="p-8 border rounded-sm shadow-sm max-h-[800px] overflow-y-auto custom-scrollbar transition-colors duration-300"
                   style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <h3 className="incised-text mb-6 sticky top-0 py-2 z-10" style={{ backgroundColor: 'var(--card-bg)' }}>{t('biography.milestones')}</h3>
                <ul className="space-y-8">
                  {milestones.map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <span className="font-serif italic text-lg leading-none mb-2" style={{ color: 'var(--app-text)' }}>{item.year}</span>
                        <div className="w-px h-full group-last:hidden" style={{ backgroundColor: 'var(--card-border)' }} />
                      </div>
                      <span className="text-sm leading-relaxed pt-1 transition-colors opacity-50 group-hover:opacity-100" style={{ color: 'var(--app-text)' }}>
                        {getLocalizedEvent(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[3/4] rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border shadow-sm"
                   style={{ borderColor: 'var(--card-border)' }}>
                <img
                  src="/master-at-work.jpg"
                  alt="Issatay Issabayev Portrait"
                  className="w-full h-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p className="absolute bottom-6 left-6 incised-text !text-white/80 italic">{t('biography.studio_caption')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Biography;
