'use strict';

/* ── Mock Data ─────────────────────────────────────────── */
const ARTICLES = [
  {
    id: 1,
    category: 'world',
    categoryLabel: 'Мир',
    isBreaking: true,
    isFeatured: true,
    title: 'G7 согласовала новый пакет санкций на фоне обострения конфликта на Ближнем Востоке',
    lead: 'Лидеры семи ведущих экономик договорились об ужесточении торговых ограничений, затрагивающих энергетику, финансы и высокие технологии.',
    author: 'Алексей Романов',
    authorTitle: 'Reuters, Женева',
    publishedAt: new Date(Date.now() - 14 * 60 * 1000),
    readingTime: 5,
    imageCaption: 'Встреча G7 в Женеве. Фотограф: Pool / Reuters',
    tags: ['G7', 'Санкции', 'Ближний Восток', 'Дипломатия'],
    body: [
      { type: 'p', text: 'ЖЕНЕВА, 26 июня (Reuters) — Лидеры стран Большой семёрки по итогам двухдневного саммита в Женеве достигли соглашения о введении расширенного пакета санкций, направленных против государств, причастных к эскалации конфликта в ближневосточном регионе. Об этом сообщил официальный представитель Европейского совета.' },
      { type: 'quote', text: 'Мы едины в своей позиции: любая попытка дестабилизировать международный порядок встретит скоординированный ответ G7.' },
      { type: 'p', text: 'Согласно принятым решениям, под действие ограничительных мер подпадут более 200 физических и юридических лиц, а также будут введены секторальные санкции против нефтяной отрасли и ряда финансовых институтов. Параллельно страны-участницы подтвердили готовность выделить дополнительную гуманитарную помощь в размере $4,5 млрд.' },
      { type: 'h2', text: 'Разногласия по срокам' },
      { type: 'p', text: 'Источники в делегациях Германии и Франции сообщили Reuters, что переговоры затянулись из-за споров о поэтапности введения ограничений. Берлин настаивал на постепенном подходе с возможностью дипломатического выхода, тогда как США и Великобритания выступали за немедленные меры.' },
      { type: 'p', text: 'В итоговом коммюнике отдельным пунктом выделена тема ядерной безопасности: страны G7 призвали к немедленному возобновлению инспекций МАГАТЭ и предупредили о «серьёзных последствиях» в случае нарушения режима нераспространения.' },
      { type: 'h2', text: 'Реакция рынков' },
      { type: 'p', text: 'Фьючерсы на нефть марки Brent в четверг утром подорожали на 2,3% на фоне новостей о возможном ограничении поставок. Европейские фондовые индексы открылись снижением: Stoxx 600 потерял 0,8%, немецкий DAX — 1,1%.' },
      { type: 'p', text: 'Следующий раунд переговоров намечен на сентябрь в Риме. Итоговое коммюнике саммита будет опубликовано в полном объёме до конца дня.' },
    ],
    related: [3, 6, 9],
  },
  {
    id: 2,
    category: 'business',
    categoryLabel: 'Бизнес',
    isBreaking: false,
    isFeatured: false,
    title: 'ФРС оставила ставку без изменений, сигнализировав о двух снижениях до конца года',
    lead: 'Комитет по открытым рынкам сохранил базовую ставку на уровне 4,25–4,5% и обновил прогноз, допустив два снижения в 2026 году.',
    author: 'Сьюзан Моррис',
    authorTitle: 'Reuters, Вашингтон',
    publishedAt: new Date(Date.now() - 2 * 3600 * 1000),
    readingTime: 4,
    imageCaption: 'Джером Пауэлл на пресс-конференции FOMC. Фотограф: Kevin Lamarque / Reuters',
    tags: ['ФРС', 'Процентные ставки', 'Инфляция', 'Экономика США'],
    body: [
      { type: 'p', text: 'ВАШИНГТОН, 26 июня (Reuters) — Федеральная резервная система США по итогам июньского заседания оставила ключевую процентную ставку в диапазоне 4,25–4,5% годовых, сославшись на устойчивость рынка труда и постепенное, но всё ещё недостаточное снижение инфляции.' },
      { type: 'p', text: 'Глава ФРС Джером Пауэлл на пресс-конференции заявил, что регулятор нуждается в дополнительных свидетельствах замедления ценового роста, прежде чем перейти к смягчению политики. Вместе с тем обновлённая точечная диаграмма показала, что большинство членов комитета ждут двух снижений ставки суммарно на 50 базисных пунктов до конца 2026 года.' },
      { type: 'quote', text: 'Мы готовы действовать решительно в обоих направлениях — при необходимости ускорить смягчение или, напротив, задержаться на текущем уровне дольше.' },
      { type: 'h2', text: 'Рынки приняли сигнал осторожно' },
      { type: 'p', text: 'Индекс S&P 500 по итогам торговой сессии прибавил 0,4%, тогда как доходность 10-летних казначейских облигаций опустилась до 4,21%. Доллар ослаб к корзине основных валют на 0,3%. Трейдеры теперь закладывают первое снижение ставки в сентябре с вероятностью около 68%, согласно данным инструмента CME FedWatch.' },
      { type: 'p', text: 'Следующее заседание FOMC запланировано на 29–30 июля. Июльские данные по инфляции (публикация 13 августа) станут ключевым ориентиром для оценки дальнейшей политики.' },
    ],
    related: [8, 10, 4],
  },
  {
    id: 3,
    category: 'tech',
    categoryLabel: 'Технологии',
    isBreaking: false,
    isFeatured: false,
    title: 'OpenAI представила GPT-5: тест на рассуждение впервые превысил средний балл врача',
    lead: 'Новая модель показывает результаты уровня эксперта в медицинских тестах и решает олимпиадные задачи по физике.',
    author: 'Джессика Лим',
    authorTitle: 'Reuters, Сан-Франциско',
    publishedAt: new Date(Date.now() - 4 * 3600 * 1000),
    readingTime: 5,
    imageCaption: '',
    tags: ['OpenAI', 'GPT-5', 'Искусственный интеллект', 'Большие модели'],
    body: [
      { type: 'p', text: 'САН-ФРАНЦИСКО, 26 июня (Reuters) — Компания OpenAI в четверг представила GPT-5 — языковую модель нового поколения, которая, по словам разработчиков, устанавливает новые ориентиры в способности к сложным рассуждениям, многошаговому планированию и интерпретации научных текстов.' },
      { type: 'p', text: 'В ходе тестирования на наборе задач американского медицинского лицензионного экзамена USMLE модель набрала 92 балла из 100 — выше среднего результата практикующих врачей (87 баллов). На олимпиадных задачах по физике уровня IPhO GPT-5 решила 78% заданий без подсказок, тогда как предыдущая GPT-4o справлялась лишь с 48%.' },
      { type: 'quote', text: 'Это не просто следующая версия — это качественный скачок в понимании структуры задачи.' },
      { type: 'h2', text: 'Что изменилось под капотом' },
      { type: 'p', text: 'OpenAI отказалась раскрывать детали архитектуры и объём обучающей выборки, однако упомянула о применении нового подхода к «масштабированию на этапе вывода»: модель самостоятельно решает, сколько шагов рассуждения выполнить до выдачи ответа, что позволяет тратить больше вычислений на по-настоящему сложные вопросы.' },
      { type: 'p', text: 'Доступ к GPT-5 получат сначала подписчики ChatGPT Plus и корпоративные клиенты — с 1 июля. API для разработчиков откроется 15 июля. Стоимость для конечных пользователей остаётся на уровне $20 в месяц для базовой подписки; профессиональный тариф с расширенным лимитом запросов составит $200 в месяц.' },
      { type: 'h2', text: 'Реакция конкурентов' },
      { type: 'p', text: 'Представитель Google DeepMind заявил, что компания «внимательно изучит» опубликованные бенчмарки. Anthropic пообещала «в ближайшие недели» ответить на релиз обновлением собственных моделей. Акции Microsoft (крупнейшего инвестора OpenAI) на премаркете прибавили 3,2%.' },
    ],
    related: [7, 2, 5],
  },
  {
    id: 4,
    category: 'science',
    categoryLabel: 'Наука',
    isBreaking: false,
    isFeatured: false,
    title: 'NASA подтвердило присутствие органических молекул в образцах с астероида Бенну',
    lead: 'Анализ образцов, доставленных миссией OSIRIS-REx, выявил аминокислоты и нуклеобазы — строительный материал жизни.',
    author: 'Карен Хьюз',
    authorTitle: 'Reuters, Хьюстон',
    publishedAt: new Date(Date.now() - 6 * 3600 * 1000),
    readingTime: 4,
    imageCaption: 'Образцы грунта с астероида Бенну. NASA / Reuters',
    tags: ['NASA', 'Астероид Бенну', 'OSIRIS-REx', 'Астробиология'],
    body: [
      { type: 'p', text: 'ХЬЮСТОН, 26 июня (Reuters) — Учёные NASA объявили, что в образцах грунта с астероида Бенну, доставленных на Землю миссией OSIRIS-REx в 2023 году, обнаружены органические соединения, включая несколько аминокислот и нуклеобазы — соединения, входящие в состав ДНК и РНК.' },
      { type: 'p', text: 'Находка не является прямым свидетельством внеземной жизни, однако подтверждает, что «строительный материал» биологических молекул широко распространён в Солнечной системе и мог попасть на раннюю Землю с метеоритами, внеся вклад в зарождение жизни.' },
      { type: 'quote', text: 'Бенну — своего рода молекулярная капсула времени, сохранившая химию формирования Солнечной системы четыре с половиной миллиарда лет назад.' },
      { type: 'h2', text: 'Детали анализа' },
      { type: 'p', text: 'Команда из 68 исследователей по всему миру изучала 4,7 грамма реголита (пылеобразного грунта). Идентифицированы 33 аминокислоты, из которых 14 входят в стандартный набор, используемый живыми организмами на Земле. Концентрация углерода оказалась вдвое выше, чем в наиболее богатых углеродом метеоритах ранее.' },
      { type: 'p', text: 'Исследование опубликовано в журнале Nature Astronomy. Следующим этапом станет зондирование астероида Апофис, запуск миссии OSIRIS-APEX к которому запланирован на 2029 год.' },
    ],
    related: [7, 3, 5],
  },
  {
    id: 5,
    category: 'sport',
    categoryLabel: 'Спорт',
    isBreaking: false,
    isFeatured: false,
    title: 'Реал Мадрид выиграл клубный чемпионат мира, обыграв «Флуминенсе» 3:0 в финале',
    lead: 'Мбаппе оформил дубль, Беллингем добавил третий. Испанский клуб стал первым трёхкратным победителем обновлённого турнира.',
    author: 'Педро Гомес',
    authorTitle: 'Reuters, Нью-Йорк',
    publishedAt: new Date(Date.now() - 10 * 3600 * 1000),
    readingTime: 3,
    imageCaption: 'Килиан Мбаппе празднует гол в финале. Фотограф: Mike Segar / Reuters',
    tags: ['Реал Мадрид', 'Клубный ЧМ', 'Мбаппе', 'Футбол'],
    body: [
      { type: 'p', text: 'НЬЮ-ЙОРК, 26 июня (Reuters) — «Реал Мадрид» выиграл клубный чемпионат мира 2026, в финале разгромив бразильский «Флуминенсе» со счётом 3:0 на стадионе MetLife в Нью-Йорке. Килиан Мбаппе записал в актив дубль (22-я и 58-я минуты), а Джуд Беллингем поставил точку на 74-й.' },
      { type: 'p', text: 'Испанский клуб стал первым трёхкратным победителем обновлённого турнира ФИФА с расширенным форматом 32 команд, дебютировавшего в 2021 году. Для Мбаппе финал стал 14-м голом в турнире — новый рекорд. Мяч он сохранил на память.' },
      { type: 'quote', text: 'Эта победа — для всех болельщиков по всему миру. «Реал» никогда не останавливается.' },
      { type: 'p', text: 'Выручка ФИФА от турнира превысила $1 млрд — впервые для клубного соревнования. Следующий клубный чемпионат мира пройдёт в 2029 году в Японии.' },
    ],
    related: [1, 6, 8],
  },
  {
    id: 6,
    category: 'world',
    categoryLabel: 'Мир',
    isBreaking: false,
    isFeatured: false,
    title: 'Саммит ООН по климату завершился соглашением о постепенном отказе от угля к 2035 году',
    lead: '120 стран подписали итоговую декларацию. Индия и Китай присоединились с оговорками об увеличенных сроках.',
    author: 'Нина Ван дер Берг',
    authorTitle: 'Reuters, Найроби',
    publishedAt: new Date(Date.now() - 18 * 3600 * 1000),
    readingTime: 4,
    imageCaption: 'Церемония подписания декларации в Найроби. Фотограф: Baz Ratner / Reuters',
    tags: ['Климат', 'ООН', 'Уголь', 'Зелёная энергетика'],
    body: [
      { type: 'p', text: 'НАЙРОБИ, 25 июня (Reuters) — Участники климатического саммита ООН в Найроби согласовали декларацию, обязывающую подписантов поэтапно отказаться от выработки электроэнергии на угольных электростанциях до 2035 года для развитых стран и до 2040-го — для развивающихся.' },
      { type: 'p', text: 'Итоговый документ подписали представители 120 государств. Китай и Индия — крупнейшие потребители угля — присоединились к декларации с оговоркой, позволяющей им перенести сроки ещё на пять лет при условии демонстрации прогресса в наращивании возобновляемых мощностей.' },
      { type: 'quote', text: 'Мы знаем, что этого недостаточно. Но это самый амбициозный консенсус, которого нам удалось достичь.' },
      { type: 'h2', text: 'Финансовый блок' },
      { type: 'p', text: 'Отдельным пунктом согласовано создание Климатического фонда справедливого перехода объёмом $200 млрд. Средства предназначены для компенсации потерь угольных регионов и переобучения шахтёров. Первые выплаты намечены на 2027 год.' },
    ],
    related: [1, 4, 7],
  },
  {
    id: 7,
    category: 'tech',
    categoryLabel: 'Технологии',
    isBreaking: false,
    isFeatured: false,
    title: 'Apple запускает iPhone 17 с первым собственным нейросетевым чипом A20 Bionic',
    lead: 'Новый чип в 2,4 раза быстрее предшественника в задачах ИИ-инференса. Стартовая цена осталась на уровне $999.',
    author: 'Мия Ямадa',
    authorTitle: 'Reuters, Купертино',
    publishedAt: new Date(Date.now() - 22 * 3600 * 1000),
    readingTime: 3,
    imageCaption: '',
    tags: ['Apple', 'iPhone 17', 'A20 Bionic', 'Смартфоны'],
    body: [
      { type: 'p', text: 'КУПЕРТИНО, 25 июня (Reuters) — Apple в среду представила iPhone 17 на ежегодной конференции WWDC, анонсировав чип A20 Bionic с выделенным нейросетевым процессором, способным выполнять 45 триллионов операций в секунду — вдвое больше, чем у Android-конкурентов, по данным компании.' },
      { type: 'p', text: 'Ключевые функции на базе чипа: локальная обработка всех запросов Apple Intelligence без отправки данных на сервер, генерация изображений в реальном времени и улучшенное распознавание голоса с разграничением говорящих.' },
      { type: 'p', text: 'Продажи стартуют 19 сентября. Базовая модель iPhone 17 оценена в $999, Pro Max — в $1,299. По оценкам аналитиков Wedbush, за первые выходные может быть продано 18–20 млн устройств.' },
    ],
    related: [3, 2, 10],
  },
  {
    id: 8,
    category: 'business',
    categoryLabel: 'Бизнес',
    isBreaking: false,
    isFeatured: false,
    title: 'Цены на нефть Brent достигли $94 на фоне сокращения добычи ОПЕК+ и роста спроса',
    lead: 'Картель подтвердил снижение квот на 1,2 млн баррелей в сутки. Аналитики JPMorgan допускают $100 до конца лета.',
    author: 'Родерик Мэтьюз',
    authorTitle: 'Reuters, Лондон',
    publishedAt: new Date(Date.now() - 26 * 3600 * 1000),
    readingTime: 3,
    imageCaption: 'Нефтяная платформа в Северном море. Фотограф: Toby Melville / Reuters',
    tags: ['ОПЕК+', 'Нефть', 'Brent', 'Энергетика'],
    body: [
      { type: 'p', text: 'ЛОНДОН, 25 июня (Reuters) — Фьючерсы на нефть марки Brent в четверг достигли отметки $94,20 за баррель — максимума за последние восемь месяцев, — после того как ОПЕК+ подтвердил продление добровольного сокращения добычи на 1,2 млн баррелей в сутки до конца третьего квартала.' },
      { type: 'p', text: 'Саудовская Аравия и Россия — ключевые игроки картеля — договорились о скоординированных мерах на фоне роста спроса из Азии: китайский импорт нефти в мае вырос на 12% год к году, достигнув рекордных 12,4 млн баррелей в день.' },
      { type: 'quote', text: 'Рынок структурно дефицитен. До конца лета возможен тест уровня $100.' },
      { type: 'p', text: 'Акции нефтяных мейджоров отреагировали ростом: ExxonMobil +2,1%, Shell +1,8%, TotalEnergies +1,6%. Авиакомпании, напротив, ушли в красную зону: United Airlines −3,4%, Lufthansa −2,9%.' },
    ],
    related: [2, 6, 1],
  },
  {
    id: 9,
    category: 'world',
    categoryLabel: 'Мир',
    isBreaking: false,
    isFeatured: false,
    title: 'Переговоры по ядерному соглашению с Ираном возобновились в Вене после годового перерыва',
    lead: 'Делегации США, ЕС и Ирана встретились в Австрии. Тегеран выдвинул три предварительных условия.',
    author: 'Арафат Салех',
    authorTitle: 'Reuters, Вена',
    publishedAt: new Date(Date.now() - 30 * 3600 * 1000),
    readingTime: 4,
    imageCaption: '',
    tags: ['Иран', 'Ядерная программа', 'СВПД', 'Дипломатия'],
    body: [
      { type: 'p', text: 'ВЕНА, 25 июня (Reuters) — После более чем годового перерыва в Вене стартовал новый раунд переговоров по возрождению «ядерной сделки» (СВПД). Участие принимают делегации США, Ирана и стран Евросоюза. Переговоры проходят на территории резиденции ООН под председательством европейского координатора.' },
      { type: 'p', text: 'По сведениям источников Reuters в европейских дипломатических кругах, Тегеран выдвинул три предварительных условия: частичное снятие санкций на нефтяной экспорт, разморозку $10 млрд иранских активов в зарубежных банках и гарантии, что будущая администрация США не выйдет из соглашения в одностороннем порядке.' },
      { type: 'quote', text: 'Мы не вернулись за стол переговоров, чтобы повторять ошибки прошлого. Нам нужны юридически обязывающие гарантии.' },
      { type: 'p', text: 'Переговоры намечены как минимум на три дня. Следующее заседание пройдёт в пятницу.' },
    ],
    related: [1, 6, 2],
  },
  {
    id: 10,
    category: 'business',
    categoryLabel: 'Бизнес',
    isBreaking: false,
    isFeatured: false,
    title: 'Tesla сообщила о рекордных продажах электромобилей в Европе во втором квартале',
    lead: 'Компания реализовала 198 000 автомобилей в регионе — рост 34% год к году. Model Y остаётся самым продаваемым электрокаром в мире.',
    author: 'Кристоф Вебер',
    authorTitle: 'Reuters, Берлин',
    publishedAt: new Date(Date.now() - 36 * 3600 * 1000),
    readingTime: 3,
    imageCaption: '',
    tags: ['Tesla', 'Электромобили', 'Европа', 'Илон Маск'],
    body: [
      { type: 'p', text: 'БЕРЛИН, 25 июня (Reuters) — Tesla отчиталась о рекордных европейских продажах во втором квартале 2026 года: 198 043 автомобиля против 147 800 в аналогичном периоде прошлого года, что соответствует росту на 33,7%. Ключевыми рынками роста стали Германия (+42%), Франция (+38%) и Норвегия (+18%).' },
      { type: 'p', text: 'Успеху способствовали снижение цен на 6–8% по всей линейке в январе и запуск обновлённой Model Y с улучшенным запасом хода (630 км по WLTP). Берлинский гигафактори вышел на плановую мощность 500 000 автомобилей в год.' },
      { type: 'quote', text: 'Европа — это уже не второй рынок. Это поле битвы за будущее автопрома.' },
      { type: 'p', text: 'Конкуренты также фиксируют рост: BYD продал в Европе 47 000 автомобилей за квартал (+180%), Volkswagen ID.4 — 62 000 (+14%). Аналитики Goldman Sachs повысили целевую цену акций Tesla с $240 до $290.' },
    ],
    related: [2, 7, 8],
  },
];

/* ── State ─────────────────────────────────────────────── */
const state = {
  currentView: 'feed',
  currentArticleId: null,
  currentCategory: 'all',
  savedIds: new Set(JSON.parse(localStorage.getItem('rr_saved') || '[]')),
  theme: localStorage.getItem('rr_theme') || 'light',
  fontSize: parseInt(localStorage.getItem('rr_font') || '17', 10),
  searchQuery: '',
};

/* ── Helpers ───────────────────────────────────────────── */
function timeAgo(date) {
  const diff = (Date.now() - date.getTime()) / 1000;
  if (diff < 60) return 'только что';
  if (diff < 3600) return `${Math.floor(diff / 60)} мин. назад`;
  if (diff < 86400) {
    const h = Math.floor(diff / 3600);
    return `${h} ${h === 1 ? 'час' : h < 5 ? 'часа' : 'часов'} назад`;
  }
  const d = Math.floor(diff / 86400);
  return `${d} ${d === 1 ? 'день' : d < 5 ? 'дня' : 'дней'} назад`;
}

function catColor(cat) {
  const m = { world: 'cat-color-world', business: 'cat-color-business', tech: 'cat-color-tech', science: 'cat-color-science', sport: 'cat-color-sport' };
  return m[cat] || 'cat-color-all';
}

function dotColor(cat) {
  const m = { world: 'dot-world', business: 'dot-business', tech: 'dot-tech', science: 'dot-science', sport: 'dot-sport' };
  return m[cat] || 'dot-all';
}

function saveSaved() {
  localStorage.setItem('rr_saved', JSON.stringify([...state.savedIds]));
}

/* ── Render: Article Card ──────────────────────────────── */
function renderCard(article, featured = false) {
  const card = document.createElement('div');
  card.className = 'article-card' + (featured ? ' featured' : '');
  card.dataset.id = article.id;

  const catHtml = `
    <div class="card-category ${catColor(article.category)}">
      <span class="cat-dot ${dotColor(article.category)}"></span>
      ${article.categoryLabel}
    </div>`;

  card.innerHTML = `
    ${catHtml}
    <div class="card-title">${article.title}</div>
    <div class="card-lead">${article.lead}</div>
    <div class="card-meta">
      <span>${article.author}</span>
      <span class="meta-sep">·</span>
      <span class="meta-time">${timeAgo(article.publishedAt)}</span>
      <span class="meta-sep">·</span>
      <span class="meta-read">${article.readingTime} мин.</span>
    </div>`;

  card.addEventListener('click', () => openArticle(article.id));
  return card;
}

/* ── Render: Feed ──────────────────────────────────────── */
function renderFeed() {
  const feed = document.getElementById('feed');
  const empty = document.getElementById('feed-empty');
  feed.innerHTML = '';

  let articles = ARTICLES;
  if (state.currentCategory !== 'all') {
    articles = articles.filter(a => a.category === state.currentCategory);
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    articles = articles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.lead.toLowerCase().includes(q) ||
      a.categoryLabel.toLowerCase().includes(q)
    );
  }

  if (!articles.length) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  const breakingArticle = articles.find(a => a.isBreaking);

  // Breaking banner
  if (breakingArticle && !state.searchQuery && state.currentCategory === 'all') {
    const banner = document.createElement('div');
    banner.className = 'breaking-banner';
    banner.innerHTML = `<span class="breaking-dot"></span><span>Срочно: ${breakingArticle.title.slice(0, 60)}…</span>`;
    banner.addEventListener('click', () => openArticle(breakingArticle.id));
    feed.appendChild(banner);
  }

  articles.forEach((article, i) => {
    if (i === 0 && article.isFeatured && !state.searchQuery) {
      feed.appendChild(renderCard(article, true));
    } else {
      if (i === 1 && !state.searchQuery) {
        const lbl = document.createElement('div');
        lbl.className = 'feed-section-label';
        lbl.textContent = 'Последние новости';
        feed.appendChild(lbl);
      }
      feed.appendChild(renderCard(article, false));
    }
  });
}

/* ── Render: Saved Feed ────────────────────────────────── */
function renderSavedFeed() {
  const feed = document.getElementById('saved-feed');
  const empty = document.getElementById('saved-empty');
  feed.innerHTML = '';

  const saved = ARTICLES.filter(a => state.savedIds.has(a.id));
  if (!saved.length) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  saved.forEach(a => feed.appendChild(renderCard(a, false)));
}

/* ── Render: Article ───────────────────────────────────── */
function renderArticle(article) {
  const content = document.getElementById('article-content');
  const navMeta = document.getElementById('article-nav-meta');

  navMeta.textContent = article.categoryLabel + ' · ' + timeAgo(article.publishedAt);

  document.documentElement.style.setProperty('--article-size', state.fontSize + 'px');

  let bodyHtml = '';
  for (const block of article.body) {
    if (block.type === 'p') {
      bodyHtml += `<p>${block.text}</p>`;
    } else if (block.type === 'h2') {
      bodyHtml += `<h2>${block.text}</h2>`;
    } else if (block.type === 'quote') {
      bodyHtml += `<blockquote>${block.text}</blockquote>`;
    }
  }

  const tagsHtml = article.tags.map(t => `<span class="article-tag">${t}</span>`).join('');

  const relatedIds = article.related || [];
  const relatedArticles = relatedIds.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean);
  const relatedHtml = relatedArticles.map(r => `
    <div class="related-card" data-id="${r.id}">
      <div class="related-cat ${catColor(r.category)}">${r.categoryLabel}</div>
      <div class="related-title">${r.title}</div>
      <div class="related-time">${timeAgo(r.publishedAt)}</div>
    </div>`).join('');

  content.innerHTML = `
    <div class="article-kicker">
      <span class="${catColor(article.category)}">
        ${article.categoryLabel}
      </span>
      ${article.isBreaking ? `<span class="breaking-label"><span class="breaking-dot"></span>Срочно</span>` : ''}
    </div>

    <h1 class="article-h1">${article.title}</h1>
    <p class="article-lead">${article.lead}</p>

    <div class="article-byline">
      <span class="byline-name">${article.author}</span>
      <span class="byline-sep">·</span>
      <span class="byline-meta">${article.authorTitle}</span>
      <span class="byline-sep">·</span>
      <span class="byline-meta">${timeAgo(article.publishedAt)}</span>
      <span class="byline-sep">·</span>
      <span class="byline-meta">${article.readingTime} мин.</span>
    </div>

    <div class="article-body-text">${bodyHtml}</div>

    <div class="article-tags">${tagsHtml}</div>

    ${relatedHtml ? `<div class="related-section"><div class="related-label">Читайте также</div>${relatedHtml}</div>` : ''}
  `;

  content.querySelectorAll('.related-card').forEach(card => {
    const id = parseInt(card.dataset.id, 10);
    card.addEventListener('click', () => openArticle(id));
  });
}

/* ── Open Article ──────────────────────────────────────── */
function openArticle(id) {
  const article = ARTICLES.find(a => a.id === id);
  if (!article) return;

  state.currentArticleId = id;
  renderArticle(article);
  updateSaveBtn();

  showView('article');

  const articleContent = document.getElementById('article-content');
  articleContent.scrollTop = 0;

  document.getElementById('bottom-nav').style.display = 'none';
}

/* ── Progress Bar ──────────────────────────────────────── */
function setupProgressBar() {
  const bar = document.getElementById('progress-bar');
  const content = document.getElementById('article-content');

  function update() {
    const { scrollTop, scrollHeight, clientHeight } = content;
    const pct = scrollHeight <= clientHeight ? 100 : (scrollTop / (scrollHeight - clientHeight)) * 100;
    bar.style.width = pct + '%';
  }

  content.addEventListener('scroll', update, { passive: true });
}

/* ── Save / Bookmark ───────────────────────────────────── */
function updateSaveBtn() {
  const btn = document.getElementById('btn-save');
  if (!btn) return;
  const saved = state.savedIds.has(state.currentArticleId);
  btn.classList.toggle('saved', saved);
  btn.setAttribute('aria-label', saved ? 'Убрать из сохранённого' : 'Сохранить');
}

function toggleSave() {
  const id = state.currentArticleId;
  if (!id) return;
  if (state.savedIds.has(id)) {
    state.savedIds.delete(id);
  } else {
    state.savedIds.add(id);
  }
  saveSaved();
  updateSaveBtn();
}

/* ── View Switching ────────────────────────────────────── */
function showView(name) {
  state.currentView = name;

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('view-' + name);
  if (target) target.classList.add('active');

  const nav = document.getElementById('bottom-nav');
  if (name === 'article') {
    nav.style.display = 'none';
  } else {
    nav.style.display = '';
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.view === name);
    });
  }

  if (name === 'saved') renderSavedFeed();
}

/* ── Category Filter ───────────────────────────────────── */
function selectCategory(cat) {
  state.currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
    btn.setAttribute('aria-selected', btn.dataset.cat === cat ? 'true' : 'false');
  });
  renderFeed();
}

/* ── Theme ─────────────────────────────────────────────── */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const sun = document.querySelector('.icon-sun');
  const moon = document.querySelector('.icon-moon');
  if (state.theme === 'dark') {
    sun.style.display = 'none';
    moon.style.display = 'block';
  } else {
    sun.style.display = 'block';
    moon.style.display = 'none';
  }
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('rr_theme', state.theme);
  applyTheme();
}

/* ── Font Size ─────────────────────────────────────────── */
function changeFontSize(delta) {
  state.fontSize = Math.max(14, Math.min(21, state.fontSize + delta));
  localStorage.setItem('rr_font', state.fontSize);
  document.documentElement.style.setProperty('--article-size', state.fontSize + 'px');
}

/* ── Search ────────────────────────────────────────────── */
function toggleSearch() {
  const bar = document.getElementById('search-bar');
  const input = document.getElementById('search-input');
  const hidden = bar.hasAttribute('hidden');
  if (hidden) {
    bar.removeAttribute('hidden');
    input.focus();
  } else {
    bar.setAttribute('hidden', '');
    state.searchQuery = '';
    input.value = '';
    document.getElementById('search-clear').setAttribute('hidden', '');
    renderFeed();
  }
}

/* ── Init ──────────────────────────────────────────────── */
function init() {
  applyTheme();
  renderFeed();
  setupProgressBar();

  // Category buttons
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => selectCategory(btn.dataset.cat));
  });

  // Bottom nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => showView(item.dataset.view));
  });

  // Back button
  document.getElementById('btn-back').addEventListener('click', () => {
    showView('feed');
    document.getElementById('progress-bar').style.width = '0%';
  });

  // Theme toggle
  document.getElementById('btn-theme').addEventListener('click', toggleTheme);

  // Save toggle
  document.getElementById('btn-save').addEventListener('click', toggleSave);

  // Font size
  document.getElementById('btn-font-dec').addEventListener('click', () => changeFontSize(-1));
  document.getElementById('btn-font-inc').addEventListener('click', () => changeFontSize(1));

  // Search toggle
  document.getElementById('btn-search-toggle').addEventListener('click', toggleSearch);

  // Search input
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');

  searchInput.addEventListener('input', () => {
    state.searchQuery = searchInput.value.trim();
    searchClear.toggleAttribute('hidden', !state.searchQuery);
    renderFeed();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    searchClear.setAttribute('hidden', '');
    searchInput.focus();
    renderFeed();
  });

  // Handle Android back gesture / history
  window.addEventListener('popstate', () => {
    if (state.currentView === 'article') {
      showView('feed');
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
