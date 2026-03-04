import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch(`/api/news?lang=${i18n.language.split('-')[0]}`)
      .then(res => res.json())
      .then(data => setNews(data));
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-black py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/30 uppercase tracking-[0.3em] text-xs mb-12 block">{t('news.label')}</span>
          <h1 className="text-6xl lg:text-8xl font-serif font-black tracking-tighter mb-24 leading-none">
            {t('news.title')}
          </h1>

          <div className="space-y-24">
            {news.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                  <div className="md:w-1/4">
                    <span className="text-white font-serif italic text-2xl block mb-2">
                      {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <div className="w-8 h-px bg-white/20" />
                  </div>
                  <div className="md:w-3/4">
                    <h2 className="text-3xl font-serif text-white mb-6 group-hover:text-white/70 transition-colors leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-white/50 text-lg leading-relaxed font-serif italic">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
