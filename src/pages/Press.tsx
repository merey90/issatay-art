import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const pressItems = [
  {
    id: 1,
    date: {
      en: 'Scientific Publication',
      ru: 'Научная публикация',
      kk: 'Ғылыми жарияланым'
    },
    title: {
      en: 'The Philosophy of the Stroke: Abai in the Graphics of I. Issabayev',
      ru: 'Философия штриха: Абай в графике И. Исабаева',
      kk: 'Штрих философиясы: Абай И. Исабаевтың графикасында'
    },
    content: {
      en: 'Scientific article exploring the artist\'s illustrations of Abai\'s works',
      ru: 'Научная статья, исследующая иллюстрации художника к произведениям Абая',
      kk: 'Суретшінің Абай шығармаларына жасаған иллюстрацияларын зерттейтін ғылыми мақала'
    },
    link: 'https://cyberleninka.ru/article/n/filosofiya-shtriha-abay-v-grafike-i-isabaeva/viewer'
  },
  {
    id: 2,
    date: {
      en: 'Online Exhibition',
      ru: 'Онлайн-выставка',
      kk: 'Онлайн көрме'
    },
    title: {
      en: 'A Memory from the Past for the Future',
      ru: 'Память из прошлого для будущего',
      kk: 'Болашаққа өткеннен естелік'
    },
    content: {
      en: 'Online exhibition of graphic works by the renowned Kazakh artist from the museum\'s collection',
      ru: 'Онлайн-выставка графических работ известного казахстанского художника из фондов музея',
      kk: 'Музейдің қор жиынтығындағы танымал қазақстандық суретшінің графикалық жұмыстарының онлайн көрмесі'
    },
    link: 'https://www.gov.kz/memleket/entities/kostanai-madeniet/press/news/details/125287'
  },
  {
    id: 3,
    date: {
      en: 'Zhas Alash',
      ru: 'Жас Алаш',
      kk: 'Жас Алаш'
    },
    title: {
      en: 'Issabayev: The Man Who Turned Words into Pictures',
      ru: 'Исабаев: Человек, превративший слова в картины',
      kk: 'Сөзді суретке айналдырған Исабаев'
    },
    content: {
      en: 'Feature article in Zhas Alash newspaper',
      ru: 'Статья в газете «Жас Алаш»',
      kk: '«Жас Алаш» газетіндегі мақала'
    },
    link: 'https://zhasalash.kz/amp/sozd-suretke-aynaldirgan-isabaev-d62859/'
  },
  {
    id: 4,
    date: {
      en: 'Qazaq Adebieti',
      ru: 'Қазақ Әдебиеті',
      kk: 'Қазақ Әдебиеті'
    },
    title: {
      en: 'The Artist\'s Exhibition Opens',
      ru: 'Открывается выставка художника',
      kk: 'Суретші көрмесі ашылады'
    },
    content: {
      en: 'News coverage in Qazaq Adebieti newspaper',
      ru: 'Новостной репортаж в газете «Қазақ Әдебиеті»',
      kk: '«Қазақ Әдебиеті» газетіндегі жаңалықтар'
    },
    link: 'https://qazaqadebieti.kz/7363/suretshi-k-rmesi-ashylady'
  },
  {
    id: 5,
    date: {
      en: 'May 13, 2019',
      ru: '13 Мая 2019',
      kk: '13 Мамыр 2019'
    },
    title: {
      en: 'Kazakhstan at the 58th Venice Biennale',
      ru: 'Казахстан на 58-й Венецианской биеннале',
      kk: 'Қазақстан 58-ші Венеция биенналесінде'
    },
    content: {
      en: 'Forbes.kz coverage of the national pavilion featuring graphic arts',
      ru: 'Освещение Forbes.kz национального павильона с графическим искусством',
      kk: 'Графикалық өнер ұсынылған ұлттық павильон туралы Forbes.kz репортажы'
    },
    link: 'https://m.forbes.kz/news/2019/05/13/newsid_199059'
  },
  {
    id: 6,
    date: {
      en: '2019',
      ru: '2019',
      kk: '2019'
    },
    title: {
      en: 'Rhythms of the Kazakh Steppe at the Venice Biennale',
      ru: 'Ритмы казахской степи на Венецианской биеннале',
      kk: 'Венеция биенналесіндегі қазақ даласының ырғақтары'
    },
    content: {
      en: 'Report on Kazakhstan\'s participation in the 58th Venice Biennale',
      ru: 'Репортаж об участии Казахстана в 58-й Венецианской биеннале',
      kk: 'Қазақстанның 58-ші Венеция биенналесіне қатысуы туралы репортаж'
    },
    link: 'http://www.oacc.ieaexport.eu/notizia/52/Ritmi-della-Steppa-Kazaka-tra-batyri-e-gondole%2C-il-Kazakhstan-alla-Biennale-di-Venezia-Il-Reportage-'
  },
  {
    id: 7,
    date: {
      en: 'Kazakhstanskaya Pravda',
      ru: 'Казахстанская правда',
      kk: 'Казахстанская правда'
    },
    title: {
      en: 'Publications about Issatay Issabayev',
      ru: 'Публикации об Исатаи Исабаеве',
      kk: 'Исатай Исабаев туралы жарияланымдар'
    },
    content: {
      en: 'Articles and news in Kazakhstanskaya Pravda',
      ru: 'Статьи и новости в Казахстанской правде',
      kk: '«Казахстанская правда» газетіндегі мақалалар мен жаңалықтар'
    },
    link: 'https://kazpravda.kz/t/%D0%B8%D1%81%D0%B0%D1%82%D0%B0%D0%B9-%D0%B8%D1%81%D0%B0%D0%B1%D0%B0%D0%B5%D0%B2'
  }
];

const Press = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedText = (item: any) => {
    if (i18n.language.startsWith('ru')) return item.ru;
    if (i18n.language.startsWith('kk')) return item.kk;
    return item.en;
  };

  return (
    <div className="min-h-screen py-20 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--app-bg)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="incised-text mb-12 block">{t('press.label')}</span>
          <h1 className="text-6xl lg:text-8xl font-serif font-black tracking-tighter mb-24 leading-none" style={{ color: 'var(--app-text)' }}>
            {t('press.title')}
          </h1>

          <div className="grid grid-cols-1 gap-12">
            {pressItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 border rounded-sm transition-all group shadow-sm"
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                  <div>
                    <span className="incised-text mb-2 block">{getLocalizedText(item.date)}</span>
                    <h2 className="text-3xl font-serif leading-tight group-hover:opacity-60 transition-opacity" style={{ color: 'var(--app-text)' }}>{getLocalizedText(item.title)}</h2>
                  </div>
                </div>
                <p className="text-lg leading-relaxed font-serif italic mb-10 max-w-3xl opacity-70" style={{ color: 'var(--app-text)' }}>
                  "{getLocalizedText(item.content)}"
                </p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="incised-text hover:opacity-100 transition-opacity flex items-center gap-2" style={{ color: 'var(--app-text)', opacity: 0.4 }}>
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
