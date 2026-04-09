import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        biography: 'Biography',
        gallery: 'Gallery',
        news: 'News',
        press: 'Press',
      },
      footer: {
        archive: 'Issatay Issabayev Archive',
        description: 'Preserving the legacy of a People\'s Artist of Kazakhstan.',
        copyright: '© 2026 Issatay Issabayev',
      },
      home: {
        title_top: 'ISSATAY',
        title_bottom: 'ISSABAYEV',
        subtitle: 'The master of the line, the soul of the steppe. A luminary of Kazakhstan\'s national graphics.',
        view_gallery: 'View Gallery',
        the_story: 'The Story',
        featured_work: 'Featured Work',
        legacy_label: 'Legacy',
        quote: '"Art is not just a reflection of reality, but a profound dialogue between the artist\'s soul and the history of his people."',
        archive_title: 'The Archive',
        archive_desc: 'A curated collection of graphic works and paintings.',
        news_title: 'Latest News',
        news_desc: 'Exhibitions, events, and new archival discoveries.',
        press_title: 'Media & Press',
        press_desc: 'Critical essays and interviews from the masters career.',
        explore: 'Explore',
        read_more: 'Read More',
        view_press: 'View Press',
      },
      biography: {
        label: 'The Life of a Master',
        title: 'BIOGRAPHY',
        milestones: 'Key Milestones',
        studio_caption: 'The artist in his studio, 1980',
      },
      gallery: {
        label: 'The Archive',
        title: 'GALLERY',
        view_album: 'View Album',
        view_museum: 'Visit Museum',
        internal_albums: 'Digital Archive',
        external_museums: 'Museum Collections',
        open_album: 'Open Album',
      },
      album: {
        back: 'Back to Gallery',
        loading: 'Loading...',
        audio_missing: 'Audio track not available for this language yet.',
      },
      news: {
        label: 'Updates',
        title: 'NEWS',
      },
      press: {
        label: 'Media Coverage',
        title: 'PRESS',
        read_full: 'Read Full Article',
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        biography: 'Биография',
        gallery: 'Галерея',
        news: 'Новости',
        press: 'Пресса',
      },
      footer: {
        archive: 'Архив Исатая Исабаева',
        description: 'Сохранение наследия Народного художника Казахстана.',
        copyright: '© 2026 Исатай Исабаев',
      },
      home: {
        title_top: 'ИСАТАЙ',
        title_bottom: 'ИСАБАЕВ',
        subtitle: 'Мастер линии, душа степи. Корифей национальной графики Казахстана.',
        view_gallery: 'Смотреть галерею',
        the_story: 'История',
        featured_work: 'Избранная работа',
        legacy_label: 'Наследие',
        quote: '"Искусство — это не просто отражение реальности, а глубокий диалог между душой художника и историей его народа."',
        archive_title: 'Архив',
        archive_desc: 'Кураторская коллекция графических работ и картин.',
        news_title: 'Последние новости',
        news_desc: 'Выставки, события и новые архивные открытия.',
        press_title: 'СМИ и пресса',
        press_desc: 'Критические эссе и интервью из карьеры мастера.',
        explore: 'Исследовать',
        read_more: 'Читать далее',
        view_press: 'Смотреть прессу',
      },
      biography: {
        label: 'Жизнь мастера',
        title: 'БИОГРАФИЯ',
        milestones: 'Ключевые вехи',
        studio_caption: 'Художник в своей мастерской, 1980',
      },
      gallery: {
        label: 'Архив',
        title: 'ГАЛЕРЕЯ',
        view_album: 'Смотреть альбом',
        view_museum: 'Посетить музей',
        internal_albums: 'Цифровой архив',
        external_museums: 'Музейные коллекции',
        open_album: 'Открыть альбом',
      },
      album: {
        back: 'Назад в галерею',
        loading: 'Загрузка...',
        audio_missing: 'Аудиозапись для этого языка пока недоступна.',
      },
      news: {
        label: 'Обновления',
        title: 'НОВОСТИ',
      },
      press: {
        label: 'Освещение в СМИ',
        title: 'ПРЕССА',
        read_full: 'Читать статью полностью',
      },
    },
  },
  kk: {
    translation: {
      nav: {
        home: 'Басты бет',
        biography: 'Өмірбаян',
        gallery: 'Галерея',
        news: 'Жаңалықтар',
        press: 'Баспасөз',
      },
      footer: {
        archive: 'Исатай Исабаев мұрағаты',
        description: 'Қазақстанның Халық суретшісінің мұрасын сақтау.',
        copyright: '© 2026 Исатай Исабаев',
      },
      home: {
        title_top: 'ИСАТАЙ',
        title_bottom: 'ИСАБАЕВ',
        subtitle: 'Сызықтың хас шебері, ұлы даланың рухын танытқан, қазақ ұлттық графика өнерінің көрнекті тұлғасы.',
        view_gallery: 'Галереяны көру',
        the_story: 'Тарих',
        featured_work: 'Таңдаулы жұмыс',
        legacy_label: 'Мұра',
        quote: '"Өнер — бұл жай ғана шындықтың көрінісі емес, суретшінің жаны мен өз халқының тарихы арасындағы терең диалог."',
        archive_title: 'Мұрағат',
        archive_desc: 'Графикалық жұмыстар мен кескіндемелердің жинағы.',
        news_title: 'Соңғы жаңалықтар',
        news_desc: 'Көрмелер, іс-шаралар және жаңа мұрағаттық жаңалықтар.',
        press_title: 'БАҚ және баспасөз',
        press_desc: 'Шебердің мансабындағы сыни эсселер мен сұхбаттар.',
        explore: 'Зерттеу',
        read_more: 'Толығырақ',
        view_press: 'Баспасөзді көру',
      },
      biography: {
        label: 'Шебердің өмірі',
        title: 'ӨМІРБАЯН',
        milestones: 'Негізгі кезеңдер',
        studio_caption: 'Суретші шеберханасында, 1980',
      },
      gallery: {
        label: 'Мұрағат',
        title: 'ГАЛЕРЕЯ',
        view_album: 'Альбомды көру',
        view_museum: 'Мұражайға бару',
        internal_albums: 'Цифрлық мұрағат',
        external_museums: 'Мұражай топтамалары',
        open_album: 'Альбомды ашу',
      },
      album: {
        back: 'Галереяға оралу',
        loading: 'Жүктелуде...',
        audio_missing: 'Бұл тілдегі аудиожазба әлі қолжетімді емес.',
      },
      news: {
        label: 'Жаңартулар',
        title: 'ЖАҢАЛЫҚТАР',
      },
      press: {
        label: 'БАҚ-та жариялануы',
        title: 'БАСПАСӨЗ',
        read_full: 'Мақаланы толық оқу',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
