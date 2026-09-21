import { EventDetails, ConfirmedSession, Speaker, AgendaItem, FAQItem, Partner, GOHPerson, CEOPerson, TimelineItem, GalleryPhoto } from './types';

// =========================================================================
// [REGISTRATION CONFIG]
// Interim registration link (Mailing-list sign-up form):
// https://forms.gle/arYvg9dxbyF7um5GA
// >> SWAP THIS URL ONCE THE OFFICIAL EO REGISTRATION LANDING PAGE IS READY! <<
// =========================================================================
export const INTERIM_REGISTRATION_URL = 'https://forms.gle/arYvg9dxbyF7um5GA';
export const REGISTRATION_QR_URL = '/registration-qr.png';

export const EVENT_BASICS_2026: EventDetails = {
  dateEn: '24 October 2026 (Saturday), 11:00am – 5:00pm',
  dateZh: '2026年10月24日（星期六），上午11:00 – 下午5:00',
  venueEn: 'Temasek Polytechnic Auditorium 1, 21 Tampines Ave 1, Singapore 529757',
  venueZh: '淡马锡理工学院第一大礼堂，新加坡淡马锡大道21号，邮编529757',
  themeEn: 'Riding the New Wave: Future of Work Reimagined',
  themeZh: '乘风破浪：共创未来新职场'
};

export const FORUM_THEME_2026 = {
  en: {
    badge: 'FORUM THEME',
    title: 'Riding the New Wave: Future of Work Reimagined',
    paragraphs: [
      'Global events and rapid advances in technology are changing the way we live, work and build our careers. New industries are emerging, jobs are evolving, and the skills needed to succeed are constantly changing. Instead of asking, "What is the right first job?" Today\'s youths are increasingly asking, "How do I stay relevant in a world that keeps changing?"',
      '"Riding the New Wave: Future of Work Reimagined" invites youths to explore this question together. The forum encourages participants to move beyond traditional career paths and build the adaptability, digital confidence and cross-border experiences needed to thrive in the future. Through discussions on emerging industries, overseas opportunities, entrepreneurship and regional trends, youths will gain fresh perspectives, practical insights and meaningful connections to navigate new opportunities across Singapore, China and the wider region.'
    ]
  },
  zh: {
    badge: '论坛主题',
    title: '乘风破浪：共创未来新职场',
    paragraphs: [
      '当今世界正处于百年不遇之变局中，无论是国际形势风向的变幻更迭还是新兴科技与产业的颠覆重塑，皆是你我青年能把握的机遇与待应对的挑战。前者在暴露现有国际合作脆弱性的同时却也催生了跨界融合及多元发展的新契机；而后者虽然为青年带来新赛道和新舞台，但也同时加速了技术和技能迭代，为青年带来了保持自身核心竞争力的挑战。',
      '本次论坛主题《乘风破浪：共创未来新职场》，正是向每一位在时代洪流中前行的青年发出的诚挚邀约。我们呼吁青年跳出传统线性职业规划的框架，主动、大胆地构想未来职场与个人发展的新可能性。我们期待与各位青年共同探讨，如何在拥抱最新趋势的同时磨炼出难以被替代的适应力、技术敏锐度与跨文化协同力，并在时代的浪潮中不断地拓宽自身认知和能力边界。愿每一位青年都能乘新趋势之浪，破逆境之风，在充满变局的世界中实现自己对未来的美好构想。'
    ]
  }
};

export const GOH_2026: GOHPerson = {
  nameEn: 'Mr Desmond Tan Kok Ming',
  nameZh: '陈国明',
  postEn: "Senior Minister of State, Prime Minister's Office; Deputy Secretary-General, NTUC",
  postZh: '总理公署高级政务部长；全国职工总会副秘书长',
  mpEn: 'MP for Pasir Ris-Changi GRC (Pasir Ris Central)',
  mpZh: '白沙-榜鹅集选区（白沙中分区）国会议员',
  photoUrl: '/desmond-tan-headshot.jpg',
  fullPhotoUrl: '/desmond-tan.jpg',
  bioEn: "Mr Desmond Tan is the Deputy Secretary-General of NTUC since 30 June 2022 and Senior Minister of State in the Prime Minister's Office. He is MP for Pasir Ris-Changi GRC (Pasir Ris Central). He previously served as Minister of State for Home Affairs, and Sustainability and the Environment, and spent over 30 years in public service including as CED of the People's Association and Chief of Staff (General Staff), MINDEF.",
  bioZh: '陈国明先生自2022年6月30日起担任全国职工总会副秘书长，并任总理公署高级政务部长。他同时担任白沙-榜鹅集选区（白沙中分区）国会议员。此前，他曾任内政部兼永续发展与环境部政务部长，并在公共服务领域任职30余年，历任人民协会总执行长及新加坡武装部队总参谋长。',
  dualRoleNoteEn: 'Guest of Honour & Fireside Chat Speaker',
  dualRoleNoteZh: '主礼嘉宾兼炉边对话演讲嘉宾'
};

export const CEO_2026: CEOPerson = {
  nameEn: 'Ms Kwek Poh Heok',
  nameZh: '郭碧叶',
  postEn: 'Chief Executive Officer, Business China',
  postZh: '通商中国总裁',
  appointmentEn: 'Appointed CEO of Business China on 1 July 2025',
  appointmentZh: '于2025年7月1日起担任通商中国总裁',
  photoUrl: '/kwek-poh-heok.jpg',
  bioEn: 'Ms Kwek Poh Heok was appointed Chief Executive Officer of Business China on 1 July 2025. She was previously overseeing global government relations at a NASDAQ-listed global technology company. Prior to this, she spent 18 years in the Singapore Public Service, including heading the National Population and Talent Division in the PMO Strategy Group and serving as Deputy Principal Private Secretary to then-Deputy Prime Minister Heng Swee Keat. She also worked across the Ministry of Education, Finance, Home Affairs, Manpower and Communications and Information, and was the first Programme Director of the Lee Kuan Yew Fund for Bilingualism. She holds a Bachelor of Science (First Class Honours) in Economics from LSE, a Master of Arts in International Policy Studies from Stanford, and a Master of Counselling from Monash University.',
  bioZh: '郭碧叶女士于2025年7月1日起担任通商中国总裁。她曾在一家纳斯达克上市的全球科技公司负责全球政府事务。在加入私人企业之前，她在新加坡公共服务领域工作了18年，曾负责统筹总理公署的国家人口及人才署事务，并担任王瑞杰前副总理的副首席私人秘书，也曾在教育部、财政部、内政部、人力部、前通讯及新闻部工作，并兼任李光耀双语基金首任项目总监。她毕业于伦敦政治经济学院，获得经济学一等荣誉学士学位，并取得斯坦福大学国际政策研究硕士学位、莫纳什大学心理咨询硕士学位。',
  fullBioEn: [
    'Ms Kwek Poh Heok was appointed Chief Executive Officer of Business China on 1 July 2025.',
    'She was previously overseeing global government relations at a NASDAQ-listed global technology company. She built relationships with government bodies, regulatory entities and business partners to advance commercial operations and innovation launches, working closely with a multinational workforce.',
    'Prior to this, she spent 18 years in the Singapore Public Service. As a former Administrative Officer, she served in different roles and ministries. She headed the National Population and Talent Division in the Prime Minister\'s Office Strategy Group and served as Deputy Principal Private Secretary to then-Deputy Prime Minister Heng Swee Keat.',
    'Poh Heok also worked in the Ministry of Education, Ministry of Finance, Ministry of Home Affairs, Ministry of Manpower and then-Ministry of Communications and Information. During her time at the Ministry of Education, she was concurrently appointed as the first Programme Director of the Lee Kuan Yew Fund for Bilingualism. She also completed a short stint at the Permanent Mission of Singapore to the United Nations in New York.',
    'Her professional experience includes working with stakeholders in China across government, corporate and public-private contexts. She undertook two stints in China. Her career began with an Asian Business Fellowship awarded by the Ministry of Trade and Industry. She worked for Standard Chartered Bank\'s Consumer Banking in Shanghai during the bank\'s early entry into the China market. She held roles in strategic planning and the CEO\'s office at Sino-Singapore Tianjin Eco-City investment and Development., Ltd, the master developer of the flagship Government-to-Government project between Singapore and China.',
    'During her public service career, she worked closely with government agencies to advance Singapore-China relations. She contributed to engagements led by senior political office holders and high-level platforms such as the Joint Council for Bilateral Cooperation, Singapore-China Forum on Leadership and Singapore\'s cooperation councils with Jiangsu and Shanghai.',
    'Poh Heok is passionate about social equity and sustainable development and is active in the non-profit space. She is currently a Board Director of SG Her Empowerment, a non-profit organisation that empowers girls and women, and a School Advisory Committee member of Yishun Town Secondary School. She volunteers with HCSA Community Services SPIN that supports single parents. She is a member of the Management Board of the East Asian Institute, National University of Singapore. She also serves as a member of the National Integration Council, under the Ministry of Culture, Community and Youth. In addition, she is a Board Adviser to Clean Kinetics, a Singapore company specialising in renewable energy solutions that operates in Southeast Asia and the Middle East.',
    'Poh Heok graduated with a Bachelor of Science (First Class Honours) in Economics from the London School of Economics and Political Science. She holds a Master of Arts in International Policy Studies from Stanford University and a Master of Counselling from Monash University.'
  ],
  fullBioZh: [
    '郭碧叶女士于2025年7月1日起担任通商中国总裁。',
    '郭女士曾在一家纳斯达克上市的全球科技公司负责全球政府事务，致力于与政府机构、监管机构及业务合作伙伴建立关系，推动商业运营和创新项目的落地，并与来自不同国家的团队密切合作。在加入私人企业之前，她在新加坡公共服务领域工作了18年。作为前行政服务官曾在多个部门担任不同职位，她曾负责统筹总理公署的国家人口及人才署事务，并担任王瑞杰前副总理的副首席私人秘书；也曾在教育部、财政部、内政部、人力部、前通讯及新闻部工作，并曾短期派驻新加坡常驻纽约联合国代表团工作。在教育部任职期间，她亦兼任李光耀双语基金首任项目总监。',
    '在中国事务方面，郭女士积累了跨领域经验，涵盖政府、企业及公私合作项目。她曾两度到中国工作，第一次是职业生涯的开始，通过新加坡贸工部亚洲工商人才培训计划前往上海，加入渣打银行个人银行业务部，参与该行在中国市场的初期拓展工作；第二次则是参与新中两国政府合作的旗舰项目—中新天津生态城，在生态城主体开发商—中新天津生态城投资开发有限公司担任战略规划负责人兼总裁办公室核心成员，深度参与生态城的开发与实施。',
    '在推动新中关系发展方面，郭女士任职于政府机构期间，参与由两国政治领导人主导的新中双边合作联合委员会会议、新中领导力论坛，以及新加坡与江苏、上海两地的省级合作理事会项目。',
    '郭碧叶致力于社会公益事业，关注社会公平与可持续发展。她现为新加坡妇女发展与支援组织（非营利组织）董事，同时担任毅道中学咨询委员会成员。她作为HCSA社区服务SPIN的志愿者，为单亲家长提供支持。她是新加坡国立大学东亚研究所管理委员会成员。她也是文化、社区及青年部国民融合理事会成员。在商业咨询方面，她担任新加坡清节源公司的顾问，该公司专注于可再生能源解决方案，业务覆盖东南亚与中东地区。',
    '郭女士毕业于伦敦政治经济学院，获得经济学一等荣誉学士学位，并取得斯坦福大学国际政策研究硕士学位、莫纳什大学心理咨询硕士学位。'
  ]
};

export const CONFIRMED_SESSIONS_2026: ConfirmedSession[] = [
  {
    id: 'session-1',
    sessionNumber: 1,
    sessionTypeEn: 'Fireside Chat',
    sessionTypeZh: '炉边对话',
    titleEn: 'Fireside Chat: Navigating the New Business Landscape and Way of Working',
    titleZh: '与陈国明高级政务部长共探商业新格局与工作新范式',
    descriptionEn: 'Technological disruption, demographic changes, and deeper regional connectivity are reshaping the way work is defined across Asia. For young individuals, this equates to entering a landscape where jobs are rapidly being redesigned. This fireside chat with SMS Desmond Tan will explore what this changing environment means for the next generation, and what questions young people should be asking as they prepare for the future.',
    descriptionZh: '本区域内的工作范式正深受技术变革、人口结构变化及区域互联互通深化等因素的影响而持续重塑。本次与总理公署高级政务部长陈国明先生的炉边对话，将聚焦这一变动环境对下一代所带来的启示，并探讨青年在面向未来时应提出哪些关键问题。'
  },
  {
    id: 'session-2',
    sessionNumber: 2,
    sessionTypeEn: 'Panel',
    sessionTypeZh: '专题讨论',
    titleEn: 'Panel: Understanding How Emerging Frontiers in Technology Are Reshaping Industry and Creating New Possibilities',
    titleZh: '智能时代的"工作革命"：价值重构与青年机遇',
    descriptionEn: 'Emerging technologies and their associated industries are often indicative of future economic transformations. This panel explores three transformations — Future Media, Future Health and Future Connectivity — through cross-industry case studies, helping youths identify transferable competencies and adaptive mindsets for future-ready careers.',
    descriptionZh: '新兴科技及相关产业往往是经济模式转型的风向指标。本论坛将围绕未来媒体、未来健康与未来互联三大转型方向，通过跨行业案例研讨，帮助青年提炼可迁移的核心职业能力。'
  },
  {
    id: 'session-3',
    sessionNumber: 3,
    sessionTypeEn: 'Grand Debate',
    sessionTypeZh: '青年大辩论',
    titleEn: 'Debate: This House Believes That AI-Driven Empowerment Has Exacerbated Structural Inequalities for Youths in the Workforce',
    titleZh: 'AI赋能：缩小差距，还是加剧青年职场不平等？',
    descriptionEn: 'Artificial intelligence is rapidly transforming how young people learn, work and build their careers. This Grand Debate asks: is AI truly democratising opportunity, or deepening existing inequalities? Format: 3 vs 3, Asian/Australasian Debate Format, 60 minutes.',
    descriptionZh: '人工智能正迅速改变青年的学习、工作方式与职业发展。本场青年大辩论将探讨：AI究竟是在打破机会壁垒，还是正在形成新的数字鸿沟？辩论形式：三对三，亚洲/澳亚式辩论赛制，共60分钟。'
  }
];

export const GALLERY_SHOWCASE_HIGHLIGHT = {
  badgeEn: 'FORUM HIGHLIGHT',
  badgeZh: '今年论坛特色',
  titleEn: 'Gallery Showcase: Multi-Dimensional Exhibition Area',
  titleZh: '多元互动展区：探索更多机遇，连接青年力量',
  timeEn: '11:00am – 5:00pm (Open throughout the forum outside Auditorium 1)',
  timeZh: '上午11:00 – 下午5:00（礼堂外互动展区同步开放）',
  descriptionEn: 'The forum will be held in the auditorium, with a gallery showcase happening simultaneously outside, bringing together businesses, technology companies, and young entrepreneurs. The gallery showcase will feature Chinese companies based in Singapore as well as local businesses, offering opportunities for internships, employment, and career development. AI technology companies will showcase their latest products and innovations, and young entrepreneurs will set up booths to share their stories. From internships and career development to technological innovation and entrepreneurship, the gallery showcase will provide a platform for youths to explore opportunities and industries, and create valuable networks.',
  descriptionZh: '论坛将在礼堂内举行，礼堂外则设有丰富多元的互动展区，汇聚企业、科技与青年创业力量。展区将邀请在新加坡发展的中国企业及本地企业参与，带来实习、就业及职业发展机会。同时，AI科技企业将展示最新科技产品与创新应用，青年创业者也将设立展位分享创业故事。展区将为青年打造一个连接机遇、行业与人脉的平台。'
};

export const ABOUT_US_2026 = {
  en: {
    badge: 'ABOUT US',
    mainTitle: 'About Us',
    bcyfTitle: 'About Business China Youth Forum',
    bcyfDesc: 'The Business China Youth Forum (BCYF) is held annually in tandem with the FutureChina Global Forum (FCGF). With the motto "By Youth, For Youth," this forum is organised by a dedicated group of enthusiastic young individuals, who curate discussions and sharing sessions with industry experts and academia on trending topics relevant to youth. Since 2019, the hybrid event has attracted close to 3000 youth participants from all over the world.',
    bcTitle: 'About Business China',
    bcDesc: 'Launched in November 2007 by Founding Patron and Singapore\'s Founding Prime Minister, Mr Lee Kuan Yew, Business China aims to nurture a core pool of Singaporean bilingual and bicultural talents, and enterprises who can engage deeply in economic opportunities with China. Our work helps to foster mutual understanding, trust, and cooperation between Singapore and China, and deepen Singapore\'s role in bridging the world and China.'
  },
  zh: {
    badge: '关于我们',
    mainTitle: '关于我们',
    bcyfTitle: '关于通商中国青年论坛',
    bcyfDesc: '通商中国青年论坛（BCYF）每年与慧眼中国环球论坛（FCGF）同期举行。本着"由青年，为青年"的宗旨，此论坛由一群才华洋溢的青年负责筹划，针对当下青年关心的热点课题与行业专家及学者展开深入的讨论与分享。自2019年以来，此活动已吸引了来自世界各地近3000名青年参与。',
    bcTitle: '关于通商中国',
    bcDesc: '通商中国由创会赞助人新加坡建国总理李光耀先生在2007年11月启动，旨在凝聚一批核心的新加坡双语双文化人才和企业，作为推动与中国进行深层次经贸合作的中流砥柱。我们的活动项目致力于促进新加坡与中国人民之间的相互了解、信任和长期合作。'
  }
};

// =========================================================================
// OFFICIAL FINAL TIMELINE — Section 4 (Programme Synopsis)
// Replaces all draft timelines. 13 items total.
// =========================================================================
export const RECOMMENDED_FINAL_TIMELINE_2026: TimelineItem[] = [
  {
    id: 'item-1',
    time: '11:00',
    titleEn: 'Registration Commences',
    titleZh: '活动开始登记',
    type: 'registration'
  },
  {
    id: 'item-2',
    time: '11:00 – 17:00',
    titleEn: 'Gallery Showcase',
    titleZh: '企业机构展示',
    type: 'exhibition'
  },
  {
    id: 'item-3',
    time: '12:50',
    titleEn: 'Guests to be seated',
    titleZh: '宾客就座',
    type: 'admin'
  },
  {
    id: 'item-4',
    time: '13:00 – 13:05',
    titleEn: 'Opening of Forum',
    titleZh: '论坛正式开始',
    type: 'ceremony'
  },
  {
    id: 'item-5',
    time: '13:05 – 13:15',
    titleEn: 'Opening Remarks by Business China CEO (Ms Kwek Poh Heok)',
    titleZh: '通商中国总裁致开幕辞（郭碧叶女士）',
    type: 'keynote',
    speakerEn: 'Ms Kwek Poh Heok',
    speakerZh: '郭碧叶女士',
    speakerRoleEn: 'Chief Executive Officer, Business China',
    speakerRoleZh: '通商中国总裁',
    speakerPhoto: '/kwek-poh-heok.jpg'
  },
  {
    id: 'item-6',
    time: '13:15 – 13:20',
    titleEn: 'Launch Ceremony of China Ready Executive Programme',
    titleZh: '中国通高管项目启动仪式（通商中国与淡马锡理工学院合办）',
    type: 'ceremony'
  },
  {
    id: 'item-7',
    time: '13:20 – 13:30',
    titleEn: 'MOU Signing Ceremony',
    titleZh: '谅解备忘录签署仪式',
    type: 'ceremony'
  },
  {
    id: 'item-8',
    time: '13:30 – 14:15',
    titleEn: 'Fireside Chat with Mr Desmond Tan Kok Ming: Navigating the New Business Landscape and Way of Working',
    titleZh: '炉边对话：《与陈国明高级政务部长共探商业新格局与工作新范式》',
    type: 'session',
    isMajorSession: true,
    sessionNumber: 1,
    subtitleEn: 'Navigating the New Business Landscape and Way of Working',
    subtitleZh: '与陈国明高级政务部长共探商业新格局与工作新范式',
    descriptionEn: 'Technological disruption, demographic changes, and deeper regional connectivity are reshaping the way work is defined across Asia. For young individuals, this equates to entering a landscape where jobs are rapidly being redesigned. This fireside chat with SMS Desmond Tan will explore what this changing environment means for the next generation, and what questions young people should be asking as they prepare for the future.',
    descriptionZh: '本区域内的工作范式正深受技术变革、人口结构变化及区域互联互通深化等因素的影响而持续重塑。本次与总理公署高级政务部长陈国明先生的炉边对话，将聚焦这一变动环境对下一代所带来的启示，并探讨青年在面向未来时应提出哪些关键问题。',
    speakerEn: 'SMS Desmond Tan Kok Ming',
    speakerZh: '陈国明高级政务部长',
    speakerRoleEn: 'Guest of Honour & Fireside Chat Speaker',
    speakerRoleZh: '主礼嘉宾兼炉边对话演讲嘉宾',
    speakerPhoto: '/desmond-tan-headshot.jpg',
    moderatorPending: true
  },
  {
    id: 'item-9',
    time: '14:15 – 15:15',
    titleEn: 'Panel: Understanding How Emerging Frontiers in Technology Are Reshaping Industry and Creating New Possibilities',
    titleZh: '分论坛：《智能时代的“工作革命”：价值重构与青年机遇》',
    type: 'session',
    isMajorSession: true,
    sessionNumber: 2,
    subtitleEn: 'Understanding How Emerging Frontiers in Technology Are Reshaping Industry',
    subtitleZh: '智能时代的"工作革命"：价值重构与青年机遇',
    descriptionEn: 'Emerging technologies and their associated industries are often indicative of future economic transformations. This panel explores three transformations — Future Media, Future Health and Future Connectivity — through cross-industry case studies, helping youths identify transferable competencies and adaptive mindsets for future-ready careers.',
    descriptionZh: '新兴科技及相关产业往往是经济模式转型的风向指标。本论坛将围绕未来媒体、未来健康与未来互联三大转型方向，通过跨行业案例研讨，帮助青年提炼可迁移的核心职业能力。',
    panelistsPending: true
  },
  {
    id: 'item-10',
    time: '15:15 – 15:30',
    titleEn: 'Break',
    titleZh: '中场休息',
    type: 'break'
  },
  {
    id: 'item-11',
    time: '15:30 – 16:30',
    titleEn: 'Debate: This House Believes That AI-Driven Empowerment Has Exacerbated Structural Inequalities for Youths in the Workforce',
    titleZh: '辩论环节：《人工智能：缩小差距，还是加剧青年职场不平等？》',
    type: 'session',
    isMajorSession: true,
    sessionNumber: 3,
    subtitleEn: 'This House Believes That AI-Driven Empowerment Has Exacerbated Structural Inequalities for Youths in the Workforce',
    subtitleZh: 'AI赋能：缩小差距，还是加剧青年职场不平等？',
    descriptionEn: 'Artificial intelligence is rapidly transforming how young people learn, work and build their careers. This Grand Debate asks: is AI truly democratising opportunity, or deepening existing inequalities? Format: 3 vs 3, Asian/Australasian Debate Format, 60 minutes.',
    descriptionZh: '人工智能正迅速改变青年的学习、工作方式与职业发展。本场青年大辩论将探讨：AI究竟是在打破机会壁垒，还是正在形成新的数字鸿沟？辩论形式：三对三，亚洲/澳亚式辩论赛制，共60分钟。',
    panelistsPending: true
  },
  {
    id: 'item-12',
    time: '16:30 – 16:40',
    titleEn: 'Closing Address by BCYF Chairpersons',
    titleZh: '通商中国筹委会主席致闭幕辞',
    type: 'ceremony'
  },
  {
    id: 'item-13',
    time: '16:40 – 16:50',
    titleEn: 'BCYF Survey / Group Photo',
    titleZh: '论坛反馈 / 集体合影',
    type: 'admin'
  }
];

export const WATCH_2026 = {
  featured: {
    year: '2025',
    titleEn: 'BCYF 2025 Highlight Video',
    titleZh: '2025年通商中国青年论坛精彩回顾',
    youtubeUrl: 'https://youtu.be/tjdejMr7g1M',
    embedUrl: 'https://www.youtube-nocookie.com/embed/tjdejMr7g1M'
  },
  pastEditions: [
    {
      year: '2024',
      titleEn: 'BCYF 2024 Highlight Video',
      titleZh: '2024年通商中国青年论坛精彩回顾',
      youtubeUrl: 'https://youtu.be/6qTRDlwWaRY',
      embedUrl: 'https://www.youtube-nocookie.com/embed/6qTRDlwWaRY'
    },
    {
      year: '2023',
      titleEn: 'BCYF 2023 Highlight Video',
      titleZh: '2023年通商中国青年论坛精彩回顾',
      youtubeUrl: 'https://www.youtube.com/watch?v=e0HXuVA1Y_s',
      embedUrl: 'https://www.youtube-nocookie.com/embed/e0HXuVA1Y_s'
    },
    {
      year: '2022',
      titleEn: 'BCYF 2022 Highlight Video',
      titleZh: '2022年通商中国青年论坛精彩回顾',
      youtubeUrl: 'https://www.youtube.com/watch?v=7yJFyYCgUS0',
      embedUrl: 'https://www.youtube-nocookie.com/embed/7yJFyYCgUS0'
    }
  ]
};

export const GALLERY_PHOTOS_2025: GalleryPhoto[] = [
  "BCYF_0040.jpg", "BCYF_0151.jpg", "BCYF_0240.jpg", "BCYF_0281.jpg", "BCYF_0285.jpg",
  "BCYF_0373.jpg", "BCYF_0375.jpg", "BCYF_0406.jpg", "BCYF_0431.jpg", "BCYF_0483.jpg",
  "BCYF_0529.jpg", "SMP02423.jpg", "SMP02457.jpg", "SMP02489.jpg", "SMP02502.jpg",
  "SMP02610.jpg", "SMP02615.jpg", "SMP02629.jpg", "SMP02659.jpg", "SMP02661.jpg",
  "SMP02683.jpg", "SMP02742.jpg", "SMP02785.jpg", "SMP02814.jpg", "SMP02861.jpg",
  "SMP02905.jpg", "SMP02911.jpg", "SMP02920.jpg", "SMP02924.jpg", "SMP03000.jpg",
  "SMP03021.jpg", "SMP03028.jpg", "SMP03058.jpg", "SMP03061.jpg"
].map((filename, i) => ({
  id: `gallery-${i + 1}`,
  src: `/gallery/${filename}`,
  thumb: `/gallery/thumb_${filename}`,
  alt: `Business China Youth Forum Moment ${i + 1}`
}));

// Kept for backward compatibility or empty skeletons
export const SPEAKERS: Speaker[] = [];
export const AGENDA_ITEMS: AgendaItem[] = [];
export const FAQ_ITEMS: FAQItem[] = [];
export const PARTNERS: Partner[] = [];

export const TRANSLATIONS = {
  en: {
    navHome: 'Home',
    navTheme: 'Theme',
    navHighlights: 'Highlights',
    navAgenda: 'Agenda',
    navAbout: 'About Us',
    navWatch: 'Watch',
    navGallery: 'Gallery',
    navPartners: 'Partners',
    navYouthForum: 'Youth Forum',
    navFcgf: 'FCGF',
    
    registerBtn: 'Register Now',
    registrationPending: 'Registration link pending confirmation. Opening soon!',
    registerModalTitle: 'Delegate Registration',
    registerModalPendingDesc: 'Official registration for BCYF 2026 will open shortly. In the interim, please join our priority mailing list via the sign-up form to register your interest and receive first-hand updates on ticketing and announcements.',
    openInterimFormBtn: 'Open Sign-Up Form',
    interimFormTag: 'Interim Priority Sign-Up',
    scanQrNote: 'Or scan the QR code to sign up directly on mobile:',
    closeBtn: 'Close',

    highlightsBadge: 'HIGHLIGHTS',
    gohBadge: 'Guest-of-Honour',
    ceoBadge: 'Business China CEO',
    readFullBio: 'Read Full Bio',
    closeBio: 'Close',
    speakersBadge: 'SPEAKERS',
    speakersTbc: 'Speaker Shortlist (Pending Final Confirmation)',
    pendingPhoto: 'PHOTO PENDING',
    pendingName: 'Name to be announced',
    pendingTitle: 'Title / Organisation to be confirmed',
    
    agendaBadge: 'AGENDA',
    agendaSubtitle: 'Programme layout for BCYF 2026. Official session timings and opening run-of-show are being finalized.',
    agendaTimingPending: 'Timing TBC',
    agendaSpeakerChipPending: 'Speaker / Moderator (TBC)',
    agendaFootnote: '*Programme subjected to changes.',
    galleryShowcaseTag: 'Exhibition Area',

    watchBadge: 'WATCH',
    watchSubtitle: 'Watch highlights from previous editions of the Business China Youth Forum.',
    featuredVideo: 'Featured Video',
    pastVideos: 'Past Editions',

    galleryBadge: '2025 PHOTO GALLERY',
    gallerySubtitle: 'Photos from the previous forum edition (Publicity team will upload 2026 photos after event).',
    
    partnersBadge: 'Partners & Sponsors',
    strategicPartners: 'Strategic Partners',
    singaporePartners: 'Singapore Partners',
    chinaPartners: 'China Partners',
    sponsors: 'Sponsors',
    hostPartnerNote: 'Temasek Polytechnic is confirmed as host/partner for BCYF 2026.',
    logoPending: 'LOGO PENDING',
    
    footerCopyright: '© 2026 Business China. All rights reserved. Business China (通商中国) is a non-profit organization.',
    footerSlogan: 'Nurturing bilingual and bicultural leadership for a connected world.'
  },
  zh: {
    navHome: '首页',
    navTheme: '论坛主题',
    navHighlights: '亮点聚焦',
    navAgenda: '论坛议程',
    navAbout: '关于我们',
    navWatch: '精彩回顾',
    navGallery: '精彩照片',
    navPartners: '合作伙伴',
    navYouthForum: '青年论坛',
    navFcgf: 'FCGF',
    
    registerBtn: '立即报名',
    registrationPending: '报名通道即将开放，敬请期待！',
    registerModalTitle: '参会代表报名',
    registerModalPendingDesc: '2026年通商中国青年论坛官方报名通道即将正式开启。在此期间，欢迎通过预先登记表格加入优先通讯录，第一时间获取票务发售及重磅嘉宾阵容的最新资讯。',
    openInterimFormBtn: '前往登记表格',
    interimFormTag: '预先意向登记',
    scanQrNote: '或使用手机扫描二维码直接登记：',
    closeBtn: '关闭',

    highlightsBadge: '亮点聚焦',
    gohBadge: '主礼嘉宾',
    ceoBadge: '通商中国总裁',
    readFullBio: '查看完整履历',
    closeBio: '关闭',
    speakersBadge: '演讲嘉宾',
    speakersTbc: '演讲嘉宾阵容（待最终确认）',
    pendingPhoto: '照片待更新',
    pendingName: '嘉宾姓名待公布',
    pendingTitle: '职务与机构待确认',
    
    agendaBadge: '论坛议程',
    agendaSubtitle: '2026年通商中国青年论坛议程架构。详细时间节点与开幕流程正进一步核实中。',
    agendaTimingPending: '时间待定',
    agendaSpeakerChipPending: '嘉宾 / 主持人（待定）',
    agendaFootnote: '*议程可能变动，以现场实际安排为准。',
    galleryShowcaseTag: '互动展区',

    watchBadge: '精彩回顾',
    watchSubtitle: '观看往届通商中国青年论坛的高光精彩时刻。',
    featuredVideo: '精选回顾视频',
    pastVideos: '往届回顾',

    galleryBadge: '2025 精彩照片集锦',
    gallerySubtitle: '往届论坛活动精彩瞬间（2026年现场照片将在活动后由宣传组更新）。',
    
    partnersBadge: '合作伙伴与赞助机构',
    strategicPartners: '战略合作伙伴',
    singaporePartners: '新加坡合作伙伴',
    chinaPartners: '中国合作伙伴',
    sponsors: '赞助机构',
    hostPartnerNote: '淡马锡理工学院为2026年通商中国青年论坛官方场地合作方。',
    logoPending: '标志待更新',
    
    footerCopyright: '© 2026 通商中国。版权所有。通商中国（Business China）为非营利机构。',
    footerSlogan: '架设双语双文化桥梁，培育连接全球的杰出领袖。'
  }
};
