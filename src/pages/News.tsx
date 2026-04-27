import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const newsItems = [
  {
    id: 1,
    date: {
      en: 'April 23, 2026',
      ru: 'Апрель 23, 2026',
      kk: '23 Сәуір, 2026'
    },
    title: {
      en: 'Conference "Issatay Issabayev: Book World"',
      ru: 'Конференция “Исатай Исабаев: Книжный мир”',
      kk: '«Исатай Исабаев: Кітап әлемі» конференциясы'
    },
    content: {
      en: 'National Library of the Republic of Kazakhstan',
      ru: 'Национальная библиотека Республики Казахстан',
      kk: 'Қазақстан Республикасының Ұлттық кітапханасы'
    },
    link: 'https://www.nlrk.kz/'
  },
  {
    id: 2,
    date: {
      en: 'April 10, 2026',
      ru: 'Апрель 10, 2026',
      kk: '10 Сәуір, 2026'
    },
    title: {
      en: 'Anniversary Exhibition "Issatay Issabayev: Book World"',
      ru: 'Юбилейная выставка “Исатай Исабаев: Книжный мир”',
      kk: '«Исатай Исабаев: Кітап әлемі» мерейтойлық көрмесі'
    },
    content: {
      en: 'A. Kasteyev State Museum of Arts of the Republic of Kazakhstan',
      ru: 'Национальный музей искусств Республики Казахстан имени Абылхана Кастеева',
      kk: 'Ә. Қастеев атындағы Қазақстан Республикасының Мемлекеттік өнер мұражайы'
    },
    link: 'https://www.gmirk.kz/ru/sobytiya'
  },
  {
    id: 3,
    date: {
      en: 'February 3 - March 26, 2026',
      ru: 'Февраль 3 - Март 26, 2026',
      kk: '3 Ақпан - 26 Наурыз, 2026'
    },
    title: {
      en: 'Anniversary Exhibition "Master of National Graphics"',
      ru: 'Юбилейная выставка “Мастер национальной графики”',
      kk: '«Ұлттық графика шебері» мерейтойлық көрмесі'
    },
    content: {
      en: 'Pavlodar Regional Art Museum named after N. Nurmukhammedov',
      ru: 'Павлодарский областной художественный музей имени Н. Нурмухаммедова',
      kk: 'Н. Нұрмұхаммедов атындағы Павлодар облыстық көркемсурет мұражайы'
    }
  },
  {
    id: 4,
    date: {
      en: 'February 13, 2026',
      ru: 'Февраль 13, 2026',
      kk: '13 Ақпан, 2026'
    },
    title: {
      en: 'Collective exhibition of the Children\'s Art School - UNESCO Club of Taldykorgan dedicated to the 90th anniversary of Issatay Issabayev',
      ru: 'Коллективная выставка Детской художественной школы - Клуба ЮНЕСКО города Талдыкорган к 90-летию со дня рождения Исатая Исабаева',
      kk: 'Исатай Исабаевтың 90 жылдығына арналған Талдықорған қаласының Балалар көркемсурет мектебі - ЮНЕСКО клубының ұжымдық көрмесі'
    },
    content: {
      en: 'Fine Arts Gallery of Taldykorgan',
      ru: 'Галерея изобразительного искусства г. Талдыкорган',
      kk: 'Талдықорған қаласының бейнелеу өнері галереясы'
    }
  },
  {
    id: 5,
    date: {
      en: '2019',
      ru: '2019',
      kk: '2019'
    },
    title: {
      en: '58th Venice Biennale. Rhythms of the Kazakh Steppe: Graphic Art of Kazakhstan',
      ru: '58-Биеннале в Венеции. Ритмы казахской степи: Графическое искусство Казахстана',
      kk: '58-ші Венеция биенналесі. Қазақ даласының ырғақтары: Қазақстанның графикалық өнері'
    },
    content: {
      en: 'Venice, Italy',
      ru: 'Венеция, Италия',
      kk: 'Венеция, Италия'
    }
  }
];

const News = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedText = (item: any) => {
    if (i18n.language.startsWith('ru')) return item.ru;
    if (i18n.language.startsWith('kk')) return item.kk;
    return item.en;
  };

  return (
    <div className="min-h-screen py-20 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--app-bg)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="incised-text mb-12 block">{t('news.label')}</span>
          <h1 className="text-6xl lg:text-8xl font-serif font-black tracking-tighter mb-24 leading-none" style={{ color: 'var(--app-text)' }}>
            {t('news.title')}
          </h1>

          <div className="space-y-24">
            {newsItems.map((item, i) => (
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
                    <span className="font-serif italic text-2xl block mb-2" style={{ color: 'var(--app-text)' }}>
                      {getLocalizedText(item.date)}
                    </span>
                    <div className="w-8 h-px" style={{ backgroundColor: 'var(--card-border)' }} />
                  </div>
                  <div className="md:w-3/4">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-3 group/link">
                        <h2 className="text-3xl font-serif mb-6 group-hover:opacity-50 transition-opacity leading-tight" style={{ color: 'var(--app-text)' }}>
                          {getLocalizedText(item.title)}
                        </h2>
                        <ExternalLink size={20} className="mt-2 flex-shrink-0 transition-opacity opacity-30 group-hover:opacity-100" style={{ color: 'var(--app-text)' }} />
                      </a>
                    ) : (
                      <h2 className="text-3xl font-serif mb-6 leading-tight" style={{ color: 'var(--app-text)' }}>
                        {getLocalizedText(item.title)}
                      </h2>
                    )}
                    <p className="text-lg leading-relaxed font-serif italic opacity-70" style={{ color: 'var(--app-text)' }}>
                      {getLocalizedText(item.content)}
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
