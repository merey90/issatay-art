import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center p-8 lg:p-24 bg-white text-black">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-7xl lg:text-[120px] font-serif font-black leading-[0.85] tracking-tighter mb-8">
              {t('home.title_top')}<br />
              {t('home.title_bottom')}
            </h1>
            <p className="text-xl lg:text-2xl font-serif italic text-black/60 max-w-md mb-12">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/gallery"
                className="px-8 py-4 bg-black text-white rounded-full uppercase tracking-widest text-sm font-bold hover:bg-black/80 transition-all flex items-center gap-2"
              >
                {t('home.view_gallery')} <ArrowRight size={16} />
              </Link>
              <Link
                to="/biography"
                className="px-8 py-4 border border-black text-black rounded-full uppercase tracking-widest text-sm font-bold hover:bg-black hover:text-white transition-all"
              >
                {t('home.the_story')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Imagery */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden bg-zinc-900">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://picsum.photos/seed/issatay/1200/1600"
            alt="Issatay Isabayev"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-12 right-12 text-right">
            <p className="text-white/40 uppercase tracking-widest text-xs mb-2">{t('home.featured_work')}</p>
            <h3 className="text-white text-2xl font-serif italic">{i18n.language.startsWith('ru') ? 'Путь Абая, 1970' : i18n.language.startsWith('kk') ? 'Абай жолы, 1970' : 'The Path of Abai, 1970'}</h3>
          </div>
        </div>
      </section>

      {/* Featured Quote Section */}
      <section className="py-32 px-6 bg-zinc-950 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/30 uppercase tracking-[0.3em] text-xs mb-8 block">{t('home.legacy_label')}</span>
            <h2 className="text-3xl lg:text-5xl font-serif italic leading-relaxed text-white/90">
              {t('home.quote')}
            </h2>
            <div className="w-12 h-px bg-white/20 mx-auto mt-12" />
          </motion.div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: t('home.archive_title'), desc: t('home.archive_desc'), link: '/gallery', label: t('home.explore') },
            { title: t('home.news_title'), desc: t('home.news_desc'), link: '/news', label: t('home.read_more') },
            { title: t('home.press_title'), desc: t('home.press_desc'), link: '/press', label: t('home.view_press') },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-white/70 transition-colors">{item.title}</h3>
              <p className="text-white/40 mb-8 leading-relaxed">{item.desc}</p>
              <Link to={item.link} className="text-xs uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors flex items-center gap-2">
                {item.label} <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
