export interface ScheduleItem {
  time: string;
  speaker: { kk: string; ru: string; en: string };
  topic?: { kk: string; ru: string; en: string };
  bio?: { kk: string; ru: string; en: string };
}

export interface Event {
  id: string;
  title: { kk: string; ru: string; en: string };
  date: string;
  status: 'upcoming' | 'past';
  coverImage?: string;
  description?: { kk: string; ru: string; en: string };
  onlineLink?: string;
  onlineInfo?: { kk: string; ru: string; en: string };
  schedules?: ScheduleItem[];
}

export const eventsData: Event[] = [
  {
    id: 'round-table-1',
    title: {
      ru: 'Круглый стол “Исатай Исабаев: Художественное наследие”',
      en: 'Round table “Issatay Issabayev: Artistic Heritage”',
      kk: 'Дөңгелек үстел “Исатай Исабаев: Көркем мұра”'
    },
    date: '29.04.2026',
    status: 'upcoming',
    coverImage: 'https://firebasestorage.googleapis.com/v0/b/issatay-art.firebasestorage.app/o/images%2Fkobylandy%20batyr.jpg?alt=media&token=7150c0dc-8f13-45e7-b621-900198906a9a',
    description: {
      ru: 'Посвящен осмыслению художественного наследия Исатая Исабаева: его роли в формировании казахстанской национальной художественной школы, значению его творчества в современном культурном контексте, а также вопросам сохранения, исследования и популяризации его работ в Казахстане и за рубежом.',
      en: 'Dedicated to conceptualizing the artistic heritage of Issatay Issabayev: his role in shaping the Kazakh national art school, the significance of his work in the contemporary cultural context, as well as issues of preserving, researching and popularizing his works in Kazakhstan and abroad.',
      kk: 'Исатай Исабаевтың көркем мұрасын ұғынуға: оның қазақстандық ұлттық көркемсурет мектебін қалыптастырудағы рөліне, оның шығармашылығының заманауи мәдени контекстегі маңызына, сондай-ақ оның еңбектерін Қазақстанда және шетелде сақтау, зерттеу және дәріптеу мәселелеріне арналған.'
    },
    onlineLink: 'https://us06web.zoom.us/j/89402757653?pwd=xMwGGLkDorP6WJaXsXoKjXl4ExXsfi.1',
    onlineInfo: {
      ru: 'Ссылка для подключения к круглому столу онлайн.\nНачало круглого стола в 15.00 (время Алматы, Казахстан)',
      en: 'Link to join the round table online.\nThe round table starts at 15.00 (Almaty time, Kazakhstan)',
      kk: 'Дөңгелек үстелге онлайн қосылу сілтемесі.\nДөңгелек үстелдің басталуы сағат 15.00-де (Алматы уақыты бойынша, Қазақстан)'
    },
    schedules: [
      {
        time: '15.00-15.04',
        speaker: {
          ru: 'Исабаева Алия Исатаевна',
          en: 'Aliya Issataykyzy Issabayeva',
          kk: 'Исабаева Әлия Исатайқызы'
        },
        topic: {
          ru: '“Актуализация наследия Исатая Исабаева”',
          en: '“Actualization of the legacy of Issatay Issabayev”',
          kk: '“Исатай Исабаев мұрасын өзектендіру”'
        },
        bio: {
          ru: 'Музыкант, дочь Исатая Исабаева.',
          en: 'Musician, daughter of Issatay Issabayev.',
          kk: 'Музыкант, Исатай Исабаевтың қызы.'
        }
      },
      {
        time: '15.04-15.08',
        speaker: {
          ru: 'Жубаниязов Умирбек Орынбасарович',
          en: 'Umirbek Orynbassarovich Zhubaniyazov',
          kk: 'Жұбаниязов Өмірбек Орынбасарұлы'
        },
        topic: {
          ru: '“Большой спектр освоения инструментов графики и живописи в творчестве Исатая Исабаева”',
          en: '“A broad spectrum of mastering graphic and painting tools in the works of Issatay Issabayev”',
          kk: '“Исатай Исабаев шығармашылығындағы графика және кескіндеме құралдарын игерудің кең ауқымы”'
        },
        bio: {
          ru: 'Заслуженный деятель Республики Казахстан, Председатель Правления Союза художников Республики Казахстан.',
          en: 'Honored Figure of the Republic of Kazakhstan, Chairman of the Board of the Union of Artists of the Republic of Kazakhstan.',
          kk: 'Қазақстан Республикасының еңбек сіңірген қайраткері, Қазақстан Республикасы Суретшілер одағы басқармасының төрағасы.'
        }
      },
      {
        time: '15.08-15.12',
        speaker: {
          ru: 'Ли Камилла Витальевна',
          en: 'Kamilla Vitalyevna Lee',
          kk: 'Ли Камилла Витальевна'
        },
        topic: {
          ru: '“Исатай Исабаев в контексте развития национальной школы изобразительного искусства Казахстана”',
          en: '“Issatay Issabayev in the context of the development of the national fine arts school of Kazakhstan”',
          kk: '“Исатай Исабаев Қазақстанның ұлттық бейнелеу өнері мектебінің даму контекстінде”'
        },
        bio: {
          ru: 'Искусствовед, заслуженный деятель Казахстана, член Международной ассоциации художественных критиков AICA при ЮНЕСКО, член Международной литературно-художественной ассоциации ALAI, секретарь Союза художников РК.',
          en: 'Art critic, Honored Figure of Kazakhstan, Member of the International Association of Art Critics AICA at UNESCO, Member of the International Literary and Artistic Association ALAI, Secretary of the Union of Artists of the RK.',
          kk: 'Өнертанушы, Қазақстанның еңбек сіңірген қайраткері, ЮНЕСКО жанындағы AICA Халықаралық көркем сыншылар қауымдастығының мүшесі, ALAI Халықаралық әдеби-көркем қауымдастығының мүшесі, ҚР Суретшілер одағының хатшысы.'
        }
      },
      {
        time: '15.12-15.16',
        speaker: {
          ru: 'Кобжанова Светлана Жумасултановна',
          en: 'Svetlana Zhumasultanovna Kobzhanova',
          kk: 'Қобжанова Светлана Жұмасұлтанқызы'
        },
        topic: {
          ru: '“О роли художественного образа в имиджевой политике государства. Международное продвижение казахстанского искусства: возможности и вызовы”',
          en: '“On the role of an artistic image in the image policy of the state. International promotion of Kazakhstani art: opportunities and challenges”',
          kk: '“Мемлекеттің имидждік саясатындағы көркем бейненің рөлі туралы. Қазақстан өнерін халықаралық ілгерілету: мүмкіндіктер мен сын-қатерлер”'
        },
        bio: {
          ru: 'Заслуженный деятель Республики Казахстан, кандидат искусствоведения, член Союза художников РК, член Международной ассоциации художественных критиков AICA при ЮНЕСКО, заместитель директора по науке Национального музея искусств Республики Казахстан имени А. Кастеева.',
          en: 'Honored Figure of the Republic of Kazakhstan, Candidate of Art History, Member of the Union of Artists of the RK, Member of the International Association of Art Critics AICA at UNESCO, Deputy Director for Science of the A. Kasteyev State Museum of Arts.',
          kk: 'Қазақстан Республикасының еңбек сіңірген қайраткері, өнертану кандидаты, ҚР Суретшілер одағының мүшесі, ЮНЕСКО жанындағы AICA Халықаралық көркем сыншылар қауымдастығының мүшесі, Ә. Қастеев атындағы ҚР Мемлекеттік өнер музейінің ғылым жөніндегі орынбасары.'
        }
      },
      {
        time: '15.16-15.20',
        speaker: {
          ru: 'Байгутов Карим Алимханович',
          en: 'Karim Alimkhanovich Baigutov',
          kk: 'Байғұтов Кәрім Әлімханұлы'
        },
        topic: {
          ru: '“Возрождение наследия национальной графики через подход Design Thinking: творчество Исатая Исабаева и интерпретация казахской мифологии в художественном образовании”',
          en: '“Modernization of national graphics heritage through the Design Thinking approach: the work of Issatay Issabayev and the interpretation of Kazakh mythology in art education”',
          kk: '“Design Thinking тәсілі арқылы ұлттық графика мұрасын жаңғырту: Исатай Исабаев шығармашылығы және қазақ мифологиясының көркем білімдегі интерпретациясы”'
        },
        bio: {
          ru: 'Доктор философии PhD, декан факультета искусств КазНПУ имени Абая.',
          en: 'Doctor of Philosophy (PhD), Dean of the Faculty of Arts at Abai KazNPU.',
          kk: 'PhD философия докторы, Абай атындағы ҚазҰПУ өнер факультетінің деканы.'
        }
      },
      {
        time: '15.20-15.24',
        speaker: {
          ru: 'Барманкулова Баян Карибаевна',
          en: 'Bayan Karibayevna Barmankulova',
          kk: 'Барманқұлова Баян Кәрібайқызы'
        },
        topic: {
          ru: '“Актуализация наследия Исатая Исабаева”',
          en: '“Actualization of the legacy of Issatay Issabayev”',
          kk: '“Исатай Исабаев мұрасын өзектендіру”'
        },
        bio: {
          ru: 'Искусствовед, историк искусства, критик, куратор, старший преподаватель Национальной академии искусств имени Т. Жургенова.',
          en: 'Art critic, art historian, curator, senior lecturer at the T. Zhurgenov Kazakh National Academy of Arts.',
          kk: 'Өнертанушы, өнер тарихшысы, сыншы, куратор, Т. Жүргенов атындағы Қазақ ұлттық өнер академиясының аға оқытушысы.'
        }
      },
      {
        time: '15.24-15.28',
        speaker: {
          ru: 'Ким Елизавета Михайловна',
          en: 'Yelizaveta Mikhailovna Kim',
          kk: 'Ким Елизавета Михайловна'
        },
        topic: {
          ru: '“Наследие Исабаева для молодых художников, кураторов и исследователей”',
          en: '“Issabayev’s legacy for young artists, curators and researchers”',
          kk: '“Жас суретшілер, кураторлар мен зерттеушілерге арналған Исабаев мұрасы”'
        },
        bio: {
          ru: 'Искусствовед, член Международной ассоциации художественных критиков AICA при ЮНЕСКО.',
          en: 'Art critic, Member of the International Association of Art Critics AICA at UNESCO.',
          kk: 'Өнертанушы, ЮНЕСКО жанындағы AICA Халықаралық көркем сыншылар қауымдастығының мүшесі.'
        }
      },
      {
        time: '15.28-15.32',
        speaker: {
          ru: 'Байдильда Бауыржан Нурбекович',
          en: 'Bauyrzhan Nurbekovich Baidilda',
          kk: 'Байділдә Бауыржан Нұрбекұлы'
        },
        topic: {
          ru: '“Суреткер”',
          en: '“Suretker”',
          kk: '“Суреткер”'
        },
        bio: {
          ru: 'Профессор, заслуженный деятель Казахстана, декан факультета «Кескіндеме, мүсін және дизайн».',
          en: 'Professor, Honored Figure of Kazakhstan, Dean of the Faculty of "Painting, Sculpture and Design".',
          kk: 'Профессор, Қазақстанның еңбек сіңірген қайраткері, «Кескіндеме, мүсін және дизайн» факультетінің деканы.'
        }
      },
      {
        time: '15.36-15.40',
        speaker: {
          ru: 'Жадайбаев Амир Жалынович',
          en: 'Amir Zhalynovich Zhadaibayev',
          kk: 'Жадайбаев Әмір Жалынұлы'
        },
        topic: {
          ru: '“Сохранение наследия художника: музейные коллекции, архивы, реставрация”',
          en: '“Preserving the artist’s legacy: museum collections, archives, restoration”',
          kk: '“Суретші мұрасын сақтау: музей топтамалары, мұрағаттар, реставрация”'
        },
        bio: {
          ru: 'Кандидат искусствоведения, ведущий научный сотрудник отдела «Қазақстан бейнелеу өнері» Национального музея искусств Республики Казахстан имени А. Кастеева.',
          en: 'Candidate of Art History, Leading Researcher of the "Fine Arts of Kazakhstan" Department at the A. Kasteyev State Museum of Arts.',
          kk: 'Өнертану кандидаты, Ә. Қастеев атындағы ҚР Мемлекеттік өнер музейінің «Қазақстан бейнелеу өнері» бөлімінің жетекші ғылыми қызметкері.'
        }
      },
      {
        time: '15.40-15.44',
        speaker: {
          ru: 'Косай Ренат Кадырович',
          en: 'Renat Kadyrovich Kosai',
          kk: 'Қосай Ренат Қадырұлы'
        },
        topic: {
          ru: '“Цифровизация художественного наследия: онлайн-архивы, базы данных, виртуальные выставки”',
          en: '“Digitalization of artistic heritage: online archives, databases, virtual exhibitions”',
          kk: '“Көркем мұраны цифрландыру: онлайн-мұрағаттар, деректер базалары, виртуалды көрмелер”'
        },
        bio: {
          ru: 'Кинорежиссёр, кинооператор, член Союза кинематографистов РК, магистр искусствоведения, доцент кафедры звукорежиссуры и операторского искусства.',
          en: 'Film director, cinematographer, member of the Union of Cinematographers of the RK, Master of Arts, Associate Professor of the Department of Sound Engineering and Cinematography.',
          kk: 'Кинорежиссер, кинооператор, ҚР Кинематографистер одағының мүшесі, өнертану магистрі, дыбыс режиссурасы және операторлық өнер кафедрасының доценті.'
        }
      },
      {
        time: '15.44-15.48',
        speaker: {
          ru: 'Есенбаев Оразбек',
          en: 'Orazbek Yesenbayev',
          kk: 'Есенбаев Оразбек'
        },
        topic: {
          ru: '“Исатай Исабаев и графическая школа Казахстана”',
          en: '“Issatay Issabayev and the graphic school of Kazakhstan”',
          kk: '“Исатай Исабаев және Қазақстанның графика мектебі”'
        },
        bio: {
          ru: 'Живописец и график, член Союза художников Республики Казахстана.',
          en: 'Painter and graphic artist, member of the Union of Artists of the Republic of Kazakhstan.',
          kk: 'Кескіндемеші және график, Қазақстан Республикасы Суретшілер одағының мүшесі.'
        }
      },
      {
        time: '15.48-15.52',
        speaker: {
          ru: 'Кенжебаева Лейла Абдыганиевна',
          en: 'Leila Abdyganiyevna Kenzhebayeva',
          kk: 'Кенжебаева Лейла Әбдіғаниқызы'
        },
        topic: {
          ru: '“Национальное познание в графике Исатая Исабаева”',
          en: '“National identity in the graphics of Issatay Issabayev”',
          kk: '“Исатай Исабаев графикасындағы ұлттық таным”'
        },
        bio: {
          ru: 'Магистр искусствоведения, старший преподаватель кафедры «История и теория изобразительного искусства» факультета искусствоведения, обладатель нагрудного знака «Мәдениет саласының үздігі».',
          en: 'Master of Art History, Senior Lecturer at the "History and Theory of Fine Arts" Department, holder of the "Excellence in Culture" badge.',
          kk: 'Өнертану магистрі, өнертану факультетінің «Бейнелеу өнерінің тарихы және теориясы» кафедрасының аға оқытушысы, «Мәдениет саласының үздігі» төсбелгісінің иегері.'
        }
      },
      {
        time: '15.52-15.56',
        speaker: {
          ru: 'Исабаева Естыбала Нурышевна',
          en: 'Yestybala Nuryshevna Issabayeva',
          kk: 'Исабаева Естібала Нұрышқызы'
        },
        topic: {
          ru: '“Среда формирования художника и работа над книгой и «Жазушы»”',
          en: '“The environment of the artist’s formation and work on the book and «Zhazushy»”',
          kk: '“Суретшінің қалыптасу ортасы және кітап пен «Жазушы» баспасымен жұмысы”'
        },
        bio: {
          ru: 'Сестра Исатая Исабаева.',
          en: 'Sister of Issatay Issabayev.',
          kk: 'Исатай Исабаевтың қарындасы.'
        }
      },
      {
        time: '15.56-16.00',
        speaker: {
          ru: 'Исабаева Галия Исатаевна',
          en: 'Galiya Issataykyzy Issabayeva',
          kk: 'Исабаева Ғалия Исатайқызы'
        },
        topic: {
          ru: '“Исатай Исабаев и его современники”',
          en: '“Issatay Issabayev and his contemporaries”',
          kk: '“Исатай Исабаев және оның замандастары”'
        },
        bio: {
          ru: 'Художник прикладного искусства, дочь Исатая Исабаева.',
          en: 'Applied arts artist, daughter of Issatay Issabayev.',
          kk: 'Қолданбалы өнер суретшісі, Исатай Исабаевтың қызы.'
        }
      },
      {
        time: '16.00-16.04',
        speaker: {
          ru: 'Инга Латсе',
          en: 'Inga Lace',
          kk: 'Инга Латсе'
        },
        topic: {
          ru: '“Частные коллекции и музейные инициативы в сохранении наследия художника”',
          en: '“Private collections and museum initiatives in preserving the artist\'s legacy”',
          kk: '“Суретші мұрасын сақтаудағы жеке топтамалар және музейлік бастамалар”'
        },
        bio: {
          ru: 'Международный исследователь искусства, главный куратор Almaty Museum of Arts.',
          en: 'International art researcher, chief curator at the Almaty Museum of Arts.',
          kk: 'Халықаралық өнер зерттеушісі, Almaty Museum of Arts бас кураторы.'
        }
      },
      {
        time: '16.04-16.08',
        speaker: {
          ru: 'Жубанова Гульнур Алпысбайқызы',
          en: 'Gulnur Alpysbaykyzy Zhubanova',
          kk: 'Жұбанова Гүлнұр Алпысбайқызы'
        },
        topic: {
          ru: '“Популяризация творчества Исатая Исабаева в Казахстане: выставки, образовательные программы, медиа”',
          en: '“Popularization of Issatay Issabayev’s work in Kazakhstan: exhibitions, educational programs, media”',
          kk: '“Исатай Исабаев шығармашылығын Қазақстанда дәріптеу: көрмелер, білім беру бағдарламалары, медиа”'
        },
        bio: {
          ru: 'Руководитель отдела “Изобразительное искусство Казахстана” Национального музея искусств имени Абылхана Кастеева.',
          en: 'Head of the "Fine Arts of Kazakhstan" Department at the A. Kasteyev State Museum of Arts.',
          kk: 'Әбілхан Қастеев атындағы Мемлекеттік өнер музейінің «Қазақстан бейнелеу өнері» бөлімінің басшысы.'
        }
      },
      {
        time: '16.08-16.12',
        speaker: {
          ru: 'Туленова Меруерт Кайыргазиевна',
          en: 'Meruert Kaiyrgaziyevna Tulenova',
          kk: 'Төленова Меруерт Қайырғазықызы'
        },
        topic: {
          ru: '“Наследие Исатая Исабаева: стратегии сохранения, исследования и популяризации творчества художника в Казахстане и за рубежом”',
          en: '“The legacy of Issatay Issabayev: strategies for the preservation, study, and popularization of the artist\'s work in Kazakhstan and abroad”',
          kk: '“Исатай Исабаев мұрасы: Қазақстанда және шетелде суретші шығармашылығын сақтау, зерттеу және дәріптеу стратегиялары”'
        },
        bio: {
          ru: 'Кандидат искусствоведения, культуролог, музыкант, куратор, внучка Исатая Исабаева.',
          en: 'Candidate of Art History, culturologist, musician, curator, granddaughter of Issatay Issabayev.',
          kk: 'Өнертану кандидаты, мәдениеттанушы, музыкант, куратор, Исатай Исабаевтың немересі.'
        }
      },
      {
        time: '16.12-16.30',
        speaker: {
          ru: 'Открытая дискуссия',
          en: 'Open discussion',
          kk: 'Ашық пікірталас'
        }
      }
    ]
  }
];
