import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen overflow-hidden relative" style={{ backgroundColor: 'var(--app-bg)' }}>
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)] relative z-10">
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center p-8 lg:p-24 relative overflow-hidden border-b lg:border-b-0 lg:border-r transition-colors duration-300" 
             style={{ backgroundColor: 'var(--card-bg)', color: 'var(--app-text)', borderColor: 'var(--nav-border)' }}>
          {/* Subtle Scratch Decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full scratch-line rotate-[-5deg]" />
            <div className="absolute top-1/2 left-0 w-full scratch-line rotate-[2deg]" />
            <div className="absolute bottom-1/4 left-0 w-full scratch-line rotate-[-1deg]" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="incised-text mb-6">{t('home.legacy_label')}</div>
            <h1 className="text-7xl lg:text-[120px] font-serif font-black leading-[0.85] tracking-tighter mb-8" style={{ color: 'var(--app-text)' }}>
              {t('home.title_top')}<br />
              <span className="italic opacity-30">{t('home.title_bottom')}</span>
            </h1>
            <p className="text-xl lg:text-2xl font-serif italic max-w-md mb-12 opacity-70">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/gallery"
                className="px-8 py-4 rounded-sm uppercase tracking-widest text-sm font-bold transition-all flex items-center gap-2"
                style={{ backgroundColor: 'var(--app-text)', color: 'var(--app-bg)' }}
              >
                {t('home.view_gallery')} <ArrowRight size={16} />
              </Link>
              <Link
                to="/biography"
                className="px-8 py-4 border rounded-sm uppercase tracking-widest text-sm font-bold transition-all hover:opacity-80"
                style={{ borderColor: 'var(--card-border)', color: 'var(--app-text)' }}
              >
                {t('home.the_story')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Imagery */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden" style={{ backgroundColor: 'var(--zinc-plate)' }}>
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/victory.jpg"
            alt="Issatay Issabayev"
            className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--app-bg), transparent)' }} />
          <div className="absolute bottom-12 right-12 text-right">
            <p className="incised-text mb-2">{t('home.featured_work')}</p>
            <h3 className="text-2xl font-serif italic" style={{ color: 'var(--app-text)' }}>{i18n.language.startsWith('ru') ? 'Победа, 1982' : i18n.language.startsWith('kk') ? 'Жеңіс, 1982' : 'The Victory, 1982'}</h3>
          </div>
        </div>
      </section>

      {/* Featured Quote Section */}
      <section className="py-48 px-6 relative" style={{ backgroundColor: 'var(--app-bg)' }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full scratch-line -rotate-12" />
          <div className="absolute top-1/2 left-0 w-full scratch-line rotate-12" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="incised-text mb-12 block">{t('home.legacy_label')}</span>
            <h2 className="text-3xl lg:text-5xl font-serif italic leading-relaxed opacity-80">
              "{t('home.quote')}"
            </h2>
            <div className="w-24 h-px mx-auto mt-16" style={{ background: 'linear-gradient(to right, transparent, var(--card-border), transparent)' }} />
          </motion.div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
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
              className="metal-plate p-10 group transition-colors"
            >
              <h3 className="text-2xl font-serif mb-4 group-hover:opacity-70 transition-opacity" style={{ color: 'var(--app-text)' }}>{item.title}</h3>
              <p className="mb-8 leading-relaxed text-sm opacity-60" style={{ color: 'var(--app-text)' }}>{item.desc}</p>
              <Link to={item.link} className="incised-text hover:opacity-100 transition-opacity flex items-center gap-2">
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
