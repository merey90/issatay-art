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
    <div className="min-h-screen bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/30 uppercase tracking-[0.3em] text-xs mb-12 block">{t('biography.label')}</span>
          <h1 className="text-6xl lg:text-8xl font-serif font-black tracking-tighter mb-16 leading-none">
            {t('biography.title')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none">
              <div className="text-white/80 leading-relaxed font-serif text-xl space-y-8">
                {bio ? (
                  <ReactMarkdown>{bio}</ReactMarkdown>
                ) : (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-white/10 w-full rounded" />
                    <div className="h-4 bg-white/10 w-3/4 rounded" />
                    <div className="h-4 bg-white/10 w-5/6 rounded" />
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1 space-y-12">
              <div className="p-8 border border-white/10 bg-zinc-950 rounded-2xl max-h-[800px] overflow-y-auto custom-scrollbar">
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-6 sticky top-0 bg-zinc-950 py-2 z-10">{t('biography.milestones')}</h3>
                <ul className="space-y-8">
                  {milestones.map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <span className="text-white font-serif italic text-lg leading-none mb-2">{item.year}</span>
                        <div className="w-px h-full bg-white/10 group-last:hidden" />
                      </div>
                      <span className="text-white/40 text-sm leading-relaxed pt-1 group-hover:text-white/70 transition-colors">
                        {getLocalizedEvent(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src="/master-at-work.jpg"
                  alt="Issatay Issabayev Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-6 left-6 text-xs text-white/60 uppercase tracking-widest italic">{t('biography.studio_caption')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Biography;
