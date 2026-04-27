import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Mail, Globe, Moon, Sun } from 'lucide-react';
import { useState, useEffect, createContext, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // Helper to get the base path (e.g., /gallery/1) to detect if we're on the same album
    const getBasePath = (path: string) => {
      const segments = path.split('/');
      if (segments[1] === 'gallery' && segments[2]) {
        return `/gallery/${segments[2]}`;
      }
      return path;
    };

    const currentBase = getBasePath(pathname);
    const prevBase = getBasePath(prevPathRef.current);

    // Only scroll to top if we've navigated to a completely different page or a different album
    if (currentBase !== prevBase) {
      window.scrollTo(0, 0);
    }
    
    prevPathRef.current = pathname;
  }, [pathname]);

  return null;
};

// Pages
import Home from './pages/Home';
import Biography from './pages/Biography';
import Gallery from './pages/Gallery';
import AlbumDetail from './pages/AlbumDetail';
import News from './pages/News';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Press from './pages/Press';

// Theme Context
const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}>({ theme: 'light', toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.biography'), path: '/biography' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.events'), path: '/events' },
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
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300" 
         style={{ backgroundColor: 'var(--nav-bg)', borderColor: 'var(--nav-border)' }}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-tighter" style={{ color: 'var(--app-text)' }}>
          ISSATAY <span className="italic" style={{ color: 'var(--incised-text-color)' }}>ISSABAYEV</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 mr-8 border-r pr-8" style={{ borderColor: 'var(--nav-border)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${
                  location.pathname === link.path ? '' : 'opacity-40 hover:opacity-100'
                }`}
                style={{ color: location.pathname === link.path ? 'var(--app-text)' : 'var(--app-text)' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Globe size={14} style={{ color: 'var(--incised-text-color)' }} />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`text-[10px] font-bold tracking-tighter px-2 py-1 rounded transition-colors ${
                  i18n.language.startsWith(lang.code) ? 'text-white' : 'opacity-40 hover:opacity-100'
                }`}
                style={{ 
                  backgroundColor: i18n.language.startsWith(lang.code) ? 'var(--app-text)' : 'transparent',
                  color: i18n.language.startsWith(lang.code) ? 'var(--app-bg)' : 'var(--app-text)'
                }}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" style={{ color: 'var(--app-text)' }} onClick={() => setIsOpen(!isOpen)}>
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
            className="absolute top-20 left-0 w-full border-b p-6 flex flex-col gap-6 md:hidden"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--nav-border)' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg uppercase tracking-widest ${
                  location.pathname === link.path ? '' : 'opacity-40'
                }`}
                style={{ color: 'var(--app-text)' }}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px w-full my-2" style={{ backgroundColor: 'var(--nav-border)' }} />
            <div className="flex items-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-sm font-bold tracking-widest px-4 py-2 rounded ${
                    i18n.language.startsWith(lang.code) ? '' : 'opacity-40'
                  }`}
                  style={{ 
                    backgroundColor: i18n.language.startsWith(lang.code) ? 'var(--app-text)' : 'transparent',
                    color: i18n.language.startsWith(lang.code) ? 'var(--app-bg)' : 'var(--app-text)'
                  }}
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
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t py-12 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--footer-bg)', borderColor: 'var(--footer-border)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif mb-2" style={{ color: 'var(--app-text)' }}>{t('footer.archive')}</h3>
          <p className="text-sm opacity-50" style={{ color: 'var(--app-text)' }}>{t('footer.description')}</p>
        </div>
        <div className="flex gap-6 opacity-40">
          <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--app-text)' }}><Instagram size={20} /></a>
          <a href="https://www.facebook.com/share/17RiKb99DB/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--app-text)' }}><Facebook size={20} /></a>
          <a href="mailto:aliya-isabaeva@mail.ru" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--app-text)' }}><Mail size={20} /></a>
        </div>
        <div className="flex items-center gap-8">
          <p className="incised-text">{t('footer.copyright')}</p>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border transition-all hover:scale-110"
            style={{ borderColor: 'var(--card-border)', color: 'var(--app-text)' }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen relative font-sans transition-colors duration-300" 
           style={{ backgroundColor: 'var(--app-bg)', color: 'var(--app-text)' }}>
        <style>{`
          ::selection {
            background-color: var(--selection-bg);
            color: var(--selection-text);
          }
        `}</style>
        <ScrollToTop />
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
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/press" element={<Press />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
