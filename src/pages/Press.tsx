import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PressItem {
  id: number;
  title: string;
  source: string;
  content: string;
  date: string;
}

const Press = () => {
  const [press, setPress] = useState<PressItem[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch(`/api/press?lang=${i18n.language.split('-')[0]}`)
      .then(res => res.json())
      .then(data => setPress(data));
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-black py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/30 uppercase tracking-[0.3em] text-xs mb-12 block">{t('press.label')}</span>
          <h1 className="text-6xl lg:text-8xl font-serif font-black tracking-tighter mb-24 leading-none">
            {t('press.title')}
          </h1>

          <div className="grid grid-cols-1 gap-12">
            {press.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 border border-white/10 bg-zinc-950 rounded-3xl hover:border-white/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                  <div>
                    <span className="text-white/40 uppercase tracking-widest text-xs font-bold mb-2 block">{item.source}</span>
                    <h2 className="text-3xl font-serif text-white leading-tight group-hover:text-white/80 transition-colors">{item.title}</h2>
                  </div>
                  <span className="text-white/20 font-serif italic text-xl whitespace-nowrap">
                    {new Date(item.date).getFullYear()}
                  </span>
                </div>
                <p className="text-white/60 text-lg leading-relaxed font-serif italic mb-10 max-w-3xl">
                  "{item.content}"
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors">
                  {t('press.read_full')} <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Press;
