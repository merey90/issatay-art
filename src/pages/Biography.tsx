import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import { milestones } from '../data/milestones';
import { biography } from '../data/biography';

const Biography = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedEvent = (item: any) => {
    if (i18n.language.startsWith('ru')) return item.ru;
    if (i18n.language.startsWith('kk')) return item.kk;
    return item.en;
  };

  const getLocalizedBio = () => {
    if (i18n.language.startsWith('ru')) return biography.ru;
    if (i18n.language.startsWith('kk')) return biography.kk;
    return biography.en;
  };

  return (
    <div className="min-h-screen py-20 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--app-bg)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="incised-text mb-8 block text-center">{t('biography.label')}</span>
          <h1 className="text-5xl lg:text-7xl font-serif font-black tracking-tighter mb-12 text-center leading-none" style={{ color: 'var(--app-text)' }}>
            {t('biography.title')}
          </h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-zinc prose-lg max-w-none text-center mb-16 mx-auto"
          >
            <div className="leading-relaxed font-serif text-xl space-y-8 opacity-80" style={{ color: 'var(--app-text)' }}>
              <ReactMarkdown>{getLocalizedBio()}</ReactMarkdown>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video sm:aspect-[21/9] rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border shadow-sm mb-16"
               style={{ borderColor: 'var(--card-border)' }}>
            <img
              src="/master-at-work.jpg"
              alt="Issatay Issabayev Portrait"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-6 right-6 incised-text !text-white/80 italic">{t('biography.studio_caption')}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-12 md:p-16 border rounded-sm shadow-sm transition-colors duration-300"
               style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
            <h3 className="incised-text mb-12 text-center text-xl">{t('biography.milestones')}</h3>
            <div className="relative">
              <div className="absolute left-[15px] sm:left-[50%] top-0 bottom-0 w-px sm:-translate-x-1/2" style={{ backgroundColor: 'var(--card-border)' }} />
              
              <ul className="space-y-12">
                {milestones.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="relative flex flex-col sm:flex-row group items-start sm:items-center"
                  >
                    <div className="hidden sm:block absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full border transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300 z-10" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--app-text)' }} />
                    <div className="sm:hidden absolute left-[15px] top-3 h-2.5 w-2.5 rounded-full border transform -translate-x-1/2 group-hover:scale-150 transition-transform duration-300 z-10" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--app-text)' }} />
                    
                    <div className={`sm:w-1/2 pl-12 sm:pl-0 sm:pr-12 sm:text-right ${i % 2 !== 0 ? 'sm:order-2 sm:text-left sm:pr-0 sm:pl-12' : ''}`}>
                      <span className="font-serif italic text-2xl lg:text-3xl leading-none block mb-2 sm:mb-0" style={{ color: 'var(--app-text)' }}>{item.year}</span>
                    </div>
                    <div className={`sm:w-1/2 pl-12 sm:pl-0 sm:pr-12 ${i % 2 !== 0 ? 'sm:order-1 sm:text-right' : 'sm:pl-12'}`}>
                      <span className="text-base lg:text-lg leading-relaxed transition-colors opacity-70 group-hover:opacity-100 block" style={{ color: 'var(--app-text)' }}>
                        {getLocalizedEvent(item)}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Biography;
