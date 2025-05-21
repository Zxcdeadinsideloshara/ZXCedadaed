import React, { useCallback, useState } from 'react';

import {
  ReactFlow,
  Position,
  Handle,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BaseEdge,
  SmoothStepEdge,
  BezierEdge,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Первое древо пикчи //
import employee1Image from './drevo3/guy9.png';
import employee2Image from './drevo1/person2.png';
import employee3Image from './drevo1/person3.png';
import employee4Image from './drevo1/person4.png';
import employee5Image from './drevo1/person5.png';
import employee6Image from './drevo1/person6.png';
import employee7Image from './drevo1/person7.png';
import employee8Image from './drevo1/person8.png';
import employee9Image from './drevo1/person9.png';
import employee10Image from './drevo1/person10.png';
import employee11Image from './drevo1/person11.png';
import employee12Image from './drevo1/person12.png';
import employee13Image from './drevo1/person13.png';
import employee14Image from './drevo1/person14.png';
import employee15Image from './drevo1/person15.png';
import employee16Image from './drevo1/person16.png';
import employee17Image from './drevo1/person17.png';
import employee18Image from './drevo1/person18.png';
import employee19Image from './drevo1/person19.png';
import employee20Image from './drevo1/person20.png';
import employee21Image from './drevo1/person21.png';
import employee22Image from './drevo1/person22.png';
import employee23Image from './drevo1/person23.png';
import employee24Image from './drevo1/person24.png';
import employee25Image from './drevo1/person25.png';
import employee26Image from './drevo1/person26.png';
import employee27Image from './drevo1/person27.png';
import employee28Image from './drevo1/person28.png';
// Первое древо пикчи //

// Второе древо пикчи //
import guy1 from './drevo2/people1.png';
import guy2 from './drevo2/people2.png';
import guy3 from './drevo2/people3.png';
import guy4 from './drevo2/people4.png';
import guy5 from './drevo2/people5.png';
import guy6 from './drevo2/people6.png';
import guy7 from './drevo2/people7.png';
import guy8 from './drevo2/people8.png';
import guy9 from './drevo2/people9.png';
import guy10 from './drevo2/people10.png';
import guy11 from './drevo2/people11.png';
import guy12 from './drevo2/people12.png';
import guy13 from './drevo2/people13.png';
import guy14 from './drevo2/people14.png';
import guy15 from './drevo2/people15.png';
import guy16 from './drevo2/people16.png';
import guy17 from './drevo2/people17.png';
import guy18 from './drevo2/people18.png';
import guy1920 from './drevo2/people1920.png';
import guy21 from './drevo2/people21.png';
import guy22 from './drevo2/people22.png';
import guy23 from './drevo2/people23.png';
import guy24 from './drevo2/people24.png';
import guy25 from './drevo2/people25.png';
import guy26 from './drevo2/people26.png';
import guy27 from './drevo2/people27.png';
import guy28 from './drevo2/people28.png';
import guy29 from './drevo2/people29.png';
import guy30 from './drevo2/people30.png';
import guy31 from './drevo2/people31.png';
import guy32 from './drevo2/people32.png';
// Второе древо пикчи //

// Третье древо пикчи //
import one1 from './drevo3/guy1.png';
import one2 from './drevo3/guy2.png';
import one3 from './drevo3/guy3.png';
import one4 from './drevo3/guy4.png';
import one5 from './drevo3/guy5.png';
import one6 from './drevo3/guy6.png';
import one7 from './drevo3/guy7.png';
import one8 from './drevo3/guy8.png';
import one9 from './drevo3/guy9.png';
import one10 from './drevo3/guy10.png';
import one11 from './drevo3/guy11.png';
import one12 from './drevo3/guy12.png';
import one13 from './drevo3/guy13.png';
import one14 from './drevo3/guy14.png';
import one15 from './drevo3/guy15.png';
import one16 from './drevo3/guy16.png';
import one17 from './drevo3/guy17.png';
import one18 from './drevo3/guy18.png';
import one19 from './drevo3/guy19.png';
import one20 from './drevo3/guy20.png';
import one21 from './drevo3/guy21.png';
import one22 from './drevo3/guy22.png';
import one23 from './drevo3/guy23.png';
import one24 from './drevo3/guy24.png';
import one25 from './drevo3/guy25.png';
import one26 from './drevo3/guy26.png';
import one27 from './drevo3/guy27.png';
import one28 from './drevo3/guy28.png';
import one29 from './drevo3/guy29.png';
import one30 from './drevo3/guy30.png';
import one31 from './drevo3/guy31.png';
import one32 from './drevo3/guy32.png';
import one33 from './drevo3/guy33.png';
import one34 from './drevo3/guy34.png';
// Третье древо пикчи //

const handleStyle = { left: 1000 };

const initialNodes = [
    { 
    id: '1sttree', 
    position: { x: 150, y: -1200 }, 
    data: { label: <h1>КАФЕДРА СОЦИАЛЬНОЙ ФИЛОСОФИИ</h1> },
      width: '200px',
      height: '150px',
    draggable: false,
  },
    { 
    id: '2ndtree', 
    position: { x: 3925, y: -1500 }, 
    data: { label: <h1>КАФЕДРА ИСТОРИИ ФИЛОСОФИИ, ФИЛОСОФСКОЙ АНТРОПОЛОГИИ, ЭТИКИ, ЭСТЕТИКИ ТЕОРИИ И ИСТОРИИ КУЛЬТУРЫ</h1> },
      width: '250px',
      height: '350px',
    draggable: false,
  },
      { 
    id: '3ndtree', 
    position: { x: -3640, y: -1250 }, 
    data: { label: <h1>КАФЕДРА ОНТОЛОГИИ И ТЕОРИИ ПОЗНАНИЯ</h1> },
      width: '180px',
      height: '180px',
    draggable: false,
  },
  { // Первое древо людишки //
    id: '1', 
    position: { x: 200, y: -1000 }, 
    data: { 
      image: employee1Image,
      info: {
        fullName: 'Коган Л.Н.', // Отец всего сущего 
        position: '',
        degree: 'Доктор философских наук',
        thesisTopic: 'Кандидатская :«Русские революционеры-демократы о роли народных масс и личности в истории»  Докторская :«От труда социалистического к труду коммунистическому»',
        workPlace: '',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Свердловск, 1949, 1963',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
  { 
    id: '2', 
    position: { x: 0, y: -800 }, 
    data: { 
      image: employee2Image,
      info: {
        fullName: 'Еремеев А.Ф.',
        position: '',
        degree: 'Доктор философских наук',
        thesisTopic: 'Проблема художественной правды и ее критерия в искусстве',
        workPlace: '',
        supervisors: 'Коган Л.Н.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Свердловск, 1962',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
      { 
    id: '3', 
    position: { x: 900, y: -200 }, 
    data: { 
      image: employee3Image,
      info: {
        fullName: 'Керимов Т.Х.',
        position: 'Профессор, заведующий кафедрой',
        degree: 'Доктор философских наук',
        thesisTopic: '"Индивидуальность в структуре социального бытия"',
        workPlace: 'УрГУ - кандидатская, докторская - институт философии',
        supervisors: 'Кемеров В.Е.',
        opponents: 'Скоробогацкий в.в., Ирина Фан Борисовна,Ким В.в. - кандидатские; Докторская - Скоробогацкий,кайдалов в.а.,Ким',
        leadingOrganizations: 'кандидат. - упи. Докторская - институт философии',
        defenseDate: 'кандитатская - 23.09.93. Докторская - 11.06.99',
        storagePlace: '',
        pretender: 'Томильцева Д.А.\n- Красавин И.В. \n- Бурбулис Ю.В.',
      }
    },
    type: 'custom',
    draggable: false 
  },
    { 
    id: '4', 
    position: { x: 700, y: -600 }, 
    data: { 
      image: employee4Image,
      info: {
        fullName: 'Мокроносов В.Г.',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'Кандидатская: Роль культурно-технического подъема рабочих в ликвидации существенного различия между умстрвенным и физическим трудом в СССР  Докторская: Методологические проблемы исследования общественных отношений',
        workPlace: '',
        supervisors: 'М.Т. Иовчук',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: '',
        storagePlace: '',
        pretender: 'Скоробогацкая Н.А. \n- Кемеров В.Е.',
      }
    },
    type: 'custom',
    draggable: false 
  },
      { 
    id: '5', 
    position: { x: 200, y: -400 }, 
    data: { 
      image: employee5Image,
      info: {
        fullName: 'Азаренко С.А.',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'ТОПОЛОГИЯ КУЛЬТУРНОГО ВОСПРОИЗВОДСТВА: МЕТОДОЛОГИЯ И СОЦИАЛЬНО-ЭТНИЧЕСКИЙ АСПЕКТ ИССЛЕДОВАНИЯ',
        workPlace: 'Работа выполнена на кафедре социальной философии Уральского государственного университета им. А. М. Горького',
        supervisors: 'Доктор философских наук, профессор В. И. Плотников',
        opponents: 'Мясникова Л. А. — доктор философских наук, профессор Круткин В. Л. — доктор философских наук, профессор Чупина Г. А. — доктор философских наук, профессор',
        leadingOrganizations: 'Уральский гуманитарный университет',
        defenseDate: '« » ноября 2000 года в « » часов на заседании диссертационного совета Д. 063.78.01 по защите диссертаций на соискание ученой степени доктора философских наук в Уральском государственном университете им. А. М. Горького по адресу 620083, г. Екатеринбург, пр. Ленина, д. 51, ком. 248.',
        storagePlace: 'С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета им. А. М. Горького',
        pretender: 'Симонова И.А.',
      }
    },
    type: 'custom',
    draggable: false 
  },
      { 
    id: '6', 
    position: { x: -100, y: -600 }, 
    data: { 
      image: employee6Image,
      info: {
        fullName: 'Орлов Б.В.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Системность отношений субъекта и объекта (методологические аспекты)',
        workPlace: 'УрГУ',
        supervisors: 'Еремеев А.Ф.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Свердловск, 1980',
        storagePlace: '',
        pretender: 'Рубцова Е.В.',
      }
    },
    type: 'custom',
    draggable: false 
  },
      { 
    id: '7', 
    position: { x: -300, y: -600 }, 
    data: { 
      image: employee7Image,
      info: {
        fullName: 'Грязнов А.Ф.',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'Язык и деятельность. Критический анализ витгенштейнианства',
        workPlace: '',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: '',
        storagePlace: '',
        pretender: 'Никитин С.А.',
      }
    },
    type: 'custom',
    draggable: false 
  },
      { 
    id: '8', 
    position: { x: 400, y: -400 }, 
    data: { 
      image: employee8Image,
      info: {
        fullName: 'Анкин Д.В.',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'Семиологическое описаник языка философии',
        workPlace: 'УрГУ',
        supervisors: 'Плотников В.И.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Екатеринбург, 1993',
        storagePlace: '',
        pretender: 'Медведев В.А.',
      }
    },
    type: 'custom',
    draggable: false 
  },
      { 
    id: '9', 
    position: { x: -500, y: -600 }, 
    data: { 
      image: employee9Image,
      info: {
        fullName: 'Любутин К.Н.',
        position: '',
        degree: 'Доктор философских наук',
        thesisTopic: 'Проблема субъекта и объекта в немецкой классической и марксистско-ленинской философии',
        workPlace: '',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Свердловск, 1973',
        storagePlace: '',
        pretender: 'Макакенко Я.А.',
      }
    },
    type: 'custom',
    draggable: false 
  },
      { 
    id: '10', 
    position: { x: 800, y: -400 }, 
    data: { 
      image: employee10Image,
      info: {
        fullName: 'Кемеров В.Е.',
        position: 'Профессор - исследователь',
        degree: 'Доктор философских наук',
        thesisTopic: 'Критика теории мотивации в современной американской социологии',
        workPlace: 'Уральский политехнический институт',
        supervisors: 'Мокроносов Г.В.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Свердловск, 1969',
        storagePlace: '',
        pretender: 'Логинов А.В. \n- Керимов Т.Х.',
      }
    },
    type: 'custom',
    draggable: false 
  },
      { 
    id: '11', 
    position: { x: 1300, y: -600 }, 
    data: { 
      image: employee11Image,
      info: {
        fullName: 'Круткин В.Л.',
        position: '',
        degree: 'Доктор философских наук',
        thesisTopic: 'Онтология человеческой телесности',
        workPlace: '',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: '',
        storagePlace: '',
        pretender: 'Братина О.А.',
      }
    },
    type: 'custom',
    draggable: false 
  },
      { 
    id: '12', 
    position: { x: 300, y: -600 }, 
    data: { 
      image: employee12Image,
      info: {
        fullName: 'Плотников В.И.',
        position: '',
        degree: 'Доктор философских наук',
        thesisTopic: 'Роль народных масс в народно-демократической революции',
        workPlace: '',
        supervisors: 'Коган Л.Н.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Свердловск, 1958',
        storagePlace: '',
        pretender: 'Азаренко С.А.',
      }
    },
    type: 'custom',
    draggable: false 
  },
      { 
    id: '13', 
    position: { x: 1100, y: -600 }, 
    data: { 
      image: employee28Image,
      info: {
        fullName: 'Платонов А.М.',
        position: 'Профессор',
        degree: 'Доктор экономических наук',
        thesisTopic: '',
        workPlace: '',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: '',
        storagePlace: '',
        pretender: 'Городнова Н.В.',
      }
    },
    type: 'custom',
    draggable: false 
  },
  // начало молодняка //
        { 
    id: '14', 
    position: { x: -1200, y: 0 }, 
    data: { 
      image: employee13Image,
      info: {
        fullName: 'Цепелева Н.П.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: '',
        workPlace: '',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: '',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
        { 
    id: '15', 
    position: { x: 800, y: 0 }, 
    data: { 
      image: employee14Image,
      info: {
        fullName: 'Томильцева Д.А.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Опыт прощения: социально-философский анализ',
        workPlace: 'Работа выполнена на кафедре социальной философии ГОУ ВПО «Уральский государственный университет им. А. М. Горького»',
        supervisors: 'Доктор философских наук, профессор Керимов Т.Х.',
        opponents: 'Доктор философских наук, профессор Вершинин С.Е. \n Кандидат философских наук, доцент Лебедева Г.В.',
        leadingOrganizations: 'ГОУ ВПО «Уральский государственный педагогический университет».',
        defenseDate: 'Защита состоится 16 сентября 2010 г. в «13» часов на заседании диссертационного совета Д 212.286.02 по защите докторских и кандидатских диссертаций при ГОУ ВПО «Уральский государственный университет им.А.М. Горького» (620000, г. Екатеринбург, пр. Ленина 51, комн. 248).',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
        { 
    id: '16', 
    position: { x: 400, y: 0 }, 
    data: { 
      image: employee15Image,
      info: {
        fullName: 'Скоробогацкая Н.А.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Социально-типологический анализ развития личности',
        workPlace: 'УПИ',
        supervisors: 'Мокроносов Г.В.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Свердловск, 1984',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
        { 
    id: '17', 
    position: { x: 0, y: 0 }, 
    data: { 
      image: employee16Image,
      info: {
        fullName: 'Симонова И.А.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Субкультура как социально-топологическая проблема',
        workPlace: 'Работа выполнена в ФГАОУ ВПО «Уральский федеральный университет имени первого Президента России Б.Н. Ельцина» на кафедре социальной философии.',
        supervisors: 'Доктор философских наук, профессор Азаренко С.А.',
        opponents: 'Соловьев А.В., Лебедев Д.В.,',
        leadingOrganizations: 'ФГАОУ ВПО «Российский государственный профессионально-педагогический университет», г. Екатеринбург.',
        defenseDate: 'Защита состоится 19 сентября 2013 г. в 14:00 на заседании диссертационного совета Д 212.285.14 на базе ФГАОУ ВПО «Уральский федеральный университет имени первого Президента России Б.Н. Ельцина». 620000, г. Екатеринбург, пр. Ленина, 51, зал заседаний диссертационных советов, комн. 248',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
        { 
    id: '18', 
    position: { x: -200, y: 0 }, 
    data: { 
      image: employee17Image,
      info: {
        fullName: 'Рубцова Е.В.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Историчность парадигм искусства и проблема современной художественности',
        workPlace: 'Работа выполнена на кафедре этики, эстетики, теории и истории культуры ГОУ ВПО "Уральский государственный университет им. А.М. Горького"',
        supervisors: 'кандидат философских наук, доцент Орлов Б.В.',
        opponents: 'Доктор философских наук, доцент - Медведев А.В., \n Кандидат философских наук - Старостова Л.Э.',
        leadingOrganizations: 'Институт философии и права Уральского отделения Российской Академии наук (г. Екатеринбург) ',
        defenseDate: '"26" октября 2004 года в 15.30 часов на заседании диссертационного совета Д 212.286.08 по защите диссертаций на соискание ученой степени доктора философских наук, доктора культурологии, доктора искусствоведения при ГОУ ВПО "Уральский государственный университет им. А.М. Горького" по адресу: 620083, г. Екатеринбург, К-83, пр. Ленина, 51, комн. 248.',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
          { 
    id: '19', 
    position: { x: -400, y: 0 }, 
    data: { 
      image: employee18Image,
      info: {
        fullName: 'Никитин С.А.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: '"Критический анализ американского деконструктивизма"',
        workPlace: 'Кафедра истории зарубежной философии философского факультета Московского государственного университета имени М. В. Ломоносова',
        supervisors: 'Доктор философских наук, профессор Александр Федосиевич Грязнов',
        opponents: 'Доктор философских наук, и. о. профессора Силичев Д. А., кандидат философских наук, доцент Скрыпник Р. А.',
        leadingOrganizations: 'Институт философии Российской Академии наук',
        defenseDate: '23 мая 1994 года на заседании Специализированного Совета по философским наукам в МГУ имени М. В. Ломоносова',
        storagePlace: 'В читальном зале библиотеки 1-го корпуса гуманитарных факультетов МГУ, в электронном виде ни диссертации, ни автореферата нигде нет.',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
            { 
    id: '20', 
    position: { x: 200, y: 0 }, 
    data: { 
      image: employee19Image,
      info: {
        fullName: 'Медведев В.А.',
        position: 'Доцент',
        degree: 'Кандитат философских наук ',
        thesisTopic: 'Проблема концептуализации теоретико-методологических оснований исследования',
        workPlace: 'Работа выполнена на кафедре онтологии и теории познания факультета философии ГОУ ВПО «Уральский государственный университет им. А.М. Горького»',
        supervisors: 'Доктор философских наук, доцент Анкин Дмитрий Владимирович.',
        opponents: 'Доктор философских наук, профессор - Мирошников Ю.И., \n Кандидат философских наук, доцент - Погорельская Е.Ю.',
        leadingOrganizations: 'Уральская государственная медицинская академия',
        defenseDate: 'Защита состоялась 18 сентября 2008 г. в 15:00 на заседании диссертационного совета Д.212.286.02 при ГОУ ВПО «Уральский государственный университет им. А.М. Горького» 620000, г. Екатеринбург, пр. Ленина, 51, комн. 248.',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
            { 
    id: '21', 
    position: { x: -800, y: 0 }, 
    data: { 
      image: employee20Image,
      info: {
        fullName: 'Макакенко Я.А.',
        position: 'Доцент',
        degree: 'Кандитат философских наук',
        thesisTopic: '"Обоснование онто-логического метода в философии Хайдеггера"',
        workPlace: 'Работа выполнена на кафедре истории философии Уральского государственного университета им. А.М. Горького.',
        supervisors: 'Доктор философских наук, проффесор Любутин К.Н.',
        opponents: 'Доктор философских наук, профессор - С.Е. Вершинин, Кандидат философских наук, доцент - О.В. Охотников',
        leadingOrganizations: 'Нижневартовский государственный гуманитарный университет',
        defenseDate: '20 апреля 2006 года в 15:00 на заседании диссертационного совета при Уральском государственном университете им. А.М. Горького, 620083, г. Екатеринбург, пр. Ленина, 51, комн. 248.',
        storagePlace: 'РНБ',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
            { 
    id: '22', 
    position: { x: 600, y: 0 }, 
    data: { 
      image: employee21Image,
      info: {
        fullName: 'Логинов А.В.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'ИДЕОЛОГИЯ КАК ПРОБЛЕМА СОЦИАЛЬНОЙ ОНТОЛОГИИ',
        workPlace: 'Работа выполнена на кафедре социальной философии Уральского государственного университета им A.M. Горького',
        supervisors: 'Доктор философских наук, профессор В.Е. Кемеров.',
        opponents: 'Доктор философских наук, профессор - В.В. Скоробогацкий, Кандидат философских наук, доцент - Н.С. Кузнецов.',
        leadingOrganizations: ' Институт философии и права Уральского отделения РАН',
        defenseDate: '17 июня 2004 в 13:30 на заседании диссертационного совета Д 212.286.02 по защите диссертаций на соискание ученой степени доктора философских наук при Уральском государственном университете им. A.M. Горького по адресу: 620083, г. Екатеринбург, пр. Ленина, 51, ком. 248.',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
            { 
    id: '23', 
    position: { x: -600, y: 0 }, 
    data: { 
      image: employee22Image,
      info: {
        fullName: 'Кузубова Т.С.',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'МЕТАФИЗИЧЕСКИЕ МИРЫ ДОСТОЕВСКОГО И НИЦШЕ',
        workPlace: 'Работа выполнена на кафедре истории философии Уральского государственного университета им. А. М. Горького',
        supervisors: 'доктор философских наук, профессор К. Н. Любутин',
        opponents: 'Доктор философских наук, профессор В. Б. Куликов Доктор философских наук, доктор филологических наук, профессор С. Л. Слободнюк  Доктор философских наук, доцент В. М. Князев',
        leadingOrganizations: 'Уральский юридический институт МВД РФ.',
        defenseDate: 'Защита состоится 13 ноября 2001 г. в 15 часов на заседании диссертационного совета Д 004.018.01 по защите диссертаций на соискание ученой степени доктора философских наук в Институте философии и права Уральского отделения Российской академии наук по адресу: 620144, г. Екатеринбург, ул. 8 Марта, 68, конференц-зал.',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
            { 
    id: '24', 
    position: { x: 1200, y: 0 }, 
    data: { 
      image: employee23Image,
      info: {
        fullName: 'Красавин И.В.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Экономия желания: от экономического и психоаналитического дискурсов к социально-гетерологическому анализу',
        workPlace: 'Работа выполнена на кафедре социальной философии ГОУ ВПО «Уральский государственный университет им. А М. Горького».',
        supervisors: 'Доктор философских наук, профессор Керимов Т.Х.',
        opponents: 'Доктор философских наук,профессор - Кропотов С.Л., Кандидат философских наук, доцент - Котелевский Д.В.',
        leadingOrganizations: 'ГОУ ВПО «Уральская академия государственной службы» г Екатеринбург',
        defenseDate: '30 июня 2008 г. в «11» часов на заседании диссертационного совета Д 212 286 02 по защите докторских и кандидатских диссертаций при ГОУ ВПО «Уральский государственный университет им А М. Горького» (620000, г. Екатеринбург, пр Ленина 51, комн 248).',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
            { 
    id: '25', 
    position: { x: -1000, y: 0 }, 
    data: { 
      image: employee24Image,
      info: {
        fullName: 'Дороненко О.Е.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Диалектика формирования универсального отношения человека к миру',
        workPlace: 'УрГУ',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Свердловск, 1987',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
              { 
    id: '26', 
    position: { x: 1400, y: 0 }, 
    data: { 
      image: employee25Image,
      info: {
        fullName: 'Городнова Н.В.',
        position: 'Профессор',
        degree: 'Доктор экономических наук',
        thesisTopic: 'Условия и предпосылки эффективного функционирования финансово-промышленных групп',
        workPlace: 'Работа выполнена на кафедре «Экономика и управление строительством» Уральского государственного технического университета.',
        supervisors: 'Доктор экономических наук, профессор Платонов А.М.',
        opponents: 'Доктор экономических наук, профессор - Ходоровский М.Я., Кандидат экономических наук, старший научный сотрудник - Юрганова Л.А.',
        leadingOrganizations: 'Финансово-промышленная группа «Средуралстрой» (г. Екатеринбург).',
        defenseDate: 'Защита состоится 01 декабря 2000 г. в 15:00 на заседании диссертационного совета Д 063.14.04 по присуждению ученой степени доктора экономических наук по специальности 08.00.05 при Уральском государственном техническом университете.620002, г. Екатеринбург, ул. Мира, 19, УГТУ, ауд. II',
        storagePlace: 'Место хранения работы 2',
        pretender: 'Последователь 1',
      }
    },
    type: 'custom',
    draggable: false 
  },
                { 
    id: '27', 
    position: { x: 1000, y: 0 }, 
    data: { 
      image: employee26Image,
      info: {
        fullName: 'Бурбулис Ю.В.',
        position: 'Доцент, заместитель заведующего кафедрой социальной философии',
        degree: 'Кандидат философских наук',
        thesisTopic: '«ОНТОЛОГИЧЕСКИЙ ПОВОРОТ» в СОВРЕМЕННОЙ СОЦИАЛЬНОЙ ТЕОРИИ',
        workPlace: 'ФГАОУ ВО «Уральский федеральный университет имени первого Президента России Б.Н. Ельцина» на кафедре социальной философии',
        supervisors: 'Доктор философских наук, профессор Керимов Т.Х.',
        opponents: 'Платонова Светлана Ипатовна, доктор философских паук, доцент, ФГБОУ ВО «Ижевская государственная сельскохозянствснная академия», завсдующий кафедрой философии.  Терещенко Наталья Анатольевна, доктор философских наук, доцент, ФГАОУ ВО «Казанский (Приволжский) федеральный университет», профессор кафедры социальной философии. ',
        leadingOrganizations: 'Красавин Игорь Вячеславович',
        defenseDate: '25 мая 2017 г. в 11.00 па заседании совета Д 212.285.14 на базе ФГАОУ ВО «Уральский федеральный университет имени первого Президента России Б. Н. Ельцина» по адресу: 620000, г. Екатеринбург, пр. Ленина, 51, зал заседаний дессертационных советов, комн. 248.',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                  { 
    id: '28', 
    position: { x: 1600, y: 0 }, 
    data: { 
      image: employee27Image,
      info: {
        fullName: 'Братина (Шнырева) О.А.',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: '"Феномен маски в социальной коммуникации"',
        workPlace: 'Удмуртский государственный университет',
        supervisors: 'Профессор,д. ф. н. Круткин Виктор Леонидович',
        opponents: 'д.ф.н., проф. Трофимов С.А., д.ф.н., проф. Родионов Б.В.',
        leadingOrganizations: 'ИжГТУ (Ижевский государственный технический университет)',
        defenseDate: '01.06.2005 Удмуртский государственный университет',
        storagePlace: 'е-лайбрери, РНБ',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  }, // Первое древо людишки //
    { // Второе древо парнишки //
    id: '01', 
    position: { x: 3900, y: -800 }, 
    data: { 
      image: guy1,
      info: {
        fullName: 'Еремеев Аркадий Фёдорович',
        position: 'Профессор',
        degree: 'Кандидат философских наук. Доктор философских наук',
        thesisTopic: 'КАНДИДАТСКАЯ: Проблема художественной правды и её критерия в искусстве. ДОКТОРСКАЯ: Социально-коммуникативная природа искуства',
        workPlace: 'КАНДИДАТСКАЯ:Кафедра диалектического и исторического материализма',
        supervisors: 'КАНДИДАТСКАЯ: Коган Лев Наумович',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'КАНДИДАТСКАЯ: Свердловск 1962 УрГУ им. А.М.Горького Ленина 51 ДОКТОРСКАЯ: Свердловск 1971',
        storagePlace: 'Российская государственная библиотека',
        pretender: 'Круглова Татьяна Анатольевна',
      }
    },
    type: 'custom',
    draggable: false 
  },
      {
    id: '02', 
    position: { x: 4000, y: -1100 }, 
    data: { 
      image: guy2,
      info: {
        fullName: 'Коган Лев Николаевич',
        position: '',
        degree: '',
        thesisTopic: '',
        workPlace: '',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: '',
        storagePlace: '',
        pretender: 'Еремеев Аркадий Фёдорович',
      }
    },
    type: 'custom',
    draggable: false 
  },
        {
    id: '03', 
    position: { x: 5200, y: -1100 }, 
    data: { 
      image: guy3,
      info: {
        fullName: 'Любутин Константин Николаевич',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'Проблема субъекта и объекта в немецкой классической и марксистско-ленинской философии',
        workPlace: 'Кафедра истории философии УрГУ им. А.М. Горького',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Свердловск, 1973, , УрГУ им. А.М.Горького',
        storagePlace: 'Российская государственная библиотека',
        pretender: 'Перцев Александр Владимирович',
      }
    },
    type: 'custom',
    draggable: false 
  },
        {
    id: '04', 
    position: { x: 2600, y: -1100 }, 
    data: { 
      image: guy4,
      info: {
        fullName: 'Кемеров Вячеслав Евгеньевич',
        position: 'Профессор-исследователь',
        degree: 'Кандидат философских наук, Доктор философских наук',
        thesisTopic: 'КАНДИДАТСКАЯ: Критика теории мотивации в современной американской социологии. ДОКТОРСКАЯ: Взаимосвязь социального и индивидуального как методологическая проблема обществознания',
        workPlace: 'КАНДИДАТСКАЯ: Уральский политехнический институт.  ДОКТОРСКАЯ: Кафедра онтологии и теории познания УрГУ им.А.М.Горького',
        supervisors: 'КАНДИДАТСКАЯ: Мокроносов Герман Викторович',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'КАНДИДАТСКАЯ: Свердловск 1969. ДОКТОРСКАЯ: Свердловск,1978, УрГУ им.А.М.Горького',
        storagePlace: 'Российская государственная библиотека',
        pretender: 'Тапдыг Хавизович Керимов',
      }
    },
    type: 'custom',
    draggable: false 
  },
        {
    id: '05', 
    position: { x: 5300, y: -800 }, 
    data: { 
      image: guy5,
      info: {
        fullName: 'Перцев Александр Владимирович',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'Пролетарский позитивизм: политическое инобытие философии',
        workPlace: 'Кафедра истории философии философского факультета УрГУ им. А.М.Горького',
        supervisors: 'Любутин Константин Николаевич',
        opponents: 'Калинников Леонард Александрович. Пивоваров Даниил Валентинович. Федотова Валентина Гавриловна.',
        leadingOrganizations: 'Институт философии и права, Сибирское отделение РАН',
        defenseDate: 'Екатеринбург 21.05.1992 УрГУ им. А.М.Горького Ленина 51 15:00 аудитория 248',
        storagePlace: 'Российская государственная библиотека',
        pretender: 'Черепанова Екатерина Сергеевна',
      }
    },
    type: 'custom',
    draggable: false 
  },
        {
    id: '06', 
    position: { x: 3600, y: -500 }, 
    data: { 
      image: guy6,
      info: {
        fullName: 'Круглова Татьяна Анатольевна',
        position: 'Прфессор',
        degree: 'Доктор Философских наук',
        thesisTopic: 'Искусство соцреализма как культурно-антропологическая и художественно-коммуникативная система: исторические основания, специфика дискурса и социокультурная  роль',
        workPlace: 'Кафедра эстетики, этики, истории и теории культуры филосовского факультета УрГУ им. А.М. Горького',
        supervisors: 'Еремеев Арадий Федорович ',
        opponents: 'Афасижев Мурад Нурбиевич, Литовская Мария Аркадьевна, Синцов Евгений Васильевич',
        leadingOrganizations: 'ГОУ ВПО Мордовский государственный университет',
        defenseDate: 'Екатеринбург,  29.11.2005, УрГУ им. А.М.Горького, Ленина 51,  аудитория 248',
        storagePlace: 'Российская государственная библиотека',
        pretender: 'Гудова Маргарита Юрьевна',
      }
    },
    type: 'custom',
    draggable: false 
  },
        {
    id: '07', 
    position: { x: 2800, y: -1100 }, 
    data: { 
      image: guy7,
      info: {
        fullName: 'Орлов Георгий Петрович',
        position: 'Профессор',
        degree: 'Кандидат философских наук. Доктор философских наук',
        thesisTopic: 'ДОКТОРСКАЯ: Методологические проблнмы свободного времени',
        workPlace: '',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'ДОКТОРСКАЯ:Свердловск 1970 УрГУ им. А.М.Горького Ленина 51',
        storagePlace: 'Российская государственная библиотека',
        pretender: 'Емельянов Борис Владимирович',
      }
    },
    type: 'custom',
    draggable: false 
  },// олды кончились тут //
        {
    id: '08', 
    position: { x: 2500, y: -200 }, 
    data: { 
      image: guy8,
      info: {
        fullName: 'Керимов Тапдыг Хавизович',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'Социальная гетерология:Методология и теория исследования',
        workPlace: 'Уральский ордена Трудового Красного Знамени государственном университете на кафедре социальной философии',
        supervisors: 'Кемеров Вячеслав Евгеньевич',
        opponents: 'Кайдалов Вячеслав Андреевич, Ким Владимир Васильевич, Скоробогацкий Вячеслав Васильевич',
        leadingOrganizations: 'Институт философии УрО РАН',
        defenseDate: 'Екатеринбург, 11.06.1999,  УрГУ им. А.М.Горького, 11:00 248 аудитория',
        storagePlace: <a href="https://primo.nlr.ru/primo-explore/fulldisplay?docid=07NLR_LMS001166446&context=L&vid=07NLR_VU1&lang=ru_RU&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=default_tab&query=lsr24,contains,%D0%A1%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%B3%D0%B5%D1%82%D0%B5%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F:%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%D0%B8%20%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D1%8F%20%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F&offset=0" target="_blank">Перейти по ссылке</a>,
        pretender: 'Томильцева Дарья Алексеевна',
      } // <a href="https://www.google.ru/" target="_blank">Перейти по ссылке</a> //
    },
    type: 'custom',
    draggable: false 
  },
          {
    id: '09', 
    position: { x: 5300, y: -200 }, 
    data: { 
      image: guy9,
      info: {
        fullName: 'Черепанова Екатерина Сергеевна',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'Австрийская философия как самосознание культурного региона',
        workPlace: 'Кафедра истории философии УрГУ им. А.М. Горького',
        supervisors: 'Перцев Александр Владимирович',
        opponents: 'Гайда Анатолий Войцехович, Кирабаев Нур Серикович, Кузнецов Валерий Григорьевич',
        leadingOrganizations: 'Институт философии и права, Сибирское отделение РАН',
        defenseDate: 'Екатеринбург, 19.10.2000, УрГУ им. А.М.Горького,  15:00 248 аудитория',
        storagePlace: <a href="https://primo.nlr.ru/primo-explore/fulldisplay?docid=07NLR_LMS000816346&context=L&vid=07NLR_VU1&lang=ru_RU&search_scope=default_scope&adaptor=Local%20Search%20Engine&tab=default_tab&query=lsr24%2Ccontains%2C%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%20%D1%84%D0%B8%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D0%B8%D1%8F%20%D0%BA%D0%B0%D0%BA%20%D1%81%D0%B0%D0%BC%D0%BE%D1%81%D0%BE%D0%B7%D0%BD%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D0%B0" target="_blank">Перейти по ссылке</a>,
        pretender: 'Сысолятин Антон Андреевич',
      }
    },
    type: 'custom',
    draggable: false 
  },
          {
    id: '010', 
    position: { x: 3700, y: -200 }, 
    data: { 
      image: guy10,
      info: {
        fullName: 'Гудова Маргарита Юрьевна',
        position: 'Старший преподаватель-Доцент-Профессор-Заведующий кафедрой',
        degree: 'Доктор культурологии Кандидат философских наук Доцент',
        thesisTopic: 'Чтение в эпоху постграмотности : культурологический анализ',
        workPlace: 'Кафедра эстетики,этики,теории и истории культуры института социально-политических наук УрГУ им. А.М.Горького',
        supervisors: 'Круглова Татьяна Анатольевна',
        opponents: 'Гашева Наталия Николаевна, Прокудин Дмитрий Евгеньевич, Смеюха Виктория Вячеславовна',
        leadingOrganizations: 'ФГБОУ ВО "Российский государственный гкманитарный университет"',
        defenseDate: 'Екатеринбург, 24.12.2015,  УрГУ им. А.М.Горького, 12:00 ауд.248',
        storagePlace: <a href="https://www.dissercat.com/content/chtenie-v-epokhu-postgramotnosti-kulturologicheskii-analiz/read" target="_blank">Перейти по ссылке</a>,
        pretender: 'Смирнова Татьяна Николаевна',
      }
    },
    type: 'custom',
    draggable: false 
  },
          {
    id: '011', 
    position: { x: 5100, y: -200 }, 
    data: { 
      image: guy11,
      info: {
        fullName: 'Аржанухин Сергей Владимирович',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'Филосовские и общественно-политические взгляды русских масонов второй половины XVIII - первой четверти XIX вв.',
        workPlace: 'Кафедра истории философии УрГУ им. А.М.Горького',
        supervisors: 'Любутин Константин Николаевич',
        opponents: 'Павлов Алексей Терентьевич, Скоробогацкий Вячеслав Васильевич,Петров Владислав Михайлович',
        leadingOrganizations: 'Российский государственный педагогический университет им. А.И.Герцена',
        defenseDate: 'Екатеринбург, 19.09.1996, УрГУ им. А.М.Горького, 13:00 ауд. 248',
        storagePlace: <a href="https://www.dissercat.com/content/filosofskie-i-obshchestvenno-politicheskie-vzglyady-russkikh-masonov-vtoroi-poloviny-xviii-p/read" target="_blank">Перейти по ссылке</a>,
        pretender: 'Пургин Сергей Петрович',
      }
    },
    type: 'custom',
    draggable: false 
  },
          {
    id: '012', 
    position: { x: 2900, y: -200 }, 
    data: { 
      image: guy12,
      info: {
        fullName: 'Емельянов Борис Владимирович',
        position: 'Старший преподаватель-Доцент-Профессор-Заведующий кафедрой',
        degree: 'Кандидат философских наук. Доктор философских наук',
        thesisTopic: 'КАНДИДАТСКАЯ: Источниковедение истории русской философии второй четверти XIX века. ДОКТОРСКАЯ: Русская философия первой четверти XIX века: проблемы источниковедения истории философии',
        workPlace: 'ДОКТОРСКАЯ: Кафедра истории философии философского факультета гос.университета им. Горького',
        supervisors: 'ДОКТОРСКАЯ: Орлов Георгий Петрович',
        opponents: 'ДОКТОРСКАЯ:Бычко Ада Корнеева, Суханов Ким Николаевич,Федоркин Николай Семёнович',
        leadingOrganizations: 'ДОКТОРСКАЯ:Ленинградский гос. институт культуры им. Н.К.Крупской (кафедра марксистко-ленинской философии)',
        defenseDate: 'КАНДИДАТСКАЯ:1970 ДОКТОРСКАЯ:Свердловск,1989, УрГУ им. А.М.Горького, Ленина 51, аудитория 248, 15:00',
        storagePlace: 'Российская государственная библиотека',
        pretender: 'Ионайтис Ольга Борисовна',
      }
    },
    type: 'custom',
    draggable: false 
  },
          {
    id: '013', 
    position: { x: 6100, y: -200 }, 
    data: { 
      image: guy13,
      info: {
        fullName: 'Некрасов Станислав Николаевич',
        position: 'Профессор',
        degree: 'Кандидат философских наук. Доктор философских наук ',
        thesisTopic: 'КАНДИДАТСКАЯ: Диалектика общественного и индивидуального в социальной детерминации познания. ДОКТОРСКАЯ:Фетишизм и идеологический процесс: механизм фетишизации социальных форм и социальные иллюзии в свете марксизма и постструктурализма',
        workPlace: 'КАНДИДАТСКАЯ: Каффедра онтологии и теории познания Новосибирского государственного университета имени Ленинского комсомола. ДОКТОРСКАЯ: Кафедра истории философии УрГУ им. А.М.Горького',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'КАНДИДАТСКАЯ: Новосибирский государственный университет 1982 ДОКТОРСКАЯ: Екатеринбург, 1992 УрГУ  им. А.М.Горького',
        storagePlace: 'Российская государственная библиотека',
        pretender: 'Быстров Никита Львович',
      }
    },
    type: 'custom',
    draggable: false 
  }, // дальше янг персонс //
        {
    id: '014', 
    position: { x: 3000, y: 100 }, 
    data: { 
      image: guy14,
      info: {
        fullName: 'Якимов Андрей Евгеньевич',
        position: 'Старший преподаватель',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Проблема репрезентации повседневности в кинематографе',
        workPlace: 'Кафедра истории философии, философской антропологии, эстетики и теории культуры',
        supervisors: 'Круглова Татьяна Анатольевна',
        opponents: 'Степанов Михаил Александрович, Хренов Николай Андреевич, Дроздова Алла Владимировна',
        leadingOrganizations: '',
        defenseDate: 'Екатеринбург, 01.12.2021 УрГУ им. А.М .Горького Ленина,51 11:00 аудитория  248 (зал диссертационных советов)',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
  {
    id: '015', 
    position: { x: 3200, y: 100 }, 
    data: { 
      image: guy15,
      info: {
        fullName: 'Язовская Ольга Валерьевна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Традиционные мифо-религиозные комплексы в контексте трансформации государственной системы Японии',
        workPlace: 'Кафедра этики, эстетики, теории и истории культуры Института Социальных и политических наук ФГАОУ ВО',
        supervisors: 'Круглова Татьяна Анатольевна',
        opponents: 'Борко Татьяна Иосифовна, Жерносенко Ирина Александровна',
        leadingOrganizations: 'ФГБОУ ВО "Бурятский государственный университет" (г. Улан-Удэ)',
        defenseDate: ' Екатеринбург, 24.10.2016 УрГУ им. А.М.Горького .Ленина,51, 14:00 аудитория 248 ',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
  {
    id: '016', 
    position: { x: 4000, y: 100 }, 
    data: { 
      image: guy16,
      info: {
        fullName: 'Юрлова Светлана Валерьевна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Общее и особенное в творческом мышлении: тип противоречия и характер эвристической деятельности',
        workPlace: 'Кафедра онтологии и теории познания УрГУ им. А.М.Горькго',
        supervisors: 'Еремеев Аркадий Фёдорович',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: '1985 год Свердловск УрГУ',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
  {
    id: '017', 
    position: { x: 5600, y: 100 }, 
    data: { 
      image: guy17,
      info: {
        fullName: 'Циплакова Юлия Владимировна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Концепция жизненного мира в философии Э. Гуссерля',
        workPlace: 'Кафедра истории философии УрГУ им. А.М. Горького',
        supervisors: 'Перцев Александр Владимирович',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Екатеринбург, 1999,  УрГУ им. А.М.Горького, Ленина 51, аудитоия 248',
        storagePlace: <a href="https://viewer.rusneb.ru/ru/000200_000018_RU_NLR_bibl_827451?page=1&rotate=0&theme=white" target="_blank">Перейти по ссылке</a>,
        pretender: '',
      }// <a href="https://www.google.ru/" target="_blank">Перейти по ссылке</a> //
    },
    type: 'custom',
    draggable: false 
  },
  {
    id: '018', 
    position: { x: 2400, y: 100 }, 
    data: { 
      image: guy18,
      info: {
        fullName: 'Томильцева Дарья Алексеевна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Опыт прощения: социально философский анализ',
        workPlace: 'УрГУ имени Горького',
        supervisors: 'Тапдыг Хавизович Керимов ',
        opponents: 'Вершинин Сергей Евгеньевич, Лебедева Галина Викторовна',
        leadingOrganizations: 'ГОУ ВПО «Уральский государственный педагогический университет».',
        defenseDate: 'Екатеринбург, 16.09.2010,  УрГУ им. А.М. Горького, Ленина 51 аудитоия 248',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
  {
    id: '019', 
    position: { x: 5400, y: 100 }, 
    data: { 
      image: guy1920,
      info: {
        fullName: 'Сысолятин Антон Андреевич',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Страх в контексте понимания природы человека:классические, неоклассические и постнеклассические интерпретации',
        workPlace: 'Кафедра истории философии, философской антропологии, эстетики и теории культуры',
        supervisors: 'Черепанова Екатерина Сергеевна',
        opponents: 'Гагарин Анатолий Станиславович и Черняк Наталья Алексеевна',
        leadingOrganizations: 'ФГБОУ ВО "Санкт-Петербургский государственный университет"',
        defenseDate: 'Омск, 30.06.2016, Омский государственный педагогический университет,  наб. Тухачевского 14, 15:00  212 аудитория',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
  {
    id: '020', 
    position: { x: 3400, y: 100 }, 
    data: { 
      image: guy1920,
      info: {
        fullName: 'Сухов Антон Андреевич',
        position: 'Доцент',
        degree: 'Кандидат культурологии',
        thesisTopic: 'Феномен визионерства: культурно-исторические основания и модификации ',
        workPlace: 'Кафедра эстетики, этики, теории и истории культуры ГОУ ВПО УрГУ',
        supervisors: 'Круглова Татьяна Анатольевна',
        opponents: ' Чернов Леонид Сергеевич и Рабинович Валерий Самуилович',
        leadingOrganizations: 'ГОУ ВПО "Уральская государственная архитектурно-художественная академия"',
        defenseDate: 'Екатеринбург, 21.10.2008,  УрГУ им.А.М. Горького, Ленина 51, 13:00 аудитория 248 ',
        storagePlace: <a href="https://omgpu.ru/sites/default/files/filefield_paths/avtoreferat_dissertacii_sysolyatin_a.a._urfu_ekaterinburg_.pdf" target="_blank">Перейти по ссылке</a>,
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
  {
    id: '021', 
    position: { x: 3600, y: 100 }, 
    data: { 
      image: guy21,
      info: {
        fullName: 'Смирнова Татьяна Николаевна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Экзистенциалы тишины, молчания и шума в музыке второй половины ХХ - начала ХХI века',
        workPlace: 'Кафедра истории философии, филосовской антропологии,эстетики и истории ккультуры  ГОУ ВПО УрГУ',
        supervisors: 'Гудова Маргарита Юрьевна',
        opponents: 'Бурханов Рафаэль Айратович, Гагарин Анатолий Станиславович, Сиднева Татьяна Борисовна ',
        leadingOrganizations: '',
        defenseDate: 'Екатеринбург, 09.12.2020,  УрГУ им.А.М. Горького, Ленина 51, 11:00  аудитория 248 ',
        storagePlace: <a href="https://elar.urfu.ru/bitstream/10995/1189/1/urgu0585s.pdf" target="_blank">Перейти по ссылке</a>,
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
  {
    id: '022', 
    position: { x: 2600, y: 100 }, 
    data: { 
      image: guy22,
      info: {
        fullName: 'Рубцова Елена Валерьевна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Историчность парадигм искусства и проблема современной художественности',
        workPlace: 'Кафедра эстетики, этики, теории и истории культуры ГОУ ВПО УрГУ',
        supervisors: 'Орлов Борис Викторович',
        opponents: 'Медведев Александр Васильевич и Старостова Людмила Эдуардовна',
        leadingOrganizations: 'Институт философии и права Уральского отделения Российской Академии наук',
        defenseDate: 'Екатеринбург, 26.10.2004,  УрГУ им.А.М. Горького, Ленина 51, 15:30 аудитория 248 ',
        storagePlace: <a href="https://dissovet2.urfu.ru/pluginfile.php/132/mod_data/content/38943/%D0%94%D0%B8%D1%81%D1%81%D0%B5%D1%80%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf" target="_blank">Перейти по ссылке</a>,
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
  {
    id: '023', 
    position: { x: 5000, y: 100 }, 
    data: { 
      image: guy23,
      info: {
        fullName: 'Пургин Сергей Петрович',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Вячеслав Иванов как философ: аспект метода',
        workPlace: 'Кафедра мстории философии УрГУ им. А.М.Горького',
        supervisors: 'Аржанухин Сергей Владимирович',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Екатеринбург, 1997, УрГУ им. А.М.Горького',
        storagePlace: <a href="https://elar.urfu.ru/bitstream/10995/331/2/urgu0262s.pdf" target="_blank">Перейти по ссылке</a>,
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
  {
    id: '024', 
    position: { x: 4400, y: 100 }, 
    data: { 
      image: guy24,
      info: {
        fullName: 'Пискунова Лариса Петровна',
        position: 'Доцент',
        degree: 'Кандидат философских наук ',
        thesisTopic: 'Меценатство как не текстовая и текстовая реальность художественного творчества и искусства',
        workPlace: 'Кафедра эстетики, этики, теории и истории культуры ГОУ ВПО УрГУ',
        supervisors: 'Еремеев Аркадий Фёдорович',
        opponents: 'Моисей Самойлович Каган, Голынец Серней Васильевич',
        leadingOrganizations: '',
        defenseDate: 'Екатеринбург, 22.04.1997, УрГУ им. А.М.Горького',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
    {
    id: '025', 
    position: { x: 4200, y: 100 }, 
    data: { 
      image: guy25,
      info: {
        fullName: 'Немченко Лилия Михайловна',
        position: 'Доцент',
        degree: 'Кандидат философских наук ',
        thesisTopic: 'Художественная традиция : сущность и функционирование',
        workPlace: 'Кафедра эстетики, этики, теории и истории культуры ГОУ ВПО УрГУ',
        supervisors: 'Еремеев Аркадий Фёдорович',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: '1987 Свердловск УрГУ',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
    {
    id: '026', 
    position: { x: 4800, y: 100 }, 
    data: { 
      image: guy26,
      info: {
        fullName: 'Мухутдинов Олег Мухтарович',
        position: 'Доцент',
        degree: 'Кандидат философских наук ',
        thesisTopic: 'Обоснование метафизики в фундаментальной онтологии Мартина Хайдеггера',
        workPlace: 'Кафедра истории философии УрГУ им. А.М. Горького ',
        supervisors: 'Любутин Константин Николаевич ',
        opponents: 'Вершин Сергей Евгеньевич,  М. Роза Рафаиловна ',
        leadingOrganizations: 'Челябинский государственный университет',
        defenseDate: 'Екатеринбург,  21.09.1999, УрГУ им. А.М.Горького, Ленина 51  15:00 248 аудитория',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
    {
    id: '027', 
    position: { x: 5200, y: 100 }, 
    data: { 
      image: guy27,
      info: {
        fullName: 'Мельник Наталья Борисовна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Философия природы и человека Ж-Ж. Руссо как основание концепции естественного воспитания',
        workPlace: 'Кафедра истории философии УрГУ им. А.М. Горького ',
        supervisors: 'Черепанова Екатерина Сергеевна',
        opponents: 'Шитиков Михаил Михайлович, Макерова Вера Владимировна',
        leadingOrganizations: 'Нижне-Тагильский государственный педагогический институт',
        defenseDate: 'Екатеринбург, 27.06.2002, УрГУ им. А.М.Горького, Ленина 51,  15:00 аудитория 248',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
    {
    id: '028', 
    position: { x: 4600, y: 100 }, 
    data: { 
      image: guy28,
      info: {
        fullName: 'Лисовец Ирина Митрофановна',
        position: 'Доцент',
        degree: 'Кандидат философских наук ',
        thesisTopic: 'Искусство как общение',
        workPlace: 'Кафедра эстетики, этики, теории и истории культуры ГОУ ВПО УрГУ',
        supervisors: 'Аркадий Федорович Еремеев',
        opponents: 'Каган Моисей Самойлович , Дианова Валентина Михайловна',
        leadingOrganizations: 'Ленинградская ордена Ленина государственная консерватория имени Н.А. Римского-Корсакова',
        defenseDate: '18.02.1982 г. Ленинградский гос.университет им А.А. Жданова',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
    {
    id: '029', 
    position: { x: 5800, y: 100 }, 
    data: { 
      image: guy29,
      info: {
        fullName: 'Кудрявцева Валентина Ивановна',
        position: 'Доцент',
        degree: 'Доктор философских наук',
        thesisTopic: 'Цинизм античный и цинизм современный: историко-филосфский анализ концепции П. Слотердайка',
        workPlace: 'Кафедра истории философии УрГУ им. А.М. Горького ',
        supervisors: 'Перцев Александр Владимирович',
        opponents: 'Афасажев Мурад Нурбиевич,  Синцов Евгений Васильевич,  Литовская Мария Аркадьевна',
        leadingOrganizations: 'ГОУ ВПО "Омский государственный педагогический университет"',
        defenseDate: 'Екатеринбург, 2009, УрГУ им. А. М. Горького, Ленина 51, аудитории 248',
        storagePlace: <a href="https://elar.urfu.ru/bitstream/10995/1898/1/urgu0687s.pdf" target="_blank">Перейти по ссылке</a>,
        pretender: '',
      }// <a href="https://www.google.ru/" target="_blank">Перейти по ссылке</a> //
    },
    type: 'custom',
    draggable: false 
  },
    {
    id: '030', 
    position: { x: 2800, y: 100 }, 
    data: { 
      image: guy30,
      info: {
        fullName: 'Ионайтис Ольга Борисовна',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'Философия Киевской Руси: проблема формирований и византийских традиций',
        workPlace: 'Кафедра истории философии УрГУ им. А.М. Горького',
        supervisors: 'Емельянов Борис Владимирович',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Екатеринбург 1998,УрГУ им. А.М.Горького, Ленина 51, аудитория 248',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
    {
    id: '031', 
    position: { x: 3800, y: 100 }, 
    data: { 
      image: guy31,
      info: {
        fullName: 'Закс Лев Абрамович',
        position: 'Профессор',
        degree: 'Доктор философских наук',
        thesisTopic: 'Художественное осознание: филосовско-этический анализ',
        workPlace: '',
        supervisors: 'Еремеев Аркадий Фёдорович',
        opponents: 'Каган Моисей Самойлович, Кемеров Вячеслав Евгеньевич, Мартынов Фёдор Тимофеевич',
        leadingOrganizations: 'Пермский политехнический институт ',
        defenseDate: 'Екатеринбург, 1993, УрГУ им. А.М.Горького,Ленина 51, аудитория 248',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
    {
    id: '032', 
    position: { x: 6000, y: 100 }, 
    data: { 
      image: guy32,
      info: {
        fullName: 'Быстров Никита Львович',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Проблема времени в раннем творчестве Андрея Белого',
        workPlace: 'УГТУ Кафедра истории философии',
        supervisors: 'Некрасов Станислав Николаевич',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: '1996 г., УГТУ',
        storagePlace: 'Российская государственная библиотека',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  }, // Третье древо шалунишки //
      {  // 3 поколение //
    id: '001', 
    position: { x: -4800, y: -1000 }, 
    data: { 
      image: one1,
      info: {
        fullName: 'Чупин Павел Петрович',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Философско-методологические аспекты проблемы природы и развития научного познания. КАНДИДАТ: Диалектический характер критерия практики.',
        workPlace: 'ДОКТОР: Уральский государственный университет им. А.М. Горького. КАНДИДАТ: Уральский государственный университет им. А.М. Горького.', // Шаблон: ДОКТОР: . КАНДИДАТ: .
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'ДОКТОР: Свердловск, 1983. КАНДИДАТ: Свердловск, 1978.',
        storagePlace: '',
        pretender: '',
      }
    }, // Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
        {
    id: '002', 
    position: { x: -4200, y: -1000 }, 
    data: { 
      image: one2,
      info: {
        fullName: 'Уваров Александр Иосифович',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Логико-гносеологический анализ теории в исторической науке. КАНДИДАТ: Ленинский принцип объективности в познании и некоторые вопросы диалектической логики.',
        workPlace: 'ДОКТОР: Ростовский государственный университет. КАНДИДАТ: Томский государственный университет.',
        supervisors: '',
        opponents: '',
        leadingOrganizations: 'ДОКТОР: Рост. гос. ун-т.',
        defenseDate: 'ДОКТОР: Ростов-на-Дону, 1973. КАНДИДАТ: Томск, 1963.',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
        {
    id: '003', 
    position: { x: -4600, y: -1000 }, 
    data: { 
      image: one3,
      info: {
        fullName: 'Савцова Надежда Ивановна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: '',
        workPlace: 'Уральский государственный университет им. А.М. Горького',
        supervisors: 'Член-корреспондент АН СССР М. Н. Руткевич',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Свердловск, 1973',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
        {
    id: '004', 
    position: { x: -2600, y: -1000 }, 
    data: { 
      image: one4,
      info: {
        fullName: 'Руткевич Михаил Николаевич',
        position: 'Член-корреспондент АН СССР (ныне РАН)',
        degree: 'Доктор философских наук',
        thesisTopic: '“Диалектический материализм : курс лекций для естественных факультетов”',
        workPlace: 'Работа выполнена в Уральском ордена Трудового Красного Знамени государственном университете им. А. М. Горького на кафедре диалектического материализма',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Москва, 1961',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
        {
    id: '005', 
    position: { x: -3500, y: -700 }, 
    data: { 
      image: one5,
      info: {
        fullName: 'Плотников Владимир Ильич',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Соотношение социального и биологического как философская проблема. КАНДИДАТ: Роль народных масс в народно-демократической революции.',
        workPlace: 'ДОКТОР: Работа выполнена в Уральском ордена Трудового Красного Знамени государственном университете им. А. М. Горького на кафедре диалектического материализма. КАНДИДАТ: Уральский государственный университет им. А.М. Горького, кафедра диалектического и исторического материализма.',
        supervisors: 'КАНДИДАТ: Кандидат философских наук, доцент Коган Л. Н..',
        opponents: 'ДОКТОР: Доктор философских наук, профессор Давидович В.Е., доктор философских наук, профессор Орлов В.В., доктор философских наук, профессор Плетников Ю.К..',
        leadingOrganizations: 'ДОКТОР: Горьковский медицинский институт им. С. М. Кирова, кафедра философии и научного коммунизма.',
        defenseDate: 'ДОКТОР: Защита состоялась в 1980 г. на заседании специализированного совета Д.063.78.01 по защите диссертаций на соискание учёной степени доктора философских наук при Уральском ордена Трудового Красного Знамени государственном университете им. А. М. Горького (620083, г. Свердловск, К-83, пр. Ленина, 51, комната 248). КАНДИДАТ: Свердловск, 1958.',
        storagePlace: 'ДОКТОР: С диссертацией можно ознакомиться в библиотеке университета.',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
        {
    id: '006', 
    position: { x: -2500, y: -700 }, 
    data: { 
      image: one6,
      info: {
        fullName: 'Пивоваров Даниил Валентинович',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Операционный аспект идеального отражения. КАНДИДАТ: Некоторые аспекты практической проверки истинности научной теории.',
        workPlace: 'ДОКТОР: Уральский государственный университет им. А.М. Горького. КАНДИДАТ: Уральский государственный университет им. А.М. Горького, кафедра диалектического материализма.',
        supervisors: 'КАНДИДАТ: Член-корреспондент АН СССР М. Н. Руткевич.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'ДОКТОР: Свердловск, 1986. КАНДИДАТ: Свердловск, 1972.',
        storagePlace: '',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
        {
    id: '007', 
    position: { x: -4400, y: -1000 }, 
    data: { 
      image: one7,
      info: {
        fullName: 'Любутин Константин Николаевич',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Проблема субъекта и объекта в немецкой классической и марксистко-ленинской философии. КАНДИДАТ: Антропологический принцип в немецкой буржуазной философии XIX - XX веков.',
        workPlace: 'ДОКТОР:  Уральский государственный университет им. А.М.Горького.',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'ДОКТОР: Свердловск, 1973. КАНДИДАТ: Свердловск, 1963.',
        storagePlace: (
          <>
            ДОКТОР: <a href="https://elar.urfu.ru/bitstream/10995/30196/1/lyubutin_1973.pdf" target="_blank">Перейти по ссылке</a>
          </>
        ),
        // storagePlace: (
        //   <>
        //     ДОКТОР: <a href="" target="_blank">Перейти по ссылке</a>
        //   </>
        // ),
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
        {
    id: '008', 
    position: { x: -2700, y: -700 }, 
    data: { 
      image: one8,
      info: {
        fullName: 'Лойфман Исаак Яковлевич',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Принципы физики и философские категории. КАНДИДАТ: Историческое развитие и философское значение категорий притяжения и отталкивания.',
        workPlace: 'ДОКТОР: Уральский государственный университет им. А.М. Горького. КАНДИДАТ: Уральский государственный университет им. А.М. Горького.',
        supervisors: 'КАНДИДАТ: Доктор философских наук, профессор Руткевич М. Н.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'ДОКТОР: Свердловск, 1975. КАНДИДАТ: Свердловск, 1962.',
        storagePlace: '',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
        {
    id: '009', 
    position: { x: -3600, y: -1000 }, 
    data: { 
      image: one9,
      info: {
        fullName: 'Коган Лев Наумович',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: От труда социалистического к труду коммунистическому. КАНДИДАТ: Русские революционеры-демократы о роли народных масс и личности в истории.',
        workPlace: 'ДОКТОР: Кафедра диалектического и исторического материализма Уральского государственного университета им. А.М. Горького.',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'ДОКТОР: Свердловск, 1963 (1962). КАНДИДАТ: Свердловск, 1949.',
        storagePlace: 'КАНДИДАТ: Музей Л.Н. Когана, УрФУ, пр. Ленина, ауд. №424.',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },// 2 поколение //
          {
    id: '0010', 
    position: { x: -2400, y: -400 }, 
    data: { 
      image: one10,
      info: {
        fullName: 'Федяев Дмитрий Михайлович',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Техническое мироотношение: сущность, модификации, эволюция. КАНДИДАТ: Целеполагание в техническом познании.',
        workPlace: 'ДОКТОР: Работа выполнена в Уральском ордена Трудового Красного Знамени государственном университете им. А. М. Горького на кафедре гносеологии, логики и философии науки философского факультета. КАНДИДАТ: Уральский государственный университет им. А.М. Горького.',
        supervisors: 'ДОКТОР: Научный консультант - доктор философских наук, профессор Пивоваров Д.В.. КАНДИДАТ: Кандидат философских наук, доцент Пивоваров Д. В..',
        opponents: 'ДОКТОР: Доктор философских наук, профессор Лойфман И.Я., доктор философских наук, профессор Макроносов Г.В,, доктор философских наук, профессор Чешев В.В..',
        leadingOrganizations: 'ДОКТОР: Пермский государственный технический университет, кафедра философии.',
        defenseDate: 'ДОКТОР: Зашита состоялась 20 января 1994 г. в 12 часов на заседании специализированного совета Д.063.78.01 по защите диссертаций на соискание учёной степени доктора философских наук при Уральском ордена Трудового Красного Знамени государственном университете им. А. М. Горького (620083, г. Свердловск, К-83, пр. Ленина, 51, комната 248). КАНДИДАТ: 1985.',
        storagePlace: 'ДОКТОР: С диссертацией можно ознакомиться в библиотеке Уральского университета.',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
            {
    id: '0011', 
    position: { x: -2600, y: -400 }, 
    data: { 
      image: one11,
      info: {
        fullName: 'Суслов Николай Владимирович',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Описание, объяснение и предвидение как стадии формирования научной теории',
        workPlace: 'Уральский государственный университет им. А.М. Горького',
        supervisors: 'Доктор философских наук, профессор Лойфман И. Я.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: '1984',
        storagePlace: '',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
            {
    id: '0012', 
    position: { x: -4600, y: -400 }, 
    data: { 
      image: one12,
      info: {
        fullName: 'Перцев Александр Владимирович',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Пролетарский позитивизм: политическое инобытие философии. КАНДИДАТ: Противоположность диалектико-материалистических и философско-антропологических принципов социального познания.',
        workPlace: 'ДОКТОР: Уральский государственный университет им. А.М. Горького. КАНДИДАТ: Уральский государственный университет им. А.М. Горького.',
        supervisors: 'КАНДИДАТ: Профессор Любутин К. Н..',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'ДОКТОР: УрГУ, 1992 г.. КАНДИДАТ: УрГУ, 1981 г..',
        storagePlace: 'ДОКТОР: . КАНДИДАТ: .',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
            {
    id: '0013', 
    position: { x: -5000, y: -400 }, 
    data: { 
      image: one13,
      info: {
        fullName: 'Лобовиков Владимир Олегович',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Формализация деятельности (оценки и нормы). КАНДИДАТ: Логические противоречия и проблемы (вопросы) как внутренний источник развития теоретического знания.',
        workPlace: 'КАНДИДАТ: Уральский государственный университет им. А.М. Горького.',
        supervisors: 'КАНДИДАТ: Кандидат философских наук, доцент П. П. Чупин.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'ДОКТОР: Уральский государственный университет им. А.М. Горького, 1990 г.. КАНДИДАТ: Уральский государственный университет им. А.М.Горького, 1977 г..',
        storagePlace: '',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
            {
    id: '0014', 
    position: { x: -4800, y: -400 }, 
    data: { 
      image: one14,
      info: {
        fullName: 'Котелевский Дмитрий Владимирович',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Топология Бытия: исходные основания и способы пространственно-временного структурирования Бытия',
        workPlace: 'Кафедра онтологии и теории познания УрГУ им. А. М. Горького',
        supervisors: 'Кандидат философских наук, доцент Н. И. Савцова',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Диссертация была защищена 23 сентября 1999 года в УрГУ.',
        storagePlace: (
          <>
            С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета им. A.M. Горького. В полном объеме текст документа доступен в <a href="https://www.rsl.ru/ru/4readers/rooms/" target="_blank">читательных залах РГБ</a>, <a href="https://search.rsl.ru/ru/record/01000251191" target="_blank">виртуальных читательных залах РГБ</a>
          </>
        ),
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
            {
    id: '0015', 
    position: { x: -2200, y: -400 }, 
    data: { 
      image: one15,
      info: {
        fullName: 'Иванова Евгения Владимировна',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: "Мифологическое смыслообразование. Образ культурного героя". КАНДИДАТ: Мифологический архетип диалектического мышления в свете антитезы добра и зла.',
        workPlace: 'ДОКТОР: Работа выполнена на кафедре истории и философии религии философского факультета Уральского государственного университета им. А.М.Горького. КАНДИДАТ: Работа выполнена на кафедре гносеологии, логики и философии науки Уральского Государственного Университета им.А.М.Горьного.',
        supervisors: 'КАНДИДАТ: Доктор философских наук, профессор Пивоваров Д. В..',
        opponents: 'ДОКТОР: Доктор философских наук, доцент Гагарин Анатолий Станиславович, доктор философских наук, доцент Коркунова Ольга Владимировна, доктор философских наук, доцент Мирошников Юрий Иванович. КАНДИДАТ: Доктор философских наук, профессор В.В. Скоробогоцкий, кандидат философских наук Б.С. Шалютин.',
        leadingOrganizations: 'ДОКТОР: Тюменский государственный университет. КАНДИДАТ: Кафедра философии Уральского государственного технического университета (УПИ).',
        defenseDate: 'ДОКТОР: 15 декабря 2005 года в 15 00 часов на заседании диссертационного совета Д.212. 286 02 по защите диссер таций на соискание ученой степени доктора философских наук при Уральском государственном университете им. А. М. Горько го по адресу: 620083, г. Екатеринбург, пр. Ленина,51, комн.246. КАНДИДАТ: 18 января 1996 г. в 12:00 часов на заседании диссертационного совета А.063.78.01 по защите диссертаций на соискание учёной степени доктора философских наук в Уральском государственном университете им. А.М. Горького (6200823, г. Екатеринбург, пр. Ленина, 51, комната 248).',
        storagePlace: 'ДОКТОР: С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета им. А.М.Горького. КАНДИДАТ: С диссертацией можно ознакомиться в библиотеке Уральского государственного университета им. А.М. Горького.',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
            {
    id: '0016', 
    position: { x: -4000, y: -400 }, 
    data: { 
      image: one16,
      info: {
        fullName: 'Завьялова Маргарита Павловна',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Проблема преемственности в социально-историческом познании: методологический и гносеологический аспекты. КАНДИДАТ: Проблема моделирования в историческом исследовании.',
        workPlace: 'ДОКТОР: Кафедра истории философии и логики философского факультета Томского государственного университета им. В.В. Куйбышева. КАНДИДАТ: Томский государственный университет им. В. В. Куйбышева.',
        supervisors: 'КАНДИДАТ: А. И. Уваров.',
        opponents: 'ДОКТОР: Доктор философских наук, профессор В.А. Ельчанинов; Доктор философских наук, профессор А.И. Зеленков; Доктор философских наук, профессор Л.Г. Олех.',
        leadingOrganizations: 'ДОКТОР: Московский государственный университет им. М.В. Ломоносова.',
        defenseDate: 'ДОКТОР: Защита состоялась в 1990 г. на заседании специализированного совета Д.002.77.02 по защите диссертаций на соискание учёной степени доктора наук при Институте истории, филологии и философии СО АН СССР. КАНДИДАТ: Томск, 1970.',
        storagePlace: 'ДОКТОР: С диссертацией можно ознакомиться в библиотеке Института истории, филологии и философии СО АН СССР. КАНДИДАТ: С диссертацией можно ознакомиться в библиотеке Томского государственного университета.',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
            {
    id: '0017', 
    position: { x: -4200, y: -400 }, 
    data: { 
      image: one17,
      info: {
        fullName: 'Гайда Анатолий Войцехович',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Критический анализ “неомарксистской” философии истории: методологический аспект. КАНДИДАТ: Субъект и объект практики и познания.',
        workPlace: 'ДОКТОР: ЛГУ им. А. А. Жданова. КАНДИДАТ: Уральский государственный университет им. А.М. Горького.',
        supervisors: 'ДОКТОР: Доктор философских наук, профессор К.Н. Любутин. КАНДИДАТ: Кандидат философских наук, доцент Любутин Константин Николаевич.',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'ДОКТОР: 1986. КАНДИДАТ: 1973.',
        storagePlace: '',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
            {
    id: '0018', 
    position: { x: -2800, y: -400 }, 
    data: { 
      image: one18,
      info: {
        fullName: 'Бряник Надежда Васильевна',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Онтогносеологические основания науки в России. КАНДИДАТ: Гносеологические проблемы формализации научного знания.',
        workPlace: 'ДОКТОР: Работа вполнена на кафедре философии Института по переподготовке и повышению квалификации преподавателей гуманитарных и социальных наук при Уральском государственном университете имени А. М. Горького.',
        supervisors: 'ДОКТОР: Научный консультант - доктор философских наук, профессор Лойфман И. Я..',
        opponents: 'ДОКТОР: Доктор философских наук, профессор В.А. Бажанов; Доктор философских наук, профессор В.А. Кайдаров; Доктор философских наук, профессор В.В. Скоробогацкий.',
        leadingOrganizations: 'ДОКТОР: Институт философии и права Уральского отделения Академии наук Российской Федерации.',
        defenseDate: 'ДОКТОР: «16» марта 1995 г. в 15 часов на заседани специализированного совета Д 063.78.01 по защите диссертаций на соискание ученой степени доктора философских наук в Уральском ордена Трудового Красного Знамени государственном университете им. А. М. Горького (620083, г. Екатеринбург, К-83, пр. Ленина51, комн. 248). КАНДИДАТ: 1975.',
        storagePlace: 'ДОКТОР: С диссертацией можно ознакомиться в библиотеке Уральского университета.',
        pretender: '',
      }
    },// Шаблон: ДОКТОР: . КАНДИДАТ: .
    type: 'custom',
    draggable: false 
  },
            {
    id: '0019', 
    position: { x: -3400, y: -400 }, 
    data: { 
      image: one19,
      info: {
        fullName: 'Анкин Дмитрий Владимирович',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: «Семиотика философии: философско-методологические аспекты». КАНДИДАТ: Семиологическое описание языка философии.',
        workPlace: 'ДОКТОР: Кафедра онтологии и теории познания УрГУ им. А. М. Горького. КАНДИДАТ: Уральский ордена Трудового Красного Знамени государственный университет им А.М. Горького, кафедра философии философского факультета.',
        supervisors: 'ДОКТОР: Доктор философских наук, профессор В.И. Плотников. КАНДИДАТ: Доктор философских наук, профессор В.И. Плотников.',
        opponents: 'ДОКТОР: Доктор философских наук, профессор В.И.Кашперский; Доктор философских наук, профессор Н.И.Мартишина; Доктор философских наук, профессор М.М.Шитиков. КАНДИДАТ: доктор философских наук, профессор В.В. Ким; Кандидат философских наук, профессор В.Б. Шнейдер.',
        leadingOrganizations: 'ДОКТОР: Челябинский государственный университет, г. Челябинск.. КАНДИДАТ: Екатеринбургский юридический институт /кафедра философии/.',
        defenseDate: 'ДОКТОР: 19 февраля 2004 г. в 15 часов на заседании диссертационного совета Д212.286.02 на соискание учёной степени доктора философских наук при Уральском государственном университете им. А.М. Горького (620083, г.Екатеринбург, К-83, пр.Ленина, 51, комн. 248). КАНДИДАТ: 18 февраля 1993 г. в 12 часов на заседании специализированного совета Д063.78.01 на защите диссертации на сосискание степени кандидата философских наук при Уральском ордена Трудового Красного Знамени государственном университете им. А.М. Горького /620083, г.Екатеринбург, К-83, пр.Ленина, 51, комн. 248/.',
        storagePlace: 'ДОКТОР: С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета им. А.М.Горького. КАНДИДАТ: С диссертацией можно ознакомиться в библиотеке Уральского университета.',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },// Третье поколение //
              {
    id: '0020', 
    position: { x: -4700, y: -100 }, 
    data: { 
      image: one20,
      info: {
        fullName: 'Шуталева Анна Владимировна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Проблема видения в контексте конститутивной онтологии сознания',
        workPlace: 'Кафедра онтологии и теории познания УрГУ им. А. М. Горького государственного университета им. А.М.Горького',
        supervisors: 'кандидат философских наук, доцент Д.В.Котелевский',
        opponents: 'доктор философских наук,профессор Е.Г.Трубина; кандидат философских наук,доцент Л.С.Чернов',
        leadingOrganizations: 'Уральский государственный технический университет - УПИ',
        defenseDate: '«22» февраля 2007 г. в 11 часов на заседании диссертационного совета Д 212.286.02 по защите диссертаций на соискание ученой доктора философских наук при Уральском государственном университете им. А.М.Горького по адресу: 620083, г.Екатеринбург, К-83, пр.Ленина, 51, комн. 248.',
        storagePlace: 'С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета им. А.М.Горького.',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                {
    id: '0021', 
    position: { x: -2500, y: -100 }, 
    data: { 
      image: one21,
      info: {
        fullName: 'Фархитдинова Ольга Михайловна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: '«Ирония: проблема определения и роль в философском познании»',
        workPlace: 'Кафедра онтологии и теории познания УрГУ им. А. М. Горького',
        supervisors: 'доктор философских наук, профессор, заслуженный деятель науки РФ Пивоваров Даниил Валентинович',
        opponents: 'Андрюхина Л.М., доктор философских наук, профессор; Коркунова О. В., кандидат философских наук, доцент',
        leadingOrganizations: 'Кафедра философии Уральского научного центра РАН',
        defenseDate: '20 мая 2004 года в 15:00 на заседании диссертационного совета Д.212.286.02 по защите диссертаций на соискание ученой степени доктора философских наук при Уральском государственном университете им. А.М. Горького по адресу: 620083, г. Екатеринбург, пр. Ленина, д.51, комн. 248',
        storagePlace: (
          <>
            С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета им. A.M. Горького. В полном объеме текст документа доступен в <a href="https://www.rsl.ru/ru/4readers/rooms/" target="_blank">читательных залах РГБ</a>, <a href="https://ldiss.rsl.ru/#libraries" target="_blank">виртуальных читательных залах РГБ</a>
          </>
        ),
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                {
    id: '0022', 
    position: { x: -3700, y: -100 }, 
    data: { 
      image: one22,
      info: {
        fullName: 'Ускова Екатерина Викторовна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: '«Рациональность в контексте проблемы реализм/релятивизм»',
        workPlace: 'Кафедра онтологии и теории познания УрГУ им. А. М. Горького',
        supervisors: 'доктор философских наук, профессор Д. В. Анкин',
        opponents: 'Русаков В.М., доктор философских наук, профессор; Уколов С.Ю., кандидат философских наук, доцент',
        leadingOrganizations: 'Институт философии и права Уральского отделения РАН',
        defenseDate: '22 декабря 2005 г. на заседании диссертационного совета Д 212.282.02 по соискание ученой степени доктора философских наук при Уральском государственном университете  им. А.М. Горького по адресу: 620083, г. Екатеринбург, К-83, пр. Ленина, 51, комн. 248',
        storagePlace: (
          <>
            С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета им. A.M. Горького. В полном объеме текст документа доступен в <a href="https://www.rsl.ru/ru/4readers/rooms/" target="_blank">читательных залах РГБ</a>, <a href="https://ldiss.rsl.ru/#libraries" target="_blank">виртуальных читательных залах РГБ</a>
          </>
        ),
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                {
    id: '0023', 
    position: { x: -2900, y: -100 }, 
    data: { 
      image: one23,
      info: {
        fullName: 'Уколов Сергей Юрьевич',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Философские основания становления символической логики: Программа построения "чистой логики" Э. Гуссерля и предикативная концепция логического анализа Л. Витгенштейна',
        workPlace: 'Кафедра онтологии и теории познания Уральскогс государственного университета им. А. М. Горького.',
        supervisors: 'доктор философских наук,  профессор Н. В. Бряник',
        opponents: 'Уральский государственный педагогический институт',
        leadingOrganizations: 'Уральский государственный педагогический университет',
        defenseDate: '23 мая 2000 г. в 15 часов на заседании диссертационного совета Д 063.78.06 по защите диссертаций на соискание ученой степени доктора философских наук а Уральском государственном университете им. А. М. Горького (620083 г. Екатеринбург, К-83, пр. Ленина, 51, комн. 248)',
        storagePlace: 'С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета.',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                {
    id: '0024', 
    position: { x: -2700, y: -100 }, 
    data: { 
      image: one24,
      info: {
        fullName: 'Сухарева Виктория Алексеевна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Проблема взаимоотношения реальности, репрезентации и знаковости в современной французской философии',
        workPlace: 'Работа выполнена в федеральном государственном автономном образовательном учреждении высшего образования «Уральский федеральный университет имени первого Президента России Б.Н. Ельцина».',
        supervisors: 'кандидат философских наук, доцент Суслов Николай Владимирович',
        opponents: 'Дьяков Александр Владимирович, доктор философских наук; доцент Демин Илья Вячеславович, доктор философских наук; доцент Шестова Евгения Александровна, кандидат философских наук',
        leadingOrganizations: '',
        defenseDate: '29 июня 2023 г. в 16 час. 30 мин. на заседании диссертационного совета «НИ ТГУ.5.7.01», созданного на базе философского факультета федерального государственного автономного образовательного учреждения высшего образования «Национальный исследовательский Томский государственный университет», по адресу: 634050, г. Томск, пр. Ленина, 36 (учебный корпус № 4 ТГУ, аудитория 306).',
        storagePlace: (
          <>
            С диссертацией можно ознакомиться в Научной библиотеке и на официальном сайте федерального государственного автономного образовательного учреждения высшего образования «Национальный исследовательский Томский государственный университет» <a href="https://www.tsu.ru" target="_blank">www.tsu.ru.</a>
          </>
        ),
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                {
    id: '0025', 
    position: { x: -4100, y: -100 }, 
    data: { 
      image: one25,
      info: {
        fullName: 'Рыжкова Галина Семеновна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Нормативное регулирование социальных процессов',
        workPlace: '',
        supervisors: '',
        opponents: '',
        leadingOrganizations: '',
        defenseDate: 'Москва, 1984',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                {
    id: '0026', 
    position: { x: -3100, y: -100 }, 
    data: { 
      image: one26,
      info: {
        fullName: 'Пырина Мария Владимировна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: '«Онто-гносеологические основания субъекта права»',
        workPlace: 'Кафедра онтологии и теории познания «Уральский федеральный университет имени первого Президента России Б. Н. Ельцина»',
        supervisors: 'доктор философских наук,  профессор Н. В. Бряник',
        opponents: 'Пантыкина Марина Ивановна, доктор философских наук, доцент, ФГБОУ ВО «Тольяттинский государственный университет», заместитель директора по учебно-методической работе гуманитарно-педагогического института; Дидикин Антон Борисович, доктор философских наук, кандидат юридических наук, ФГБУН Институт государства и права РАН (г. Москва), ведущий научный сотрудник сектора философии права, истории и теории государства и права.',
        leadingOrganizations: 'Институт философии и права УрО РАН, г. Екатеринбург',
        defenseDate: '25 апреля 2019 года в 12;00 на заседании диссертационного совета Д 212.285.14 на базе ФГАОУ ВО «Уральский федеральный университет имени первого Президента России Б. Н. Ельцина» по адресу: 620000, г. Екатеринбург, пр. Ленина 51, зал заседаний диссертационных советов, комн. 284',
        storagePlace: <a href="https://elar.urfu.ru/bitstream/10995/66707/1/urfu1934_d.pdf" target="_blank">Перейти по ссылке</a>,
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                {
    id: '0027', 
    position: { x: -4500, y: -100 }, 
    data: { 
      image: one27,
      info: {
        fullName: 'Лейканд Елена Владимировна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: '"Дуалистический антропологизм: эволюция понимания мужского и женского начал в истории европейской философии"',
        workPlace: 'Уральский ордена Трудового Красного Знамени государственный университет, кафедра истории философии',
        supervisors: 'Доктор философских наук, проффесор А.В. Перцев',
        opponents: 'Доктор философских наук, проффесор Розин В.М.;Кандидат философских наук, доцент Зудихина Н.С.',
        leadingOrganizations: 'Уральский государственный технический университет',
        defenseDate: '21 октября 1999 г. в 15:00 час, Заседание диссертационного совета 21.06.7.8.01 по защите диссертаций на соискание ученой степени доктора философских наук при Уральском государственном университете им. А.М. Горького (620083, г. Екатеринбург, К-85, пр. Ленина, 51, ком. 248).',
        storagePlace: '',
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                {
    id: '0028', 
    position: { x: -3500, y: -100 }, 
    data: { 
      image: one28,
      info: {
        fullName: 'Ламберов Лев Дмитриевич',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: '"Семантические и онтологические аспекты дефляционных теорий истины (аналитический подход)"',
        workPlace: 'Кафедра онтологии и теории познания УрГУ им. А. М. Горького',
        supervisors: 'д. ф. н., доцент, Дмитрий Владимирович Анкин (на тот момент — заведующий кафедрой)',
        opponents: '(1) д. ф. н., профессор Максим Владимирович Лебедев (на тот момент — генеральный директор Научного центра методологии искусственного интеллекта, г. Москва); (2) к. ф. н. Екатерина Викторовна Ускова (на тот момент — доцент кафедры философии Уральского государственного технического университета УПИ)',
        leadingOrganizations: 'ГОУ ВПО «Томский государственный университет»',
        defenseDate: '28.06.2010 г. в 13 часов на заседании Диссертационного совета Д 212.286.02, ГОУ ВПО «Уральский государственный университет им. А. М. Горького», 620083, г. Екатеринбург, пр. Ленина, д. 51',
        storagePlace: <a href="https://drive.google.com/file/d/12wJt0Ox7K11voAbNozVYAHwrKby_dNwY/view?usp=drive_link" target="_blank">Перейти по ссылке</a>,
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                {
    id: '0029', 
    position: { x: -2100, y: -100 }, 
    data: { 
      image: one29,
      info: {
        fullName: 'Кузнецова Олеся Васильевна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Феномен духовных практик в современной России: организационные формы и основные участники',
        workPlace: 'Работа выполнена на кафедре онтологии и теории познания Федерального государственного автономного образовательного учреждение высшего образования «Уральский федеральный университет имени первого Президента России Б. Н. Ельцина»',
        supervisors: 'Иванова Евгения Владимировна, доктор философских наук, доцент',
        opponents: 'Матецкая Анастасия Витальевна, доктор философских наук, доцент; Степанова Елена Алексеевна, доктор философских наук, доцент; Зудов Евгений Владимирович, кандидат философских наук',
        leadingOrganizations: '',
        defenseDate: '«26» октября 2022 г. в «11.00» на заседании диссертационного совета УрФУ 5.7.05.11 по адресу: 620000, г. Екатеринбург, пр. Ленина, 51, зал заседаний диссертационных советов, ком. 248.',
        storagePlace: <a href="https://dissovet2.urfu.ru/pluginfile.php/132/mod_data/content/84521/%D0%94%D0%B8%D1%81%D1%81%D0%B5%D1%80%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BE%D0%B2%D0%BE%D0%B9%20%D0%9E.%D0%92..pdf" target="_blank">Перейти по ссылке</a>,
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                {
    id: '0030', 
    position: { x: -3300, y: -100 }, 
    data: { 
      image: one30,
      info: {
        fullName: 'Козырева Ольга Александровна',
        position: 'Старший преподаватель, доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: '«Модель картезианского знания о себе и её критика в англоязычной аналитической философии XX-XXI века»',
        workPlace: 'Работа выполнена в федеральном государственном автономном образовательном учреждении высшего образования «Уральский федеральный университет имени первого Президента России Б.Н. Ельцина».',
        supervisors: 'доктор философских наук, доцент Анкин Дмитрий Владимирович',
        opponents: 'Борисов Е. В.(«Национальный исследовательский Томский государственный университет»,) ,Каримов А. Р.( «Казанский (Приволжский) федеральный университет»,), Нехаев А. В. («Тюменский государственный университет»,).',
        leadingOrganizations: '',
        defenseDate: 'Защита состоялась 26 марта 2021г. в 14.00 на заседании диссертационного совета «НИ ТГУ.09.01», созданного на базе философского факультета федерального государственного автономного образовательного учреждения высшего образования «Национальный исследовательский Томский государственный университет», по адресу: 634050, г. Томск, пр. Ленина, 36 (учебный корпус No 4 ТГУ, аудитория 306).',
        storagePlace: <a href="https://drive.google.com/file/d/1YTNWdNs8z7Vu8CHv1XoXmugmwcS7a23o/view?usp=drive_link" target="_blank">Перейти по ссылке</a>,
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                  {
    id: '0031', 
    position: { x: -4900, y: -100 }, 
    data: { 
      image: one31,
      info: {
        fullName: 'Кислов Алексей Геннадьевич',
        position: 'Заведующий кафедрой',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Онто-гносеологические основания логического анализа динамических контекстов',
        workPlace: 'Диссертация выполнена на кафедре онтологии и теории Познания Уральского государственного университета им. А. М. Горького.',
        supervisors: 'доктор философских наук, профессор В.О. Лобовиков.',
        opponents: 'доктор философских наук, профессор Бочаров В.А.; Кандидат филсюофских наук, доцент Максимов А.А.',
        leadingOrganizations: 'Уральский государственный педагогически университет.',
        defenseDate: '«21» марта 2000 г. в 13 часов на заседани диссертационного совета Д 063.78.06 по защите диссертаций на соискание ученой степени доктора философских наук в Уральском государственном университете им. А. М. Горького (620083, г. Екатеринбург, К-83, пр. Ленин 51, комн. 248).',
        storagePlace: (
          <>
            С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета им. A.M. Горького. В полном объеме текст документа доступен в <a href="https://www.rsl.ru/ru/4readers/rooms/" target="_blank">читательных залах РГБ</a>, <a href="https://search.rsl.ru/ru/record/01000265730" target="_blank">виртуальных читательных залах РГБ</a>
          </>
        ),
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                  {
    id: '0032', 
    position: { x: -2300, y: -100 }, 
    data: { 
      image: one32,
      info: {
        fullName: 'Зайцев Павел Леонидович',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: "Мужское" в словесных формах духовной культуры. КАНДИДАТ: Априоризм в познании истории.',
        workPlace: 'ДОКТОР: Работа выполнена на кафедре философии ГОУ ВПО «Омский государственный педагогический университет».',
        supervisors: 'ДОКТОР: доктор философских наук, профессор Федяев Дмитрий Михайлович.',
        opponents: 'ДОКТОР: доктор философских наук, профессор Бурханов Рафаэль Айратович, ГОУ ВПО «Нижневартовский гуманитарный университет»; доктор философских наук, профессор Денисова Любовь Владиленовна, ГОУ ВПО «Омская академия MB Д России»; доктор философских наук, профессор Пивоваров Даниил Валентинович, ГОУ ВПО «Уральский государственный университет им А М Горького».',
        leadingOrganizations: 'ДОКТОР: ГОУ ВПО «Курганский государственный университет».',
        defenseDate: 'ДОКТОР: 8 ноября 2007 г в 15 00 на заседании диссертационного совета Д212 177 03 по защите диссертаций на соискание ученой степени доктора наук при Омском государственном педагогическом университете по адресу 644050, г Омск, пр Мира, 32, ауд 305. КАНДИДАТ: Омск, 2000.',
        storagePlace: (
          <>
            ДОКТОР: С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета им. A.M. Горького. В полном объеме текст документа доступен в <a href="https://www.rsl.ru/ru/4readers/rooms/" target="_blank">читательных залах РГБ</a>, <a href="https://search.rsl.ru/ru/record/01004110120" target="_blank">виртуальных читательных залах РГБ</a>
          </>
        ),
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                  {
    id: '0033', 
    position: { x: -4300, y: -100 }, 
    data: { 
      image: one33,
      info: {
        fullName: 'Белоножко Наталья Викторовна',
        position: 'Доцент',
        degree: 'Кандидат философских наук',
        thesisTopic: 'Генеалогия и структура политического мифа',
        workPlace: 'Институт философии УрО РАН',
        supervisors: 'Гайда Анатолий Войцехович',
        opponents: 'Любутин Константин Николаевич',
        leadingOrganizations: 'Институт философии УрО РАН',
        defenseDate: '18.12.1996, Институт философии УрО РАН',
        storagePlace: (
          <>
            Российская государственная библиотека (РГБ) Адрес:119019, г. Москва, ул. Воздвиженка, 3/5. <a href="https://rusneb.ru/catalog/000199_000009_000161142/?ysclid=lw5xjd04ou608328975" target="_blank">Перейти по ссылке</a>.
          </>
        ),
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
                  {
    id: '0034', 
    position: { x: -3900, y: -100 }, 
    data: { 
      image: one34,
      info: {
        fullName: 'Бакеева Елена Васильевна',
        position: 'Профессор',
        degree: 'Доктор философских наук. Кандидат философских наук.',
        thesisTopic: 'ДОКТОР: Понимание как воссоздание смысла бытия: апофатический путь. КАНДИДАТ: Межтеоретический диалог в историко-философском познании: основания, формы и функции.',
        workPlace: 'ДОКТОР: Кафедра онтологии и теории познания УрГУ им. А. М. Горького. КАНДИДАТ: Кафедра философии философского факультета Томского государственного университета.',
        supervisors: 'ДОКТОР: доктор философских наук, профессор В. И. Плотников. КАНДИДАТ: доктор философских наук, профессор М.П. Завьялова.',
        opponents: 'ДОКТОР: доктор философских наук, профессор А. С Гагарин; доктор философских наук, профессор В. А. Кайдалов; доктор философских наук, профессор Л. А. Мясникова. КАНДИДАТ: доктор философских наук, профессор Ю.В. Петров; доктор философских наук, профессор А.А. Копылов.',
        leadingOrganizations: 'ДОКТОР: Томский государственный университет. КАНДИДАТ: Кафедра филосодии и истории культуры Санкт-Петербургского технологического института холодильной промышленности.',
        defenseDate: 'ДОКТОР: «20» сентября 2005 г в 15 часов на заседании диссертационного совета Д.212 286.02 по защите диссертаций на соискание ученой степени доктора философских наук в Уральском государственном университете им. А. М. Горького (620083 г Екатеринбург, К-83, пр Ленина, 51, комн. 248). КАНДИДАТ: 6 апреля 1993 г. В 14 час. на заседании специализированного совета Д.063 53.06 по присуждению ученой степени кандидата философских наук по специальности 09.00.01 /диалектика и теория познания/ в Томском государственном университете им. В. В. Куйбышева: 634010, г Томск, пр Ленина, 36, ауд. 150.',
        storagePlace: (
          <>
            ДОКТОР: С диссертацией можно ознакомиться в научной библиотеке Уральского государственного университета им. А. М Горького. <a href="https://elar.urfu.ru/bitstream/10995/677/1/urgu0324s.pdf?ysclid=ma0tjre953807177348" target="_blank">Перейти по ссылке</a>.
            <br/>
            КАНДИДАТ: С диссертацией можно ознакомиться в научной библиотеке Томского государственного университета. <a href="https://cheloveknauka.com/v/413322/a?#?page=1" target="_blank">Перейти по ссылке</a>.
          </>
        ),
        pretender: '',
      }
    },
    type: 'custom',
    draggable: false 
  },
];

const initialEdges = [
  // Первое древо узлы //
  { id: '1', source: '1', target: '2' },
  { id: '2', source: '10', target: '3' },
  { id: '3', source: '12', target: '5' },
  { id: '4', source: '2', target: '6' }, 
  { id: '5', source: '12', target: '8' }, 
  { id: '6', source: '4', target: '10'}, 
  { id: '7', source: '1', target: '12' }, 
  { id: '8', source: '3', target: '15' }, 
  { id: '9', source: '4', target: '16' }, 
  { id: '10', source: '5', target: '17' }, 
  { id: '11', source: '6', target: '18' }, 
  { id: '12', source: '7', target: '19' }, 
  { id: '13', source: '8', target: '20' }, 
  { id: '14', source: '9', target: '21' }, 
  { id: '15', source: '10', target: '22' }, 
  { id: '16', source: '9', target: '23' }, 
  { id: '17', source: '3', target: '24' }, 
  { id: '18', source: '13', target: '26' }, 
  { id: '19', source: '3', target: '27' }, 
  { id: '20', source: '11', target: '28' },
  //Второе древо узлы //
  // олды //
  { id: '01', source: '02', target: '01' }, // Колган
  { id: '02', source: '03', target: '05' }, // Любутин
  { id: '03', source: '01', target: '06' }, // Еремеев
  // олды // 
  { id: '04', source: '05', target: '09' }, // Перцев
  { id: '05', source: '06', target: '010' }, // Круглова
  { id: '06', source: '03', target: '011' }, 
  { id: '07', source: '07', target: '012' }, // Орлов
  { id: '08', source: '04', target: '08' }, // Кемеров
  // снизу янг персоны //
  { id: '09', source: '06', target: '014' }, 
  { id: '010', source: '06', target: '015' },
  { id: '011', source: '01', target: '016' },
  { id: '012', source: '05', target: '017' },
  { id: '013', source: '08', target: '018' }, // Керимов
  { id: '014', source: '09', target: '019' }, // Черепанова
  { id: '015', source: '06', target: '020' },
  { id: '016', source: '010', target: '021' }, // Гудова
  { id: '017', source: '07', target: '022' },
  { id: '018', source: '011', target: '023' }, // Аржанухин
  { id: '019', source: '01', target: '024' },
  { id: '020', source: '01', target: '025' },
  { id: '021', source: '03', target: '026' },
  { id: '022', source: '09', target: '027' },
  { id: '023', source: '01', target: '028' },
  { id: '024', source: '05', target: '029' },
  { id: '025', source: '012', target: '030' },
  { id: '026', source: '01', target: '031' },
  { id: '027', source: '013', target: '032' },
  // Третье древо узлы //
  // олды // 
  { id: '001', source: '004', target: '008' }, // Руткевич Лойфман
  { id: '002', source: '004', target: '006' }, // Руткевич Пивоваров
  { id: '003', source: '004', target: '003' }, // Руткевич Савцова
  { id: '003', source: '009', target: '005' }, // Коган Плотников
  // молодые // 
  { id: '004', source: '006', target: '0010' },
  { id: '005', source: '008', target: '0011' },
  { id: '006', source: '007', target: '0012' },
  { id: '007', source: '001', target: '0013' },
  { id: '008', source: '003', target: '0014' },
  { id: '009', source: '006', target: '0015' },
  { id: '0010', source: '002', target: '0016' },
  { id: '0011', source: '007', target: '0017' },
  { id: '0012', source: '008', target: '0018' },
  { id: '0013', source: '005', target: '0019' },
  // янги //
  { id: '0014', source: '0014', target: '0020' }, // котелевский
  { id: '0015', source: '006', target: '0021' },
  { id: '0016', source: '0019', target: '0022' },
  { id: '0017', source: '0018', target: '0023' },
  { id: '0018', source: '0011', target: '0024' },
  { id: '0019', source: '0018', target: '0026' },
  { id: '0020', source: '0012', target: '0027' },
  { id: '0021', source: '0019', target: '0028' },
  { id: '0022', source: '0015', target: '0029' },
  { id: '0023', source: '0019', target: '0030' },
  { id: '0024', source: '0013', target: '0031' },
  { id: '0025', source: '0010', target: '0032' },
  { id: '0026', source: '0017', target: '0033' },
  { id: '0027', source: '0016', target: '0034' },
  { id: '0028', source: '005', target: '0034' },
];

// Кастомный компонент узла
const CustomNode = ({ data, onClick, isConnectable }) => {
  return (
    <div onClick={onClick}  style={{ cursor: 'pointer', textAlign: 'center', width: '100px'}}>
      <img src={data.image} alt="Employee" style={{ width: '100%', height: 'auto', borderRadius: '0%', }} />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        id="a"
        style={{visibility: 'hidden'}}
      />
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        id="b"
        style={{visibility: 'hidden'}}
      />
      <div>{data.info.fullName}</div>
    </div>
  );
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [info, setInfo] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const handleNodeClick = (event, node) => {
    setInfo(node.data.info);
  };

  const closeInfoWindow = () => {
    setInfo(null);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick} // Добавляем обработчик клика
        nodeTypes={{ custom: CustomNode }} // Указываем кастомный компонент узла
        nodesConnectable={false} // Выключаем возможность соединения узлов
        elementsSelectable={false} // Выключаем выбор элементов
        zoomOnScroll={true} // Включаем зум при прокрутке
        fitView // Автоматически подгоняет вид
        style={{ backgroundColor: 'beige' }}
      >
      <Controls />
      </ReactFlow>

      {/* Всплывающее окно с информацией */}
      {info && (
        <div style={{
          position: "absolute",
          top: "20%",
          left: "20%",
          backgroundColor: "white",
          border: "1px solid black",
          padding: "20px",
          zIndex: 10,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)"
        }}>
          <h2>{info.fullName}</h2>
          <p><strong>Должность:</strong> {info.position}</p>
          <p><strong>Учёная степень:</strong> {info.degree}</p>
          <p><strong>Тема работы:</strong> {info.thesisTopic}</p>
          <p><strong>Место выполнения работы:</strong> {info.workPlace}</p>
          <p><strong>Научные руководители:</strong> {info.supervisors}</p>
          <p><strong>Оппоненты:</strong> {info.opponents}</p>
          <p><strong>Ведущие организации:</strong> {info.leadingOrganizations}</p>
          <p><strong>Дата и место защиты:</strong> {info.defenseDate}</p>
          <p><strong>Работа или её место хранения:</strong> {info.storagePlace}</p>
          <p><strong>Последователь:</strong> {info.pretender}</p>
          <button onClick={closeInfoWindow}>Закрыть</button>
        </div>
      )}
    </div>
  );
}

export default App;
