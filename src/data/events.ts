export interface ScheduleItem {
  time: string;
  speaker: { kk: string; ru: string; en: string };
  topic: { kk: string; ru: string; en: string };
}

export interface Event {
  id: string;
  title: { kk: string; ru: string; en: string };
  date: string;
  status: 'upcoming' | 'past';
  coverImage?: string;
  description?: { kk: string; ru: string; en: string };
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
      ru: 'Обсуждение художественного наследия мастера, его роли в развитии национальной школы живописи и графики.',
      en: 'Discussion of the master’s artistic heritage, his role in the development of the national school of painting and graphics.',
      kk: 'Шебердің көркем мұрасы мен оның ұлттық кескіндеме және графика мектебінің дамуындағы рөлі туралы талқылау.'
    },
    schedules: [
      {
        time: '15.08-15.12',
        speaker: {
          ru: 'Жубаниязов Умирбек Орынбасарович',
          en: 'Umirbek Orynbassarovich Zhubaniyazov',
          kk: 'Жұбаниязов Өмірбек Орынбасарұлы'
        },
        topic: {
          ru: '“Большой спектр освоение инструментов графики и живописи Исатая Исабаева”',
          en: '“A broad spectrum of mastering the graphic and painting tools of Issatay Issabayev”',
          kk: '“Исатай Исабаевтың графикалық және кескіндеме құралдарын игеруінің кең ауқымы”'
        }
      },
      {
        time: '15.12-15.16',
        speaker: {
          ru: 'Ли Камилла Витальевна',
          en: 'Kamilla Vitalyevna Lee',
          kk: 'Ли Камилла Витальевна'
        },
        topic: {
          ru: '“Исатай Исабаев в контексте развития национальной школы изобразительного искусства Казахстана”',
          en: '“Issatay Issabayev in the context of the development of the national fine arts school of Kazakhstan”',
          kk: '“Исатай Исабаев Қазақстанның ұлттық бейнелеу өнері мектебінің даму контекстінде”'
        }
      }
    ]
  }
];
