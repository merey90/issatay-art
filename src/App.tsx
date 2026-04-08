import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Mail, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Pages
import Home from './pages/Home';
import Biography from './pages/Biography';
import Gallery from './pages/Gallery';
import AlbumDetail from './pages/AlbumDetail';
import News from './pages/News';
import Press from './pages/Press';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.biography'), path: '/biography' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.press'), path: '/press' },
  ];

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' },
    { code: 'kk', name: 'KK' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-tighter text-white">
          ISSATAY <span className="text-white/50 italic">ISSABAYEV</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 mr-8 border-r border-white/10 pr-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  location.pathname === link.path ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Globe size={14} className="text-white/30" />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`text-[10px] font-bold tracking-tighter px-2 py-1 rounded transition-colors ${
                  i18n.language.startsWith(lang.code) ? 'bg-white text-black' : 'text-white/40 hover:text-white'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg uppercase tracking-widest ${
                  location.pathname === link.path ? 'text-white' : 'text-white/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 w-full my-2" />
            <div className="flex items-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-sm font-bold tracking-widest px-4 py-2 rounded ${
                    i18n.language.startsWith(lang.code) ? 'bg-white text-black' : 'text-white/40'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-white mb-2">{t('footer.archive')}</h3>
          <p className="text-white/40 text-sm">{t('footer.description')}</p>
        </div>
        <div className="flex gap-6 text-white/50">
          <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="https://www.facebook.com/share/17RiKb99DB/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="mailto:aliya-isabaeva@mail.ru" className="hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
        <p className="text-white/20 text-[10px] uppercase tracking-widest">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:id" element={<AlbumDetail />} />
            <Route path="/gallery/:id/:trackId" element={<AlbumDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/press" element={<Press />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
